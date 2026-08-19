/* ========================================================
   OAN HORROR GAME — DYNAMIC GOTHIC BREADCRUMB COMPONENT
   ======================================================== */

const BREADCRUMB_MAP = {
  // 1. THÔNG TIN Subpages
  info: [
    { label: 'TRANG CHỦ', hash: 'home' },
    { label: 'THÔNG TIN', hash: 'info', current: true }
  ],
  storyline: [
    { label: 'TRANG CHỦ', hash: 'home' },
    { label: 'THÔNG TIN', hash: 'info' },
    { label: 'CỐT TRUYỆN', hash: 'storyline', current: true }
  ],
  gameplay: [
    { label: 'TRANG CHỦ', hash: 'home' },
    { label: 'THÔNG TIN', hash: 'info' },
    { label: 'GAMEPLAY', hash: 'gameplay', current: true }
  ],
  character: [
    { label: 'TRANG CHỦ', hash: 'home' },
    { label: 'THÔNG TIN', hash: 'info' },
    { label: 'NHÂN VẬT', hash: 'character', current: true }
  ],
  investigation: [
    { label: 'TRANG CHỦ', hash: 'home' },
    { label: 'THÔNG TIN', hash: 'info' },
    { label: 'ĐIỀU TRA', hash: 'investigation', current: true }
  ],
  puzzle: [
    { label: 'TRANG CHỦ', hash: 'home' },
    { label: 'THÔNG TIN', hash: 'info' },
    { label: 'GIẢI ĐỐ', hash: 'puzzle', current: true }
  ],
  collection: [
    { label: 'TRANG CHỦ', hash: 'home' },
    { label: 'THÔNG TIN', hash: 'info' },
    { label: 'THU THẬP', hash: 'collection', current: true }
  ],

  // 2. TÀI KHOẢN / AUTH Subpages
  login: [
    { label: 'TRANG CHỦ', hash: 'home' },
    { label: 'TÀI KHOẢN', hash: 'login' },
    { label: 'ĐĂNG NHẬP', hash: 'login', current: true }
  ],
  register: [
    { label: 'TRANG CHỦ', hash: 'home' },
    { label: 'TÀI KHOẢN', hash: 'register' },
    { label: 'ĐĂNG KÝ', hash: 'register', current: true }
  ],
  'register-success': [
    { label: 'TRANG CHỦ', hash: 'home' },
    { label: 'TÀI KHOẢN', hash: 'register' },
    { label: 'ĐĂNG KÝ THÀNH CÔNG', hash: 'register-success', current: true }
  ],
  'login-success': [
    { label: 'TRANG CHỦ', hash: 'home' },
    { label: 'TÀI KHOẢN', hash: 'login' },
    { label: 'ĐĂNG NHẬP THÀNH CÔNG', hash: 'login-success', current: true }
  ],
  'forgot-password': [
    { label: 'TRANG CHỦ', hash: 'home' },
    { label: 'TÀI KHOẢN', hash: 'login' },
    { label: 'QUÊN MẬT KHẨU', hash: 'forgot-password', current: true }
  ],
  'check-inbox': [
    { label: 'TRANG CHỦ', hash: 'home' },
    { label: 'TÀI KHOẢN', hash: 'login' },
    { label: 'KIỂM TRA HỘP THƯ', hash: 'check-inbox', current: true }
  ],

  // 3. OTHER MAIN & LEGAL PAGES
  trailer: [
    { label: 'TRANG CHỦ', hash: 'home' },
    { label: 'TRAILER', hash: 'trailer', current: true }
  ],
  community: [
    { label: 'TRANG CHỦ', hash: 'home' },
    { label: 'CỘNG ĐỒNG', hash: 'community', current: true }
  ],
  faq: [
    { label: 'TRANG CHỦ', hash: 'home' },
    { label: 'HỖ TRỢ', hash: 'faq' },
    { label: 'FAQ', hash: 'faq', current: true }
  ],
  download: [
    { label: 'TRANG CHỦ', hash: 'home' },
    { label: 'TẢI GAME', hash: 'download', current: true }
  ],
  terms: [
    { label: 'TRANG CHỦ', hash: 'home' },
    { label: 'PHÁP LÝ', hash: 'terms' },
    { label: 'ĐIỀU KHOẢN SỬ DỤNG', hash: 'terms', current: true }
  ],
  privacy: [
    { label: 'TRANG CHỦ', hash: 'home' },
    { label: 'PHÁP LÝ', hash: 'privacy' },
    { label: 'CHÍNH SÁCH BẢO MẬT', hash: 'privacy', current: true }
  ],
  cookie: [
    { label: 'TRANG CHỦ', hash: 'home' },
    { label: 'PHÁP LÝ', hash: 'cookie' },
    { label: 'CHÍNH SÁCH COOKIE', hash: 'cookie', current: true }
  ]
};

export function renderBreadcrumb(container, currentHash) {
  if (!container) return;

  // Don't display breadcrumbs on Intro or Home pages
  if (!currentHash || currentHash === 'intro' || currentHash === 'home') {
    container.innerHTML = '';
    container.style.display = 'none';
    return;
  }

  const items = BREADCRUMB_MAP[currentHash];
  if (!items || items.length === 0) {
    container.innerHTML = '';
    container.style.display = 'none';
    return;
  }

  container.style.display = 'block';
  container.innerHTML = `
    <nav class="oan-breadcrumb-bar" aria-label="Breadcrumb navigation">
      <div class="oan-breadcrumb-container">
        
        <ol class="oan-breadcrumb-list">
          ${items.map((item, index) => {
            const isLast = index === items.length - 1;
            const isHome = index === 0;

            if (isLast) {
              return `
                <li class="oan-breadcrumb-item current" aria-current="page">
                  <span class="breadcrumb-current-label">${item.label}</span>
                </li>
              `;
            }

            return `
              <li class="oan-breadcrumb-item">
                <a href="#${item.hash}" class="breadcrumb-link ${isHome ? 'is-home' : ''}">
                  ${isHome ? `
                    <svg class="breadcrumb-home-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  ` : ''}
                  <span>${item.label}</span>
                </a>
                <span class="breadcrumb-separator" aria-hidden="true">
                  <svg width="8" height="12" viewBox="0 0 8 12" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="2 2 6 6 2 10"></polyline>
                  </svg>
                </span>
              </li>
            `;
          }).join('')}
        </ol>

      </div>
    </nav>
  `;
}
