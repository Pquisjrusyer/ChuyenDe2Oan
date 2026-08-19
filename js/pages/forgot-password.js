/* ========================================================
   OAN — FORGOT PASSWORD PAGE (Figma Node 1316:80681 "quên mật khẩu")
   ======================================================== */

import { sendPasswordResetEmail } from '../services/email-service.js';

export async function renderForgotPassword(container) {
  container.innerHTML = `
    <div class="reg-success-page" data-node-id="1316:80681">
      
      <!-- Background Grunge Overlay (1316:80882) -->
      <div class="reg-success-grunge-bg" data-node-id="1316:80882">
        <img src="./assets/7c68e3ca72278b8193b62bcefa0dbacd65ab30a8.png" alt="" />
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
                <img src="./assets/7c2b03b2d6de7d18a9169a94ecdcb76923fdaa0e.svg" alt="" />
              </div>
            </div>
          </div>

          <!-- CTA Button: Gửi liên kết (1316:80810) -->
          <div class="reg-success-btn-frame" data-node-id="1316:80810">
            <!-- Horror Metal Side Brackets -->
            <div class="reg-success-bracket-left">
              <img src="./assets/5330b79b9e3ec9f5d8e099674f3b9cd251731b0b.svg" alt="" />
            </div>

            <button type="submit" class="reg-success-cta-btn" id="btnSendResetLink" data-node-id="I1316:80810;708:582">
              <span class="reg-success-btn-text" data-node-id="I1316:80810;708:606">GỬI LIÊN KẾT</span>
            </button>

            <div class="reg-success-bracket-right">
              <img src="./assets/2a8d91cd956a7b707d91ed3faed539513ed626cf.svg" alt="" />
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
