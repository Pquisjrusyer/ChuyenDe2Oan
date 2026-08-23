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
        
        <!-- Header Plaque / Banner (1170:78211) -->
        <div class="col-progress-header-wrap trailer-scroll-reveal trailer-reveal-fade-up" data-node-id="1170:78211">
          <div class="col-progress-frame-decor col-progress-frame--left" data-node-id="I1170:78213;708:35">
            <img src="./assets/5330b79b9e3ec9f5d8e099674f3b9cd251731b0b.svg" alt="" />
          </div>
          <h2 class="col-progress-header-title" data-node-id="1170:78212">TIẾN TRÌNH ĐIỀU TRA</h2>
          <div class="col-progress-frame-decor col-progress-frame--right" data-node-id="I1170:78213;708:43">
            <img src="./assets/2a8d91cd956a7b707d91ed3faed539513ed626cf.svg" alt="" />
          </div>
        </div>

        <!-- Stepper: 3 Process Stages (1170:79540) -->
        <div class="col-stepper-container trailer-scroll-reveal trailer-reveal-scale" data-node-id="1170:79540">
          
          <!-- Stepper Visual Track & Circles (1170:79500) -->
          <div class="col-stepper-track-row" data-node-id="1170:79500">
            
            <!-- Stage 1 Circle: THU THẬP (1170:78982) -->
            <div class="col-stage-circle-wrap" data-node-id="1170:78982">
              <div class="col-stage-circle-inner">
                <div class="col-stage-icon-box">
                  <img src="./assets/ac8ed7f557af218b5a03a63cbb2c09f857bcc61b.svg" alt="Thu thập" class="col-stage-icon" />
                </div>
                <div class="col-stage-circle-texture">
                  <img src="./assets/5d7ae0a9da6721545028c721b9ff393920bb77ca.png" alt="" />
                </div>
              </div>
            </div>

            <!-- Connecting Line 1 (1170:79005) -->
            <div class="col-stage-connector-line" data-node-id="I1170:79500;1170:79005"></div>

            <!-- Stage 2 Circle: KẾT NỐI (1170:78989) -->
            <div class="col-stage-circle-wrap" data-node-id="I1170:79500;1170:78989">
              <div class="col-stage-circle-inner">
                <div class="col-stage-icon-box">
                  <img src="./assets/98d176cb29c473c45bd0ee21d7d1947a70520c26.svg" alt="Kết nối" class="col-stage-icon" />
                </div>
                <div class="col-stage-circle-texture">
                  <img src="./assets/5d7ae0a9da6721545028c721b9ff393920bb77ca.png" alt="" />
                </div>
              </div>
            </div>

            <!-- Connecting Line 2 (1170:79006) -->
            <div class="col-stage-connector-line" data-node-id="I1170:79500;1170:79006"></div>

            <!-- Stage 3 Circle: GIẢI QUYẾT (1170:78994) -->
            <div class="col-stage-circle-wrap" data-node-id="I1170:79500;1170:78994">
              <div class="col-stage-circle-inner">
                <div class="col-stage-icon-box">
                  <img src="./assets/bbecf51c2645f989c575bfc5c9cb5a0bbb758a0c.svg" alt="Giải quyết" class="col-stage-icon" />
                </div>
                <div class="col-stage-circle-texture">
                  <img src="./assets/5d7ae0a9da6721545028c721b9ff393920bb77ca.png" alt="" />
                </div>
              </div>
            </div>

          </div>

          <!-- Stepper Text Descriptions (1170:79538) -->
          <div class="col-stepper-labels-row" data-node-id="1170:79538">
            
            <!-- Stage 1 Label (1170:79527) -->
            <div class="col-stage-label-box" data-node-id="1170:79527">
              <h3 class="col-stage-label-title" data-node-id="1170:78908">THU THẬP</h3>
              <p class="col-stage-label-desc" data-node-id="1170:78910">
                Tìm kiếm mọi đồ vật khả nghi.
              </p>
            </div>

            <!-- Stage 2 Label (1170:79532) -->
            <div class="col-stage-label-box" data-node-id="1170:79532">
              <h3 class="col-stage-label-title" data-node-id="1170:79533">KẾT NỐI</h3>
              <p class="col-stage-label-desc" data-node-id="1170:79534">
                Kết nối các mảnh vỡ thông tin.
              </p>
            </div>

            <!-- Stage 3 Label (1170:79535) -->
            <div class="col-stage-label-box" data-node-id="1170:79535">
              <h3 class="col-stage-label-title" data-node-id="1170:79536">GIẢI QUYẾT</h3>
              <p class="col-stage-label-desc" data-node-id="1170:79537">
                Tìm ra sự thật cuối cùng.
              </p>
            </div>

          </div>

        </div>

        <!-- End Gameplay Milestone Block (1170:79541) -->
        <div class="col-end-milestone-block trailer-scroll-reveal trailer-reveal-fade-up" data-node-id="1170:79541">
          <div class="col-milestone-sub">
            <p class="col-milestone-sub-line">BẠN ĐÃ ĐI CUỐI CHẶNG ĐƯỜNG CỦA GAMEPLAY RỒI,</p>
            <p class="col-milestone-sub-line">BẠN CÓ THỂ HIỂU SƠ VỀ CÁCH CHƠI.</p>
          </div>
          <h2 class="col-milestone-main" data-node-id="1170:79578">
            BẠN CÓ MUỐN KHÁM PHÁ THÊM KHÔNG?
          </h2>
          <div class="col-milestone-actions" data-node-id="1170:79594">
            
            <!-- Button 1: Đi đến Điều Tra (1170:79582) -->
            <a href="#investigation" class="col-horror-cta-btn" data-node-id="1170:79582" aria-label="Đi đến Điều Tra">
              <div class="col-btn-frame-bg">
                <img src="./assets/105ebc7cda031fdb485695b18a341cec252f1d95.png" alt="" class="col-btn-part-1" />
                <div class="col-btn-part-2" style="background-image: url('./assets/a1b7e3991a46b5a64f1f7dac3536b09a9e87a8ba.png');"></div>
                <img src="./assets/0d6b9966ff2827a216126f97de3fae66e8b0f69d.png" alt="" class="col-btn-part-3" />
                <div class="col-btn-part-4" style="background-image: url('./assets/a52a7c4b8dc8beffb2f5577f0501b16b1cfce647.png');"></div>
                <img src="./assets/18c99e59fbe5fb1f1a0cf0ff28f9c309e0b87822.png" alt="" class="col-btn-part-5" />
              </div>
              <div class="col-btn-inner-body">
                <div class="col-btn-grad-overlay"></div>
                <div class="col-btn-texture-wrap">
                  <img src="./assets/ea8df93482c54ccfe7b61d0a530fea954eb54fd3.png" alt="" class="col-btn-texture-img" />
                </div>
              </div>
              <div class="col-btn-glow-frame-3"></div>
              <div class="col-btn-glow-frame-2"></div>
              <div class="col-btn-glow-frame-1"></div>
              <span class="col-btn-label-text">Đi đến Điều Tra</span>
            </a>

            <!-- Button 2: Đi đến Giải Đố (1170:79561) -->
            <a href="#puzzle" class="col-horror-cta-btn" data-node-id="1170:79561" aria-label="Đi đến Giải Đố">
              <div class="col-btn-frame-bg">
                <img src="./assets/105ebc7cda031fdb485695b18a341cec252f1d95.png" alt="" class="col-btn-part-1" />
                <div class="col-btn-part-2" style="background-image: url('./assets/a1b7e3991a46b5a64f1f7dac3536b09a9e87a8ba.png');"></div>
                <img src="./assets/0d6b9966ff2827a216126f97de3fae66e8b0f69d.png" alt="" class="col-btn-part-3" />
                <div class="col-btn-part-4" style="background-image: url('./assets/a52a7c4b8dc8beffb2f5577f0501b16b1cfce647.png');"></div>
                <img src="./assets/18c99e59fbe5fb1f1a0cf0ff28f9c309e0b87822.png" alt="" class="col-btn-part-5" />
              </div>
              <div class="col-btn-inner-body">
                <div class="col-btn-grad-overlay"></div>
                <div class="col-btn-texture-wrap">
                  <img src="./assets/ea8df93482c54ccfe7b61d0a530fea954eb54fd3.png" alt="" class="col-btn-texture-img" />
                </div>
              </div>
              <div class="col-btn-glow-frame-3"></div>
              <div class="col-btn-glow-frame-2"></div>
              <div class="col-btn-glow-frame-1"></div>
              <span class="col-btn-label-text">Đi đến Giải Đố</span>
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
