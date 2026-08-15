/* ============================================
   OAN — Collection Page (Design 23: 1135-78166)
   ============================================ */

export async function renderCollection(container) {
  container.innerHTML = `
    <div class="page-home" style="padding-top:var(--nav-height);">
      <!-- Hero -->
      <section class="feature-hero">
        <div class="animate-fade-in-left">
          <div style="font-family:var(--font-display);font-size:12px;text-transform:uppercase;color:var(--color-gray-500);letter-spacing:2px;margin-bottom:8px;">
            KHÁM PHÁ · Tìm hiểu sẻ sẻ
          </div>
          <h1 class="feature-hero__title" style="font-size:64px;">THU THẬP</h1>
        </div>
      </section>

      <!-- Collect Truth -->
      <section class="section">
        <div class="container">
          <div class="feature-split reveal">
            <div>
              <div style="border:2px solid rgba(139,0,0,0.3);aspect-ratio:4/3;background:linear-gradient(135deg, #1a0505, #0d0000);display:flex;align-items:center;justify-content:center;">
                <span style="font-size:48px;opacity:0.3;">📦</span>
              </div>
            </div>
            <div>
              <h2 style="font-family:var(--font-display);font-size:32px;font-weight:700;color:var(--color-white);text-transform:uppercase;line-height:1.2;margin-bottom:20px;">
                BÓC TÁCH LỚP VỎ<br/>SỰ THẬT
              </h2>
              <p style="font-size:14px;color:var(--color-gray-400);line-height:1.8;margin-bottom:24px;">
                Trong ngôi nhà cổ Hứa, xuyên có những thần vĩ đài phía sau
                cả phiến tầm bể trưng. Chúng ta không chỉ xem ở một kẻ đần đặc bí ẩn
                Khám, gặp thu thập và phân tích những bí ẩn xả và kết
                luận, ghi nhớ mọi dữ kiện để có thể khám phá bí mật 
                thêm, hiểu rõ hồ thắc, cỏ biến vẫn giọt.
              </p>
              <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
                ${['Vật Phẩm', 'Hình Ảnh', 'Vũ Dụng', 'Tê Liệu Hinh'].map((name, i) => `
                  <div style="text-align:center;padding:12px 8px;border:1px solid rgba(255,255,255,0.06);cursor:pointer;" class="hover-lift">
                    <div style="font-size:20px;margin-bottom:6px;opacity:0.5;">📎</div>
                    <div style="font-family:var(--font-display);font-size:10px;color:var(--color-gray-400);text-transform:uppercase;">${name}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Inventory Management -->
      <section class="section section--dark">
        <div class="container">
          <div class="reveal">
            <h2 style="font-family:var(--font-display);font-size:28px;font-weight:700;color:var(--color-white);text-transform:uppercase;margin-bottom:8px;">
              QUẢN LÝ<br/>TÚI ĐỒ
            </h2>
            <p style="font-size:13px;color:var(--color-gray-400);margin-bottom:24px;">
              Tích cực thu thập vật phẩm và tư liệu
            </p>
            <p style="font-size:12px;color:var(--color-gray-500);margin-bottom:32px;">
              Phân tích ........
            </p>
            <!-- Inventory Grid -->
            <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:4px;max-width:600px;">
              ${Array(10).fill(0).map((_, i) => `
                <div style="aspect-ratio:1;border:2px solid ${i < 3 ? 'var(--color-gold-600)' : 'rgba(255,255,255,0.08)'};background:${i < 3 ? 'rgba(156,126,33,0.1)' : 'rgba(20,10,10,0.5)'};display:flex;align-items:center;justify-content:center;cursor:pointer;">
                  ${i < 3 ? '<span style="font-size:20px;">🔑</span>' : ''}
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <!-- Progress -->
      <section class="section">
        <div class="container">
          <div class="section__header reveal">
            <div style="display:flex;align-items:center;gap:16px;justify-content:center;">
              <div style="flex:1;height:2px;background:linear-gradient(90deg,transparent,var(--color-gold-600));max-width:200px;"></div>
              <h2 class="section__title" style="margin-bottom:0;white-space:nowrap;font-size:16px;">TIẾN TRÌNH GIẢI MÃ</h2>
              <div style="flex:1;height:2px;background:linear-gradient(90deg,var(--color-gold-600),transparent);max-width:200px;"></div>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:32px;" class="reveal">
            ${[
              { title: 'HỒI TƯỞNG', desc: 'Lần đầu nhật ký' },
              { title: 'NHẬN THỨC', desc: 'Pha trộ kỳ câu hỏi' },
              { title: 'GIẢI MÃ', desc: 'Cần kiếm được' },
              { title: 'HIỂU ĐƯỢC TRUY', desc: 'Hãy đi tìm sám sần' },
            ].map(item => `
              <div style="text-align:center;padding:16px;border:1px solid rgba(255,255,255,0.06);">
                <div style="font-family:var(--font-display);font-size:13px;font-weight:700;color:var(--color-white);text-transform:uppercase;margin-bottom:4px;">${item.title}</div>
                <div style="font-size:11px;color:var(--color-gray-500);">${item.desc}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Explore More CTA -->
      <section class="section section--dark">
        <div class="container" style="text-align:center;">
          <div class="reveal">
            <p style="font-family:var(--font-display);font-size:18px;color:var(--color-white);text-transform:uppercase;margin-bottom:8px;">
              BẠN ĐÃ RỐI CHUÔNG KHUNG CỦA GAMEPLAY NÀY,
            </p>
            <p style="font-family:var(--font-display);font-size:18px;color:var(--color-white);text-transform:uppercase;margin-bottom:8px;">
              BẠN CÓ THỂ HIỂU HƠN VỀ CÁCH CHƠI.
            </p>
            <h3 style="font-family:var(--font-display);font-size:24px;font-weight:700;color:var(--color-text-gold);text-transform:uppercase;margin-bottom:24px;">
              BẠN CÓ MUỐN KHÁM PHÁ THÊM KHÔNG?
            </h3>
            <div style="display:flex;gap:16px;justify-content:center;">
              <a href="#investigation" class="btn btn-cta" style="font-size:12px;">Đi Đến Điều Tra</a>
              <a href="#puzzle" class="btn btn-secondary" style="font-size:12px;">Đi Đến Giải Đố</a>
            </div>
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
            <p class="cta-banner__note">HÃY ĐẾN VỚI NỖI SỢ ĐỂ KHÁM PHÁ</p>
          </div>
        </div>
      </section>
    </div>
  `;
}
