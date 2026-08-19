/* ========================================================
   OAN — LOGIN SUCCESS PAGE (Figma Node 1363:87501 "đăng ký thành công / ĐĂNG NHẬP THÀNH CÔNG")
   ======================================================== */

export async function renderLoginSuccess(container) {
  let loggedInUser = null;
  try {
    const raw = localStorage.getItem('OAN_LOGGED_IN_USER');
    if (raw) loggedInUser = JSON.parse(raw);
  } catch (e) {
    console.warn(e);
  }

  const username = loggedInUser?.username || 'Lữ Khách';

  container.innerHTML = `
    <div class="reg-success-page" data-node-id="1363:87501">
      
      <!-- Background Grunge Overlay (1363:87510) -->
      <div class="reg-success-grunge-bg" data-node-id="1363:87510">
        <img src="./assets/7f420f44bb2f0c55f11fd89f85cf9f3463139064.png" alt="" />
      </div>

      <!-- Main Content Card (1363:87503) -->
      <div class="reg-success-content trailer-scroll-reveal trailer-reveal-scale" data-node-id="1363:87503">
        
        <!-- Big Title: ĐĂNG NHẬP THÀNH CÔNG (1363:87504) -->
        <h1 class="reg-success-heading" data-node-id="1363:87504">
          ĐĂNG NHẬP THÀNH CÔNG
        </h1>

        <!-- Golden Shield Check Icon (1363:87505) -->
        <div class="reg-success-shield-icon" data-node-id="1363:87505">
          <img src="./assets/c3bbd3c027cc168dec7fa3fcb244af583a85d9fa.svg" alt="Đăng nhập thành công" />
        </div>

        <!-- Account Info Notice Badge -->
        <div class="reg-success-email-notice">
          <p class="reg-success-email-info">
            Chào mừng Lữ khách <strong class="reg-highlight-gold">${username}</strong> đã kết nối thành công vào Dinh Thự Nhà Hứa!
          </p>
        </div>

        <!-- CTA Button 1: Quay về trang chủ (1363:87509) -->
        <div class="reg-success-btn-frame" data-node-id="1363:87509">
          <!-- Horror Metal Side Brackets -->
          <div class="reg-success-bracket-left">
            <img src="./assets/5330b79b9e3ec9f5d8e099674f3b9cd251731b0b.svg" alt="" />
          </div>

          <a href="#home" class="reg-success-cta-btn" id="btnGoToHome" data-node-id="I1363:87509;708:582">
            <span class="reg-success-btn-text" data-node-id="I1363:87509;708:606">QUAY VỀ TRANG CHỦ</span>
          </a>

          <div class="reg-success-bracket-right">
            <img src="./assets/2a8d91cd956a7b707d91ed3faed539513ed626cf.svg" alt="" />
          </div>
        </div>

      </div>

    </div>
  `;

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
