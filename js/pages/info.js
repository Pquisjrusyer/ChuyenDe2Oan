/* ============================================
   OAN Horror Game — Info / Thông Tin Page (Figma 928:2008)
   ============================================ */

import { initInfoScrollTriggers } from '../utils/smooth-scroll.js';
import { getReadySectionHTML } from '../components/ready-section.js';

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
    'hua-ba-tuong': {
      name: 'HỨA BÁ TƯỜNG',
      years: '(1901 - 1960)',
      role: 'Tam công tử',
      avatar: './assets/portrait-hua-ba-tuong.jpg',
      desc: [
        'Người trông nom hầm rượu và kho văn tự cổ.',
        'Mắc chứng hoang tưởng sau đêm nguyệt thực 1950.',
        'Mất tích bí ẩn trong khuôn viên dinh thự.'
      ],
      warning: 'Nghe thấy những tiếng thì thầm dưới lòng đất.'
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
    'hua-van-cuong': {
      name: 'HỨA VĂN CƯỜNG',
      years: '(1928 - 1998)',
      role: 'Cháu đích tôn',
      avatar: './assets/portrait-hua-van-cuong.jpg',
      desc: [
        'Cháu nội cụ Hứa Bá Thắng.',
        'Tham gia cải tạo lại khu nhà kho phía Đông.',
        'Phát hiện nhật ký phong ấn bị xé rách.'
      ],
      warning: 'Người tìm thấy cổ vật đầu tiên.'
    },
    'nguyen-thi-mai': {
      name: 'NGUYỄN THỊ MAI',
      years: '(1932 - ?)',
      role: 'Dâu thứ',
      avatar: './assets/portrait-nguyen-thi-mai.jpg',
      desc: [
        'Vợ của Hứa Văn Cường.',
        'Mất tích bí ẩn trong chuyến đi rừng năm 1960.',
        'Hồ sơ lưu trữ bị nhòe mực và vấy bẩn kỳ lạ.'
      ],
      warning: 'Bí mật mất tích chưa từng được giải đáp.'
    },
    'le-thi-phuong': {
      name: 'LÊ THỊ PHƯỢNG',
      years: '(1935 - ?)',
      role: 'Dâu trưởng',
      avatar: './assets/portrait-le-thi-phuong.jpg',
      desc: [
        'Phu nhân của Hứa Minh Đức.',
        'Nắm giữ chùm chìa khóa phòng thờ kín.',
        'Người cuối cùng bước ra khỏi căn phòng bí mật.'
      ],
      warning: 'Người cất giữ di thư cuối cùng.'
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
    },
    'unknown-descendant': {
      name: 'HẬU DUỆ VÔ DANH',
      years: '(1969 - ?)',
      role: 'Hậu duệ bí ẩn',
      avatar: './assets/portrait-unknown-descendant.jpg',
      desc: [
        'Hồ sơ điều tra mật của cảnh sát Sài Gòn - Chợ Lớn.',
        'Đối tượng chưa xác định danh tính.',
        'Được cho là người thừa kế duy nhất mang ấn ký dòng họ.'
      ],
      warning: 'Chìa khóa mở ra sự thật cuối cùng.'
    }
  };

  container.innerHTML = `
    <div class="figma-info-page" data-node-id="928:2008">
      
      <!-- ========================================================
           BACKGROUND AMBIENT TEXTURE LAYER (Figma 954:397644)
           ======================================================== -->
      <div class="info-page-bg-ambient" data-node-id="954:397644">
        <div class="info-bg-texture-layer info-bg-tex-1" data-node-id="954:397641">
          <img src="./assets/ac40410bbfc293811b934b94c7f9b725d661badc.png" alt="" />
        </div>
        <div class="info-bg-texture-layer info-bg-tex-2" data-node-id="954:397642">
          <img src="./assets/ac40410bbfc293811b934b94c7f9b725d661badc.png" alt="" />
        </div>
        <div class="info-bg-texture-layer info-bg-tex-3" data-node-id="954:397643">
          <img src="./assets/ac40410bbfc293811b934b94c7f9b725d661badc.png" alt="" />
        </div>
        <div class="info-page-bg-overlay"></div>
      </div>

      <!-- ========================================================
           1. HERO SECTION: GIA PHẢ HỌ HỨA INVESTIGATION BOARD (954:397856)
           ======================================================== -->
      <section class="info-hero-board-section" data-node-id="954:397856">
        <div class="info-board-container">
          
          <!-- Board Interactive Canvas Frame -->
          <div class="info-board-canvas" data-node-id="849:765">
            
            <div class="info-board-canvas-inner">
              <img src="./assets/info-hero-board.png" alt="Gia Phả Họ Hứa" class="info-board-bg-texture" />
              
              <!-- OLD SCRATCHED MIRROR / GLASS REFLECTION ON 2 SIDES (Figma 954:397857) -->
              <div class="info-hero-glass-left">
                <img src="./assets/antique-scratched-mirror-overlay.jpg" alt="" class="glass-flank-img" />
              </div>
              <div class="info-hero-glass-right">
                <img src="./assets/antique-scratched-mirror-overlay.jpg" alt="" class="glass-flank-img" />
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

              <!-- All 12 Interactive Character Hotspots on Board -->
              <div class="info-character-hotspots">
                <!-- Row 1: Patriarchs -->
                <button class="char-hotspot-btn" data-char="hua-tong-chi" style="top: 23.4%; left: 38.9%;" title="Hứa Tông Chi (1868 - 1935)"></button>
                <button class="char-hotspot-btn" data-char="tran-thi-nga" style="top: 23.4%; left: 55.0%;" title="Trần Thị Nga (1870 - 1942)"></button>

                <!-- Row 2: Generation 2 -->
                <button class="char-hotspot-btn" data-char="hua-ba-thang" style="top: 40.4%; left: 27.8%;" title="Hứa Bá Thắng (1898 - 1972)"></button>
                <button class="char-hotspot-btn" data-char="hua-ba-tuong" style="top: 40.4%; left: 41.0%;" title="Hứa Bá Tường (1901 - 1960)"></button>
                <button class="char-hotspot-btn" data-char="hua-ba-kien" style="top: 40.4%; left: 54.4%;" title="Hứa Bá Kiên (1905 - 1984)"></button>
                <button class="char-hotspot-btn" data-char="hua-thi-lan" style="top: 40.4%; left: 67.6%;" title="Hứa Thị Lan (1908 - 1991)"></button>

                <!-- Row 3: Generation 3 -->
                <button class="char-hotspot-btn" data-char="hua-van-cuong" style="top: 59.5%; left: 24.8%;" title="Hứa Văn Cường (1928 - 1998)"></button>
                <button class="char-hotspot-btn" data-char="nguyen-thi-mai" style="top: 59.5%; left: 38.0%;" title="Nguyễn Thị Mai (1932 - ?)"></button>
                <button class="char-hotspot-btn active" data-char="hua-minh-duc" style="top: 59.5%; left: 52.6%;" title="Hứa Minh Đức (1930 - 2002)"></button>
                <button class="char-hotspot-btn" data-char="le-thi-phuong" style="top: 59.5%; left: 65.8%;" title="Lê Thị Phượng (1935 - ?)"></button>

                <!-- Row 4: Generation 4 -->
                <button class="char-hotspot-btn" data-char="hua-an" style="top: 79.7%; left: 38.9%;" title="Hứa An (1965 - 1985)"></button>
                <button class="char-hotspot-btn" data-char="unknown-descendant" style="top: 79.7%; left: 52.0%;" title="? (1969 - ?)"></button>
              </div>
            </div>

            <!-- Page Title Overlay (Left Center on Desktop, Below Board on Mobile) -->
            <div class="info-hero-title-overlay trailer-scroll-reveal trailer-reveal-fade-up">
              <h1 class="info-hero-main-title" data-node-id="954:413380">THÔNG TIN</h1>
              <p class="info-hero-sub-desc" data-node-id="954:413381">
                Khám phá thế giới của OÁN — Nơi những lời nguyền cổ xưa trỗi dậy từ bóng tối của lịch sử Việt Nam.
              </p>
            </div>

            <!-- Character Profile Sidebar (Right Side on Desktop, Below Title on Mobile) -->
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
           2. 4 STORY SCENES PHOTO GALLERY GRID (957:413974)
           ======================================================== -->
      <section class="info-story-gallery-section" data-node-id="957:413974">
        
        <!-- Deep Blood Red Ambient Background (957:413986) -->
        <div class="info-story-bg-layer" data-node-id="957:413986">
          <div class="info-story-bg-vignette"></div>
        </div>

        <!-- Broken Glass & Scratch Effects on the 2 Sides (Figma 957:413986) -->
        <div class="info-story-glass-left">
          <img src="./assets/antique-scratched-mirror-overlay.jpg" alt="" class="glass-flank-img" />
        </div>
        <div class="info-story-glass-right">
          <img src="./assets/antique-scratched-mirror-overlay.jpg" alt="" class="glass-flank-img" />
        </div>

        <div class="container">
          <div class="info-story-gallery-grid" data-node-id="957:429546">
            
            <!-- Card 1: 0e5d792e9bc9ba502ded578888d8321bdf366431.png (Top-Left: Bàn thờ tổ tiên & nén nhang - 957:413975) -->
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

            <!-- Card 2: 73240ed6730c1a47cf16f08d416c9d0f49066a7f.png (Top-Right: Căn phòng áo dài - 957:429513) -->
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

            <!-- Card 3: b76c78172d6e968ff30b0ac750540bc810f0b636.png (Bottom-Left: Hành lang u ám - 957:429535) -->
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

            <!-- Card 4: 5cd0da7475fc2d3e62605f4cd60ff8d2fcb7546f.png (Bottom-Right: Màn hình máy quay - 957:429524) -->
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
           3. STORY HIGHLIGHT FEATURE: BI KỊCH CỦA NHÀ HỨA (957:429512)
           ======================================================== -->
      <section class="info-feature-story-section" data-node-id="957:429512">
        <div class="feature-story-bg-layer">
          <div class="feature-story-bg-overlay"></div>
        </div>

        <!-- Broken Glass & Scratch Effects on 2 Sides -->
        <div class="info-section-glass-left">
          <img src="./assets/antique-scratched-mirror-overlay.jpg" alt="" class="glass-flank-img" />
        </div>
        <div class="info-section-glass-right">
          <img src="./assets/antique-scratched-mirror-overlay.jpg" alt="" class="glass-flank-img" />
        </div>

        <div class="container">
          
          <!-- Feature Narrative Content Block (Left Aligned 957:429611) -->
          <div class="feature-story-narrative-container trailer-scroll-reveal trailer-reveal-fade-up" data-node-id="957:429611">
            
            <!-- Tag Section: Nổi bật trong cốt truyện (957:429588) -->
            <div class="feature-tag-badge-left" data-node-id="957:429588">
              <img src="./assets/07092503416c73ca4af4965cb97a13f4c989250d.png" alt="" class="feature-tag-bg-img" />
              <div class="feature-tag-text-wrap">
                <h2 class="feature-tag-title-bold" data-node-id="957:429591">Nổi bật trong
cốt truyện</h2>
              </div>
            </div>

            <h2 class="feature-story-title" data-node-id="957:429595">
              BI KỊCH CỦA<br/>NHÀ HỨA
            </h2>
            <p class="feature-story-desc" data-node-id="957:429597">
              Dòng họ Hứa từng là biểu tượng của sự phồn thịnh, cho đến khi<br/>một giao kèo hắc ám được thực hiện...
            </p>
            
            <!-- Red Horror CTA Button: ĐỌC TIẾP (957:429599 / 906:1550) -->
            <a href="#storyline" class="btn-horror-cta-readmore" data-node-id="957:429599">
              <div class="cta-frame-parts">
                <div class="cta-fp1"><img src="./assets/105ebc7cda031fdb485695b18a341cec252f1d95.png" alt="" /></div>
                <div class="cta-fp2" style="background-image: url('./assets/a1b7e3991a46b5a64f1f7dac3536b09a9e87a8ba.png');"></div>
                <div class="cta-fp3"><img src="./assets/0d6b9966ff2827a216126f97de3fae66e8b0f69d.png" alt="" /></div>
                <div class="cta-fp4" style="background-image: url('./assets/a52a7c4b8dc8beffb2f5577f0501b16b1cfce647.png');"></div>
                <div class="cta-fp5"><img src="./assets/18c99e59fbe5fb1f1a0cf0ff28f9c309e0b87822.png" alt="" /></div>
              </div>
              <div class="cta-inner-bg">
                <img src="./assets/ea8df93482c54ccfe7b61d0a530fea954eb54fd3.png" class="cta-rect-texture" alt="" />
              </div>
              <div class="cta-content">
                <span class="cta-caption">ĐỌC TIẾP</span>
              </div>
              <div class="cta-glow-3"></div>
              <div class="cta-glow-2"></div>
              <div class="cta-glow-1"></div>
            </a>
          </div>

        </div>
      </section>

      <!-- ========================================================
           4. LATEST NEWS & UPDATES SECTION (957:429612)
           ======================================================== -->
      <section class="info-updates-section" data-node-id="957:429612">
        
        <!-- Broken Glass & Scratch Effects on 2 Sides -->
        <div class="info-section-glass-left">
          <img src="./assets/antique-scratched-mirror-overlay.jpg" alt="" class="glass-flank-img" />
        </div>
        <div class="info-section-glass-right">
          <img src="./assets/antique-scratched-mirror-overlay.jpg" alt="" class="glass-flank-img" />
        </div>

        <div class="container">
          
          <!-- Top Row: Link Xem tất cả tin tức & Tag Badge Cập nhật mới nhất -->
          <div class="updates-header-flex-row">
            <a href="#community" class="updates-view-all-link" data-node-id="957:429767">
              Xem tất cả tin tức
            </a>
            
            <div class="updates-tag-badge" data-node-id="957:429678">
              <img src="./assets/a8296e45104dffbbccc5a21543cae16549fa6b7c.png" alt="" class="updates-tag-bg-img" />
              <div class="updates-tag-content">
                <h2 class="updates-tag-heading-bold" data-node-id="957:429681">Cập nhật mới nhất</h2>
                <p class="updates-tag-subheading" data-node-id="957:429682">Cập nhật cuối</p>
              </div>
            </div>
          </div>

          <!-- 3 News Cards Grid (Figma 957:429612) -->
          <div class="info-news-cards-grid">
            
            <!-- News Card 1 (957:429673) -->
            <div class="info-news-card trailer-scroll-reveal trailer-reveal-fade-up delay-100" data-node-id="957:429673">
              <div class="news-card-grunge-overlay">
                <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" />
              </div>
              <div class="news-card-photo-box" data-node-id="957:429624">
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
              <a href="#news-detail" class="news-card-cta-btn" data-node-id="957:429654">
                <div class="horror-frame-corners">
                  <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="corner-svg-left" />
                  <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="corner-svg-right" />
                </div>
                <div class="news-cta-body">
                  <span class="news-cta-text">Chi tiết</span>
                </div>
              </a>
            </div>

            <!-- News Card 2 (957:429715) -->
            <div class="info-news-card trailer-scroll-reveal trailer-reveal-fade-up delay-200" data-node-id="957:429715">
              <div class="news-card-grunge-overlay">
                <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" />
              </div>
              <div class="news-card-photo-box">
                <img src="./assets/b35a622df1a54e2656534504552ee87ce40a437c.png" alt="Hầm Mộ Phía Tây" class="news-photo-img" />
              </div>
              <div class="news-card-category-date">
                15.10.2024 / PHÁT TRIỂN
              </div>
              <h3 class="news-card-title-bold">
                TIẾT LỘ MÔI TRƯỜNG: HẦM MỘ PHÍA TÂY
              </h3>
              <p class="news-card-desc-text">
                Khám phá quá trình thiết kế âm thanh cho khu vực hầm mộ đầy u ám.
              </p>
              <a href="#news-detail" class="news-card-cta-btn">
                <div class="horror-frame-corners">
                  <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="corner-svg-left" />
                  <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="corner-svg-right" />
                </div>
                <div class="news-cta-body">
                  <span class="news-cta-text">Chi tiết</span>
                </div>
              </a>
            </div>

            <!-- News Card 3 (957:429757) -->
            <div class="info-news-card trailer-scroll-reveal trailer-reveal-fade-up delay-300" data-node-id="957:429757">
              <div class="news-card-grunge-overlay">
                <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" />
              </div>
              <div class="news-card-photo-box">
                <img src="./assets/b35a622df1a54e2656534504552ee87ce40a437c.png" alt="Hầm Mộ Phía Tây" class="news-photo-img" />
              </div>
              <div class="news-card-category-date">
                15.10.2024 / PHÁT TRIỂN
              </div>
              <h3 class="news-card-title-bold">
                TIẾT LỘ MÔI TRƯỜNG: HẦM MỘ PHÍA TÂY
              </h3>
              <p class="news-card-desc-text">
                Khám phá quá trình thiết kế âm thanh cho khu vực hầm mộ đầy u ám.
              </p>
              <a href="#news-detail" class="news-card-cta-btn">
                <div class="horror-frame-corners">
                  <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="corner-svg-left" />
                  <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="corner-svg-right" />
                </div>
                <div class="news-cta-body">
                  <span class="news-cta-text">Chi tiết</span>
                </div>
              </a>
            </div>

          </div>

        </div>
      </section>

      <!-- ========================================================
           5. READY SECTION: BẠN ĐÃ SẴN SÀNG BƯỚC VÀO NHÀ HỨA? (1363:86758)
           ======================================================== -->
      ${getReadySectionHTML()}

    </div>
  `;

  // Interactive Family Tree Hotspot Selection (All 12 Nodes)
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
    initInfoScrollTriggers();
  }, 100);
}
