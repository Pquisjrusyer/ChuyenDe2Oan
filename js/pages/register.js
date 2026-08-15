/* ============================================
   OAN — Register Page (Design 14: 1227-79552)
   ============================================ */

export async function renderRegister(container) {
  container.innerHTML = `
    <div class="page-auth">
      <div class="auth-content">
        <!-- Hero carousel -->
        <div style="position:relative;width:100%;height:400px;margin-bottom:60px;overflow:hidden;border:2px solid rgba(139,0,0,0.3);">
          <div style="width:100%;height:100%;background:linear-gradient(135deg, #1a0808, #0d0000);display:flex;align-items:center;justify-content:center;">
            <div style="text-align:center;">
              <svg viewBox="0 0 200 120" fill="none" style="width:200px;margin:0 auto 16px;">
                <text x="100" y="80" text-anchor="middle" fill="#D9B74C" font-family="'Space Mono', monospace" font-size="64" font-weight="700">OÁN</text>
              </svg>
              <p style="font-family:var(--font-display);font-size:14px;color:var(--color-gray-400);">COMING SOON</p>
              <div class="platform-icons" style="gap:16px;justify-content:center;margin-top:16px;">
                <span style="color:#fff;font-size:12px;">⊛ STEAM</span>
                <span style="color:#fff;font-size:12px;">✕ XBOX</span>
                <span style="color:#fff;font-size:12px;">◆ EPIC</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Registration prompt -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:60px;margin-bottom:60px;" class="reveal">
          <div>
            <p style="font-family:var(--font-display);font-size:22px;font-weight:700;color:var(--color-white);line-height:1.4;font-style:italic;">
              Tạo tài khoản để khám phá thế giới của OÁN và nhận những cập nhật mới nhất.
            </p>
          </div>
          <div style="background:rgba(20,10,10,0.6);border:1px solid rgba(255,255,255,0.08);padding:24px;border-radius:4px;">
            <h3 style="font-family:var(--font-display);font-size:18px;font-weight:700;color:var(--color-white);margin-bottom:4px;">Đăng ký</h3>
            <p style="font-size:13px;color:var(--color-gray-400);margin-bottom:16px;">
              Tạo tài khoản để khám phá giới đăng ký nhận những cập nhật tới từ game.
            </p>
          </div>
        </div>

        <!-- Quick explore links -->
        <div class="game-info-grid reveal" style="margin-bottom:60px;">
          <a href="#storyline" class="game-info-item hover-lift" style="cursor:pointer;text-decoration:none;">
            <div class="game-info-item__label">📖</div>
            <div class="game-info-item__value" style="font-size:14px;margin-top:6px;">Cốt Truyện</div>
          </a>
          <a href="#info" class="game-info-item hover-lift" style="cursor:pointer;text-decoration:none;">
            <div class="game-info-item__label">🏚️</div>
            <div class="game-info-item__value" style="font-size:14px;margin-top:6px;">Nhà Hứa</div>
          </a>
          <a href="#gameplay" class="game-info-item hover-lift" style="cursor:pointer;text-decoration:none;">
            <div class="game-info-item__label">⚔️</div>
            <div class="game-info-item__value" style="font-size:14px;margin-top:6px;">Hệ Địa Linh</div>
          </a>
          <a href="#character" class="game-info-item hover-lift" style="cursor:pointer;text-decoration:none;border-right:none;">
            <div class="game-info-item__label">👥</div>
            <div class="game-info-item__value" style="font-size:14px;margin-top:6px;">Nhân Vật</div>
          </a>
        </div>

        <!-- Registration Form -->
        <div class="auth-split reveal">
          <div class="auth-left">
            <h1 class="auth-left__title">Đăng Ký<br/>Ngay Tài Khoản Trò Chơi</h1>
            <p class="auth-left__subtitle">Liên kết tài khoản Steam hoặc Epic game</p>
            <div class="auth-form__checkbox" style="margin-top:24px;">
              <input type="checkbox" id="agree-terms" />
              <label for="agree-terms">Tôi đồng ý với Điều khoản sử dụng và Chính sách bảo mật</label>
            </div>
            <div class="auth-left__alt" style="margin-top:32px;">
              <p class="auth-left__alt-text">Đã có tài khoản?</p>
              <a href="#login" style="display:inline-flex;align-items:center;gap:8px;color:var(--color-gray-400);font-size:14px;">
                Trợ giúp đăng ký nhanh
                <span style="font-size:20px;">🔑</span>
              </a>
            </div>
          </div>
          <div class="auth-form">
            <div class="form-group">
              <label class="form-label">Họ và tên</label>
              <div class="form-input-icon">
                <input type="text" class="form-input" placeholder="Họ và tên" />
                <span class="icon">👤</span>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Tên đăng nhập</label>
              <div class="form-input-icon">
                <input type="text" class="form-input" placeholder="Tên đăng nhập" />
                <span class="icon">👤</span>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Email</label>
              <input type="email" class="form-input" placeholder="name@gmail.com" />
            </div>
            <div class="form-group">
              <label class="form-label">Mật khẩu</label>
              <div class="form-input-icon">
                <input type="password" class="form-input" placeholder="Tối thiểu 8 ký tự" />
                <span class="icon">👁</span>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Xác nhận mật khẩu</label>
              <div class="form-input-icon">
                <input type="password" class="form-input" placeholder="Nhập lại mật khẩu" />
                <span class="icon">👁</span>
              </div>
            </div>
            <button class="btn btn-cta btn-full" style="margin-top:8px;">Đăng Ký</button>
          </div>
        </div>

        <!-- Third Party Login -->
        <div class="auth-third-party reveal" style="margin-top:60px;margin-bottom:40px;">
          <div style="display:flex;align-items:center;gap:16px;justify-content:center;margin-bottom:32px;">
            <div style="flex:1;max-width:300px;height:1px;background:linear-gradient(90deg,transparent,var(--color-gold-600));"></div>
            <span class="auth-third-party__title" style="margin-bottom:0;">Đăng ký với</span>
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
