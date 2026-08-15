/* ============================================
   OAN — Character Detail Page
   Covers: Designs 16-20 (character variants)
   ============================================ */

const CHARACTERS = {
  minh: {
    name: 'Minh',
    role: 'Nhân vật chính',
    class: 'Blogger',
    quote: '"Sự thật là phải khám phá cho hết chứ"',
    age: '24',
    height: '1.65',
    hometown: 'Hà Nội',
    tags: ['Sinh Viên', 'Blogger', 'Content'],
    summary: 'Là một sinh viên .............',
    outfits: ['Trang phục 1', 'Trang phục 2', 'Trang phục 3'],
  },
  'hua-an': {
    name: 'Hứa An',
    role: 'Nhân vật chính',
    class: 'Nhân vật chính',
    quote: '"Tôi phải tìm ra sự thật về gia đình mình"',
    age: '22',
    height: '1.60',
    hometown: 'Huế',
    tags: ['Sinh Viên', 'Hứa gia'],
    summary: 'Con gái dòng họ Hứa...',
    outfits: ['Trang phục hiện đại', 'Trang phục truyền thống'],
  },
  'female': {
    name: 'Nhân vật nữ',
    role: 'Nhân vật phụ',
    class: 'Bí ẩn',
    quote: '"..."',
    age: '??',
    height: '??',
    hometown: '??',
    tags: ['Bí ẩn'],
    summary: 'Chưa được tiết lộ...',
    outfits: ['Trang phục 1'],
  }
};

export async function renderCharacter(container) {
  const params = new URLSearchParams(window.location.hash.split('?')[1] || '');
  const charId = params.get('id') || 'minh';
  const char = CHARACTERS[charId] || CHARACTERS.minh;

  container.innerHTML = `
    <div class="page-character">
      <!-- Left Panel -->
      <div class="character-left" style="position:relative;">
        <a href="#home" style="position:absolute;top:24px;left:24px;cursor:pointer;">
          <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
            <path d="M18 2L22 8L28 6L26 12L34 14L28 18L34 22L26 24L28 30L22 28L18 34L14 28L8 30L10 24L2 22L8 18L2 14L10 12L8 6L14 8L18 2Z" fill="#D9B74C"/>
            <circle cx="18" cy="18" r="6" fill="#330000"/>
          </svg>
        </a>
        <div class="character-left__role">${char.role}</div>
        <div class="character-left__name">${char.name}</div>
        <div class="character-left__class">${char.class}</div>
        <div class="character-left__quote">${char.quote}</div>
        <div class="character-left__actions">
          <a href="#storyline" class="btn btn-ghost btn-full" style="padding:14px 24px;">Khám Phá</a>
          <a href="#trailer" class="btn btn-ghost btn-full" style="padding:14px 24px;">Xem Trailer</a>
        </div>
        <div style="position:absolute;bottom:40px;left:24px;font-family:var(--font-display);font-size:16px;color:var(--color-red-600);text-transform:uppercase;transform:rotate(-5deg);">
          <div style="font-size:20px;font-weight:700;">HỒ SƠ MẬT</div>
          <div style="font-size:10px;color:var(--color-gray-500);">CONFIDENTIAL</div>
        </div>
      </div>

      <!-- Center - Character Image -->
      <div class="character-center">
        <div class="character-center__frame animate-fade-in" style="border-color:rgba(120,50,10,0.6);background:linear-gradient(180deg, #1a0a05, #0d0500);">
          <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;">
            <div style="text-align:center;">
              <div style="font-size:120px;margin-bottom:16px;">🧍</div>
              <p style="font-family:var(--font-display);font-size:14px;color:var(--color-gray-500);text-transform:uppercase;">${char.name}</p>
              <p style="font-size:12px;color:var(--color-gray-600);">${char.class}</p>
            </div>
          </div>
        </div>
        <button class="character-center__close" onclick="window.location.hash='home'">✕</button>
      </div>

      <!-- Right Panel -->
      <div class="character-right">
        <!-- Basic Info -->
        <div class="info-panel animate-fade-in-right">
          <div class="info-panel__title">Thông Tin Cơ Bản</div>
          <div class="info-panel__row">
            <span class="info-panel__label">Tuổi</span>
            <span class="info-panel__value">${char.age}</span>
          </div>
          <div class="info-panel__row">
            <span class="info-panel__label">Chiều Cao</span>
            <span class="info-panel__value">${char.height}</span>
          </div>
          <div class="info-panel__row" style="border-bottom:none;">
            <span class="info-panel__label">Quê Quán</span>
            <span class="info-panel__value">${char.hometown}</span>
          </div>
        </div>

        <!-- Character Class -->
        <div class="info-panel animate-fade-in-right delay-2">
          <div class="info-panel__title">Lớp Nhân Vật</div>
          <div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;padding-top:8px;">
            ${char.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </div>

        <!-- Summary -->
        <div class="info-panel animate-fade-in-right delay-4">
          <div class="info-panel__title">Hồ Sơ Tóm Tắt</div>
          <p style="font-size:14px;color:var(--color-gray-400);line-height:1.6;padding-top:8px;">
            ${char.summary}
          </p>
        </div>
      </div>
    </div>
  `;
}
