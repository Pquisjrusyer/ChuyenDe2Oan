/* ========================================================
   OAN Horror Game — Antique Thank-You Letter Modal Component
   ======================================================== */

import { getResendApiKey, setResendApiKey } from '../services/email-service.js';

let activeModalEl = null;

/**
 * Show the Antique Parchment Thank-You Letter Modal
 * @param {Object} params - { email, hobby }
 */
export function showThankYouLetterModal({ email, hobby }) {
  // Remove existing modal if any
  closeThankYouLetterModal();

  const selectedHobby = hobby && hobby.trim() ? hobby.trim() : 'Khám phá huyền bí & Giải đố kinh dị';
  const currentDate = new Date().toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  const modalHTML = `
    <div class="oan-letter-modal-overlay" id="oanLetterModalOverlay">
      <div class="oan-letter-modal-backdrop"></div>
      
      <div class="oan-letter-modal-container" id="oanLetterModalContainer">
        <!-- Close 'X' Button -->
        <button type="button" class="oan-letter-close-btn" id="oanLetterCloseBtn" aria-label="Đóng thư">
          <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2.5" fill="none">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <!-- Antique Parchment Sheet -->
        <div class="oan-parchment-sheet">
          <img src="./assets/antique-parchment-letter.jpg" alt="Thư giấy cũ" class="oan-parchment-bg-img" />
          
          <!-- Inner Letter Content (Dark Ink on Vintage Paper) -->
          <div class="oan-parchment-inner">
            
            <!-- Letter Header -->
            <div class="oan-letter-header">
              <div class="oan-letter-crest">
                <span class="crest-symbol">✦</span>
                <span class="crest-text">MẬT THƯ NHÀ HỨA</span>
                <span class="crest-symbol">✦</span>
              </div>
              <h2 class="oan-letter-title">THƯ GIAO ƯỚC TRI ÂN</h2>
              <div class="oan-letter-divider"></div>
            </div>

            <!-- Letter Body -->
            <div class="oan-letter-body">
              <p class="oan-letter-salutation">
                Kính gửi Lữ Khách: <strong class="oan-letter-recipient">${escapeHTML(email)}</strong>
              </p>
              
              <p class="oan-letter-text">
                Ngọn đèn dầu nơi cổ trấn Nhà Hứa đã sáng tỏ để đón người. Lời giao ước tham gia cộng đồng cùng mối quan tâm 
                <span class="oan-letter-hobby-tag">« ${escapeHTML(selectedHobby)} »</span> 
                của người đã được khắc ghi vào biên niên sử bóng tối.
              </p>

              <p class="oan-letter-text">
                Một bản thư tín tri ân đã được niêm phong và gửi đến hòm thư điện tử của người. Hãy chuẩn bị tâm trí vững vàng trước khi cánh cửa dinh thự chính thức mở ra...
              </p>
            </div>

            <!-- Letter Footer with Seal & Stamp -->
            <div class="oan-letter-footer">
              <div class="oan-letter-meta">
                <p class="oan-meta-date">Ngày phong ấn: <strong>${currentDate}</strong></p>
                <p class="oan-meta-location">Dinh Thự Cổ — OÁN</p>
              </div>

              <!-- Blood Wax Seal Stamp -->
              <div class="oan-blood-wax-seal">
                <div class="wax-seal-outer">
                  <div class="wax-seal-inner">
                    <span class="wax-seal-word">OÁN</span>
                    <span class="wax-seal-sub">ĐÃ NIÊM PHONG</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Modal Action Buttons -->
            <div class="oan-letter-actions">
              <button type="button" class="btn-oan-fold-letter" id="oanFoldLetterBtn">
                <span class="btn-fold-text">GẤP THƯ & BƯỚC TIẾP</span>
              </button>
            </div>

            <!-- Resend Key Quick Config Link (Optional for operator) -->
            <div class="oan-resend-config-trigger">
              <button type="button" class="btn-resend-config-modal" id="oanOpenResendConfigBtn">
                ⚙ ${getResendApiKey() ? 'Resend API: Đã kết nối' : 'Cấu hình Resend API Key (Gửi mail thực)'}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  `;

  // Inject into body
  const temp = document.createElement('div');
  temp.innerHTML = modalHTML.trim();
  activeModalEl = temp.firstElementChild;
  document.body.appendChild(activeModalEl);

  // Bind Events
  bindModalEvents(activeModalEl);

  // GSAP Entry Animation
  if (typeof gsap !== 'undefined') {
    const container = activeModalEl.querySelector('#oanLetterModalContainer');
    const backdrop = activeModalEl.querySelector('.oan-letter-modal-backdrop');
    
    gsap.fromTo(backdrop,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: 'power2.out' }
    );
    
    gsap.fromTo(container,
      { opacity: 0, scale: 0.8, y: 40, rotate: -2 },
      { opacity: 1, scale: 1, y: 0, rotate: 0, duration: 0.6, ease: 'back.out(1.4)' }
    );
  }
}

/**
 * Close and remove modal with smooth exit
 */
export function closeThankYouLetterModal() {
  const existing = document.getElementById('oanLetterModalOverlay');
  if (!existing) return;

  if (typeof gsap !== 'undefined') {
    const container = existing.querySelector('#oanLetterModalContainer');
    const backdrop = existing.querySelector('.oan-letter-modal-backdrop');
    
    gsap.to(container, {
      opacity: 0,
      scale: 0.85,
      y: 20,
      duration: 0.3,
      ease: 'power2.in',
    });
    
    gsap.to(backdrop, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        existing.remove();
        activeModalEl = null;
      },
    });
  } else {
    existing.remove();
    activeModalEl = null;
  }
}

/**
 * Bind modal click, keydown, and configuration events
 */
function bindModalEvents(modalEl) {
  const closeBtn = modalEl.querySelector('#oanLetterCloseBtn');
  const foldBtn = modalEl.querySelector('#oanFoldLetterBtn');
  const backdrop = modalEl.querySelector('.oan-letter-modal-backdrop');
  const configBtn = modalEl.querySelector('#oanOpenResendConfigBtn');

  if (closeBtn) closeBtn.addEventListener('click', closeThankYouLetterModal);
  if (foldBtn) foldBtn.addEventListener('click', closeThankYouLetterModal);
  if (backdrop) backdrop.addEventListener('click', closeThankYouLetterModal);

  if (configBtn) {
    configBtn.addEventListener('click', () => {
      const currentKey = getResendApiKey();
      const newKey = prompt(
        'Nhập Resend API Key của bạn (bắt đầu bằng re_...):\nĐể trống nếu muốn tiếp tục dùng chế độ mô phỏng.',
        currentKey
      );
      if (newKey !== null) {
        setResendApiKey(newKey.trim());
        configBtn.textContent = newKey.trim() ? '⚙ Resend API: Đã kết nối' : '⚙ Cấu hình Resend API Key (Gửi mail thực)';
        alert(newKey.trim() ? 'Đã lưu Resend API Key thành công!' : 'Đã chuyển về chế độ mô phỏng gửi email.');
      }
    });
  }

  // Keyboard Escape Handler
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      closeThankYouLetterModal();
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);
}

function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}
