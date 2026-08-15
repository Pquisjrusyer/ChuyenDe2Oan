/* ============================================
   OAN — Check Inbox (Design 21: 1316-81054)
   ============================================ */

export async function renderCheckInbox(container) {
  container.innerHTML = `
    <div class="page-auth">
      <div class="auth-content" style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:60vh;">
        <div class="auth-centered animate-fade-in-up">
          <h1 class="auth-centered__title" style="font-size:64px;">Kiểm Tra Hộp Thư Của Bạn</h1>
          <!-- Check icon -->
          <div class="auth-centered__icon" style="width:120px;height:120px;margin:32px auto;">
            <div style="width:100%;height:100%;background:var(--color-gold-400);border-radius:50%;display:flex;align-items:center;justify-content:center;">
              <span style="font-size:60px;color:var(--color-red-900);">✓</span>
            </div>
          </div>
          <p class="auth-centered__text">
            Chúng tôi đã gửi một liên kết đặt lại mật khẩu đến email của bạn.
          </p>
          <p class="auth-centered__note">THỜI GIAN HIỆU LỰC 15 PHÚT</p>
          <a href="#login" class="btn btn-cta btn-full" style="max-width:500px;margin:0 auto 32px;">
            Quay Lại Đăng Nhập
          </a>
          <div class="auth-centered__divider" style="max-width:500px;margin:0 auto;">
            <span>Không nhận được email ?</span>
          </div>
          <p style="margin-top:16px;">
            <a href="#" class="auth-centered__resend">Gửi lại email</a>
          </p>
        </div>
      </div>
    </div>
  `;
}
