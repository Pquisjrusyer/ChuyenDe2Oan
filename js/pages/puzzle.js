/* ========================================================
   OAN — PUZZLE PAGE (GIẢI ĐỐ)
   Figma Node: 1104:77421 (Desktop)
   ======================================================== */

import { getReadySectionHTML } from '../components/ready-section.js';

export async function renderPuzzle(container) {
  container.innerHTML = `
    <div class="puzzle-page-wrapper" data-node-id="1104:77421">

      <!-- ========================================================
           1. HERO SECTION: GIẢI ĐỐ (1104:77669)
           ======================================================== -->
      <section class="puz-hero-section" data-node-id="1104:77669">
        <div class="puz-hero-frame-container trailer-scroll-reveal trailer-reveal-fade-up" data-node-id="1104:77670">
          
          <!-- Cryptex Dossier Collage Background (1104:77687) -->
          <div class="puz-hero-bg-media" data-node-id="1104:77687">
            <img src="./assets/65a0dd2d91ef9f5c23b145b3fda30ee1285a3e8a.png" alt="Cryptex Dossier" class="puz-hero-bg-img" />
          </div>

          <!-- Hero Typography Right (1104:77675) -->
          <div class="puz-hero-content-right" data-node-id="1104:77675">
            <h1 class="puz-hero-main-title" data-node-id="1104:77671">GIẢI ĐỐ</h1>
            <div class="puz-hero-subtitle-box" data-node-id="1104:77672">
              <p class="puz-hero-subtitle-line">Quan sát, suy luận và tìm ra lời giải. Những bí mật ẩn giấu trong bóng tối chỉ</p>
              <p class="puz-hero-subtitle-line">dành cho những tâm trí sắc bén nhất.</p>
            </div>
          </div>

        </div>

        <!-- Grunge Texture Overlay (1104:77681) -->
        <div class="puz-hero-grunge-overlay" data-node-id="1104:77681">
          <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" class="puz-hero-grunge-img" />
        </div>
      </section>

      <!-- ========================================================
           2. CORE MECHANISM: ĐỐI MẶT VỚI SỰ THẬT (1104:77685)
           ======================================================== -->
      <section class="puz-coche-section" data-node-id="1104:77685">
        <div class="puz-coche-inner-container" data-node-id="1135:76883">

          <!-- Left Column: Tilted REC Monitor & Tags (1135:76884) -->
          <div class="puz-coche-left-col trailer-scroll-reveal trailer-reveal-left">
            
            <!-- Tilted Monitor Frame with Plaque (farm ngoài.svg - 1135:76885) -->
            <div class="puz-coche-monitor-wrap" data-node-id="1135:76885">
              <img src="./assets/farm-ngoai.svg" alt="Cơ chế cốt lõi - Giải đố" class="puz-coche-farm-ngoai-svg" />
            </div>

            <!-- 3 Cut-Corner Tag Buttons (1135:76902) -->
            <div class="puz-coche-tags-row" data-node-id="1135:76902">
              
              <!-- Tag 1: Khám Phá (1135:76903) -> Cut corners on LEFT (1135:76904) -->
              <div class="puz-tag-card" data-node-id="1135:76903">
                <svg viewBox="0 0 299 123" fill="none" xmlns="http://www.w3.org/2000/svg" class="puz-tab-frame-svg" preserveAspectRatio="none" data-node-id="1135:76904">
                  <path d="M24 1.5H297.5V121.5H24L1.5 98.5V24.5L24 1.5Z" fill="url(#tabGrad1)" stroke="#5E2201" stroke-width="1.5" class="puz-tab-svg-path"/>
                  <defs>
                    <linearGradient id="tabGrad1" x1="8" y1="3" x2="298" y2="122" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#1C0000"/>
                      <stop offset="0.5" stop-color="#020000"/>
                      <stop offset="1" stop-color="#1D0000"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div class="puz-tag-card-content">
                  <div class="puz-tag-top-row" data-node-id="1135:76906">
                    <div class="puz-tab-figma-icon" data-node-id="1104:77701">
                      <div class="puz-tab-figma-icon-crop">
                        <img src="./assets/e151534de38dbcb2444bc45349d01c9fed1305e9.png" alt="" class="puz-tab-icon-sprite puz-tab-icon-sprite--eye" />
                      </div>
                    </div>
                    <span class="puz-tag-heading" data-node-id="1135:76908">KHÁM PHÁ</span>
                  </div>
                  <div class="puz-tag-bottom-row" data-node-id="1135:76909">
                    <span class="puz-tag-sub" data-node-id="1135:76910">ĐI TÌM SỰ THẬT</span>
                  </div>
                </div>
              </div>

              <!-- Tag 2: Giải Đố - Active (1135:76911) -> Full Rectangle (1135:76912) -->
              <div class="puz-tag-card puz-tag-card--active" data-node-id="1135:76911">
                <svg viewBox="0 0 299 123" fill="none" xmlns="http://www.w3.org/2000/svg" class="puz-tab-frame-svg" preserveAspectRatio="none" data-node-id="1135:76912">
                  <rect x="1.5" y="1.5" width="296" height="120" fill="url(#tabGrad2)" stroke="#5E2201" stroke-width="1.5" class="puz-tab-svg-rect"/>
                  <defs>
                    <linearGradient id="tabGrad2" x1="8" y1="3" x2="298" y2="122" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#1C0000"/>
                      <stop offset="0.5" stop-color="#020000"/>
                      <stop offset="1" stop-color="#1D0000"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div class="puz-tag-card-content">
                  <div class="puz-tag-top-row" data-node-id="1135:76914">
                    <div class="puz-tab-figma-icon" data-node-id="1104:77698">
                      <div class="puz-tab-figma-icon-crop">
                        <img src="./assets/e151534de38dbcb2444bc45349d01c9fed1305e9.png" alt="" class="puz-tab-icon-sprite puz-tab-icon-sprite--puzzle" />
                      </div>
                    </div>
                    <span class="puz-tag-heading" data-node-id="1135:76916">GIẢI ĐỐ</span>
                  </div>
                  <div class="puz-tag-bottom-row" data-node-id="1135:76917">
                    <span class="puz-tag-sub" data-node-id="1135:76918">MỞ LỐI BÍ ẨN</span>
                  </div>
                </div>
              </div>

              <!-- Tag 3: Ký Ức (1135:76919) -> Cut corners on RIGHT (1135:76920) -->
              <div class="puz-tag-card" data-node-id="1135:76919">
                <svg viewBox="0 0 299 123" fill="none" xmlns="http://www.w3.org/2000/svg" class="puz-tab-frame-svg" preserveAspectRatio="none" data-node-id="1135:76920">
                  <path d="M1.5 1.5H275L297.5 24.5V98.5L275 121.5H1.5V1.5Z" fill="url(#tabGrad3)" stroke="#5E2201" stroke-width="1.5" class="puz-tab-svg-path"/>
                  <defs>
                    <linearGradient id="tabGrad3" x1="8" y1="3" x2="298" y2="122" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#1C0000"/>
                      <stop offset="0.5" stop-color="#020000"/>
                      <stop offset="1" stop-color="#1D0000"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div class="puz-tag-card-content">
                  <div class="puz-tag-top-row" data-node-id="1135:76922">
                    <div class="puz-tab-figma-icon" data-node-id="1104:77702">
                      <div class="puz-tab-figma-icon-crop">
                        <img src="./assets/e151534de38dbcb2444bc45349d01c9fed1305e9.png" alt="" class="puz-tab-icon-sprite puz-tab-icon-sprite--book" />
                      </div>
                    </div>
                    <span class="puz-tag-heading" data-node-id="1135:76924">KÝ ỨC</span>
                  </div>
                  <div class="puz-tag-bottom-row" data-node-id="1135:76925">
                    <span class="puz-tag-sub" data-node-id="1135:76926">LẬT LẠI QUÁ KHỨ</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          <!-- Right Column: Narrative & Investigation Note (1135:76927) -->
          <div class="puz-coche-right-col trailer-scroll-reveal trailer-reveal-right" data-node-id="1135:76927">
            
            <div class="puz-coche-title-box" data-node-id="1135:76928">
              <h2 class="puz-coche-main-heading" data-node-id="1135:76929">
                ĐỐI MẶT<br/>VỚI SỰ THẬT
              </h2>
              <p class="puz-coche-desc" data-node-id="1135:76930">
                Trong <span class="puz-highlight-crimson">Nhà Hứa</span>, mọi thứ đều có lý do để tồn tại. Bạn sẽ khám phá những góc tối bị lãng quên và thu thập manh mối, giải mã những bí ẩn và dần hé lộ sự thật đằng sau lời hứa năm xưa.
              </p>
            </div>

            <!-- Investigation Note (1135:76931) -->
            <div class="puz-coche-note-box" data-node-id="1135:76931">
              <span class="puz-note-label" data-node-id="1135:76932">GHI CHÚ TỪ ĐIỀU TRA</span>
              <div class="puz-note-quote-block" data-node-id="1135:76933">
                <div class="puz-quote-line-1" data-node-id="1135:76934">
                  <span class="puz-quote-mark">“</span>
                  <span class="puz-quote-text">Sự im lặng đôi khi nói lên </span>
                </div>
                <div class="puz-quote-line-2" data-node-id="1135:76935">
                  <span class="puz-quote-text">nhiều điều hơn tiếng hét</span>
                  <span class="puz-quote-mark">”</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <!-- ========================================================
           3. PUZZLE TYPES: CÁC LOẠI CÂU ĐỐ (1135:76940)
           ======================================================== -->
      <section class="puz-types-section" data-node-id="1135:76940">
        
        <!-- Plaque Banner Header (1135:77094) -->
        <div class="puz-plaque-header-box trailer-scroll-reveal trailer-reveal-fade-up" data-node-id="1135:77094">
          <div class="puz-plaque-bg" data-node-id="1135:77095">
            <img src="./assets/d8809587d3698ce712d4fc207feeb7613be0ca4b.png" alt="" />
          </div>
          <div class="puz-plaque-title-wrap" data-node-id="1135:77096">
            <h2 class="puz-plaque-header-title" data-node-id="1135:77097">Các loại câu đố</h2>
          </div>
        </div>

        <!-- 4 Puzzle Cards Row (1135:77146) -->
        <div class="puz-types-grid trailer-scroll-reveal trailer-reveal-scale" data-node-id="1135:77146">
          
          <!-- Card 1: Object Puzzle (1135:77043) -->
          <div class="puz-type-card-outer" data-node-id="1135:77043">
            <div class="puz-type-card-svg-wrap">
              <img src="./assets/cau-do-1.svg" alt="Object Puzzle" class="puz-type-card-svg-bg" />
            </div>
          </div>

          <!-- Card 2: Logic Puzzle (1135:77110) -->
          <div class="puz-type-card-outer" data-node-id="1135:77110">
            <div class="puz-type-card-svg-wrap">
              <img src="./assets/cau-do-2.svg" alt="Logic Puzzle" class="puz-type-card-svg-bg" />
            </div>
          </div>

          <!-- Card 3: Environmental (1135:77122) -->
          <div class="puz-type-card-outer" data-node-id="1135:77122">
            <div class="puz-type-card-svg-wrap">
              <img src="./assets/cau-do-3.svg" alt="Environmental Puzzle" class="puz-type-card-svg-bg" />
            </div>
          </div>

          <!-- Card 4: Symbol Puzzle (1135:77134) -->
          <div class="puz-type-card-outer" data-node-id="1135:77134">
            <div class="puz-type-card-svg-wrap">
              <img src="./assets/cau-do-4.svg" alt="Symbol Puzzle" class="puz-type-card-svg-bg" />
            </div>
          </div>

        </div>

        <!-- Bottom Tag Button (Button - 1135:77227) -->
        <div class="puz-types-footer-action trailer-scroll-reveal trailer-reveal-fade-up">
          <div class="puz-mysteries-btn-wrap" data-node-id="1135:77227">
            <div class="puz-horror-corners-wrap" data-node-id="1135:77207">
              <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="puz-corner-left" />
              <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="puz-corner-right" />
            </div>
            <div class="puz-mysteries-field-box" data-node-id="1135:77208">
              <span class="puz-mysteries-text-iceberg" data-node-id="1135:77209">
                những bí ẩn đang cần được khám phá
              </span>
            </div>
          </div>
        </div>

      </section>

      <!-- ========================================================
           4. HINT SYSTEM: CƠ CHẾ GỢI Ý & TIẾP TỤC (1135:77268)
           ======================================================== -->
      <section class="puz-hints-section" data-node-id="1135:77268">
        
        <!-- Vignette Gradients (1135:77604 & 1135:77605) -->
        <div class="puz-hints-vignette-left" data-node-id="1135:77604"></div>
        <div class="puz-hints-vignette-right" data-node-id="1135:77605"></div>

        <!-- Plaque Banner Header (1135:77599) -->
        <div class="puz-plaque-header-box trailer-scroll-reveal trailer-reveal-fade-up" data-node-id="1135:77599">
          <div class="puz-plaque-bg" data-node-id="1135:77600">
            <img src="./assets/d8809587d3698ce712d4fc207feeb7613be0ca4b.png" alt="" />
          </div>
          <div class="puz-plaque-title-wrap" data-node-id="1135:77601">
            <h2 class="puz-plaque-header-title" data-node-id="1135:77602">CƠ CHẾ GỢI Ý</h2>
          </div>
        </div>

        <!-- 3 Interactive Accordion Options (Options - 1135:77295) -->
        <div class="puz-accordion-container trailer-scroll-reveal trailer-reveal-scale" data-node-id="1135:77295">
          
          <!-- Option 1: Tâm Nhãn (1135:77296) -->
          <div class="puz-accordion-item" data-node-id="1135:77296">
            <div class="puz-accordion-texture">
              <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" />
            </div>
            <button class="puz-accordion-header" type="button" aria-expanded="false" data-node-id="I1135:77296;1040:76537">
              <span class="puz-accordion-title" data-node-id="I1135:77296;1040:76539">TÂM NHÃN</span>
              <span class="puz-accordion-icon" data-node-id="I1135:77296;1040:76540">
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.875 11.125H0V8.875H8.875V0H11.125V8.875H20V11.125H11.125V20H8.875V11.125Z" fill="currentColor"/>
                </svg>
              </span>
            </button>
            <div class="puz-accordion-body" data-node-id="I1135:77296;1040:76547">
              <p class="puz-accordion-text" data-node-id="I1135:77296;1040:76550">
                Kích hoạt giác quan thứ sáu để nhìn thấy những luồng khí tà ma và ký hiệu ẩn giấu mà mắt thường không thể phát hiện. Giúp nhận biết các vật phẩm tương tác trong bóng tối sâu thẳm.
              </p>
            </div>
          </div>

          <!-- Option 2: Sổ Tay Manh Mối (1135:77297) -->
          <div class="puz-accordion-item" data-node-id="1135:77297">
            <div class="puz-accordion-texture">
              <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" />
            </div>
            <button class="puz-accordion-header" type="button" aria-expanded="false" data-node-id="I1135:77297;1040:76537">
              <span class="puz-accordion-title" data-node-id="I1135:77297;1040:76539">SỔ TAY MANH MỐI</span>
              <span class="puz-accordion-icon" data-node-id="I1135:77297;1040:76540">
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.875 11.125H0V8.875H8.875V0H11.125V8.875H20V11.125H11.125V20H8.875V11.125Z" fill="currentColor"/>
                </svg>
              </span>
            </button>
            <div class="puz-accordion-body" data-node-id="I1135:77297;1040:76547">
              <p class="puz-accordion-text" data-node-id="I1135:77297;1040:76550">
                Tự động ghi chép và xâu chuỗi tất cả các tài liệu, hình ảnh, lời khai thu thập được trong quá trình điều tra để gợi mở hướng đi tiếp theo.
              </p>
            </div>
          </div>

          <!-- Option 3: Âm Thanh Chỉ Hướng (1135:77298) -->
          <div class="puz-accordion-item" data-node-id="1135:77298">
            <div class="puz-accordion-texture">
              <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" />
            </div>
            <button class="puz-accordion-header" type="button" aria-expanded="false" data-node-id="I1135:77298;1040:76537">
              <span class="puz-accordion-title" data-node-id="I1135:77298;1040:76539">ÂM THANH CHỈ HƯỚNG</span>
              <span class="puz-accordion-icon" data-node-id="I1135:77298;1040:76540">
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.875 11.125H0V8.875H8.875V0H11.125V8.875H20V11.125H11.125V20H8.875V11.125Z" fill="currentColor"/>
                </svg>
              </span>
            </button>
            <div class="puz-accordion-body" data-node-id="I1135:77298;1040:76547">
              <p class="puz-accordion-text" data-node-id="I1135:77298;1040:76550">
                Lắng nghe các tiếng động bất thường, tiếng thì thầm hoặc tiếng gõ cửa từ không gian xung quanh để định vị chính xác vị trí cần khảo sát.
              </p>
            </div>
          </div>

        </div>

        <!-- Continue Challenge CTA (1135:77840) -->
        <div class="puz-continue-challenge-block trailer-scroll-reveal trailer-reveal-fade-up" data-node-id="1135:77840">
          
          <div class="puz-continue-heading-wrap" data-node-id="I1135:77606;1104:77378">
            <h2 class="puz-continue-title" data-node-id="I1135:77606;1104:77379">
              MỌI MANH MỐI ĐÃ SẴN SÀNG. BẠN<br/>ĐÃ ĐỦ CAN ĐẢM ĐỂ KẾT NỐI CHÚNG?
            </h2>
          </div>

          <div class="puz-continue-desc-wrap" data-node-id="I1135:77606;1104:77381">
            <p class="puz-continue-desc" data-node-id="I1135:77606;1104:77382">
              Sau khi giải  đố và có những manh mối 
            </p>
          </div>

          <!-- Multi-layered Horror CTA Button (1135:77606) -->
          <a href="#investigation" class="puz-horror-cta-btn" data-node-id="I1135:77606;1104:77388" aria-label="Tiếp tục đến Manh Mối">
            
            <!-- Layer 1: Frame Parts -->
            <div class="puz-btn-frame-bg">
              <img src="./assets/105ebc7cda031fdb485695b18a341cec252f1d95.png" alt="" class="puz-btn-part-1" />
              <div class="puz-btn-part-2" style="background-image: url('./assets/a1b7e3991a46b5a64f1f7dac3536b09a9e87a8ba.png');"></div>
              <img src="./assets/0d6b9966ff2827a216126f97de3fae66e8b0f69d.png" alt="" class="puz-btn-part-3" />
              <div class="puz-btn-part-4" style="background-image: url('./assets/a52a7c4b8dc8beffb2f5577f0501b16b1cfce647.png');"></div>
              <img src="./assets/18c99e59fbe5fb1f1a0cf0ff28f9c309e0b87822.png" alt="" class="puz-btn-part-5" />
            </div>

            <!-- Layer 2: Inner Blood & Grunge Texture -->
            <div class="puz-btn-inner-body">
              <div class="puz-btn-grad-overlay"></div>
              <div class="puz-btn-texture-wrap">
                <img src="./assets/ea8df93482c54ccfe7b61d0a530fea954eb54fd3.png" alt="" class="puz-btn-texture-img" />
              </div>
            </div>

            <!-- Layer 3: Neon Red Glowing Borders -->
            <div class="puz-btn-glow-frame-3"></div>
            <div class="puz-btn-glow-frame-2"></div>
            <div class="puz-btn-glow-frame-1"></div>

            <!-- Layer 4: Button Label -->
            <span class="puz-btn-label-text">
              Tiếp tục đến Manh Mối
            </span>

          </a>

        </div>

      </section>

      <!-- ========================================================
           5. READY SECTION: BẠN ĐÃ SẴN SÀNG BƯỚC VÀO NHÀ HỨA? (1135:77626)
           ======================================================== -->
      ${getReadySectionHTML()}

    </div>
  `;

  // Scroll Reveal Observer
  const scrollTargets = container.querySelectorAll('.trailer-scroll-reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.15 });
    scrollTargets.forEach(el => observer.observe(el));
  } else {
    scrollTargets.forEach(el => el.classList.add('revealed'));
  }

  // Interactive Accordion for Hint System
  const accordionItems = container.querySelectorAll('.puz-accordion-item');
  accordionItems.forEach(item => {
    const btn = item.querySelector('.puz-accordion-header');
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      // Close others
      accordionItems.forEach(other => {
        if (other !== item) {
          other.querySelector('.puz-accordion-header').setAttribute('aria-expanded', 'false');
          other.classList.remove('puz-accordion-item--open');
        }
      });
      // Toggle current
      btn.setAttribute('aria-expanded', !isExpanded);
      item.classList.toggle('puz-accordion-item--open', !isExpanded);
    });
  });

  // Interactive Tag Cards (click to highlight)
  const tagCards = container.querySelectorAll('.puz-tag-card');
  tagCards.forEach(card => {
    card.addEventListener('click', () => {
      tagCards.forEach(c => c.classList.remove('puz-tag-card--active'));
      card.classList.add('puz-tag-card--active');
    });
  });
}
