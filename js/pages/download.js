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

              <!-- 2 Action Buttons (1195:78479 & 1195:78480) -->
              <div class="dl-hero-actions-row" data-node-id="1195:78478">
                
                <!-- Button 1: TẢI NGAY (1195:78479 / 1191:80344) using exact SVG -->
                <a href="#download-stores" class="btn-dl-tai-ngay-svg" data-node-id="1191:80344">
                  <img src="./assets/tai_ngay_btn.svg" alt="TẢI NGAY" class="btn-tai-ngay-img" />
                </a>

                <!-- Button 2: CẤU HÌNH HỆ THỐNG (1195:78480 / 1191:80340) using exact SVG -->
                <a href="#dl-specs-modal" class="btn-dl-cauhinh-svg" id="btnSpecsModalTrigger" data-node-id="1191:80340">
                  <img src="./assets/cau_hinh_btn.svg" alt="CẤU HÌNH HỆ THỐNG" class="btn-cauhinh-img" />
                </a>
              </div>

            </div>

            <!-- Bottom 4 Feature Tiles Strip with Secret Dossier (1195:78481 & 1195:78572) -->
            <div class="dl-hero-bottom-strip-wrap">
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

              <!-- Secret Document / Envelope under Tile 4 on bottom right (1195:78572 - image 63) -->
              <div class="dl-hero-secret-dossier" data-node-id="1195:78572">
                <div class="dl-secret-dossier-crop">
                  <img src="./assets/d0f9c63c0860f8dc1a9bf30bb3e3817e5d99f99e.png" alt="Hồ sơ mật Nhà Hứa" />
                </div>
              </div>
            </div>

          </div>

          <!-- Right Column: Haunted Polaroid Frame Prototype (1195:78584 - Default & Variant2) -->
          <div class="dl-hero-col-right" data-node-id="1195:78584">
            <button type="button" class="dl-polaroid-haunted-frame" id="dlKhungDiChuyen" data-node-id="1195:78583" aria-label="Khung di chuyển Nhà Hứa">
              <!-- Top Expanded Seal Banner (Variant 2) (1195:78591) -->
              <div class="dl-polaroid-expanded-banner" data-node-id="1195:78591">
                <div class="dl-banner-bg-tape">
                  <img src="./assets/286cec571aa8011cf80113fa5908c160d2cc1808.png" alt="" />
                </div>
                <span class="dl-banner-text-hua" data-node-id="1195:78593">NHÀ HỨA</span>
              </div>

              <!-- Underneath tape / blood paper (1195:78578 / 1195:78589) -->
              <div class="dl-polaroid-under-paper" data-node-id="1195:78578">
                <img src="./assets/286cec571aa8011cf80113fa5908c160d2cc1808.png" alt="" />
              </div>

              <!-- Main photo frame (1195:78577 / 1195:78590) -->
              <div class="dl-polaroid-photo-main" data-node-id="1195:78577">
                <img src="./assets/d0f9c63c0860f8dc1a9bf30bb3e3817e5d99f99e.png" alt="Hành lang Nhà Hứa" />
              </div>

              <!-- Bottom Tape Seal (Default State) (1195:78581) -->
              <div class="dl-polaroid-tape-seal" data-node-id="1195:78581">
                <img src="./assets/286cec571aa8011cf80113fa5908c160d2cc1808.png" alt="" />
              </div>

              <!-- Bottom Curse Text (Variant 2) (1195:78594) -->
              <div class="dl-polaroid-curse-text" data-node-id="1195:78594">
                <span>Không có gì là mãi mãi</span>
              </div>
            </button>
          </div>

        </div>
      </section>

      <!-- ========================================================
           2. KHÁM PHÁ THÊM / PLATFORM SECTION (1195:78620)
           ======================================================== -->
      <section class="dl-stores-section" id="download-stores" data-node-id="1195:78620">
        <!-- Section Header (1218:78496) -->
        <div class="dl-stores-header-wrap trailer-scroll-reveal trailer-reveal-fade-up">
          <div class="dl-stores-header-content" data-node-id="1218:78496">
            <h2 class="dl-stores-title" data-node-id="1218:78494">KHÁM PHÁ THÊM</h2>
            <p class="dl-stores-sub" data-node-id="1218:78495">
              Tải xuống Trò chơi đang có mặt tại các nền tảng
            </p>
          </div>
          <!-- Decorative Divider Line (1218:78497) -->
          <div class="dl-stores-divider-line" data-node-id="1218:78497">
            <img src="./assets/053392dd32a0d7cad857d683b49a10eea5d13941.svg" alt="" />
          </div>
        </div>

        <!-- 3 Platform Cards (1218:78516) -->
        <div class="dl-stores-cards-row trailer-scroll-reveal trailer-reveal-fade-up delay-150" data-node-id="1218:78516">
          
          <!-- Card 1: Windows PC (1218:78471 & 1218:78535) -->
          <a href="#dl-specs-section" class="dl-platform-card-unit unit-win" data-node-id="1218:78471">
            <div class="dl-platform-card-box card-box-win" data-node-id="1218:78424">
              <!-- Full-height Inner Content Box (1218:78424) -->
              <div class="dl-platform-inner-wrap wrap-win">
                <!-- Background Image (nenchofrae.png) -->
                <img src="./assets/nenchofrae.png" alt="" class="dl-platform-bg-img" />
                <!-- Stone Carved Windows 11 Logo (1218:78435) -->
                <div class="dl-platform-stone-icon icon-win" data-node-id="1218:78435">
                  <img src="./assets/8125135145016de6d6938ba0751148484d32d775.png" alt="Windows 11" />
                </div>
              </div>
              <!-- Weathered Photo Frame Overlay (1218:78425) -->
              <div class="dl-platform-frame-overlay frame-win" data-node-id="1218:78425">
                <img src="./assets/1c6cda58361a8d0ab3edc74677ddbcd773711e4d.png" alt="" />
              </div>
            </div>
            <!-- Text Label & Subtitle Below Card (1218:78535) -->
            <div class="dl-platform-caption-box" data-node-id="1218:78535">
              <h3 class="dl-platform-title" data-node-id="1218:78529">Window PC</h3>
              <p class="dl-platform-sub" data-node-id="1218:78532">Trình cài đặt trực tiếp</p>
            </div>
          </a>

          <!-- Card 2: Steam Store (1218:78473 & 1218:78536) -->
          <a href="https://store.steampowered.com" target="_blank" rel="noopener noreferrer" class="dl-platform-card-unit unit-steam" data-node-id="1218:78473">
            <div class="dl-platform-card-box card-box-steam" data-node-id="1218:78418">
              <!-- Full-height Inner Content Box (1218:78418) -->
              <div class="dl-platform-inner-wrap wrap-steam">
                <!-- Background Image (nenchofrae.png) -->
                <img src="./assets/nenchofrae.png" alt="" class="dl-platform-bg-img" />
                <!-- Stone Carved Steam Logo (1218:78437) -->
                <div class="dl-platform-stone-icon icon-steam" data-node-id="1218:78437">
                  <img src="./assets/8125135145016de6d6938ba0751148484d32d775.png" alt="Steam" />
                </div>
              </div>
              <!-- Weathered Photo Frame Overlay (1218:78419) -->
              <div class="dl-platform-frame-overlay frame-steam" data-node-id="1218:78419">
                <img src="./assets/396fb7eb2459880afb4fb6d8cbb13aadca0cfc8e.png" alt="" />
              </div>
            </div>
            <!-- Text Label & Subtitle Below Card (1218:78536) -->
            <div class="dl-platform-caption-box" data-node-id="1218:78536">
              <h3 class="dl-platform-title" data-node-id="1218:78530">Steam Store</h3>
              <p class="dl-platform-sub" data-node-id="1218:78533">Xem thêm trên Steam</p>
            </div>
          </a>

          <!-- Card 3: Epic Store (1218:78472 & 1218:78537) -->
          <a href="https://epicgames.com" target="_blank" rel="noopener noreferrer" class="dl-platform-card-unit unit-epic" data-node-id="1218:78472">
            <div class="dl-platform-card-box card-box-epic" data-node-id="1218:78421">
              <!-- Full-height Inner Content Box (1218:78421) -->
              <div class="dl-platform-inner-wrap wrap-epic">
                <!-- Background Image (nenchofrae.png) -->
                <img src="./assets/nenchofrae.png" alt="" class="dl-platform-bg-img" />
                <!-- Stone Carved Epic Games Logo (1218:78438) -->
                <div class="dl-platform-stone-icon icon-epic" data-node-id="1218:78438">
                  <img src="./assets/8125135145016de6d6938ba0751148484d32d775.png" alt="Epic Games" />
                </div>
              </div>
              <!-- Weathered Photo Frame Overlay (1218:78422) -->
              <div class="dl-platform-frame-overlay frame-epic" data-node-id="1218:78422">
                <img src="./assets/f0bd77fc2b99127f1c30b1e9a618569a04ed519f.png" alt="" />
              </div>
            </div>
            <!-- Text Label & Subtitle Below Card (1218:78537) -->
            <div class="dl-platform-caption-box" data-node-id="1218:78537">
              <h3 class="dl-platform-title" data-node-id="1218:78531">Epic Store</h3>
              <p class="dl-platform-sub" data-node-id="1218:78534">Xem thêm trên Epic Game</p>
            </div>
          </a>
        </div>

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
           5. FINAL READY CTA SECTION (1218:78984)
           ======================================================== -->
      <section class="dl-ready-section trailer-scroll-reveal trailer-reveal-scale" data-node-id="1218:78984">
        <div class="dl-ready-cta-container" data-node-id="1218:78985">
          
          <div class="dl-ready-headings" data-node-id="1218:78986">
            <p class="dl-ready-sub" data-node-id="1218:78987">BẠN ĐÃ SẴN SÀNG BƯỚC VÀO NHÀ HỨA?</p>
            <h2 class="dl-ready-title" data-node-id="1218:78987">HÃY ĐẾN VỚI NỖI SỢ ĐỂ KHÁM PHÁ</h2>
          </div>

          <!-- Exact Figma CTA Button (1218:79027 / 906:1550) -->
          <a href="#download-stores" class="btn-dl-ready-horror" data-node-id="1218:79027">
            <!-- 5-part metal corner frame background -->
            <div class="btn-horror-frame-bg" data-node-id="I1218:79027;906:1550">
              <div class="frame-part part-1"><img src="./assets/105ebc7cda031fdb485695b18a341cec252f1d95.png" alt="" /></div>
              <div class="frame-part part-2" style="background-image: url('./assets/a1b7e3991a46b5a64f1f7dac3536b09a9e87a8ba.png');"></div>
              <div class="frame-part part-3"><img src="./assets/0d6b9966ff2827a216126f97de3fae66e8b0f69d.png" alt="" /></div>
              <div class="frame-part part-4" style="background-image: url('./assets/a52a7c4b8dc8beffb2f5577f0501b16b1cfce647.png');"></div>
              <div class="frame-part part-5"><img src="./assets/18c99e59fbe5fb1f1a0cf0ff28f9c309e0b87822.png" alt="" /></div>
            </div>

            <!-- Inner Red Blood Texture Fill -->
            <div class="btn-horror-inner-body" data-node-id="I1218:79027;906:1556">
              <div class="btn-horror-gradient-base"></div>
              <div class="btn-horror-grunge-tex">
                <img src="./assets/ea8df93482c54ccfe7b61d0a530fea954eb54fd3.png" alt="" />
              </div>
              <div class="btn-horror-shadow-overlay"></div>
            </div>

            <!-- Text -->
            <span class="btn-horror-text" data-node-id="I1218:79027;906:1557">TẢI XUỐNG</span>

            <!-- Glowing Red Frame Borders -->
            <div class="btn-horror-border-glow" data-node-id="I1218:79027;906:1558"></div>
            <div class="btn-horror-border-red" data-node-id="I1218:79027;906:1559"></div>
            <div class="btn-horror-border-fine" data-node-id="I1218:79027;906:1560"></div>
          </a>

          <div class="dl-ready-req-box" data-node-id="1218:78991">
            <p class="dl-ready-req" data-node-id="1218:78992">YÊU CẦU: CORE I5 / 8GB RAM / GTX 1060+</p>
          </div>

        </div>
      </section>

      <!-- ========================================================
           SYSTEM REQUIREMENTS MODAL POPUP (1332:84830)
           ======================================================== -->
      <div class="dl-specs-modal-backdrop" id="dlSpecsModal" aria-hidden="true">
        <div class="dl-specs-modal-window" data-node-id="1332:84830">
          
          <!-- Background Grunge Texture Overlay (1332:84893) -->
          <div class="dl-specs-modal-bg-overlay" data-node-id="1332:84893">
            <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" />
          </div>

          <!-- Close / Cancel Icon (707:1560) -->
          <button type="button" class="dl-specs-modal-close" id="dlSpecsModalClose" aria-label="Đóng popup">
            <img src="./assets/16a6446e90ff221cf7fbf200555b281763e34d43.svg" alt="Đóng" />
          </button>

          <!-- Top CTA Line Header (1332:84890) -->
          <div class="dl-specs-modal-header" data-node-id="1332:84890">
            <div class="faq-ctaline-frame">
              <div class="faq-frame-bracket-left">
                <img src="./assets/5330b79b9e3ec9f5d8e099674f3b9cd251731b0b.svg" alt="" />
              </div>
              <h2 class="dl-specs-modal-heading">CẤU HÌNH</h2>
              <div class="faq-frame-bracket-right">
                <img src="./assets/2a8d91cd956a7b707d91ed3faed539513ed626cf.svg" alt="" />
              </div>
            </div>
          </div>

          <!-- 2 Columns Container: Tối Thiểu vs Đề Nghị (1332:84831) -->
          <div class="dl-specs-modal-grid" data-node-id="1332:84831">
            
            <!-- Column 1: TỐI THIỂU (1332:84832) -->
            <div class="dl-specs-modal-col" data-node-id="1332:84832">
              <h3 class="dl-specs-modal-col-title" data-node-id="1332:84834">TỐI THIỂU</h3>
              <div class="dl-specs-modal-border" data-node-id="1332:84835">
                
                <div class="dl-specs-modal-item" data-node-id="1332:84836">
                  <span class="dl-specs-modal-label" data-node-id="1332:84838">HỆ ĐIỀU HÀNH</span>
                  <span class="dl-specs-modal-val" data-node-id="1332:84840">Windows 10 64-bit</span>
                </div>

                <div class="dl-specs-modal-item" data-node-id="1332:84841">
                  <span class="dl-specs-modal-label" data-node-id="1332:84843">PHẦN CỨNG</span>
                  <span class="dl-specs-modal-val" data-node-id="1332:84845">Intel Core i5-8400 / AMD Ryzen 5 1600</span>
                </div>

                <div class="dl-specs-modal-item" data-node-id="1332:84846">
                  <span class="dl-specs-modal-label" data-node-id="1332:84848">BỘ NHỚ</span>
                  <span class="dl-specs-modal-val" data-node-id="1332:84850">12 GB RAM</span>
                </div>

                <div class="dl-specs-modal-item" data-node-id="1332:84851">
                  <span class="dl-specs-modal-label" data-node-id="1332:84853">ĐỒ HỌA</span>
                  <span class="dl-specs-modal-val" data-node-id="1332:84855">NVIDIA GeForce GTX 1060 (6GB) / AMD Radeon RX 580</span>
                </div>

                <div class="dl-specs-modal-item" data-node-id="1332:84856">
                  <span class="dl-specs-modal-label" data-node-id="1332:84858">DUNG LƯỢNG</span>
                  <span class="dl-specs-modal-val" data-node-id="1332:84860">50 GB available space (SSD Recommended)</span>
                </div>

              </div>
            </div>

            <!-- Column 2: ĐỀ NGHỊ (1332:84861) -->
            <div class="dl-specs-modal-col" data-node-id="1332:84861">
              <h3 class="dl-specs-modal-col-title" data-node-id="1332:84863">ĐỀ NGHỊ</h3>
              <div class="dl-specs-modal-border" data-node-id="1332:84864">
                
                <div class="dl-specs-modal-item" data-node-id="1332:84865">
                  <span class="dl-specs-modal-label" data-node-id="1332:84867">HỆ ĐIỀU HÀNH</span>
                  <span class="dl-specs-modal-val" data-node-id="1332:84869">Windows 11 64-bit</span>
                </div>

                <div class="dl-specs-modal-item" data-node-id="1332:84870">
                  <span class="dl-specs-modal-label" data-node-id="1332:84872">PHẦN CỨNG</span>
                  <span class="dl-specs-modal-val" data-node-id="1332:84874">Intel Core i7-10700 / AMD Ryzen 7 3700X</span>
                </div>

                <div class="dl-specs-modal-item" data-node-id="1332:84875">
                  <span class="dl-specs-modal-label" data-node-id="1332:84877">BỘ NHỚ</span>
                  <span class="dl-specs-modal-val" data-node-id="1332:84879">16 GB RAM</span>
                </div>

                <div class="dl-specs-modal-item" data-node-id="1332:84880">
                  <span class="dl-specs-modal-label" data-node-id="1332:84882">ĐỒ HỌA</span>
                  <span class="dl-specs-modal-val" data-node-id="1332:84884">NVIDIA RTX 3060 Ti / AMD RX 6700 XT</span>
                </div>

                <div class="dl-specs-modal-item" data-node-id="1332:84885">
                  <span class="dl-specs-modal-label" data-node-id="1332:84887">DUNG LƯỢNG</span>
                  <span class="dl-specs-modal-val" data-node-id="1332:84889">50 GB available space (NVMe SSD)</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  `;

  // Bind System Requirements Popup (1332:84830)
  const specsModal = container.querySelector('#dlSpecsModal');
  const specsTrigger = container.querySelector('#btnSpecsModalTrigger');
  const specsClose = container.querySelector('#dlSpecsModalClose');

  function openSpecsModal(e) {
    if (e) e.preventDefault();
    if (specsModal) {
      specsModal.classList.add('active');
      specsModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeSpecsModal() {
    if (specsModal) {
      specsModal.classList.remove('active');
      specsModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (specsTrigger) {
    specsTrigger.addEventListener('click', openSpecsModal);
  }
  if (specsClose) {
    specsClose.addEventListener('click', closeSpecsModal);
  }
  if (specsModal) {
    specsModal.addEventListener('click', (e) => {
      if (e.target === specsModal) {
        closeSpecsModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && specsModal && specsModal.classList.contains('active')) {
      closeSpecsModal();
    }
  });

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

  // Bind Khung Di Chuyen Interactive Prototype (Variant 1 <-> Variant 2)
  const khungDiChuyen = container.querySelector('#dlKhungDiChuyen');
  if (khungDiChuyen) {
    khungDiChuyen.addEventListener('click', () => {
      khungDiChuyen.classList.toggle('variant-2');
    });
    khungDiChuyen.addEventListener('mouseenter', () => khungDiChuyen.classList.add('hovered'));
    khungDiChuyen.addEventListener('mouseleave', () => khungDiChuyen.classList.remove('hovered'));
  }

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
