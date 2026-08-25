/* ============================================
   OAN Horror Game — Global Background Audio & SFX Manager
   ============================================ */

let bgmAudio = null;
let transitionSFX = null;
let clickSFX = null;
let isAudioMuted = false;
let hasUserInteracted = false;
let currentRoute = 'intro';
let isFirstRoute = true;
let isClickAttached = false;

const SILENT_ROUTES = ['intro', 'mail-confirm', 'fullscreen'];

export function initBGM() {
  if (bgmAudio) return bgmAudio;

  bgmAudio = new Audio('./assets/bgm-home.mp3');
  bgmAudio.loop = true;
  bgmAudio.volume = 0.15; // Soft gentle ambient horror volume as requested
  bgmAudio.preload = 'auto';

  // Check saved mute preference specifically for BGM
  const savedState = localStorage.getItem('oan_bgm_muted');
  if (savedState === 'true') {
    isAudioMuted = true;
    bgmAudio.muted = true;
  }

  // Global unlock for BGM on first user interaction
  const unlockAudio = () => {
    hasUserInteracted = true;
    if (!SILENT_ROUTES.includes(currentRoute) && !isAudioMuted && bgmAudio && bgmAudio.paused) {
      bgmAudio.play().then(() => {
        updateSoundButtonsUI(true);
      }).catch(err => console.log('BGM unlock catch:', err));
    }
  };

  window.addEventListener('click', unlockAudio);
  window.addEventListener('keydown', unlockAudio);
  window.addEventListener('touchstart', unlockAudio);

  return bgmAudio;
}

// Immediate SFX Preloader & Global Interaction Listener (Active immediately on page enter)
export function initSFX() {
  if (!transitionSFX) {
    try {
      transitionSFX = new Audio('./assets/page-transition-impact.wav');
      transitionSFX.volume = 0.45;
      transitionSFX.preload = 'auto';
    } catch (e) {}
  }

  if (!clickSFX) {
    try {
      clickSFX = new Audio('./assets/button-click.mp3');
      clickSFX.volume = 0.5;
      clickSFX.preload = 'auto';
    } catch (e) {}
  }

  // Global click SFX on all buttons & interactive controls
  if (!isClickAttached) {
    isClickAttached = true;
    document.addEventListener('click', (e) => {
      const clickable = e.target.closest('button, a, .btn, .nav-item, .nav-link, .char-card-interactive-item, .figma-charvoice-box, .figma-char-card-item, .mechanic-card-item, .dossier-tab-btn, .outfit-tab-btn, .thumb-btn-figma, .gallery-thumb-card, .explore-horror-card, [role="button"], [data-target], .sound-toggle, #sound-btn, .wanted-board-cancel-btn, .wanted-board-hsbtn-close, .faq-question-btn, .faq-item, .btn-trailer-primary, .btn-trailer-share, input[type="submit"], input[type="button"]');
      if (clickable) {
        playButtonClickSFX();
      }
    }, { capture: true, passive: true });
  }
}

export function playButtonClickSFX() {
  try {
    if (!clickSFX) {
      clickSFX = new Audio('./assets/button-click.mp3');
      clickSFX.volume = 0.5;
      clickSFX.preload = 'auto';
    }
    // Instant playback with cloneNode so rapid clicking never lags or cuts off
    const sound = clickSFX.cloneNode();
    sound.volume = 0.5;
    sound.play().catch(() => {});
  } catch (e) {
    console.log('Click SFX error:', e);
  }
}

export function playPageTransitionSFX() {
  try {
    if (!transitionSFX) {
      transitionSFX = new Audio('./assets/page-transition-impact.wav');
      transitionSFX.volume = 0.45;
      transitionSFX.preload = 'auto';
    }
    const sound = transitionSFX.cloneNode();
    sound.volume = 0.45;
    sound.play().catch(() => {});
  } catch (e) {
    console.log('Transition SFX error:', e);
  }
}

export function handleRouteBGM(hash) {
  const previousRoute = currentRoute;
  currentRoute = hash;

  if (!bgmAudio) {
    initBGM();
  }

  // Play horror impact SFX on page transition (when route actually changes)
  if (!isFirstRoute && previousRoute !== hash) {
    playPageTransitionSFX();
  }
  isFirstRoute = false;

  // If on age verification/intro or silent pages -> Stop music completely
  if (SILENT_ROUTES.includes(hash)) {
    if (bgmAudio && !bgmAudio.paused) {
      bgmAudio.pause();
    }
    updateSoundButtonsUI(false);
    return;
  }

  // On Home or other main game pages -> Start music if not muted
  const savedState = localStorage.getItem('oan_bgm_muted');
  if (savedState === 'true') {
    isAudioMuted = true;
    bgmAudio.muted = true;
    bgmAudio.pause();
    updateSoundButtonsUI(false);
    return;
  }

  isAudioMuted = false;
  bgmAudio.muted = false;
  bgmAudio.play().then(() => {
    updateSoundButtonsUI(true);
  }).catch(() => {
    // Autoplay blocked: will unlock upon user's first click
    updateSoundButtonsUI(false);
  });
}

export function playBGM() {
  if (!bgmAudio) initBGM();
  if (!SILENT_ROUTES.includes(currentRoute)) {
    isAudioMuted = false;
    bgmAudio.muted = false;
    bgmAudio.play().then(() => {
      localStorage.setItem('oan_bgm_muted', 'false');
      updateSoundButtonsUI(true);
    }).catch(e => console.log('play error:', e));
  }
}

export function pauseBGM() {
  if (bgmAudio) {
    bgmAudio.pause();
    updateSoundButtonsUI(false);
  }
}

export function toggleBGM() {
  if (!bgmAudio) {
    initBGM();
  }

  if (isAudioMuted || bgmAudio.paused) {
    isAudioMuted = false;
    bgmAudio.muted = false;
    bgmAudio.play().then(() => {
      localStorage.setItem('oan_bgm_muted', 'false');
      updateSoundButtonsUI(true);
    }).catch(e => console.log('Play error:', e));
  } else {
    isAudioMuted = true;
    bgmAudio.pause();
    localStorage.setItem('oan_bgm_muted', 'true');
    updateSoundButtonsUI(false);
  }

  return !isAudioMuted;
}

export function isBGMPlaying() {
  return bgmAudio && !bgmAudio.paused && !isAudioMuted && !SILENT_ROUTES.includes(currentRoute);
}

export function updateSoundButtonsUI(isPlaying) {
  const soundBtns = document.querySelectorAll('.sound-toggle, #sound-btn, #sound-btn-mobile');
  soundBtns.forEach(btn => {
    const textSpan = btn.querySelector('span');
    if (isPlaying) {
      btn.classList.remove('sound-muted');
      btn.classList.add('sound-playing');
      btn.setAttribute('title', 'Tắt âm lượng');
      if (textSpan) textSpan.textContent = 'ÂM THANH: BẬT';
    } else {
      btn.classList.add('sound-muted');
      btn.classList.remove('sound-playing');
      btn.setAttribute('title', 'Bật âm lượng');
      if (textSpan) textSpan.textContent = 'ÂM THANH: TẮT';
    }
  });
}

