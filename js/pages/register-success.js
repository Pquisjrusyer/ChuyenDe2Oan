/* ========================================================
   OAN — REGISTER SUCCESS PAGE (Figma Node 1332:84911 "đăng ký thành công")
   ======================================================== */

export async function renderRegisterSuccess(container) {
  container.innerHTML = `
    <div class="reg-success-page" data-node-id="1332:84911">
      
      <!-- Background Grunge Overlay (1332:84927) -->
      <div class="reg-success-grunge-bg" data-node-id="1332:84927">
        <img src="./assets/7f420f44bb2f0c55f11fd89f85cf9f3463139064.png" alt="" />
      </div>

      <!-- Main Content Card (1332:84913) -->
      <div class="reg-success-content trailer-scroll-reveal trailer-reveal-scale" data-node-id="1332:84913">
        
        <!-- Big Title (1332:84914) -->
        <h1 class="reg-success-heading" data-node-id="1332:84914">
          BẠN ĐÃ ĐĂNG KÝ THÀNH CÔNG
        </h1>

        <!-- Golden Shield Check Icon (1332:84915) -->
        <div class="reg-success-shield-icon" data-node-id="1332:84915">
          <img src="./assets/c3bbd3c027cc168dec7fa3fcb244af583a85d9fa.svg" alt="Đăng ký thành công" />
        </div>

        <!-- CTA Button 1: Đi tới đăng nhập (1332:84921) -->
        <div class="reg-success-btn-frame" data-node-id="1332:84921">
          <!-- Horror Metal Side Brackets -->
          <div class="reg-success-bracket-left">
            <img src="./assets/5330b79b9e3ec9f5d8e099674f3b9cd251731b0b.svg" alt="" />
          </div>

          <a href="#login" class="reg-success-cta-btn" id="btnGoToLogin" data-node-id="I1332:84921;708:582">
            <span class="reg-success-btn-text" data-node-id="I1332:84921;708:606">ĐI TỚI ĐĂNG NHẬP</span>
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
