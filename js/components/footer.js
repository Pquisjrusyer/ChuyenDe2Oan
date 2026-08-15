/* ============================================
   OAN Horror Game — Footer Component
   ============================================ */

export function renderFooter(container, currentHash) {
  const hideFooter = ['intro', 'mail-confirm', 'fullscreen', 'character'].includes(currentHash);
  
  if (hideFooter) {
    container.innerHTML = '';
    container.style.display = 'none';
    return;
  }

  container.style.display = '';

  container.innerHTML = `
    <div class="footer">
      <div class="footer__grid">
        <!-- Brand Column -->
        <div class="footer__brand">
          <div class="footer__brand-logo">
            <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
              <path d="M18 2L22 8L28 6L26 12L34 14L28 18L34 22L26 24L28 30L22 28L18 34L14 28L8 30L10 24L2 22L8 18L2 14L10 12L8 6L14 8L18 2Z" fill="#D9B74C"/>
              <circle cx="18" cy="18" r="6" fill="#330000"/>
            </svg>
            <span class="brand-text" style="font-family: var(--font-display); color: var(--color-gold-400); font-size: 18px; font-weight: 700;">OÁN</span>
          </div>
          <p class="footer__brand-quote">
            "Có những căn nhà bị ma ám. Và có những căn nhà được xây để nhốt thứ còn đáng sợ hơn ma."
          </p>
          <div class="footer__newsletter-label">Nhận tin tức mới nhất</div>
          <div class="footer__newsletter">
            <input type="email" placeholder="Nhập Email của bạn ở đây" />
            <button class="footer__newsletter-btn">Gửi ngay</button>
          </div>
        </div>

        <!-- Khám Phá Column -->
        <div class="footer__column">
          <h4>Khám Phá</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#trailer">Trailer</a></li>
            <li><a href="#info">Info</a></li>
            <li><a href="#gameplay">Gameplay</a></li>
            <li><a href="#character">Characters</a></li>
          </ul>
        </div>

        <!-- Trò Chơi Column -->
        <div class="footer__column">
          <h4>Trò Chơi</h4>
          <ul>
            <li><a href="#download">Cấu hình</a></li>
            <li><a href="#download">Hướng dẫn cài đặt</a></li>
          </ul>
        </div>

        <!-- Liên Hệ Column -->
        <div class="footer__column">
          <h4>Liên Hệ</h4>
          <div class="footer__contact-item">thegrudge@gmail.com</div>
          <div class="footer__contact-item">+84 900 666 999</div>
          <div class="footer__contact-item">Đường số 1, Quận số 2, HCMC</div>
          <div class="footer__social-label" style="margin-top: 16px;">Cộng Đồng</div>
          <div class="footer__social">
            <a href="#" title="X/Twitter">𝕏</a>
            <a href="#" title="Discord">💬</a>
            <a href="#" title="YouTube">▶</a>
            <a href="#" title="Threads">🧵</a>
            <a href="#" title="Instagram">📷</a>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <div class="footer__copyright">
          © 2026 OAN HORROR EXPERIENCE. ALL RIGHTS RESERVED.
        </div>
        <div class="footer__legal">
          <a href="#">Chính sách bảo mật</a>
          <a href="#">Điều khoản dịch vụ</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </div>
  `;
}
