import { sendSubscriptionEmail } from '../services/email-service.js';

export function renderFooter(container, currentHash) {
  const hideFooter = ['intro', 'mail-confirm', 'fullscreen', 'character'].includes(currentHash);
  
  if (hideFooter) {
    container.innerHTML = '';
    container.style.display = 'none';
    return;
  }

  container.style.display = '';

  container.innerHTML = `
    <footer class="figma-footer" data-node-id="1363:86770">
      <!-- Background overlay texture -->
      <div class="footer-bg-ambient">
        <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" class="footer-ambient-img" />
        <div class="footer-top-gradient-fade"></div>
      </div>

      <!-- Giant OÁN Calligraphic Blood Watermark Right (1020:73526) -->
      <div class="footer-giant-oan-watermark" data-node-id="1020:73526">
        <img src="./assets/fe62d22e616b81c08bba3fd07bc6d12a12bb7d3b.svg" alt="" class="giant-watermark-accent" />
        <img src="./assets/ead19dab0eb3568c8623cea514a410f92e6b48a5.svg" alt="" class="giant-watermark-an" />
        <img src="./assets/169f48fe22a9f35609e253e66be8d9ec6eb769ad.svg" alt="" class="giant-watermark-o" />
      </div>

      <div class="footer-main-container">
        <!-- Top Footer Grid -->
        <div class="footer-top-grid">
          
          <!-- Column 1: Brand, Tagline & Newsletter (4 Columns span) -->
          <div class="footer-brand-col">
            <div class="footer-brand-header" data-node-id="838:1883">
              <a href="#home" class="footer-brand-combo-link" title="OÁN — Nhà Họ Hứa">
                <img src="./assets/239dc59dcfee9a7ff13a48bcacb475e04a11730c.svg" alt="OÁN Crest" class="footer-brand-crest-svg" />
                <div class="footer-brand-oan-title">
                  <img src="./assets/a08df5a0eb01183cad8fcbfd5e70827fa05548bd.svg" alt="" class="brand-title-accent" />
                  <img src="./assets/1af3c39f36b88c47624a9865cbe83c7854ef8270.svg" alt="" class="brand-title-an" />
                  <img src="./assets/45ca9fb10cf2e092fc6075e91a490aecca7c12de.svg" alt="" class="brand-title-o" />
                </div>
              </a>
            </div>

            <p class="footer-brand-quote">
              "Có những căn nhà bị ma ám. Và có những căn nhà được xây để nhốt thứ còn đáng sợ hơn ma."
            </p>

            <div class="footer-newsletter-wrap">
              <h4 class="footer-newsletter-title">NHẬN TIN TỨC MỚI NHẤT</h4>
              <div class="footer-newsletter-field">
                <input type="email" placeholder="Nhập Email của bạn ở đây" class="footer-newsletter-input" />
              </div>
              <button class="btn-footer-newsletter-submit" type="button">
                <div class="footer-btn-frame-parts">
                  <div class="footer-fp1"><img src="./assets/105ebc7cda031fdb485695b18a341cec252f1d95.png" alt="" /></div>
                  <div class="footer-fp2" style="background-image: url('./assets/a1b7e3991a46b5a64f1f7dac3536b09a9e87a8ba.png');"></div>
                  <div class="footer-fp4" style="background-image: url('./assets/a52a7c4b8dc8beffb2f5577f0501b16b1cfce647.png');"></div>
                  <div class="footer-fp5"><img src="./assets/18c99e59fbe5fb1f1a0cf0ff28f9c309e0b87822.png" alt="" /></div>
                </div>
                <div class="footer-btn-inner-bg">
                  <img src="./assets/ea8df93482c54ccfe7b61d0a530fea954eb54fd3.png" class="footer-btn-texture" alt="" />
                </div>
                <div class="footer-btn-glow-3"></div>
                <div class="footer-btn-glow-2"></div>
                <div class="footer-btn-glow-1"></div>
                <span class="footer-btn-caption">GỬI NGAY</span>
              </button>
            </div>
          </div>

          <!-- Column 2: Khám Phá -->
          <div class="footer-nav-col">
            <h4 class="footer-col-heading">KHÁM PHÁ</h4>
            <ul class="footer-nav-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#trailer">Trailer</a></li>
              <li><a href="#info">Info</a></li>
              <li><a href="#gameplay">Gameplay</a></li>
              <li><a href="#character">Characters</a></li>
            </ul>
          </div>

          <!-- Column 3: Trò Chơi -->
          <div class="footer-nav-col">
            <h4 class="footer-col-heading">TRÒ CHƠI</h4>
            <ul class="footer-nav-list">
              <li><a href="#download">Cấu hình</a></li>
              <li><a href="#download">Hướng dẫn cài đặt</a></li>
            </ul>
          </div>

          <!-- Column 4: Liên Hệ & Cộng Đồng -->
          <div class="footer-nav-col">
            <h4 class="footer-col-heading">LIÊN HỆ</h4>
            <div class="footer-contact-list">
              <p class="footer-contact-item">thegrudge@gmail.com</p>
              <p class="footer-contact-item">+84 900 666 999</p>
              <p class="footer-contact-item">Đường số 1, Quận số 2, HCMC</p>
            </div>

            <h4 class="footer-col-heading footer-social-heading">CỘNG ĐỒNG</h4>
            <div class="footer-social-boxes-row">
              <a href="#" class="footer-social-box-link" title="X/Twitter">
                <img src="./assets/4248ff32784dcf7d75da83bae4582b02ab828e22.svg" alt="X" />
              </a>
              <a href="#" class="footer-social-box-link" title="Discord">
                <img src="./assets/213b21c0b2b9b9a903efd0cae442a84d279f3c2b.svg" alt="Discord" />
              </a>
              <a href="#" class="footer-social-box-link" title="YouTube">
                <img src="./assets/a460f836788c7d3208559d5a5dcfd89f40b4de83.svg" alt="YouTube" />
              </a>
              <a href="#" class="footer-social-box-link" title="Steam">
                <img src="./assets/510903028f9bb3763f751d2681b979c661a8b00d.svg" alt="Steam" />
              </a>
              <a href="#" class="footer-social-box-link" title="Twitch">
                <img src="./assets/cdf82b3b704e39d97fd48686971cafdccd88cf73.svg" alt="Twitch" />
              </a>
            </div>
          </div>

        </div>

        <!-- Bottom Bar -->
        <div class="footer-bottom-bar">
          <div class="footer-copyright-text">
            © 2026 OÁN HORROR EXPERIENCE. ALL RIGHTS RESERVED.
          </div>
          <div class="footer-legal-links">
            <a href="#">CHÍNH SÁCH BẢO MẬT</a>
            <a href="#">ĐIỀU KHOẢN DỊCH VỤ</a>
            <a href="#">COOKIE POLICY</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  // Newsletter Submit Listener
  const newsletterInput = container.querySelector('.footer-newsletter-input');
  const newsletterBtn = container.querySelector('.btn-footer-newsletter-submit');
  const newsletterBtnCaption = container.querySelector('.footer-btn-caption');

  const handleSubscribe = async () => {
    if (!newsletterInput) return;
    const email = newsletterInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email || !emailRegex.test(email)) {
      newsletterInput.style.border = '2px solid #ee1b10';
      newsletterInput.placeholder = 'Vui lòng nhập đúng email (vd: oanhon@gmail.com)';
      newsletterInput.classList.add('animate-shake');
      setTimeout(() => {
        newsletterInput.classList.remove('animate-shake');
        newsletterInput.style.border = '';
      }, 2000);
      return;
    }

    if (newsletterBtn) newsletterBtn.disabled = true;
    if (newsletterBtnCaption) newsletterBtnCaption.textContent = 'ĐANG GỬI...';

    try {
      localStorage.setItem('oan_subscribed_email', email);
      // Send real Thank-You Email via Resend
      await sendSubscriptionEmail({
        email: email,
        hobby: 'Nhận bản tin tuyệt mật từ Dinh Thự Nhà Hứa',
      });
    } catch (err) {
      console.error('[Footer Subscribe Error]', err);
    } finally {
      if (newsletterBtn) newsletterBtn.disabled = false;
      if (newsletterBtnCaption) newsletterBtnCaption.textContent = 'GỬI NGAY';
      window.location.hash = 'mail-confirm';
    }
  };

  newsletterBtn?.addEventListener('click', handleSubscribe);
  newsletterInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubscribe();
    }
  });
}

