/* ============================================
   OAN — Fullscreen Media Viewer (Design 5: 1332-84797)
   ============================================ */

export async function renderFullscreen(container) {
  container.innerHTML = `
    <div class="page-fullscreen" style="background:linear-gradient(135deg, #0a0000, #000);">
      <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">
        <div style="text-align:center;">
          <div style="font-size:80px;margin-bottom:24px;opacity:0.3;">🎬</div>
          <p style="font-family:var(--font-display);font-size:18px;color:var(--color-gray-500);text-transform:uppercase;">
            Toàn Màn Hình
          </p>
        </div>
      </div>
      <button class="close-btn" onclick="window.location.hash='home'" style="position:absolute;top:66px;right:40px;z-index:10;">
        ✕
      </button>
      <!-- Play button in center -->
      <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);opacity:0;">
        <div class="trailer-hero__play"></div>
      </div>
    </div>
  `;
}
