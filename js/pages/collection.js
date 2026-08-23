/* ========================================================
   OAN — Collection Page (Design 23: 1135-78166 "Thu thập desktop")
   ======================================================== */

import { getReadySectionHTML } from '../components/ready-section.js';

export async function renderCollection(container) {
  container.innerHTML = `
    <div class="collection-page-wrapper" data-node-id="1135:78166">
      
      <!-- ========================================================
           1. HERO SECTION (1135:78270)
           ======================================================== -->
      <section class="col-hero-section" data-node-id="1135:78270">
        
        <!-- Flashlight Media Frame (1135:78271) -->
        <div class="col-hero-frame-container trailer-scroll-reveal trailer-reveal-scale" data-node-id="1135:78271">
          <div class="col-hero-bg-media">
            <img src="./assets/840963d39cbbb21402855cef5eb1c4589a943e70.png" alt="Flashlight & Lamp Investigation" class="col-hero-bg-img" />
          </div>
        </div>

        <!-- Main Title & Subtitle (1135:78273) -->
        <div class="col-hero-content-bottom trailer-scroll-reveal trailer-reveal-fade-up" data-node-id="1135:78273">
          <h1 class="col-hero-main-title" data-node-id="1135:78274">THU THẬP</h1>
          <p class="col-hero-subtitle" data-node-id="1135:78275">MỖI CHI TIẾT ĐỀU CÓ THỂ THAY ĐỔI SỰ THẬT.</p>
        </div>

        <!-- Grunge Texture Overlay (1135:78288) -->
        <div class="col-hero-grunge-overlay" data-node-id="1135:78288">
          <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" class="col-hero-grunge-img" />
        </div>

      </section>

      <!-- ========================================================
           2. TRUTH & CATEGORIES SECTION (1135:78574)
           ======================================================== -->
      <section class="col-truth-section" data-node-id="1135:78574">
        
        <!-- Background Glow Ellipses (1135:78651 -> 1135:78657) -->
        <div class="col-truth-bg-glows">
          <img src="./assets/392387e2253c1bc9141f12c2c1530c7cbb028e58.svg" alt="" class="col-glow-ellipse col-glow-1" />
          <img src="./assets/201b875ec4c385a55fbf7acc247f851ce941a817.svg" alt="" class="col-glow-ellipse col-glow-2" />
          <img src="./assets/201b875ec4c385a55fbf7acc247f851ce941a817.svg" alt="" class="col-glow-ellipse col-glow-3" />
          <img src="./assets/201b875ec4c385a55fbf7acc247f851ce941a817.svg" alt="" class="col-glow-ellipse col-glow-4" />
          <img src="./assets/dd24e34069b945e8c9e3d666c7a3ac041e5e4876.svg" alt="" class="col-glow-ellipse col-glow-5" />
        </div>

        <!-- Top Split: Photo & Narrative (1135:78588) -->
        <div class="col-truth-top-row" data-node-id="1135:78588">
          
          <!-- Left Photo Frame (1135:78577) -->
          <div class="col-truth-photo-wrap trailer-scroll-reveal trailer-reveal-left" data-node-id="1135:78577">
            <!-- Shadow Overlay Under Photo (1135:78657) -->
            <div class="col-truth-photo-shadow-overlay" data-node-id="1135:78657">
              <img src="./assets/dd24e34069b945e8c9e3d666c7a3ac041e5e4876.svg" alt="" class="col-truth-photo-shadow-img" />
            </div>
            <div class="col-truth-photo-inner" data-node-id="1135:78575">
              <img src="./assets/4b61077399c45a2c9a245fffbd7d5b2b0de19ff8.png" alt="Bóc tách lớp vỏ sự thật" class="col-truth-photo-img" />
            </div>
          </div>

          <!-- Right Typography Column (1135:78587) -->
          <div class="col-truth-text-col trailer-scroll-reveal trailer-reveal-right" data-node-id="1135:78587">
            <h2 class="col-truth-title" data-node-id="1135:78578">
              BÓC TÁCH LỚP <span class="col-title-accent">VỎ</span><br/>SỰ THẬT
            </h2>
            <div class="col-truth-red-line-wrap" data-node-id="1135:78584">
              <img src="./assets/d8257fe818600172f5a43ec310fddc2308217757.svg" alt="" class="col-truth-red-line-svg" />
            </div>
            <div class="col-truth-paragraphs" data-node-id="1135:78581">
              <p class="col-truth-p1" data-node-id="1135:78579">
                Trong thế giới của OÁN, manh mối không chỉ là những vật phẩm tĩnh lặng. Chúng là những mảnh vỡ của quá khứ, những tiếng vọng của những linh hồn chưa siêu thoát. Việc thu thập và phân tích tỉ mỉ từng đồ vật sẽ mở khóa các nút thắt trong cốt truyện, cho phép bạn nhìn thấy những gì kẻ khác cố tình che giấu.
              </p>
              <p class="col-truth-p2" data-node-id="1135:78580">
                Hãy cẩn trọng: một bước thu thập xé nữa hay một tấm ảnh ở vòng có thể xoay chuyển hoàn toàn hiểu biết của bạn về các nhân vật xung quanh.
              </p>
            </div>
          </div>

        </div>

        <!-- Category Divider Line (1135:78596) -->
        <div class="col-category-divider-row trailer-scroll-reveal trailer-reveal-fade-up" data-node-id="1135:78596">
          <div class="col-divider-line col-divider-line--left" data-node-id="1135:78593">
            <img src="./assets/b178258681efdabb9aae37ef22f48050a3808838.svg" alt="" class="col-divider-svg" />
          </div>
          <span class="col-category-divider-label" data-node-id="1135:78595">Danh mục manh mối</span>
          <div class="col-divider-line col-divider-line--right" data-node-id="1135:78594">
            <img src="./assets/7dabe33aa8257b98c2bef388e36be62c03390449.svg" alt="" class="col-divider-svg" />
          </div>
        </div>

        <!-- 4 Category Cards Grid (1135:78641) -->
        <div class="col-cards-grid trailer-scroll-reveal trailer-reveal-scale" data-node-id="1135:78641">
          
          <!-- Card 1: VĂN BẢN (1135:78597) -->
          <div class="col-card-item" data-node-id="1135:78597">
            <img src="./assets/col-card-1.svg" alt="VĂN BẢN - Thư từ, nhật ký, tài liệu cũ" class="col-card-svg-full" />
          </div>

          <!-- Card 2: HÌNH ẢNH (1135:78608) -->
          <div class="col-card-item" data-node-id="1135:78608">
            <img src="./assets/col-card-2.svg" alt="HÌNH ẢNH - Ảnh chụp hiện trường, tư liệu" class="col-card-svg-full" />
          </div>

          <!-- Card 3: VẬT DỤNG (1135:78619) -->
          <div class="col-card-item" data-node-id="1135:78619">
            <img src="./assets/col-card-3.svg" alt="VẬT DỤNG - Đồ cá nhân, cổ vật, công cụ" class="col-card-svg-full" />
          </div>

          <!-- Card 4: TÂM LINH (1135:78630) -->
          <div class="col-card-item" data-node-id="1135:78630">
            <img src="./assets/col-card-4.svg" alt="TÂM LINH - Bùa chú, tàn tích, dấu ấn" class="col-card-svg-full" />
          </div>

        </div>

      </section>

      <!-- ========================================================
           3. INVENTORY MANAGEMENT SECTION (1135:78658)
           ======================================================== -->
      <section class="col-invent-section" data-node-id="1135:78658">
        <div class="col-invent-container">
          
          <!-- Left Info Box (1170:78206) -->
          <div class="col-invent-left-box trailer-scroll-reveal trailer-reveal-left" data-node-id="1170:78206">
            <div class="col-invent-title-wrap" data-node-id="1170:78196">
              <h2 class="col-invent-title" data-node-id="1170:78194">QUẢN LÝ<br/>TÚI ĐỒ</h2>
              <p class="col-invent-desc" data-node-id="1135:78013">
                Giao diện tối giản giúp bạn tập trung vào việc phân tích. Kết hợp các manh mối để tạo ra chìa khóa mới cho câu chuyện.
              </p>
            </div>
            <div class="col-invent-capacity-row" data-node-id="1170:78201">
              <span class="col-invent-capacity-label" data-node-id="1170:78202">Sức chứa</span>
              <div class="col-invent-capacity-badge" data-node-id="1170:78203">
                <span class="col-invent-capacity-num" data-node-id="1170:78204">5 / 20</span>
              </div>
            </div>
          </div>

          <!-- Right Inventory Chest Frame (1170:77990) -->
          <div class="col-invent-grid-wrap trailer-scroll-reveal trailer-reveal-right" data-node-id="1170:77990">
            <div class="col-invent-grid-body" data-node-id="1170:77992">
              <div class="col-invent-slots-grid" data-node-id="1170:77994">
                
                <!-- 5 Active Golden Slots (1170:77995 -> 1170:77999) -->
                <div class="col-slot col-slot--active" title="Cổ vật 1">
                  <img src="./assets/201b875ec4c385a55fbf7acc247f851ce941a817.svg" alt="" class="col-slot-icon" />
                </div>
                <div class="col-slot col-slot--active" title="Cổ vật 2">
                  <img src="./assets/201b875ec4c385a55fbf7acc247f851ce941a817.svg" alt="" class="col-slot-icon" />
                </div>
                <div class="col-slot col-slot--active" title="Cổ vật 3">
                  <img src="./assets/201b875ec4c385a55fbf7acc247f851ce941a817.svg" alt="" class="col-slot-icon" />
                </div>
                <div class="col-slot col-slot--active" title="Cổ vật 4">
                  <img src="./assets/201b875ec4c385a55fbf7acc247f851ce941a817.svg" alt="" class="col-slot-icon" />
                </div>
                <div class="col-slot col-slot--active" title="Cổ vật 5">
                  <img src="./assets/201b875ec4c385a55fbf7acc247f851ce941a817.svg" alt="" class="col-slot-icon" />
                </div>

                <!-- 15 Empty Dark Slots (1170:78000 -> 1170:78014) -->
                ${Array(15).fill(0).map((_, i) => `
                  <div class="col-slot" title="Ô trống ${i + 6}"></div>
                `).join('')}

              </div>

              <!-- Bottom Tape Plaque Label (1170:78190) -->
              <div class="col-invent-bottom-tape" data-node-id="1170:78190">
                <span class="col-invent-tape-text" data-node-id="1170:78188">THỨ GÌ CŨNG CÓ CÁI GIÁ CỦA NÓ</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      <!-- ========================================================
           4. PROGRESS STEPPER & GAMEPLAY END (1170:78210)
           ======================================================== -->
      <section class="col-progress-section" data-node-id="1170:78210">
        
        <!-- Banner Header (1170:78211) -->
        <div class="col-progress-header-wrap trailer-scroll-reveal trailer-reveal-fade-up">
          <div class="col-progress-bracket col-progress-bracket--left">{</div>
          <h2 class="col-progress-header-title" data-node-id="1170:78212">TIẾN TRÌNH ĐIỀU TRA</h2>
          <div class="col-progress-bracket col-progress-bracket--right">}</div>
        </div>

        <!-- Stepper 4 Steps (1170:79540) -->
        <div class="col-stepper-container trailer-scroll-reveal trailer-reveal-scale" data-node-id="1170:79540">
          <div class="col-stepper-track-line"></div>
          <div class="col-stepper-steps-grid">
            
            <!-- Step 1: THU THẬP (1170:79527) -->
            <div class="col-step-item" data-node-id="1170:79527">
              <div class="col-step-circle">
                <img src="./assets/a98344b85db2f7ee11ba740c88aef874e1501b43.svg" alt="Kính lúp" class="col-step-icon" />
              </div>
              <div class="col-step-info">
                <h3 class="col-step-title" data-node-id="1170:78908">THU THẬP</h3>
                <p class="col-step-desc" data-node-id="1170:78910">Thu thập manh mối từ hiện trường.</p>
              </div>
            </div>

            <!-- Step 2: PHÂN TÍCH (1170:79528) -->
            <div class="col-step-item" data-node-id="1170:79528">
              <div class="col-step-circle">
                <img src="./assets/70ecff6273a19428a34c4c21847e0480466a2c78.svg" alt="Kính hiển vi" class="col-step-icon" />
              </div>
              <div class="col-step-info">
                <h3 class="col-step-title" data-node-id="1170:79529">PHÂN TÍCH</h3>
                <p class="col-step-desc" data-node-id="1170:79530">Phân tích chi tiết tại phòng thí nghiệm.</p>
              </div>
            </div>

            <!-- Step 3: KẾT NỐI (1170:79532) -->
            <div class="col-step-item" data-node-id="1170:79532">
              <div class="col-step-circle">
                <img src="./assets/ac8ed7f557af218b5a03a63cbb2c09f857bcc61b.svg" alt="Mạng lưới" class="col-step-icon" />
              </div>
              <div class="col-step-info">
                <h3 class="col-step-title" data-node-id="1170:79533">KẾT NỐI</h3>
                <p class="col-step-desc" data-node-id="1170:79534">Kết nối các mảnh vỡ thông tin.</p>
              </div>
            </div>

            <!-- Step 4: GIẢI QUYẾT (1170:79535) -->
            <div class="col-step-item" data-node-id="1170:79535">
              <div class="col-step-circle">
                <img src="./assets/dd24e34069b945e8c9e3d666c7a3ac041e5e4876.svg" alt="Dấu kiểm" class="col-step-icon" />
              </div>
              <div class="col-step-info">
                <h3 class="col-step-title" data-node-id="1170:79536">GIẢI QUYẾT</h3>
                <p class="col-step-desc" data-node-id="1170:79537">Tìm ra sự thật cuối cùng.</p>
              </div>
            </div>

          </div>
        </div>

        <!-- End Gameplay Milestone Block (1170:79541) -->
        <div class="col-end-milestone-block trailer-scroll-reveal trailer-reveal-fade-up" data-node-id="1170:79541">
          <div class="col-milestone-sub">
            BẠN ĐÃ ĐI CUỐI CHẶNG ĐƯỜNG CỦA GAMEPLAY RỒI,<br/>
            BẠN CÓ THỂ HIỂU SƠ VỀ CÁCH CHƠI.
          </div>
          <h2 class="col-milestone-main" data-node-id="1170:79578">
            BẠN CÓ MUỐN KHÁM PHÁ THÊM KHÔNG?
          </h2>
          <div class="col-milestone-actions" data-node-id="1170:79594">
            <a href="#investigation" class="col-horror-cta-btn" data-node-id="1170:79582">
              <span class="col-horror-btn-text">Đi đến Điều Tra</span>
            </a>
            <a href="#puzzle" class="col-horror-cta-btn" data-node-id="1170:79561">
              <span class="col-horror-btn-text">Đi đến Giải Đố</span>
            </a>
          </div>
        </div>

      </section>

      <!-- ========================================================
           5. READY DOWNLOAD SECTION (1170:79595)
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

  // Interactive Inventory Slots
  const slots = container.querySelectorAll('.col-slot');
  const capacityNum = container.querySelector('.col-invent-capacity-num');
  slots.forEach(slot => {
    slot.addEventListener('click', () => {
      slot.classList.toggle('col-slot--active');
      if (slot.classList.contains('col-slot--active') && !slot.querySelector('img')) {
        const img = document.createElement('img');
        img.src = './assets/201b875ec4c385a55fbf7acc247f851ce941a817.svg';
        img.className = 'col-slot-icon';
        slot.appendChild(img);
      } else if (!slot.classList.contains('col-slot--active')) {
        const img = slot.querySelector('img');
        if (img) img.remove();
      }
      const activeCount = container.querySelectorAll('.col-slot--active').length;
      if (capacityNum) {
        capacityNum.textContent = `${activeCount} / 20`;
      }
    });
  });
}
