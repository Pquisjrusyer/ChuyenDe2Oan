/* ============================================
   OAN Horror Game — Navbar Component (Figma 1363:86771)
   ============================================ */

import { toggleBGM, isBGMPlaying, updateSoundButtonsUI } from '../utils/audio.js';
import { getLenis } from '../utils/smooth-scroll.js';

export function renderNavbar(container, currentHash) {
  const showNavbar = !['intro', 'mail-confirm', 'fullscreen'].includes(currentHash);
  
  if (!showNavbar) {
    container.innerHTML = '';
    container.style.display = 'none';
    return;
  }

  container.style.display = '';

  container.innerHTML = `
    <header class="figma-navbar" id="main-navbar" data-node-id="1363:86771">
      <!-- Navbar Background (imgMenuNavbar) -->
      <div class="figma-navbar-bg">
        <img src="./assets/c73dce09bceb4417c3bbff6a505e25fe4de7c8b2.png" alt="" class="navbar-bg-img" />
      </div>

      <div class="figma-navbar-inner">
        <!-- Brand / Logo & Navigation Links (782:1403) -->
        <div class="navbar-left-group">
          <a class="navbar-brand-logo" href="#home" title="OÁN — Nhà Họ Hứa" data-node-id="I1363:86771;719:1288">
            <img src="./assets/239dc59dcfee9a7ff13a48bcacb475e04a11730c.svg" alt="OÁN" class="brand-logo-svg" />
          </a>

          <nav class="navbar-nav-links" id="nav-links-menu" data-node-id="I1363:86771;782:1711">
            <a class="nav-item ${currentHash === 'home' ? 'active' : ''}" href="#home" data-node-id="I1363:86771;782:1711;987:73063">TRANG CHỦ</a>
            <a class="nav-item ${currentHash === 'trailer' ? 'active' : ''}" href="#trailer" data-node-id="I1363:86771;782:1711;987:73065">TRAILER</a>
            
            <!-- Dropdown Menu: THÔNG TIN (cốt truyện, gameplay, nhân vật, điều tra, giải đố, thu thập) -->
            <div class="nav-dropdown-wrapper" id="navInfoDropdownWrapper">
              <a class="nav-item nav-dropdown-trigger ${['info', 'storyline', 'gameplay', 'character', 'investigation', 'puzzle', 'collection'].includes(currentHash) ? 'active' : ''}" href="#info" data-node-id="I1363:86771;782:1711;987:73067">
                <span>THÔNG TIN</span>
                <svg class="nav-dropdown-caret" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
              <div class="nav-sub-dropdown-menu" id="navInfoSubMenu">
                <a class="nav-sub-item ${currentHash === 'storyline' ? 'active' : ''}" href="#storyline">
                  <div class="nav-sub-item-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d9b74c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                  </div>
                  <span class="sub-item-text">Cốt truyện</span>
                </a>
                <a class="nav-sub-item ${currentHash === 'gameplay' ? 'active' : ''}" href="#gameplay">
                  <div class="nav-sub-item-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d9b74c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2" y="6" width="20" height="12" rx="6"></rect>
                      <line x1="6" y1="12" x2="10" y2="12"></line>
                      <line x1="8" y1="10" x2="8" y2="14"></line>
                      <line x1="15" y1="13" x2="15.01" y2="13"></line>
                      <line x1="18" y1="11" x2="18.01" y2="11"></line>
                    </svg>
                  </div>
                  <span class="sub-item-text">Gameplay</span>
                </a>
                <a class="nav-sub-item ${currentHash === 'character' ? 'active' : ''}" href="#character">
                  <div class="nav-sub-item-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d9b74c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <span class="sub-item-text">Nhân vật</span>
                </a>
                <a class="nav-sub-item ${currentHash === 'investigation' ? 'active' : ''}" href="#investigation">
                  <div class="nav-sub-item-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d9b74c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </div>
                  <span class="sub-item-text">Điều tra</span>
                </a>
                <a class="nav-sub-item ${currentHash === 'puzzle' ? 'active' : ''}" href="#puzzle">
                  <div class="nav-sub-item-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d9b74c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 2l-2 2m-1.5 1.5L14 9l-3-3 2-2 3.5 1.5 3-3.5L21 2z"></path>
                      <path d="M15.5 15.5L19 19m-4.5-4.5l-2-2"></path>
                      <circle cx="7.5" cy="16.5" r="5.5"></circle>
                    </svg>
                  </div>
                  <span class="sub-item-text">Giải đố</span>
                </a>
                <a class="nav-sub-item ${currentHash === 'collection' ? 'active' : ''}" href="#collection">
                  <div class="nav-sub-item-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d9b74c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="21 8 21 21 3 21 3 8"></polyline>
                      <rect x="1" y="3" width="22" height="5"></rect>
                      <line x1="10" y1="12" x2="14" y2="12"></line>
                    </svg>
                  </div>
                  <span class="sub-item-text">Thu thập</span>
                </a>
              </div>
            </div>

            <a class="nav-item ${currentHash === 'community' ? 'active' : ''}" href="#community" data-node-id="I1363:86771;782:1711;987:73069">CỘNG ĐỒNG</a>
            <a class="nav-item ${currentHash === 'faq' ? 'active' : ''}" href="#faq" data-node-id="I1363:86771;782:1711;987:73071">FAQ</a>
          </nav>
        </div>

        <!-- Right Side: Sound, Contact, Language, Auth Buttons (782:1310 & 906:1781) -->
        <div class="navbar-right-group">
          <div class="navbar-utils" data-node-id="I1363:86771;719:1388">
            <!-- Speaker Sound toggle (719:1499) -->
            <button class="util-btn sound-toggle" id="sound-btn" title="Âm thanh game" data-node-id="719:1499">
              <img src="./assets/5280884719d4359c523e1bb78c45cf2c8b6ffab0.svg" alt="Sound" class="util-icon" />
            </button>

            <!-- Liên Hệ (719:998) -->
            <a href="#faq" class="util-link" data-node-id="I1363:86771;719:998">Liên Hệ</a>

            <!-- Language Dropdown (719:1378) -->
            <div class="lang-dropdown-wrapper">
              <button class="util-btn lang-btn" id="lang-toggle-btn" data-node-id="I1363:86771;719:1378">
                <span>NGÔN NGỮ</span>
                <img src="./assets/28d4a7f33388d842d3f8f50bf4fbcbf5af46e4b4.svg" alt="▼" class="lang-arrow" />
              </button>
              <div class="lang-dropdown-menu" id="lang-menu" data-node-id="I1363:86771;719:1378;719:1359">
                <a href="#home" class="lang-opt">English</a>
                <a href="#home" class="lang-opt active">Tiếng Việt</a>
              </div>
            </div>
          </div>

          <!-- Auth CTA Buttons (906:1781) -->
          <div class="navbar-auth-buttons" data-node-id="I1363:86771;906:1781">
            <!-- Button 1: ĐĂNG KÝ / USER PROFILE (906:1714) -->
            ${(() => {
              let user = null;
              try {
                const raw = localStorage.getItem('OAN_LOGGED_IN_USER');
                if (raw) user = JSON.parse(raw);
              } catch (e) {}

              if (user && user.username) {
                return `
                  <div class="nav-user-dropdown-wrapper" id="navUserDropdownWrapper">
                    <button type="button" class="nav-user-profile-btn" id="navUserBtn" aria-label="Menu người dùng ${user.username}" title="Tài khoản: ${user.username}">
                      <img src="./assets/982de4bcd6a16630803542fbfab99bbf3ff3563d.png" alt="" class="nav-user-bg-img" />
                      <div class="nav-user-btn-content">
                        <div class="nav-user-avatar-gold">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d9b74c" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                        </div>
                        <span class="nav-user-name">${user.username.toUpperCase()}</span>
                        <svg class="nav-user-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d9b74c" stroke-width="2.5">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </button>

                    <div class="nav-user-dropdown-menu" id="navUserMenu">
                      <div class="nav-user-menu-header">
                        <p class="nav-user-menu-title">${user.username}</p>
                        <p class="nav-user-menu-email">${user.email || 'Lữ khách Nhà Hứa'}</p>
                      </div>
                      <div class="nav-user-menu-divider"></div>
                      <a href="#character" class="nav-user-menu-item" id="navItemProfile">
                        <div class="nav-sub-item-icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d9b74c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                        </div>
                        <span>Hồ sơ nhân vật</span>
                      </a>
                      <a href="#collection" class="nav-user-menu-item" id="navItemCollection">
                        <div class="nav-sub-item-icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d9b74c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="21 8 21 21 3 21 3 8"></polyline>
                            <rect x="1" y="3" width="22" height="5"></rect>
                            <line x1="10" y1="12" x2="14" y2="12"></line>
                          </svg>
                        </div>
                        <span>Bộ sưu tập manh mối</span>
                      </a>
                      <div class="nav-user-menu-divider"></div>
                      <button type="button" class="nav-user-menu-item nav-user-logout" id="navItemLogout">
                        <div class="nav-sub-item-icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff4d4d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                            <polyline points="16 17 21 12 16 7"></polyline>
                            <line x1="21" y1="12" x2="9" y2="12"></line>
                          </svg>
                        </div>
                        <span>Đăng xuất</span>
                      </button>
                    </div>
                  </div>
                `;
              }

              return `
                <a href="#register" class="btn-nav-register-figma" data-node-id="I1363:86771;906:1727;906:1714">
                  <img src="./assets/982de4bcd6a16630803542fbfab99bbf3ff3563d.png" alt="" class="nav-register-bg-img" />
                  <span class="nav-register-caption">ĐĂNG KÝ</span>
                </a>
              `;
            })()}

            <!-- Button 2: TẢI XUỐNG (906:1739 with Multi-frame parts & Glow) -->
            <a href="#download" class="btn-nav-download-figma" data-node-id="I1363:86771;906:1739">
              <div class="nav-download-frame-parts" data-node-id="906:1550">
                <div class="nav-fp1"><img src="./assets/105ebc7cda031fdb485695b18a341cec252f1d95.png" alt="" /></div>
                <div class="nav-fp2" style="background-image: url('./assets/a1b7e3991a46b5a64f1f7dac3536b09a9e87a8ba.png');"></div>
                <div class="nav-fp3"><img src="./assets/0d6b9966ff2827a216126f97de3fae66e8b0f69d.png" alt="" /></div>
                <div class="nav-fp4" style="background-image: url('./assets/a52a7c4b8dc8beffb2f5577f0501b16b1cfce647.png');"></div>
                <div class="nav-fp5"><img src="./assets/18c99e59fbe5fb1f1a0cf0ff28f9c309e0b87822.png" alt="" /></div>
              </div>
              <div class="nav-download-inner-bg">
                <img src="./assets/ea8df93482c54ccfe7b61d0a530fea954eb54fd3.png" class="nav-download-rect-texture" alt="" />
              </div>
              <div class="nav-download-content">
                <span class="nav-download-caption">TẢI XUỐNG</span>
              </div>
              <div class="nav-download-glow-3"></div>
              <div class="nav-download-glow-2"></div>
              <div class="nav-download-glow-1"></div>
            </a>

            <!-- Mobile Drawer Toggle button -->
            <button class="nav-mobile-toggle" id="nav-mobile-btn" aria-label="Toggle Menu">
              ☰
            </button>
          </div>
        </div>
      </div>
    </header>
  `;

  // Scroll transparency
  const navbar = document.getElementById('main-navbar');
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  };
  window.removeEventListener('scroll', handleScroll);
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // Mobile menu toggle
  const mobileBtn = document.getElementById('nav-mobile-btn');
  const navLinks = document.getElementById('nav-links-menu');
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('is-open');
    });
  }

  // Language dropdown toggle
  const langBtn = document.getElementById('lang-toggle-btn');
  const langMenu = document.getElementById('lang-menu');
  if (langBtn && langMenu) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langMenu.classList.toggle('is-open');
    });
    document.addEventListener('click', () => {
      langMenu.classList.remove('is-open');
    });
  }

  // Sound toggle effect
  const soundBtn = document.getElementById('sound-btn');
  if (soundBtn) {
    updateSoundButtonsUI(isBGMPlaying());
    soundBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleBGM();
    });
  }

  // THÔNG TIN Dropdown with 3-second grace period before deactivating
  const infoWrapper = document.getElementById('navInfoDropdownWrapper');
  if (infoWrapper) {
    let leaveTimer = null;

    const showMenu = () => {
      if (leaveTimer) {
        clearTimeout(leaveTimer);
        leaveTimer = null;
      }
      infoWrapper.classList.add('is-open');
    };

    const scheduleHideMenu = () => {
      if (leaveTimer) clearTimeout(leaveTimer);
      leaveTimer = setTimeout(() => {
        infoWrapper.classList.remove('is-open');
        leaveTimer = null;
      }, 3000); // 3 seconds grace period before closing
    };

    infoWrapper.addEventListener('mouseenter', showMenu);
    infoWrapper.addEventListener('mouseleave', scheduleHideMenu);

    // Hide immediately when a link inside is clicked
    const subLinks = infoWrapper.querySelectorAll('.nav-sub-item');
    subLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (leaveTimer) clearTimeout(leaveTimer);
        infoWrapper.classList.remove('is-open');
      });
    });
  }

  // Logged-in user dropdown toggle & actions
  const navUserBtn = document.getElementById('navUserBtn');
  const navUserMenu = document.getElementById('navUserMenu');
  if (navUserBtn && navUserMenu) {
    navUserBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navUserMenu.classList.contains('is-open');
      navUserMenu.classList.toggle('is-open', !isOpen);
      navUserBtn.classList.toggle('is-active', !isOpen);
    });

    document.addEventListener('click', (e) => {
      if (!navUserBtn.contains(e.target) && !navUserMenu.contains(e.target)) {
        navUserMenu.classList.remove('is-open');
        navUserBtn.classList.remove('is-active');
      }
    });

    const navItemLogout = document.getElementById('navItemLogout');
    if (navItemLogout) {
      navItemLogout.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('OAN_LOGGED_IN_USER');
        window.dispatchEvent(new CustomEvent('auth-state-changed'));
        window.location.hash = 'login';
      });
    }
  }

  // Listen to external auth-state-changed events
  const onAuthChanged = () => {
    renderNavbar(container, (window.location.hash || '#home').replace('#', ''));
  };
  window.removeEventListener('auth-state-changed', onAuthChanged);
  window.addEventListener('auth-state-changed', onAuthChanged);

  // Smooth scroll to top when clicking on the menu item of the active / current page
  const navClickables = container.querySelectorAll('.nav-item, .nav-sub-item, .navbar-brand-logo');
  navClickables.forEach((item) => {
    item.addEventListener('click', (e) => {
      const targetHash = (item.getAttribute('href') || '').replace('#', '');
      const currentRoute = (window.location.hash || '#home').replace('#', '');

      // Close mobile menu if open
      if (navLinks && navLinks.classList.contains('is-open')) {
        navLinks.classList.remove('is-open');
      }

      // If user is already on this page and clicks the menu link
      if (targetHash === currentRoute || (!targetHash && currentRoute === 'home')) {
        e.preventDefault();
        const lenisInstance = getLenis();
        if (lenisInstance) {
          lenisInstance.scrollTo(0, { duration: 1.2 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  });
}
