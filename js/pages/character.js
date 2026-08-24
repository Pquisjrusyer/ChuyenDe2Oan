/* ========================================================
   OAN HORROR GAME — NHÂN VẬT / CHARACTER PAGE (Figma Node 1301:82193)
   ======================================================== */

import { getReadySectionHTML } from '../components/ready-section.js';
import { CharacterModelViewer } from '../utils/model-viewer.js';

export const CHARACTERS_DATA = {
  'hua-an': {
    id: 'hua-an',
    role: 'NHÂN VẬT TRỌNG TÂM',
    name: 'HỨA AN',
    class: 'NGƯỜI KẾ THỪA',
    quote: '“Lời hứa này sẽ theo ta đến tận cùng của sự thật.”',
    age: '26',
    height: '1.75m',
    hometown: 'Sài Gòn - Đà Lạt',
    tags: ['KẾ THỪA', 'HUYẾT THỐNG', 'BÍ ẨN'],
    summary: 'Hậu duệ trực hệ của dòng tộc họ Hứa. Trở về ngôi biệt thự cổ hoang phế sau khi nhận được bức thư tuyệt mệnh kỳ lạ, An phải đối mặt với những lời nguyền gia tộc khủng khiếp suốt nửa thế kỷ.',
    photo: './assets/4d3ddb8173a39435c6a27c413da7353cc34c65c5.png',
    modelPhoto: './assets/86c04c0ff795955f9835f289c3115761aa360583.png',
    model3d: './models/minh.glb',
  },
  minh: {
    id: 'minh',
    role: 'NHÂN VẬT CHÍNH',
    name: 'MINH',
    class: 'BLOGGER',
    quote: '“Sự thật là phải khám phá cho hết chứ”',
    age: '24',
    height: '1.65m',
    hometown: 'Hà Nội',
    tags: ['SINH VIÊN', 'BLOGGER', 'CONTENT'],
    summary: 'Là một sinh viên đam mê phiêu lưu và săn tìm các hiện tượng siêu nhiên, Minh quyết định cùng nhóm bạn khám phá dinh thự cổ Nhà Họ Hứa để quay vlog, không ngờ lại vướng vào một vòng xoáy nguyền rủa đen tối.',
    photo: './assets/f17bf481c11882705bf65d21a504734bf8854437.png',
    modelPhoto: './assets/86c04c0ff795955f9835f289c3115761aa360583.png',
    model3d: './models/minh.glb',
  },
  khang: {
    id: 'khang',
    role: 'BẠN ĐỒNG HÀNH',
    name: 'KHANG',
    class: 'SINH VIÊN KỸ THUẬT',
    quote: '“Bạn của Minh, cùng Minh đi khám phá”',
    age: '24',
    height: '1.72m',
    hometown: 'Hải Phòng',
    tags: ['SINH VIÊN', 'KỸ THUẬT', 'ĐỒNG HÀNH'],
    summary: 'Người bạn thân cẩn trọng và điềm tĩnh của Minh. Khang chịu trách nhiệm điều khiển các thiết bị đo lường và camera hồng ngoại trong suốt chuyến thám hiểm định mệnh.',
    photo: './assets/2ff2f842537b4557c87e171d1175da9e0045cdb8.png',
    modelPhoto: './assets/cd9b1f2516d0abfff014648176c4548e7b6c9fb5.png',
    model3d: './models/khang.glb',
  },
  'hua-van-loc': {
    id: 'hua-van-loc',
    role: 'CHỦ NHÂN HỨA GIA',
    name: 'HỨA VĂN LỘC',
    class: 'TRƯỞNG TỘC',
    quote: '“Gia trưởng, quyền lực, ám ảnh việc bảo vệ dòng họ”',
    age: '58',
    height: '1.70m',
    hometown: 'Sài Gòn xưa',
    tags: ['GIA TRƯỞNG', 'QUYỀN LỰC', 'HỨA GIA'],
    summary: 'Người đứng đầu gia tộc họ Hứa giàu có nức tiếng một thời. Sự gia trưởng và cuồng tín bảo vệ danh dự dòng tộc đã đẩy gia đình vào thảm kịch kinh hoàng không lối thoát.',
    photo: './assets/9a458f3a1eff44dee77b77385682efd57863dbae.png',
    modelPhoto: './assets/2a44e3bf4056cbb11ca99dcd98fd7f33752953a4.png',
    model3d: './models/cha.glb',
  },
  'hua-ngoc': {
    id: 'hua-ngoc',
    role: 'OÁN HỒN NỮ',
    name: 'HỨA NGỌC',
    class: 'TIỂU THƯ HỨA GIA',
    quote: '“người phụ nữ mặc cảm tội lỗi suốt 20 năm”',
    age: '42 (Bị nhốt lúc 22)',
    height: '1.58m',
    hometown: 'Sài Gòn xưa',
    tags: ['BI KỊCH', 'TỘI LỖI', 'OÁN HỒN'],
    summary: 'Tiểu thư con gái gia tộc họ Hứa bị giam cầm trong căn phòng áp mái suốt nhiều năm sau khi mắc bệnh lạ, mang theo oán niệm sâu nặng vương vấn khắp tòa dinh thự cổ.',
    photo: './assets/286cec571aa8011cf80113fa5908c160d2cc1808.png',
    modelPhoto: './assets/46a840ad8acc7ebfefbf2dfee2e7059f3440160a.png',
    model3d: './models/ngoc.glb',
  }
};

