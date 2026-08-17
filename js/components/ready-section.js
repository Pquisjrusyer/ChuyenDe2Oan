/* ============================================
   OAN Horror Game — Shared Ready Section Component (1363:86758)
   "BẠN ĐÃ SẴN SÀNG BƯỚC VÀO NHÀ HỨA?"
   ============================================ */

export function getReadySectionHTML() {
  return `
    <section class="figma-ready-section" data-node-id="1363:86758">
      <div class="ready-bg-layer" data-node-id="1363:86759">
        <img src="./assets/8d535e5186d5115ccc9a5c72e883cc54bda667bd.png" alt="" class="ready-bg-img" />
      </div>

      <div class="ready-content-container container" data-node-id="1363:86761">
        <div class="ready-heading-box trailer-scroll-reveal trailer-reveal-scale" data-node-id="1363:86762">
          <h2 class="ready-heading-text" data-node-id="1363:86763">
            BẠN ĐÃ SẴN SÀNG BƯỚC VÀO NHÀ HỨA?
          </h2>
        </div>

        <!-- 2 Buttons: CHƠI NGAY & TẢI NGAY (1363:86764) -->
        <div class="ready-buttons-row trailer-scroll-reveal trailer-reveal-fade-up delay-200" data-node-id="1363:86764">
          
          <!-- Button 2: CHƠI NGAY (1363:86765) -> Links to #login -->
          <a href="#login" class="figma-btn-horror-frame" data-node-id="1363:86765" style="text-decoration: none;">
            <div class="horror-frame-corners">
              <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="corner-svg-left" />
              <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="corner-svg-right" />
            </div>
            <div class="horror-frame-body">
              <span class="horror-btn-text">CHƠI NGAY</span>
            </div>
          </a>

          <!-- Button 1: TẢI NGAY (1363:86766) -> Links to #download -->
          <a href="#download" class="figma-btn-horror-frame" data-node-id="1363:86766" style="text-decoration: none;">
            <div class="horror-frame-corners">
              <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="corner-svg-left" />
              <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="corner-svg-right" />
            </div>
            <div class="horror-frame-body">
              <span class="horror-btn-text">TẢI NGAY</span>
            </div>
          </a>
        </div>

        <!-- Requirements (1363:86767) -->
        <div class="ready-sysreq-box trailer-scroll-reveal trailer-reveal-fade delay-350" data-node-id="1363:86767">
          <p class="sysreq-text" data-node-id="1363:86768">
            YÊU CẦU: CORE I5 / 8GB RAM / GTX 1060+
          </p>
        </div>
      </div>
    </section>
  `;
}
