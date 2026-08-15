/* ============================================
   OAN — Gameplay Page (Design 26: 1058-78289)
   ============================================ */

export async function renderGameplay(container) {
  container.innerHTML = `
    <div class="page-home" style="padding-top:var(--nav-height);">
      <!-- Hero -->
      <section style="position:relative;display:grid;grid-template-columns:1fr 1fr;min-height:60vh;">
        <div style="padding:60px 80px;display:flex;flex-direction:column;justify-content:center;">
          <div style="font-family:var(--font-display);font-size:12px;text-transform:uppercase;color:var(--color-gray-500);letter-spacing:2px;margin-bottom:8px;" class="animate-fade-in-left">
            CHƠI · TRẢI
          </div>
          <h1 style="font-family:var(--font-display);font-size:48px;font-weight:700;color:var(--color-white);text-transform:uppercase;line-height:1.1;margin-bottom:24px;" class="animate-fade-in-left delay-1">
            GAMEPLAY
          </h1>
          <p style="font-size:14px;color:var(--color-gray-400);line-height:1.7;max-width:500px;margin-bottom:32px;" class="animate-fade-in-left delay-2">
            Trải nghiệm gameplay kinh dị tâm lý đầy ám ảnh. Bạn sẽ phải đối mặt với những thử thách 
            khó lường và giải mã các bí ẩn rùng rợn.
          </p>
          <div style="display:flex;gap:12px;" class="animate-fade-in-left delay-3">
            <a href="#trailer" class="btn btn-secondary" style="padding:10px 20px;font-size:13px;">Xem Trailer</a>
          </div>
        </div>
        <div style="position:relative;overflow:hidden;" class="animate-fade-in-right">
          <div style="width:100%;height:100%;background:linear-gradient(135deg, #1a0808 0%, #0d0505 100%);display:flex;align-items:center;justify-content:center;">
            <div style="text-align:center;">
              <div style="font-size:80px;margin-bottom:16px;">🎮</div>
              <div class="btn btn-secondary" style="font-size:12px;padding:8px 16px;">Xem Ảnh</div>
              <div class="btn btn-ghost" style="font-size:12px;padding:8px 16px;margin-top:8px;">Xem Trailer</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Survive Section -->
      <section class="section">
        <div class="container">
          <div class="feature-split reveal">
            <div>
              <div style="border:2px solid rgba(139,0,0,0.3);aspect-ratio:4/3;background:linear-gradient(135deg, #1a0505, #0d0000);display:flex;align-items:center;justify-content:center;">
                <span style="font-size:48px;opacity:0.3;">🌙</span>
              </div>
            </div>
            <div>
              <h2 style="font-family:var(--font-display);font-size:48px;font-weight:700;color:var(--color-white);text-transform:uppercase;line-height:1.1;">
                SỐNG SÓT<br/>
                <span style="color:var(--color-text-gold);">QUA</span><br/>
                MÀN ĐÊM
              </h2>
            </div>
          </div>
        </div>
      </section>

      <!-- Gameplay Features -->
      <section class="section section--dark">
        <div class="container">
          <div class="steps-grid reveal">
            ${[
              { icon: '🔍', title: 'Điều Tra', desc: 'Xem chi' },
              { icon: '🧩', title: 'Giải Đố', desc: 'Xem chi' },
              { icon: '📦', title: 'Thu Thập', desc: 'Xem chi' },
              { icon: '🛡️', title: 'Sinh Mối', desc: 'Xem chi' },
            ].map((item, i) => `
              <a href="#${['investigation','puzzle','collection','gameplay'][i]}" class="step-card hover-lift" style="text-decoration:none;">
                <div class="step-card__image hover-glow-red">
                  <div style="width:100%;height:100%;background:linear-gradient(${135 + i * 20}deg, #1a0505, #0d0000);display:flex;align-items:center;justify-content:center;">
                    <span style="font-size:40px;opacity:0.5;">${item.icon}</span>
                  </div>
                </div>
                <div class="step-card__title">${item.title}</div>
                <div class="step-card__desc">${item.desc}</div>
              </a>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Authentic Experience -->
      <section class="section">
        <div class="container">
          <div class="section__header reveal">
            <div class="section-heading-box">
              <h2 class="heading-section" style="font-size:24px;">Trải nghiệm chân thực</h2>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:40px;" class="reveal">
            ${['Đồ Truyền', 'Đáng Nể', 'Horror Art', 'Tài Liệu'].map((name, i) => `
              <div style="aspect-ratio:3/4;border:1px solid rgba(139,0,0,0.3);background:linear-gradient(${180 + i * 15}deg, #1a0505, #0d0000);display:flex;align-items:flex-end;padding:16px;cursor:pointer;transition:all 0.3s;" class="hover-glow-red">
                <div>
                  <div style="font-family:var(--font-display);font-size:13px;font-weight:700;color:var(--color-white);text-transform:uppercase;">${name}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="section section--dark">
        <div class="container">
          <div class="section__header reveal">
            <div style="display:flex;align-items:center;gap:16px;justify-content:center;">
              <div style="flex:1;height:2px;background:linear-gradient(90deg,transparent,var(--color-gold-600));max-width:200px;"></div>
              <h2 class="section__title" style="margin-bottom:0;white-space:nowrap;font-size:14px;">CÂU HỎI THƯỜNG GẶP</h2>
              <div style="flex:1;height:2px;background:linear-gradient(90deg,var(--color-gold-600),transparent);max-width:200px;"></div>
            </div>
          </div>
          <div class="accordion reveal" style="max-width:800px;margin:32px auto 0;">
            <div class="accordion__item" onclick="this.classList.toggle('open')">
              <button class="accordion__trigger">OÁN CÓ HỖ TRỢ TAY CẦM KHÔNG?</button>
              <div class="accordion__content"><div class="accordion__body">Có, game hỗ trợ tay cầm Xbox và PlayStation.</div></div>
            </div>
            <div class="accordion__item" onclick="this.classList.toggle('open')">
              <button class="accordion__trigger">CẤU HÌNH TỐI THIỂU ĐỂ TRẢI NGHIỆM GAME?</button>
              <div class="accordion__content"><div class="accordion__body">Windows 10 64-bit, Intel Core i5-8400, 12 GB RAM.</div></div>
            </div>
            <div class="accordion__item" onclick="this.classList.toggle('open')">
              <button class="accordion__trigger">THỜI LƯỢNG CHƠI TRUNG BÌNH LÀ BAO LÂU?</button>
              <div class="accordion__content"><div class="accordion__body">Khoảng 15-20 giờ cho cốt truyện chính.</div></div>
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
          </div>
        </div>
      </section>
    </div>
  `;
}
