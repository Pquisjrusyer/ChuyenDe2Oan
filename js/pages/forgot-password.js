/* ============================================
   OAN — Forgot Password (Design 22: 1316-80681)
   ============================================ */

export async function renderForgotPassword(container) {
  container.innerHTML = `
    <div class="page-auth">
      <div class="auth-content" style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:60vh;">
        <div class="auth-centered animate-fade-in-up">
          <h1 class="auth-centered__title" style="font-size:72px;">Quên Mật Khẩu</h1>
          <p class="auth-centered__text" style="margin-bottom:40px;">
            Chúng tôi đã gửi một liên kết đặt lại mật khẩu đến email của bạn.
          </p>
          <div style="max-width:500px;margin:0 auto;">
            <div class="form-group" style="margin-bottom:24px;">
              <label class="form-label">địa chỉ email</label>
              <div class="form-input-icon">
                <input type="email" class="form-input" placeholder="email" />
                <span class="icon">●</span>
              </div>
            </div>
            <button class="btn btn-cta btn-full" style="margin-bottom:24px;">Gửi liên kết</button>
            <p style="font-family:var(--font-display);font-size:16px;font-weight:700;color:var(--color-white);text-transform:uppercase;">
              Hỗ trợ kỹ thuật
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}
