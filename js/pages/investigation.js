/* ============================================
   OAN — Investigation Page (Design 25: 1093-76943)
   ============================================ */

export async function renderInvestigation(container) {
  container.innerHTML = `
    <div class="page-home" style="padding-top:var(--nav-height);">
      <!-- Hero -->
      <section class="feature-hero">
        <div class="animate-fade-in-left">
          <div style="font-family:var(--font-display);font-size:12px;text-transform:uppercase;color:var(--color-gray-500);letter-spacing:2px;margin-bottom:8px;">
            Tìm hiểu sự · Bằng gõ
          </div>
          <h1 class="feature-hero__title" style="font-size:64px;">ĐIỀU TRA</h1>
        </div>
      </section>

      <!-- Core Mechanism -->
      <section class="section">
        <div class="container">
          <div class="feature-split reveal">
            <div>
              <div style="border:2px solid rgba(139,0,0,0.3);aspect-ratio:4/3;background:linear-gradient(135deg, #1a0505, #0d0000);display:flex;align-items:center;justify-content:center;">
                <span style="font-size:48px;opacity:0.3;">📋</span>
              </div>
            </div>
            <div>
              <h2 style="font-family:var(--font-display);font-size:28px;font-weight:700;color:var(--color-text-gold);text-transform:uppercase;margin-bottom:24px;">
                CƠ CHẾ CỐT LÕI
              </h2>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
                ${['Khám phá & Tương tác', 'Thu thập hồ sơ', 'Giải mã bí ẩn', 'Đánh tồn & chạy trốn'].map(item => `
                  <div style="display:flex;align-items:center;gap:8px;">
                    <span style="color:var(--color-gold-400);">▸</span>
                    <span style="font-size:14px;color:var(--color-gray-300);">${item}</span>
                  </div>
                `).join('')}
              </div>
              <p style="font-size:13px;color:var(--color-gray-500);font-style:italic;margin-top:24px;">
                "Bạn cả tăng đội lén – nó nhiều hơn tiếng bốt."
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Investigation Process -->
      <section class="section section--dark">
        <div class="container">
          <div class="section__header reveal">
            <div class="section-heading-box">
              <h2 class="heading-section" style="font-size:24px;">Quy trình điều tra</h2>
            </div>
          </div>
          <div class="steps-grid reveal" style="margin-top:40px;">
            ${['Quan Sát', 'Kiểm Tra', 'Thu Thập', 'Kết Tra'].map((name, i) => `
              <div class="step-card hover-lift">
                <div class="step-card__image hover-glow-red">
                  <div style="width:100%;height:100%;background:linear-gradient(${135 + i * 25}deg, #1a0505, #0d0000);display:flex;align-items:center;justify-content:center;">
                    <span style="font-size:32px;opacity:0.4;">🔍</span>
                  </div>
                </div>
                <div class="step-card__title">${name}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Support Tools -->
      <section class="section">
        <div class="container">
          <div style="display:flex;align-items:center;gap:16px;justify-content:center;margin-bottom:32px;" class="reveal">
            <div style="flex:1;height:2px;background:linear-gradient(90deg,transparent,var(--color-gold-600));max-width:200px;"></div>
            <span style="font-family:var(--font-display);font-size:14px;color:var(--color-gold-400);text-transform:uppercase;white-space:nowrap;">CÔNG CỤ HỖ TRỢ</span>
            <div style="flex:1;height:2px;background:linear-gradient(90deg,var(--color-gold-600),transparent);max-width:200px;"></div>
          </div>
          <div class="reveal" style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">
            ${['Thay tgia đà thanh', 'Công nghiệm gia thanh', 'Đưa nghiệm đa thanh'].map((name, i) => `
              <div style="text-align:center;padding:16px;border:1px solid rgba(255,255,255,0.06);">
                <span style="font-size:24px;display:block;margin-bottom:8px;">📎</span>
                <span style="font-size:13px;color:var(--color-gray-400);">${name}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Tips -->
      <section class="section section--dark">
        <div class="container">
          <div class="reveal" style="display:flex;align-items:center;gap:16px;justify-content:center;margin-bottom:32px;">
            <div style="flex:1;height:2px;background:linear-gradient(90deg,transparent,var(--color-gold-600));max-width:200px;"></div>
            <span style="font-family:var(--font-display);font-size:14px;color:var(--color-gold-400);text-transform:uppercase;white-space:nowrap;">MẸO THỰC TẾ</span>
            <div style="flex:1;height:2px;background:linear-gradient(90deg,var(--color-gold-600),transparent);max-width:200px;"></div>
          </div>
        </div>
      </section>

      <!-- Continue CTA -->
      <section class="section">
        <div class="container" style="text-align:center;">
          <div class="reveal">
            <h3 style="font-family:var(--font-display);font-size:20px;font-weight:700;color:var(--color-white);text-transform:uppercase;margin-bottom:16px;">
              TIẾP TỤC HÀNH TRÌNH?
            </h3>
            <p style="font-size:13px;color:var(--color-gray-400);margin-bottom:24px;">
              Khám phá thêm các trang để hiểu rõ hơn về thế giới OÁN
            </p>
            <a href="#puzzle" class="btn btn-cta" style="font-size:13px;">Tiếp tục tìm giải đố →</a>
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
