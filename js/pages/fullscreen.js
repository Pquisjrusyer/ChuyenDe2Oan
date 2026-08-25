/* ============================================
   OAN — Fullscreen Media Viewer (Figma 1332:84797)
   ============================================ */

import { pauseBGMForVideo, restoreBGMAfterVideo } from '../utils/audio.js';

export async function renderFullscreen(container) {
  // Pause BGM to give full priority to trailer audio
  const wasPlayingBGM = pauseBGMForVideo();

  container.innerHTML = `
    <div class="page-fullscreen figma-fullscreen-overlay" data-node-id="1332:84797">
      <div class="fullscreen-video-wrapper">
        <video class="fullscreen-video-player" id="fullscreen-video" controls playsinline preload="auto" poster="./assets/scene-explore-ghost.png" src="./assets/official-trailer.mp4"></video>
        <button class="modal-unmute-prompt-btn" id="fullscreen-unmute-btn" type="button" style="display: none;">
          <span class="unmute-icon">🔊</span>
          <span class="unmute-text">BẬT ÂM THANH</span>
        </button>
      </div>

      <!-- Close / Cancel Button (707:1560) -->
      <button class="fullscreen-close-btn" id="btn-close-fullscreen" aria-label="Đóng toàn màn hình" type="button">
        <img src="./assets/16a6446e90ff221cf7fbf200555b281763e34d43.svg" alt="Đóng" class="cancel-icon-img" />
      </button>
    </div>
  `;

  const video = container.querySelector('#fullscreen-video');
  const closeBtn = container.querySelector('#btn-close-fullscreen');
  const unmuteBtn = container.querySelector('#fullscreen-unmute-btn');

  if (video) {
    video.currentTime = 0;
    video.muted = false;
    video.defaultMuted = false;
    video.volume = 1.0;

    video.addEventListener('play', () => pauseBGMForVideo());
    video.addEventListener('playing', () => pauseBGMForVideo());

    video.addEventListener('volumechange', () => {
      if (!video.muted && video.volume > 0) {
        pauseBGMForVideo();
        if (unmuteBtn) unmuteBtn.style.display = 'none';
      }
    });

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        if (video.muted && unmuteBtn) {
          unmuteBtn.style.display = 'flex';
        }
      }).catch((err) => {
        console.log('Fullscreen video autoplay with audio blocked by policy:', err);
        video.muted = true;
        video.play().then(() => {
          if (unmuteBtn) unmuteBtn.style.display = 'flex';
        }).catch(() => {});
      });
    }

    if (unmuteBtn) {
      unmuteBtn.addEventListener('click', (ev) => {
        ev.stopPropagation();
        video.muted = false;
        video.volume = 1.0;
        video.play().catch(() => {});
        unmuteBtn.style.display = 'none';
      });
    }
  }

  const handleClose = () => {
    if (video) {
      video.pause();
      video.src = '';
      video.load();
    }
    // Resume BGM ONLY if it was active before entering fullscreen
    restoreBGMAfterVideo(wasPlayingBGM);
    window.location.hash = 'trailer';
  };

  closeBtn?.addEventListener('click', handleClose);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };
  window.addEventListener('keydown', handleKeyDown, { once: true });
}

