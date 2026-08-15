/* ============================================
   OAN — Download Page (Design 13: 1170-80024)
   ============================================ */

export async function renderDownload(container) {
  container.innerHTML = `
    <div class="page-home" style="padding-top:var(--nav-height);">
      <!-- Hero -->
      <section class="download-hero" style="padding:60px 80px;">
        <div class="container">
          <h1 style="font-family:var(--font-display);font-size:72px;font-weight:700;color:var(--color-text-gold);text-transform:uppercase;line-height:1.1;margin-bottom:24px;" class="animate-fade-in-up">
            TẢI OÁN
          </h1>
          <p style="font-size:15px;color:var(--color-gray-400);line-height:1.7;max-width:600px;margin-bottom:32px;" class="animate-fade-in-up delay-1">
            Đừng chỉ xem không chứ là hậu sự nhật bị chấn phá.<br/>
            Hãy vào đón chờ, giải Tối sau với và khám phá<br/>
            hệ dẹ trở tìm <a href="#" style="color:var(--color-gold-400);text-decoration:underline;">hướng dẫn</a>
          </p>
          <div style="display:flex;gap:16px;align-items:center;" class="animate-fade-in-up delay-2">
            <a href="#" class="btn btn-secondary" style="padding:12px 24px;">Tải Ngay</a>
            <a href="#" class="btn btn-cta" style="padding:12px 32px;">CÀI ĐẶT VỚI STEAM</a>
          </div>
        </div>
      </section>

      <!-- Platform Steps -->
      <section class="section">
        <div class="container">
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;" class="reveal">
            ${['Ghi Chú', 'Phân Tích', 'Khám Phá', 'Đưa Mọt'].map((name, i) => `
              <div style="text-align:center;padding:20px;border:2px solid rgba(139,0,0,0.3);background:linear-gradient(180deg,#1a0505,#0d0000);cursor:pointer;transition:all 0.3s;" class="hover-glow-red hover-lift">
                <div style="font-size:32px;margin-bottom:12px;opacity:0.6;">🎮</div>
                <div style="font-family:var(--font-display);font-size:13px;font-weight:700;color:var(--color-white);text-transform:uppercase;">${name}</div>
                <div style="font-size:11px;color:var(--color-gray-500);margin-top:4px;">Xử lý dữ liệu</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Store Downloads -->
      <section class="section section--dark">
        <div class="container">
          <div class="section__header reveal">
            <h2 class="section__title" style="margin-bottom:8px;">KHÁM PHÁ THÊM</h2>
            <p class="section__subtitle">Tải xuống, Cài đặt trong một vài bước vào dễ dàng thôi</p>
          </div>
          <div class="download-stores reveal" style="margin-top:40px;">
            <div class="download-store-card hover-lift">
              <div style="font-size:48px;margin-bottom:12px;">🖥️</div>
              <div class="download-store-card__name">Windows PC</div>
              <div class="download-store-card__desc">Tải dẹ cho PC. Miễn phí</div>
            </div>
            <div class="download-store-card hover-lift">
              <div style="font-size:48px;margin-bottom:12px;">⊛</div>
              <div class="download-store-card__name">Steam Store</div>
              <div class="download-store-card__desc">Tải qua nền tảng Steam</div>
            </div>
            <div class="download-store-card hover-lift">
              <div style="font-size:48px;margin-bottom:12px;">◆</div>
              <div class="download-store-card__name">Epic Store</div>
              <div class="download-store-card__desc">Tải qua Epic Games Store</div>
            </div>
          </div>
        </div>
      </section>

      <!-- System Requirements -->
      <section class="section">
        <div class="container">
          <div class="section__header reveal">
            <div style="display:flex;align-items:center;gap:16px;justify-content:center;">
              <div style="flex:1;height:2px;background:linear-gradient(90deg,transparent,var(--color-gold-600));max-width:200px;"></div>
              <h2 class="section__title" style="margin-bottom:0;white-space:nowrap;">Cấu hình</h2>
              <div style="flex:1;height:2px;background:linear-gradient(90deg,var(--color-gold-600),transparent);max-width:200px;"></div>
            </div>
          </div>
          <div class="sys-req reveal" style="margin-top:40px;">
            <div class="sys-req__col">
              <div class="sys-req__title">Tối Thiểu</div>
              ${[
                { label: 'Hệ điều hành', value: 'Windows 10 64-bit' },
                { label: 'CPU', value: 'Intel Core i5-8400 / AMD Ryzen 5 1600' },
                { label: 'RAM', value: '12 GB RAM' },
                { label: 'GPU', value: 'NVIDIA GeForce GTX 1060 6GB / AMD RX 580' },
                { label: 'Ổ cứng', value: '50 GB available space (SSD Recommended)' },
              ].map(row => `
                <div class="sys-req__row">
                  <div class="sys-req__label">${row.label}</div>
                  <div class="sys-req__value">${row.value}</div>
                </div>
              `).join('')}
            </div>
            <div class="sys-req__col">
              <div class="sys-req__title">Đề Nghị</div>
              ${[
                { label: 'Hệ điều hành', value: 'Windows 11 64-bit' },
                { label: 'CPU', value: 'Intel Core i7-10700 / AMD Ryzen 7 3700X' },
                { label: 'RAM', value: '16 GB RAM' },
                { label: 'GPU', value: 'NVIDIA RTX 2060 Ti / AMD RX 6700 XT' },
                { label: 'Ổ cứng', value: '50 GB available space (NVMe SSD)' },
              ].map(row => `
                <div class="sys-req__row">
                  <div class="sys-req__label">${row.label}</div>
                  <div class="sys-req__value">${row.value}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="section section--dark">
        <div class="container">
          <div class="accordion reveal" style="max-width:800px;margin:0 auto;">
            <div class="accordion__item" onclick="this.classList.toggle('open')">
              <button class="accordion__trigger">TÔI CÓ CẦN KẾT NỐI INTERNET ĐỂ CHƠI KHÔNG?</button>
              <div class="accordion__content"><div class="accordion__body">Có, game yêu cầu kết nối internet để chơi.</div></div>
            </div>
            <div class="accordion__item" onclick="this.classList.toggle('open')">
              <button class="accordion__trigger">GAME CÓ HỖ TRỢ TAY CẦM KHÔNG?</button>
              <div class="accordion__content"><div class="accordion__body">Có, game hỗ trợ đầy đủ tay cầm Xbox và PlayStation.</div></div>
            </div>
            <div class="accordion__item" onclick="this.classList.toggle('open')">
              <button class="accordion__trigger">CẤU HÌNH NÀO CÓ CHƠI ĐƯỢC KHÔNG?</button>
              <div class="accordion__content"><div class="accordion__body">Xem bảng cấu hình tối thiểu và đề nghị ở phía trên.</div></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Bottom CTA -->
      <section class="section" style="background:linear-gradient(180deg, var(--color-bg-dark), rgba(51,0,0,0.2));">
        <div class="container" style="text-align:center;">
          <div class="reveal">
            <p style="font-family:var(--font-display);font-size:20px;color:var(--color-white);text-transform:uppercase;margin-bottom:24px;">
              BẠN ĐÃ SẴN SÀNG ĐỐI MẶT VỚI SỰ THẬT?
            </p>
            <h2 style="font-family:var(--font-display);font-size:28px;font-weight:700;color:var(--color-text-gold);text-transform:uppercase;">
              HÃY ĐẾN VỚI NỖI SỢ ĐỂ KHÁM PHÁ
            </h2>
          </div>
        </div>
      </section>
    </div>
  `;
}
