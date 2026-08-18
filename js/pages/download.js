/* ========================================================
   OAN Horror Game — Download Page (Figma Node: 1170:80024)
   ======================================================== */

import { initDownloadScrollTriggers } from '../utils/smooth-scroll.js';

export async function renderDownload(container) {
  container.innerHTML = `
    <div class="figma-download-page" data-node-id="1170:80024">
      
      <!-- ========================================================
           1. HERO SECTION (1170:80129)
           ======================================================== -->
      <section class="dl-hero-section" data-node-id="1170:80129">
        <!-- Background Grunge 78042 (1195:78612) -->
        <div class="dl-hero-bg-grunge" data-node-id="1195:78612">
          <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" />
        </div>
        <!-- 3 Vignettes (Left, Right, Bottom) -->
        <div class="dl-hero-vignette-left" data-node-id="1195:78614"></div>
        <div class="dl-hero-vignette-right" data-node-id="1195:78613"></div>
        <div class="dl-hero-vignette-bottom" data-node-id="1195:78618"></div>

        <div class="dl-hero-main-container">
          
          <!-- Left Column (1195:78465) -->
          <div class="dl-hero-col-left" data-node-id="1195:78465">
            
            <!-- Title & CTA Top (1195:78466) -->
            <div class="dl-hero-top-block" data-node-id="1195:78466">
              
              <!-- Giant Stone Cut Header: TẢI OÁN (1195:78467) -->
              <div class="dl-hero-stone-title" data-node-id="1195:78467">
                <div class="stone-part-tai">
                  <img src="./assets/f40e310091f944c3bc33beca5b22539c57cc2e86.svg" alt="TẢI" />
                </div>
                <div class="stone-part-oan">
                  <img src="./assets/535d2e1003d5e932c4e62d0ec790fce5f9859145.svg" alt="OÁN" />
                </div>
              </div>

              <!-- Quote / Description with Red Left Border (1195:78476) -->
              <div class="dl-hero-quote-box" data-node-id="1195:78476">
                <p class="dl-hero-quote-text" data-node-id="1195:78477">
                  Bóng tối không chỉ là nơi sự thật bị chôn vùi.<br />
                  Hãy cầm đèn pin, ghi lại dấu vết và khám phá bí ẩn trong <span class="text-crimson-hua">Ngôi Nhà Hứa.</span>
                </p>
              </div>

              <!-- 2 Action Buttons (1195:78478) -->
              <div class="dl-hero-actions-row" data-node-id="1195:78478">
                <!-- Button 1: TẢI NGAY (1191:80344) -->
                <a href="#download-stores" class="btn-dl-metal-crimson" data-node-id="1191:80344">
                  <!-- Top Accent Vector (1191:80225) -->
                  <div class="btn-metal-vector-top" data-node-id="1191:80225">
                    <img src="./assets/493ada44689bcb87ec64c7b44d4805b8d6e975c4.svg" alt="" />
                  </div>
                  <div class="btn-metal-texture-bg">
                    <img src="./assets/5caa891f8a3fbb082b8f6ca116e8eeb5002cfede.png" alt="" />
                  </div>
                  <div class="btn-metal-inner-frame">
                    <div class="btn-metal-content">
                      <div class="btn-metal-icon" data-node-id="1191:80184">
                        <img src="./assets/71f4010765d55b89e2f0095263de34cb57a0180b.svg" alt="" />
                      </div>
                      <span class="btn-metal-label" data-node-id="1191:80228">TẢI NGAY</span>
                    </div>
                  </div>
                  <!-- Bottom Accent Vector (1191:80227) -->
                  <div class="btn-metal-vector-bottom" data-node-id="1191:80227">
                    <img src="./assets/7f80af830bd0e83c801d68b7904c77f446fa398a.svg" alt="" />
                  </div>
                </a>

                <!-- Button 2: CẤU HÌNH HỆ THỐNG (1191:80340) -->
                <a href="#dl-specs-section" class="btn-dl-metal-stone" data-node-id="1191:80340">
                  <div class="btn-metal-stone-bg">
                    <img src="./assets/9d2c1d4893b4588362b331a915cdf59b07e9c40a.png" alt="" />
                  </div>
                  <div class="btn-metal-stone-frame">
                    <div class="btn-metal-stone-content">
                      <span class="btn-metal-stone-label" data-node-id="1191:80244">CẤU HÌNH HỆ THỐNG</span>
                    </div>
                  </div>
                </a>
              </div>

            </div>

            <!-- Bottom 4 Feature Tiles Strip (1195:78481) -->
            <div class="dl-hero-bottom-strip" data-node-id="1195:78481">
              <!-- Panel Background (1195:78483) -->
              <div class="dl-strip-bg-panel" data-node-id="1195:78483">
                <img src="./assets/67aec6f569e9c46b6c54699002eed1e0eed782fb.png" alt="" />
              </div>
              <div class="dl-strip-blur-shadow" data-node-id="1195:78484"></div>

              <!-- 4 Tiles Container (1195:78485) -->
              <div class="dl-strip-tiles-flex" data-node-id="1195:78485">
                
                <!-- Tile 1: GHI LẠI (1195:1711) -->
                <button type="button" class="dl-strip-tile" data-node-id="1195:1711" onclick="window.location.hash='storyline'">
                  <div class="dl-tile-icon-box" data-node-id="1195:1709">
                    <div class="dl-tile-icon-crop icon-crop-1" data-node-id="1195:1667">
                      <img src="./assets/07bedc5ee991bde9d08e92352475b5536e5b5c5b.png" alt="Ghi lại" />
                    </div>
                  </div>
                  <div class="dl-tile-text-col" data-node-id="1195:1707">
                    <h3 class="dl-tile-title" data-node-id="1195:1705">GHI LẠI</h3>
                    <p class="dl-tile-sub" data-node-id="1195:1706">Mọi dấu vết</p>
                  </div>
                </button>

                <!-- Tile 2: PHÂN TÍCH (1195:78487) -->
                <button type="button" class="dl-strip-tile" data-node-id="1195:78487" onclick="window.location.hash='gameplay'">
                  <div class="dl-tile-icon-box" data-node-id="I1195:78487;1195:1709">
                    <div class="dl-tile-icon-crop icon-crop-2" data-node-id="I1195:78487;1195:1703;1195:1669">
                      <img src="./assets/07bedc5ee991bde9d08e92352475b5536e5b5c5b.png" alt="Phân tích" />
                    </div>
                  </div>
                  <div class="dl-tile-text-col" data-node-id="I1195:78487;1195:1707">
                    <h3 class="dl-tile-title" data-node-id="I1195:78487;1195:1705">PHÂN TÍCH</h3>
                    <p class="dl-tile-sub" data-node-id="I1195:78487;1195:1706">Lời thì thầm</p>
                  </div>
                </button>

                <!-- Tile 3: KHÁM PHÁ (1195:78488) -->
                <button type="button" class="dl-strip-tile" data-node-id="1195:78488" onclick="window.location.hash='trailer'">
                  <div class="dl-tile-icon-box" data-node-id="I1195:78488;1195:1709">
                    <div class="dl-tile-icon-crop icon-crop-3" data-node-id="I1195:78488;1195:1703;1195:1670">
                      <img src="./assets/07bedc5ee991bde9d08e92352475b5536e5b5c5b.png" alt="Khám phá" />
                    </div>
                  </div>
                  <div class="dl-tile-text-col" data-node-id="I1195:78488;1195:1707">
                    <h3 class="dl-tile-title" data-node-id="I1195:78488;1195:1705">KHÁM PHÁ</h3>
                    <p class="dl-tile-sub" data-node-id="I1195:78488;1195:1706">Ngôi Nhà Hứa</p>
                  </div>
                </button>

                <!-- Tile 4: ĐỐI MẶT (1195:78489) -->
                <button type="button" class="dl-strip-tile" data-node-id="1195:78489" onclick="window.location.hash='character'">
                  <div class="dl-tile-icon-box" data-node-id="I1195:78489;1195:1709">
                    <div class="dl-tile-icon-crop icon-crop-4" data-node-id="I1195:78489;1195:1703;1195:1671">
                      <img src="./assets/07bedc5ee991bde9d08e92352475b5536e5b5c5b.png" alt="Đối mặt" />
                    </div>
                  </div>
                  <div class="dl-tile-text-col" data-node-id="I1195:78489;1195:1707">
                    <h3 class="dl-tile-title" data-node-id="I1195:78489;1195:1705">ĐỐI MẶT</h3>
                    <p class="dl-tile-sub" data-node-id="I1195:78489;1195:1706">Sự thật</p>
                  </div>
                </button>

              </div>
            </div>

          </div>

          <!-- Right Column: Haunted Polaroid Frame (1195:78583 / 1195:78596) -->
          <div class="dl-hero-col-right" data-node-id="1195:78583">
            <div class="dl-polaroid-haunted-frame">
              <!-- Underneath tape / blood paper (1195:78578) -->
              <div class="dl-polaroid-under-paper" data-node-id="1195:78578">
                <img src="./assets/286cec571aa8011cf80113fa5908c160d2cc1808.png" alt="" />
              </div>
              <!-- Main photo frame (1195:78577) -->
              <div class="dl-polaroid-photo-main" data-node-id="1195:78577">
                <img src="./assets/d0f9c63c0860f8dc1a9bf30bb3e3817e5d99f99e.png" alt="Hành lang Nhà Hứa" />
              </div>
              <!-- Bottom Tape Seal (1195:78581) -->
              <div class="dl-polaroid-tape-seal" data-node-id="1195:78581">
                <img src="./assets/286cec571aa8011cf80113fa5908c160d2cc1808.png" alt="" />
              </div>
            </div>
          </div>

          <!-- Secret Document / Envelope on bottom right (1195:78572) -->
          <div class="dl-hero-secret-dossier" data-node-id="1195:78572">
            <img src="./assets/286cec571aa8011cf80113fa5908c160d2cc1808.png" alt="Hồ sơ mật" />
          </div>

        </div>
      </section>

      <!-- ========================================================
           2. KHÁM PHÁ THÊM / STORE DOWNLOADS
           ======================================================== -->
      <section class="dl-stores-section" id="download-stores">
        <div class="dl-stores-header trailer-scroll-reveal trailer-reveal-fade-up">
          <h2 class="dl-stores-title">KHÁM PHÁ THÊM</h2>
          <p class="dl-stores-sub">Trải nghiệm trên nhiều nền tảng và các cổng phân phối</p>
        </div>

        <div class="dl-stores-grid trailer-scroll-reveal trailer-reveal-fade-up delay-150">
          
          <!-- Store 1: Windows PC -->
          <a href="#dl-specs-section" class="dl-store-card">
            <img src="./assets/396fb7eb2459880afb4fb6d8cbb13aadca0cfc8e.png" alt="Windows PC" class="dl-store-card-bg" />
            <div class="dl-store-card-content">
              <h3 class="dl-store-card-title">Window PC</h3>
              <p class="dl-store-card-sub">Tương thích hoàn thiện</p>
            </div>
          </a>

          <!-- Store 2: Steam Store -->
          <a href="https://store.steampowered.com" target="_blank" rel="noopener noreferrer" class="dl-store-card">
            <img src="./assets/5caa891f8a3fbb082b8f6ca116e8eeb5002cfede.png" alt="Steam Store" class="dl-store-card-bg" />
            <div class="dl-store-card-content">
              <h3 class="dl-store-card-title">Steam Store</h3>
              <p class="dl-store-card-sub">Trải nghiệm trực tuyến</p>
            </div>
          </a>

          <!-- Store 3: Epic Store -->
          <a href="https://epicgames.com" target="_blank" rel="noopener noreferrer" class="dl-store-card">
            <img src="./assets/2486c6adcf88fddc97c440c78c0892707c2e7708.png" alt="Epic Store" class="dl-store-card-bg" />
            <div class="dl-store-card-content">
              <h3 class="dl-store-card-title">Epic Store</h3>
              <p class="dl-store-card-sub">Trải nghiệm trực tuyến</p>
            </div>
          </a>

        </div>
      </section>

      <!-- ========================================================
           3. CẤU HÌNH HỆ THỐNG (SYSTEM REQUIREMENTS)
           ======================================================== -->
      <section class="dl-specs-section" id="dl-specs-section">
        
        <!-- Header with Metal Bracket Frame Line -->
        <div class="dl-specs-header trailer-scroll-reveal trailer-reveal-fade-up">
          <div class="faq-ctaline-frame">
            <div class="faq-frame-bracket-left">
              <img src="./assets/5330b79b9e3ec9f5d8e099674f3b9cd251731b0b.svg" alt="" />
            </div>
            <h2 class="dl-specs-heading">CẤU HÌNH</h2>
            <div class="faq-frame-bracket-right">
              <img src="./assets/2a8d91cd956a7b707d91ed3faed539513ed626cf.svg" alt="" />
            </div>
          </div>
        </div>

        <!-- 2 Columns Grid: Tối Thiểu vs Đề Nghị -->
        <div class="dl-specs-grid trailer-scroll-reveal trailer-reveal-fade-up delay-150">
          
          <!-- Column 1: TỐI THIỂU -->
          <div class="dl-specs-col">
            <h3 class="dl-specs-col-title">TỐI THIỂU</h3>
            
            <div class="dl-specs-item">
              <span class="dl-specs-label">HỆ ĐIỀU HÀNH</span>
              <span class="dl-specs-val">Windows 10 64-bit</span>
            </div>

            <div class="dl-specs-item">
              <span class="dl-specs-label">PHẦN CỨNG (CPU)</span>
              <span class="dl-specs-val">Intel Core i5-8400 / AMD Ryzen 5 1600</span>
            </div>

            <div class="dl-specs-item">
              <span class="dl-specs-label">BỘ NHỚ (RAM)</span>
              <span class="dl-specs-val">12 GB RAM</span>
            </div>

            <div class="dl-specs-item">
              <span class="dl-specs-label">ĐỒ HỌA (GPU)</span>
              <span class="dl-specs-val">NVIDIA GeForce GTX 1060 (6GB) / AMD Radeon RX 580</span>
            </div>

            <div class="dl-specs-item">
              <span class="dl-specs-label">DUNG LƯỢNG</span>
              <span class="dl-specs-val">50 GB available space (SSD Recommended)</span>
            </div>
          </div>

          <!-- Column 2: ĐỀ NGHỊ -->
          <div class="dl-specs-col">
            <h3 class="dl-specs-col-title">ĐỀ NGHỊ</h3>
            
            <div class="dl-specs-item">
              <span class="dl-specs-label">HỆ ĐIỀU HÀNH</span>
              <span class="dl-specs-val">Windows 11 64-bit</span>
            </div>

            <div class="dl-specs-item">
              <span class="dl-specs-label">PHẦN CỨNG (CPU)</span>
              <span class="dl-specs-val">Intel Core i7-10700 / AMD Ryzen 7 3700X</span>
            </div>

            <div class="dl-specs-item">
              <span class="dl-specs-label">BỘ NHỚ (RAM)</span>
              <span class="dl-specs-val">16 GB RAM</span>
            </div>

            <div class="dl-specs-item">
              <span class="dl-specs-label">ĐỒ HỌA (GPU)</span>
              <span class="dl-specs-val">NVIDIA RTX 2060 Ti / AMD RX 6700 XT</span>
            </div>

            <div class="dl-specs-item">
              <span class="dl-specs-label">DUNG LƯỢNG</span>
              <span class="dl-specs-val">50 GB available space (NVMe SSD)</span>
            </div>
          </div>

        </div>
      </section>

      <!-- ========================================================
           4. FAQ QUESTIONS SECTION
           ======================================================== -->
      <section class="dl-faq-section">
        <div class="dl-faq-container trailer-scroll-reveal trailer-reveal-fade-up">
          
          <!-- FAQ Item 1 -->
          <div class="faq-accordion-item">
            <button type="button" class="faq-accordion-trigger" aria-expanded="false">
              <h3 class="faq-accordion-question">TÔI CÓ CẦN KẾT NỐI INTERNET ĐỂ CHƠI KHÔNG?</h3>
              <div class="faq-accordion-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
            </button>
            <div class="faq-accordion-content">
              <div class="faq-accordion-body">
                <p>Không bắt buộc. Bạn chỉ cần kết nối Internet một lần duy nhất khi tải game và kích hoạt bản quyền. Sau đó, toàn bộ phần chơi đơn có thể trải nghiệm hoàn toàn Offline.</p>
              </div>
            </div>
          </div>

          <!-- FAQ Item 2 -->
          <div class="faq-accordion-item">
            <button type="button" class="faq-accordion-trigger" aria-expanded="false">
              <h3 class="faq-accordion-question">GAME CÓ HỖ TRỢ TAY CẦM KHÔNG?</h3>
              <div class="faq-accordion-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
            </button>
            <div class="faq-accordion-content">
              <div class="faq-accordion-body">
                <p>Có. OÁN hỗ trợ đầy đủ các dòng tay cầm phổ biến như Xbox Controller, PlayStation DualSense và DualShock 4 với tính năng phản hồi rung chân thực.</p>
              </div>
            </div>
          </div>

          <!-- FAQ Item 3 -->
          <div class="faq-accordion-item">
            <button type="button" class="faq-accordion-trigger" aria-expanded="false">
              <h3 class="faq-accordion-question">CẤU HÌNH MAC CÓ CHƠI ĐƯỢC KHÔNG?</h3>
              <div class="faq-accordion-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
            </button>
            <div class="faq-accordion-content">
              <div class="faq-accordion-body">
                <p>Hiện tại bản phát hành đầu tiên được tối ưu chuyên biệt cho hệ điều hành Windows. Phiên bản dành cho macOS (Apple Silicon M-Series) sẽ được cập nhật trong các phiên bản sau.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ========================================================
           5. FINAL READY CTA SECTION
           ======================================================== -->
      <section class="dl-ready-section trailer-scroll-reveal trailer-reveal-scale">
        <p class="dl-ready-sub">BẠN ĐÃ SẴN SÀNG BƯỚC VÀO NHÀ HỨA?</p>
        <h2 class="dl-ready-title">HÃY ĐẾN VỚI NỖI SỢ ĐỂ KHÁM PHÁ</h2>

        <a href="#download-stores" class="btn-dl-final-submit" onclick="alert('Đang chuyển hướng tới cổng tải bản cài đặt OÁN...');">
          <span class="btn-dl-final-text">TẢI XUỐNG</span>
        </a>

        <p class="dl-ready-req">YÊU CẦU: CORE I5 / 8GB RAM / GTX 1060+</p>
      </section>

    </div>
  `;

  // Bind Accordion Interaction
  const accordionItems = container.querySelectorAll('.faq-accordion-item');
  accordionItems.forEach(item => {
    const trigger = item.querySelector('.faq-accordion-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        accordionItems.forEach(other => {
          if (other !== item) other.classList.remove('open');
        });
        if (isOpen) {
          item.classList.remove('open');
        } else {
          item.classList.add('open');
        }
      });
    }
  });

  // Scroll Reveal Observer
  const scrollTargets = container.querySelectorAll('.trailer-scroll-reveal');
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  scrollTargets.forEach(el => scrollObserver.observe(el));

  setTimeout(() => {
    scrollTargets.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 30) {
        el.classList.add('revealed');
      }
    });
    if (typeof initDownloadScrollTriggers === 'function') {
      initDownloadScrollTriggers();
    }
  }, 100);
}
