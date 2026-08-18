/* ========================================================
   OAN Horror Game — Legal Pages (Privacy, Terms, Cookies)
   ======================================================== */

function renderLegalFrame({ activeTab, tag, title, subtitle, effectiveDate, contentHTML }) {
  return `
    <div class="page-legal-decree">
      <!-- Background Ambient -->
      <div class="legal-bg-ambient">
        <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" class="legal-bg-img" />
        <div class="legal-center-red-aura"></div>
      </div>

      <div class="legal-container">
        <!-- Navigation Top Bar -->
        <div class="legal-top-bar">
          <a href="#home" class="legal-back-link">
            <span class="legal-back-icon">←</span>
            <span>Quay về Sảnh Chính</span>
          </a>

          <!-- Switcher Tabs -->
          <div class="legal-tabs-row">
            <a href="#privacy" class="legal-tab-btn ${activeTab === 'privacy' ? 'is-active' : ''}">
              Chính Sách Bảo Mật
            </a>
            <a href="#terms" class="legal-tab-btn ${activeTab === 'terms' ? 'is-active' : ''}">
              Điều Khoản Dịch Vụ
            </a>
            <a href="#cookie" class="legal-tab-btn ${activeTab === 'cookie' ? 'is-active' : ''}">
              Chính Sách Cookie
            </a>
          </div>
        </div>

        <!-- Decree Header -->
        <header class="legal-doc-header">
          <div class="legal-doc-tag">${tag}</div>
          <h1 class="legal-doc-title">${title}</h1>
          <p class="legal-doc-subtitle">${subtitle}</p>
          <div class="legal-doc-effective">HIỆU LỰC TỪ: ${effectiveDate} | MÃ PHONG ẤN: #OAN-SEAL-2026</div>
        </header>

        <!-- Decree Body -->
        <div class="legal-doc-body">
          <div class="legal-seal-stamp">
            <span class="seal-sub">DINH THỰ HỌ HỨA</span>
            <span class="seal-main">TUYỆT MẬT</span>
            <span class="seal-sub">ĐÃ PHONG ẤN</span>
          </div>

          ${contentHTML}

          <!-- Footer CTA -->
          <div class="legal-doc-footer-cta">
            <p class="legal-footer-note">
              Nếu bạn có bất kỳ thắc mắc hoặc cần giải trừ phong ấn dữ liệu cá nhân, vui lòng liên hệ: <strong>support@oan-game.vn</strong>
            </p>
            <a href="#faq" class="legal-back-link">
              <span>Xem Câu Hỏi Thường Gặp (FAQ) →</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function renderPrivacy(container) {
  const contentHTML = `
    <article class="legal-article">
      <h2 class="legal-article-heading">
        <span class="legal-article-num">ĐIỀU 1</span>
        THU THẬP LINH HỒN & DỮ LIỆU CÁ NHÂN
      </h2>
      <p class="legal-article-text">
        Khi bạn đặt chân vào thế giới của <strong>OÁN — Cursed Memories</strong>, chúng tôi chỉ thu thập những thông tin thiết yếu nhất để duy trì liên kết giữa bạn và Dinh thự Nhà Họ Hứa:
      </p>
      <ul class="legal-article-list">
        <li><strong>Địa chỉ Email:</strong> Được dùng để phong ấn giao ước nhận tin tức, mã quà tặng tri ân độc quyền và thông báo thời khắc phát hành bản Demo.</li>
        <li><strong>Dữ liệu thiết bị & Gameplay:</strong> Thông số cấu hình máy tính, nhật ký sinh tồn, thời gian đối mặt oán hồn nhằm tối ưu hóa độ mượt và sửa lỗi kỹ thuật.</li>
        <li><strong>Dấu vết ẩn danh:</strong> Địa chỉ IP và vị trí địa lý đại khái để ngăn chặn các cuộc xâm nhập ma quái trái phép vào hệ thống máy chủ.</li>
      </ul>
    </article>

    <article class="legal-article">
      <h2 class="legal-article-heading">
        <span class="legal-article-num">ĐIỀU 2</span>
        CAM KẾT BẢO VỆ & PHONG ẤN TUYỆT MẬT
      </h2>
      <p class="legal-article-text">
        Ban Quản Trị OÁN Studios cam kết bằng danh dự: <strong>Không bao giờ bán, chuyển nhượng hay để lộ dữ liệu cá nhân của bạn</strong> cho bất kỳ bên thứ ba hay thực thể bóng tối nào.
      </p>
      <div class="legal-warning-quote">
        "Mọi thông tin danh tính của người thám hiểm đều được mã hóa bằng chuẩn phong ấn hiện đại nhất (AES-256 / TLS Encryption). Ngay cả những hồn ma lang thang trong dinh thự cũng không thể đọc trộm email của bạn."
      </div>
    </article>

    <article class="legal-article">
      <h2 class="legal-article-heading">
        <span class="legal-article-num">ĐIỀU 3</span>
        QUYỀN LỰC CỦA NGƯỜI THÁM HIỂM (QUYỀN RIÊNG TƯ)
      </h2>
      <p class="legal-article-text">
        Bạn nắm giữ toàn quyền quyết định đối với dữ liệu của mình:
      </p>
      <ul class="legal-article-list">
        <li><strong>Quyền yêu cầu giải trừ:</strong> Bạn có thể hủy đăng ký nhận thư hoặc yêu cầu xóa vĩnh viễn email khỏi hồ sơ dinh thự bất cứ lúc nào.</li>
        <li><strong>Quyền tra cứu:</strong> Bạn có quyền kiểm tra xem chúng tôi đang lưu giữ những thông tin ký ức nào của bạn.</li>
      </ul>
    </article>
  `;

  container.innerHTML = renderLegalFrame({
    activeTab: 'privacy',
    tag: 'VĂN BẢN PHÁP LÝ & BẢO MẬT',
    title: 'CHÍNH SÁCH BẢO MẬT & PHONG ẤN',
    subtitle: 'Cam kết bảo vệ tuyệt đối danh tính và thông tin cá nhân của người chơi khi thám hiểm Dinh Thự Nhà Họ Hứa.',
    effectiveDate: '01/01/2026',
    contentHTML: contentHTML,
  });
}

export function renderTerms(container) {
  const contentHTML = `
    <article class="legal-article">
      <h2 class="legal-article-heading">
        <span class="legal-article-num">ĐIỀU 1</span>
        CHẤP NHẬN GIAO ƯỚC SINH TỒN
      </h2>
      <p class="legal-article-text">
        Bằng việc truy cập trang web hoặc tải bản trải nghiệm trò chơi <strong>OÁN</strong>, bạn xác nhận đã đọc, hiểu và đồng ý bị ràng buộc bởi toàn bộ các điều khoản trong bản giao ước này. Nếu bạn cảm thấy sợ hãi và không đồng ý, xin vui lòng đóng tab trình duyệt và quay về ánh sáng an toàn.
      </p>
    </article>

    <article class="legal-article">
      <h2 class="legal-article-heading">
        <span class="legal-article-num">ĐIỀU 2</span>
        CẢNH BÁO TÂM LÝ & ĐỘ TUỔI (18+)
      </h2>
      <p class="legal-article-text">
        Trò chơi có chứa các yếu tố kinh dị tâm linh mạnh, hình ảnh jumpscare, máu me, âm thanh rùng rợn và cốt truyện đen tối dựa trên truyền thuyết đô thị Việt Nam:
      </p>
      <div class="legal-warning-quote">
        "Khuyến cáo nghiêm cấm đối với người dưới 18 tuổi, phụ nữ có thai, người có tiền sử bệnh tim mạch, động kinh cảm quang hoặc dễ bị rối loạn lo âu khi đối mặt bóng tối."
      </div>
    </article>

    <article class="legal-article">
      <h2 class="legal-article-heading">
        <span class="legal-article-num">ĐIỀU 3</span>
        QUY TẮC BẢN QUYỀN & SỞ HỮU TRÍ TUỆ
      </h2>
      <p class="legal-article-text">
        Toàn bộ nội dung, hình ảnh nhân vật (Hứa Bát Kiên, Hứa Minh Đức...), mô hình 3D, âm thanh kinh dị và kịch bản cốt truyện đều thuộc quyền sở hữu trí tuệ độc quyền của <strong>OÁN Horror Experience Studios</strong>:
      </p>
      <ul class="legal-article-list">
        <li><strong>Được phép:</strong> Bạn được tự do livestream, làm video reaction, viết bài đánh giá và thảo luận trong cộng đồng.</li>
        <li><strong>Nghiêm cấm:</strong> Trích xuất mã nguồn, phân phối lại trái phép bản cài đặt, hoặc trục lợi thương mại từ tài nguyên của game khi chưa có văn bản đồng thuận.</li>
      </ul>
    </article>

    <article class="legal-article">
      <h2 class="legal-article-heading">
        <span class="legal-article-num">ĐIỀU 4</span>
        TRÁCH NHIỆM KHI BƯỚC VÀO BÓNG TỐI
      </h2>
      <p class="legal-article-text">
        Chúng tôi không chịu trách nhiệm về những cơn ác mộng nửa đêm, cảm giác có người nhìn sau lưng hoặc sự sợ hãi tột cùng mà trò chơi mang lại cho bạn. Hãy chuẩn bị một tâm lý vững vàng!
      </p>
    </article>
  `;

  container.innerHTML = renderLegalFrame({
    activeTab: 'terms',
    tag: 'BẢN GIAO ƯỚC NGƯỜI CHƠI',
    title: 'ĐIỀU KHOẢN DỊCH VỤ & THỎA THUẬN',
    subtitle: 'Quy chuẩn ứng xử, giới hạn độ tuổi và trách nhiệm pháp lý khi tham gia vào vũ trụ kinh dị tâm linh OÁN.',
    effectiveDate: '01/01/2026',
    contentHTML: contentHTML,
  });
}

export function renderCookiePolicy(container) {
  const contentHTML = `
    <article class="legal-article">
      <h2 class="legal-article-heading">
        <span class="legal-article-num">ĐIỀU 1</span>
        COOKIE TÂM LINH LÀ GÌ?
      </h2>
      <p class="legal-article-text">
        Cookie là những mảnh ký ức nhỏ được lưu giữ trên trình duyệt của bạn. Chúng đóng vai trò như những ngọn nến dẫn đường, giúp Dinh Thự nhận diện bạn mỗi khi quay trở lại.
      </p>
    </article>

    <article class="legal-article">
      <h2 class="legal-article-heading">
        <span class="legal-article-num">ĐIỀU 2</span>
        CÁC LOẠI PHONG ẤN COOKIE CHÚNG TÔI SỬ DỤNG
      </h2>
      <ul class="legal-article-list">
        <li><strong>Cookie Thiết Yếu (Essential):</strong> Cần thiết để duy trì trạng thái đăng nhập, âm lượng hiệu ứng âm thanh và tiến trình trang web hoạt động bình thường.</li>
        <li><strong>Cookie Trải Nghiệm & Ký Ức (Preferences):</strong> Ghi nhớ tùy chọn âm nhạc BGM, ngôn ngữ và trạng thái đã xem qua đoạn Intro kinh dị.</li>
        <li><strong>Cookie Thống Kê & Phân Tích (Analytics):</strong> Thu thập ẩn danh số lượng người sống sót thám hiểm từng căn phòng để giúp cải thiện hiệu năng hệ thống.</li>
      </ul>
    </article>

    <article class="legal-article">
      <h2 class="legal-article-heading">
        <span class="legal-article-num">ĐIỀU 3</span>
        QUẢN LÝ VÀ THAY ĐỔI TÙY CHỌN COOKIE
      </h2>
      <p class="legal-article-text">
        Bạn có thể xóa hoặc thiết lập lại sự đồng ý Cookie bất kỳ lúc nào bằng cách bấm vào nút bên dưới:
      </p>
      <div style="margin-top: 16px;">
        <button type="button" class="btn-cookie-accept" onclick="if(window.openCookieConsentBanner) window.openCookieConsentBanner(); alert('Đã mở lại bảng điều khiển Phong Ấn Cookie.');">
          ⚙️ THIẾT LẬP LẠI PHONG ẤN COOKIE
        </button>
      </div>
    </article>
  `;

  container.innerHTML = renderLegalFrame({
    activeTab: 'cookie',
    tag: 'QUY ƯỚC LƯU VẾT KÝ ỨC',
    title: 'CHÍNH SÁCH COOKIE & BỘ NHỚ',
    subtitle: 'Hiểu rõ cách thức Dinh Thự lưu giữ dấu chân và ký ức của bạn để mang lại trải nghiệm kinh dị tối ưu.',
    effectiveDate: '01/01/2026',
    contentHTML: contentHTML,
  });
}
