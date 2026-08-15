/* ============================================
   OAN — Puzzle Page (Design 24: 1104-77421)
   ============================================ */

export async function renderPuzzle(container) {
  container.innerHTML = `
    <div class="page-home" style="padding-top:var(--nav-height);">
      <!-- Hero -->
      <section class="feature-hero">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;">
          <div class="animate-fade-in-left">
            <div style="border:2px solid rgba(139,0,0,0.3);aspect-ratio:16/9;background:linear-gradient(135deg, #1a0505, #0d0000);display:flex;align-items:center;justify-content:center;">
              <span style="font-size:48px;opacity:0.3;">🧩</span>
            </div>
          </div>
          <div class="animate-fade-in-right">
            <h1 style="font-family:var(--font-display);font-size:56px;font-weight:700;color:var(--color-text-gold);text-transform:uppercase;line-height:1.1;margin-bottom:16px;">
              GIẢI ĐỐ
            </h1>
            <p style="font-size:14px;color:var(--color-gray-400);line-height:1.7;">
              NateCode, sử dụng pha trò để chơi bãi phản gia minh ghi sự hiệu quả hơn và hình thức 
              kho tàng câu chuyện hay hơn.
            </p>
          </div>
        </div>
      </section>

      <!-- Face the Truth -->
      <section class="section">
        <div class="container">
          <div class="feature-split reveal">
            <div>
              <div style="position:relative;border:2px solid rgba(139,0,0,0.3);overflow:hidden;">
                <div style="width:100%;aspect-ratio:4/3;background:linear-gradient(135deg, #1a0505, #0d0000);display:flex;align-items:center;justify-content:center;">
                  <span style="font-size:48px;opacity:0.3;">📹</span>
                </div>
                <div style="position:absolute;top:12px;left:12px;display:flex;align-items:center;gap:8px;">
                  <span style="font-family:var(--font-display);font-size:11px;color:var(--color-white);text-transform:uppercase;background:rgba(139,0,0,0.5);padding:4px 8px;">● CƠ CHẾ CỐT LÕI</span>
                </div>
                <div style="position:absolute;top:12px;right:12px;">
                  <span style="font-size:12px;color:var(--color-red-600);">● REC</span>
                </div>
              </div>
            </div>
            <div>
              <h2 style="font-family:var(--font-display);font-size:36px;font-weight:700;color:var(--color-white);text-transform:uppercase;line-height:1.2;margin-bottom:20px;">
                ĐỐI MẶT<br/>VỚI SỰ THẬT
              </h2>
              <p style="font-size:14px;color:var(--color-gray-400);line-height:1.8;margin-bottom:24px;">
                Trong <span style="color:var(--color-gold-400);">Nhà Hứa</span>, mọi thứ đều có lý do để tồn 
                tại. Bạn sẽ khám phá những góc tối bí bông quên xả hi thập manh mối, giải mật những bí 
                ẩn và dẫn tất hệ tối sự thật đáng sợ của hua năm mưa.
              </p>
              <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:16px;">
                ${['Ghép Phần', 'Giải Đố', 'Kỳ Bí', 'Suy Luận'].map((name, i) => `
                  <div style="text-align:center;padding:8px;border:1px solid rgba(255,255,255,0.06);">
                    <div style="font-size:16px;margin-bottom:4px;">🧩</div>
                    <div style="font-family:var(--font-display);font-size:10px;color:var(--color-gray-400);text-transform:uppercase;">${name}</div>
                  </div>
                `).join('')}
              </div>
              <p style="font-size:12px;color:var(--color-gray-500);font-style:italic;">
                Cà một đàng cho hoàn thành ban đầu!<br/>
                nhưng.. hiểu hay hoàn tìm nghiệm!
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Puzzle Types -->
      <section class="section section--dark">
        <div class="container">
          <div class="section__header reveal">
            <div class="section-heading-box">
              <h2 class="heading-section" style="font-size:24px;">Các loại câu đố</h2>
            </div>
          </div>
          <div class="steps-grid reveal" style="margin-top:40px;">
            ${[
              { icon: '🏠', title: 'Object Puzzle', desc: '' },
              { icon: '🧠', title: 'Logic Puzzle', desc: '' },
              { icon: '🌿', title: 'Environmental', desc: '' },
              { icon: '❓', title: 'Symbol Puzzle', desc: '' },
            ].map(item => `
              <div class="step-card hover-lift">
                <div class="step-card__image hover-glow-red">
                  <div style="width:100%;height:100%;background:linear-gradient(135deg, #1a0505, #0d0000);display:flex;align-items:center;justify-content:center;">
                    <span style="font-size:40px;opacity:0.5;">${item.icon}</span>
                  </div>
                </div>
                <div class="step-card__title">${item.title}</div>
              </div>
            `).join('')}
          </div>
          <div style="text-align:right;margin-top:16px;" class="reveal">
            <span style="font-size:12px;color:var(--color-gold-400);cursor:pointer;">những bí ẩn cần thời gian để khám phá giải →</span>
          </div>
        </div>
      </section>

      <!-- Hint System -->
      <section class="section">
        <div class="container">
          <div class="section__header reveal">
            <div style="display:flex;align-items:center;gap:16px;justify-content:center;">
              <div style="flex:1;height:2px;background:linear-gradient(90deg,transparent,var(--color-gold-600));max-width:200px;"></div>
              <h2 class="section__title" style="margin-bottom:0;white-space:nowrap;font-size:20px;">CƠ CHẾ GỢI Ý</h2>
              <div style="flex:1;height:2px;background:linear-gradient(90deg,var(--color-gold-600),transparent);max-width:200px;"></div>
            </div>
          </div>
          <div style="max-width:600px;margin:32px auto 0;" class="reveal">
            ${['Tầm Nhìn', 'Sổ Tay Manh Mới', 'Âm Thanh Chỉ Hướng'].map(item => `
              <div style="display:flex;align-items:center;gap:16px;padding:16px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                <span style="color:var(--color-gold-400);font-size:18px;">▸</span>
                <span style="font-family:var(--font-display);font-size:16px;font-weight:700;color:var(--color-white);text-transform:uppercase;">${item}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Challenge CTA -->
      <section class="section section--dark">
        <div class="container" style="text-align:center;">
          <div class="reveal">
            <h3 style="font-family:var(--font-display);font-size:20px;font-weight:700;color:var(--color-white);text-transform:uppercase;margin-bottom:8px;">
              MỌI MANH MỐI ĐÃ SẴN SÀNG. BẠN ĐÃ ĐỦ CAN ĐẢM ĐỂ KẾT NỐI CHÚNG?
            </h3>
            <p style="font-size:13px;color:var(--color-gray-400);margin-bottom:24px;">
              Khám phá tất cả câu đố khi bạn bước vào thế giới OÁN
            </p>
            <a href="#collection" class="btn btn-cta" style="font-size:13px;">Tiếp tục tìm đến Bộ sưu →</a>
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
