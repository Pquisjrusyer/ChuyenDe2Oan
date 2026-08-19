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
        <img src="./assets/7c68e3ca72278b8193b62bcefa0dbacd65ab30a8.png" alt="" />
      </div>

      <!-- Main Content Card (1316:81056) -->
      <div class="reg-success-content trailer-scroll-reveal trailer-reveal-scale" data-node-id="1316:81056">
        
        <!-- Big Title (1316:81057) -->
        <h1 class="reg-success-heading" data-node-id="1316:81057">
          KIỂM TRA HỘP THƯ CỦA BẠN
        </h1>

        <!-- Golden Shield Check Icon (1316:81377) -->
        <div class="reg-success-shield-icon" data-node-id="1316:81377">
          <img src="./assets/c3bbd3c027cc168dec7fa3fcb244af583a85d9fa.svg" alt="Kiểm tra hộp thư" />
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
          <!-- Horror Metal Side Brackets -->
          <div class="reg-success-bracket-left">
            <img src="./assets/5330b79b9e3ec9f5d8e099674f3b9cd251731b0b.svg" alt="" />
          </div>

          <a href="#login" class="reg-success-cta-btn" id="btnBackToLogin" data-node-id="I1316:81060;708:582">
            <span class="reg-success-btn-text" data-node-id="I1316:81060;708:606">QUAY LẠI ĐĂNG NHẬP</span>
          </a>

          <div class="reg-success-bracket-right">
            <img src="./assets/2a8d91cd956a7b707d91ed3faed539513ed626cf.svg" alt="" />
          </div>
        </div>

        <!-- Divider Line (1316:81411) -->
        <div class="inbox-divider-row" data-node-id="1316:81411">
          <div class="inbox-divider-line">
            <img src="./assets/e12ced11adff108c8b93e38961ee445224dbe44e.svg" alt="" />
          </div>
          <span class="inbox-divider-text" data-node-id="1316:81061">Không nhận được email ?</span>
          <div class="inbox-divider-line">
            <img src="./assets/e12ced11adff108c8b93e38961ee445224dbe44e.svg" alt="" />
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
