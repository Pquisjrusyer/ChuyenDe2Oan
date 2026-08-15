/* ============================================
   OAN Horror Game — Global Background Audio Manager
   ============================================ */

let bgmAudio = null;
let isAudioMuted = false;
let hasUserInteracted = false;

export function initBGM() {
  if (bgmAudio) return bgmAudio;

  bgmAudio = new Audio('./assets/bgm-home.mp3');
  bgmAudio.loop = true;
  bgmAudio.volume = 0.15; // Soft gentle ambient horror volume as requested
  bgmAudio.preload = 'auto';

  // Check saved mute preference
  const savedState = localStorage.getItem('oan_bgm_muted');
  if (savedState === 'true') {
    isAudioMuted = true;
    bgmAudio.muted = true;
  }

  // Attempt autoplay
  const tryPlay = () => {
    if (!isAudioMuted && bgmAudio.paused) {
      bgmAudio.play().then(() => {
        updateSoundButtonsUI(true);
      }).catch(() => {
        updateSoundButtonsUI(false);
      });
    }
  };

  tryPlay();

  // If browser blocks autoplay, unlock on first interaction
  const unlockAudio = () => {
    if (!hasUserInteracted) {
      hasUserInteracted = true;
      if (!isAudioMuted && bgmAudio.paused) {
        bgmAudio.play().then(() => {
          updateSoundButtonsUI(true);
        }).catch(err => console.log('BGM play catch:', err));
      }
    }
  };

  window.addEventListener('click', unlockAudio, { once: true });
  window.addEventListener('keydown', unlockAudio, { once: true });
  window.addEventListener('touchstart', unlockAudio, { once: true });

  return bgmAudio;
}

export function toggleBGM() {
  if (!bgmAudio) {
    initBGM();
  }

  if (isAudioMuted || bgmAudio.paused) {
    isAudioMuted = false;
    bgmAudio.muted = false;
    bgmAudio.play().catch(e => console.log('Play error:', e));
    localStorage.setItem('oan_bgm_muted', 'false');
    updateSoundButtonsUI(true);
  } else {
    isAudioMuted = true;
    bgmAudio.pause();
    localStorage.setItem('oan_bgm_muted', 'true');
    updateSoundButtonsUI(false);
  }

  return !isAudioMuted;
}

export function isBGMPlaying() {
  return bgmAudio && !bgmAudio.paused && !isAudioMuted;
}

export function updateSoundButtonsUI(isPlaying) {
  const soundBtns = document.querySelectorAll('.sound-toggle, #sound-btn');
  soundBtns.forEach(btn => {
    if (isPlaying) {
      btn.classList.remove('sound-muted');
      btn.classList.add('sound-playing');
      btn.setAttribute('title', 'Tắt âm lượng');
    } else {
      btn.classList.add('sound-muted');
      btn.classList.remove('sound-playing');
      btn.setAttribute('title', 'Bật âm lượng');
    }
  });
}
