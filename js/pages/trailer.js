/* ============================================
   OAN Horror Game — Trailer Page (Figma 928:1608)
   ============================================ */

import { pauseBGM, playBGM, isBGMPlaying } from '../utils/audio.js';
import { initTrailerScrollTriggers } from '../utils/smooth-scroll.js';

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
           BACKGROUND AMBIENT TEXTURE LAYER (954:385689)
           ======================================================== -->
      <div class="trailer-page-bg-ambient" data-node-id="954:385689">
        <img src="./assets/17d332d1aa4cfc528c757faf993b50210a3622ee.png" alt="" class="trailer-page-bg-img" />
        <div class="trailer-page-bg-overlay"></div>
      </div>

      <!-- ========================================================
           1. TRAILER HERO & VIDEO SECTION (928:2214)
           ======================================================== -->
      <section class="trailer-showcase-section" data-node-id="928:2214">
        <div class="trailer-hero-container">
          
          <!-- Big Video Frame with Horror Border & Glow (928:2346) -->
          <div class="trailer-video-display-box trailer-scroll-reveal trailer-reveal-scale" data-node-id="928:2346">
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
            <div class="trailer-title-desc-col trailer-scroll-reveal trailer-reveal-left delay-150" data-node-id="928:2221">
              <h1 class="trailer-main-title" data-node-id="928:2223">TRAILER CHÍNH THỨC</h1>
              <p class="trailer-sub-desc" data-node-id="928:2225">
                Khám phá nỗi kinh hoàng ẩn giấu trong Nhà Hứa. Một hành trình tâm linh rùng rợn qua những góc khuất của lịch sử gia đình.
              </p>
            </div>

            <!-- Right Actions (928:2292) -->
            <div class="trailer-action-buttons-group trailer-scroll-reveal trailer-reveal-right delay-200" data-node-id="928:2292">
              
              <!-- Button 1: Xem Toàn Màn Hình (928:2246) -->
              <a href="#fullscreen" class="figma-btn-trailer-fullscreen" id="btn-trailer-fullscreen" data-node-id="928:2246" style="text-decoration: none;">
                <div class="horror-frame-corners">
                  <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="corner-svg-left" />
                  <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="corner-svg-right" />
                </div>
                <div class="trailer-fullscreen-field">
                  <span class="trailer-fullscreen-caption">XEM TOÀN MÀN HÌNH</span>
                </div>
              </a>

              <!-- Button 2: Chia sẻ (928:2226 / 928:2229) -->
              <button class="btn-figma-trailer-share" id="btn-trailer-share" data-node-id="928:2226" type="button">
                <img src="./assets/de70563eeb5eea9de43640f6dd1f32d8db4dfa59.svg" alt="" class="share-figma-icon" />
                <span class="share-figma-text" data-node-id="928:2232">CHIA SẺ</span>
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
          <div class="trailer-poster-col trailer-scroll-reveal trailer-reveal-left" data-node-id="928:2353">
            <div class="trailer-poster-frame" data-node-id="928:2354">
              <img src="./assets/32b8253be54f293f616639b649ed77cb41dc2c7f.png" alt="OAN Poster" class="trailer-poster-img" data-node-id="715:403" />
              <div class="poster-inner-gold-border"></div>
              <div class="poster-stamp-corner">OÁN 18+</div>
            </div>
          </div>

          <!-- Right: Specs Table & Narrative Summary (928:2355) -->
          <div class="trailer-narrative-col trailer-scroll-reveal trailer-reveal-right delay-150" data-node-id="928:2355">
            
            <!-- Specs Grid (928:2356) -->
            <div class="trailer-specs-grid" data-node-id="928:2356">
              
              <!-- Ngày phát hành -->
              <div class="spec-cell-item trailer-scroll-reveal trailer-reveal-fade delay-100" data-node-id="928:2357">
                <span class="spec-cell-label" data-node-id="928:2359">NGÀY PHÁT HÀNH</span>
                <span class="spec-cell-value" data-node-id="928:2361">31.12.2027</span>
              </div>

              <!-- Thời lượng -->
              <div class="spec-cell-item trailer-scroll-reveal trailer-reveal-fade delay-150" data-node-id="928:2362">
                <span class="spec-cell-label" data-node-id="928:2364">THỜI LƯỢNG</span>
                <span class="spec-cell-value" data-node-id="928:2366">2:30</span>
              </div>

              <!-- Thể loại -->
              <div class="spec-cell-item trailer-scroll-reveal trailer-reveal-fade delay-200" data-node-id="928:2367">
                <span class="spec-cell-label" data-node-id="928:2369">THỂ LOẠI</span>
                <span class="spec-cell-value" data-node-id="928:2371">Kinh dị tâm lý</span>
              </div>

              <!-- Phát triển -->
              <div class="spec-cell-item trailer-scroll-reveal trailer-reveal-fade delay-250" data-node-id="928:2372">
                <span class="spec-cell-label" data-node-id="928:2374">PHÁT TRIỂN</span>
                <span class="spec-cell-value" data-node-id="928:2376">OÁN Horror Studio</span>
              </div>

              <!-- Nền tảng -->
              <div class="spec-cell-item span-2-cols trailer-scroll-reveal trailer-reveal-fade delay-300" data-node-id="928:2377">
                <span class="spec-cell-label" data-node-id="928:2379">NỀN TẢNG</span>
                <span class="spec-cell-value" data-node-id="928:2381">PC, Xbox, Play Station</span>
              </div>

            </div>

            <!-- Narrative Paragraph (928:2382 / 928:2385) -->
            <div class="trailer-narrative-box trailer-scroll-reveal trailer-reveal-fade-up delay-350" data-node-id="928:2382">
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
        <div class="trailer-gallery-container">
          
          <!-- Tag Section Badge: Thư viện ảnh (953:1450) -->
          <div class="gallery-tag-section-badge" data-node-id="953:1450">
            <div class="tag-section-bg">
              <img src="./assets/07092503416c73ca4af4965cb97a13f4c989250d.png" alt="" class="title-bg-img" />
            </div>
            <div class="tag-section-content">
              <h2 class="tag-heading-bold">Thư viện ảnh</h2>
              <p class="tag-subheading-light">Những bức ảnh minh họa</p>
            </div>
          </div>

          <!-- Asymmetric Horror Photo Collage (954:385388 / 954:319012) -->
          <div class="figma-horrorframe-collage" data-node-id="954:319012">
            
            <!-- Frame 1: Left Giant (954:252601) -->
            <div class="hf-item hf-item-1 trailer-scroll-reveal trailer-reveal-scale delay-100" data-node-id="954:252601" title="Hành lang bóng ma">
              <div class="hf-img-container">
                <img src="./assets/e26b4764d1dd9b78ddbe223fbf52d7d304165c83.png" alt="OAN Scene 1" class="hf-photo" />
                <div class="hf-horror-vignette"></div>
                <div class="hf-blood-glitch"></div>
              </div>
              <div class="hf-ornate-border">
                <img src="./assets/1a5b74d7cb5aead1841ee129ce4399d74b277efa.svg" alt="" />
              </div>
            </div>

            <!-- Frame 2: Top Center (954:265890) -->
            <div class="hf-item hf-item-2 trailer-scroll-reveal trailer-reveal-fade-up delay-200" data-node-id="954:265890" title="Căn phòng ám ảnh">
              <div class="hf-img-container">
                <img src="./assets/5b1f96dba84e508bc260d61529c98412d108bded.png" alt="OAN Scene 2" class="hf-photo" />
                <div class="hf-horror-vignette"></div>
                <div class="hf-blood-glitch"></div>
              </div>
              <div class="hf-ornate-border">
                <img src="./assets/a12f10aa4d6d5f33dff4e511e1a7560944a5811f.svg" alt="" />
              </div>
            </div>

            <!-- Frame 3: Bottom Center (954:279169) -->
            <div class="hf-item hf-item-3 trailer-scroll-reveal trailer-reveal-fade-up delay-300" data-node-id="954:279169" title="Hồi ức kinh hoàng">
              <div class="hf-img-container">
                <img src="./assets/4a421713a357e43a8d8625ab7d8b5b98a3849329.png" alt="OAN Scene 3" class="hf-photo" />
                <div class="hf-horror-vignette"></div>
                <div class="hf-blood-glitch"></div>
              </div>
              <div class="hf-ornate-border">
                <img src="./assets/a12f10aa4d6d5f33dff4e511e1a7560944a5811f.svg" alt="" />
              </div>
            </div>

            <!-- Frame 4: Top Right (954:292444) -->
            <div class="hf-item hf-item-4 trailer-scroll-reveal trailer-reveal-fade-up delay-250" data-node-id="954:292444" title="Dinh thự Họ Hứa">
              <div class="hf-img-container">
                <img src="./assets/73240ed6730c1a47cf16f08d416c9d0f49066a7f.png" alt="OAN Scene 4" class="hf-photo" />
                <div class="hf-horror-vignette"></div>
                <div class="hf-blood-glitch"></div>
              </div>
              <div class="hf-ornate-border">
                <img src="./assets/e3ef10d0bda9d2e3a0430b78a2cad974a185481e.svg" alt="" />
              </div>
            </div>

            <!-- Frame 5: Bottom Right (954:305732) -->
            <div class="hf-item hf-item-5 trailer-scroll-reveal trailer-reveal-fade-up delay-350" data-node-id="954:305732" title="Cửa oan hồn">
              <div class="hf-img-container">
                <img src="./assets/d12aeecd85e350c97e6383573eba77d848ca1eaa.png" alt="OAN Scene 5" class="hf-photo" />
                <div class="hf-horror-vignette"></div>
                <div class="hf-blood-glitch"></div>
              </div>
              <div class="hf-ornate-border">
                <img src="./assets/47746c61ab1ab1417f7e627dc3d5f0c0af1f21ea.svg" alt="" />
              </div>
            </div>

          </div>

        </div>
      </section>

      <!-- ========================================================
           4. KHÁM PHÁ THÊM SECTION (954:385691)
           ======================================================== -->
      <section class="trailer-explore-section" data-node-id="954:385691">
        <div class="trailer-explore-container">
          
          <!-- Tag Title: Khám phá (954:392309) -->
          <div class="gallery-tag-section-badge" data-node-id="954:392309">
            <div class="tag-section-bg">
              <img src="./assets/07092503416c73ca4af4965cb97a13f4c989250d.png" alt="" class="title-bg-img" />
            </div>
            <div class="tag-section-content">
              <h2 class="tag-heading-bold">KHÁM PHÁ</h2>
              <p class="tag-subheading-light">Bạn muốn khám phá gì thêm?</p>
            </div>
          </div>

          <!-- 4 Explore Cards (954:396902) -->
          <div class="trailer-explore-cards-grid" data-node-id="954:396902">
            
            <!-- Card 1: CÂU CHUYỆN (954:392314) -->
            <a href="#storyline" class="explore-horror-card trailer-scroll-reveal trailer-reveal-fade-up delay-100" data-node-id="954:392314">
              <div class="explore-card-ornate-border">
                <img src="./assets/explore-ornate-frame.png" alt="" class="explore-frame-border-img" />
              </div>
              <div class="explore-card-inner-canvas">
                <div class="explore-card-top-icon">
                  <img src="./assets/85fe655a1b8348dcb9b4253280d8ff19a8b8c801.svg" alt="Story Icon" class="explore-icon-svg" />
                </div>
                <div class="explore-card-body-content">
                  <h3 class="explore-card-main-title">CÂU CHUYỆN</h3>
                  <p class="explore-card-desc-text">Tìm hiểu bí mật Nhà Hứa và quá khứ bị lãng quên của những linh hồn oán than.</p>
                </div>
                <div class="explore-card-action-link">
                  <span class="explore-action-text">XEM CỐT TRUYỆN</span>
                </div>
              </div>
            </a>

            <!-- Card 2: TRÒ CHƠI (954:393461) -->
            <a href="#gameplay" class="explore-horror-card trailer-scroll-reveal trailer-reveal-fade-up delay-200" data-node-id="954:393461">
              <div class="explore-card-ornate-border">
                <img src="./assets/explore-ornate-frame.png" alt="" class="explore-frame-border-img" />
              </div>
              <div class="explore-card-inner-canvas">
                <div class="explore-card-top-icon">
                  <img src="./assets/9d90401575deb16971cf9cc4cae96d917601fffe.svg" alt="Gameplay Icon" class="explore-icon-svg" />
                </div>
                <div class="explore-card-body-content">
                  <h3 class="explore-card-main-title">TRÒ CHƠI</h3>
                  <p class="explore-card-desc-text">Khám phá cơ chế điều tra thực tế ảo và hệ thống giải đố dựa trên ngũ hành.</p>
                </div>
                <div class="explore-card-action-link">
                  <span class="explore-action-text">XEM GAMEPLAY</span>
                </div>
              </div>
            </a>

            <!-- Card 3: NHÂN VẬT (954:394608) -->
            <a href="#character" class="explore-horror-card trailer-scroll-reveal trailer-reveal-fade-up delay-300" data-node-id="954:394608">
              <div class="explore-card-ornate-border">
                <img src="./assets/explore-ornate-frame.png" alt="" class="explore-frame-border-img" />
              </div>
              <div class="explore-card-inner-canvas">
                <div class="explore-card-top-icon">
                  <img src="./assets/75e411825df404857b2902a10f428c72e01f92d3.svg" alt="Character Icon" class="explore-icon-svg" />
                </div>
                <div class="explore-card-body-content">
                  <h3 class="explore-card-main-title">NHÂN VẬT</h3>
                  <p class="explore-card-desc-text">Gặp gỡ gia đình họ Hứa. Mỗi nhân vật đều mang theo một lời nguyền riêng biệt.</p>
                </div>
                <div class="explore-card-action-link">
                  <span class="explore-action-text">XEM NHÂN VẬT</span>
                </div>
              </div>
            </a>

            <!-- Card 4: TẢI XUỐNG (954:395755) -->
            <a href="#download" class="explore-horror-card trailer-scroll-reveal trailer-reveal-fade-up delay-400" data-node-id="954:395755">
              <div class="explore-card-ornate-border">
                <img src="./assets/explore-ornate-frame.png" alt="" class="explore-frame-border-img" />
              </div>
              <div class="explore-card-inner-canvas">
                <div class="explore-card-top-icon">
                  <img src="./assets/6e37cb11525bcb2224d854b8aa693cd2049b1479.svg" alt="Download Icon" class="explore-icon-svg" />
                </div>
                <div class="explore-card-body-content">
                  <h3 class="explore-card-main-title">TẢI XUỐNG</h3>
                  <p class="explore-card-desc-text">Sẵn sàng đối mặt với nỗi sợ hãi? Tải bản thử nghiệm ngay hôm nay.</p>
                </div>
                <div class="explore-card-action-link">
                  <span class="explore-action-text">TẢI XUỐNG NGAY</span>
                </div>
              </div>
            </a>

          </div>

        </div>
      </section>

      <!-- ========================================================
           5. SẴN SÀNG SECTION (1363:86758)
           ======================================================== -->
      <section class="figma-ready-section" data-node-id="1363:86758">
        <div class="ready-bg-layer" data-node-id="1363:86759">
          <img src="./assets/8d535e5186d5115ccc9a5c72e883cc54bda667bd.png" alt="" class="ready-bg-img" />
        </div>

        <div class="ready-content-container container" data-node-id="1363:86761">
          <div class="ready-heading-box trailer-scroll-reveal trailer-reveal-scale" data-node-id="1363:86762">
            <h2 class="ready-heading-text" data-node-id="1363:86763">
              BẠN ĐÃ SẴN SÀNG BƯỚC VÀO NHÀ HỨA?
            </h2>
          </div>

          <!-- 2 Buttons: CHƠI NGAY & TẢI NGAY (1363:86764) -->
          <div class="ready-buttons-row trailer-scroll-reveal trailer-reveal-fade-up delay-200" data-node-id="1363:86764">
            
            <!-- Button 2: CHƠI NGAY (1363:86765) -> Links to #login -->
            <a href="#login" class="figma-btn-horror-frame" data-node-id="1363:86765" style="text-decoration: none;">
              <div class="horror-frame-corners">
                <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="corner-svg-left" />
                <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="corner-svg-right" />
              </div>
              <div class="horror-frame-body">
                <span class="horror-btn-text">CHƠI NGAY</span>
              </div>
            </a>

            <!-- Button 1: TẢI NGAY (1363:86766) -> Links to #download -->
            <a href="#download" class="figma-btn-horror-frame" data-node-id="1363:86766" style="text-decoration: none;">
              <div class="horror-frame-corners">
                <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="corner-svg-left" />
                <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="corner-svg-right" />
              </div>
              <div class="horror-frame-body">
                <span class="horror-btn-text">TẢI NGAY</span>
              </div>
            </a>
          </div>

          <!-- Requirements (1363:86767) -->
          <div class="ready-sysreq-box trailer-scroll-reveal trailer-reveal-fade delay-350" data-node-id="1363:86767">
            <p class="sysreq-text" data-node-id="1363:86768">
              YÊU CẦU: CORE I5 / 8GB RAM / GTX 1060+
            </p>
          </div>
        </div>
      </section>

    </div>
  `;

  // Scroll-Triggered Reveal Animations Observer
  const scrollTargets = container.querySelectorAll('.trailer-scroll-reveal');
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  scrollTargets.forEach(el => scrollObserver.observe(el));

  // Trigger initial visibility for elements already in viewport
  setTimeout(() => {
    scrollTargets.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add('revealed');
      }
    });
    // Activate GSAP ScrollTrigger timeline for Thư viện ảnh & Khám phá tags
    initTrailerScrollTriggers();
  }, 100);

  // Interactive Horror Collage Lightbox / Zoom
  const collageItems = container.querySelectorAll('.hf-item');
  collageItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('.hf-photo');
      if (!img) return;
      
      const title = item.getAttribute('title') || 'OÁN — Thư viện ảnh';
      const lightbox = document.createElement('div');
      lightbox.className = 'figma-fullscreen-overlay';
      lightbox.innerHTML = `
        <div class="fullscreen-video-wrapper" style="display: flex; align-items: center; justify-content: center;">
          <img src="${img.src}" alt="${title}" style="max-width: 90vw; max-height: 85vh; object-fit: contain; border: 3px solid #6a571a; box-shadow: 0 0 50px rgba(0, 0, 0, 0.95), 0 0 30px rgba(217, 183, 76, 0.4);" />
        </div>
        <button class="fullscreen-close-btn" id="btn-close-gallery-lightbox" aria-label="Đóng" type="button">
          <img src="./assets/16a6446e90ff221cf7fbf200555b281763e34d43.svg" alt="Đóng" class="cancel-icon-img" />
        </button>
      `;
      document.body.appendChild(lightbox);

      const closeLightbox = () => {
        lightbox.remove();
        document.removeEventListener('keydown', handleEsc);
      };

      const handleEsc = (e) => {
        if (e.key === 'Escape') closeLightbox();
      };

      document.addEventListener('keydown', handleEsc);
      lightbox.querySelector('#btn-close-gallery-lightbox')?.addEventListener('click', closeLightbox);
    });
  });

  // Fullscreen video modal logic (Figma 1332:84797)
  const fullscreenBtn = container.querySelector('#btn-trailer-fullscreen');
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Pause background music to prevent audio conflict with the trailer
      const wasBGMPlayingBeforeModal = isBGMPlaying();
      pauseBGM();
      
      const modal = document.createElement('div');
      modal.className = 'figma-fullscreen-overlay';
      modal.setAttribute('data-node-id', '1332:84797');
      modal.innerHTML = `
        <div class="fullscreen-video-wrapper">
          <video class="fullscreen-video-player" id="modal-fullscreen-video" autoplay controls playsinline poster="./assets/scene-explore-ghost.png">
            <source src="./assets/official-trailer.mp4" type="video/mp4">
            <source src="./assets/investigation-video.mp4" type="video/mp4">
            <source src="./assets/scene-explore.mp4" type="video/mp4">
          </video>
        </div>
        <button class="fullscreen-close-btn" id="btn-modal-close-fullscreen" aria-label="Đóng toàn màn hình" type="button">
          <img src="./assets/16a6446e90ff221cf7fbf200555b281763e34d43.svg" alt="Đóng" class="cancel-icon-img" />
        </button>
      `;
      document.body.appendChild(modal);

      const modalVideo = modal.querySelector('#modal-fullscreen-video');
      if (modalVideo) {
        modalVideo.currentTime = 0;
        modalVideo.muted = false;
        modalVideo.play().catch(() => {
          modalVideo.muted = true;
          modalVideo.play().catch(() => {});
        });
      }

      const closeModal = () => {
        if (modalVideo) modalVideo.pause();
        modal.remove();
        document.removeEventListener('keydown', handleEsc);

        // Resume BGM if it was playing before opening fullscreen
        if (wasBGMPlayingBeforeModal) {
          playBGM();
        }
      };

      const handleEsc = (event) => {
        if (event.key === 'Escape') {
          closeModal();
        }
      };

      document.addEventListener('keydown', handleEsc);
      modal.querySelector('#btn-modal-close-fullscreen')?.addEventListener('click', closeModal);
    });
  }

  // Also prevent audio conflict on inline video player in hero section
  const mainTrailerVideo = container.querySelector('#main-trailer-video');
  if (mainTrailerVideo) {
    mainTrailerVideo.addEventListener('play', () => {
      if (!mainTrailerVideo.muted) {
        pauseBGM();
      }
    });
    mainTrailerVideo.addEventListener('volumechange', () => {
      if (!mainTrailerVideo.muted && mainTrailerVideo.volume > 0 && !mainTrailerVideo.paused) {
        pauseBGM();
      }
    });
  }

  // Interactive 5-Platform Share Modal with CTA content
  const shareBtn = container.querySelector('#btn-trailer-share');
  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      const shareUrl = window.location.origin + '/#download';
      const shareText = 'OÁN — Siêu phẩm Game Kinh Dị Sinh Tồn Tâm Linh Việt Nam! Khám phá bí ẩn kinh hoàng tại Dinh Thự Nhà Họ Hứa. Tải và chơi ngay hôm nay tại:';
      
      const shareModal = document.createElement('div');
      shareModal.className = 'horror-share-modal-overlay';
      shareModal.innerHTML = `
        <div class="horror-share-modal-dialog">
          <button class="share-modal-close-btn" id="btn-close-share-modal" type="button" aria-label="Đóng">✕</button>
          
          <h3 class="share-modal-title">CHIA SẺ TRAILER OÁN</h3>
          <p class="share-modal-subtitle">Lan tỏa nỗi sợ hãi Nhà Họ Hứa đến bạn bè của bạn!</p>
          
          <div class="share-preview-card">
            <img src="./assets/scene-explore-ghost.png" alt="OAN Game" class="share-preview-thumb" />
            <div class="share-preview-info">
              <h4 class="share-preview-heading">OÁN — Game Kinh Dị Tâm Linh</h4>
              <p class="share-preview-text">${shareText} ${shareUrl}</p>
            </div>
          </div>
          
          <p class="share-platforms-label">CHỌN NỀN TẢNG CHIA SẺ</p>
          <div class="share-platforms-grid">
            <!-- Facebook -->
            <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}" target="_blank" rel="noopener noreferrer" class="btn-platform-share" title="Facebook">
              <div class="platform-icon-box">
                <svg viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </div>
              <span class="platform-name">Facebook</span>
            </a>

            <!-- Threads -->
            <a href="https://www.threads.net/intent/post?text=${encodeURIComponent(shareText + ' ' + shareUrl)}" target="_blank" rel="noopener noreferrer" class="btn-platform-share" title="Threads">
              <div class="platform-icon-box">
                <svg viewBox="0 0 24 24" fill="#ffffff"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.84 14.83c-.45 1.5-1.74 2.45-3.66 2.45-2.28 0-3.95-1.49-3.95-3.96 0-2.48 1.67-3.97 3.95-3.97 1.83 0 3.09.87 3.56 2.22h-1.63c-.34-.69-1.02-1.09-1.93-1.09-1.39 0-2.29.98-2.29 2.84s.9 2.83 2.29 2.83c.96 0 1.62-.43 1.98-1.12h1.68z"/></svg>
              </div>
              <span class="platform-name">Threads</span>
            </a>

            <!-- X / Twitter -->
            <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}" target="_blank" rel="noopener noreferrer" class="btn-platform-share" title="X (Twitter)">
              <div class="platform-icon-box">
                <svg viewBox="0 0 24 24" fill="#ffffff"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </div>
              <span class="platform-name">X</span>
            </a>

            <!-- Instagram -->
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" class="btn-platform-share" id="btn-share-instagram" title="Instagram">
              <div class="platform-icon-box">
                <svg viewBox="0 0 24 24" fill="#E4405F"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
              <span class="platform-name">Instagram</span>
            </a>

            <!-- Reddit -->
            <a href="https://www.reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}" target="_blank" rel="noopener noreferrer" class="btn-platform-share" title="Reddit">
              <div class="platform-icon-box">
                <svg viewBox="0 0 24 24" fill="#FF4500"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.197-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
              </div>
              <span class="platform-name">Reddit</span>
            </a>
          </div>

          <div class="share-copy-link-row">
            <input type="text" readonly value="${shareText} ${shareUrl}" class="share-copy-input" id="share-copy-input" />
            <button class="btn-copy-share-link" id="btn-copy-share-action" type="button">SAO CHÉP</button>
          </div>
        </div>
      `;
      document.body.appendChild(shareModal);

      const closeShareModal = () => {
        shareModal.remove();
        document.removeEventListener('keydown', handleEscShare);
      };

      const handleEscShare = (event) => {
        if (event.key === 'Escape') closeShareModal();
      };
      document.addEventListener('keydown', handleEscShare);

      shareModal.querySelector('#btn-close-share-modal')?.addEventListener('click', closeShareModal);
      shareModal.addEventListener('click', (e) => {
        if (e.target === shareModal) closeShareModal();
      });

      // Copy Link Button handler
      const copyBtn = shareModal.querySelector('#btn-copy-share-action');
      const copyInput = shareModal.querySelector('#share-copy-input');
      if (copyBtn && copyInput) {
        copyBtn.addEventListener('click', () => {
          copyInput.select();
          navigator.clipboard.writeText(copyInput.value);
          copyBtn.textContent = 'ĐÃ SAO CHÉP!';
          
          let toast = shareModal.querySelector('.share-toast-notification');
          if (!toast) {
            toast = document.createElement('div');
            toast.className = 'share-toast-notification';
            toast.textContent = '✓ Đã sao chép nội dung & link tải OÁN thành công!';
            shareModal.querySelector('.horror-share-modal-dialog').appendChild(toast);
            setTimeout(() => toast.remove(), 2500);
          }
          
          setTimeout(() => {
            copyBtn.textContent = 'SAO CHÉP';
          }, 2000);
        });
      }

      // Instagram auto copy notice
      shareModal.querySelector('#btn-share-instagram')?.addEventListener('click', () => {
        navigator.clipboard.writeText(shareText + ' ' + shareUrl);
      });
    });
  }
}
