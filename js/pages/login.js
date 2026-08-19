/* ========================================================
   OAN — LOGIN PAGE (Figma Node 1286:79841 "Đăng nhập déktop")
   ======================================================== */

export async function renderLogin(container) {
  container.innerHTML = `
    <div class="login-page-wrapper" data-node-id="1286:79841">
      
      <!-- ========================================================
           SECTION 1: MAIN LOGIN FORM (1286:79869)
           ======================================================== -->
      <section class="login-main-section" data-node-id="1286:79869">
        <div class="login-main-grid">
          
          <!-- Left Column: Heading & Quick Register Callout (1286:79870) -->
          <div class="login-left-col trailer-scroll-reveal trailer-reveal-fade-up" data-node-id="1286:79870">
            
            <div class="login-title-group" data-node-id="1286:79871">
              <h1 class="login-title-big" data-node-id="1286:79872">ĐĂNG NHẬP NGAY</h1>
              <p class="login-title-sub" data-node-id="1286:79873">Liên kết tài khoản Steam hoặc Epic game</p>
            </div>

            <!-- Quick Register Callout Box (1286:79875) -->
            <div class="login-alt-register-box" data-node-id="1286:79875">
              <div class="login-alt-register-text" data-node-id="1286:79876">
                <p class="login-alt-title" data-node-id="1286:79877">Chưa có tài khoản ?</p>
                <a href="#register" class="login-alt-sub" data-node-id="1286:79878">Trợ giúp đăng ký nhanh ↗</a>
              </div>
              <div class="login-alt-lock-icon" data-node-id="1286:79879">
                <img src="./assets/1c0f4dbd536ea47ce8450c7e426305ec82efa5d9.svg" alt="Lock Icon" />
              </div>
            </div>

          </div>

          <!-- Right Column: 2 Inputs + Forgot Password + Submit Button (1286:79881) -->
          <form class="login-form-right-col trailer-scroll-reveal trailer-reveal-fade-up delay-150" id="loginAccountForm" data-node-id="1286:79881" onsubmit="return false;">
            
            <!-- Field 1: Email hoặc Tên đăng nhập (1286:80333) -->
            <div class="login-field-group" data-node-id="1286:80333">
              <label class="login-field-label" for="loginIdentifier" data-node-id="I1286:80333;1231:1990">email hoặc tên đăng nhập</label>
              <div class="login-field-input-box" data-node-id="I1286:80333;1227:79708">
                <input type="text" id="loginIdentifier" class="login-input-element" placeholder="Họ và tên hoặc email" required />
                <div class="reg-field-icon" data-node-id="I1286:80333;1231:2168">
                  <img src="./assets/7c2b03b2d6de7d18a9169a94ecdcb76923fdaa0e.svg" alt="" />
                </div>
              </div>
            </div>

            <!-- Field 2: Mật khẩu (1286:80352) -->
            <div class="login-field-group" data-node-id="1286:80352">
              <label class="login-field-label" for="loginPassword" data-node-id="I1286:80352;1231:1990">Mật khẩu</label>
              <div class="login-field-input-box" data-node-id="I1286:80352;1227:79708">
                <input type="password" id="loginPassword" class="login-input-element" placeholder="Đăng nhập mật khẩu" required />
                <button type="button" class="login-password-toggle-btn" data-target="loginPassword" aria-label="Hiện/Ẩn mật khẩu">
                  <svg class="eye-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  <svg class="eye-off-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Forgot Password Link (1286:80399) -->
            <div class="login-forgot-wrap">
              <a href="#forgot-password" class="login-forgot-link" data-node-id="1286:80399">Quên mật khẩu?</a>
            </div>

            <!-- Submit Button (1286:79887) -->
            <div class="login-submit-btn-wrap" data-node-id="1286:79887">
              <button type="submit" class="login-submit-btn" id="btnLoginSubmit" data-node-id="1286:79889">
                <div class="login-submit-btn-inner">
                  <div class="login-submit-btn-bg">
                    <img src="./assets/982de4bcd6a16630803542fbfab99bbf3ff3563d.png" alt="" />
                  </div>
                  <p class="login-submit-btn-text" data-node-id="I1286:79890;906:1718">ĐĂNG NHẬP</p>
                </div>
              </button>
            </div>

          </form>

        </div>
      </section>

      <!-- ========================================================
           SECTION 2: THIRD PARTY LOGIN (1286:79891)
           ======================================================== -->
      <section class="login-third-party-section" data-node-id="1286:79891">
        
        <!-- Header CTA Line with Horror Frame (1286:79892) -->
        <div class="faq-ctaline-frame trailer-scroll-reveal trailer-reveal-fade-up" data-node-id="1286:79892">
          <div class="faq-frame-bracket-left">
            <img src="./assets/5330b79b9e3ec9f5d8e099674f3b9cd251731b0b.svg" alt="" />
          </div>
          <h2 class="login-third-party-heading" data-node-id="1286:79893">ĐĂNG NHẬP VỚI</h2>
          <div class="faq-frame-bracket-right">
            <img src="./assets/2a8d91cd956a7b707d91ed3faed539513ed626cf.svg" alt="" />
          </div>
        </div>

        <!-- 3 Platform Buttons (1286:79895 / 1286:79897) -->
        <div class="login-platform-icons-row trailer-scroll-reveal trailer-reveal-fade-up delay-150" data-node-id="1286:79897">
          
          <!-- Steam (1286:79898) -->
          <a href="https://store.steampowered.com" target="_blank" rel="noopener noreferrer" class="login-platform-btn btn-platform-steam" data-node-id="1286:79898" aria-label="Đăng nhập với Steam">
            <img src="./assets/icon_nen_tang_steam.png" alt="Steam" />
          </a>

          <!-- Epic Games (1286:79899) -->
          <a href="https://epicgames.com" target="_blank" rel="noopener noreferrer" class="login-platform-btn btn-platform-epic" data-node-id="1286:79899" aria-label="Đăng nhập với Epic Games">
            <img src="./assets/icon_nen_tang_epic.png" alt="Epic Games" />
          </a>

          <!-- Xbox (1286:79900) -->
          <a href="https://xbox.com" target="_blank" rel="noopener noreferrer" class="login-platform-btn btn-platform-xbox" data-node-id="1286:79900" aria-label="Đăng nhập với Xbox">
            <img src="./assets/icon_nen_tang_xbox.png" alt="Xbox" />
          </a>

        </div>

      </section>

    </div>
  `;

  // ========================================================
  // INTERACTIVE LOGIC
  // ========================================================

  // 1. Password Show/Hide Toggle
  const toggleBtn = container.querySelector('.login-password-toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const input = container.querySelector('#loginPassword');
      if (!input) return;
      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      toggleBtn.classList.toggle('active', isPassword);
    });
  }

  // 2. Form Submit Handler
  const form = container.querySelector('#loginAccountForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const identifier = container.querySelector('#loginIdentifier')?.value || '';
      const password = container.querySelector('#loginPassword')?.value || '';

      if (!identifier || !password) {
        alert('Vui lòng nhập đầy đủ tên đăng nhập/email và mật khẩu.');
        return;
      }

      // Check registered accounts in localStorage
      let userFound = null;
      try {
        const accounts = JSON.parse(localStorage.getItem('OAN_REGISTERED_ACCOUNTS') || '[]');
        userFound = accounts.find(
          a => a.username?.toLowerCase() === identifier.toLowerCase() || a.email?.toLowerCase() === identifier.toLowerCase()
        );
      } catch (err) {
        console.warn(err);
      }

      const loggedName = userFound ? userFound.username : identifier;
      alert(`Đăng nhập thành công! Chào mừng Lữ khách ${loggedName} trở lại Nhà Hứa.`);
      window.location.hash = 'home';
    });
  }

  // 3. Scroll Reveal Observer
  const scrollTargets = container.querySelectorAll('.trailer-scroll-reveal');
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  scrollTargets.forEach(el => scrollObserver.observe(el));

  setTimeout(() => {
    scrollTargets.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 30) {
        el.classList.add('revealed');
      }
    });
  }, 100);
}
