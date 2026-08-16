/* ============================================
   OAN — Mail Confirmation (Figma 1332:84751)
   ============================================ */

export async function renderMailConfirm(container) {
  const subscribedEmail = localStorage.getItem('oan_subscribed_email') || 'bạn';

  container.innerHTML = `
    <div class="page-mail-confirm-figma" data-node-id="1332:84751">
      
      <!-- Back Button: Quay về trang chủ (1332:84775) -->
      <a href="#home" class="mail-confirm-back-btn" data-node-id="1332:84775">
        <img src="./assets/c491677dd10951c52f1c2639b5ebb9d4509fba28.svg" alt="" class="back-arrow-svg" data-node-id="1332:84773" />
        <span class="back-btn-text" data-node-id="1332:84774">Quay về trang chủ</span>
      </a>

      <div class="mail-confirm-center-content">
        
        <!-- Big Message Icon (1332:84761) -->
        <div class="mail-confirm-big-icon" data-node-id="1332:84761">
          <img src="./assets/9eb31dfcca65e6e5e660b7ed464a7ca25936ab25.svg" alt="Message Icon" class="msg-icon-svg animate-float" />
        </div>

        <!-- Headings & Info Column (1332:84769) -->
        <div class="mail-confirm-texts-group" data-node-id="1332:84769">
          
          <h1 class="mail-confirm-heading" data-node-id="1332:84765">
            CẢM ƠN ĐÃ GỬI MAIL CHO CHÚNG TÔI
          </h1>

          <p class="mail-confirm-subtext" data-node-id="1332:84766">
            Hãy kiểm tra tin nhắn thường xuyên để theo dõi cập nhật mới về trò chơi, chúc bạn có một trải nghiệm tốt.
          </p>

          <p class="mail-confirm-note" data-node-id="1332:84767">
            Mọi thông tin mới nhất sẽ được cập nhật qua mail
          </p>

        </div>

        <!-- Farewell Text (1332:84768) -->
        <div class="mail-confirm-farewell-text" data-node-id="1332:84768">
          THÂN ÁI VÀ CẢM ƠN!
        </div>

        <!-- Button to view the Thank You Email Template -->
        <div class="mail-confirm-actions-row">
          <button class="btn-view-sent-email" id="btn-open-email-preview" type="button">
            <span class="btn-email-glow-icon">✉️</span>
            <span>XEM THƯ CẢM ƠN ĐÃ GỬI (${subscribedEmail})</span>
          </button>
        </div>

      </div>

    </div>
  `;

  // Open Thank-You Email Preview Modal Handler
  const openEmailBtn = container.querySelector('#btn-open-email-preview');
  if (openEmailBtn) {
    openEmailBtn.addEventListener('click', () => {
      const emailModal = document.createElement('div');
      emailModal.className = 'horror-email-preview-overlay';
      emailModal.innerHTML = `
        <div class="horror-email-letter-frame">
          <button class="email-preview-close-btn" id="btn-close-email-modal" type="button" aria-label="Đóng">✕</button>
          
          <!-- Email Top Header -->
          <div class="email-letter-header">
            <div class="email-brand-seal">
              <img src="./assets/239dc59dcfee9a7ff13a48bcacb475e04a11730c.svg" alt="OÁN" class="email-brand-logo-img" />
              <div class="email-stamp-badge">XÁC NHẬN 18+</div>
            </div>
            
            <div class="email-meta-fields">
              <p class="email-meta-line"><strong>Từ:</strong> Ban Quản Trị OÁN Studios &lt;no-reply@oangame.vn&gt;</p>
              <p class="email-meta-line"><strong>Tới:</strong> <span class="email-recipient-highlight">${subscribedEmail}</span></p>
              <p class="email-meta-line"><strong>Chủ đề:</strong> [OÁN] Chúc mừng bạn đã đăng ký nhận tin tức Nhà Họ Hứa thành công!</p>
            </div>
          </div>

          <div class="email-letter-divider"></div>

          <!-- Email Body Content -->
          <div class="email-letter-body">
            <h2 class="email-welcome-title">CHÀO MỪNG BƯỚC CHÂN VÀO NHÀ HỨA</h2>
            
            <p class="email-paragraph">
              Chào <strong>Người Thám Hiểm Dũng Cảm</strong>,
            </p>
            
            <p class="email-paragraph">
              Chúng tôi xin chân thành cảm ơn bạn đã đăng ký theo dõi và đồng hành cùng dự án game kinh dị tâm linh sinh tồn <strong>OÁN</strong>. Địa chỉ email <code class="email-code-tag">${subscribedEmail}</code> của bạn đã được ghi danh vào hồ sơ mật những nhân chứng đầu tiên chuẩn bị bước chân vào Dinh Thự Nhà Họ Hứa.
            </p>

            <!-- Highlight Benefits Box -->
            <div class="email-benefits-box">
              <h4 class="email-benefits-title">📜 ĐẶC QUYỀN DÀNH RIÊNG CHO BẠN:</h4>
              <ul class="email-benefits-list">
                <li>Nhận thông báo sớm nhất về ngày ra mắt bản <strong>Demo miễn phí</strong> & Teaser Trailer độc quyền.</li>
                <li><strong>Giftcode quà tặng</strong> vật phẩm tâm linh hỗ trợ sinh tồn khi game chính thức phát hành.</li>
                <li>Hồ sơ tuyệt mật giải mã câu chuyện 4 nhân vật bị giam cầm trong dinh thự.</li>
              </ul>
            </div>

            <p class="email-paragraph">
              Hãy thường xuyên kiểm tra hòm thư này để không bỏ lỡ bất kỳ manh mối nào. Và hãy nhớ rằng... <em>khi bước vào căn nhà đó, đừng bao giờ dập tắt ngọn đèn!</em>
            </p>

            <div class="email-letter-cta-center">
              <a href="#download" class="btn-email-cta-link" id="btn-email-cta-download">
                TRẢI NGHIỆM VÀ TẢI BẢN DEMO NGAY
              </a>
            </div>

            <!-- Email Letter Footer -->
            <div class="email-letter-footer">
              <p class="footer-copy-p">© 2026 OÁN HORROR EXPERIENCE — GAME KINH DỊ TÂM LINH VIỆT NAM</p>
              <p class="footer-contact-p">Dinh Thự Nhà Họ Hứa — Đường số 1, Quận số 2, TP. Hồ Chí Minh | Hotline: +84 900 666 999</p>
            </div>
          </div>

        </div>
      `;
      document.body.appendChild(emailModal);

      const closeEmailModal = () => {
        emailModal.remove();
        document.removeEventListener('keydown', handleEscEmail);
      };

      const handleEscEmail = (e) => {
        if (e.key === 'Escape') closeEmailModal();
      };
      document.addEventListener('keydown', handleEscEmail);

      emailModal.querySelector('#btn-close-email-modal')?.addEventListener('click', closeEmailModal);
      emailModal.addEventListener('click', (e) => {
        if (e.target === emailModal) closeEmailModal();
      });

      emailModal.querySelector('#btn-email-cta-download')?.addEventListener('click', () => {
        closeEmailModal();
      });
    });
  }
}
