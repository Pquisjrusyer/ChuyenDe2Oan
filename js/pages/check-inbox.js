/* ========================================================
   OAN — CHECK INBOX PAGE (Figma Node 1316:81054 "quên mật khẩu xác nhận")
   ======================================================== */

import { sendPasswordResetEmail } from '../services/email-service.js';

export async function renderCheckInbox(container) {
  const email = localStorage.getItem('OAN_FORGOT_EMAIL') || 'email của bạn';

  container.innerHTML = `
    <div class="reg-success-page" data-node-id="1316:81054">
      
      <!-- Background Grunge Overlay (1316:81062) -->
      <div class="reg-success-grunge-bg" data-node-id="1316:81062">
        <img src="./assets/7c68e3ca72278b8193b62bcefa0dbacd65ab30a8.png" alt="" onerror="this.style.display='none'" />
      </div>

      <!-- Main Content Card (1316:81056) -->
      <div class="reg-success-content trailer-scroll-reveal trailer-reveal-scale" data-node-id="1316:81056">
        
        <!-- Big Title (1316:81057) -->
        <h1 class="reg-success-heading" data-node-id="1316:81057">
          KIỂM TRA HỘP THƯ CỦA BẠN
        </h1>

        <!-- Golden Shield Check Icon (1316:81377) - Inline SVG for 100% Production Reliability -->
        <div class="reg-success-shield-icon" data-node-id="1316:81377" aria-label="Kiểm tra hộp thư">
          <svg preserveAspectRatio="xMidYMid meet" width="100%" height="100%" viewBox="0 0 252 252" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M113.592 36.8154C121.515 33.4196 130.485 33.4197 138.408 36.8154L193.136 60.2705C196.996 61.9251 199.5 65.7207 199.5 69.9209V125.076C199.5 145.422 189.674 164.516 173.118 176.342L138.206 201.279C130.904 206.495 121.096 206.495 113.794 201.279L78.8818 176.342C62.3257 164.516 52.5 145.422 52.5 125.076V69.9209C52.5001 65.7207 55.0037 61.925 58.8643 60.2705L113.592 36.8154ZM179.165 73.2549C174.197 69.2978 166.962 70.1171 163.005 75.085L109.712 141.991L88.1494 120.336C83.6681 115.835 76.3865 115.82 71.8857 120.301C67.3851 124.782 67.3694 132.064 71.8506 136.564L102.121 166.967C107.182 172.05 115.543 171.587 120.012 165.977L180.995 89.415C184.952 84.4472 184.133 77.212 179.165 73.2549Z" fill="#9C7E21"/>
          </svg>
        </div>

        <!-- Description Note (1316:81058 & 1316:81367) -->
        <div class="reg-success-email-notice">
          <p class="reg-success-email-info" data-node-id="1316:81058">
            Chúng tôi đã gửi một liên kết đặt lại mật khẩu đến email của bạn: <strong class="reg-highlight-white">${email}</strong>
          </p>
          <p class="inbox-validity-note" data-node-id="1316:81367">
            THỜI GIAN HIỆU LỰC 15 PHÚT
          </p>
        </div>

        <!-- CTA Button 1: Quay lại đăng nhập (1316:81060) -->
        <div class="reg-success-btn-frame" data-node-id="1316:81060">
          <!-- Horror Metal Side Bracket Left -->
          <div class="reg-success-bracket-left">
            <svg width="100%" height="100%" viewBox="0 0 576.28 72.597" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.054 39.7269C10.3338 38.723 4.96024 38.1493 0.826722 38.0059V35.1375C21.081 34.1336 25.1409 25.7705 26.7943 19.6035C27.9209 15.0431 17.5428 0.35201 45.95 0H56.2838C118.7 0.143418 181.116 -4.38094e-06 243.532 0.286833C341.083 0.573669 479.969 0.717092 576.28 1.43418C520.891 1.72102 465.502 1.86444 409.7 2.15128C298.508 2.43811 155.488 2.72496 45.5366 2.72496C24.7332 2.72496 49.4663 27.6035 21.0809 34.4204C15.7074 36.2849 8.68039 37.8625 0 38.0059V35.1375C9.5187 35.384 16.9866 36.7825 22.6721 38.8382C25.1301 39.7269 16.4888 40.384 14.054 39.7269Z" fill="#9C7E21"/>
              <path d="M14.054 32.8701C10.3338 33.8741 4.96024 34.4477 0.826722 34.5911V37.4595C21.081 38.4634 25.1409 46.8265 26.7943 52.9935C27.9209 57.5539 17.5428 72.245 45.95 72.597H56.2838C118.7 72.4536 181.116 72.5971 243.532 72.3102C341.083 72.0234 479.969 71.88 576.28 71.1629C520.891 70.876 465.502 70.7326 409.7 70.4458C298.508 70.1589 155.488 69.8721 45.5366 69.8721C24.7332 69.8721 49.4663 44.9935 21.0809 38.1766C15.7074 36.3122 8.68039 34.7346 0 34.5911V37.4595C9.5187 37.213 16.9866 35.8145 22.6721 33.7589C25.1301 32.8701 16.4888 32.2131 14.054 32.8701Z" fill="#9C7E21"/>
            </svg>
          </div>

          <a href="#login" class="reg-success-cta-btn" id="btnBackToLogin" data-node-id="I1316:81060;708:582">
            <span class="reg-success-btn-text" data-node-id="I1316:81060;708:606">QUAY LẠI ĐĂNG NHẬP</span>
          </a>

          <!-- Horror Metal Side Bracket Right -->
          <div class="reg-success-bracket-right">
            <svg width="100%" height="100%" viewBox="0 0 576.28 72.597" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: scaleX(-1);">
              <path d="M14.054 39.7269C10.3338 38.723 4.96024 38.1493 0.826722 38.0059V35.1375C21.081 34.1336 25.1409 25.7705 26.7943 19.6035C27.9209 15.0431 17.5428 0.35201 45.95 0H56.2838C118.7 0.143418 181.116 -4.38094e-06 243.532 0.286833C341.083 0.573669 479.969 0.717092 576.28 1.43418C520.891 1.72102 465.502 1.86444 409.7 2.15128C298.508 2.43811 155.488 2.72496 45.5366 2.72496C24.7332 2.72496 49.4663 27.6035 21.0809 34.4204C15.7074 36.2849 8.68039 37.8625 0 38.0059V35.1375C9.5187 35.384 16.9866 36.7825 22.6721 38.8382C25.1301 39.7269 16.4888 40.384 14.054 39.7269Z" fill="#9C7E21"/>
              <path d="M14.054 32.8701C10.3338 33.8741 4.96024 34.4477 0.826722 34.5911V37.4595C21.081 38.4634 25.1409 46.8265 26.7943 52.9935C27.9209 57.5539 17.5428 72.245 45.95 72.597H56.2838C118.7 72.4536 181.116 72.5971 243.532 72.3102C341.083 72.0234 479.969 71.88 576.28 71.1629C520.891 70.876 465.502 70.7326 409.7 70.4458C298.508 70.1589 155.488 69.8721 45.5366 69.8721C24.7332 69.8721 49.4663 44.9935 21.0809 38.1766C15.7074 36.3122 8.68039 34.7346 0 34.5911V37.4595C9.5187 37.213 16.9866 35.8145 22.6721 33.7589C25.1301 32.8701 16.4888 32.2131 14.054 32.8701Z" fill="#9C7E21"/>
            </svg>
          </div>
        </div>

        <!-- Divider Line (1316:81411) -->
        <div class="inbox-divider-row" data-node-id="1316:81411">
          <div class="inbox-divider-line">
            <svg width="100%" height="2" viewBox="0 0 138 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="1" x2="138" y2="1" stroke="#9c7e21" stroke-width="1.5" stroke-dasharray="4 2"/>
            </svg>
          </div>
          <span class="inbox-divider-text" data-node-id="1316:81061">Không nhận được email ?</span>
          <div class="inbox-divider-line">
            <svg width="100%" height="2" viewBox="0 0 138 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="1" x2="138" y2="1" stroke="#9c7e21" stroke-width="1.5" stroke-dasharray="4 2"/>
            </svg>
          </div>
        </div>

        <!-- Resend Link (1316:81412) -->
        <button type="button" class="inbox-resend-btn" id="btnResendEmail" data-node-id="1316:81412">
          Gửi lại email
        </button>

      </div>

    </div>
  `;

  // Resend Handler
  const resendBtn = container.querySelector('#btnResendEmail');
  if (resendBtn) {
    resendBtn.addEventListener('click', async () => {
      resendBtn.disabled = true;
      resendBtn.textContent = 'Đang gửi lại email...';
      
      const currentEmail = localStorage.getItem('OAN_FORGOT_EMAIL') || email;
      await sendPasswordResetEmail({ email: currentEmail });
      
      alert(`Đã gửi lại liên kết đặt lại mật khẩu đến hòm thư ${currentEmail}!`);
      resendBtn.textContent = 'Đã gửi lại thành công ✓';
      setTimeout(() => {
        resendBtn.disabled = false;
        resendBtn.textContent = 'Gửi lại email';
      }, 5000);
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
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  scrollTargets.forEach(el => scrollObserver.observe(el));

  setTimeout(() => {
    scrollTargets.forEach(el => {
      el.classList.add('revealed');
    });
  }, 100);
}
