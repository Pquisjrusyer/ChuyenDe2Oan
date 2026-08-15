/* ============================================
   OAN — Community Page (Design 11: 1024-73961)
   ============================================ */

export async function renderCommunity(container) {
  container.innerHTML = `
    <div class="page-home" style="padding-top:var(--nav-height);">
      <!-- Hero -->
      <section class="community-hero" style="background:linear-gradient(180deg, rgba(51,0,0,0.2), transparent);">
        <h1 class="community-hero__title animate-fade-in-up">CỘNG ĐỒNG</h1>
        <p class="community-hero__subtitle animate-fade-in-up delay-1">
          Kết nối, thảo luận và chia sẻ những trải nghiệm từ nhà hứa nhé bạn & nhiều hơn nữa
        </p>
        <div class="community-hero__actions animate-fade-in-up delay-2">
          <a href="#login" class="btn btn-cta" style="padding:12px 24px;">Đăng Nhập</a>
          <a href="#register" class="btn btn-primary" style="padding:12px 24px;">Tham Gia Ngay</a>
        </div>
      </section>

      <!-- News Section -->
      <section class="section">
        <div class="container">
          <div class="section__header reveal">
            <div style="display:flex;align-items:center;gap:16px;justify-content:center;">
              <div style="flex:0 0 auto;font-size:24px;">←</div>
              <h2 class="section__title" style="margin-bottom:0;">TIN TỨC MỚI BẬT</h2>
              <div style="flex:0 0 auto;font-size:24px;">→</div>
            </div>
            <p class="section__subtitle">Cập nhật nhanh từ cộng đồng</p>
          </div>
          <div class="news-grid reveal" style="margin-top:40px;">
            ${[
              { title: 'Chia sẻ kinh nghiệm chơi game thể loại kinh dị thêu biến cùi nhất.', author: 'durinhxyz - Subscribe', date: '14/08/2026' },
              { title: 'Cốt truyện Văn Miếu dọc, thật thú vị đông y và trải nghiệm thật sự fun.', author: 'durinhxyz - Subscribe', date: '14/08/2026' },
              { title: 'Tips cách để nhanh sử dụng auto lê khí cần thiết một cách hiệu quả', author: 'durinhxyz - Subscribe', date: '14/08/2026' },
              { title: 'Những điều cần biết về mọi cần thứ nhất hướng dẫn từ một gì mới, đáng giá trọng.', author: 'durinhxyz - Subscribe', date: '14/08/2026' },
            ].map((news, i) => `
              <div class="news-card hover-lift">
                <div class="news-card__image">
                  <div style="width:100%;height:100%;background:linear-gradient(${135 + i * 30}deg, #1a0808, #0d0000);display:flex;align-items:center;justify-content:center;">
                    <span style="font-size:24px;opacity:0.3;">📰</span>
                  </div>
                </div>
                <div class="news-card__content">
                  <div class="news-card__title">${news.title}</div>
                  <div class="news-card__meta">${news.author} · ${news.date}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Subscribe Section -->
      <section class="subscribe-section">
        <div class="container">
          <div class="subscribe-box reveal">
            <h2 class="subscribe-box__title">Subcribe để nhận tin</h2>
            <p class="subscribe-box__subtitle">Nhận tin tức, bảng xếp hạng và thông báo sự kiện trực tiếp qua email.</p>
          </div>
          <div class="subscribe-form reveal" style="margin-top:32px;">
            <div class="form-group">
              <label class="form-label">Email</label>
              <input type="email" class="form-input" placeholder="(email@mail.com)" />
              <span style="font-size:11px;color:var(--color-gray-500);">Điền email cá nhân tin cậy</span>
            </div>
            <div class="form-group">
              <label class="form-label">Số điện thoại</label>
              <input type="tel" class="form-input" placeholder="(+84x1 xxxx)" />
              <span style="font-size:11px;color:var(--color-gray-500);">Điền thêm số điện thoại để nhận thông tin qua SMS</span>
            </div>
          </div>
          <div class="subscribe-actions reveal">
            <button class="btn btn-cta">Đăng Ký</button>
            <button class="btn btn-ghost">Xem Tin</button>
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
            <p class="cta-banner__note">YÊU CẦU: THIẾT BỊ & ĐIỂM PHẦN CỨNG TỐI THIỂU</p>
          </div>
        </div>
      </section>
    </div>
  `;
}
