/* ========================================================
   OAN — FORGOT PASSWORD PAGE (Figma Node 1316:80681 "quên mật khẩu")
   ======================================================== */

import { sendPasswordResetEmail } from '../services/email-service.js';

export async function renderForgotPassword(container) {
  container.innerHTML = `
    <div class="reg-success-page" data-node-id="1316:80681">
      
      <!-- Background Grunge Overlay (1316:80882) -->
      <div class="reg-success-grunge-bg" data-node-id="1316:80882">
        <img src="./assets/7c68e3ca72278b8193b62bcefa0dbacd65ab30a8.png" alt="" onerror="this.style.display='none'" />
      </div>

      <!-- Main Content Card (1316:80881) -->
      <div class="reg-success-content trailer-scroll-reveal trailer-reveal-scale" data-node-id="1316:80881">
        
        <!-- Big Title (1316:80786) -->
        <h1 class="reg-success-heading" data-node-id="1316:80786">
          QUÊN MẬT KHẨU
        </h1>

        <!-- Subtitle Description (1316:80789) -->
        <p class="forgot-desc-text" data-node-id="1316:80789">
          Chúng tôi sẽ gửi một liên kết đặt lại mật khẩu đến email của bạn.
        </p>

        <!-- Form Input & Submit (1316:80791) -->
        <form class="forgot-form-box" id="forgotPasswordForm" onsubmit="return false;">
          
          <div class="login-field-group" data-node-id="1316:80791">
            <label class="login-field-label" for="forgotEmail" data-node-id="I1316:80791;1231:1990">địa chỉ email</label>
            <div class="login-field-input-box" data-node-id="I1316:80791;1227:79708">
              <input type="email" id="forgotEmail" class="login-input-element" placeholder="user@gmail.com" required />
              <div class="reg-field-icon" data-node-id="I1316:80791;1231:2168">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d9b74c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
            </div>
          </div>

          <!-- CTA Button: Gửi liên kết (1316:80810) -->
          <div class="reg-success-btn-frame" data-node-id="1316:80810">
            <!-- Horror Metal Side Bracket Left -->
            <div class="reg-success-bracket-left">
              <svg width="100%" height="100%" viewBox="0 0 576.28 72.597" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.054 39.7269C10.3338 38.723 4.96024 38.1493 0.826722 38.0059V35.1375C21.081 34.1336 25.1409 25.7705 26.7943 19.6035C27.9209 15.0431 17.5428 0.35201 45.95 0H56.2838C118.7 0.143418 181.116 -4.38094e-06 243.532 0.286833C341.083 0.573669 479.969 0.717092 576.28 1.43418C520.891 1.72102 465.502 1.86444 409.7 2.15128C298.508 2.43811 155.488 2.72496 45.5366 2.72496C24.7332 2.72496 49.4663 27.6035 21.0809 34.4204C15.7074 36.2849 8.68039 37.8625 0 38.0059V35.1375C9.5187 35.384 16.9866 36.7825 22.6721 38.8382C25.1301 39.7269 16.4888 40.384 14.054 39.7269Z" fill="#9C7E21"/>
                <path d="M14.054 32.8701C10.3338 33.8741 4.96024 34.4477 0.826722 34.5911V37.4595C21.081 38.4634 25.1409 46.8265 26.7943 52.9935C27.9209 57.5539 17.5428 72.245 45.95 72.597H56.2838C118.7 72.4536 181.116 72.5971 243.532 72.3102C341.083 72.0234 479.969 71.88 576.28 71.1629C520.891 70.876 465.502 70.7326 409.7 70.4458C298.508 70.1589 155.488 69.8721 45.5366 69.8721C24.7332 69.8721 49.4663 44.9935 21.0809 38.1766C15.7074 36.3122 8.68039 34.7346 0 34.5911V37.4595C9.5187 37.213 16.9866 35.8145 22.6721 33.7589C25.1301 32.8701 16.4888 32.2131 14.054 32.8701Z" fill="#9C7E21"/>
              </svg>
            </div>

            <button type="submit" class="reg-success-cta-btn" id="btnSendResetLink" data-node-id="I1316:80810;708:582">
              <span class="reg-success-btn-text" data-node-id="I1316:80810;708:606">GỬI LIÊN KẾT</span>
            </button>

            <!-- Horror Metal Side Bracket Right -->
            <div class="reg-success-bracket-right">
              <svg width="100%" height="100%" viewBox="0 0 576.28 72.597" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: scaleX(-1);">
                <path d="M14.054 39.7269C10.3338 38.723 4.96024 38.1493 0.826722 38.0059V35.1375C21.081 34.1336 25.1409 25.7705 26.7943 19.6035C27.9209 15.0431 17.5428 0.35201 45.95 0H56.2838C118.7 0.143418 181.116 -4.38094e-06 243.532 0.286833C341.083 0.573669 479.969 0.717092 576.28 1.43418C520.891 1.72102 465.502 1.86444 409.7 2.15128C298.508 2.43811 155.488 2.72496 45.5366 2.72496C24.7332 2.72496 49.4663 27.6035 21.0809 34.4204C15.7074 36.2849 8.68039 37.8625 0 38.0059V35.1375C9.5187 35.384 16.9866 36.7825 22.6721 38.8382C25.1301 39.7269 16.4888 40.384 14.054 39.7269Z" fill="#9C7E21"/>
                <path d="M14.054 32.8701C10.3338 33.8741 4.96024 34.4477 0.826722 34.5911V37.4595C21.081 38.4634 25.1409 46.8265 26.7943 52.9935C27.9209 57.5539 17.5428 72.245 45.95 72.597H56.2838C118.7 72.4536 181.116 72.5971 243.532 72.3102C341.083 72.0234 479.969 71.88 576.28 71.1629C520.891 70.876 465.502 70.7326 409.7 70.4458C298.508 70.1589 155.488 69.8721 45.5366 69.8721C24.7332 69.8721 49.4663 44.9935 21.0809 38.1766C15.7074 36.3122 8.68039 34.7346 0 34.5911V37.4595C9.5187 37.213 16.9866 35.8145 22.6721 33.7589C25.1301 32.8701 16.4888 32.2131 14.054 32.8701Z" fill="#9C7E21"/>
              </svg>
            </div>
          </div>

        </form>

        <!-- Technical Support (1316:80883) -->
        <div class="forgot-support-wrap">
          <a href="#faq" class="forgot-support-link" data-node-id="1316:80883">HỖ TRỢ KỸ THUẬT</a>
        </div>

      </div>

    </div>
  `;

  // Submit Handler
  const form = container.querySelector('#forgotPasswordForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = container.querySelector('#forgotEmail')?.value?.trim();
      if (!email) {
        alert('Vui lòng nhập địa chỉ email của bạn.');
        return;
      }

      // Send password reset email
      sendPasswordResetEmail({ email });

      // Redirect to Check Inbox page (Figma 1316:81054)
      window.location.hash = 'check-inbox';
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
