/* ========================================================
   OAN Horror Game — Email Service (Resend Integration)
   ======================================================== */

// Resend API configuration
// The user can provide their RESEND_API_KEY in localStorage or config
const DEFAULT_CONFIG = {
  apiKey: localStorage.getItem('OAN_RESEND_API_KEY') || '',
  fromEmail: 'OAN Game <onboarding@resend.dev>', // Default Resend test sender
};

/**
 * Configure Resend API Key dynamically
 * @param {string} key 
 */
export function setResendApiKey(key) {
  if (key) {
    localStorage.setItem('OAN_RESEND_API_KEY', key);
    DEFAULT_CONFIG.apiKey = key;
  }
}

/**
 * Get current configured API key
 */
export function getResendApiKey() {
  return DEFAULT_CONFIG.apiKey || localStorage.getItem('OAN_RESEND_API_KEY') || '';
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
