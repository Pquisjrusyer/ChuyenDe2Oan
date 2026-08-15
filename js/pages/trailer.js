/* ============================================
   OAN Horror Game — Trailer Page (Design 9: 928-1608)
   ============================================ */

export async function renderTrailer(container) {
  container.innerHTML = `
    <div class="page-trailer">
      <!-- Hero Video -->
      <section class="trailer-hero" style="max-height:70vh;">
        <div style="width:100%;height:100%;background:linear-gradient(135deg, #1a0505, #0d0000);display:flex;align-items:center;justify-content:center;min-height:500px;">
          <div style="text-align:center;">
            <div style="font-size:80px;margin-bottom:24px;">🎬</div>
            <p style="font-family:var(--font-display);font-size:20px;color:var(--color-gray-400);text-transform:uppercase;">OAN - Trailer Chính Thức</p>
          </div>
        </div>
        <div class="trailer-hero__play"></div>
      </section>

      <!-- Trailer Info -->
      <section class="trailer-content">
        <div class="reveal">
          <h1 style="font-family:var(--font-display);font-size:32px;font-weight:700;color:var(--color-white);text-transform:uppercase;margin-bottom:16px;">
            TRAILER CHÍNH THỨC
          </h1>
          <p style="font-size:15px;color:var(--color-gray-400);line-height:1.7;max-width:700px;margin-bottom:24px;">
            Khám phá thế giới rùng rợn của Nhà Hứa. Nơi bóng tối ẩn náu và những bí mật
            kinh sợ ở trong giải mã sự thật bên trong của nó hiện.
          </p>
          <div class="trailer-actions">
            <button class="btn btn-secondary" onclick="document.querySelector('.trailer-hero__play').click()">
              Xem toàn màn hình
            </button>
            <button class="btn btn-ghost">
              ⟳ Chia sẻ
            </button>
          </div>
        </div>
      </section>

      <!-- Game Details -->
      <section style="padding:48px 80px;max-width:1440px;margin:0 auto;">
        <div class="reveal" style="display:grid;grid-template-columns:300px 1fr;gap:48px;align-items:start;">
          <div style="border:2px solid rgba(139,0,0,0.4);aspect-ratio:4/3;background:linear-gradient(135deg, #1a0505, #0d0000);display:flex;align-items:center;justify-content:center;">
            <span style="font-size:48px;">🖼️</span>
          </div>
          <div>
            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin-bottom:32px;">
              <div>
                <div style="font-family:var(--font-display);font-size:11px;text-transform:uppercase;color:var(--color-gray-500);margin-bottom:4px;">Ngày phát hành</div>
                <div style="font-size:14px;color:var(--color-white);">31.12.2027</div>
              </div>
              <div>
                <div style="font-family:var(--font-display);font-size:11px;text-transform:uppercase;color:var(--color-gray-500);margin-bottom:4px;">Thời lượng</div>
                <div style="font-size:14px;color:var(--color-white);">2:38</div>
              </div>
              <div>
                <div style="font-family:var(--font-display);font-size:11px;text-transform:uppercase;color:var(--color-gray-500);margin-bottom:4px;">Kiểm dã hình lý</div>
                <div style="font-size:14px;color:var(--color-white);">18+</div>
              </div>
              <div></div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:32px;">
              <div>
                <div style="font-family:var(--font-display);font-size:11px;text-transform:uppercase;color:var(--color-gray-500);margin-bottom:4px;">Nhà phát triển</div>
                <div style="font-size:14px;color:var(--color-white);">OAN Horror Studio</div>
              </div>
              <div>
                <div style="font-family:var(--font-display);font-size:11px;text-transform:uppercase;color:var(--color-gray-500);margin-bottom:4px;">Nền tảng</div>
                <div style="font-size:14px;color:var(--color-white);">PC, Xbox, PlayStation</div>
              </div>
            </div>
            <p style="font-size:14px;color:var(--color-gray-400);line-height:1.8;">
              Lấy cảm hứng từ truyện kinh dị quen thuộc với tuổi thơ nhiều người Việt. OAN đưa người chơi
              vào cuộc vào hành trình của hai nhân vật Minh, Đặng, một nhà báo với tinh thần dũng cảm khát khao 
              muốn khám phá những bí ẩn để đi tìm sự thật và công lý.
            </p>
          </div>
        </div>
      </section>

      <!-- Gallery -->
      <section class="section">
        <div class="container">
          <div class="section__header reveal">
            <div class="section-heading-box">
              <h2 class="heading-section" style="font-size:28px;">Thư viện ảnh</h2>
              <p class="subtitle">Những bức ảnh minh họa</p>
            </div>
          </div>
          <div class="gallery-grid reveal" style="margin-top:40px;">
            ${[1,2,3,4,5,6].map(i => `
              <div class="gallery-grid__item hover-glow-red">
                <div style="width:100%;height:100%;background:linear-gradient(${135 + i * 20}deg, #1a0505, #0d0000);display:flex;align-items:center;justify-content:center;">
                  <span style="font-size:32px;opacity:0.3;">🖼️</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Explore More -->
      <section class="section section--dark">
        <div class="container">
          <div class="section__header reveal">
            <div class="section-heading-box">
              <h2 class="heading-section" style="font-size:24px;">Khám phá</h2>
              <p class="subtitle">Bạn muốn khám phá gì thêm?</p>
            </div>
          </div>
          <div class="explore-grid reveal" style="margin-top:40px;">
            <a href="#storyline" class="explore-card hover-lift" style="text-decoration:none;">
              <div class="explore-card__icon">📖</div>
              <div class="explore-card__title">Câu Chuyện</div>
              <div class="explore-card__desc">Khám phá cốt truyện</div>
            </a>
            <a href="#gameplay" class="explore-card hover-lift" style="text-decoration:none;">
              <div class="explore-card__icon">🎮</div>
              <div class="explore-card__title">Trò Chơi</div>
              <div class="explore-card__desc">Hệ thống gameplay</div>
            </a>
            <a href="#character" class="explore-card hover-lift" style="text-decoration:none;">
              <div class="explore-card__icon">👥</div>
              <div class="explore-card__title">Nhân Vật</div>
              <div class="explore-card__desc">Tìm hiểu nhân vật</div>
            </a>
            <a href="#download" class="explore-card hover-lift" style="text-decoration:none;">
              <div class="explore-card__icon">⬇️</div>
              <div class="explore-card__title">Tải Xuống</div>
              <div class="explore-card__desc">Download game</div>
            </a>
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
