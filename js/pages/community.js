/* ========================================================
   OAN Horror Game — Community Page (Figma Node 1024:73961)
   ======================================================== */

import { getReadySectionHTML } from '../components/ready-section.js';
import { initCommunityScrollTriggers } from '../utils/smooth-scroll.js';

export async function renderCommunity(container) {
  container.innerHTML = `
    <div class="figma-community-page" data-node-id="1024:73961">
      
      <!-- ========================================================
           1. HERO SECTION (Figma 1024:74064)
           ======================================================== -->
      <section class="community-hero-section" data-node-id="1024:74064">
        
        <!-- Ornate Red Framing Brackets on Top-Left & Bottom-Right (1058:78396 / 1058:78398) -->
        <div class="comm-hero-bracket-top-left" data-node-id="1058:78396">
          <img src="./assets/29c8d8e61a51a7dca3e06353a167471c1ce53bb2.svg" alt="" />
        </div>
        <div class="comm-hero-bracket-bottom-right" data-node-id="1058:78398">
          <img src="./assets/461dce353ff817734c9a55b5694b8e357d811db0.svg" alt="" />
        </div>

        <!-- Giant Calligraphy Watermark "OÁN" (Figma 1024:74090 - All 3 SVG Vectors) -->
        <div class="community-hero-watermark" data-node-id="1024:74090">
          <div class="oan-vector-1">
            <img src="./assets/99af38ef66e56ca1d9ebbe549864aba2a4ed367a.svg" alt="" />
          </div>
          <div class="oan-vector-2">
            <img src="./assets/d5e33112df0e56f51ddc82588bd34220fd8888d4.svg" alt="" />
          </div>
          <div class="oan-vector-3">
            <img src="./assets/fb7bd6783686bce6effc7db50fd54349a7b6c50b.svg" alt="" />
          </div>
        </div>

        <div class="community-hero-content animate-fade-in-up">
          <h1 class="community-hero-title" data-node-id="1024:74065">CỘNG ĐỒNG</h1>
          <p class="community-hero-subtitle" data-node-id="1024:74069">
            Kết nối, thảo luận và cập nhật các xu hướng mới nhất từ nhiều nền tảng.
          </p>

          <div class="community-hero-actions" data-node-id="1024:74088">
            <!-- Button 1: ĐĂNG NHẬP (1024:74082) -->
            <a href="#login" class="btn-comm-login" data-node-id="1024:74082">
              <img src="./assets/982de4bcd6a16630803542fbfab99bbf3ff3563d.png" alt="" class="btn-comm-login-bg" />
              <span class="btn-comm-login-text">ĐĂNG NHẬP</span>
            </a>

            <!-- Button 2: THAM GIA NGAY (1024:74070 with Figma 906:1550 Multi-frame parts & Glow) -->
            <a href="#register" class="btn-comm-join-figma" data-node-id="1024:74070">
              <div class="comm-join-frame-parts" data-node-id="906:1550">
                <div class="comm-fp1"><img src="./assets/105ebc7cda031fdb485695b18a341cec252f1d95.png" alt="" /></div>
                <div class="comm-fp2" style="background-image: url('./assets/a1b7e3991a46b5a64f1f7dac3536b09a9e87a8ba.png');"></div>
                <div class="comm-fp3"><img src="./assets/0d6b9966ff2827a216126f97de3fae66e8b0f69d.png" alt="" /></div>
                <div class="comm-fp4" style="background-image: url('./assets/a52a7c4b8dc8beffb2f5577f0501b16b1cfce647.png');"></div>
                <div class="comm-fp5"><img src="./assets/18c99e59fbe5fb1f1a0cf0ff28f9c309e0b87822.png" alt="" /></div>
              </div>
              <div class="comm-join-inner-bg">
                <img src="./assets/ea8df93482c54ccfe7b61d0a530fea954eb54fd3.png" class="comm-join-rect-texture" alt="" />
              </div>
              <div class="comm-join-content">
                <span class="comm-join-caption">THAM GIA NGAY</span>
              </div>
              <div class="comm-join-glow-3"></div>
              <div class="comm-join-glow-2"></div>
              <div class="comm-join-glow-1"></div>
            </a>
          </div>
        </div>
      </section>

      <!-- ========================================================
           2. TIN TỨC NỔI BẬT SECTION (1024:74098)
           ======================================================== -->
      <section class="community-news-section" data-node-id="1024:74098">
        <div class="container">
          
          <!-- Header with Gold Framing Brackets -->
          <div class="community-news-header">
            <div class="comm-header-bracket-row" data-node-id="1024:74101">
              <div class="comm-bracket-left">
                <img src="./assets/5330b79b9e3ec9f5d8e099674f3b9cd251731b0b.svg" alt="" />
              </div>
              <h2 class="comm-news-main-title" data-node-id="1024:74099">TIN TỨC NỔI BẬT</h2>
              <div class="comm-bracket-right">
                <img src="./assets/2a8d91cd956a7b707d91ed3faed539513ed626cf.svg" alt="" />
              </div>
            </div>
            <p class="comm-news-subtitle" data-node-id="1024:74127">Cập nhật nhanh từ cộng đồng</p>
          </div>

          <!-- 4 Articles Grid (1030:73730) -->
          <div class="comm-news-cards-grid" data-node-id="1030:73730">
            
            <!-- Card 1: Top chủ đề đang hot (1030:73686) -->
            <div class="comm-article-card" data-node-id="1030:73686" onclick="window.location.hash='storyline'">
              <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" class="comm-card-grunge-bg" />
              <div class="comm-card-thumb-frame">
                <img src="./assets/ec278bae6212a14b52bad6ec4ba32cc1466f5a1f.png" alt="Top chủ đề hot" class="comm-card-thumb-img" />
              </div>
              <div class="comm-card-body">
                <h3 class="comm-card-title">Top chủ đề đang "hot" tuần này</h3>
                <p class="comm-card-meta">Xu hướng • 3 phút đọc</p>
                <p class="comm-card-desc">Phân tích các chủ đề nhận được nhiều thảo luận nhất, kèm dữ liệu và nhận định.</p>
                <div class="comm-card-tags-row">
                  <span class="comm-card-tag-badge">Xu hướng</span>
                  <span class="comm-card-tag-badge">Cộng đồng</span>
                </div>
              </div>
            </div>

            <!-- Card 2: Cách tối ưu nội dung để tăng tương tác (1030:73687) -->
            <div class="comm-article-card" data-node-id="1030:73687" onclick="window.location.hash='gameplay'">
              <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" class="comm-card-grunge-bg" />
              <div class="comm-card-thumb-frame">
                <img src="./assets/986608653c56899ec0b12219e20234279ab72184.png" alt="Tối ưu nội dung" class="comm-card-thumb-img" />
              </div>
              <div class="comm-card-body">
                <h3 class="comm-card-title">Cách tối ưu nội dung để tăng tương tác</h3>
                <p class="comm-card-meta">Hướng dẫn • 5 phút đọc</p>
                <p class="comm-card-desc">Gợi ý khung nội dung, thời điểm đăng và mẹo viết caption thu hút.</p>
                <div class="comm-card-tags-row">
                  <span class="comm-card-tag-badge">Hướng dẫn</span>
                  <span class="comm-card-tag-badge">Tương tác</span>
                </div>
              </div>
            </div>

            <!-- Card 3: Tổng hợp sự kiện AMA (1030:73701) -->
            <div class="comm-article-card" data-node-id="1030:73701" onclick="window.location.hash='trailer'">
              <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" class="comm-card-grunge-bg" />
              <div class="comm-card-thumb-frame">
                <img src="./assets/c7bd6091cfad05e2364728450fd2638599587146.png" alt="Sự kiện AMA" class="comm-card-thumb-img" />
              </div>
              <div class="comm-card-body">
                <h3 class="comm-card-title">Tổng hợp sự kiện: AMA & Workshop</h3>
                <p class="comm-card-meta">Sự kiện • 4 phút đọc</p>
                <p class="comm-card-desc">Điểm danh lịch sự kiện sắp tới và cách tham gia để nhận quà.</p>
                <div class="comm-card-tags-row">
                  <span class="comm-card-tag-badge">Xu hướng</span>
                  <span class="comm-card-tag-badge">Sự kiện</span>
                </div>
              </div>
            </div>

            <!-- Card 4: Cập nhật chính sách (1030:73702) -->
            <div class="comm-article-card" data-node-id="1030:73702" onclick="window.location.hash='faq'">
              <img src="./assets/c63dd9063c54890bbbf5fbdb7ee95ce6eb923d13.png" alt="" class="comm-card-grunge-bg" />
              <div class="comm-card-thumb-frame">
                <img src="./assets/5ffaa76b43dd2187308a9a468eba42218ac1a1c4.png" alt="Quy tắc đăng bài" class="comm-card-thumb-img" />
              </div>
              <div class="comm-card-body">
                <h3 class="comm-card-title">Cập nhật chính sách: Quy tắc đăng bài</h3>
                <p class="comm-card-meta">Thông báo • 5 phút đọc</p>
                <p class="comm-card-desc">Những nội dung được duyệt tự động và cơ chế báo cáo vi phạm.</p>
                <div class="comm-card-tags-row">
                  <span class="comm-card-tag-badge">Thông báo</span>
                  <span class="comm-card-tag-badge">Quy tắc</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ========================================================
           3. SUBSCRIBE SECTION (Figma 1030:73731)
           ======================================================== -->
      <section class="community-subscribe-section" data-node-id="1030:73731">
        
        <!-- Tag Section Badge: Subcribe để nhận tin (1030:73837) -->
        <div class="comm-sub-tag-badge" data-node-id="1030:73837">
          <img src="./assets/07092503416c73ca4af4965cb97a13f4c989250d.png" alt="" class="comm-sub-tag-bg-img" />
          <div class="comm-sub-tag-content">
            <h2 class="comm-sub-heading-bold" data-node-id="I1030:73837;770:893">Subcribe để nhận tin</h2>
            <p class="comm-sub-subheading-light" data-node-id="I1030:73837;770:894">
              Nhận tin tức, bảng xếp hạng và thông báo sự kiện trực tiếp qua email.
            </p>
          </div>
        </div>

        <div class="comm-sub-interactive-stage">
          <!-- 3D Character Figure on the Left (1030:73939) -->
          <div class="comm-sub-char-figure" data-node-id="1030:73939">
            <img src="./assets/344f476af8afbb59f9d7e3c3440c0fe8b36fd681.png" alt="Nhân vật chỉ tay" />
          </div>

          <!-- Centered Subscription Form (1030:73844) -->
          <form class="comm-sub-form-box" data-node-id="1030:73844" onsubmit="event.preventDefault(); alert('Cảm ơn bạn đã đăng ký nhận tin từ OAN!');">
            <div class="comm-form-row">
              
              <!-- Field 1: Email (1030:73777) -->
              <div class="comm-form-group" data-node-id="1030:73777">
                <label class="comm-form-label">Email</label>
                <div class="comm-input-wrapper">
                  <input type="email" class="comm-form-input" placeholder="Entered text" required />
                  <span class="comm-input-cursor">|</span>
                </div>
                <span class="comm-form-helper">Không spam. Có thể hủy bất kỳ lúc nào.</span>
              </div>

              <!-- Field 2: Sở thích (1030:73782) -->
              <div class="comm-form-group" data-node-id="1030:73782">
                <label class="comm-form-label">Sở thích</label>
                <div class="comm-input-wrapper">
                  <input type="text" class="comm-form-input" placeholder="Entered text" />
                  <span class="comm-input-cursor">|</span>
                </div>
                <span class="comm-form-helper">Gợi ý nội dung phù hợp theo lựa chọn.</span>
              </div>
            </div>

            <!-- Centered Action Buttons Row (1030:73787) -->
            <div class="comm-form-actions-row">
              <!-- Button 1: ĐĂNG KÝ (1030:73830) -->
              <button type="submit" class="btn-comm-sub-submit" data-node-id="1030:73830">
                <img src="./assets/982de4bcd6a16630803542fbfab99bbf3ff3563d.png" alt="" class="btn-comm-sub-submit-bg" />
                <span class="btn-comm-sub-submit-text">ĐĂNG KÝ</span>
              </button>

              <!-- Button 2: Xem tin (1030:73812 with horror frame corners) -->
              <button type="button" class="btn-comm-sub-view-figma" data-node-id="1030:73812" onclick="window.location.hash='storyline'">
                <div class="sub-view-horror-corners">
                  <img src="./assets/00014c9e034cf03185fa6abecbdda1f84052f9ed.svg" alt="" class="sub-corner-left" />
                  <img src="./assets/5c728d5be890a1c11dd44ea608aabf2ec504887a.svg" alt="" class="sub-corner-right" />
                </div>
                <div class="sub-view-inner-field">
                  <span class="sub-view-caption">Xem tin</span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </section>

      <!-- ========================================================
           4. READY SECTION (Component 1363:86758)
           ======================================================== -->
      ${getReadySectionHTML()}

    </div>
  `;

  // Scroll Reveal Observer for Community Page & Ready Section
  const scrollTargets = container.querySelectorAll('.trailer-scroll-reveal');
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  scrollTargets.forEach(el => scrollObserver.observe(el));

  setTimeout(() => {
    scrollTargets.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add('revealed');
      }
    });
    initCommunityScrollTriggers();
  }, 100);
}
