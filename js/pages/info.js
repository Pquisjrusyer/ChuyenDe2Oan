/* ============================================
   OAN Horror Game — Info / Thông Tin Page (Figma 928:2008)
   ============================================ */

import { initTrailerScrollTriggers } from '../utils/smooth-scroll.js';

export async function renderInfo(container) {
  const familyCharacters = {
    'hua-minh-duc': {
      name: 'HỨA MINH ĐỨC',
      years: '(1930 - 2002)',
      role: 'Trưởng nam',
      avatar: './assets/portrait-hua-minh-duc.jpg',
      desc: [
        'Trưởng nam của cụ Hứa Bá Kiên.',
        'Từng du học Pháp.',
        'Trở về điều hành điền sản của dòng họ.',
        'Biến cố năm 1975.'
      ],
      warning: 'Liên quan đến nghi lễ Hội Địa Linh?'
    },
    'hua-tong-chi': {
      name: 'HỨA TÔNG CHI',
      years: '(1868 - 1935)',
      role: 'Gia chủ đời thứ nhất',
      avatar: './assets/portrait-hua-tong-chi.jpg',
      desc: [
        'Người đặt nền móng cho cơ nghiệp họ Hứa.',
        'Khai phá đất đai và lập nên dinh thự tráng lệ.',
        'Bí mật ký kết giao ước cổ xưa năm 1900.'
      ],
      warning: 'Khởi nguồn của lời nguyền gia tộc.'
    },
    'tran-thi-nga': {
      name: 'TRẦN THỊ NGA',
      years: '(1870 - 1942)',
      role: 'Chính thất',
      avatar: './assets/portrait-tran-thi-nga.jpg',
      desc: [
        'Phu nhân của cụ Hứa Tông Chi.',
        'Gìn giữ gia quy nghiêm ngặt.',
        'Quản lý toàn bộ phòng thờ tổ tiên.',
        'Người đầu tiên chứng kiến điềm báo.'
      ],
      warning: 'Linh cảm điềm gở của căn nhà cổ.'
    },
    'hua-ba-kien': {
      name: 'HỨA BÁ KIÊN',
      years: '(1905 - 1984)',
      role: 'Gia chủ đời thứ hai',
      avatar: './assets/portrait-hua-ba-kien.jpg',
      desc: [
        'Thừa kế toàn bộ điền sản miền Nam.',
        'Mở rộng hầm mộ phía Tây và niêm phong căn phòng thờ.',
        'Qua đời bí ẩn trong đêm bão giông 1984.'
      ],
      warning: 'Người che giấu chân tướng sự thật.'
    },
    'hua-ba-thang': {
      name: 'HỨA BÁ THẮNG',
      years: '(1898 - 1972)',
      role: 'Nhị công tử',
      avatar: './assets/portrait-hua-ba-thang.jpg',
      desc: [
        'Học giả nghiên cứu cổ thư và phong thủy.',
        'Nhiều lần cảnh báo về điềm gở của dinh thự.',
        'Ghi chép lại toàn bộ bản đồ giải mã hầm mộ.'
      ],
      warning: 'Nắm giữ chìa khóa giải mã phong ấn.'
    },
    'hua-thi-lan': {
      name: 'HỨA THỊ LAN',
      years: '(1908 - 1991)',
      role: 'Tiểu thư út',
      avatar: './assets/portrait-hua-thi-lan.jpg',
      desc: [
        'Rời khỏi dinh thự trước ngày biến cố.',
        'Người duy nhất sống sót ngoài vòng xoáy lời nguyền.',
        'Mang nỗi ám ảnh khôn nguôi về người cháu gái.'
      ],
      warning: 'Nhân chứng sống cuối cùng của dòng họ.'
    },
    'hua-an': {
      name: 'HỨA AN',
      years: '(1965 - 1985)',
      role: 'Tiểu thư út',
      avatar: './assets/portrait-hua-an.jpg',
      desc: [
        'Cô con gái út tài hoa bạc mệnh.',
        'Mắc chứng bệnh lạ và bị cách ly trong phòng kín.',
        'Những bức họa đẫm máu được tìm thấy sau khi mất.'
      ],
      warning: 'Oán hồn áo trắng lang thang trong dinh thự.'
    }
  };

  container.innerHTML = `
    <div class="figma-info-page" data-node-id="928:2008">
      
      <!-- ========================================================
           BACKGROUND AMBIENT TEXTURE LAYER (954:397644)
           ======================================================== -->
      <div class="info-page-bg-ambient" data-node-id="954:397644">
        <img src="./assets/17d332d1aa4cfc528c757faf993b50210a3622ee.png" alt="" class="info-page-bg-img" />
        <div class="info-page-bg-overlay"></div>
      </div>

      <!-- ========================================================
           1. HERO SECTION: GIA PHẢ HỌ HỨA INVESTIGATION BOARD (954:397856)
           ======================================================== -->
      <section class="info-hero-board-section" data-node-id="954:397856">
        <div class="info-board-container">
          
          <!-- Board Interactive Canvas Frame -->
          <div class="info-board-canvas" data-node-id="849:765">
            <img src="./assets/info-hero-board.png" alt="Gia Phả Họ Hứa" class="info-board-bg-texture" />
            
            <!-- OLD SCRATCHED MIRROR / GLASS REFLECTION OVERLAY (Figma 954:397857) -->
            <div class="info-board-scratched-mirror-overlay" data-node-id="954:397857">
              <img src="./assets/antique-scratched-mirror-overlay.jpg" alt="" class="glass-scratches-img" />
              <div class="glass-reflection-sheen"></div>
              <div class="glass-grunge-vignette"></div>
            </div>

            <!-- Objective Clue HUD (Top Left) -->
            <div class="info-board-hud-objective trailer-scroll-reveal trailer-reveal-fade">
              <div class="hud-goal-badge">
                <span class="hud-diamond-icon">◇</span>
                <span class="hud-goal-text">Giải mã gia phả họ Hứa</span>
              </div>
              <div class="hud-status-text">Đã kết nối: 3/5</div>
              <div class="hud-subtext">Bí mật gia tộc vẫn còn ẩn giấu.</div>
            </div>

            <!-- Page Title Overlay (Left Center) -->
            <div class="info-hero-title-overlay trailer-scroll-reveal trailer-reveal-fade-up">
              <h1 class="info-hero-main-title" data-node-id="954:413380">THÔNG TIN</h1>
              <p class="info-hero-sub-desc" data-node-id="954:413381">
                Khám phá thế giới của OÁN — Nơi những lời nguyền cổ xưa trỗi dậy từ bóng tối của lịch sử Việt Nam.
              </p>
            </div>

            <!-- Interactive Character Hotspots on Board -->
            <div class="info-character-hotspots">
              <button class="char-hotspot-btn active" data-char="hua-minh-duc" style="top: 55%; left: 52%;" title="Hứa Minh Đức"></button>
              <button class="char-hotspot-btn" data-char="hua-tong-chi" style="top: 22%; left: 40%;" title="Hứa Tông Chi"></button>
              <button class="char-hotspot-btn" data-char="tran-thi-nga" style="top: 22%; left: 56%;" title="Trần Thị Nga"></button>
              <button class="char-hotspot-btn" data-char="hua-ba-thang" style="top: 38%; left: 29%;" title="Hứa Bá Thắng"></button>
              <button class="char-hotspot-btn" data-char="hua-ba-kien" style="top: 38%; left: 54%;" title="Hứa Bá Kiên"></button>
              <button class="char-hotspot-btn" data-char="hua-thi-lan" style="top: 38%; left: 68%;" title="Hứa Thị Lan"></button>
              <button class="char-hotspot-btn" data-char="hua-an" style="top: 75%; left: 39%;" title="Hứa An"></button>
            </div>

            <!-- Character Profile Sidebar (Right Side of Board) -->
            <div class="info-profile-sidebar trailer-scroll-reveal trailer-reveal-right" id="info-char-profile-card">
              <div class="profile-portrait-box">
                <img src="./assets/portrait-hua-minh-duc.jpg" alt="Hứa Minh Đức" class="profile-portrait-img" id="profile-card-img" />
              </div>
              <div class="profile-info-body">
                <h3 class="profile-name-text" id="profile-card-name">HỨA MINH ĐỨC</h3>
                <div class="profile-years-text" id="profile-card-years">(1930 - 2002)</div>
                <div class="profile-desc-list" id="profile-card-desc">
                  <p>Trưởng nam của cụ Hứa Bá Kiên.</p>
                  <p>Từng du học Pháp.</p>
                  <p>Trở về điều hành điền sản của dòng họ.</p>
                  <p>Biến cố năm 1975.</p>
                </div>
                <div class="profile-warning-red" id="profile-card-warning">
                  Liên quan đến nghi lễ Hội Địa Linh?
                </div>
              </div>
            </div>

            <!-- Bottom Hotkey Control Bar -->
            <div class="info-board-hotkey-bar trailer-scroll-reveal trailer-reveal-fade">
              <div class="hotkey-item"><span class="hk-icon">🖱️</span> Kéo / Thả</div>
              <div class="hotkey-item"><span class="hk-key">E</span> Xem chi tiết</div>
              <div class="hotkey-item"><span class="hk-key">R</span> Đặt lại</div>
              <div class="hotkey-item"><span class="hk-key">ESC</span> Thoát</div>
            </div>

          </div>

        </div>
      </section>

      <!-- ========================================================
           2. 4 STORY SCENES PHOTO GALLERY GRID (957:429546)
           ======================================================== -->
      <section class="info-story-gallery-section" data-node-id="957:413974">
        
        <!-- Deep Blood Red Ambient Background (957:413986) -->
        <div class="info-story-bg-layer" data-node-id="957:413986">
          <div class="info-story-bg-vignette"></div>
        </div>

        <div class="container">
          <div class="info-story-gallery-grid" data-node-id="957:429546">
            
            <!-- Card 1: 0e5d792e9bc9ba502ded578888d8321bdf366431.png (957:413975) -->
            <div class="story-scene-horror-card trailer-scroll-reveal trailer-reveal-fade-up delay-100" data-node-id="957:413975">
              <div class="story-card-inner-photo">
                <img src="./assets/0e5d792e9bc9ba502ded578888d8321bdf366431.png" alt="Thờ cúng oan hồn" class="scene-photo-img" />
              </div>
              <div class="story-card-grunge-layer">
                <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" />
              </div>
              <div class="story-card-frame-border">
                <img src="./assets/610459ac7da9e2d76eadcb1b9d7aa2a5521d0a00.png" alt="" class="frame-border-img" />
              </div>
              <div class="story-card-footer-bar">
                <h3 class="story-card-red-title" data-node-id="957:413960">CỐT TRUYỆN</h3>
                <a href="#storyline" class="story-card-red-action" data-node-id="957:413963">KHÁM PHÁ</a>
              </div>
            </div>

            <!-- Card 2: 73240ed6730c1a47cf16f08d416c9d0f49066a7f.png (957:429513) -->
            <div class="story-scene-horror-card trailer-scroll-reveal trailer-reveal-fade-up delay-200" data-node-id="957:429513">
              <div class="story-card-inner-photo">
                <img src="./assets/73240ed6730c1a47cf16f08d416c9d0f49066a7f.png" alt="Căn phòng bí mật" class="scene-photo-img" />
              </div>
              <div class="story-card-grunge-layer">
                <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" />
              </div>
              <div class="story-card-frame-border">
                <img src="./assets/610459ac7da9e2d76eadcb1b9d7aa2a5521d0a00.png" alt="" class="frame-border-img" />
              </div>
              <div class="story-card-footer-bar">
                <h3 class="story-card-red-title">CỐT TRUYỆN</h3>
                <a href="#storyline" class="story-card-red-action">KHÁM PHÁ</a>
              </div>
            </div>

            <!-- Card 3: b76c78172d6e968ff30b0ac750540bc810f0b636.png (957:429535) -->
            <div class="story-scene-horror-card trailer-scroll-reveal trailer-reveal-fade-up delay-300" data-node-id="957:429535">
              <div class="story-card-inner-photo">
                <img src="./assets/b76c78172d6e968ff30b0ac750540bc810f0b636.png" alt="Hành lang bóng ma" class="scene-photo-img" />
              </div>
              <div class="story-card-grunge-layer">
                <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" />
              </div>
              <div class="story-card-frame-border">
                <img src="./assets/610459ac7da9e2d76eadcb1b9d7aa2a5521d0a00.png" alt="" class="frame-border-img" />
              </div>
              <div class="story-card-footer-bar">
                <h3 class="story-card-red-title">CỐT TRUYỆN</h3>
                <a href="#storyline" class="story-card-red-action">KHÁM PHÁ</a>
              </div>
            </div>

            <!-- Card 4: 5cd0da7475fc2d3e62605f4cd60ff8d2fcb7546f.png (957:429524) -->
            <div class="story-scene-horror-card trailer-scroll-reveal trailer-reveal-fade-up delay-400" data-node-id="957:429524">
              <div class="story-card-inner-photo">
                <img src="./assets/5cd0da7475fc2d3e62605f4cd60ff8d2fcb7546f.png" alt="Máy quay ghi hình" class="scene-photo-img" />
              </div>
              <div class="story-card-grunge-layer">
                <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" />
              </div>
              <div class="story-card-frame-border">
                <img src="./assets/610459ac7da9e2d76eadcb1b9d7aa2a5521d0a00.png" alt="" class="frame-border-img" />
              </div>
              <div class="story-card-footer-bar">
                <h3 class="story-card-red-title">CỐT TRUYỆN</h3>
                <a href="#storyline" class="story-card-red-action">KHÁM PHÁ</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ========================================================
           3. STORY HIGHLIGHT FEATURE: BI KỊCH CỦA NHÀ HỨA (957:413974)
           ======================================================== -->
      <section class="info-feature-story-section" data-node-id="957:413974">
        <div class="container">
          
          <!-- Tag Section: Nổi bật trong cốt truyện (957:429588) -->
          <div class="gallery-tag-section-badge tag-center" data-node-id="957:429588">
            <div class="tag-section-bg">
              <img src="./assets/07092503416c73ca4af4965cb97a13f4c989250d.png" alt="" class="title-bg-img" />
            </div>
            <div class="tag-section-content">
              <h2 class="tag-heading-bold" data-node-id="957:429591">Nổi bật trong cốt truyện</h2>
            </div>
          </div>

          <!-- Feature Narrative Content Block -->
          <div class="feature-story-narrative-box trailer-scroll-reveal trailer-reveal-fade-up">
            <h2 class="feature-main-title" data-node-id="957:429595">
              BI KỊCH CỦA<br/>NHÀ HỨA
            </h2>
            <p class="feature-sub-desc" data-node-id="957:429597">
              Dòng họ Hứa từng là biểu tượng của sự phồn thịnh, cho đến khi một giao kèo hắc ám được thực hiện...
            </p>
            
            <!-- Red Horror Button: ĐỌC TIẾP -->
            <a href="#storyline" class="figma-btn-horror-frame btn-read-more" style="text-decoration: none;">
              <div class="horror-frame-corners">
                <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="corner-svg-left" />
                <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="corner-svg-right" />
              </div>
              <div class="horror-frame-body">
                <span class="horror-btn-text">ĐỌC TIẾP</span>
              </div>
            </a>
          </div>

        </div>
      </section>

      <!-- ========================================================
           4. LATEST NEWS & UPDATES SECTION (957:429832)
           ======================================================== -->
      <section class="info-updates-section" data-node-id="957:429832">
        <div class="container">
          
          <!-- Top Row: Link Xem tất cả tin tức & Tag Badge Cập nhật mới nhất -->
          <div class="updates-header-flex-row">
            <a href="#community" class="updates-view-all-link" data-node-id="957:429767">
              Xem tất cả tin tức
            </a>
            
            <div class="gallery-tag-section-badge" data-node-id="957:429768">
              <div class="tag-section-bg">
                <img src="./assets/07092503416c73ca4af4965cb97a13f4c989250d.png" alt="" class="title-bg-img" />
              </div>
              <div class="tag-section-content">
                <h2 class="tag-heading-bold" data-node-id="957:429681">Cập nhật mới nhất</h2>
                <p class="tag-subheading-light" data-node-id="957:429682">Cập nhật cuối</p>
              </div>
            </div>
          </div>

          <!-- 3 News Cards Grid -->
          <div class="info-news-cards-grid">
            
            <!-- News Card 1 (957:429673) -->
            <div class="info-news-card trailer-scroll-reveal trailer-reveal-fade-up delay-100" data-node-id="957:429673">
              <div class="news-card-photo-box">
                <img src="./assets/b35a622df1a54e2656534504552ee87ce40a437c.png" alt="Hầm Mộ Phía Tây" class="news-photo-img" />
              </div>
              <div class="news-card-category-date" data-node-id="957:429628">
                15.10.2024 / PHÁT TRIỂN
              </div>
              <h3 class="news-card-title-bold" data-node-id="957:429630">
                TIẾT LỘ MÔI TRƯỜNG: HẦM MỘ PHÍA TÂY
              </h3>
              <p class="news-card-desc-text" data-node-id="957:429632">
                Khám phá quá trình thiết kế âm thanh cho khu vực hầm mộ đầy u ám.
              </p>
              <button class="figma-btn-horror-frame news-detail-btn" data-node-id="957:429654">
                <div class="horror-frame-corners">
                  <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="corner-svg-left" />
                  <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="corner-svg-right" />
                </div>
                <div class="horror-frame-body">
                  <span class="horror-btn-text">CHI TIẾT</span>
                </div>
              </button>
            </div>

            <!-- News Card 2 (957:429715) -->
            <div class="info-news-card trailer-scroll-reveal trailer-reveal-fade-up delay-200" data-node-id="957:429715">
              <div class="news-card-photo-box">
                <img src="./assets/de199cd00f2de8d3061f6e4a81dc16eff89caf6c.png" alt="Ngũ Hành Puzzle" class="news-photo-img" />
              </div>
              <div class="news-card-category-date">
                08.10.2024 / CẬP NHẬT
              </div>
              <h3 class="news-card-title-bold">
                HỆ THỐNG CÂU ĐỐ NGŨ HÀNH TRONG GAME
              </h3>
              <p class="news-card-desc-text">
                Tìm hiểu cơ chế giải mã cổ thư và tương tác với các cổ vật phong thủy bí truyền.
              </p>
              <button class="figma-btn-horror-frame news-detail-btn">
                <div class="horror-frame-corners">
                  <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="corner-svg-left" />
                  <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="corner-svg-right" />
                </div>
                <div class="horror-frame-body">
                  <span class="horror-btn-text">CHI TIẾT</span>
                </div>
              </button>
            </div>

            <!-- News Card 3 (957:429757) -->
            <div class="info-news-card trailer-scroll-reveal trailer-reveal-fade-up delay-300" data-node-id="957:429757">
              <div class="news-card-photo-box">
                <img src="./assets/2a7f7a6f7f25bf8fa8035a56e87eeb105e0f7a2a.png" alt="Bản Thử Nghiệm" class="news-photo-img" />
              </div>
              <div class="news-card-category-date">
                01.10.2024 / SỰ KIỆN
              </div>
              <h3 class="news-card-title-bold">
                TIẾP CẬN BẢN THỬ NGHIỆM ĐẦY ĐỦ
              </h3>
              <p class="news-card-desc-text">
                Đăng ký sớm để trải nghiệm chương 1 dinh thự nhà họ Hứa trước ngày phát hành chính thức.
              </p>
              <button class="figma-btn-horror-frame news-detail-btn">
                <div class="horror-frame-corners">
                  <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="corner-svg-left" />
                  <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="corner-svg-right" />
                </div>
                <div class="horror-frame-body">
                  <span class="horror-btn-text">CHI TIẾT</span>
                </div>
              </button>
            </div>

          </div>

        </div>
      </section>

      <!-- ========================================================
           5. READY SECTION: BẠN ĐÃ SẴN SÀNG BƯỚC VÀO NHÀ HỨA? (957:429834)
           ======================================================== -->
      <section class="figma-ready-section" data-node-id="957:429834">
        <div class="ready-bg-layer" data-node-id="1363:86759">
          <img src="./assets/756885dfb2824df927ddb06dbefba60759082c5f.png" alt="" class="ready-bg-img" />
          <div class="ready-bg-vignette"></div>
        </div>

        <div class="ready-content-container container" data-node-id="1363:86761">
          <div class="ready-heading-box trailer-scroll-reveal trailer-reveal-scale" data-node-id="1363:86762">
            <h2 class="ready-heading-text" data-node-id="957:429836">
              BẠN ĐÃ SẴN SÀNG BƯỚC VÀO NHÀ HỨA?
            </h2>
          </div>

          <!-- 2 Buttons: CHƠI NGAY & TẢI NGAY (1363:86764) -->
          <div class="ready-buttons-row trailer-scroll-reveal trailer-reveal-fade-up delay-200" data-node-id="1363:86764">
            
            <a href="#login" class="figma-btn-horror-frame" data-node-id="1363:86765" style="text-decoration: none;">
              <div class="horror-frame-corners">
                <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="corner-svg-left" />
                <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="corner-svg-right" />
              </div>
              <div class="horror-frame-body">
                <span class="horror-btn-text">CHƠI NGAY</span>
              </div>
            </a>

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

          <!-- Requirements (957:429841) -->
          <div class="ready-sysreq-box trailer-scroll-reveal trailer-reveal-fade delay-350" data-node-id="957:429841">
            <p class="sysreq-text">
              YÊU CẦU: CORE I5 / 8GB RAM / GTX 1060+
            </p>
          </div>
        </div>
      </section>

    </div>
  `;

  // Interactive Family Tree Hotspot Selection
  const hotspots = container.querySelectorAll('.char-hotspot-btn');
  const pImg = container.querySelector('#profile-card-img');
  const pName = container.querySelector('#profile-card-name');
  const pYears = container.querySelector('#profile-card-years');
  const pDesc = container.querySelector('#profile-card-desc');
  const pWarning = container.querySelector('#profile-card-warning');

  hotspots.forEach(btn => {
    btn.addEventListener('click', () => {
      hotspots.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const charKey = btn.getAttribute('data-char');
      const data = familyCharacters[charKey];
      if (data) {
        if (pImg) {
          pImg.style.opacity = '0';
          setTimeout(() => {
            pImg.src = data.avatar;
            pImg.alt = data.name;
            pImg.style.opacity = '1';
          }, 150);
        }
        if (pName) pName.textContent = data.name;
        if (pYears) pYears.textContent = data.years;
        if (pDesc) {
          pDesc.innerHTML = data.desc.map(d => `<p>${d}</p>`).join('');
        }
        if (pWarning) pWarning.textContent = data.warning;
      }
    });
  });

  // Scroll Reveal Observer
  const scrollTargets = container.querySelectorAll('.trailer-scroll-reveal');
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  scrollTargets.forEach(el => scrollObserver.observe(el));

  setTimeout(() => {
    scrollTargets.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add('revealed');
      }
    });
    initTrailerScrollTriggers();
  }, 100);
}
