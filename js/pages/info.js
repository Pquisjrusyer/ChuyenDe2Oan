/* ============================================
   OAN — Info/Thông Tin Page (Design 10: 928-2008)
   ============================================ */

export async function renderInfo(container) {
  container.innerHTML = `
    <div class="page-home" style="padding-top:var(--nav-height);">
      <!-- Hero -->
      <section class="info-hero">
        <div style="display:grid;grid-template-columns:1fr 1.5fr;gap:40px;align-items:start;">
          <div class="reveal">
            <div style="font-family:var(--font-display);font-size:12px;color:var(--color-gray-500);text-transform:uppercase;letter-spacing:2px;margin-bottom:8px;">
              Giải mã giấc mơ hồ hứa
            </div>
            <p style="font-size:14px;color:var(--color-gray-400);line-height:1.7;">
              Bỏ lại giá trị của nhà Hứa, thay thế hồn.
            </p>
          </div>
          <div style="text-align:right;" class="reveal">
            <div style="font-family:var(--font-display);font-size:18px;font-weight:700;color:var(--color-white);text-transform:uppercase;margin-bottom:8px;">
              VIÊN ĐÌNH CỰU (1930 - 2005)
            </div>
            <p style="font-size:13px;color:var(--color-gray-400);line-height:1.6;">
              Trưởng là ngôi nhà cổ, Nhà Họ Hứa<br/>
              Trong đó, truyền thuyết<br/>
              Và gia tộc Hứa
            </p>
          </div>
        </div>
      </section>

      <!-- Thông Tin Section -->
      <section class="section">
        <div class="container">
          <h2 class="section__title reveal" style="text-align:left;font-size:32px;margin-bottom:32px;">THÔNG TIN</h2>
          <p style="font-size:14px;color:var(--color-gray-400);line-height:1.8;max-width:600px;margin-bottom:40px;" class="reveal">
            Nhà Họ Hứa hay còn gọi là "Ngôi nhà bị nguyền rủa" là câu chuyện về...
          </p>
        </div>
      </section>

      <!-- Gallery -->
      <section class="section section--dark">
        <div class="container">
          <div class="info-gallery reveal">
            ${[1,2,3,4].map(i => `
              <div class="info-gallery__item hover-glow-red">
                <div style="width:100%;height:100%;background:linear-gradient(${135 + i * 30}deg, #1a0808, #0d0000);display:flex;align-items:center;justify-content:center;">
                  <span style="font-size:28px;opacity:0.3;">🏚️</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Story Highlight -->
      <section class="section">
        <div class="container">
          <div class="section__header reveal">
            <div class="section-heading-box">
              <h2 class="heading-section" style="font-size:24px;">Nổi bật trong cốt truyện</h2>
            </div>
          </div>
          <div class="story-highlight reveal" style="margin-top:40px;">
            <h3 class="story-highlight__title">BI KỊCH CỦA<br/>NHÀ HỨA</h3>
            <p class="story-highlight__text">
              Trong ngôi nhà cổ Hứa, một câu chuyện về gia tộc bí ẩn đã được chôn vùi theo thời gian.
              Những bí mật đen tối, những oán hồn chưa được giải thoát...
            </p>
            <a href="#storyline" class="btn btn-secondary" style="padding:10px 20px;font-size:13px;">Đọc tiếp</a>
          </div>
        </div>
      </section>

      <!-- Latest Updates -->
      <section class="section section--dark">
        <div class="container">
          <div class="section__header reveal">
            <div class="section-heading-box">
              <h2 class="heading-section" style="font-size:24px;">Cập nhật mới nhất</h2>
              <p class="subtitle">Cập nhật cuối</p>
            </div>
          </div>
          <div class="updates-grid reveal" style="margin-top:40px;">
            ${[1,2,3].map(i => `
              <div class="update-card hover-lift">
                <div class="update-card__image">
                  <div style="width:100%;height:100%;background:linear-gradient(${135 + i * 25}deg, #1a0808, #0d0000);min-height:150px;display:flex;align-items:center;justify-content:center;">
                    <span style="font-size:24px;opacity:0.3;">📰</span>
                  </div>
                </div>
                <div class="update-card__content">
                  <div class="update-card__title">ĐÂY LÀ MỘT THÔNG BÁO - CẬP NHẬT MỚI PHẦN ${i}</div>
                  <div class="update-card__meta">14/08/2026 · cập nhật</div>
                </div>
                <div style="padding:0 16px 16px;">
                  <button class="btn btn-ghost" style="padding:8px 16px;font-size:11px;width:100%;">Chi Tiết</button>
                </div>
              </div>
            `).join('')}
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
