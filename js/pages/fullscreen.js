/* ============================================
   OAN — Fullscreen Media Viewer (Figma 1332:84797)
   ============================================ */

import { pauseBGM, playBGM, isBGMPlaying } from '../utils/audio.js';

export async function renderFullscreen(container) {
  // Pause BGM to give full priority to trailer audio
  const wasPlayingBGM = isBGMPlaying();
  pauseBGM();

  container.innerHTML = `
    <div class="page-fullscreen figma-fullscreen-overlay" data-node-id="1332:84797">
      <div class="fullscreen-video-wrapper">
        <video class="fullscreen-video-player" id="fullscreen-video" autoplay controls playsinline poster="./assets/scene-explore-ghost.png">
          <source src="./assets/official-trailer.mp4" type="video/mp4">
          <source src="./assets/investigation-video.mp4" type="video/mp4">
          <source src="./assets/scene-explore.mp4" type="video/mp4">
        </video>
      </div>

      <!-- Close / Cancel Button (707:1560) -->
      <button class="fullscreen-close-btn" id="btn-close-fullscreen" aria-label="Đóng toàn màn hình" type="button">
        <img src="./assets/16a6446e90ff221cf7fbf200555b281763e34d43.svg" alt="Đóng" class="cancel-icon-img" />
      </button>
    </div>
  `;

  const video = container.querySelector('#fullscreen-video');
  const closeBtn = container.querySelector('#btn-close-fullscreen');

  if (video) {
    video.currentTime = 0;
    video.muted = false;
    video.play().catch(() => {
      // If autoplay with sound is blocked by browser policy, try muted
      video.muted = true;
      video.play().catch(e => console.log('Fullscreen video autoplay blocked:', e));
    });
  }

  const handleClose = () => {
    if (video) {
      video.pause();
    }
    // Resume BGM when exiting fullscreen
    if (wasPlayingBGM) {
      playBGM();
    }
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
