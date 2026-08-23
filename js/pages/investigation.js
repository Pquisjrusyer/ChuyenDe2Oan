/* ========================================================
   OAN HORROR GAME — INVESTIGATION PAGE (Figma Node 1093:76943)
   "ĐIỀU TRA DESKTOP"
   ======================================================== */

import { gsap } from 'gsap';
import { getReadySectionHTML } from '../components/ready-section.js';

export async function renderInvestigation(container) {
  container.innerHTML = `
    <div class="investigation-page-figma" data-node-id="1093:76943">

      <!-- ========================================================
           1. HERO SECTION: ĐIỀU TRA & HỒ SƠ VỤ ÁN (1093:77148)
           ======================================================== -->
      <section class="inv-hero-section" data-node-id="1093:77148">
        
        <!-- Left Title (1093:77153) -->
        <div class="inv-hero-title-box trailer-scroll-reveal trailer-reveal-fade-up" data-node-id="1093:77153">
          <div class="inv-hero-title" data-node-id="1093:77149">
            <span class="inv-hero-title-line">ĐIỀU</span>
            <span class="inv-hero-title-line">TRA</span>
          </div>
          <div class="inv-hero-subtitle" data-node-id="1093:77151">
            <p>Tìm kiếm sự thật ẩn giấu</p>
          </div>
        </div>

        <!-- Center: Case File Dossier (H - 1104:76542) -->
        <div class="inv-hero-dossier-wrap trailer-scroll-reveal trailer-reveal-scale" data-node-id="1104:76542">
          <div class="inv-hero-dossier-card" data-node-id="1104:76540">
            <img src="./assets/ba3b96c8ee4218a79a5ba6185a7c89130240ad9b.png" alt="Hồ sơ vụ án - Biệt thự họ Hứa" class="inv-hero-dossier-img" />
          </div>
        </div>

        <!-- Left Bottom Bloodied Envelope with Paperclip (Eletrai - 1104:76520) -->
        <div class="inv-hero-eletrai trailer-scroll-reveal trailer-reveal-left" data-node-id="1104:76520">
          <img src="./assets/def6f3adcc382baac3f4eab6502c43f4f54febee.png" alt="" class="inv-eletrai-img" />
        </div>

        <!-- Right Bottom Bloodied Envelope Accent (1104:76787) -->
        <div class="inv-hero-right-accent trailer-scroll-reveal trailer-reveal-right" data-node-id="1104:76787">
          <img src="./assets/f1fd2ea2cd9d2ad80bdbe2160136cd909dc859c2.png" alt="" class="inv-right-accent-img" />
        </div>

        <!-- Topmost Multiplied Grunge Texture (1104:76537) -->
        <div class="inv-hero-bg-texture" data-node-id="1104:76537">
          <div class="inv-hero-bg-texture-rotate">
            <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" />
          </div>
        </div>

      </section>

      <!-- ========================================================
           2. CORE MECHANISM: CƠ CHẾ CỐT LÕI (1104:76446)
           ======================================================== -->
      <section class="inv-coche-section" data-node-id="1104:76446">
        
        <!-- Stamped Badge CASE FILE #01 - Freely positioned on top (1104:76497) -->
        <div class="inv-coche-tag-wrap trailer-scroll-reveal trailer-reveal-fade-up" data-node-id="1104:76497">
          <img src="./assets/inv_tag_casefile.png" alt="CASE FILE #01" class="inv-coche-tag-img" />
        </div>

        <div class="inv-coche-container" data-node-id="1104:76447">
          
          <!-- Left Column: Video Monitor & Evidence Board (1104:76448) -->
          <div class="inv-coche-left-col trailer-scroll-reveal trailer-reveal-left" data-node-id="1104:76448">
            
            <!-- Video Monitor Frame (Videokd - 1104:76367 / 1104:76368) -->
            <div class="inv-coche-monitor-wrap" data-node-id="1104:76367">
              
              <!-- Top Spline Tape Banner Plaque (1104:76364) -->
              <div class="inv-monitor-tape-plaque" data-node-id="1104:76364">
                <img src="./assets/inv_tape_spline_plaque.png" alt="" class="inv-tape-bg" />
                <span class="inv-tape-text">DỪNG LẠI</span>
              </div>

              <!-- Inner Monitor Screen (1104:76288) -->
              <div class="inv-monitor-inner-screen" data-node-id="1104:76288">
                
                <!-- Layer 1: In-game Camera Feed (1104:76341) -->
                <img src="./assets/inv_monitor_camera_screen.png" alt="In-Game Investigation Cam" class="inv-monitor-cam-img" data-node-id="1104:76341" />

                <!-- Layer 2: Soft Light Red Gradient Overlay (1104:76351) -->
                <div class="inv-monitor-softlight-overlay" data-node-id="1104:76351"></div>

                <!-- Layer 3: 4 Camera Reticle Brackets (1104:76343, 76345, 76344, 76346) -->
                <div class="inv-reticle-bracket inv-bracket-top-left" data-node-id="1104:76345"></div>
                <div class="inv-reticle-bracket inv-bracket-top-right" data-node-id="1104:76343"></div>
                <div class="inv-reticle-bracket inv-bracket-bottom-left" data-node-id="1104:76346"></div>
                <div class="inv-reticle-bracket inv-bracket-bottom-right" data-node-id="1104:76344"></div>

              </div>

            </div>

            <!-- Polaroid & Occult Evidence Board (1104:76450) -->
            <div class="inv-coche-evidence-board" data-node-id="1104:76450">
              <img src="./assets/59c372722edcc8bbca852f01b65d1d8ce34c06c0.png" alt="Polaroid Evidence Board" class="inv-coche-evidence-img" />
            </div>

          </div>

          <!-- Right Column: Core Mechanism Details (1104:76451) -->
          <div class="inv-coche-right-col trailer-scroll-reveal trailer-reveal-right" data-node-id="1104:76451">
            
            <!-- Title (1104:76455) -->
            <h2 class="inv-coche-heading" data-node-id="1104:76455">
              CƠ CHẾ CỐT LÕI
            </h2>

            <!-- Intro text (1104:76458) -->
            <p class="inv-coche-intro" data-node-id="1104:76458">
              Trong thế giới của OÁN, mỗi đồ vật đều mang theo một ký ức đau thương. Người chơi phải tương tác với môi trường để tìm ra những mảnh ghép của câu chuyện.
            </p>

            <!-- Director Note Box (1104:76459) -->
            <div class="inv-coche-director-box" data-node-id="1104:76459">
              <span class="inv-coche-director-label" data-node-id="1104:76461">GHI CHÚ TỪ ĐẠO DIỄN:</span>
              <p class="inv-coche-director-quote" data-node-id="1104:76463">
                "Sự im lặng đôi khi nói lên nhiều điều hơn tiếng hét."
              </p>
            </div>

            <!-- 4 Interaction Cards (1104:76465) -->
            <div class="inv-coche-cards-list" data-node-id="1104:76465">
              
              <!-- Item 1: Khám phá & Tương tác -->
              <div class="inv-coche-card-row" data-node-id="1104:76466">
                <div class="inv-coche-card-icon">
                  <img src="./assets/inv_icon_denpin.png" alt="" />
                </div>
                <div class="inv-coche-card-body">
                  <h3 class="inv-coche-card-title">KHÁM PHÁ & TƯƠNG TÁC</h3>
                  <p class="inv-coche-card-desc">Môi trường luôn ẩn chứa những manh mối quan trọng để hé lộ sự thật.</p>
                </div>
              </div>

              <!-- Item 2: Thu thập ký ức -->
              <div class="inv-coche-card-row" data-node-id="1104:76473">
                <div class="inv-coche-card-icon">
                  <img src="./assets/inv_icon_sach.png" alt="" />
                </div>
                <div class="inv-coche-card-body">
                  <h3 class="inv-coche-card-title">THU THẬP KÝ ỨC</h3>
                  <p class="inv-coche-card-desc">Thu thập các mảnh ký ức rải rác để hiểu rõ quá khứ đằng sau bi kịch.</p>
                </div>
              </div>

              <!-- Item 3: Giải mã bí ẩn -->
              <div class="inv-coche-card-row" data-node-id="1104:76480">
                <div class="inv-coche-card-icon">
                  <img src="./assets/inv_icon_manhghep.png" alt="" />
                </div>
                <div class="inv-coche-card-body">
                  <h3 class="inv-coche-card-title">GIẢI MÃ BÍ ẨN</h3>
                  <p class="inv-coche-card-desc">Giải các câu đố dựa trên ký ức và hiện vật để mở ra những cánh cửa chôn vùi.</p>
                </div>
              </div>

              <!-- Item 4: Sinh tồn & Chạy trốn -->
              <div class="inv-coche-card-row" data-node-id="1104:76487">
                <div class="inv-coche-card-icon">
                  <img src="./assets/inv_icon_nhanvat.png" alt="" />
                </div>
                <div class="inv-coche-card-body">
                  <h3 class="inv-coche-card-title">SINH TỒN & CHẠY TRỐN</h3>
                  <p class="inv-coche-card-desc">Bóng tối luôn rình rập. Không phải lúc nào chạy trốn cũng toàn vẹn.</p>
                </div>
              </div>

            </div>

            <!-- Bottom Quote Banner (1104:76494) -->
            <div class="inv-coche-bottom-quote" data-node-id="1104:76495">
              <span class="inv-quote-mark-left">“</span>
              <div class="inv-quote-text-group">
                <span class="inv-quote-line-1">Sự im lặng đôi khi</span>
                <span class="inv-quote-line-2">nói nhiều hơn tiếng hét.</span>
              </div>
              <span class="inv-quote-mark-right">”</span>
            </div>

          </div>

        </div>

        <!-- Topmost Multiplied Grunge Texture (1104:76785) -->
        <div class="inv-coche-bg-texture" data-node-id="1104:76785">
          <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" />
        </div>

      </section>

      <!-- ========================================================
           3. INVESTIGATION PROCESS: QUY TRÌNH ĐIỀU TRA (1093:77227)
           ======================================================== -->
      <section class="inv-process-section" data-node-id="1093:77227">
        
        <!-- Plaque Banner Header (1093:77229) -->
        <div class="inv-process-header-box trailer-scroll-reveal trailer-reveal-fade-up" data-node-id="1093:77229">
          <div class="inv-process-header-bg">
            <img src="./assets/d8809587d3698ce712d4fc207feeb7613be0ca4b.png" alt="" />
          </div>
          <h2 class="inv-process-header-title">Quy trình điều tra</h2>
        </div>

        <!-- 4 Step Cards (1093:77237) -->
        <div class="inv-process-cards-grid trailer-scroll-reveal trailer-reveal-scale" data-node-id="1093:77237">
          
          <!-- Step 1: Quan Sát (1093:77238) -->
          <div class="inv-step-card" data-node-id="1093:77238">
            <div class="inv-step-card-frame">
              <div class="inv-step-card-media">
                <img src="./assets/c0e26f1faeed8e2ced47890e19a6ae1ebb7fd5bb.png" alt="Quan Sát" />
                <div class="inv-step-card-overlay"></div>
              </div>
              <div class="inv-step-card-content">
                <h3 class="inv-step-card-title">QUAN SÁT</h3>
                <p class="inv-step-card-desc">Nhận diện những điểm bất thường trong môi trường xung quanh.</p>
              </div>
            </div>
          </div>

          <!-- Step 2: Kiểm Tra (1093:77249) -->
          <div class="inv-step-card" data-node-id="1093:77249">
            <div class="inv-step-card-frame">
              <div class="inv-step-card-media">
                <img src="./assets/d505a84092ef59ab250392338b0f13168a29bc8c.png" alt="Kiểm Tra" />
                <div class="inv-step-card-overlay"></div>
              </div>
              <div class="inv-step-card-content">
                <h3 class="inv-step-card-title">KIỂM TRA</h3>
                <p class="inv-step-card-desc">Tương tác với đồ vật, kiểm tra các góc tối đáng ngờ.</p>
              </div>
            </div>
          </div>

          <!-- Step 3: Thu Thập (1093:77260) -->
          <div class="inv-step-card" data-node-id="1093:77260">
            <div class="inv-step-card-frame">
              <div class="inv-step-card-media">
                <img src="./assets/7921874080b1356044c7cfc7badfcae0babcbdd1.png" alt="Thu Thập" />
                <div class="inv-step-card-overlay"></div>
              </div>
              <div class="inv-step-card-content">
                <h3 class="inv-step-card-title">THU THẬP</h3>
                <p class="inv-step-card-desc">Thu thập manh mối và ghép nối thành chuỗi sự kiện logic.</p>
              </div>
            </div>
          </div>

          <!-- Step 4: Kiểm Tra / Kết Nối (1093:77271) -->
          <div class="inv-step-card" data-node-id="1093:77271">
            <div class="inv-step-card-frame">
              <div class="inv-step-card-media">
                <img src="./assets/f354717ebfc3ae77ba627c0c73abaf38e260dc95.png" alt="Kiểm Tra" />
                <div class="inv-step-card-overlay"></div>
              </div>
              <div class="inv-step-card-content">
                <h3 class="inv-step-card-title">KIỂM TRA</h3>
                <p class="inv-step-card-desc">Kết nối các mảnh ghép để suy luận và đưa ra kết luận vụ án.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ========================================================
           4, 5, 6. TOOLS, TIPS & CONTINUE SECTION (1104:76910)
           ======================================================== -->
      <section class="inv-tools-tips-section" data-node-id="1104:76910">
        <div class="inv-tools-tips-container">

          <!-- 4.1 CÔNG CỤ HỖ TRỢ (1104:77037) -->
          <div class="inv-tools-block">
            
            <!-- Horror Frame Header (1104:77037) -->
            <div class="inv-figma-ctaline-header trailer-scroll-reveal trailer-reveal-fade-up" data-node-id="1104:77037">
              <div class="inv-ctaline-frame">
                <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="inv-ctaline-left" />
                <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="inv-ctaline-right" />
              </div>
              <h2 class="inv-ctaline-text" data-node-id="1104:77038">CÔNG CỤ HỖ TRỢ</h2>
            </div>

            <!-- 4 Support Tool ItemCards (1104:77084) -->
            <div class="inv-figma-itemcards-row trailer-scroll-reveal trailer-reveal-scale" data-node-id="1104:77084">
              
              <!-- ItemCard 1: Evidence Cards (1104:77025) -->
              <div class="inv-figma-itemcard" data-node-id="1104:77025">
                <div class="inv-itemcard-icon-box" data-node-id="1104:76997">
                  <img src="./assets/e705f4ca885844be584dcf92fbd95c1450d35232.svg" alt="" class="inv-itemcard-svg-icon" />
                </div>
                <div class="inv-itemcard-text-group">
                  <h3 class="inv-itemcard-title" data-node-id="1104:76925">EVIDENCE CARDS</h3>
                  <p class="inv-itemcard-desc" data-node-id="1104:76927">Hồ sơ chi tiết về các vật chứng đã tìm thấy.</p>
                </div>
                <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" class="inv-itemcard-texture" data-node-id="1104:77005" />
              </div>

              <!-- ItemCard 2: Audio Logs -->
              <div class="inv-figma-itemcard" data-node-id="1104:77084">
                <div class="inv-itemcard-icon-box">
                  <img src="./assets/e705f4ca885844be584dcf92fbd95c1450d35232.svg" alt="" class="inv-itemcard-svg-icon" />
                </div>
                <div class="inv-itemcard-text-group">
                  <h3 class="inv-itemcard-title">AUDIO LOGS</h3>
                  <p class="inv-itemcard-desc">Băng ghi âm lưu giữ những lời trăn trối cuối cùng.</p>
                </div>
                <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" class="inv-itemcard-texture" />
              </div>

              <!-- ItemCard 3: Occult Journal -->
              <div class="inv-figma-itemcard" data-node-id="1104:77084">
                <div class="inv-itemcard-icon-box">
                  <img src="./assets/e705f4ca885844be584dcf92fbd95c1450d35232.svg" alt="" class="inv-itemcard-svg-icon" />
                </div>
                <div class="inv-itemcard-text-group">
                  <h3 class="inv-itemcard-title">OCCULT JOURNAL</h3>
                  <p class="inv-itemcard-desc">Sổ tay ghi chép các nghi thức tà thuật và phong ấn.</p>
                </div>
                <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" class="inv-itemcard-texture" />
              </div>

              <!-- ItemCard 4: Flashlight & UV -->
              <div class="inv-figma-itemcard" data-node-id="1104:77084">
                <div class="inv-itemcard-icon-box">
                  <img src="./assets/e705f4ca885844be584dcf92fbd95c1450d35232.svg" alt="" class="inv-itemcard-svg-icon" />
                </div>
                <div class="inv-itemcard-text-group">
                  <h3 class="inv-itemcard-title">FLASHLIGHT & UV</h3>
                  <p class="inv-itemcard-desc">Đèn pin soi rọi ký hiệu ẩn trong bóng tối.</p>
                </div>
                <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" class="inv-itemcard-texture" />
              </div>

            </div>
          </div>

          <!-- 4.2 MẸO SINH TỒN (1104:77085) -->
          <div class="inv-tips-block">
            
            <!-- Horror Frame Header (1104:77085) -->
            <div class="inv-figma-ctaline-header trailer-scroll-reveal trailer-reveal-fade-up" data-node-id="1104:77085">
              <div class="inv-ctaline-frame">
                <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="inv-ctaline-left" />
                <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="inv-ctaline-right" />
              </div>
              <h2 class="inv-ctaline-text" data-node-id="1104:77086">MẸO SINH TỒN</h2>
            </div>

            <!-- 3 Survival Tip Cards (Mo - 1104:77132) -->
            <div class="inv-figma-mo-row trailer-scroll-reveal trailer-reveal-scale" data-node-id="1104:77132">
              
              <!-- Mo Card 1: Tip 01 (1104:77097) -->
              <div class="inv-figma-mo-card" data-node-id="1104:77097">
                <div class="inv-mo-badge" data-node-id="1104:76966">TIP 01</div>
                <h3 class="inv-mo-title" data-node-id="1104:76968">Lắng nghe âm thanh</h3>
                <p class="inv-mo-desc" data-node-id="1104:76970">
                  Vật thể quan trọng thường phát ra những tiếng động lạ khi bạn ở gần.
                </p>
                <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" class="inv-mo-texture" data-node-id="1104:77096" />
              </div>

              <!-- Mo Card 2: Tip 02 -->
              <div class="inv-figma-mo-card" data-node-id="1104:77132">
                <div class="inv-mo-badge">TIP 02</div>
                <h3 class="inv-mo-title">Quản lý nguồn sáng</h3>
                <p class="inv-mo-desc">
                  Đèn pin có giới hạn pin, chỉ bật khi cần thiết để tránh thu hút thực thể.
                </p>
                <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" class="inv-mo-texture" />
              </div>

              <!-- Mo Card 3: Tip 03 -->
              <div class="inv-figma-mo-card" data-node-id="1104:77132">
                <div class="inv-mo-badge">TIP 03</div>
                <h3 class="inv-mo-title">Ghi nhớ lối thoát</h3>
                <p class="inv-mo-desc">
                  Luôn xác định đường rút lui trước khi bước sâu vào căn phòng bị phong ấn.
                </p>
                <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" class="inv-mo-texture" />
              </div>

            </div>
          </div>

          <!-- 4.3 TIẾP TỤC HÀNH TRÌNH? (1104:77402) -->
          <div class="inv-figma-continue-block trailer-scroll-reveal trailer-reveal-fade-up" data-node-id="1104:77402">
            
            <!-- Heading -->
            <h2 class="inv-figma-continue-heading" data-node-id="I1104:77402;1104:77379">
              TIẾP TỤC HÀNH TRÌNH?
            </h2>

            <!-- Subtitle -->
            <p class="inv-figma-continue-subtitle" data-node-id="I1104:77402;1104:77382">
              Sau khi thu thập đủ manh mối, bạn sẽ phải đối mặt với những câu đố hóc búa để tiến sâu hơn vào sự thật.
            </p>

            <!-- Multi-layered Horror CTA Button (1104:77388) -->
            <a href="#puzzle" class="inv-figma-cta-btn" data-node-id="I1104:77402;1104:77388" aria-label="Tiếp tục đến Giải Đố">
              
              <!-- Layer 1: Frame Parts -->
              <div class="inv-btn-frame-bg" data-node-id="I1104:77402;1104:77388;906:1550">
                <img src="./assets/105ebc7cda031fdb485695b18a341cec252f1d95.png" alt="" class="inv-btn-part-1" />
                <div class="inv-btn-part-2" style="background-image: url('./assets/a1b7e3991a46b5a64f1f7dac3536b09a9e87a8ba.png');"></div>
                <img src="./assets/0d6b9966ff2827a216126f97de3fae66e8b0f69d.png" alt="" class="inv-btn-part-3" />
                <div class="inv-btn-part-4" style="background-image: url('./assets/a52a7c4b8dc8beffb2f5577f0501b16b1cfce647.png');"></div>
                <img src="./assets/18c99e59fbe5fb1f1a0cf0ff28f9c309e0b87822.png" alt="" class="inv-btn-part-5" />
              </div>

              <!-- Layer 2: Inner Blood & Grunge Texture -->
              <div class="inv-btn-inner-body">
                <div class="inv-btn-grad-overlay"></div>
                <div class="inv-btn-texture-wrap">
                  <img src="./assets/ea8df93482c54ccfe7b61d0a530fea954eb54fd3.png" alt="" class="inv-btn-texture-img" />
                </div>
              </div>

              <!-- Layer 3: Neon Red Glowing Borders -->
              <div class="inv-btn-glow-frame-3"></div>
              <div class="inv-btn-glow-frame-2"></div>
              <div class="inv-btn-glow-frame-1"></div>

              <!-- Layer 4: Button Label -->
              <span class="inv-btn-label-text" data-node-id="I1104:77402;1104:77388;906:1557">
                Tiếp tục đến Giải Đố
              </span>

            </a>

          </div>

        </div>
      </section>

      <!-- ========================================================
           7. READY SECTION: BẠN ĐÃ SẴN SÀNG BƯỚC VÀO NHÀ HỨA? (1093:77402)
           ======================================================== -->
      ${getReadySectionHTML()}

    </div>
  `;

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