export async function renderCharacter(container) {
  container.innerHTML = `
    <div class="char-page-figma" data-node-id="1301:82193">
      
      <!-- Ambient Background Layer -->
      <div class="char-bg-ambient">
        <div class="char-grunge-overlay"></div>
      </div>

      <!-- ========================================================
           1. HERO SECTION: HỨA AN (1301:82297)
           ======================================================== -->
      <section class="char-hero-section" data-node-id="1301:82297">
        
        <!-- Background 1: 602dec43... (1322:81648) -->
        <div class="char-hero-bg-media" data-node-id="1322:81648">
          <img src="./assets/81b10c2dd1eb6e78408e5818a088176c9cd7536b.png" alt="" />
        </div>

        <!-- Background 2: Grunge Texture (1315:78897) -->
        <div class="char-hero-bg-grunge" data-node-id="1315:78897">
          <img src="./assets/ac40410bbfc293811b934b94c7f9b725d661badc.png" alt="" />
        </div>

        <!-- Bottom Fade Gradient (1332:81813) -->
        <div class="char-hero-bottom-fade" data-node-id="1332:81813"></div>

        <div class="char-hero-grid" data-node-id="1315:78895">
          
          <!-- Left: Hero Text & Info (1307:82298) -->
          <div class="char-hero-content trailer-scroll-reveal trailer-reveal-left" data-node-id="1307:82298">
            <span class="char-hero-role" data-node-id="1307:82300">NHÂN VẬT CHÍNH</span>
            
            <h1 class="char-hero-name" data-node-id="1307:82302">HỨA AN</h1>

            <div class="char-hero-quote-box" data-node-id="1307:82303">
              <p class="char-hero-quote" data-node-id="1307:82304">
                "LỜI HỨA NÀY SẼ THEO TA ĐẾN<br />TẬN CÙNG CỦA SỰ THẬT."
              </p>
            </div>

            <!-- Action Buttons (1307:82388) -->
            <div class="char-hero-actions" data-node-id="1307:82388">
              
              <!-- Button 1: Xem trailer (1307:82311) -->
              <a href="#trailer" class="char-hero-svg-btn" data-node-id="1307:82311" title="Xem trailer">
                <img src="./assets/btn_xem_trailer.svg" alt="Xem trailer" />
              </a>

              <!-- Button 2: Khám phá câu chuyện (1307:82329) -->
              <button type="button" class="char-hero-svg-btn" id="btnOpenHuaAnDossier" data-node-id="1307:82329" title="Khám phá câu chuyện">
                <img src="./assets/btn_kham_pha_cau_chuyen.svg" alt="Khám phá câu chuyện" />
              </button>

            </div>
          </div>

          <!-- Right: Hero Portrait Image 69 (1315:78893) -->
          <div class="char-hero-portrait-wrap trailer-scroll-reveal trailer-reveal-right" data-node-id="1315:78893">
            <img src="./assets/4d3ddb8173a39435c6a27c413da7353cc34c65c5.png" alt="Hứa An" class="char-hero-image-69" />
          </div>

        </div>
      </section>

      <!-- ========================================================
           2. RELATED CHARACTERS SECTION (1307:82392)
           ======================================================== -->
      <section class="char-list-section" data-node-id="1307:82392">
        
    

        <!-- Background Grunge Layer (1332:81777) -->
        <div class="char-list-bg-grunge" data-node-id="1332:81777">
          <img src="./assets/ac40410bbfc293811b934b94c7f9b725d661badc.png" alt="" />
        </div>

        <div class="char-list-content-container">
          <!-- Header (1332:81765) -->
          <div class="char-list-header trailer-scroll-reveal" data-node-id="1332:81765">
            <span class="char-list-tag" data-node-id="1332:81764">NHÂN VẬT</span>
            <h2 class="char-list-heading" data-node-id="1332:81763">CÁC NHÂN VẬT LIÊN QUAN</h2>
            <p class="char-list-sub" data-node-id="1332:81766">Những nhân vật bị cuốn vào vòng xoáy bí ẩn</p>
          </div>

          <!-- 4 Character Cards Grid (1332:82338) -->
          <div class="char-cards-grid" data-node-id="1332:82338">
          
          <!-- Card 1: MINH (1332:82290) -->
          <div class="char-card-item trailer-scroll-reveal" data-char-id="minh" data-node-id="1332:82290" title="Nhấn để xem hồ sơ mật Minh">
            <div class="char-card-visual">
              <img src="./assets/nv_minh.svg" alt="Thẻ nhân vật Minh" class="char-card-base-img" />
              <div class="char-card-drawer">
                <img src="./assets/nv_drawer_texture_only.svg" class="char-drawer-bg-img" alt="" />
                <div class="char-drawer-content">
                  <span class="char-drawer-role">Nhân vật chính</span>
                  <h3 class="char-drawer-name">MINH</h3>
                  <p class="char-drawer-sub">Blogger - Người khám phá</p>
                  <p class="char-drawer-desc">Một người đam mê khám phá để lấy ý tưởng làm content</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 2: KHANG (1332:82423) -->
          <div class="char-card-item trailer-scroll-reveal" data-char-id="khang" data-node-id="1332:82423" title="Nhấn để xem hồ sơ mật Khang">
            <div class="char-card-visual">
              <img src="./assets/nv_khang.svg" alt="Thẻ nhân vật Khang" class="char-card-base-img" />
              <div class="char-card-drawer">
                <img src="./assets/nv_drawer_texture_only.svg" class="char-drawer-bg-img" alt="" />
                <div class="char-drawer-content">
                  <span class="char-drawer-role">Bạn đồng hành</span>
                  <h3 class="char-drawer-name">KHANG</h3>
                  <p class="char-drawer-sub">Sinh viên kỹ thuật</p>
                  <p class="char-drawer-desc">Cẩn trọng, am hiểu thiết bị ghi hình và đo đạc tần số tâm linh</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 3: HỨA VĂN LỘC (1332:82435) -->
          <div class="char-card-item trailer-scroll-reveal" data-char-id="hua-van-loc" data-node-id="1332:82435" title="Nhấn để xem hồ sơ mật Hứa Văn Lộc">
            <div class="char-card-visual">
              <img src="./assets/nv_loc.svg" alt="Thẻ nhân vật Hứa Văn Lộc" class="char-card-base-img" />
              <div class="char-card-drawer">
                <img src="./assets/nv_drawer_texture_only.svg" class="char-drawer-bg-img" alt="" />
                <div class="char-drawer-content">
                  <span class="char-drawer-role">Trưởng tộc Hứa Gia</span>
                  <h3 class="char-drawer-name">LỘC</h3>
                  <p class="char-drawer-sub">Chủ nhân dinh thự</p>
                  <p class="char-drawer-desc">Gia trưởng, quyền lực, ám ảnh bởi việc bảo vệ danh dự dòng tộc</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 4: HỨA NGỌC (1332:82447) -->
          <div class="char-card-item trailer-scroll-reveal" data-char-id="hua-ngoc" data-node-id="1332:82447" title="Nhấn để xem hồ sơ mật Hứa Ngọc">
            <div class="char-card-visual">
              <img src="./assets/nv_ngoc.svg" alt="Thẻ nhân vật Hứa Ngọc" class="char-card-base-img" />
              <div class="char-card-drawer">
                <img src="./assets/nv_drawer_texture_only.svg" class="char-drawer-bg-img" alt="" />
                <div class="char-drawer-content">
                  <span class="char-drawer-role">Oán hồn nữ</span>
                  <h3 class="char-drawer-name">NGỌC</h3>
                  <p class="char-drawer-sub">Tiểu thư Hứa Gia</p>
                  <p class="char-drawer-desc">Người phụ nữ mang mặc cảm tội lỗi và oán niệm suốt 20 năm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================================
           3. CONCEPT ART SECTION (1332:81848)
           ======================================================== -->
      <section class="char-concept-section" data-node-id="1332:81848">
        
        <!-- Base Red Atmospheric Background -->
        <div class="char-concept-bg-media">
          <img src="./assets/81b10c2dd1eb6e78408e5818a088176c9cd7536b.png" alt="" />
        </div>

        <!-- Background Grunge Layer (1332:81864) -->
        <div class="char-concept-bg-grunge" data-node-id="1332:81864">
          <img src="./assets/ac40410bbfc293811b934b94c7f9b725d661badc.png" alt="" />
        </div>

        <!-- Top Transition Gradient (1332:81868) -->
        <div class="char-concept-top-fade" data-node-id="1332:81868"></div>

        <!-- Bottom Transition Gradient -->
        <div class="char-concept-bottom-fade"></div>

        <div class="char-concept-container">
          
          <!-- Concept Header Horror Frame (1332:81853) -->
          <div class="char-concept-header-wrap trailer-scroll-reveal trailer-reveal-scale" data-node-id="1332:81853">
            <div class="char-concept-horror-frame" data-node-id="1332:81855">
              <img src="./assets/5330b79b9e3ec9f5d8e099674f3b9cd251731b0b.svg" alt="" class="concept-corner-left" />
              <h2 class="char-concept-title" data-node-id="1332:81854">CONCEPT</h2>
              <img src="./assets/2a8d91cd956a7b707d91ed3faed539513ed626cf.svg" alt="" class="concept-corner-right" />
            </div>
          </div>

          <!-- Concept Art Grid Structure (1332:82136) -->
          <div class="char-concept-rows" data-node-id="1332:82136">
            
            <!-- Row 1: 3 Medium Cards (1332:82118) -->
            <div class="char-concept-row row-3-cols" data-node-id="1332:82118">
              <div class="char-concept-card card-3 trailer-scroll-reveal trailer-reveal-left" data-node-id="1332:82119">
                <img src="./assets/2ddc9b279685ffe3617af903449f6f6ae92dc214.png" alt="Concept Art 1" />
              </div>
              <div class="char-concept-card card-3 trailer-scroll-reveal trailer-reveal-fade-up" data-node-id="1332:82121">
                <img src="./assets/f02483b1b7f8d5f1db09640a5ad25c99e1170184.png" alt="Concept Art 2" />
              </div>
              <div class="char-concept-card card-3 trailer-scroll-reveal trailer-reveal-right" data-node-id="1332:82123">
                <img src="./assets/716c511c460f8c7b5f5c7a97d7cda134e2236ac4.png" alt="Concept Art 3" />
              </div>
            </div>

            <!-- Row 2: 2 Wide Cards (1332:82125) -->
            <div class="char-concept-row row-2-cols" data-node-id="1332:82125">
              <div class="char-concept-card card-2 trailer-scroll-reveal trailer-reveal-left" data-node-id="1332:82126">
                <img src="./assets/6a0df64a3ab46e239afd98ad3edcb0ca5f0ea710.png" alt="Concept Art 4" />
              </div>
              <div class="char-concept-card card-2 trailer-scroll-reveal trailer-reveal-right" data-node-id="1332:82128">
                <img src="./assets/ffe2275f92abce276fcf0c8024c69730714f75cd.png" alt="Concept Art 5" />
              </div>
            </div>

            <!-- Row 3: 2 Wide Cards (1332:82130) -->
            <div class="char-concept-row row-2-cols" data-node-id="1332:82130">
              <div class="char-concept-card card-2 trailer-scroll-reveal trailer-reveal-left" data-node-id="1332:82131">
                <img src="./assets/5ef898942f6c3fe61d5c383c503a097913cfba7b.png" alt="Concept Art 6" />
              </div>
              <div class="char-concept-card card-2 trailer-scroll-reveal trailer-reveal-right" data-node-id="1332:82133">
                <img src="./assets/2d414018e235dec3a8d72460bf616eb216e9c59e.png" alt="Concept Art 7" />
              </div>
            </div>

          </div>

        </div>
      </section>

      <!-- ========================================================
           4. READY SECTION: BẠN ĐÃ SẴN SÀNG BƯỚC VÀO NHÀ HỨA? (1363:86758)
           ======================================================== -->
      ${getReadySectionHTML()}

      <!-- ========================================================
           5. CONFIDENTIAL DOSSIER MODAL (Figma 1332:83953/83955/84183/84411)
           ======================================================== -->
      <div class="char-modal-backdrop" id="charModalBackdrop">
        <div class="char-modal-popup" id="charModalBox" data-node-id="1332:83807">

          <!-- Grunge texture overlay (color-dodge) -->
          <img src="./assets/grunge-texture-background 1.png" alt="" class="char-modal-grunge-overlay" aria-hidden="true" />
          <!-- Dark texture overlay (multiply) -->
          <img src="./assets/78042 1.png" alt="" class="char-modal-dark-overlay" aria-hidden="true" />

          <!-- Close Button -->
          <button type="button" class="char-modal-close-btn" id="charModalCloseBtn" aria-label="Đóng hồ sơ">
            <img src="./assets/0e2ea177fe6d2a5bcc657e9367a6fe7728bd5868.svg" alt="" class="char-modal-close-icon" />
          </button>

          <!-- LEFT COLUMN: Character Info -->
          <div class="char-modal-col-left" data-node-id="1332:82463">
            <div class="char-modal-role-wrap">
              <span class="char-modal-role" id="charModalRole">NHÂN VẬT CHÍNH</span>
            </div>
            <div class="char-modal-name-wrap">
              <h2 class="char-modal-name" id="charModalName">MINH</h2>
            </div>
            <div class="char-modal-class-wrap">
              <span class="char-modal-class" id="charModalClass">BLOGGER</span>
            </div>
            <div class="char-modal-quote-wrap">
              <p class="char-modal-quote" id="charModalQuote">“Sự thật là phải khám phá cho hết chứ”</p>
            </div>
            <div class="char-modal-buttons">
              <a href="#storyline" class="char-modal-btn" data-node-id="1332:82473">
                <div class="char-modal-btn-decor-left" aria-hidden="true">
                  <img src="./assets/5330b79b9e3ec9f5d8e099674f3b9cd251731b0b.svg" alt="" />
                </div>
                <div class="char-modal-btn-field">
                  <span class="char-modal-btn-text">KHÁM PHÁ</span>
                  <div class="char-modal-btn-glow"></div>
                </div>
                <div class="char-modal-btn-decor-right" aria-hidden="true">
                  <img src="./assets/2a8d91cd956a7b707d91ed3faed539513ed626cf.svg" alt="" />
                </div>
              </a>
              <a href="#trailer" class="char-modal-btn" data-node-id="1332:82474">
                <div class="char-modal-btn-decor-left" aria-hidden="true">
                  <img src="./assets/5330b79b9e3ec9f5d8e099674f3b9cd251731b0b.svg" alt="" />
                </div>
                <div class="char-modal-btn-field">
                  <span class="char-modal-btn-text">XEM TRAILER</span>
                  <div class="char-modal-btn-glow"></div>
                </div>
                <div class="char-modal-btn-decor-right" aria-hidden="true">
                  <img src="./assets/2a8d91cd956a7b707d91ed3faed539513ed626cf.svg" alt="" />
                </div>
              </a>
            </div>
          </div>

          <!-- CENTER COLUMN: Character 3D Model Viewer -->
          <div class="char-modal-col-center" id="charModal3DContainer" data-node-id="1317:81386">
            <div class="char-modal-portrait-gradient"></div>
            <img src="./assets/2ff2f842537b4557c87e171d1175da9e0045cdb8.png" alt="" class="char-modal-portrait-frame" aria-hidden="true" />
            
            <!-- 3D Loading Spinner -->
            <div class="char-modal-3d-loading" id="charModal3DLoading">
              <div class="char-modal-3d-spinner"></div>
              <span>ĐANG TẢI MÔ HÌNH 3D...</span>
            </div>

            <!-- 3D Hint -->
            <div class="char-modal-3d-hint">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
              </svg>
              <span>XOAY 360° ĐỂ QUAN SÁT</span>
            </div>
          </div>

          <!-- RIGHT COLUMN: Stats & Profile -->
          <div class="char-modal-col-right" data-node-id="1332:82476">
            <!-- THÔNG TIN CƠ BẢN Panel -->
            <div class="char-modal-panel char-modal-panel-stats" data-node-id="1317:81244">
              <img src="./assets/210b7bdc2d782512cbf05fdef7725eb285d15d58.png" alt="" class="char-modal-panel-bg" aria-hidden="true" />
              <div class="char-modal-panel-content">
                <div class="char-modal-panel-heading">
                  <span>THÔNG TIN CƠ BẢN</span>
                </div>
                <div class="char-modal-stat-row">
                  <span class="char-modal-stat-label">TUỔI</span>
                  <span class="char-modal-stat-val" id="charModalAge">24</span>
                </div>
                <div class="char-modal-stat-row">
                  <span class="char-modal-stat-label">CHIỀU CAO</span>
                  <span class="char-modal-stat-val" id="charModalHeight">1.65</span>
                </div>
                <div class="char-modal-stat-row">
                  <span class="char-modal-stat-label">QUÊ QUÁN</span>
                  <span class="char-modal-stat-val" id="charModalHometown">Hà Nội</span>
                </div>
              </div>
            </div>

            <!-- LỚP NHÂN VẬT Panel -->
            <div class="char-modal-panel char-modal-panel-class" data-node-id="1317:81290">
              <img src="./assets/3c8205ea3f4cd85c3ea3353c5535d9cc0b8f8bbf.png" alt="" class="char-modal-panel-bg" aria-hidden="true" />
              <div class="char-modal-panel-content">
                <div class="char-modal-panel-heading">
                  <span>LỚP NHÂN VẬT</span>
                </div>
                <div class="char-modal-tags-grid" id="charModalTags">
                  <span class="char-modal-tag-badge">SINH VIÊN</span>
                  <span class="char-modal-tag-badge">BLOGGER</span>
                  <span class="char-modal-tag-badge"></span>
                  <span class="char-modal-tag-badge">CONTENT</span>
                </div>
              </div>
            </div>

            <!-- HỒ SƠ TÓM TẮT Panel -->
            <div class="char-modal-panel char-modal-panel-bio" data-node-id="1317:81307">
              <img src="./assets/a66809fab2c796adf470f3015465fac69b6e6275.png" alt="" class="char-modal-panel-bg" aria-hidden="true" />
              <div class="char-modal-panel-content">
                <div class="char-modal-panel-heading">
                  <span>HỒ SƠ TÓM TẮT</span>
                </div>
                <div class="char-modal-bio-row">
                  <p class="char-modal-bio" id="charModalBio">Là một sinh viên .............</p>
                </div>
              </div>
            </div>
          </div>

          <!-- HỒ SƠ MẬT Badge (Anchored at Bottom-Left of Modal) -->
          <div class="char-modal-confidential" data-node-id="1332:82460">
            <div class="char-modal-confidential-inner">
              <span class="char-modal-confidential-title">HỒ SƠ MẬT</span>
              <span class="char-modal-confidential-sub">CONFIDENTIAL</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  `;

  // Modal Controller
  const backdrop = container.querySelector('#charModalBackdrop');
  const closeBtn = container.querySelector('#charModalCloseBtn');
  let activeViewer = null;

  function openDossier(charId) {
    const data = CHARACTERS_DATA[charId] || CHARACTERS_DATA['hua-an'];
    if (!data) return;

    container.querySelector('#charModalRole').textContent = data.role;
    container.querySelector('#charModalName').textContent = data.name;
    container.querySelector('#charModalClass').textContent = data.class;
    container.querySelector('#charModalQuote').textContent = data.quote;
    container.querySelector('#charModalAge').textContent = data.age;
    container.querySelector('#charModalHeight').textContent = data.height;
    container.querySelector('#charModalHometown').textContent = data.hometown;
    container.querySelector('#charModalBio').textContent = data.summary;

    const tagsContainer = container.querySelector('#charModalTags');
    if (tagsContainer && data.tags) {
      // Figma shows 3-col x 2-row grid; fill remaining cells as empty
      const tagCells = [...data.tags];
      while (tagCells.length < 6) tagCells.push('');
      tagsContainer.innerHTML = tagCells.map(t => 
        `<span class="char-modal-tag-badge">${t}</span>`
      ).join('');
    }

    // 3D Model Loading
    const modelContainer = container.querySelector('#charModal3DContainer');
    const loadingElem = container.querySelector('#charModal3DLoading');
    if (loadingElem) loadingElem.style.display = 'flex';

    if (!activeViewer && modelContainer) {
      activeViewer = new CharacterModelViewer(modelContainer);
    }

    if (activeViewer) {
      activeViewer.show();
      if (data.model3d) {
        activeViewer.loadModel(data.model3d, (percent) => {
          if (percent >= 100 && loadingElem) {
            loadingElem.style.display = 'none';
          }
        });
      }
    }

    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDossier() {
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
    if (activeViewer) {
      activeViewer.hide();
    }
  }

  // Open on Hua An Button
  const btnHuaAn = container.querySelector('#btnOpenHuaAnDossier');
  if (btnHuaAn) {
    btnHuaAn.addEventListener('click', () => openDossier('hua-an'));
  }

  // Open on Character Cards
  const cards = container.querySelectorAll('.char-card-item');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const charId = card.getAttribute('data-char-id');
      openDossier(charId);
    });
  });

  // Close handlers
  if (closeBtn) closeBtn.addEventListener('click', closeDossier);
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeDossier();
    });
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
