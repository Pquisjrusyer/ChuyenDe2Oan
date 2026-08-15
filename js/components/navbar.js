/* ============================================
   OAN Horror Game — Navbar Component (Figma 1363:86771)
   ============================================ */

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
            <a class="nav-item ${currentHash === 'info' ? 'active' : ''}" href="#info" data-node-id="I1363:86771;782:1711;987:73067">THÔNG TIN</a>
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
            <!-- Button 1: ĐĂNG KÝ (906:1714 with Title background 982de4...png) -->
            <a href="#register" class="btn-nav-register-figma" data-node-id="I1363:86771;906:1727;906:1714">
              <img src="./assets/982de4bcd6a16630803542fbfab99bbf3ff3563d.png" alt="" class="nav-register-bg-img" />
              <span class="nav-register-caption">ĐĂNG KÝ</span>
            </a>

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
    let isPlaying = false;
    soundBtn.addEventListener('click', () => {
      isPlaying = !isPlaying;
      soundBtn.classList.toggle('sound-muted', !isPlaying);
    });
  }
}
