/* ============================================
   OAN Horror Game — Character Dossier & Detail View (Figma 1301:82044 / 1332:82867)
   ============================================ */

export const CHARACTERS_DATA = {
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
    photo: './assets/72cb7e1d35b96eac40bc86451109f1fb5fc22dd7.png',
    has3D: true,
    outfits: ['Trang phục 1', 'Trang phục 2', 'Trang phục 3'],
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
    photo: './assets/06108d6a32c6b959fbb88b8e7fcc55f617e6b82d.png',
    has3D: false,
    outfits: ['Trang phục thường', 'Áo khoác gió'],
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
    photo: './assets/24688bb05ebb5d4e8b2b074d60bc3cc966dfa17c.png',
    has3D: false,
    outfits: ['Áo dài truyền thống', 'Âu phục cổ điển'],
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
    photo: './assets/2c9d80e984a0e3cf97699642b5308eecc1791abe.png',
    has3D: false,
    outfits: ['Áo bà ba trắng', 'Váy lụa đỏ'],
  }
};

export async function renderCharacter(container) {
  const hash = window.location.hash;
  const params = new URLSearchParams(hash.includes('?') ? hash.split('?')[1] : '');
  let charKey = params.get('id') || 'minh';
  if (!CHARACTERS_DATA[charKey]) {
    if (charKey === 'hua-an') charKey = 'hua-van-loc';
    else if (charKey === 'female') charKey = 'hua-ngoc';
    else charKey = 'minh';
  }

  const char = CHARACTERS_DATA[charKey];

  container.innerHTML = `
    <div class="figma-char-dossier-page" data-node-id="1332:82867">
      
      <!-- Top Close Button with Golden Seal (1332:82462 / 1317:81400) -->
      <a href="#home" class="dossier-close-btn" title="Đóng hồ sơ" id="dossier-close-btn">
        <svg width="42" height="42" viewBox="0 0 36 36" fill="none" class="dossier-close-icon">
          <circle cx="18" cy="18" r="16" stroke="#9c7e21" stroke-width="2" fill="rgba(30,0,0,0.85)"/>
          <path d="M11 11L25 25M25 11L11 25" stroke="#d9b74c" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
      </a>

      <!-- Bottom-Left Confidential Stamp (1332:82460 / 1332:82461) -->
      <div class="confidential-stamp-badge" data-node-id="1332:82460">
        <div class="stamp-inner-border">
          <p class="stamp-title">HỒ SƠ MẬT</p>
          <p class="stamp-sub">CONFIDENTIAL</p>
        </div>
      </div>

      <!-- Character Quick Switcher Tabs -->
      <div class="dossier-char-tabs-strip">
        <button class="dossier-tab-btn ${charKey === 'minh' ? 'active' : ''}" data-char="minh">MINH</button>
        <button class="dossier-tab-btn ${charKey === 'khang' ? 'active' : ''}" data-char="khang">KHANG</button>
        <button class="dossier-tab-btn ${charKey === 'hua-van-loc' ? 'active' : ''}" data-char="hua-van-loc">HỨA VĂN LỘC</button>
        <button class="dossier-tab-btn ${charKey === 'hua-ngoc' ? 'active' : ''}" data-char="hua-ngoc">HỨA NGỌC</button>
      </div>

      <!-- Main 3-Column Dossier Content Grid (1332:82867) -->
      <div class="dossier-grid-layout">
        
        <!-- LEFT COLUMN: Roles, Big Name, Quote, Action Buttons (1332:82463) -->
        <div class="dossier-col-left" data-node-id="1332:82463">
          <div class="dossier-role-tag" data-node-id="1332:82464">
            <span>${char.role}</span>
          </div>

          <h1 class="dossier-char-name" data-node-id="1332:82466">${char.name}</h1>

          <div class="dossier-class-tag" data-node-id="1332:82468">
            <span>${char.class}</span>
          </div>

          <blockquote class="dossier-char-quote" data-node-id="1332:82470">
            ${char.quote}
          </blockquote>

          <div class="dossier-actions-group" data-node-id="1332:82472">
            <!-- Action 1: Khám phá cốt truyện -->
            <a href="#storyline" class="btn-dossier-action btn-dossier-gold">
              <span class="btn-dossier-text">KHÁM PHÁ CỐT TRUYỆN</span>
            </a>

            <!-- Action 2: Xem Trailer -->
            <a href="#trailer" class="btn-dossier-action btn-dossier-ghost">
              <span class="btn-dossier-text">XEM TRAILER</span>
            </a>
          </div>
        </div>

        <!-- CENTER COLUMN: Interactive 3D Model / Portrait Visual & Outfits (1317:81386) -->
        <div class="dossier-col-center" data-node-id="1317:81386">
          <div class="dossier-visual-frame">
            <div class="frame-ambient-glow"></div>
            
            ${char.has3D ? `
              <!-- 3D Turntable Player for Minh (82 Rendered frames) -->
              <div class="turntable-3d-wrapper" id="turntable-3d-box" title="Kéo chuột ngang để xoay 360 độ nhân vật">
                <img src="./assets/minh-3d/0001.png" alt="Minh 3D" id="turntable-frame-img" class="turntable-img" />
                <div class="turntable-hint">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d9b74c" stroke-width="2">
                    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                    <path d="M3 3v5h5"/>
                    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/>
                    <path d="M16 21h5v-5"/>
                  </svg>
                  <span>Kéo chuột để xoay 3D (360°)</span>
                </div>
              </div>
            ` : `
              <!-- High-res Portrait Visual for Other Characters -->
              <div class="dossier-static-portrait">
                <img src="${char.photo}" alt="${char.name}" class="static-portrait-img" />
              </div>
            `}

            <!-- Outfits Selector Tabs (Trang phục 1, 2, 3) -->
            <div class="dossier-outfits-row">
              ${char.outfits.map((outfit, index) => `
                <button class="outfit-tab-btn ${index === 0 ? 'active' : ''}" data-outfit="${index}">
                  ${outfit}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN: Dossier Information Panels (1317:81322) -->
        <div class="dossier-col-right" data-node-id="1317:81322">
          
          <!-- Block 1: THÔNG TIN CƠ BẢN (1317:81244) -->
          <div class="dossier-info-card" data-node-id="1317:81244">
            <div class="info-card-header">
              <h3 class="info-card-title">THÔNG TIN CƠ BẢN</h3>
            </div>
            <div class="info-card-body">
              <div class="info-data-row">
                <span class="info-data-label">TUỔI</span>
                <span class="info-data-value">${char.age}</span>
              </div>
              <div class="info-data-row">
                <span class="info-data-label">CHIỀU CAO</span>
                <span class="info-data-value">${char.height}</span>
              </div>
              <div class="info-data-row">
                <span class="info-data-label">QUÊ QUÁN</span>
                <span class="info-data-value">${char.hometown}</span>
              </div>
            </div>
          </div>

          <!-- Block 2: LỚP NHÂN VẬT (1317:81290) -->
          <div class="dossier-info-card" data-node-id="1317:81290">
            <div class="info-card-header">
              <h3 class="info-card-title">LỚP NHÂN VẬT</h3>
            </div>
            <div class="info-card-body tags-grid">
              ${char.tags.map(tag => `
                <div class="char-class-badge">
                  <span>${tag}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Block 3: HỒ SƠ TÓM TẮT (1317:81307) -->
          <div class="dossier-info-card" data-node-id="1317:81307">
            <div class="info-card-header">
              <h3 class="info-card-title">HỒ SƠ TÓM TẮT</h3>
            </div>
            <div class="info-card-body">
              <p class="summary-paragraph-text">
                ${char.summary}
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  `;

  // Setup Tab Switchers
  const charTabBtns = container.querySelectorAll('.dossier-tab-btn');
  charTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-char');
      window.location.hash = `character?id=${selected}`;
    });
  });

  // Setup Outfit Switcher
  const outfitBtns = container.querySelectorAll('.outfit-tab-btn');
  outfitBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      outfitBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Setup 3D Interactive Turntable for Minh
  if (char.has3D) {
    init3DTurntable(container);
  }
}

