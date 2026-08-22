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
        
        <!-- Background Scratch Texture (1104:76537) -->
        <div class="inv-hero-bg-texture" data-node-id="1104:76537">
          <div class="inv-hero-bg-texture-rotate">
            <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" />
          </div>
        </div>

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

      </section>

      <!-- ========================================================
           2. CORE MECHANISM: CƠ CHẾ CỐT LÕI (1093:77154)
           ======================================================== -->
      <section class="inv-coche-section" data-node-id="1093:77154">
        <div class="inv-coche-container">
          
          <!-- Left: Crime Scene Monitor & Evidence Board -->
          <div class="inv-coche-left-col trailer-scroll-reveal trailer-reveal-left">
            
            <!-- Monitor Frame (1093:77169) -->
            <div class="inv-coche-monitor-frame" data-node-id="1093:77169">
              <div class="inv-coche-monitor-screen">
                <img src="./assets/59c372722edcc8bbca852f01b65d1d8ce34c06c0.png" alt="Crime Scene Investigation" />
              </div>
            </div>

            <!-- Occult Evidence Board (1093:77180) -->
            <div class="inv-coche-evidence-board" data-node-id="1093:77180">
              <!-- Doll Polaroid -->
              <div class="inv-evidence-polaroid">
                <img src="./assets/6cb0e3ad7943c352a01b609395fd8553913b9ec5.png" alt="Polaroid Evidence" />
              </div>
              <!-- Ritual Letter -->
              <div class="inv-evidence-letter">
                <img src="./assets/17d05d4a5da492841a813a3a61de000275d38e15.png" alt="Occult Ritual Letter" />
              </div>
              <!-- Red Pins & Connecting Strings -->
              <div class="inv-evidence-pins">
                <img src="./assets/6ae3364c73d5503d6ac86b283f1544b95e624f09.png" alt="" />
              </div>
            </div>

          </div>

          <!-- Right: Core Mechanism Details -->
          <div class="inv-coche-right-col trailer-scroll-reveal trailer-reveal-right">
            
            <!-- Badge Case File #01 -->
            <div class="inv-coche-case-badge" data-node-id="1093:77226">
              <span>CASE FILE #01</span>
            </div>

            <!-- Title -->
            <h2 class="inv-coche-heading" data-node-id="1093:77160">
              CƠ CHẾ CỐT LÕI
            </h2>

            <!-- Intro text -->
            <p class="inv-coche-intro" data-node-id="1093:77162">
              Trong thế giới của OÁN, mỗi đồ vật đều mang theo một ký ức đau thương. Người chơi phải tương tác với môi trường để tìm ra những mảnh ghép của câu chuyện.
            </p>

            <!-- Director Note Box -->
            <div class="inv-coche-director-box" data-node-id="1093:77163">
              <span class="inv-coche-director-label">GHI CHÚ TỪ ĐẠO DIỄN:</span>
              <p class="inv-coche-director-quote">
                "Sự im lặng đôi khi nói lên nhiều điều hơn tiếng hét."
              </p>
            </div>

            <!-- 4 Interaction Cards -->
            <div class="inv-coche-cards-list">
              
              <!-- Item 1: Khám phá & Tương tác -->
              <div class="inv-coche-item-card" data-node-id="1093:77189">
                <div class="inv-coche-item-icon">
                  <img src="./assets/fe62d22e616b81c08bba3fd07bc6d12a12bb7d3b.svg" alt="" />
                </div>
                <div class="inv-coche-item-text">
                  <h3>KHÁM PHÁ & TƯƠNG TÁC</h3>
                  <p>Môi trường luôn ẩn chứa những manh mối quan trọng để hé lộ sự thật.</p>
                </div>
              </div>

              <!-- Item 2: Thu thập ký ức -->
              <div class="inv-coche-item-card" data-node-id="1093:77197">
                <div class="inv-coche-item-icon">
                  <img src="./assets/ead19dab0eb3568c8623cea514a410f92e6b48a5.svg" alt="" />
                </div>
                <div class="inv-coche-item-text">
                  <h3>THU THẬP KÝ ỨC</h3>
                  <p>Thu thập các mảnh ký ức rải rác để hiểu rõ quá khứ đằng sau bi kịch.</p>
                </div>
              </div>

              <!-- Item 3: Giải mã bí ẩn -->
              <div class="inv-coche-item-card" data-node-id="1093:77205">
                <div class="inv-coche-item-icon">
                  <img src="./assets/169f48fe22a9f35609e253e66be8d9ec6eb769ad.svg" alt="" />
                </div>
                <div class="inv-coche-item-text">
                  <h3>GIẢI MÃ BÍ ẨN</h3>
                  <p>Giải các câu đố dựa trên ký ức và hiện vật để mở ra những cánh cửa chôn vùi.</p>
                </div>
              </div>

              <!-- Item 4: Sinh tồn & Chạy trốn -->
              <div class="inv-coche-item-card" data-node-id="1093:77213">
                <div class="inv-coche-item-icon">
                  <img src="./assets/510903028f9bb3763f751d2681b979c661a8b00d.svg" alt="" />
                </div>
                <div class="inv-coche-item-text">
                  <h3>SINH TỒN & CHẠY TRỐN</h3>
                  <p>Bóng tối luôn rình rập. Không phải lúc nào chạy trốn cũng toàn vẹn.</p>
                </div>
              </div>

            </div>

            <!-- Bottom Quote Banner -->
            <div class="inv-coche-bottom-quote" data-node-id="1093:77166">
              <span class="inv-quote-mark">“</span>
              <p>Sự im lặng đôi khi nói nhiều hơn tiếng hét.</p>
              <span class="inv-quote-mark">”</span>
            </div>

          </div>

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
           4. SUPPORT TOOLS: CÔNG CỤ HỖ TRỢ (1093:77284)
           ======================================================== -->
      <section class="inv-tools-section" data-node-id="1093:77284">
        
        <!-- Horror Frame Header (1093:77285) -->
        <div class="inv-tools-header trailer-scroll-reveal" data-node-id="1093:77285">
          <div class="inv-tools-horror-frame">
            <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="inv-tools-horror-left" />
            <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="inv-tools-horror-right" />
          </div>
          <h2 class="inv-tools-header-text" data-node-id="1093:77286">CÔNG CỤ HỖ TRỢ</h2>
        </div>

        <!-- 4 Support Tool Cards (1093:77292) -->
        <div class="inv-tools-grid trailer-scroll-reveal trailer-reveal-fade-up" data-node-id="1093:77292">
          
          <!-- Card A: Evidence Cards (1093:77293) -->
          <div class="inv-tool-card" data-node-id="1093:77293">
            <div class="inv-tool-badge">A</div>
            <h3 class="inv-tool-title">EVIDENCE CARDS</h3>
            <p class="inv-tool-desc">Hồ sơ chi tiết về các vật chứng đã tìm thấy.</p>
          </div>

          <!-- Card B: Audio Logs (1093:77305) -->
          <div class="inv-tool-card" data-node-id="1093:77305">
            <div class="inv-tool-badge">B</div>
            <h3 class="inv-tool-title">AUDIO LOGS</h3>
            <p class="inv-tool-desc">Băng ghi âm lưu giữ những lời trăn trối cuối cùng.</p>
          </div>

          <!-- Card C: Occult Journal (1093:77317) -->
          <div class="inv-tool-card" data-node-id="1093:77317">
            <div class="inv-tool-badge">C</div>
            <h3 class="inv-tool-title">OCCULT JOURNAL</h3>
            <p class="inv-tool-desc">Sổ tay ghi chép các nghi thức tà thuật và phong ấn.</p>
          </div>

          <!-- Card D: Flashlight & UV (1093:77329) -->
          <div class="inv-tool-card" data-node-id="1093:77329">
            <div class="inv-tool-badge">D</div>
            <h3 class="inv-tool-title">FLASHLIGHT & UV</h3>
            <p class="inv-tool-desc">Đèn pin soi rọi ký hiệu ẩn trong bóng tối.</p>
          </div>

        </div>
      </section>

      <!-- ========================================================
           5. SURVIVAL TIPS: MẸO SINH TỒN (1093:77344)
           ======================================================== -->
      <section class="inv-tips-section" data-node-id="1093:77344">
        
        <!-- Horror Frame Header (1093:77345) -->
        <div class="inv-tools-header trailer-scroll-reveal" data-node-id="1093:77345">
          <div class="inv-tools-horror-frame">
            <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="inv-tools-horror-left" />
            <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="inv-tools-horror-right" />
          </div>
          <h2 class="inv-tools-header-text" data-node-id="1093:77346">MẸO SINH TỒN</h2>
        </div>

        <!-- 3 Survival Tip Cards (1093:77351) -->
        <div class="inv-tips-grid trailer-scroll-reveal trailer-reveal-scale" data-node-id="1093:77351">
          
          <!-- Tip 1 (1093:77352) -->
          <div class="inv-tip-card" data-node-id="1093:77352">
            <div class="inv-tip-header-row">
              <span class="inv-tip-badge">TIP 01</span>
              <div class="inv-tip-speaker">
                <img src="./assets/5280884719d4359c523e1bb78c45cf2c8b6ffab0.svg" alt="Speaker" />
              </div>
            </div>
            <h3 class="inv-tip-title">Lắng nghe âm thanh</h3>
            <p class="inv-tip-desc">Vật thể quan trọng thường phát ra những tiếng động lạ khi bạn ở gần.</p>
          </div>

          <!-- Tip 2 (1093:77366) -->
          <div class="inv-tip-card" data-node-id="1093:77366">
            <div class="inv-tip-header-row">
              <span class="inv-tip-badge">TIP 02</span>
              <div class="inv-tip-speaker">
                <img src="./assets/5280884719d4359c523e1bb78c45cf2c8b6ffab0.svg" alt="Speaker" />
              </div>
            </div>
            <h3 class="inv-tip-title">Quản lý nguồn sáng</h3>
            <p class="inv-tip-desc">Đèn pin có giới hạn pin, chỉ bật khi cần thiết để tránh thu hút thực thể.</p>
          </div>

          <!-- Tip 3 (1093:77380) -->
          <div class="inv-tip-card" data-node-id="1093:77380">
            <div class="inv-tip-header-row">
              <span class="inv-tip-badge">TIP 03</span>
              <div class="inv-tip-speaker">
                <img src="./assets/5280884719d4359c523e1bb78c45cf2c8b6ffab0.svg" alt="Speaker" />
              </div>
            </div>
            <h3 class="inv-tip-title">Ghi nhớ lối thoát</h3>
            <p class="inv-tip-desc">Luôn xác định đường rút lui trước khi bước sâu vào căn phòng bị phong ấn.</p>
          </div>

        </div>
      </section>

      <!-- ========================================================
           6. CONTINUE JOURNEY: TIẾP TỤC HÀNH TRÌNH? (1093:77395)
           ======================================================== -->
      <section class="inv-continue-section" data-node-id="1093:77395">
        <div class="inv-continue-container trailer-scroll-reveal trailer-reveal-fade-up">
          <h2 class="inv-continue-title" data-node-id="1093:77397">TIẾP TỤC HÀNH TRÌNH?</h2>
          <p class="inv-continue-subtitle" data-node-id="1093:77398">Khám phá thêm các trang để hiểu rõ hơn về thế giới OÁN</p>
          
          <!-- Horror Styled Button (1093:77399) -->
          <a href="#puzzle" class="inv-continue-btn" data-node-id="1093:77399">
            <span class="inv-continue-btn-text">TIẾP TỤC TÌM GIẢI ĐỐ</span>
            <span class="inv-continue-btn-arrow">›</span>
          </a>
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
