/* ========================================================
   OAN Horror Game — Download Page (Figma Node: 1170:80024)
   ======================================================== */

import { initDownloadScrollTriggers } from '../utils/smooth-scroll.js';

export async function renderDownload(container) {
  container.innerHTML = `
    <div class="figma-download-page" data-node-id="1170:80024">
      
      <!-- ========================================================
           1. HERO SECTION (1170:80024)
           ======================================================== -->
      <section class="dl-hero-section">
        <div class="dl-hero-content-wrapper">
          
          <!-- Left Column -->
          <div class="dl-hero-left">
            <h1 class="dl-hero-title trailer-scroll-reveal trailer-reveal-fade-up">
              TẢI OÁN
            </h1>

            <p class="dl-hero-desc trailer-scroll-reveal trailer-reveal-fade-up delay-150">
              Bóng tối không chỉ là nơi sự thật bị chôn vùi. Hãy cầm đèn pin, ghi lại dấu vết và khám phá bí ẩn trong <strong>Ngôi Nhà Hứa</strong>.
            </p>

            <!-- 2 Hero CTA Buttons -->
            <div class="dl-hero-actions-row trailer-scroll-reveal trailer-reveal-fade-up delay-250">
              <!-- Button 1: TẢI NGAY -->
              <a href="#download-stores" class="btn-dl-primary" id="btnDlPrimary">
                <img src="./assets/f40e310091f944c3bc33beca5b22539c57cc2e86.svg" alt="" class="btn-dl-primary-icon" />
                <span class="btn-dl-primary-text">TẢI NGAY</span>
              </a>

              <!-- Button 2: CẤU HÌNH HỆ THỐNG -->
              <a href="#dl-specs-section" class="btn-dl-specs" id="btnDlSpecs">
                <span class="btn-dl-specs-text">CẤU HÌNH HỆ THỐNG</span>
              </a>
            </div>

            <!-- 4 Step Tiles Grid -->
            <div class="dl-hero-tiles-grid trailer-scroll-reveal trailer-reveal-fade-up delay-350">
              <!-- Tile 1: GHI LẠI -->
              <div class="dl-hero-tile">
                <img src="./assets/c4c37be083bde9786d096c773d05f1c7ab10b771.png" alt="Ghi lại" class="dl-hero-tile-thumb" />
                <h4 class="dl-hero-tile-title">GHI LẠI</h4>
                <p class="dl-hero-tile-sub">Mọi dấu vết</p>
              </div>

              <!-- Tile 2: PHÂN TÍCH -->
              <div class="dl-hero-tile">
                <img src="./assets/faa5318b0c96bbbc58ac7c92fbed4e6131a85f11.png" alt="Phân tích" class="dl-hero-tile-thumb" />
                <h4 class="dl-hero-tile-title">PHÂN TÍCH</h4>
                <p class="dl-hero-tile-sub">Lời thì thầm</p>
              </div>

              <!-- Tile 3: KHÁM PHÁ -->
              <div class="dl-hero-tile">
                <img src="./assets/f0bd77fc2b99127f1c30b1e9a618569a04ed519f.png" alt="Khám phá" class="dl-hero-tile-thumb" />
                <h4 class="dl-hero-tile-title">KHÁM PHÁ</h4>
                <p class="dl-hero-tile-sub">Ngôi nhà ma</p>
              </div>

              <!-- Tile 4: ĐỐI MẶT -->
              <div class="dl-hero-tile">
                <img src="./assets/f010562a6a64f04aa83734d2abbffe57b1cd728c.png" alt="Đối mặt" class="dl-hero-tile-thumb" />
                <h4 class="dl-hero-tile-title">ĐỐI MẶT</h4>
                <p class="dl-hero-tile-sub">Sự thật</p>
              </div>
            </div>

          </div>

          <!-- Right Column: Spooky Hallway Polaroid Frame -->
          <div class="dl-hero-right-polaroid trailer-scroll-reveal trailer-reveal-scale delay-200">
            <div class="dl-polaroid-frame">
              <img src="./assets/9d2c1d4893b4588362b331a915cdf59b07e9c40a.png" alt="Hành lang Nhà Hứa" class="dl-polaroid-img" />
            </div>
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
