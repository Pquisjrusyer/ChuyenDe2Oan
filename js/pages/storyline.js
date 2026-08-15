/* ============================================
   OAN — Storyline/Cốt Truyện Page (Design 27: 928-2111)
   ============================================ */

export async function renderStoryline(container) {
  container.innerHTML = `
    <div class="page-home" style="padding-top:var(--nav-height);">
      <!-- Hero -->
      <section class="storyline-hero" style="min-height:50vh;">
        <div class="storyline-hero__bg">
          <div style="width:100%;height:100%;background:linear-gradient(135deg, #1a0808, #0d0000);"></div>
        </div>
        <div class="storyline-hero__overlay"></div>
        <div class="storyline-hero__content animate-fade-in-left" style="max-width:500px;">
          <div style="font-family:var(--font-display);font-size:12px;text-transform:uppercase;color:var(--color-gray-500);letter-spacing:2px;margin-bottom:8px;">
            DÒI DÒNG THÔNG QUA CÂN CHUYỆN CÓ MỘT
          </div>
          <h1 style="font-family:var(--font-display);font-size:56px;font-weight:700;color:var(--color-white);text-transform:uppercase;line-height:1.1;margin-bottom:16px;">
            NHÀ HỨA
          </h1>
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px;">
            <h2 style="font-family:var(--font-display);font-size:36px;font-weight:700;color:var(--color-text-gold);text-transform:uppercase;">CỐT TRUYỆN</h2>
          </div>
          <p style="font-size:14px;color:var(--color-gray-400);line-height:1.7;">
            Bạn nào thấm hời, đòi tay nghề làm truyện hay thể nào nói chuyện cho nào nghe.
            Nó đội, sứ mệnh thời.
          </p>
        </div>
      </section>

      <!-- Story Intro -->
      <section class="section">
        <div class="container">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:32px;" class="reveal">
            <div style="flex:1;height:2px;background:linear-gradient(90deg,transparent,var(--color-gold-600));"></div>
            <span style="font-family:var(--font-display);font-size:12px;color:var(--color-gray-400);text-transform:uppercase;white-space:nowrap;">
              BỘ ĐẦN GHÉ GẦN CỐT TRUYỆN CHO THẾ RẦN SẼ ĐẬT SỰ THẬT
            </span>
            <div style="flex:1;height:2px;background:linear-gradient(90deg,var(--color-gold-600),transparent);"></div>
          </div>
          <div class="feature-split reveal">
            <div>
              <div style="border:2px solid rgba(139,0,0,0.3);aspect-ratio:4/3;background:linear-gradient(135deg, #1a0505, #0d0000);display:flex;align-items:center;justify-content:center;">
                <span style="font-size:48px;opacity:0.3;">📜</span>
              </div>
            </div>
            <div>
              <h3 style="font-family:var(--font-display);font-size:28px;font-weight:700;color:var(--color-white);text-transform:uppercase;line-height:1.3;margin-bottom:16px;">
                LỜI NGUYỀN HỌ HỨA
              </h3>
              <p style="font-size:14px;color:var(--color-gray-400);line-height:1.8;margin-bottom:16px;">
                Là câu chuyện về dòng họ Hứa trong vùng chuyện nghĩ lại. Chuyện bắt đầu
                từ một gia tộc giàu có truyền đại về hứa. Gia tộc Hứa chiếm giữa vùng đất
                rộng lớn nằm một mật bất cạnh biệt lập ở ngoại ô thành phố.
              </p>
              <p style="font-size:14px;color:var(--color-gray-400);line-height:1.8;margin-bottom:24px;">
                Câu chuyện hành trình để tìm lời giải cho những chuyện bí ẩn đan xen với những bí
                mật ẩn giấu trong những bức tường đá. Điều gì chuyện kể lại liều lĩnh bên trong
                ngôi nhà nguyện rủa của gia tộc Hứa, để tiến vài tới sự thật?
              </p>
              <a href="#" class="btn btn-secondary" style="padding:10px 24px;font-size:13px;">
                Khám phá cốt truyện
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Timeline -->
      <section class="section section--dark">
        <div class="container">
          <div class="section__header reveal">
            <div class="section-heading-box">
              <h2 class="heading-section" style="font-size:24px;">Dòng thời gian</h2>
            </div>
          </div>
          <div class="timeline reveal" style="margin-top:40px;">
            <div class="timeline-item hover-lift">
              <div class="timeline-item__image">
                <div style="width:100%;height:100%;background:linear-gradient(135deg, #1a0808, #0d0000);min-height:200px;display:flex;align-items:center;justify-content:center;">
                  <span style="font-size:32px;opacity:0.3;">⏰</span>
                </div>
              </div>
              <div class="timeline-item__title">LỜI HỨA ĐỊNH MỆNH</div>
            </div>
            <div class="timeline-item hover-lift">
              <div class="timeline-item__image">
                <div style="width:100%;height:100%;background:linear-gradient(155deg, #1a0808, #0d0000);min-height:200px;display:flex;align-items:center;justify-content:center;">
                  <span style="font-size:32px;opacity:0.3;">🕐</span>
                </div>
              </div>
              <div class="timeline-item__title">BÓNG MA QUÁ KHỨ</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Chapters -->
      <section class="section">
        <div class="container">
          <div class="section__header reveal">
            <div class="section-heading-box">
              <h2 class="heading-section" style="font-size:24px;">CHƯƠNG HỒI</h2>
              <p class="subtitle">Bí lẩn được bật mí</p>
            </div>
          </div>
          <div class="chapters-grid reveal" style="margin-top:40px;">
            ${[1,2,3,4].map(i => `
              <div class="chapter-card hover-lift">
                <div class="chapter-card__image">
                  <div style="width:100%;height:100%;background:linear-gradient(${135 + i * 20}deg, #1a0505, #0d0000);display:flex;align-items:center;justify-content:center;">
                    <span style="font-size:20px;opacity:0.4;">📕</span>
                  </div>
                </div>
                <div>
                  <div class="chapter-card__title">CHƯƠNG ${i}: KHỞI NGUỒN</div>
                  <div class="chapter-card__subtitle">Khám phá chương ${i}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Key Locations -->
      <section class="section section--dark">
        <div class="container">
          <div class="section__header reveal">
            <div style="display:flex;align-items:center;gap:16px;justify-content:center;">
              <div style="flex:1;height:2px;background:linear-gradient(90deg,transparent,var(--color-gold-600));max-width:200px;"></div>
              <h2 class="section__title" style="margin-bottom:0;white-space:nowrap;">ĐỊA DANH THEN CHỐT</h2>
              <div style="flex:1;height:2px;background:linear-gradient(90deg,var(--color-gold-600),transparent);max-width:200px;"></div>
            </div>
          </div>
          <div class="locations-grid reveal" style="margin-top:40px;">
            ${['Nhà Hứa', 'Khu Rừng', 'Hầm Mộ', 'Sân Vườn'].map((name, i) => `
              <div class="location-card hover-lift">
                <div class="location-card__image hover-glow-red">
                  <div style="width:100%;height:100%;background:linear-gradient(${135 + i * 25}deg, #1a0505, #0d0000);display:flex;align-items:center;justify-content:center;">
                    <span style="font-size:24px;opacity:0.3;">🏚️</span>
                  </div>
                </div>
                <div class="location-card__name">${name}</div>
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
