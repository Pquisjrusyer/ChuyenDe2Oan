/* ============================================
   OAN — Mail Confirmation (Design 6: 1332-84751)
   ============================================ */

export async function renderMailConfirm(container) {
  container.innerHTML = `
    <div class="page-mail-confirm" style="position:relative;">
      <a href="#home" class="mail-confirm__back animate-fade-in">
        ← Quay về trang chủ
      </a>
      <div class="mail-confirm__icon animate-float">
        <svg viewBox="0 0 166 166" fill="none" style="width:100%;height:100%;">
          <rect x="23" y="43" width="120" height="80" rx="4" stroke="#D9B74C" stroke-width="4" fill="none"/>
          <path d="M23 47L83 93L143 47" stroke="#D9B74C" stroke-width="4" fill="none"/>
          <rect x="33" y="33" width="100" height="10" rx="2" fill="#D9B74C"/>
          <path d="M73 33L83 23L93 33" fill="#D9B74C"/>
        </svg>
      </div>
      <h1 class="mail-confirm__title animate-fade-in-up" style="animation-delay:0.2s;">
        CẢM ƠN ĐÃ GỬI MAIL CHO CHÚNG TÔI
      </h1>
      <p class="mail-confirm__text animate-fade-in-up" style="animation-delay:0.4s;">
        Hãy kiểm tra tin nhắn thường xuyên để theo dõi cập nhật mới về trò chơi, chúc bạn có một trải nghiệm tốt.
      </p>
      <p class="mail-confirm__note animate-fade-in-up" style="animation-delay:0.5s;">
        Mọi thông tin mới nhất sẽ được cập nhật qua mail
      </p>
      <p class="mail-confirm__goodbye animate-fade-in-up" style="animation-delay:0.6s;">
        THÂN ÁI VÀ CẢM ƠN!
      </p>
    </div>
  `;
}
