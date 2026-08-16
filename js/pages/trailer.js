/* ============================================
   OAN Horror Game — Trailer Page (Figma 928:1608)
   ============================================ */

export async function renderTrailer(container) {
  const galleryImages = [
    { src: './assets/scene-explore-ghost.png', title: 'Hành Lang Bóng Ma', desc: 'Bóng ma cô gái áo trắng xuất hiện ở góc hành lang' },
    { src: './assets/scene-suspense-door.png', title: 'Cánh Cửa Oan Hồn', desc: 'Tiếng cọt kẹt phát ra từ căn phòng bị niêm phong 20 năm' },
    { src: './assets/73240ed6730c1a47cf16f08d416c9d0f49066a7f.png', title: 'Dinh Thự Nhà Họ Hứa', desc: 'Tòa kiến trúc cổ kính tráng lệ nhưng u ám lạ thường' },
    { src: './assets/9ebe0ae5ac1b5cafa35d80422474abb970a6f2e6.png', title: 'Căn Phòng Thờ Cúng', desc: 'Bàn thờ cổ với những nén nhang chưa bao giờ tắt' },
    { src: './assets/ab82be110bd31c8435140d031f210d8017da82c7.png', title: 'Đêm Định Mệnh', desc: 'Minh bước chân vào cổng dinh thự trong đêm mưa giông' },
    { src: './assets/070f4e08714450521592b175aab171c4d82b235f.png', title: 'Ký Ức Đẫm Máu', desc: 'Những trang nhật ký rách nát vương vãi trên sàn nhà' }
  ];

  container.innerHTML = `
    <div class="figma-trailer-page" data-node-id="928:1608">
      
      <!-- ========================================================
           1. TRAILER HERO & VIDEO SECTION (928:2214)
           ======================================================== -->
      <section class="trailer-showcase-section" data-node-id="928:2214">
        <div class="trailer-hero-container">
          
          <!-- Big Video Frame with Horror Border & Glow (928:2346) -->
          <div class="trailer-video-display-box" data-node-id="928:2346">
            <video class="trailer-main-video-player" id="main-trailer-video" autoplay loop muted playsinline poster="./assets/scene-explore-ghost.png">
              <source src="./assets/official-trailer.mp4" type="video/mp4">
              <source src="./assets/investigation-video.mp4" type="video/mp4">
              <source src="./assets/scene-explore.mp4" type="video/mp4">
            </video>
            <div class="trailer-ambient-glow"></div>
          </div>

          <!-- Video Info & Action Bar (928:2220) -->
          <div class="trailer-info-bar-grid" data-node-id="928:2220">
            
            <!-- Left Info (928:2221) -->
            <div class="trailer-title-desc-col" data-node-id="928:2221">
              <h1 class="trailer-main-title" data-node-id="928:2223">TRAILER CHÍNH THỨC</h1>
              <p class="trailer-sub-desc" data-node-id="928:2225">
                Khám phá nỗi kinh hoàng ẩn giấu trong Nhà Hứa. Một hành trình tâm linh rùng rợn qua những góc khuất của lịch sử gia đình.
              </p>
            </div>

            <!-- Right Actions (928:2292) -->
            <div class="trailer-action-buttons-group" data-node-id="928:2292">
              
              <!-- Button 1: Chơi ngay / Xem Fullscreen -->
              <a href="#fullscreen" class="btn-trailer-primary" id="btn-trailer-fullscreen" data-node-id="928:2246">
                <div class="btn-frame-corner-tl"></div>
                <div class="btn-frame-corner-tr"></div>
                <div class="btn-frame-corner-bl"></div>
                <div class="btn-frame-corner-br"></div>
                <span class="btn-caption-text">XEM TOÀN MÀN HÌNH</span>
              </a>

              <!-- Button 2: Chia sẻ (928:2226) -->
              <button class="btn-trailer-share" id="btn-trailer-share" data-node-id="928:2226">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d9b74c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="18" cy="5" r="3"/>
                  <circle cx="6" cy="12" r="3"/>
                  <circle cx="18" cy="19" r="3"/>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                </svg>
                <span class="share-btn-caption" data-node-id="928:2232">CHIA SẺ</span>
              </button>

            </div>
          </div>

        </div>
      </section>

      <!-- ========================================================
           2. THÔNG TIN TỪ TRAILER SECTION (928:2352)
           ======================================================== -->
      <section class="trailer-specs-section" data-node-id="928:2352">
        <div class="trailer-specs-container">
          
          <!-- Left: Vertical Poster Frame (715:403 / 928:2353) -->
          <div class="trailer-poster-col" data-node-id="928:2353">
            <div class="trailer-poster-frame" data-node-id="928:2354">
              <img src="./assets/scene-explore-ghost.png" alt="OAN Poster" class="trailer-poster-img" data-node-id="715:403" />
              <div class="poster-inner-gold-border"></div>
              <div class="poster-stamp-corner">OÁN 18+</div>
            </div>
          </div>

          <!-- Right: Specs Table & Narrative Summary (928:2355) -->
          <div class="trailer-narrative-col" data-node-id="928:2355">
            
            <!-- Specs Grid (928:2356) -->
            <div class="trailer-specs-grid" data-node-id="928:2356">
              
              <!-- Ngày phát hành -->
              <div class="spec-cell-item" data-node-id="928:2357">
                <span class="spec-cell-label" data-node-id="928:2359">NGÀY PHÁT HÀNH</span>
                <span class="spec-cell-value" data-node-id="928:2361">31.12.2027</span>
              </div>

              <!-- Thời lượng -->
              <div class="spec-cell-item" data-node-id="928:2362">
                <span class="spec-cell-label" data-node-id="928:2364">THỜI LƯỢNG</span>
                <span class="spec-cell-value" data-node-id="928:2366">2:30</span>
              </div>

              <!-- Thể loại -->
              <div class="spec-cell-item" data-node-id="928:2367">
                <span class="spec-cell-label" data-node-id="928:2369">THỂ LOẠI</span>
                <span class="spec-cell-value" data-node-id="928:2371">Kinh dị tâm lý</span>
              </div>

              <!-- Phát triển -->
              <div class="spec-cell-item" data-node-id="928:2372">
                <span class="spec-cell-label" data-node-id="928:2374">PHÁT TRIỂN</span>
                <span class="spec-cell-value" data-node-id="928:2376">OÁN Horror Studio</span>
              </div>

              <!-- Nền tảng -->
              <div class="spec-cell-item span-2-cols" data-node-id="928:2377">
                <span class="spec-cell-label" data-node-id="928:2379">NỀN TẢNG</span>
                <span class="spec-cell-value" data-node-id="928:2381">PC, Xbox, Play Station</span>
              </div>

            </div>

            <!-- Narrative Paragraph (928:2382 / 928:2385) -->
            <div class="trailer-narrative-box" data-node-id="928:2382">
              <div class="narrative-divider-line"></div>
              <p class="trailer-story-text" data-node-id="928:2385">
                Lấy cảm hứng từ những truyền thuyết đô thị Việt Nam những năm 90, OÁN đưa người chơi vào vai một thám tử tâm linh đang tìm kiếm sự thật đằng sau vụ mất tích bí ẩn của gia đình họ Hứa. Trò chơi kết hợp các yếu tố giải đố logic với bầu không khí căng thẳng cực độ, nơi mỗi bước chân trong bóng tối đều có thể là bước cuối cùng của bạn.
              </p>
            </div>

          </div>

        </div>
      </section>

      <!-- ========================================================
           3. THƯ VIỆN ẢNH SECTION (928:2387)
           ======================================================== -->
      <section class="trailer-gallery-section" data-node-id="928:2387">
        <div class="container">
          
          <!-- Tag Section Badge: THƯ VIỆN ẢNH (953:1450) -->
          <div class="tag-section-badge-wrapper" data-node-id="953:1450">
            <div class="figma-tag-section">
              <div class="tag-section-bg">
                <img src="./assets/07092503416c73ca4af4965cb97a13f4c989250d.png" alt="" class="title-bg-img" />
              </div>
              <div class="tag-section-content">
                <h2 class="tag-heading-bold">THƯ VIỆN ẢNH</h2>
                <p class="tag-subheading-light">Những khoảnh khắc rùng rợn ghi lại từ hiện trường</p>
              </div>
            </div>
          </div>

          <!-- Horror Gallery Frame & Thumbnails (954:385388 / 954:319012) -->
          <div class="trailer-gallery-viewer-box" data-node-id="954:385388">
            
            <!-- Main Large Preview -->
            <div class="gallery-main-viewport" data-node-id="954:319012">
              <img src="${galleryImages[0].src}" alt="${galleryImages[0].title}" id="trailer-gallery-main-img" class="gallery-expanded-img" />
              <div class="gallery-caption-overlay">
                <h4 id="trailer-gallery-caption-title" class="gallery-caption-title">${galleryImages[0].title}</h4>
                <p id="trailer-gallery-caption-desc" class="gallery-caption-desc">${galleryImages[0].desc}</p>
              </div>
            </div>

            <!-- Thumbnail Selector Strip -->
            <div class="gallery-thumbnails-strip">
              ${galleryImages.map((item, index) => `
                <div class="gallery-thumb-card ${index === 0 ? 'active' : ''}" data-index="${index}">
                  <img src="${item.src}" alt="${item.title}" class="thumb-img" />
                  <div class="thumb-gold-border"></div>
                </div>
              `).join('')}
            </div>

          </div>

        </div>
      </section>

      <!-- ========================================================
           4. KHÁM PHÁ THÊM SECTION (954:385691)
           ======================================================== -->
      <section class="trailer-explore-section" data-node-id="954:385691">
        <div class="container">
          
          <!-- Tag Title: Khám phá (954:392309) -->
          <div class="tag-section-badge-wrapper" data-node-id="954:392309">
            <div class="figma-tag-section">
              <div class="tag-section-bg">
                <img src="./assets/07092503416c73ca4af4965cb97a13f4c989250d.png" alt="" class="title-bg-img" />
              </div>
              <div class="tag-section-content">
                <h2 class="tag-heading-bold">KHÁM PHÁ</h2>
                <p class="tag-subheading-light">Bạn muốn khám phá gì thêm?</p>
              </div>
            </div>
          </div>

          <!-- 4 Explore Cards (954:396902) -->
          <div class="trailer-explore-cards-grid" data-node-id="954:396902">
            
            <!-- Card 1: CÂU CHUYỆN -->
            <a href="#storyline" class="explore-horror-card" data-node-id="954:392314">
              <div class="explore-card-bg">
                <img src="./assets/5af1160b5e6bd34a450d6078f05c69de40fe1f51.png" alt="" class="explore-card-texture" />
              </div>
              <div class="explore-card-content">
                <div class="explore-card-icon-wrap">
                  <img src="./assets/85e836b5902a33978179ca3708504d5b1b743653.svg" alt="" class="explore-card-icon" />
                </div>
                <h3 class="explore-card-title">CÂU CHUYỆN</h3>
                <p class="explore-card-sub">Khám phá nguồn gốc lời nguyền</p>
              </div>
              <div class="explore-card-border"></div>
            </a>

            <!-- Card 2: TRÒ CHƠI -->
            <a href="#gameplay" class="explore-horror-card" data-node-id="954:393461">
              <div class="explore-card-bg">
                <img src="./assets/5af1160b5e6bd34a450d6078f05c69de40fe1f51.png" alt="" class="explore-card-texture" />
              </div>
              <div class="explore-card-content">
                <div class="explore-card-icon-wrap">
                  <img src="./assets/85e836b5902a33978179ca3708504d5b1b743653.svg" alt="" class="explore-card-icon" />
                </div>
                <h3 class="explore-card-title">TRÒ CHƠI</h3>
                <p class="explore-card-sub">Cơ chế gameplay & giải đố</p>
              </div>
              <div class="explore-card-border"></div>
            </a>

            <!-- Card 3: NHÂN VẬT -->
            <a href="#character" class="explore-horror-card" data-node-id="954:394608">
              <div class="explore-card-bg">
                <img src="./assets/5af1160b5e6bd34a450d6078f05c69de40fe1f51.png" alt="" class="explore-card-texture" />
              </div>
              <div class="explore-card-content">
                <div class="explore-card-icon-wrap">
                  <img src="./assets/85e836b5902a33978179ca3708504d5b1b743653.svg" alt="" class="explore-card-icon" />
                </div>
                <h3 class="explore-card-title">NHÂN VẬT</h3>
                <p class="explore-card-sub">Hồ sơ 4 nhân vật bí ẩn</p>
              </div>
              <div class="explore-card-border"></div>
            </a>

            <!-- Card 4: TẢI XUỐNG -->
            <a href="#download" class="explore-horror-card" data-node-id="954:395755">
              <div class="explore-card-bg">
                <img src="./assets/5af1160b5e6bd34a450d6078f05c69de40fe1f51.png" alt="" class="explore-card-texture" />
              </div>
              <div class="explore-card-content">
                <div class="explore-card-icon-wrap">
                  <img src="./assets/85e836b5902a33978179ca3708504d5b1b743653.svg" alt="" class="explore-card-icon" />
                </div>
                <h3 class="explore-card-title">TẢI XUỐNG</h3>
                <p class="explore-card-sub">Sẵn sàng trải nghiệm ngay</p>
              </div>
              <div class="explore-card-border"></div>
            </a>

          </div>

        </div>
      </section>

      <!-- ========================================================
           5. CTA BANNER SECTION (954:396948)
           ======================================================== -->
      <section class="trailer-cta-section" data-node-id="954:396948">
        <div class="trailer-cta-container" data-node-id="954:396906">
          <h2 class="trailer-cta-title" data-node-id="954:396908">BẠN ĐÃ SẴN SÀNG BƯỚC VÀO NHÀ HỨA?</h2>
          
          <div class="trailer-cta-buttons-row" data-node-id="954:396909">
            <a href="#download" class="btn-trailer-cta-gold" data-node-id="954:396910">
              <span>CHƠI NGAY</span>
            </a>
            <a href="#download" class="btn-trailer-cta-dark" data-node-id="954:396911">
              <span>TẢI NGAY</span>
            </a>
          </div>

          <p class="trailer-hardware-req" data-node-id="954:396913">
            YÊU CẦU: CORE I5 / 8GB RAM / GTX 1060+
          </p>
        </div>
      </section>

    </div>
  `;

  // Gallery Interactive Switcher Logic
  const mainImg = container.querySelector('#trailer-gallery-main-img');
  const captionTitle = container.querySelector('#trailer-gallery-caption-title');
  const captionDesc = container.querySelector('#trailer-gallery-caption-desc');
  const thumbCards = container.querySelectorAll('.gallery-thumb-card');

  thumbCards.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const idx = parseInt(thumb.getAttribute('data-index'), 10);
      const data = galleryImages[idx];
      if (!data) return;

      thumbCards.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');

      if (mainImg) {
        mainImg.style.opacity = '0.3';
        setTimeout(() => {
          mainImg.src = data.src;
          mainImg.alt = data.title;
          if (captionTitle) captionTitle.textContent = data.title;
          if (captionDesc) captionDesc.textContent = data.desc;
          mainImg.style.opacity = '1';
        }, 150);
      }
    });
  });

  // Share button
  const shareBtn = container.querySelector('#btn-trailer-share');
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: 'OÁN — Trailer Chính Thức',
            text: 'Khám phá nỗi kinh hoàng ẩn giấu trong Nhà Họ Hứa.',
            url: window.location.href,
          });
        } catch (e) {}
      } else {
        navigator.clipboard.writeText(window.location.href);
        alert('Đã sao chép liên kết Trailer vào bộ nhớ tạm!');
      }
    });
  }
}