function init3DTurntable(container) {
  const box = container.querySelector('#turntable-3d-box');
  const img = container.querySelector('#turntable-frame-img');
  if (!box || !img) return;

  const totalFrames = 82;
  let currentFrame = 1;
  let isDragging = false;
  let startX = 0;
  let startFrame = 1;
  let autoRotateInterval = null;

  function updateFrame(frameIndex) {
    currentFrame = ((frameIndex - 1) % totalFrames + totalFrames) % totalFrames + 1;
    const padded = String(currentFrame).padStart(4, '0');
    img.src = `./assets/minh-3d/${padded}.png`;
  }

  // Drag listeners
  box.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startFrame = currentFrame;
    if (autoRotateInterval) clearInterval(autoRotateInterval);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    const sensitivity = 8; // pixels per frame
    const frameDelta = Math.floor(deltaX / sensitivity);
    updateFrame(startFrame - frameDelta);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch support
  box.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    startFrame = currentFrame;
    if (autoRotateInterval) clearInterval(autoRotateInterval);
  });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;
    const sensitivity = 8;
    const frameDelta = Math.floor(deltaX / sensitivity);
    updateFrame(startFrame - frameDelta);
  });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Slow ambient auto-rotate when idle
  autoRotateInterval = setInterval(() => {
    if (!isDragging) {
      updateFrame(currentFrame + 1);
    }
  }, 120);
}
