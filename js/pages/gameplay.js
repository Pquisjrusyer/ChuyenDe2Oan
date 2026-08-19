/* ========================================================
   OAN HORROR GAME — GAMEPLAY PAGE (Figma Node 1058:78289)
   ======================================================== */

export async function renderGameplay(container) {
  container.innerHTML = `
    <div class="gameplay-page-figma" data-node-id="1058:78289">
      
      <!-- Ambient Background Layer (1058:78392) -->
      <div class="gameplay-bg-ambient" data-node-id="1058:78392">
        <div class="gameplay-grunge-overlay"></div>
      </div>

      <!-- ========================================================
           1. HERO SECTION (1060:75035)
           ======================================================== -->
      <section class="gameplay-hero-section" data-node-id="1060:75035">
        <div class="gameplay-hero-container">
          
          <!-- Top Row: Main Media (Left) & Spirit Poster (Right) -->
          <div class="gameplay-hero-top-row">
            <!-- Left: Main Media Frame (1060:75231) -->
            <div class="gameplay-hero-main-media trailer-scroll-reveal trailer-reveal-left" data-node-id="1060:75231">
              <img src="./assets/9c9a7497ed3669bfc77c7d6b21c3f49d9cf0d8db.png" alt="OAN Gameplay Main" data-node-id="1060:75299" />
            </div>

            <!-- Right: Side Character / Spirit Poster (1060:75841) -->
            <div class="gameplay-hero-side-poster trailer-scroll-reveal trailer-reveal-right" data-node-id="1060:75841">
              <img src="./assets/ddeaeac97a526f71e1066933785c0335eb3b18e6.png" alt="OAN Gameplay Spirit" />
            </div>
          </div>

          <!-- Bottom Row: Title, Subtitle & Action Buttons (1060:75297) -->
          <div class="gameplay-hero-bottom-bar trailer-scroll-reveal trailer-reveal-fade-up" data-node-id="1060:75297">
            
            <!-- Left: Title & Subtitle (1060:75237) -->
            <div class="gameplay-hero-text-col" data-node-id="1060:75237">
              <h1 class="gameplay-hero-heading" data-node-id="1060:75232">GAMEPLAY</h1>
              <div class="gameplay-hero-sub-box" data-node-id="1060:75234">
                <p class="gameplay-hero-sub" data-node-id="1060:75235">
                  Khám phá cách bạn sẽ sinh tồn trong thế giới của OÁN. Một hành trình<br />
                  tâm linh đầy rẫy những uẩn khúc và nỗi kinh hoàng từ văn hóa Việt Nam.
                </p>
              </div>
            </div>

            <!-- Right: 2 CTA Buttons (1060:75296) -->
            <div class="gameplay-hero-btns-col" data-node-id="1060:75296">
              
              <!-- Button 1: XEM TRAILER (1060:75250) -->
              <a href="#trailer" class="gameplay-btn-xem-trailer" data-node-id="1060:75250" title="Xem trailer">
                <img src="./assets/cta-btn-new.svg" alt="Xem Trailer" class="gameplay-btn-new-2" />
              </a>

              <!-- Button 2: TẢI GAME (1060:75238) -->
              <a href="#download" class="gameplay-btn-tai-game" data-node-id="1060:75238" title="Tải game OÁN">
                <img src="./assets/button-1-new.svg" alt="Tải Game" class="gameplay-btn-new-1" />
              </a>

            </div>

          </div>

        </div>
      </section>

      <!-- ========================================================
           2. SURVIVE SECTION: SỐNG SÓT QUA MÀN ĐÊM (1060:75303)
           ======================================================== -->
      <section class="gameplay-survive-section" data-node-id="1060:75303">
        <div class="gameplay-survive-grid" data-node-id="1060:75322">
          
          <!-- Left: Cinematic Image (1060:75314) -->
          <div class="gameplay-survive-media trailer-scroll-reveal trailer-reveal-left" data-node-id="1060:75314">
            <div class="gameplay-survive-image-container" data-node-id="1060:75315">
              <img src="./assets/b76c78172d6e968ff30b0ac750540bc810f0b636.png" alt="Sống sót qua màn đêm" />
            </div>
          </div>

          <!-- Right: Typography & Story (1060:75321) -->
          <div class="gameplay-survive-content trailer-scroll-reveal trailer-reveal-right" data-node-id="1060:75321">
            <div class="gameplay-survive-text-wrapper" data-node-id="1060:75320">
              <h2 class="gameplay-survive-title" data-node-id="1060:75317">
                <span class="survive-main">SỐNG SÓT <span class="regular">QUA</span></span>
                <span class="survive-sub">MÀN ĐÊM</span>
              </h2>
              <p class="gameplay-survive-desc" data-node-id="1060:75318">
                OÁN kết hợp các yếu tố kinh dị sinh tồn truyền thống với các cơ chế điều tra tâm linh độc đáo. Người chơi không chỉ phải trốn thoát khỏi những thực thể siêu nhiên mà còn phải tìm hiểu nguồn cơn của "Oán khí" để hóa giải những lời nguyền cổ xưa.
              </p>
            </div>
          </div>

        </div>
      </section>

      <!-- ========================================================
           3. TAGS SECTION: 4 CORE MECHANICS (1060:75369)
           ======================================================== -->
      <section class="gameplay-tags-section" data-node-id="1060:75369">
        <div class="gameplay-tags-grid" data-node-id="1060:75486">
          
          <!-- Card 1: ĐIỀU TRA (1060:75368) -->
          <a href="#investigation" class="gameplay-tag-card trailer-scroll-reveal" data-node-id="1060:75368">
            <!-- Layered Images -->
            <div class="gameplay-tag-layers" data-node-id="1060:75334">
              <div class="gameplay-tag-layer-1" data-node-id="1060:75366">
                <img src="./assets/ct1-1.png" alt="Layer 1" />
              </div>
              <div class="gameplay-tag-layer-2" data-node-id="1060:75365">
                <img src="./assets/mieu-vuong-1.png" alt="Layer 2" />
              </div>
              <div class="gameplay-tag-layer-3" data-node-id="1060:75364">
                <img src="./assets/rung-tre-vuong-1.png" alt="Layer 3" />
              </div>
              <div class="gameplay-tag-layer-4" data-node-id="1060:75487">
                <img src="./assets/a8-1.png" alt="Layer 4" />
              </div>
            </div>
            <!-- Overlay -->
            <div class="gameplay-tag-overlay" data-node-id="1060:75367">
              <img src="./assets/overlay-78042-new.png" alt="Overlay" />
            </div>
            <!-- Content -->
            <div class="gameplay-tag-content-wrapper" data-node-id="1060:75325">
              <h3 class="gameplay-tag-title" data-node-id="1060:75327">ĐIỀU TRA</h3>
            </div>
            <div class="gameplay-tag-desc-wrapper" data-node-id="1060:75328">
              <p class="gameplay-tag-desc" data-node-id="1060:75330">
                Sử dụng các công cụ tâm linh truyền<br />
                thống để phát hiện các dấu vết của<br />
                vong hồn trong môi trường.
              </p>
            </div>
            <div class="gameplay-tag-btn-wrapper" data-node-id="1060:75331">
              <span class="gameplay-tag-btn" data-node-id="1060:75332">KHÁM PHÁ</span>
            </div>
          </a>

          <!-- Card 2: GIẢI ĐỐ (1060:75411) -->
          <a href="#puzzle" class="gameplay-tag-card trailer-scroll-reveal" data-node-id="1060:75411">
            <!-- Layered Images -->
            <div class="gameplay-tag-layers">
              <div class="gameplay-tag-layer-1">
                <img src="./assets/ct1-1.png" alt="Layer 1" />
              </div>
              <div class="gameplay-tag-layer-2">
                <img src="./assets/mieu-vuong-1.png" alt="Layer 2" />
              </div>
              <div class="gameplay-tag-layer-3">
                <img src="./assets/rung-tre-vuong-1.png" alt="Layer 3" />
              </div>
            </div>
            <!-- Overlay -->
            <div class="gameplay-tag-overlay">
              <img src="./assets/overlay-78042-new.png" alt="Overlay" />
            </div>
            <!-- Content -->
            <div class="gameplay-tag-content-wrapper">
              <h3 class="gameplay-tag-title">GIẢI ĐỐ</h3>
            </div>
            <div class="gameplay-tag-desc-wrapper">
              <p class="gameplay-tag-desc">
                Hóa giải các trận pháp cổ và giải mã<br />
                những bí mật được ẩn giấu trong các<br />
                đồ vật tâm linh.
              </p>
            </div>
            <div class="gameplay-tag-btn-wrapper">
              <span class="gameplay-tag-btn">KHÁM PHÁ</span>
            </div>
          </a>

          <!-- Card 3: THU THẬP (1060:75456) -->
          <a href="#collection" class="gameplay-tag-card trailer-scroll-reveal" data-node-id="1060:75456">
            <!-- Layered Images -->
            <div class="gameplay-tag-layers">
              <div class="gameplay-tag-layer-1">
                <img src="./assets/ct1-1.png" alt="Layer 1" />
              </div>
              <div class="gameplay-tag-layer-2">
                <img src="./assets/mieu-vuong-1.png" alt="Layer 2" />
              </div>
            </div>
            <!-- Overlay -->
            <div class="gameplay-tag-overlay">
              <img src="./assets/overlay-78042-new.png" alt="Overlay" />
            </div>
            <!-- Content -->
            <div class="gameplay-tag-content-wrapper">
              <h3 class="gameplay-tag-title">THU THẬP</h3>
            </div>
            <div class="gameplay-tag-desc-wrapper">
              <p class="gameplay-tag-desc">
                Ghép nối các đoạn hồi ức và tài liệu rải<br />
                rác để xây dựng lại câu chuyện đằng<br />
                sau bi kịch.
              </p>
            </div>
            <div class="gameplay-tag-btn-wrapper">
              <span class="gameplay-tag-btn">KHÁM PHÁ</span>
            </div>
          </a>

          <!-- Card 4: MANH MỐI (1060:75471) -->
          <a href="#character" class="gameplay-tag-card trailer-scroll-reveal" data-node-id="1060:75471">
            <!-- Layered Images -->
            <div class="gameplay-tag-layers">
              <div class="gameplay-tag-layer-1">
                <img src="./assets/ct1-1.png" alt="Layer 1" />
              </div>
            </div>
            <!-- Overlay -->
            <div class="gameplay-tag-overlay">
              <img src="./assets/overlay-78042-new.png" alt="Overlay" />
            </div>
            <!-- Content -->
            <div class="gameplay-tag-content-wrapper">
              <h3 class="gameplay-tag-title">MANH MỐI</h3>
            </div>
            <div class="gameplay-tag-desc-wrapper">
              <p class="gameplay-tag-desc">
                Đi theo chỉ dẫn và thực hiện các nhiệm vụ trong từng màn để có thể thu thập được các manh mối dựa trên từng đặc điểm và quá khứ của nhân vật.
              </p>
            </div>
            <div class="gameplay-tag-btn-wrapper">
              <span class="gameplay-tag-btn">KHÁM PHÁ</span>
            </div>
          </a>

        </div>
      </section>

      <!-- ========================================================
           4. AUTHENTIC EXPERIENCE: TRẢI NGHIỆM CHÂN THỰC (1060:75496)
           ======================================================== -->
      <section class="gameplay-experience-section" data-node-id="1060:75496">
        
        <!-- Header Banner (1060:75497) -->
        <div class="gameplay-experience-header-wrap trailer-scroll-reveal" data-node-id="1060:75497">
          <img src="./assets/d8809587d3698ce712d4fc207feeb7613be0ca4b.png" alt="" class="gameplay-experience-header-bg" data-node-id="1060:75498" />
          <h2 class="gameplay-experience-title" data-node-id="1060:75500">
            Trải nghiệm chân thực
          </h2>
        </div>

        <!-- Cinematic Media Showcase Frame (1060:75502) -->
        <div class="gameplay-experience-showcase-wrap trailer-scroll-reveal trailer-reveal-fade-up" data-node-id="1060:75502">
          <div class="gameplay-experience-showcase-frame">
            <img src="./assets/gameplay-trainghiem-frame.png" alt="Trải nghiệm chân thực - Không gian kinh dị Nhà Hứa" class="gameplay-experience-showcase-img" />
            <div class="gameplay-experience-showcase-overlay"></div>
          </div>
        </div>

      </section>

      <!-- ========================================================
           5. FAQ SECTION: CÂU HỎI THƯỜNG GẶP (1060:75760)
           ======================================================== -->
      <section class="gameplay-faq-section" data-node-id="1060:75760">
        
        <!-- Horror Header Banner (1060:75761) -->
        <div class="gameplay-faq-header trailer-scroll-reveal" data-node-id="1060:75761">
          <img src="./assets/gameplay-faq-horror-frame.png" alt="" class="gameplay-faq-horror-frame-bg" data-node-id="1060:75763" />
          <h2 class="gameplay-faq-header-text" data-node-id="1060:75762">CÂU HỎI THƯỜNG GẶP</h2>
        </div>

        <!-- Options Container (1060:75772) -->
        <div class="gameplay-faq-options-container trailer-scroll-reveal trailer-reveal-fade-up" data-node-id="1060:75772">
          
          <!-- FAQ Item 1 (1711:7319) -->
          <div class="gameplay-faq-item active" data-node-id="1711:7319">
            <button type="button" class="gameplay-faq-trigger" aria-expanded="true">
              <span class="gameplay-faq-question" data-node-id="1711:7324">
                OÁN CÓ HỖ TRỢ TAY CẦM KHÔNG?
              </span>
              <span class="gameplay-faq-icon" data-node-id="1711:7326">+</span>
            </button>
            <div class="gameplay-faq-answer">
              <div class="gameplay-faq-answer-inner">
                <p>
                  Có, OÁN hỗ trợ đầy đủ các dòng tay cầm phổ biến như PlayStation DualSense/DualShock 4, Xbox Controller và các thiết bị tay cầm chuẩn XInput. Game cũng tích hợp tính năng rung phản hồi xúc giác theo từng nhịp tim và tiếng bước chân ma quái.
                </p>
              </div>
            </div>
          </div>

          <!-- FAQ Item 2 (1711:7340) -->
          <div class="gameplay-faq-item" data-node-id="1711:7340">
            <button type="button" class="gameplay-faq-trigger" aria-expanded="false">
              <span class="gameplay-faq-question" data-node-id="1711:7345">
                CẤU HÌNH TỐI THIỂU ĐỂ TRẢI NGHIỆM GAME?
              </span>
              <span class="gameplay-faq-icon" data-node-id="1711:7347">+</span>
            </button>
            <div class="gameplay-faq-answer">
              <div class="gameplay-faq-answer-inner" data-node-id="1711:7349">
                <p>Để trải nghiệm không gian kinh dị của OÁN một cách trọn vẹn nhất, chúng tôi khuyến nghị cấu hình tối thiểu sau:</p>
                <ul>
                  <li>• CPU: Intel Core i5-8400 / AMD Ryzen 5 2600</li>
                  <li>• GPU: NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580</li>
                  <li>• RAM: 12GB</li>
                  <li>• SSD: 40GB dung lượng trống</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- FAQ Item 3 (1711:7361) -->
          <div class="gameplay-faq-item" data-node-id="1711:7361">
            <button type="button" class="gameplay-faq-trigger" aria-expanded="false">
              <span class="gameplay-faq-question" data-node-id="1711:7366">
                THỜI LƯỢNG CHƠI TRUNG BÌNH LÀ BAO LÂU?
              </span>
              <span class="gameplay-faq-icon" data-node-id="1711:7368">+</span>
            </button>
            <div class="gameplay-faq-answer">
              <div class="gameplay-faq-answer-inner">
                <p>
                  Thời lượng hoàn thành cốt truyện chính kéo dài khoảng 8 - 12 giờ. Nếu bạn muốn khám phá toàn bộ các kết thúc ẩn, giải mã tất cả manh mối và tìm kiếm toàn bộ cổ vật trong Nhà Hứa, thời lượng có thể lên đến 18 - 25 giờ.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ========================================================
           6. RELATED FEATURES: KHÁM PHÁ THÊM (1060:75864)
           ======================================================== -->
      <section class="gameplay-related-section" data-node-id="1060:75864">
        <div class="gameplay-related-grid" data-node-id="1093:76521">
          
          <!-- Card 1: CỐT TRUYỆN (1093:76453) -->
          <a href="#storyline" class="gameplay-related-card trailer-scroll-reveal trailer-reveal-left" data-node-id="1093:76453">
            <div class="gameplay-related-card-bg">
              <img src="./assets/8334f9d9bb4805b30b192a13a4fe61b7f9e365bb.png" alt="Cốt truyện" />
            </div>
            <div class="gameplay-related-card-overlay"></div>
            <div class="gameplay-related-card-content">
              <h3 class="gameplay-related-card-title">CỐT TRUYỆN</h3>
              <span class="gameplay-related-card-link">KHÁM PHÁ ›</span>
            </div>
          </a>

          <!-- Card 2: NHÂN VẬT (1093:76317) -->
          <a href="#character" class="gameplay-related-card trailer-scroll-reveal trailer-reveal-fade-up" data-node-id="1093:76317">
            <div class="gameplay-related-card-bg">
              <img src="./assets/07dcfc800b6483d6076f8badf09a03ca6c24b840.png" alt="Nhân vật" />
            </div>
            <div class="gameplay-related-card-overlay"></div>
            <div class="gameplay-related-card-content">
              <h3 class="gameplay-related-card-title">NHÂN VẬT</h3>
              <span class="gameplay-related-card-link">KHÁM PHÁ ›</span>
            </div>
          </a>

          <!-- Card 3: TẢI XUỐNG (1093:76385) -->
          <a href="#download" class="gameplay-related-card trailer-scroll-reveal trailer-reveal-right" data-node-id="1093:76385">
            <div class="gameplay-related-card-bg">
              <img src="./assets/ba23e6b9d0c1cc8a61815a4c60ce5140df4f2aed.png" alt="Tải xuống" />
            </div>
            <div class="gameplay-related-card-overlay"></div>
            <div class="gameplay-related-card-content">
              <h3 class="gameplay-related-card-title">TẢI XUỐNG</h3>
              <span class="gameplay-related-card-link">TẢI NGAY ›</span>
            </div>
          </a>

        </div>
      </section>

      <!-- ========================================================
           7. CTA SECTION: BẠN ĐÃ SẴN SÀNG BƯỚC VÀO NHÀ HỨA? (1093:76522)
           ======================================================== -->
      <section class="gameplay-cta-section" data-node-id="1093:76522">
        <div class="gameplay-cta-container trailer-scroll-reveal trailer-reveal-scale" data-node-id="1093:76523">
          
          <h2 class="gameplay-cta-heading" data-node-id="1093:76525">
            BẠN ĐÃ SẴN SÀNG BƯỚC VÀO NHÀ HỨA?
          </h2>

          <div class="gameplay-cta-buttons-row" data-node-id="1093:76526">
            <a href="#download" class="gameplay-cta-btn" data-node-id="1093:76527">
              <span class="gameplay-cta-btn-text">CHƠI NGAY</span>
            </a>
            <a href="#download" class="gameplay-cta-btn" data-node-id="1093:76528">
              <span class="gameplay-cta-btn-text">TẢI NGAY</span>
            </a>
          </div>

          <p class="gameplay-cta-requirement" data-node-id="1093:76530">
            YÊU CẦU: CORE I5 / 8GB RAM / GTX 1060+
          </p>

        </div>
      </section>

    </div>
  `;

  // FAQ Accordion Interaction
  const faqItems = container.querySelectorAll('.gameplay-faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.gameplay-faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close all items
        faqItems.forEach(other => {
          other.classList.remove('active');
          const otherTrigger = other.querySelector('.gameplay-faq-trigger');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        });
        // Toggle current item
        if (!isActive) {
          item.classList.add('active');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // Open first FAQ item by default
  if (faqItems.length > 0) {
    faqItems[0].classList.add('active');
    const firstTrigger = faqItems[0].querySelector('.gameplay-faq-trigger');
    if (firstTrigger) firstTrigger.setAttribute('aria-expanded', 'true');
  }

  // Scroll Reveal Observer
  const scrollTargets = container.querySelectorAll('.trailer-scroll-reveal');
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  scrollTargets.forEach(el => scrollObserver.observe(el));

  setTimeout(() => {
    scrollTargets.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('revealed');
      }
    });
  }, 100);
}
