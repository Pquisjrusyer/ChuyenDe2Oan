/* ============================================
   OAN — Login Page (Design 15: 1286-79841)
   ============================================ */

export async function renderLogin(container) {
  container.innerHTML = `
    <div class="page-auth">
      <div class="auth-content">
        <div class="auth-split" style="min-height:50vh;align-items:center;">
          <div class="auth-left animate-fade-in-left">
            <h1 class="auth-left__title" style="font-size:48px;">Đăng Nhập Ngay</h1>
            <p class="auth-left__subtitle">Liên kết tài khoản Steam hoặc Epic game</p>
            <div class="auth-left__alt" style="margin-top:40px;">
              <p class="auth-left__alt-text">Chưa có tài khoản ?</p>
              <a href="#register" style="display:inline-flex;align-items:center;gap:8px;color:var(--color-gray-400);font-size:14px;">
                Trợ giúp đăng ký nhanh
                <span style="font-size:24px;">🔑</span>
              </a>
            </div>
          </div>
          <div class="auth-form animate-fade-in-right">
            <div class="form-group">
              <label class="form-label">email hoặc tên đăng nhập</label>
              <div class="form-input-icon">
                <input type="text" class="form-input" placeholder="Họ và tên" />
                <span class="icon">●</span>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Mật khẩu</label>
              <div class="form-input-icon">
                <input type="password" class="form-input" placeholder="Đăng nhập mật khẩu" />
                <span class="icon">●</span>
              </div>
            </div>
            <div style="text-align:right;">
              <a href="#forgot-password" class="auth-form__forgot">Quên mật khẩu?</a>
            </div>
            <button class="btn btn-cta btn-full" style="margin-top:16px;">Đăng Nhập</button>
          </div>
        </div>

        <!-- Third Party Login -->
        <div class="auth-third-party reveal" style="margin-top:80px;margin-bottom:40px;">
          <div style="display:flex;align-items:center;gap:16px;justify-content:center;margin-bottom:32px;">
            <div style="flex:1;max-width:300px;height:1px;background:linear-gradient(90deg,transparent,var(--color-gold-600));"></div>
            <span class="auth-third-party__title" style="margin-bottom:0;">Đăng nhập với</span>
            <div style="flex:1;max-width:300px;height:1px;background:linear-gradient(90deg,var(--color-gold-600),transparent);"></div>
          </div>
          <div class="auth-third-party__icons">
            <div class="auth-third-party__icon" style="display:flex;align-items:center;justify-content:center;font-size:48px;">⊛</div>
            <div class="auth-third-party__icon" style="display:flex;align-items:center;justify-content:center;">
              <span style="font-size:14px;font-weight:700;border:2px solid #fff;padding:8px 12px;">EPIC GAMES</span>
            </div>
            <div class="auth-third-party__icon" style="display:flex;align-items:center;justify-content:center;font-size:48px;">✕</div>
          </div>
        </div>
      </div>
    </div>
  `;
}
