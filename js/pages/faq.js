/* ========================================================
   OAN Horror Game — FAQ / Support Page (Figma Node: 1030:74110)
   ======================================================== */

import { initFaqScrollTriggers } from '../utils/smooth-scroll.js';

export async function renderFaq(container) {
  container.innerHTML = `
    <div class="figma-faq-page" data-node-id="1030:74110">
      
      <!-- ========================================================
           1. HERO SECTION (1030:75968)
           ======================================================== -->
      <section class="faq-hero-section" data-node-id="1030:75968">
        <!-- Background Image (1040:76493) -->
        <div class="faq-hero-bg-layer" data-node-id="1040:76493">
          <img src="./assets/71b72823b4bd885af68974e506d508879070bc60.png" alt="FAQ Hero Background" class="faq-hero-bg-img" />
        </div>
        <div class="faq-hero-bottom-gradient"></div>

        <!-- Left-Aligned Content Container (1040:76489) -->
        <div class="faq-hero-content" data-node-id="1040:76489">
          <h1 class="faq-hero-title trailer-scroll-reveal trailer-reveal-fade-up" data-node-id="1030:76124">
            BẠN CẦN HỖ TRỢ?
          </h1>

          <p class="faq-hero-desc trailer-scroll-reveal trailer-reveal-fade-up delay-150" data-node-id="1030:76126">
            Tìm kiếm câu trả lời cho các vấn đề kỹ thuật, thông tin trò chơi và cộng đồng OÁN.
          </p>

          <p class="faq-hero-social-lead trailer-scroll-reveal trailer-reveal-fade-up delay-250" data-node-id="1040:76254">
            Hãy tìm kiếm chúng tôi trên
          </p>

          <!-- Social Links (1040:76367) -->
          <div class="faq-hero-social-row trailer-scroll-reveal trailer-reveal-fade-up delay-350" data-node-id="1040:76367">
            <!-- Facebook -->
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" class="faq-social-link" aria-label="Facebook" data-node-id="1040:76255">
              <img src="./assets/5733013ce340f93a90860314609ce6dbf3a321e3.svg" alt="Facebook" />
            </a>
            <!-- Discord -->
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="faq-social-link" aria-label="Discord" data-node-id="1040:76349">
              <img src="./assets/61f01055dc94f8b8e16acb65c39b6f2a3b52b0ed.svg" alt="Discord" />
            </a>
            <!-- Instagram -->
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="faq-social-link" aria-label="Instagram" data-node-id="1040:76353">
              <img src="./assets/58f5b1be1bcfe52b6857777eb026615c1efb33d8.svg" alt="Instagram" />
            </a>
            <!-- YouTube -->
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="faq-social-link" aria-label="YouTube" data-node-id="1040:76361">
              <img src="./assets/8632807d8657ff43b145b6b33e59ce3c0cfe4d16.svg" alt="YouTube" />
            </a>
          </div>
        </div>
      </section>

      <!-- ========================================================
           2. CÂU HỎI PHỔ BIẾN SECTION (1040:76498)
           ======================================================== -->
      <section class="faq-questions-section" data-node-id="1040:76498">
        <!-- Top Section Intersection Overlay with Hero (1040:76496 / 1048:76999) -->
        <div class="faq-section-top-overlay" data-node-id="1040:76496"></div>

        <!-- Left & Right Vignettes (1048:76997 & 1048:76998) -->
        <div class="faq-vignette-left" data-node-id="1048:76997"></div>
        <div class="faq-vignette-right" data-node-id="1048:76998"></div>
        
        <!-- Bottom Transition Overlay (1048:77000) -->
        <div class="faq-section-bottom-overlay" data-node-id="1048:77000"></div>
        
        <!-- Section Header with Metal Horror Line (1048:76921) -->
        <div class="faq-questions-header trailer-scroll-reveal trailer-reveal-fade-up">
          <div class="faq-ctaline-frame" data-node-id="1048:76921">
            <div class="faq-frame-bracket-left">
              <img src="./assets/5330b79b9e3ec9f5d8e099674f3b9cd251731b0b.svg" alt="" />
            </div>
            <h2 class="faq-questions-heading" data-node-id="1048:76922">
              CÂU HỎI PHỔ BIẾN
            </h2>
            <div class="faq-frame-bracket-right">
              <img src="./assets/2a8d91cd956a7b707d91ed3faed539513ed626cf.svg" alt="" />
            </div>
          </div>
        </div>

        <!-- 2-Column Stage: Accordions on Left, Character Artwork on Right -->
        <div class="faq-questions-stage" data-node-id="1048:76996">
          
          <!-- Accordion Group (1048:76932) -->
          <div class="faq-accordion-container trailer-scroll-reveal trailer-reveal-fade-up delay-150" data-node-id="1048:76932">
            
            <!-- Item 1: Cấu hình tối thiểu (1040:76582) -->
            <div class="faq-accordion-item" data-node-id="1040:76582">
              <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" class="faq-accordion-item-bg" />
              <button type="button" class="faq-accordion-trigger" aria-expanded="false">
                <h3 class="faq-accordion-question">CẤU HÌNH TỐI THIỂU LÀ GÌ?</h3>
                <div class="faq-accordion-icon">
                  <img src="./assets/5d19871acf78102b7372cbc87b67bc12d21f8a04.svg" alt="+" />
                </div>
              </button>
              <div class="faq-accordion-content">
                <div class="faq-accordion-body">
                  <p>Để trải nghiệm không gian kinh dị của OÁN một cách trọn vẹn nhất, chúng tôi khuyến nghị cấu hình tối thiểu sau:</p>
                  <ul class="faq-spec-list">
                    <li class="faq-spec-item">• CPU: Intel Core i5-8400 / AMD Ryzen 5 2600</li>
                    <li class="faq-spec-item">• GPU: NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580</li>
                    <li class="faq-spec-item">• RAM: 12GB</li>
                    <li class="faq-spec-item">• SSD: 40GB dung lượng trống</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Item 2: Báo cáo lỗi gameplay (1040:76603) -->
            <div class="faq-accordion-item" data-node-id="1040:76603">
              <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" class="faq-accordion-item-bg" />
              <button type="button" class="faq-accordion-trigger" aria-expanded="false">
                <h3 class="faq-accordion-question">LÀM THẾ NÀO ĐỂ BÁO CÁO LỖI GAMEPLAY?</h3>
                <div class="faq-accordion-icon">
                  <img src="./assets/5d19871acf78102b7372cbc87b67bc12d21f8a04.svg" alt="+" />
                </div>
              </button>
              <div class="faq-accordion-content">
                <div class="faq-accordion-body">
                  <p>Bạn có thể gửi phản hồi trực tiếp qua các kênh sau:</p>
                  <ul class="faq-spec-list">
                    <li class="faq-spec-item">• Nhấn nút <strong>BÁO CÁO LỖI & GÓP Ý</strong> tại mục hỗ trợ bên dưới để điền form chi tiết.</li>
                    <li class="faq-spec-item">• Tham gia kênh <strong>#bug-report</strong> tại máy chủ Discord OÁN.</li>
                    <li class="faq-spec-item">• Gửi email trực tiếp đến hòm thư: <em style="color:#ffffff;">support@oan-game.vn</em> kèm ảnh chụp màn hình/video.</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Item 3: Mất dữ liệu lưu game (1040:76624) -->
            <div class="faq-accordion-item" data-node-id="1040:76624">
              <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" class="faq-accordion-item-bg" />
              <button type="button" class="faq-accordion-trigger" aria-expanded="false">
                <h3 class="faq-accordion-question">TÔI BỊ MẤT DỮ LIỆU LƯU GAME</h3>
                <div class="faq-accordion-icon">
                  <img src="./assets/5d19871acf78102b7372cbc87b67bc12d21f8a04.svg" alt="+" />
                </div>
              </button>
              <div class="faq-accordion-content">
                <div class="faq-accordion-body">
                  <p>Hệ thống hỗ trợ cơ chế sao lưu tự động đám mây (Cloud Save). Trong trường hợp bị mất file cục bộ:</p>
                  <ul class="faq-spec-list">
                    <li class="faq-spec-item">• Kiểm tra thư mục sao lưu: <code style="color:#ffd700;">%USERPROFILE%/AppData/LocalLow/OAN/SavedGames</code></li>
                    <li class="faq-spec-item">• Đăng nhập tài khoản để đồng bộ lại điểm lưu gần nhất từ máy chủ.</li>
                    <li class="faq-spec-item">• Nếu vẫn không thể phục hồi, hãy tạo phiếu hỗ trợ qua nút <strong>TRÒ CHUYỆN VỚI ĐỘI NGŨ OÁN</strong>.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          <!-- Character Graphic on Right Flank (1048:77003) -->
          <div class="faq-character-flank trailer-scroll-reveal trailer-reveal-fade-up delay-250" data-node-id="1048:77003">
            <img src="./assets/b8d7754bf0f621faa3e9adcef78d2165565da707.png" alt="Nhân vật thắc mắc" class="faq-character-img" />
          </div>

        </div>
      </section>

      <!-- ========================================================
           3. QUICK LINK CARDS SECTION (1048:77005)
           ======================================================== -->
      <section class="faq-quick-links-section" data-node-id="1048:77005">
        <div class="faq-links-top-overlay" data-node-id="1048:77006"></div>
        <div class="faq-links-bottom-overlay"></div>
        <div class="faq-links-grid trailer-scroll-reveal trailer-reveal-fade-up">
          
          <!-- Card 1: GAMEPLAY (1048:77292) -->
          <a href="#storyline" class="faq-link-card" data-node-id="1048:77292">
            <img src="./assets/8c4a75cd6477ddb747691f32d966471842b24212.png" alt="" class="faq-link-card-bg" />
            <div class="faq-link-card-content">
              <h3 class="faq-link-card-title">GAMEPLAY</h3>
              <p class="faq-link-card-sub">CƠ CHẾ & THẾ GIỚI</p>
              <div class="faq-btn-go">
                <div class="faq-btn-go-corners">
                  <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" />
                  <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" />
                </div>
                <span class="faq-btn-go-text">Đến ngay</span>
              </div>
            </div>
          </a>

          <!-- Card 2: TẢI VỀ (1048:77260) -->
          <a href="#download" class="faq-link-card" data-node-id="1048:77260">
            <img src="./assets/9ef658afac51fb7f7bf7de714db7b1a78f66fcda.png" alt="" class="faq-link-card-bg" />
            <div class="faq-link-card-content">
              <h3 class="faq-link-card-title">TẢI VỀ</h3>
              <p class="faq-link-card-sub">CÀI ĐẶT & CẬP NHẬT</p>
              <div class="faq-btn-go">
                <div class="faq-btn-go-corners">
                  <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" />
                  <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" />
                </div>
                <span class="faq-btn-go-text">Đến ngay</span>
              </div>
            </div>
          </a>

          <!-- Card 3: TÀI KHOẢN (1048:77164) -->
          <a href="#login" class="faq-link-card" data-node-id="1048:77164">
            <img src="./assets/9efa1cecb8231d52751451000865c82eba95d56d.png" alt="" class="faq-link-card-bg" />
            <div class="faq-link-card-content">
              <h3 class="faq-link-card-title">TÀI KHOẢN</h3>
              <p class="faq-link-card-sub">BẢO MẬT & LIÊN KẾT</p>
              <div class="faq-btn-go">
                <div class="faq-btn-go-corners">
                  <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" />
                  <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" />
                </div>
                <span class="faq-btn-go-text">Đến ngay</span>
              </div>
            </div>
          </a>

          <!-- Card 4: KỸ THUẬT (1048:77196) -->
          <a href="#faq" class="faq-link-card" data-node-id="1048:77196">
            <img src="./assets/2342fe1d72d38244b854bdf6f8b202d59e268a64.png" alt="" class="faq-link-card-bg" />
            <div class="faq-link-card-content">
              <h3 class="faq-link-card-title">KỸ THUẬT</h3>
              <p class="faq-link-card-sub">LỖI KỸ THUẬT & KẾT NỐI</p>
              <div class="faq-btn-go">
                <div class="faq-btn-go-corners">
                  <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" />
                  <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" />
                </div>
                <span class="faq-btn-go-text">Đến ngay</span>
              </div>
            </div>
          </a>

          <!-- Card 5: CỘNG ĐỒNG (1048:77228) -->
          <a href="#community" class="faq-link-card" data-node-id="1048:77228">
            <img src="./assets/10d658b193d39b5a3f16abed9c1a208f7c835572.png" alt="" class="faq-link-card-bg" />
            <div class="faq-link-card-content">
              <h3 class="faq-link-card-title">CỘNG ĐỒNG</h3>
              <p class="faq-link-card-sub">SỰ KIỆN & CHIA SẺ</p>
              <div class="faq-btn-go">
                <div class="faq-btn-go-corners">
                  <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" />
                  <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" />
                </div>
                <span class="faq-btn-go-text">Đến ngay</span>
              </div>
            </div>
          </a>

        </div>
      </section>

      <!-- ========================================================
           4. VẪN CẦN HỖ TRỢ? SECTION (1048:77420)
           ======================================================== -->
      <section class="faq-still-help-section" data-node-id="1048:77420">
        <div class="faq-help-top-overlay"></div>
        <div class="faq-help-bottom-overlay"></div>
        <div class="faq-still-help-grid">
          
          <!-- Left Large Block: Trò chuyện với đội ngũ OÁN (1048:77424) -->
          <div class="faq-help-large-card trailer-scroll-reveal trailer-reveal-fade-up" data-node-id="1048:77424">
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <p class="faq-help-tag">LIÊN HỆ TRỰC TIẾP</p>
              <h2 class="faq-help-large-title">TRÒ CHUYỆN VỚI ĐỘI NGŨ OÁN</h2>
              <p class="faq-help-desc">
                Nhận hỗ trợ 1:1 cho các vấn đề liên quan đến thanh toán hoặc khiếu nại tài khoản nghiêm trọng.
              </p>
            </div>

            <button type="button" class="btn-faq-crimson-cta" onclick="alert('Đang kết nối tới kênh hỗ trợ 1:1 của OÁN. Vui lòng gửi email tới: support@oan-game.vn hoặc liên hệ qua Discord.');">
              <span class="btn-faq-crimson-text">YÊU CẦU HỖ TRỢ</span>
            </button>
          </div>

          <!-- Right Stack of 2 Blocks (1048:77436) -->
          <div class="faq-help-stack trailer-scroll-reveal trailer-reveal-fade-up delay-150" data-node-id="1048:77436">
            
            <!-- Block 1: Discord (1048:77437) -->
            <div class="faq-help-small-card" data-node-id="1048:77437">
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <p class="faq-help-tag">DISCORD</p>
                <h3 class="faq-help-small-title">CỘNG ĐỒNG THỢ SĂN BÓNG ĐÊM</h3>
                <p class="faq-help-desc">
                  Tham gia cùng hơn 50,000 người chơi khác để trao đổi mẹo vặt và hướng dẫn gameplay.
                </p>
              </div>

              <a href="#community" class="btn-faq-small-horror">
                <div class="horror-frame-corners">
                  <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="corner-svg-left" />
                  <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="corner-svg-right" />
                </div>
                <span class="horror-btn-text">THAM GIA NGAY</span>
              </a>
            </div>

            <!-- Block 2: Bug Tracker (1048:77449) -->
            <div class="faq-help-small-card card-bug" data-node-id="1048:77449">
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <p class="faq-help-tag">BUG TRACKER</p>
                <h3 class="faq-help-small-title">BÁO CÁO LỖI & GÓP Ý</h3>
                <p class="faq-help-desc">
                  Giúp chúng tôi hoàn thiện trò chơi bằng cách cung cấp thông tin chi tiết về các lỗi bạn gặp phải.
                </p>
              </div>

              <button type="button" class="btn-faq-small-horror" onclick="alert('Cảm ơn bạn! Hãy gửi log và mô tả lỗi tới support@oan-game.vn.');">
                <div class="horror-frame-corners">
                  <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="corner-svg-left" />
                  <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="corner-svg-right" />
                </div>
                <span class="horror-btn-text">BÁO CÁO NGAY</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      <!-- ========================================================
           5. SẴN SÀNG & LIÊN HỆ SECTION (1058:77658)
           ======================================================== -->
      <section class="faq-ready-section" data-node-id="1058:77658">
        
        <!-- Character pointing on the left flank -->
        <div class="faq-ready-char-flank" data-node-id="1058:78283">
          <img src="./assets/4863f96f2dfde23460b787a69bd2461ce29e6a81.png" alt="Nhân vật chỉ tay" />
        </div>

        <!-- Giant Red OAN Calligraphy Watermark (1058:78285) -->
        <div class="faq-ready-watermark" data-node-id="1058:78285">
          <div class="oan-vector-1">
            <img src="./assets/2d0c9c973732ae7f9026517f08390de551661297.svg" alt="" />
          </div>
          <div class="oan-vector-2">
            <img src="./assets/f54a729ca9cce06b81eb5714f26f251f438cee12.svg" alt="" />
          </div>
          <div class="oan-vector-3">
            <img src="./assets/aa889716af01e6b9b70a07c1e32ffdbcf8310263.svg" alt="" />
          </div>
        </div>

        <!-- Core Ready Box (1058:77660) -->
        <div class="faq-ready-core trailer-scroll-reveal trailer-reveal-scale">
          <h2 class="faq-ready-title" data-node-id="1058:77662">
            BẠN ĐÃ SẴN SÀNG BƯỚC VÀO NHÀ HỨA?
          </h2>

          <div class="faq-ready-buttons-row">
            <!-- CHƠI NGAY -->
            <a href="#login" class="figma-btn-horror-frame" data-node-id="1058:77664">
              <div class="horror-frame-corners">
                <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="corner-svg-left" />
                <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="corner-svg-right" />
              </div>
              <div class="horror-frame-body">
                <span class="horror-btn-text">CHƠI NGAY</span>
              </div>
            </a>

            <!-- TẢI NGAY -->
            <a href="#download" class="figma-btn-horror-frame" data-node-id="1058:77665">
              <div class="horror-frame-corners">
                <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="corner-svg-left" />
                <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="corner-svg-right" />
              </div>
              <div class="horror-frame-body">
                <span class="horror-btn-text">TẢI NGAY</span>
              </div>
            </a>
          </div>

          <p class="faq-ready-sysreq" data-node-id="1058:77667">
            YÊU CẦU: CORE I5 / 8GB RAM / GTX 1060+
          </p>
        </div>

        <!-- Support Box Below (1058:77749) -->
        <div class="faq-support-bottom-box trailer-scroll-reveal trailer-reveal-fade-up delay-200" data-node-id="1058:77749">
          <p class="faq-support-bottom-tag">TÔI CHƯA TÌM THẤY CÂU TRẢ LỜI.</p>
          <a href="#faq" class="btn-faq-bottom-contact" onclick="alert('Đội ngũ CSKH OÁN luôn sẵn sàng hỗ trợ 24/7 qua email support@oan-game.vn.');">
            <div class="horror-frame-corners">
              <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="corner-svg-left" />
              <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="corner-svg-right" />
            </div>
            <span class="horror-btn-text">LIÊN HỆ HỖ TRỢ</span>
          </a>
        </div>

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
        // Accordion behavior: close others
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
    if (typeof initFaqScrollTriggers === 'function') {
      initFaqScrollTriggers();
    }
  }, 100);
}
