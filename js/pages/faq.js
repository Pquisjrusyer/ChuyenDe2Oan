/* ============================================
   OAN — FAQ/Support Page (Design 12: 1030-74110)
   ============================================ */

export async function renderFaq(container) {
  container.innerHTML = `
    <div class="page-home" style="padding-top:var(--nav-height);">
      <!-- Hero -->
      <section class="faq-hero">
        <div class="faq-hero__content">
          <h1 class="faq-hero__title animate-fade-in-left">BẠN CẦN HỖ TRỢ?</h1>
          <p class="faq-hero__subtitle animate-fade-in-left delay-1">
            Chúng tôi luôn sẵn sàng giúp đỡ bạn giải quyết vấn đề trong game. 
            Hãy tìm câu trả lời cho câu hỏi của bạn hoặc liên hệ trực tiếp với đội ngũ hỗ trợ.
          </p>
          <div style="display:flex;gap:12px;margin-top:16px;" class="animate-fade-in-left delay-2">
            <span style="font-size:20px;">🎮</span>
            <span style="font-size:20px;">📧</span>
            <span style="font-size:20px;">💬</span>
          </div>
        </div>
        <div class="faq-hero__bg">
          <div style="width:100%;height:100%;background:linear-gradient(135deg, transparent, #1a0808);"></div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="section">
        <div class="container">
          <div class="section__header reveal">
            <div style="display:flex;align-items:center;gap:16px;justify-content:center;">
              <div style="flex:1;height:2px;background:linear-gradient(90deg,transparent,var(--color-gold-600));"></div>
              <h2 class="section__title" style="margin-bottom:0;white-space:nowrap;">CÂU HỎI PHỔ BIẾN</h2>
              <div style="flex:1;height:2px;background:linear-gradient(90deg,var(--color-gold-600),transparent);"></div>
            </div>
          </div>
          <div class="accordion reveal" style="max-width:900px;margin:40px auto 0;">
            ${[
              { q: 'CẤU HÌNH TỐI THIỂU LÀ GÌ?', a: 'Yêu cầu tối thiểu: Windows 10 64-bit, Intel Core i5-8400, 12 GB RAM, NVIDIA GeForce GTX 1060.' },
              { q: 'LÀM THẾ NÀO ĐỂ BÁO CÁO LỖI GAMEPLAY?', a: 'Bạn có thể báo cáo lỗi thông qua trang cộng đồng hoặc gửi email trực tiếp cho đội ngũ hỗ trợ.' },
              { q: 'TÔI BỊ MẤT DỮ LIỆU LƯU GAME', a: 'Hãy kiểm tra thư mục lưu trữ trong AppData hoặc liên hệ hỗ trợ kỹ thuật để khôi phục dữ liệu.' },
            ].map((item, i) => `
              <div class="accordion__item ${i === 0 ? 'open' : ''}" onclick="this.classList.toggle('open')">
                <button class="accordion__trigger">${item.q}</button>
                <div class="accordion__content">
                  <div class="accordion__body">${item.a}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Category Cards -->
      <section class="section section--dark">
        <div class="container">
          <div class="faq-categories reveal">
            ${[
              { icon: '🎮', name: 'Gameplay', desc: 'Hỗ trợ gameplay' },
              { icon: '🔑', name: 'Tài Khoản', desc: 'Đăng nhập' },
              { icon: '🛡️', name: 'Kỹ Thuật', desc: 'Hỗ trợ kỹ thuật' },
              { icon: '🎨', name: 'Nội Dung', desc: 'Content' },
              { icon: '👥', name: 'Cộng Đồng', desc: 'Community' },
            ].map(cat => `
              <div class="faq-category hover-lift">
                <div class="faq-category__icon" style="display:flex;align-items:center;justify-content:center;font-size:32px;">${cat.icon}</div>
                <div class="faq-category__name">${cat.name}</div>
                <div class="faq-category__desc">${cat.desc}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Support Split -->
      <section class="section">
        <div class="container">
          <div class="support-split reveal">
            <div class="support-card">
              <h3 class="support-card__title">Trò Chuyện Với Đội Ngũ OAN</h3>
              <p class="support-card__text">
                Chúng tôi luôn sẵn sàng hỗ trợ bạn. Hãy liên hệ trực tiếp qua kênh hỗ trợ chính thức.
              </p>
              <button class="btn btn-cta" style="font-size:12px;padding:10px 20px;">Yêu Cầu Hỗ Trợ</button>
            </div>
            <div class="support-card">
              <h3 class="support-card__title">CỘNG ĐỒNG THỬ GAME ĐANG HÙNG HẬU</h3>
              <p class="support-card__text">
                Tham gia cộng đồng để chia sẻ kinh nghiệm và nhận hỗ trợ từ những người chơi khác.
              </p>
              <a href="#community" class="btn btn-primary" style="font-size:12px;padding:10px 20px;">Tham Gia Ngay</a>
              <div style="margin-top:24px;">
                <h4 style="font-family:var(--font-display);font-size:14px;font-weight:700;color:var(--color-white);text-transform:uppercase;margin-bottom:8px;">
                  BÁO CÁO LỖI & BUG ?
                </h4>
                <p style="font-size:13px;color:var(--color-gray-400);margin-bottom:12px;">
                  Giúp chúng tôi cải thiện game bằng cách báo cáo lỗi.
                </p>
                <button class="btn btn-ghost" style="font-size:12px;padding:8px 16px;">Viết Báo Cáo</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Support -->
      <section class="section section--dark">
        <div class="container" style="text-align:center;">
          <div class="reveal">
            <a href="#faq" class="btn btn-secondary" style="margin:0 auto;">Liên hệ hỗ trợ</a>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="section">
        <div class="container">
          <div class="cta-banner reveal">
            <h2 class="cta-banner__title">BẠN ĐÃ SẴN SÀNG BƯỚC VÀO NHÀ HỨA?</h2>
            <div class="cta-banner__actions">
              <a href="#download" class="btn btn-secondary">Chơi Ngay</a>
              <a href="#download" class="btn btn-secondary">Tải Ngay</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}
