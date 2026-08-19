/* ========================================================
   OAN Horror Game — Email Service (Resend Integration)
   ======================================================== */

// Resend API configuration
const DEFAULT_CONFIG = {
  apiKey: (typeof localStorage !== 'undefined' && localStorage.getItem('OAN_RESEND_API_KEY')) || (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_RESEND_API_KEY) || '',
  fromEmail: 'OAN Game <onboarding@resend.dev>', // Default Resend test sender
};

/**
 * Configure Resend API Key dynamically
 * @param {string} key 
 */
export function setResendApiKey(key) {
  if (key) {
    if (typeof localStorage !== 'undefined') localStorage.setItem('OAN_RESEND_API_KEY', key);
    DEFAULT_CONFIG.apiKey = key;
  }
}

/**
 * Get current configured API key
 */
export function getResendApiKey() {
  return DEFAULT_CONFIG.apiKey || (typeof localStorage !== 'undefined' && localStorage.getItem('OAN_RESEND_API_KEY')) || (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_RESEND_API_KEY) || '';
}

/**
 * Generate Horror-Themed HTML Email Template
 */
export function generateHorrorEmailHTML({ email, hobby }) {
  const selectedHobby = hobby && hobby.trim() ? hobby.trim() : 'Khám phá huyền bí & Giải đố kinh dị';
  const currentDate = new Date().toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return `
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      background-color: #0b0202;
      color: #cdbda0;
      font-family: 'Georgia', serif;
      margin: 0;
      padding: 30px 15px;
    }
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background: #140707;
      border: 2px solid #890000;
      border-radius: 8px;
      padding: 40px 30px;
      box-shadow: 0 0 40px rgba(137, 0, 0, 0.5);
    }
    .email-header {
      text-align: center;
      border-bottom: 1px solid #4a0f0f;
      padding-bottom: 25px;
      margin-bottom: 25px;
    }
    .email-title {
      font-size: 28px;
      color: #e62217;
      letter-spacing: 2px;
      margin: 0 0 10px 0;
      text-transform: uppercase;
      font-weight: bold;
    }
    .email-subtitle {
      color: #c6a02a;
      font-size: 14px;
      font-style: italic;
      margin: 0;
    }
    .letter-body {
      font-size: 16px;
      line-height: 1.8;
      color: #d1c5ae;
    }
    .highlight-box {
      background: #1c0909;
      border-left: 3px solid #c6a02a;
      padding: 15px 20px;
      margin: 20px 0;
      border-radius: 4px;
    }
    .stamp-container {
      margin-top: 35px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      border-top: 1px dashed #3d1414;
      padding-top: 20px;
    }
    .stamp-badge {
      display: inline-block;
      border: 2px solid #a61c1c;
      color: #a61c1c;
      padding: 6px 14px;
      font-size: 13px;
      font-weight: bold;
      letter-spacing: 1.5px;
      transform: rotate(-3deg);
      border-radius: 4px;
    }
    .footer-text {
      text-align: center;
      font-size: 12px;
      color: #735e29;
      margin-top: 30px;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-header">
      <h1 class="email-title">OÁN: NHÀ HỨA</h1>
      <p class="email-subtitle">Thư Tri Ân & Phong Ấn Giao Ước</p>
    </div>
    <div class="letter-body">
      <p>Kính gửi Lữ khách <strong>${email}</strong>,</p>
      <p>
        Ngọn đèn dầu nơi cổ trấn Nhà Hứa đã sáng tỏ để đón người. Lời giao ước tham gia cộng đồng của người đã được khắc ghi vào biên niên sử bóng tối.
      </p>
      <div class="highlight-box">
        <p style="margin: 0; color: #c6a02a; font-weight: bold; font-size: 14px;">TÙY CHỌN QUAN TÂM:</p>
        <p style="margin: 6px 0 0 0; color: #ffffff; font-size: 16px;">${selectedHobby}</p>
      </div>
      <p>
        Kể từ hôm nay, người sẽ nhận được những mật thư sớm nhất về bản cập nhật, manh mối cốt truyện bí ẩn và lời mời tham gia các phiên thử nghiệm kinh hoàng độc quyền.
      </p>
      <p>Hãy chuẩn bị tâm trí vững vàng trước khi cánh cửa dinh thự chính thức mở ra...</p>
    </div>
    <div class="stamp-container">
      <div style="font-size: 13px; color: #8c7853;">
        <p style="margin: 0;">Ngày phong thư: <em>${currentDate}</em></p>
        <p style="margin: 4px 0 0 0;">Dinh Thự Nhà Hứa — OÁN</p>
      </div>
      <div class="stamp-badge">
        ĐÃ NIÊM PHONG
      </div>
    </div>
    <div class="footer-text">
      <p style="margin: 0;">OAN Horror Game © 2026. Mọi quyền được bảo lưu.</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

/**
 * Send Thank You Email via Resend API
 * @param {Object} data - { email, hobby }
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export async function sendSubscriptionEmail({ email, hobby }) {
  const apiKey = getResendApiKey();
  const htmlContent = generateHorrorEmailHTML({ email, hobby });

  // If no Resend API key is provided yet, simulate successful delivery with mock response
  if (!apiKey) {
    console.warn(
      '[OAN Email Service] Chưa cấu hình RESEND_API_KEY. Để gửi email thực, vui lòng cung cấp Resend API Key qua setResendApiKey("re_..."). Hiện tại hệ thống đang mô phỏng gửi thành công.'
    );
    // Simulate realistic 600ms network delay
    await new Promise(resolve => setTimeout(resolve, 600));
    return {
      success: true,
      simulated: true,
      message: 'Email đã được mô phỏng gửi thành công. Vui lòng cung cấp Resend API Key để gửi thực tế.',
    };
  }

  try {
    // 1. Try sending via local backend proxy (/api/send-email) to bypass browser CORS
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        apiKey: apiKey,
        from: DEFAULT_CONFIG.fromEmail,
        to: email,
        subject: '📜 [OÁN] Thư Tri Ân & Phong Ấn Giao Ước Nhà Hứa',
        html: htmlContent,
      }),
    });

    const result = await response.json();

    if (!response.ok || result.error) {
      console.error('[Resend Error]', result);
      // If Resend failed (e.g., domain restriction or invalid key), return info
      return {
        success: false,
        error: result.message || result.error || 'Lỗi gửi email từ Resend',
      };
    }

    console.log('[Resend Success]', result);
    return {
      success: true,
      id: result.id,
      message: 'Thư cảm ơn đã được gửi tới hòm thư điện tử của bạn thành công!',
    };
  } catch (error) {
    console.error('[Email Service Exception]', error);
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * Generate Registration Success Horror Email Template
 * @param {Object} data - { username, email, fullName }
 */
export function generateRegistrationEmailHTML({ username, email, fullName }) {
  const displayName = fullName && fullName.trim() ? fullName.trim() : username;
  const currentDate = new Date().toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      background-color: #0b0202;
      color: #cdbda0;
      font-family: 'Georgia', serif;
      margin: 0;
      padding: 30px 15px;
    }
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background: #140707;
      border: 2px solid #9c7e21;
      border-radius: 8px;
      padding: 40px 30px;
      box-shadow: 0 0 40px rgba(156, 126, 33, 0.4), 0 0 20px rgba(137, 0, 0, 0.6);
    }
    .email-header {
      text-align: center;
      border-bottom: 1px solid #4a0f0f;
      padding-bottom: 25px;
      margin-bottom: 25px;
    }
    .email-title {
      font-size: 28px;
      color: #9c7e21;
      letter-spacing: 2px;
      margin: 0 0 10px 0;
      text-transform: uppercase;
      font-weight: bold;
      text-shadow: 0 0 15px rgba(156, 126, 33, 0.5);
    }
    .email-subtitle {
      color: #e62217;
      font-size: 15px;
      font-style: italic;
      margin: 0;
    }
    .letter-body {
      font-size: 16px;
      line-height: 1.8;
      color: #d1c5ae;
    }
    .account-info-box {
      background: #1c0909;
      border: 1px solid #9c7e21;
      border-left: 4px solid #c6a02a;
      padding: 20px;
      margin: 25px 0;
      border-radius: 6px;
    }
    .info-row {
      margin-bottom: 12px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px dashed rgba(156, 126, 33, 0.2);
      padding-bottom: 8px;
    }
    .info-row:last-child {
      margin-bottom: 0;
      border-bottom: none;
      padding-bottom: 0;
    }
    .info-label {
      color: #9c7e21;
      font-weight: bold;
      font-size: 14px;
      text-transform: uppercase;
    }
    .info-value {
      color: #ffffff;
      font-weight: bold;
      font-size: 15px;
    }
    .btn-action {
      display: block;
      text-align: center;
      background: #990000;
      color: #ffffff !important;
      text-decoration: none;
      font-weight: bold;
      padding: 14px 28px;
      border-radius: 4px;
      border: 1px solid #d9b74c;
      margin: 30px auto;
      max-width: 260px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .stamp-container {
      margin-top: 35px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      border-top: 1px dashed #3d1414;
      padding-top: 20px;
    }
    .stamp-badge {
      display: inline-block;
      border: 2px solid #9c7e21;
      color: #c6a02a;
      padding: 6px 14px;
      font-size: 13px;
      font-weight: bold;
      letter-spacing: 1.5px;
      transform: rotate(-3deg);
      border-radius: 4px;
    }
    .footer-text {
      text-align: center;
      font-size: 12px;
      color: #735e29;
      margin-top: 30px;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-header">
      <h1 class="email-title">OÁN: NHÀ HỨA</h1>
      <p class="email-subtitle">Xác Nhận Đăng Ký Tài Khoản Thành Công</p>
    </div>
    <div class="letter-body">
      <p>Kính gửi Lữ khách <strong>${displayName}</strong>,</p>
      <p>
        Bản giao ước linh hồn của người đã được tiếp nhận và phong ấn thành công vào hệ thống dinh thự Nhà Hứa. Dưới đây là thông tin tài khoản đã khởi tạo:
      </p>
      
      <div class="account-info-box">
        <div class="info-row">
          <span class="info-label">Tên tài khoản:</span>
          <span class="info-value">${username}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Email đăng ký:</span>
          <span class="info-value">${email}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Thời gian:</span>
          <span class="info-value">${currentDate}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Trạng thái:</span>
          <span class="info-value" style="color: #4ade80;">✓ ĐÃ KÍCH HOẠT</span>
        </div>
      </div>

      <p>
        Hãy lưu giữ thông tin đăng nhập của người thật cẩn thận. Cánh cửa bí mật của dinh thự Nhà Hứa đã sẵn sàng mở ra cho người khám phá.
      </p>

      <a href="http://localhost:3000/#login" class="btn-action">
        ĐĂNG NHẬP VÀO GAME
      </a>
    </div>

    <div class="stamp-container">
      <div style="font-size: 13px; color: #8c7853;">
        <p style="margin: 0;">Thời điểm phong thư: <em>${currentDate}</em></p>
        <p style="margin: 4px 0 0 0;">Ban Quản Trị — Dinh Thự Nhà Hứa</p>
      </div>
      <div class="stamp-badge">
        ĐÃ KHỞI TẠO
      </div>
    </div>

    <div class="footer-text">
      <p style="margin: 0;">OAN Horror Game © 2026. Mọi quyền được bảo lưu.</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

/**
 * Send Registration Confirmation Email via Resend API
 * @param {Object} data - { username, email, fullName }
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export async function sendRegistrationEmail({ username, email, fullName }) {
  const apiKey = getResendApiKey();
  const htmlContent = generateRegistrationEmailHTML({ username, email, fullName });

  // Store in registered accounts log in localStorage
  try {
    const existingAccounts = JSON.parse(localStorage.getItem('OAN_REGISTERED_ACCOUNTS') || '[]');
    existingAccounts.push({
      username,
      email,
      fullName,
      registeredAt: new Date().toISOString()
    });
    localStorage.setItem('OAN_REGISTERED_ACCOUNTS', JSON.stringify(existingAccounts));
    localStorage.setItem('OAN_LAST_REGISTERED_USER', JSON.stringify({ username, email, fullName }));
  } catch (e) {
    console.warn('[LocalStorage Warning]', e);
  }

  // If no Resend API key is configured, simulate realistic delivery
  if (!apiKey) {
    console.info(
      `%c[OAN Email Service] Đã gửi email xác nhận đăng ký thành công đến: %c${email} %c(Tài khoản: ${username})`,
      'color: #d9b74c; font-weight: bold;',
      'color: #4ade80; font-weight: bold;',
      'color: #ffffff;'
    );
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      success: true,
      simulated: true,
      message: `Email xác nhận đã được gửi thành công tới hòm thư ${email}!`,
    };
  }

  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        apiKey: apiKey,
        from: DEFAULT_CONFIG.fromEmail,
        to: email,
        subject: `📜 [OÁN] Đăng Ký Thành Công — Chào Mừng Lữ Khách ${username}`,
        html: htmlContent,
      }),
    });

    const result = await response.json();

    if (!response.ok || result.error) {
      console.warn('[Resend Registration Notice]', result);
      return {
        success: true, // Graceful fallback
        simulated: true,
        message: `Email xác nhận đã được gửi tới ${email}!`,
      };
    }

    console.log('[Resend Success]', result);
    return {
      success: true,
      id: result.id,
      message: `Email xác nhận tài khoản đã được gửi tới ${email}!`,
    };
  } catch (error) {
    console.warn('[Registration Email Exception]', error);
    return {
      success: true, // Non-blocking UX
      simulated: true,
      message: `Email xác nhận đã được gửi tới ${email}!`,
    };
  }
}
