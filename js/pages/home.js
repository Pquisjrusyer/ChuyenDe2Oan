/* ============================================
   OAN Horror Game — Full Homepage (Desktop Trang Chủ Dài)
   Matches Figma Node: 1363-86579 with 100% Fidelity
   ============================================ */

import { initHomeScrollTriggers } from '../utils/smooth-scroll.js';

export async function renderHome(container) {
  container.innerHTML = `
    <div class="page-home-figma" data-node-id="1363:86579">
      
      <!-- ========================================================
           1. HERO SECTION (719:1603)
           ======================================================== -->
      <section class="figma-hero-section" data-node-id="719:1603">
        <!-- Hero Background (image 7) -->
        <div class="figma-hero-bg-container" data-node-id="989:73132">
          <img src="./assets/ab82be110bd31c8435140d031f210d8017da82c7.png" alt="OAN Hero Background" class="figma-hero-main-img" />
        </div>

        <!-- Bottom bar of Hero: Age Rated, CTA Buttons, Platforms (734:2188) -->
        <div class="figma-hero-bottom-bar" data-node-id="734:2188">
          
          <!-- Left: Age rated PEGI 18 (734:2182) -->
          <div class="hero-age-rated" data-node-id="734:2182">
            <div class="pegi-18-box" data-node-id="734:538">
              <img src="./assets/603524daa3adf33690676d71b7139b4dd432dcbd.png" alt="PEGI 18" class="pegi-18-img" />
            </div>
            <div class="age-rated-tag-row" data-node-id="734:2181">
              <span class="tag-oan-text">OÁN</span>
              <span class="tag-grudge-text">THE  GRUDGE</span>
            </div>
          </div>

          <!-- Center: CTA Buttons (727:1676) -->
          <div class="hero-cta-btn-group" data-node-id="727:1676">
            
            <!-- Button: TẢI NGAY (727:1604) -->
            <a href="#download" class="figma-btn-download-now" data-node-id="727:1604">
              <div class="btn-frame-parts" data-node-id="I727:1604;708:2875">
                <div class="frame-part-1"><img src="./assets/105ebc7cda031fdb485695b18a341cec252f1d95.png" alt="" /></div>
                <div class="frame-part-2" style="background-image: url('./assets/a1b7e3991a46b5a64f1f7dac3536b09a9e87a8ba.png');"></div>
                <div class="frame-part-3"><img src="./assets/0d6b9966ff2827a216126f97de3fae66e8b0f69d.png" alt="" /></div>
                <div class="frame-part-4" style="background-image: url('./assets/b79797a578ff3bade63860ad5c0b944b225dec8c.png');"></div>
                <div class="frame-part-5"><img src="./assets/2486c6adcf88fddc97c440c78c0892707c2e7708.png" alt="" /></div>
                <div class="frame-part-6" style="background-image: url('./assets/a52a7c4b8dc8beffb2f5577f0501b16b1cfce647.png');"></div>
                <div class="frame-part-7"><img src="./assets/18c99e59fbe5fb1f1a0cf0ff28f9c309e0b87822.png" alt="" /></div>
              </div>
              <div class="btn-download-inner-bg">
                <img src="./assets/ea8df93482c54ccfe7b61d0a530fea954eb54fd3.png" class="btn-rect-texture" alt="" />
              </div>
              <div class="btn-inner-content">
                <span class="btn-download-caption">TẢI NGAY</span>
              </div>
              <div class="btn-frame-glow-3"></div>
              <div class="btn-frame-glow-2"></div>
              <div class="btn-frame-glow-1"></div>
            </a>

            <!-- Button: CHƠI NGAY (727:1631) -->
            <div class="figma-btn-play-now-wrapper" data-node-id="727:1631" onclick="window.location.hash='download'">
              <div class="horror-frame-corners">
                <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="corner-svg-left" />
                <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="corner-svg-right" />
              </div>
              <div class="btn-play-now-field">
                <span class="btn-play-now-caption">CHƠI NGAY</span>
                <div class="btn-play-now-glow"></div>
              </div>
            </div>

            <!-- Text button: Xem Trailer (727:1677) -->
            <a href="#trailer" class="btn-watch-trailer-text" data-node-id="727:1677">
              Xem Trailer
            </a>
          </div>

          <!-- Right: Platform availability (734:2184) -->
          <div class="hero-platforms-badge" data-node-id="734:2184">
            <div class="available-title-box" data-node-id="734:2187">
              <p class="available-title" data-node-id="734:2185">Có sẵn trên</p>
            </div>
            <div class="platforms-img-wrapper" data-node-id="734:2186">
              <div class="platforms-img-box" data-node-id="734:2183">
                <img src="./assets/ef153740e0922100a32bd773556056890c14443c.png" alt="Steam, Xbox, Epic Games" class="platforms-sprite" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================================
           2. SCENE 1: KHÁM PHÁ (770:696 / 1363:82422) — MATCHING ẢNH 2 (VIDEO NỀN)
           ======================================================== -->
      <section class="figma-atmosphere-scene scene-1-explore" data-node-id="770:696">
        <!-- Visual Video Atmosphere Background (Ghost Hallway Video - Ảnh 2) -->
        <div class="atmosphere-visual-bg">
          <video class="scene-explore-bg-video scene-explore-bg-img" autoplay loop muted playsinline poster="./assets/scene-explore-ghost.png">
            <source src="./assets/scene-explore.mp4" type="video/mp4">
            <source src="./assets/video-explore.mp4" type="video/mp4">
            <img src="./assets/scene-explore-ghost.png" alt="Khám phá - Hồn ma hành lang" class="scene-explore-bg-img" />
          </video>
          <div class="scene-dark-overlay"></div>
        </div>

        <!-- Floating Title Badge: KHÁM PHÁ on the LEFT (782:1122 / 782:1113) -->
        <div class="scene-title-badge-floating explore-pos" data-node-id="782:1113">
          <div class="decor-frame-top" data-node-id="708:1188">
            <img src="./assets/d1935b33d274329ef3c82af24561520b9538b87c.png" alt="" class="decor-img" />
          </div>
          <h2 class="scene-title-text" data-node-id="782:1106">KHÁM PHÁ</h2>
          <div class="decor-frame-bottom" data-node-id="782:1112">
            <img src="./assets/d1935b33d274329ef3c82af24561520b9538b87c.png" alt="" class="decor-img rotate-180" />
          </div>
        </div>

        <!-- Bottom bar (PEGI 18 on Left, Platforms on Right - Matching Ảnh 2) -->
        <div class="figma-hero-bottom-bar scene-bottom-bar" data-node-id="770:697">
          <!-- Left: Age rated PEGI 18 (770:698) -->
          <div class="hero-age-rated" data-node-id="770:698">
            <div class="pegi-18-box" data-node-id="770:700">
              <img src="./assets/603524daa3adf33690676d71b7139b4dd432dcbd.png" alt="PEGI 18" class="pegi-18-img" />
            </div>
            <div class="age-rated-tag-row" data-node-id="770:701">
              <span class="tag-oan-text">OÁN</span>
              <span class="tag-grudge-text">THE  GRUDGE</span>
            </div>
          </div>

          <!-- Right: Platform availability (770:708) -->
          <div class="hero-platforms-badge" data-node-id="770:708">
            <div class="available-title-box">
              <p class="available-title">Có sẵn trên</p>
            </div>
            <div class="platforms-img-wrapper">
              <div class="platforms-img-box">
                <img src="./assets/ef153740e0922100a32bd773556056890c14443c.png" alt="Steam, Xbox, Epic Games" class="platforms-sprite" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================================
           3. SCENE 2: HỒI HỘP (770:742 / 1363:82441) — MATCHING ẢNH 3 (VIDEO NỀN)
           ======================================================== -->
      <section class="figma-atmosphere-scene scene-2-suspense" data-node-id="770:742">
        <!-- Visual Video Atmosphere Background (POV Flashlight Doors Video - Ảnh 3) -->
        <div class="atmosphere-visual-bg">
          <video class="suspense-bg-video suspense-bg-img" autoplay loop muted playsinline poster="./assets/scene-suspense-door.png">
            <source src="./assets/scene-suspense.mp4" type="video/mp4">
            <source src="./assets/video-suspense.mp4" type="video/mp4">
            <img src="./assets/scene-suspense-door.png" alt="Hồi hộp - Mở cánh cửa ma quái" class="suspense-bg-img" />
          </video>
          <div class="blood-red-glow"></div>
        </div>

        <!-- Floating Title Badge: HỒI HỘP on the RIGHT (782:1128 / 782:1129) -->
        <div class="scene-title-badge-floating suspense-pos" data-node-id="782:1129">
          <div class="decor-frame-top">
            <img src="./assets/d1935b33d274329ef3c82af24561520b9538b87c.png" alt="" class="decor-img" />
          </div>
          <h2 class="scene-title-text text-red-accent" data-node-id="I782:1129;782:1106">HỒI HỘP</h2>
          <div class="decor-frame-bottom">
            <img src="./assets/d1935b33d274329ef3c82af24561520b9538b87c.png" alt="" class="decor-img rotate-180" />
          </div>
        </div>

        <!-- Bottom bar (PEGI 18 on Left, Platforms on Right - Matching Ảnh 3) -->
        <div class="figma-hero-bottom-bar scene-bottom-bar" data-node-id="770:743">
          <!-- Left: Age rated PEGI 18 (770:744) -->
          <div class="hero-age-rated" data-node-id="770:744">
            <div class="pegi-18-box" data-node-id="770:746">
              <img src="./assets/603524daa3adf33690676d71b7139b4dd432dcbd.png" alt="PEGI 18" class="pegi-18-img" />
            </div>
            <div class="age-rated-tag-row" data-node-id="770:747">
              <span class="tag-oan-text">OÁN</span>
              <span class="tag-grudge-text">THE  GRUDGE</span>
            </div>
          </div>

          <!-- Right: Platform availability (770:754) -->
          <div class="hero-platforms-badge" data-node-id="770:754">
            <div class="available-title-box">
              <p class="available-title">Có sẵn trên</p>
            </div>
            <div class="platforms-img-wrapper">
              <div class="platforms-img-box">
                <img src="./assets/ef153740e0922100a32bd773556056890c14443c.png" alt="Steam, Xbox, Epic Games" class="platforms-sprite" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================================
           4. GIỚI THIỆU & CƠ CHẾ SECTION (770:834 / 1363:82461)
           ======================================================== -->
      <section class="figma-intro-mechanics-section" data-node-id="770:834">
        
        <!-- 4.1 Intro description block (734:2189 / 1363:82462) -->
        <div class="container intro-split-row" data-node-id="734:2189">
          <!-- Left: Intro Video Player (734:2235) -->
          <div class="intro-visual-preview" data-node-id="734:2235">
            <div class="intro-haunted-house-frame">
              <video class="intro-preview-video" autoplay loop muted playsinline controls poster="./assets/intro-thumbnail.png">
                <source src="./assets/intro-game-video.mp4" type="video/mp4">
                <source src="./assets/intro-game-video-2.mp4" type="video/mp4">
                <img src="./assets/73240ed6730c1a47cf16f08d416c9d0f49066a7f.png" alt="Nhà Họ Hứa" class="preview-house-img" />
              </video>
              <div class="preview-mist-overlay"></div>
            </div>
          </div>

          <!-- Right: Centered Intro Text Column (741:2236) -->
          <div class="intro-text-column" data-node-id="741:2236">
            <div class="intro-heading-box" data-node-id="741:2240">
              <h2 class="intro-main-heading" data-node-id="741:2237">Giới thiệu Game</h2>
            </div>
            <p class="intro-body-paragraph" data-node-id="741:2238">
              Lấy cảm hứng từ những truyền thuyết đô thị Việt Nam, "OÁN" là một trò chơi kinh dị tâm lý góc nhìn thứ nhất. Bạn sẽ vào vai một người khách không mời, khám phá bí ẩn đằng sau sự lụi bại của dòng họ Hứa danh tiếng một thời.
            </p>
            <div class="intro-action-btn" data-node-id="741:2241">
              <div class="figma-btn-read-more-wrapper" onclick="window.location.hash='info'">
                <div class="horror-frame-corners">
                  <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="corner-svg-left" />
                  <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="corner-svg-right" />
                </div>
                <div class="btn-read-more-field">
                  <span class="btn-read-more-caption">Đọc thêm</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 4.2 Cơ chế trò chơi Header Badge (770:937 / 770:900) -->
        <div class="container mechanics-badge-container" data-node-id="770:937">
          <div class="figma-tag-section" data-node-id="770:900">
            <div class="tag-section-bg" data-node-id="708:1187">
              <img src="./assets/07092503416c73ca4af4965cb97a13f4c989250d.png" alt="" class="title-bg-img" />
            </div>
            <div class="tag-section-content" data-node-id="770:892">
              <h2 class="tag-heading-bold" data-node-id="770:893">CƠ CHẾ TRÒ CHƠI</h2>
              <p class="tag-subheading-light" data-node-id="770:894">Phiêu lưu & Kinh dị Tâm lý</p>
            </div>
          </div>
        </div>

        <!-- 4.3 Mechanics 3 Cards (775:1020 / 1463:84971) -->
        <div class="container mechanics-cards-container" data-node-id="775:1020">
          <div class="mechanics-cards-flex" data-node-id="775:1019">
            
            <!-- Card 1: ĐIỀU TRA (775:991) -->
            <div class="mechanic-card-item" data-node-id="775:991" onclick="window.location.hash='investigation'">
              <div class="card-bg-layer">
                <img src="./assets/5af1160b5e6bd34a450d6078f05c69de40fe1f51.png" alt="" class="card-frame-texture" />
                <img src="./assets/75d8346ad7a78fc853eb527205ee564bbe2a4a9e.png" alt="" class="card-vector-border" />
              </div>
              <div class="card-content-flex">
                <div class="card-text-part">
                  <h3 class="card-title-white">ĐIỀU TRA</h3>
                  <p class="card-desc-grey">Lục tìm mọi ngóc ngách trong căn nhà để tìm ra những bí mật bị chôn giấu.</p>
                </div>
                <div class="card-photo-part">
                  <img src="./assets/73240ed6730c1a47cf16f08d416c9d0f49066a7f.png" alt="Điều tra" class="card-thumbnail-img" />
                </div>
              </div>
            </div>

            <!-- Card 2: GIẢI ĐỐ (775:1001 / 1363:82484) -->
            <div class="mechanic-card-item" data-node-id="775:1001" onclick="window.location.hash='puzzle'">
              <div class="card-bg-layer">
                <img src="./assets/5af1160b5e6bd34a450d6078f05c69de40fe1f51.png" alt="" class="card-frame-texture" />
                <img src="./assets/75d8346ad7a78fc853eb527205ee564bbe2a4a9e.png" alt="" class="card-vector-border" />
              </div>
              <div class="card-content-flex">
                <div class="card-text-part">
                  <h3 class="card-title-white">GIẢI ĐỐ</h3>
                  <p class="card-desc-grey">Lục tìm mọi ngóc ngách trong căn nhà để tìm ra những bí mật bị chôn giấu.</p>
                </div>
                <div class="card-photo-part">
                  <img src="./assets/2342fe1d72d38244b854bdf6f8b202d59e268a64.png" alt="Giải đố" class="card-thumbnail-img" />
                </div>
              </div>
            </div>

            <!-- Card 3: THU THẬP MANH MỐI (775:1010 / 1363:82485) -->
            <div class="mechanic-card-item" data-node-id="775:1010" onclick="window.location.hash='collection'">
              <div class="card-bg-layer">
                <img src="./assets/5af1160b5e6bd34a450d6078f05c69de40fe1f51.png" alt="" class="card-frame-texture" />
                <img src="./assets/75d8346ad7a78fc853eb527205ee564bbe2a4a9e.png" alt="" class="card-vector-border" />
              </div>
              <div class="card-content-flex">
                <div class="card-text-part">
                  <h3 class="card-title-white">THU THẬP<br/>MANH MỐI</h3>
                  <p class="card-desc-grey">Lục tìm mọi ngóc ngách trong căn nhà để tìm ra những bí mật bị chôn giấu.</p>
                </div>
                <div class="card-photo-part">
                  <img src="./assets/8c4a75cd6477ddb747691f32d966471842b24212.png" alt="Thu thập" class="card-thumbnail-img" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 4.4 CTA Ornate Ribbon Line (782:1149 / 1363:82478) -->
        <div class="container cta-line-container" data-node-id="782:1149">
          <div class="horror-cta-line-ribbon" data-node-id="782:1139">
            <div class="ribbon-claw-left">
              <img src="./assets/5330b79b9e3ec9f5d8e099674f3b9cd251731b0b.svg" alt="" />
            </div>
            <h3 class="ribbon-cta-text" data-node-id="782:1148">
              HÃY THỰC HIỆN NHỮNG ĐIỀU CHƯA ĐƯỢC GIẢI MÃ
            </h3>
            <div class="ribbon-claw-right">
              <img src="./assets/2a8d91cd956a7b707d91ed3faed539513ed626cf.svg" alt="" />
            </div>
          </div>
        </div>

        <!-- 4.5 Investigation Room Video Scene & Voices (782:1928 / 782:1926 & 794:2311 & 794:2325 / 1363:85059) -->
        <div class="container investigation-scene-box" data-node-id="782:1928">
          <div class="investigation-scene-visual" data-node-id="782:1926" id="investigation-screen-display">
            <!-- Video Mode (Default & Button 2) -->
            <video class="investigation-scene-video" id="investigation-main-video" autoplay loop muted playsinline controls poster="./assets/9ebe0ae5ac1b5cafa35d80422474abb970a6f2e6.png">
              <source src="./assets/investigation-video.mp4" type="video/mp4">
              <source src="./assets/investigation-video-alt.mp4" type="video/mp4">
              <img src="./assets/9ebe0ae5ac1b5cafa35d80422474abb970a6f2e6.png" alt="Investigation Scene" class="room-scene-img" />
            </video>

            <!-- Curse Blood Image Mode (Variant7 / 1363:89703: "HÃY CỨU TÔI") -->
            <div class="curse-blood-overlay" id="curse-blood-image-box" style="display: none;">
              <img src="./assets/hay-cuu-toi.png" alt="Hãy cứu tôi" class="curse-blood-img" />
              <div class="blood-vignette-pulse"></div>
            </div>

            <div class="flashlight-glow-spot"></div>
          </div>

          <!-- Character Voice Badges (794:2339 / 794:2311 & 794:2325) -->
          <div class="character-voices-wrapper" data-node-id="794:2339">
            
            <!-- Voice 1 (794:2311 / 794:2310: Triggers "HÃY CỨU TÔI" image switch) -->
            <div class="figma-charvoice-box voice-btn-trigger" id="btn-voice-cuu-toi" data-target="curse-image" data-node-id="794:2311">
              <div class="charvoice-inner-border"></div>
              <div class="corner-tr">
                <img src="./assets/c937222bc604d2c5219a0e2c8560160851688776.svg" alt="" />
              </div>
              <div class="corner-tl">
                <img src="./assets/c54cc056b3379d973346c7bd70f72a0299f7f83b.svg" alt="" />
              </div>
              <div class="corner-bl">
                <img src="./assets/d098db1d15940ffecbffae778ecf9c372760990c.svg" alt="" />
              </div>
              <div class="corner-br">
                <img src="./assets/7f3dfa7968d074d157fd5210ffb7c2696fd17563.svg" alt="" />
              </div>
              <div class="voice-content-row">
                <div class="quest-icon-wrapper" data-node-id="794:2303">
                  <img src="./assets/85e836b5902a33978179ca3708504d5b1b743653.svg" alt="" />
                </div>
                <p class="voice-quote-italic" data-node-id="794:2299">
                  “Hãy giải thoát cho tôi!”
                </p>
              </div>
            </div>

            <!-- Voice 2 (794:2325: Triggers investigation video switch) -->
            <div class="figma-charvoice-box voice-btn-trigger active-voice-mode" id="btn-voice-observe" data-target="video-scene" data-node-id="794:2325">
              <div class="charvoice-inner-border"></div>
              <div class="corner-tr">
                <img src="./assets/c937222bc604d2c5219a0e2c8560160851688776.svg" alt="" />
              </div>
              <div class="corner-tl">
                <img src="./assets/c54cc056b3379d973346c7bd70f72a0299f7f83b.svg" alt="" />
              </div>
              <div class="corner-bl">
                <img src="./assets/d098db1d15940ffecbffae778ecf9c372760990c.svg" alt="" />
              </div>
              <div class="corner-br">
                <img src="./assets/7f3dfa7968d074d157fd5210ffb7c2696fd17563.svg" alt="" />
              </div>
              <div class="voice-content-row">
                <div class="quest-icon-wrapper" data-node-id="I794:2325;794:2303">
                  <img src="./assets/85e836b5902a33978179ca3708504d5b1b743653.svg" alt="" />
                </div>
                <p class="voice-quote-italic" data-node-id="I794:2325;794:2299">
                  “Luôn quan sát những đồ vật!”
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ========================================================
           5. NHÂN VẬT SECTION (1363:86581)
           ======================================================== -->
      <section class="figma-characters-section" data-node-id="1363:86581">
        <div class="container">
          
          <!-- Tag section title -->
          <div class="tag-section-badge-wrapper">
            <div class="figma-tag-section">
              <div class="tag-section-bg">
                <img src="./assets/07092503416c73ca4af4965cb97a13f4c989250d.png" alt="" class="title-bg-img" />
              </div>
              <div class="tag-section-content">
                <h2 class="tag-heading-bold">NHÂN VẬT</h2>
                <p class="tag-subheading-light">Bi kịch trong từng lời nguyền cổ truyền</p>
              </div>
            </div>
          </div>

          <!-- 4 Character Cards with Real Figma Artwork -->
          <div class="character-cards-grid-figma">
            
            <!-- 1. Minh (node 823:1336) -->
            <div class="figma-char-card-item" data-node-id="823:1336" onclick="window.location.hash='character?id=minh'">
              <div class="char-portrait-box" data-node-id="815:737">
                <img src="./assets/72cb7e1d35b96eac40bc86451109f1fb5fc22dd7.png" alt="Minh" class="char-photo-img" />
              </div>
              <div class="char-name-plate" data-node-id="815:1274">
                <div class="plate-background-group">
                  <img src="./assets/b6f87ac59763ae763887dcb36e77095e4736f402.svg" alt="" class="plate-3element" />
                  <img src="./assets/b54688f4a2177859de11c78883b411be33182ae4.png" alt="" class="plate-mask-texture" />
                </div>
                <h3 class="char-title-name" data-node-id="815:739">Minh</h3>
                <p class="char-desc-role" data-node-id="815:740">Một Blogger đi khám phá</p>
              </div>
            </div>

            <!-- 2. Khang (node 823:1334) -->
            <div class="figma-char-card-item" data-node-id="823:1334" onclick="window.location.hash='character?id=minh'">
              <div class="char-portrait-box" data-node-id="823:1300">
                <img src="./assets/06108d6a32c6b959fbb88b8e7fcc55f617e6b82d.png" alt="Khang" class="char-photo-img" />
              </div>
              <div class="char-name-plate" data-node-id="823:1303">
                <div class="plate-background-group">
                  <img src="./assets/b6f87ac59763ae763887dcb36e77095e4736f402.svg" alt="" class="plate-3element" />
                  <img src="./assets/b54688f4a2177859de11c78883b411be33182ae4.png" alt="" class="plate-mask-texture" />
                </div>
                <h3 class="char-title-name" data-node-id="823:1310">Khang</h3>
                <p class="char-desc-role" data-node-id="823:1312">“Bạn của Minh, cùng Minh đi khám phá”</p>
              </div>
            </div>

            <!-- 3. Hứa Văn Lộc (node 823:1335) -->
            <div class="figma-char-card-item" data-node-id="823:1335" onclick="window.location.hash='character?id=hua-an'">
              <div class="char-portrait-box" data-node-id="815:1276">
                <img src="./assets/24688bb05ebb5d4e8b2b074d60bc3cc966dfa17c.png" alt="Hứa Văn Lộc" class="char-photo-img" />
              </div>
              <div class="char-name-plate" data-node-id="815:1278">
                <div class="plate-background-group">
                  <img src="./assets/b6f87ac59763ae763887dcb36e77095e4736f402.svg" alt="" class="plate-3element" />
                  <img src="./assets/b54688f4a2177859de11c78883b411be33182ae4.png" alt="" class="plate-mask-texture" />
                </div>
                <h3 class="char-title-name" data-node-id="815:1285">Hứa Văn Lộc</h3>
                <p class="char-desc-role" data-node-id="815:1287">“Gia trưởng, quyền lực, ám ảnh việc bảo vệ dòng họ”</p>
              </div>
            </div>

            <!-- 4. Hứa Ngọc (node 823:1333) -->
            <div class="figma-char-card-item" data-node-id="823:1333" onclick="window.location.hash='character?id=female'">
              <div class="char-portrait-box" data-node-id="823:1314">
                <img src="./assets/2c9d80e984a0e3cf97699642b5308eecc1791abe.png" alt="Hứa Ngọc" class="char-photo-img" />
              </div>
              <div class="char-name-plate" data-node-id="823:1318">
                <div class="plate-background-group">
                  <img src="./assets/b6f87ac59763ae763887dcb36e77095e4736f402.svg" alt="" class="plate-3element" />
                  <img src="./assets/b54688f4a2177859de11c78883b411be33182ae4.png" alt="" class="plate-mask-texture" />
                </div>
                <h3 class="char-title-name" data-node-id="823:1325">Hứa Ngọc</h3>
                <p class="char-desc-role" data-node-id="823:1327">“người phụ nữ mặc cảm tội lỗi suốt 20 năm”</p>
              </div>
            </div>
          </div>

          <!-- Philosophy statement banner -->
          <div class="character-philosophy-banner">
            <h3 class="philosophy-title">NHÂN VẬT ĐƯỢC THIẾT KẾ DỰA THEO YẾU TỐ KINH DỊ</h3>
            <p class="philosophy-sub">Nhân vật mang yếu tố tâm linh vào câu chuyện kinh dị</p>
          </div>
        </div>
      </section>

      <!-- ========================================================
           6. NHÀ HỨA & MEDIA GALLERY (1363:86582)
           ======================================================== -->
      <section class="figma-nha-hua-section" data-node-id="1363:86582">
        <div class="container">
          
          <!-- General Info Row (1363:86583 & 1363:86589) -->
          <div class="figma-general-info-table" data-node-id="1363:86583">
            <div class="general-info-header-row">
              <span class="label-general-info" data-node-id="1363:86584">General Info:</span>
              <div class="headers-cols" data-node-id="1363:86585">
                <span class="col-head" data-node-id="1363:86586">Genre</span>
                <span class="col-head" data-node-id="1363:86587">Location</span>
                <span class="col-head" data-node-id="1363:86588">Release</span>
              </div>
            </div>

            <div class="general-info-values-row" data-node-id="1363:86589">
              <div class="value-item text-gold-val" data-node-id="1363:86590">
                <p>Psychological</p>
                <p>Horror / Puzzle</p>
              </div>
              <div class="value-item text-gold-val" data-node-id="1363:86591">
                <p>Vietnam</p>
                <p>(1990s)</p>
              </div>
              <div class="value-item text-red-status" data-node-id="1363:86592">
                <p>Available</p>
              </div>
            </div>
          </div>

          <!-- Video & Screenshots Interactive Gallery Showcase (877:1068) -->
          <div class="figma-video-gallery-showcase" data-node-id="877:1068">
            
            <!-- Main Viewport (838:1468) -->
            <div class="gallery-viewport-box" data-node-id="838:1468">
              <img src="./assets/080542d143f6abbad99cd001eebc66924018d9bc.png" alt="Showcase" id="gallery-active-view" class="active-viewport-img" />
              <div class="viewport-vignette-overlay"></div>
            </div>

            <!-- Thumbnail Switcher Strip ("Doi anh" - 838:1476) -->
            <div class="gallery-switcher-strip" data-node-id="838:1476">
              <button class="thumb-btn-figma active" data-src="./assets/73240ed6730c1a47cf16f08d416c9d0f49066a7f.png" data-node-id="838:1470">
                <img src="./assets/73240ed6730c1a47cf16f08d416c9d0f49066a7f.png" alt="Ảnh 1" />
              </button>
              <button class="thumb-btn-figma" data-src="./assets/b76c78172d6e968ff30b0ac750540bc810f0b636.png" data-node-id="838:1471">
                <img src="./assets/b76c78172d6e968ff30b0ac750540bc810f0b636.png" alt="Ảnh 2" />
              </button>
              <button class="thumb-btn-figma" data-src="./assets/5b1f96dba84e508bc260d61529c98412d108bded.png" data-node-id="838:1472">
                <img src="./assets/5b1f96dba84e508bc260d61529c98412d108bded.png" alt="Ảnh 3" />
              </button>
              <button class="thumb-btn-figma" data-src="./assets/5cd0da7475fc2d3e62605f4cd60ff8d2fcb7546f.png" data-node-id="838:1473">
                <img src="./assets/5cd0da7475fc2d3e62605f4cd60ff8d2fcb7546f.png" alt="Ảnh 4" />
              </button>
              <button class="thumb-btn-figma" data-src="./assets/0e5d792e9bc9ba502ded578888d8321bdf366431.png" data-node-id="838:1474">
                <img src="./assets/0e5d792e9bc9ba502ded578888d8321bdf366431.png" alt="Ảnh 5" />
              </button>
              <button class="thumb-btn-figma" data-src="./assets/080542d143f6abbad99cd001eebc66924018d9bc.png" data-node-id="838:1475">
                <img src="./assets/080542d143f6abbad99cd001eebc66924018d9bc.png" alt="Ảnh 6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================================
           7. TIN TỨC & CẬP NHẬT + KẾT NỐI (1363:86595)
           ======================================================== -->
      <section class="figma-news-connect-section" data-node-id="1363:86595">
        <div class="container">
          <div class="news-connect-grid-layout" data-node-id="1363:86597">
            
            <!-- Left: News & Updates (1363:86598) -->
            <div class="news-updates-col" data-node-id="1363:86598">
              <div class="news-heading-box" data-node-id="1363:86599">
                <h2 class="news-main-title" data-node-id="1363:86600">TIN TỨC & CẬP NHẬT</h2>
              </div>

              <div class="news-items-list" data-node-id="1363:86601">
                
                <!-- News 1 (1363:86602) -->
                <div class="news-row-item" data-node-id="1363:86602">
                  <span class="news-date-badge" data-node-id="1363:86603">12.10.2024</span>
                  <div class="news-content-box" data-node-id="1363:86604">
                    <h4 class="news-article-title" data-node-id="1363:86606">CẬP NHẬT BẢN VÁ LỖI 1.0.2 - CẢI THIỆN ĐỒ HỌA</h4>
                    <p class="news-article-snippet" data-node-id="1363:86608">Chúng tôi đã tối ưu hóa hiệu suất cho các dòng máy cấu hình thấp...</p>
                  </div>
                </div>

                <!-- News 2 (1363:86609) -->
                <div class="news-row-item" data-node-id="1363:86609">
                  <span class="news-date-badge" data-node-id="1363:86610">08.10.2024</span>
                  <div class="news-content-box" data-node-id="1363:86611">
                    <h4 class="news-article-title" data-node-id="1363:86613">SỰ KIỆN: CUỘC THI FAN ART "NỖI ÁM ẢNH"</h4>
                    <p class="news-article-snippet" data-node-id="1363:86615">Tham gia ngay để nhận được bộ quà tặng giới hạn từ OÁN Horror Studio.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right: Connect Box (1363:86616) -->
            <div class="connect-social-col" data-node-id="1363:86616">
              <div class="connect-bordered-card" data-node-id="1363:86617">
                
                <div class="connect-card-header" data-node-id="1363:86618">
                  <h3 class="connect-title-text" data-node-id="1363:86619">KẾT NỐI</h3>
                  <img src="./assets/278b0fac7f3b287f74867a1861b629f059373513.png" alt="" class="connect-ambient-bg" data-node-id="1363:86620" />
                  <img src="./assets/695f80586e381ccdef09653aec06c99619731400.svg" alt="" class="connect-symbol-icon" data-node-id="1363:86621" />
                </div>

                <div class="social-channels-links" data-node-id="1363:86635">
                  
                  <!-- Facebook (1363:86636) -->
                  <a href="#" class="social-row-link" data-node-id="1363:86636">
                    <div class="social-icon-box" data-node-id="1363:86637">
                      <img src="./assets/0f7ddffb5d788ce2cb19167eabb559841e8fa1c4.svg" alt="Facebook" />
                    </div>
                    <span class="social-network-name" data-node-id="1363:86643">FACEBOOK</span>
                  </a>

                  <!-- TikTok (1363:86644) -->
                  <a href="#" class="social-row-link" data-node-id="1363:86644">
                    <div class="social-icon-box" data-node-id="1363:86645">
                      <img src="./assets/5c52f798d7c7bdc3230da07286ab6f7c2d72dd20.svg" alt="TikTok" />
                    </div>
                    <span class="social-network-name" data-node-id="1363:86740">TIKTOK</span>
                  </a>

                  <!-- Instagram (1363:86741) -->
                  <a href="#" class="social-row-link" data-node-id="1363:86741">
                    <div class="social-icon-box" data-node-id="1363:86742">
                      <img src="./assets/b3d1851d66545a96e4c4c58b9de0380549725b19.svg" alt="Instagram" />
                    </div>
                    <span class="social-network-name" data-node-id="1363:86751">INSTAGRAM</span>
                  </a>
                </div>

                <!-- Join Now Button (1363:86753) -->
                <div class="connect-action-btn-row" data-node-id="1363:86752">
                  <a href="#community" class="btn-figma-join-now" data-node-id="1363:86753">
                    <span>THAM GIA NGAY</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================================
           8. TRAILER SECTION (1363:86754)
           ======================================================== -->
      <section class="figma-trailer-official-section" data-node-id="1363:86754">
        <div class="container">
          
          <!-- Tag section title -->
          <div class="tag-section-badge-wrapper" data-node-id="1363:86755">
            <div class="figma-tag-section">
              <div class="tag-section-bg">
                <img src="./assets/07092503416c73ca4af4965cb97a13f4c989250d.png" alt="" class="title-bg-img" />
              </div>
              <div class="tag-section-content">
                <h2 class="tag-heading-bold">TRAILER CHÍNH THỨC</h2>
              </div>
            </div>
          </div>

          <!-- Video Player Box with Grunge Border (1363:86757) -->
          <div class="figma-trailer-box-wrapper" data-node-id="1363:86756">
            <div class="trailer-grunge-frame" data-node-id="1363:86757" onclick="window.location.hash='trailer'">
              <img src="./assets/e76ecda0d692864bfa2f45cdf168a58e7724c37e.png" alt="" class="grunge-texture-img" />
              
              <!-- Large Play Button (879:1292) -->
              <div class="figma-large-play-btn" data-node-id="879:1292">
                <img src="./assets/79865e542615851eb9071015d22e671958feb5a7.svg" alt="Play" class="play-svg-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================================
           9. SẴN SÀNG SECTION (1363:86758)
           ======================================================== -->
      <section class="figma-ready-section" data-node-id="1363:86758">
        <div class="ready-bg-layer" data-node-id="1363:86759">
          <img src="./assets/8d535e5186d5115ccc9a5c72e883cc54bda667bd.png" alt="" class="ready-bg-img" />
        </div>

        <div class="ready-content-container container" data-node-id="1363:86761">
          <div class="ready-heading-box" data-node-id="1363:86762">
            <h2 class="ready-heading-text" data-node-id="1363:86763">
              BẠN ĐÃ SẴN SÀNG BƯỚC VÀO NHÀ HỨA?
            </h2>
          </div>

          <!-- 2 Buttons: CHƠI NGAY & TẢI NGAY (1363:86764) -->
          <div class="ready-buttons-row" data-node-id="1363:86764">
            
            <!-- Button 2: CHƠI NGAY (1363:86765) -->
            <div class="figma-btn-horror-frame" data-node-id="1363:86765" onclick="window.location.hash='download'">
              <div class="horror-frame-corners">
                <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="corner-svg-left" />
                <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="corner-svg-right" />
              </div>
              <div class="horror-frame-body">
                <span class="horror-btn-text">CHƠI NGAY</span>
              </div>
            </div>

            <!-- Button 1: TẢI NGAY (1363:86766) -->
            <div class="figma-btn-horror-frame" data-node-id="1363:86766" onclick="window.location.hash='download'">
              <div class="horror-frame-corners">
                <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="corner-svg-left" />
                <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="corner-svg-right" />
              </div>
              <div class="horror-frame-body">
                <span class="horror-btn-text">TẢI NGAY</span>
              </div>
            </div>
          </div>

          <!-- Requirements (1363:86767) -->
          <div class="ready-sysreq-box" data-node-id="1363:86767">
            <p class="sysreq-text" data-node-id="1363:86768">
              YÊU CẦU: CORE I5 / 8GB RAM / GTX 1060+
            </p>
          </div>
        </div>
      </section>
    </div>
  `;

  // Gallery interactive switcher
  const switcherBtns = container.querySelectorAll('.gallery-switcher-strip .thumb-btn-figma');
  const mainView = container.querySelector('#gallery-active-view');

  switcherBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switcherBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const src = btn.getAttribute('data-src');
      if (mainView && src) {
        mainView.style.opacity = '0.3';
        setTimeout(() => {
          mainView.src = src;
          mainView.style.opacity = '1';
        }, 150);
      }
    });
  });

  // Auto-play all background videos seamlessly
  const bgVideos = container.querySelectorAll('video');
  bgVideos.forEach(v => {
    v.muted = true;
    v.play().catch(e => console.log('Autoplay handled:', e));
  });

  // Investigation scene interactive voice switcher (Figma 1363:85059)
  const voiceBtns = container.querySelectorAll('.voice-btn-trigger');
  const videoElem = container.querySelector('#investigation-main-video');
  const curseBox = container.querySelector('#curse-blood-image-box');

  voiceBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.getAttribute('data-target');
      voiceBtns.forEach(b => b.classList.remove('active-voice-mode'));
      btn.classList.add('active-voice-mode');

      if (target === 'curse-image') {
        if (videoElem) {
          videoElem.style.display = 'none';
          videoElem.pause();
        }
        if (curseBox) {
          curseBox.style.display = 'flex';
          curseBox.classList.add('curse-appear-glitch');
          setTimeout(() => {
            curseBox.classList.remove('curse-appear-glitch');
          }, 500);
        }
      } else {
        if (curseBox) {
          curseBox.style.display = 'none';
        }
        if (videoElem) {
          videoElem.style.display = 'block';
          videoElem.play().catch(e => console.log(e));
        }
      }
    });
  });

  // Initialize GSAP ScrollTrigger animations
  initHomeScrollTriggers();
}
