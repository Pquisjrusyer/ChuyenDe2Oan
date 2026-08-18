/* ========================================================
   OAN — REGISTER PAGE (Figma Node 1227:79552 "Đăng ký déktop")
   ======================================================== */

export async function renderRegister(container) {
  container.innerHTML = `
    <div class="reg-page-wrapper" data-node-id="1227:79552">
      
      <!-- ========================================================
           SECTION 1: HERO CAROUSEL BANNER (1249:77950)
           ======================================================== -->
      <section class="reg-hero-section" data-node-id="1249:77950">
        
        <!-- Banner Slide Container (1250:79053 / 1250:79030) -->
        <div class="reg-banner-slide-box trailer-scroll-reveal trailer-reveal-fade-up" data-node-id="1250:79030">
          
          <!-- Slide 1 (1249:79006) -->
          <div class="reg-carousel-slide active" data-slide-index="0" data-node-id="1249:79006">
            <img src="./assets/b2a5b3e879a6d3cc64c466d47f585c2c2edfb97d.png" alt="OAN Banner 1" />
          </div>

          <!-- Slide 2 (1249:79008) -->
          <div class="reg-carousel-slide" data-slide-index="1" data-node-id="1249:79008">
            <img src="./assets/e790ad47134116098fd858a9099db4199a0c1032.png" alt="OAN Banner 2" />
          </div>

          <!-- Slide 3 (1249:79007) -->
          <div class="reg-carousel-slide" data-slide-index="2" data-node-id="1249:79007">
            <img src="./assets/8cc40a2ae59d04e44667a8c2ecd0bc3b3bb0cb30.png" alt="OAN Banner 3" />
          </div>

          <!-- Texture Grunge Overlay (1250:79020) -->
          <div class="reg-banner-texture-overlay" data-node-id="1250:79020">
            <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" />
          </div>

          <!-- Pagination Dots (1250:79019) -->
          <div class="reg-carousel-dots" id="regHeroDots" data-node-id="1250:79019">
            <button type="button" class="reg-dot-btn active" data-index="0" aria-label="Slide 1"></button>
            <button type="button" class="reg-dot-btn" data-index="1" aria-label="Slide 2"></button>
            <button type="button" class="reg-dot-btn" data-index="2" aria-label="Slide 3"></button>
          </div>

        </div>

        <!-- Bottom Fade to Black (1250:79067) -->
        <div class="reg-hero-bottom-fade" data-node-id="1250:79067"></div>
      </section>

      <!-- ========================================================
           SECTION 2: CTA TẠO TÀI KHOẢN & 4 CARDS (1250:79066)
           ======================================================== -->
      <section class="reg-cta-section" data-node-id="1250:79066">
        
        <!-- Scratched Grunge Background (1250:79145) -->
        <div class="reg-scratched-bg" data-node-id="1250:79145">
          <img src="./assets/2ccae5c37964aff1c768a42db477654661a5b837.png" alt="" />
        </div>

        <!-- Top Row: Title & Info Article (1250:79069) -->
        <div class="reg-cta-top-row trailer-scroll-reveal trailer-reveal-fade-up" data-node-id="1250:79069">
          
          <!-- Left Col (1250:79070) -->
          <div class="reg-cta-heading-col" data-node-id="1250:79070">
            <h2 class="reg-cta-main-title" data-node-id="1250:79071">
              Tạo tài khoản để khám phá thế giới của OÁN và nhận những cập nhật mới nhất.
            </h2>
            <p class="reg-cta-main-sub" data-node-id="1250:79072">
              Trải nghiệm sớm • Khám phá cốt truyện • Bí mật gia tộc Họ Hứa
            </p>
          </div>

          <!-- Right Article Box (1250:79073) -->
          <div class="reg-cta-article-box" data-node-id="1250:79073">
            <div class="reg-cta-article-inner" data-node-id="1250:79075">
              <div class="reg-cta-article-thumb" data-node-id="1250:79076">
                <img src="./assets/eb7e2c24bc667dcc681ba145776c1294e88a3296.png" alt="OAN Thumbnail" />
              </div>
              <div class="reg-cta-article-text" data-node-id="1250:79078">
                <h3 class="reg-cta-art-title" data-node-id="1250:79079">Đăng ký</h3>
                <p class="reg-cta-art-sub1" data-node-id="1250:79080">Trải nghiệm sớm • Cập nhật sự kiện • Tin tức từ OÁN</p>
                <p class="reg-cta-art-sub2" data-node-id="1250:79081">Tạo tài khoản để tham gia cộng đồng và nhận thông tin từ game.</p>
              </div>
            </div>
          </div>

        </div>

        <!-- 4 Category Exploration Cards (1250:79213) -->
        <div class="reg-explore-cards-grid trailer-scroll-reveal trailer-reveal-fade-up delay-150" data-node-id="1250:79213">
          
          <!-- Card 01: CỐT TRUYỆN (1250:79215) -->
          <a href="#storyline" class="reg-explore-card" data-node-id="1250:79215">
            <div>
              <span class="reg-card-num">01</span>
              <h3 class="reg-card-title">CỐT TRUYỆN</h3>
              <p class="reg-card-desc">Tìm hiểu về khởi nguồn của cơn ác mộng.</p>
            </div>
            <div class="reg-card-action">
              <span>KHÁM PHÁ</span>
              <span class="arrow">↗</span>
            </div>
          </a>

          <!-- Card 02: NHÀ HỨA (1250:79222) -->
          <a href="#info" class="reg-explore-card" data-node-id="1250:79222">
            <div>
              <span class="reg-card-num">02</span>
              <h3 class="reg-card-title">NHÀ HỨA</h3>
              <p class="reg-card-desc">Kiến trúc kinh dị đầy ám ảnh.</p>
            </div>
            <div class="reg-card-action">
              <span>XEM CHI TIẾT</span>
              <span class="arrow">↗</span>
            </div>
          </a>

          <!-- Card 03: HỆ ĐỊA LINH (1250:79229) -->
          <a href="#gameplay" class="reg-explore-card" data-node-id="1250:79229">
            <div>
              <span class="reg-card-num">03</span>
              <h3 class="reg-card-title">HỆ ĐỊA LINH</h3>
              <p class="reg-card-desc">Thế giới tâm linh và các thực thể.</p>
            </div>
            <div class="reg-card-action">
              <span>TÌM HIỂU</span>
              <span class="arrow">↗</span>
            </div>
          </a>

          <!-- Card 04: NHÂN VẬT (1250:79236) -->
          <a href="#character" class="reg-explore-card" data-node-id="1250:79236">
            <div>
              <span class="reg-card-num">04</span>
              <h3 class="reg-card-title">NHÂN VẬT</h3>
              <p class="reg-card-desc">Những kẻ lạc lối trong cõi tạm.</p>
            </div>
            <div class="reg-card-action">
              <span>XEM NHÂN VẬT</span>
              <span class="arrow">↗</span>
            </div>
          </a>

        </div>

      </section>

      <!-- ========================================================
           SECTION 3: FORM ĐĂNG KÝ TÀI KHOẢN (1250:79262)
           ======================================================== -->
      <section class="reg-form-section" id="register-form-section" data-node-id="1250:79262">
        <div class="reg-form-main-grid">
          
          <!-- Left Column (1218:79289) -->
          <div class="reg-form-left-col trailer-scroll-reveal trailer-reveal-fade-up" data-node-id="1218:79289">
            
            <div class="reg-form-hero-title" data-node-id="1284:79425">
              <h2 class="reg-title-big" data-node-id="1218:79290">ĐĂNG KÝ</h2>
              <h3 class="reg-title-sub">NGAY TÀI KHOẢN TRÒ CHƠI</h3>
              <p class="reg-form-lead" data-node-id="1218:79291">Liên kết tài khoản Steam hoặc Epic game</p>
            </div>

            <!-- Terms Checkbox (1284:79414 / 1284:79399) -->
            <div class="reg-terms-row" data-node-id="1284:79399">
              <div class="reg-custom-checkbox checked" id="regTermsCheckbox" role="checkbox" aria-checked="true" tabindex="0">
                ✓
              </div>
              <div class="reg-terms-text" data-node-id="1284:79390">
                <p data-node-id="1284:79391">Tôi đồng ý với Điều khoản sử dụng và Chính sách bảo mật.</p>
                <p data-node-id="1284:79392">
                  <span>Xem </span>
                  <a href="#legal" class="reg-terms-link">điều khoản</a>
                </p>
              </div>
            </div>

            <!-- Quick Login Box (1284:79544) -->
            <div class="reg-alt-login-box" data-node-id="1284:79544">
              <div class="reg-alt-login-text" data-node-id="1284:79427">
                <p class="reg-alt-title" data-node-id="1284:79428">Đã có tài khoản?</p>
                <a href="#login" class="reg-alt-sub" data-node-id="1284:79429">Trợ giúp đăng nhập nhanh ↗</a>
              </div>
              <div class="reg-alt-lock-icon" data-node-id="1284:79543">
                <img src="./assets/1c0f4dbd536ea47ce8450c7e426305ec82efa5d9.svg" alt="Lock Icon" />
              </div>
            </div>

          </div>

          <!-- Right Column: 5 Form Inputs + Submit Button (1283:79146) -->
          <form class="reg-form-right-col trailer-scroll-reveal trailer-reveal-fade-up delay-150" id="regAccountForm" data-node-id="1283:79146" onsubmit="return false;">
            
            <!-- Field 1: Họ và tên (1283:79098) -->
            <div class="reg-field-group" data-node-id="1283:79098">
              <label class="reg-field-label" for="regFullName">Họ và tên</label>
              <div class="reg-field-input-box">
                <input type="text" id="regFullName" class="reg-input-element" placeholder="Họ và tên" required />
                <div class="reg-field-icon">
                  <img src="./assets/e9cd6b734b2fbe9c3862831727b50dead03e1062.svg" alt="" />
                </div>
              </div>
            </div>

            <!-- Field 2: Tên đăng nhập (1283:79147) -->
            <div class="reg-field-group" data-node-id="1283:79147">
              <label class="reg-field-label" for="regUsername">Tên đăng nhập</label>
              <div class="reg-field-input-box">
                <input type="text" id="regUsername" class="reg-input-element" placeholder="Tên đăng nhập" required />
                <div class="reg-field-icon">
                  <img src="./assets/9ae98ae786012dd54df4858a1c665e8234c61ca9.svg" alt="" />
                </div>
              </div>
            </div>

            <!-- Field 3: Email (1283:79166) -->
            <div class="reg-field-group" data-node-id="1283:79166">
              <label class="reg-field-label" for="regEmail">Email</label>
              <div class="reg-field-input-box">
                <input type="email" id="regEmail" class="reg-input-element" placeholder="user@gmail.com" required />
              </div>
            </div>

            <!-- Field 4: Mật khẩu (1283:79185) -->
            <div class="reg-field-group" data-node-id="1283:79185">
              <label class="reg-field-label" for="regPassword">Mật khẩu</label>
              <div class="reg-field-input-box">
                <input type="password" id="regPassword" class="reg-input-element" placeholder="Tối thiểu 8 ký tự" required />
              </div>
            </div>

            <!-- Field 5: Xác nhận mật khẩu (1283:79204) -->
            <div class="reg-field-group" data-node-id="1283:79204">
              <label class="reg-field-label" for="regConfirmPassword">Xác nhận mật khẩu</label>
              <div class="reg-field-input-box">
                <input type="password" id="regConfirmPassword" class="reg-input-element" placeholder="Nhập lại mật khẩu" required />
              </div>
            </div>

            <!-- Submit Button (1283:79300 / 1283:79247) -->
            <div class="reg-submit-btn-wrap" data-node-id="1283:79300">
              <button type="submit" class="reg-submit-btn" id="btnRegisterSubmit" data-node-id="1283:79247">
                <div class="reg-submit-btn-inner">
                  <div class="reg-submit-btn-bg">
                    <img src="./assets/982de4bcd6a16630803542fbfab99bbf3ff3563d.png" alt="" />
                  </div>
                  <p class="reg-submit-btn-text">ĐĂNG KÝ</p>
                </div>
              </button>
            </div>

          </form>

        </div>
      </section>

      <!-- ========================================================
           SECTION 4: THIRD PARTY REGISTRATION (1284:79446)
           ======================================================== -->
      <section class="reg-third-party-section" data-node-id="1284:79446">
        
        <!-- Header CTA Line with Horror Frame (1284:79447) -->
        <div class="faq-ctaline-frame trailer-scroll-reveal trailer-reveal-fade-up" data-node-id="1284:79447">
          <div class="faq-frame-bracket-left">
            <img src="./assets/5330b79b9e3ec9f5d8e099674f3b9cd251731b0b.svg" alt="" />
          </div>
          <h2 class="reg-third-party-heading" data-node-id="1284:79448">Đăng ký với</h2>
          <div class="faq-frame-bracket-right">
            <img src="./assets/2a8d91cd956a7b707d91ed3faed539513ed626cf.svg" alt="" />
          </div>
        </div>

        <!-- 3 Platform Buttons (1284:79485 / 1284:79484) -->
        <div class="reg-platform-icons-row trailer-scroll-reveal trailer-reveal-fade-up delay-150" data-node-id="1284:79484">
          
          <!-- Steam (1284:79476) -->
          <a href="https://store.steampowered.com" target="_blank" rel="noopener noreferrer" class="reg-platform-btn" data-node-id="1284:79476" aria-label="Đăng ký với Steam">
            <img src="./assets/efe9683bc85804059d472260803fb9d037a6894d.png" alt="Steam" />
          </a>

          <!-- Epic Games (1284:79478) -->
          <a href="https://epicgames.com" target="_blank" rel="noopener noreferrer" class="reg-platform-btn" data-node-id="1284:79478" aria-label="Đăng ký với Epic Games">
            <img src="./assets/0ba3f8714f3943a121ff8f7c2df272a3410e25a4.png" alt="Epic Games" />
          </a>

          <!-- Xbox (1284:79480) -->
          <a href="https://xbox.com" target="_blank" rel="noopener noreferrer" class="reg-platform-btn" data-node-id="1284:79480" aria-label="Đăng ký với Xbox">
            <img src="./assets/6554ae6fd57b46bda098add06ae5d7f16e378a1d.png" alt="Xbox" />
          </a>

        </div>

      </section>

    </div>
  `;

  // ========================================================
  // INTERACTIVE LOGIC
  // ========================================================

  // 1. Hero Carousel Controller
  const slides = container.querySelectorAll('.reg-carousel-slide');
  const dots = container.querySelectorAll('.reg-dot-btn');
  let currentSlide = 0;
  let carouselTimer = null;

  function showSlide(index) {
    if (slides.length === 0) return;
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentSlide);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function startCarousel() {
    stopCarousel();
    carouselTimer = setInterval(nextSlide, 4000);
  }

  function stopCarousel() {
    if (carouselTimer) {
      clearInterval(carouselTimer);
      carouselTimer = null;
    }
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      showSlide(idx);
      startCarousel();
    });
  });

  const slideBox = container.querySelector('.reg-banner-slide-box');
  if (slideBox) {
    slideBox.addEventListener('mouseenter', stopCarousel);
    slideBox.addEventListener('mouseleave', startCarousel);
  }

  startCarousel();

  // 2. Custom Checkbox Controller
  const termsCheckbox = container.querySelector('#regTermsCheckbox');
  let isTermsChecked = true;
  if (termsCheckbox) {
    termsCheckbox.addEventListener('click', () => {
      isTermsChecked = !isTermsChecked;
      termsCheckbox.classList.toggle('checked', isTermsChecked);
      termsCheckbox.setAttribute('aria-checked', isTermsChecked ? 'true' : 'false');
      termsCheckbox.textContent = isTermsChecked ? '✓' : '';
    });
  }

  // 3. Form Submit Handler
  const form = container.querySelector('#regAccountForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!isTermsChecked) {
        alert('Vui lòng đồng ý với Điều khoản sử dụng và Chính sách bảo mật trước khi tiếp tục.');
        return;
      }
      const pass = container.querySelector('#regPassword').value;
      const confirmPass = container.querySelector('#regConfirmPassword').value;
      if (pass !== confirmPass) {
        alert('Mật khẩu xác nhận không khớp! Vui lòng kiểm tra lại.');
        return;
      }
      alert('Đăng ký tài khoản thành công! Chào mừng bạn gia nhập thế giới OÁN.');
    });
  }

  // 4. Scroll Reveal Observer
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
