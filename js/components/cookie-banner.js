/* ========================================================
   OAN Horror Game — Cookie Consent Banner Component
   ======================================================== */

export function initCookieBanner() {
  const existingConsent = localStorage.getItem('oan_cookie_consent');
  
  let banner = document.getElementById('oan-cookie-banner');
  if (!banner) {
    banner = document.createElement('div');
    banner.id = 'oan-cookie-banner';
    banner.className = 'oan-cookie-banner-wrapper';
    banner.innerHTML = `
      <div class="oan-cookie-banner-container">
        <div class="oan-cookie-ambient-glow"></div>
        
        <div class="oan-cookie-content-col">
          <div class="oan-cookie-icon-wrap" title="Phong Ấn Ký Ức">
            👁️
          </div>
          <div class="oan-cookie-texts">
            <h4 class="oan-cookie-title">
              PHONG ẤN BỘ NHỚ (COOKIE POLICY)
              <span class="tag-seal">GIAO ƯỚC TÂM LINH</span>
            </h4>
            <p class="oan-cookie-desc">
              Dinh thự Họ Hứa lưu giữ linh hồn và dấu chân của bạn (Cookie) để duy trì sự sống sót, lưu tiến trình giải đố và mang lại trải nghiệm kinh dị tối thượng. Bạn có chấp nhận giao ước này không? Xem chi tiết tại <a href="#cookie">Chính Sách Cookie</a>.
            </p>
          </div>
        </div>

        <div class="oan-cookie-actions-col">
          <button type="button" class="btn-cookie-reject" id="btn-cookie-essential">
            CHỈ CẦN THIẾT
          </button>
          <button type="button" class="btn-cookie-accept" id="btn-cookie-accept-all">
            CHẤP THUẬN TẤT CẢ
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(banner);

    // Event listeners
    const btnAccept = banner.querySelector('#btn-cookie-accept-all');
    const btnReject = banner.querySelector('#btn-cookie-essential');

    const hideBanner = (status) => {
      localStorage.setItem('oan_cookie_consent', status);
      banner.classList.remove('is-visible');
    };

    btnAccept?.addEventListener('click', () => hideBanner('accepted_all'));
    btnReject?.addEventListener('click', () => hideBanner('essential_only'));
  }

  // If not decided yet, show banner with a dramatic 1.2s delay
  if (!existingConsent) {
    setTimeout(() => {
      banner.classList.add('is-visible');
    }, 1200);
  }

  // Global function to re-open cookie banner anytime
  window.openCookieConsentBanner = () => {
    banner.classList.add('is-visible');
  };
}
