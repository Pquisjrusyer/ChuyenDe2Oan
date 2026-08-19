/* ========================================================
   OAN HORROR GAME — CỐT TRUYỆN / STORYLINE PAGE (Figma Node 928:2111)
   ======================================================== */

export async function renderStoryline(container) {
  container.innerHTML = `
    <div class="storyline-page-figma" data-node-id="928:2111">
      
      <!-- Ambient Background Layer (957:430263) -->
      <div class="storyline-bg-ambient" data-node-id="957:430263">
        <div class="storyline-bg-scratched-grunge" data-node-id="957:430259"></div>
        <div class="storyline-grunge-overlay"></div>
      </div>

      <!-- ========================================================
           1. HERO SECTION (957:430280)
           ======================================================== -->
      <section class="storyline-hero-section" data-node-id="957:430280">
        <div class="storyline-hero-bg" data-node-id="957:430299">
          <img src="./assets/7762899075d80b1d57b1cbd13d50eac50c9345f1.png" alt="Cốt Truyện OAN" />
        </div>
        <div class="storyline-hero-gradient"></div>
        
        <div class="storyline-hero-content trailer-scroll-reveal trailer-reveal-left" data-node-id="957:430281">
          <h1 class="storyline-hero-title" data-node-id="957:430294">
            CỐT TRUYỆN
          </h1>
          <p class="storyline-hero-subtitle" data-node-id="957:430296">
            Sự oán hận bắt đầu từ một lời hứa bị phá vỡ trong ngôi nhà họ Hứa cổ xưa.
          </p>
        </div>
      </section>

      <!-- ========================================================
           2. SECOND SECTION: LỜI NGUYỀN HỌ HỨA (957:430301)
           ======================================================== -->
      <section class="storyline-curse-section" data-node-id="957:430301">
        
        <!-- Header Frame Bar (957:430322) -->
        <div class="storyline-header-bar trailer-scroll-reveal" data-node-id="957:430322">
          <div class="storyline-frame-bracket-left">
            <svg width="100%" height="100%" viewBox="0 0 576.28 72.597" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.054 39.7269C10.3338 38.723 4.96024 38.1493 0.826722 38.0059V35.1375C21.081 34.1336 25.1409 25.7705 26.7943 19.6035C27.9209 15.0431 17.5428 0.35201 45.95 0H56.2838C118.7 0.143418 181.116 -4.38094e-06 243.532 0.286833C341.083 0.573669 479.969 0.717092 576.28 1.43418C520.891 1.72102 465.502 1.86444 409.7 2.15128C298.508 2.43811 155.488 2.72496 45.5366 2.72496C24.7332 2.72496 49.4663 27.6035 21.0809 34.4204C15.7074 36.2849 8.68039 37.8625 0 38.0059V35.1375C9.5187 35.384 16.9866 36.7825 22.6721 38.8382C25.1301 39.7269 16.4888 40.384 14.054 39.7269Z" fill="#9C7E21"/>
              <path d="M14.054 32.8701C10.3338 33.8741 4.96024 34.4477 0.826722 34.5911V37.4595C21.081 38.4634 25.1409 46.8265 26.7943 52.9935C27.9209 57.5539 17.5428 72.245 45.95 72.597H56.2838C118.7 72.4536 181.116 72.5971 243.532 72.3102C341.083 72.0234 479.969 71.88 576.28 71.1629C520.891 70.876 465.502 70.7326 409.7 70.4458C298.508 70.1589 155.488 69.8721 45.5366 69.8721C24.7332 69.8721 49.4663 44.9935 21.0809 38.1766C15.7074 36.3122 8.68039 34.7346 0 34.5911V37.4595C9.5187 37.213 16.9866 35.8145 22.6721 33.7589C25.1301 32.8701 16.4888 32.2131 14.054 32.8701Z" fill="#9C7E21"/>
            </svg>
          </div>
          <span class="storyline-header-bar-text" data-node-id="957:430321">
            SỰ DẪN DẮT CỦA CỐT TRUYỆN CÓ THỂ DẪN BẠN ĐẾN VỚI SỰ THẬT
          </span>
          <div class="storyline-frame-bracket-right">
            <svg width="100%" height="100%" viewBox="0 0 576.28 72.597" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.054 39.7269C10.3338 38.723 4.96024 38.1493 0.826722 38.0059V35.1375C21.081 34.1336 25.1409 25.7705 26.7943 19.6035C27.9209 15.0431 17.5428 0.35201 45.95 0H56.2838C118.7 0.143418 181.116 -4.38094e-06 243.532 0.286833C341.083 0.573669 479.969 0.717092 576.28 1.43418C520.891 1.72102 465.502 1.86444 409.7 2.15128C298.508 2.43811 155.488 2.72496 45.5366 2.72496C24.7332 2.72496 49.4663 27.6035 21.0809 34.4204C15.7074 36.2849 8.68039 37.8625 0 38.0059V35.1375C9.5187 35.384 16.9866 36.7825 22.6721 38.8382C25.1301 39.7269 16.4888 40.384 14.054 39.7269Z" fill="#9C7E21"/>
              <path d="M14.054 32.8701C10.3338 33.8741 4.96024 34.4477 0.826722 34.5911V37.4595C21.081 38.4634 25.1409 46.8265 26.7943 52.9935C27.9209 57.5539 17.5428 72.245 45.95 72.597H56.2838C118.7 72.4536 181.116 72.5971 243.532 72.3102C341.083 72.0234 479.969 71.88 576.28 71.1629C520.891 70.876 465.502 70.7326 409.7 70.4458C298.508 70.1589 155.488 69.8721 45.5366 69.8721C24.7332 69.8721 49.4663 44.9935 21.0809 38.1766C15.7074 36.3122 8.68039 34.7346 0 34.5911V37.4595C9.5187 37.213 16.9866 35.8145 22.6721 33.7589C25.1301 32.8701 16.4888 32.2131 14.054 32.8701Z" fill="#9C7E21"/>
            </svg>
          </div>
        </div>

        <!-- Content Grid (957:430358) -->
        <div class="storyline-curse-grid" data-node-id="957:430358">
          
          <!-- Left: Painting Portrait (957:430357) -->
          <div class="storyline-curse-portrait-wrap trailer-scroll-reveal trailer-reveal-left" data-node-id="957:430357">
            <div class="storyline-curse-portrait" data-node-id="957:430338">
              <img src="./assets/9ef658afac51fb7f7bf7de714db7b1a78f66fcda.png" alt="Biệt thự họ Hứa" data-node-id="957:430362" />
            </div>
          </div>

          <!-- Right: Text Content (957:430334) -->
          <div class="storyline-curse-content trailer-scroll-reveal trailer-reveal-right" data-node-id="957:430334">
            <h2 class="storyline-curse-heading" data-node-id="957:430326">
              LỜI NGUYỀN HỌ HỨA
            </h2>

            <div class="storyline-curse-desc-wrap" data-node-id="957:430328">
              <p class="storyline-curse-desc" data-node-id="957:430330">
                Trong bóng tối bao trùm vùng cao nguyên miền Trung, một bí mật kinh hoàng đã bị chôn giấu suốt nửa thế kỷ. Ngôi biệt thự họ Hứa, vốn là biểu tượng của sự giàu sang, nay chỉ còn là một phế tích đầy hơi lạnh và những tiếng thì thầm không dứt.
              </p>
              <p class="storyline-curse-desc" data-node-id="957:430332">
                Câu chuyện bắt đầu khi nhân vật chính quay trở lại để tìm kiếm tung tích người em gái mất tích, chỉ để nhận ra mình đang bị lôi cuốn vào một vòng xoáy của những hủ tục, sự phản bội và những linh hồn chưa được siêu thoát.
              </p>
            </div>

            <!-- CTA Button: Khám phá nhà Hứa (957:430339) -->
            <div class="storyline-curse-cta-container" data-node-id="957:430339">
              <a href="#character" class="storyline-curse-svg-btn" id="btnExploreMansion" title="Khám phá nhà Hứa">
                <img src="./assets/button_1_kham_pha.svg" alt="Khám phá nhà Hứa" class="storyline-curse-btn-svg-img" />
              </a>
            </div>
          </div>

        </div>

      </section>

      <!-- ========================================================
           3. TIMELINE SECTION: DÒNG THỜI GIAN (957:430401)
           ======================================================== -->
      <section class="storyline-timeline-section" data-node-id="957:430401">
        
        <!-- Section Header Badge (957:430415) -->
        <div class="storyline-timeline-header-wrap trailer-scroll-reveal" data-node-id="957:430415">
          <div class="storyline-timeline-badge" data-node-id="957:430413">
            <span class="storyline-timeline-badge-text" data-node-id="957:430412">Dòng thời gian</span>
          </div>
        </div>

        <!-- Carousel Track with Navigation Buttons -->
        <div class="storyline-timeline-carousel-container" data-node-id="957:430457">
          <button type="button" class="storyline-timeline-nav-btn" id="btnTimelinePrev" aria-label="Lùi dòng thời gian">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <div class="storyline-timeline-track" id="storylineTimelineTrack">
            
            <!-- Timeline Item 1 (957:430427) -->
            <div class="storyline-timeline-card trailer-scroll-reveal" data-node-id="957:430427">
              <div class="storyline-timeline-card-img" data-node-id="957:430422">
                <img src="./assets/681560f862120946a2ec7d0f1c4d672bd8f6a502.png" alt="Lời Hứa Định Mệnh" />
              </div>
              <span class="storyline-timeline-year" data-node-id="957:430424">1952</span>
              <h3 class="storyline-timeline-title" data-node-id="957:430425">Lời Hứa Định Mệnh</h3>
              <p class="storyline-timeline-desc" data-node-id="957:430426">
                Ông nội họ Hứa lập ra giao ước với thế lực bóng tối để cứu lấy gia tộc khỏi cảnh lầm than.
              </p>
            </div>

            <!-- Timeline Item 2 (957:430435) -->
            <div class="storyline-timeline-card trailer-scroll-reveal" data-node-id="957:430435">
              <div class="storyline-timeline-card-img">
                <img src="./assets/490f35dd0cfd6be6cfd4964695c25a5df027a590.png" alt="Bóng Ma Quá Khứ" />
              </div>
              <span class="storyline-timeline-year">1952</span>
              <h3 class="storyline-timeline-title">Bóng Ma Quá Khứ</h3>
              <p class="storyline-timeline-desc">
                Sự xuất hiện của những thực thể không thuộc về thế giới này và những manh mối đầu tiên.
              </p>
            </div>

            <!-- Timeline Item 3 (957:430442) -->
            <div class="storyline-timeline-card trailer-scroll-reveal" data-node-id="957:430442">
              <div class="storyline-timeline-card-img">
                <img src="./assets/e0fc3aff82a19bb11168f1b69d0cd57854bc0b63.png" alt="Giao Ước Máu" />
              </div>
              <span class="storyline-timeline-year">1952</span>
              <h3 class="storyline-timeline-title">Giao Ước Máu</h3>
              <p class="storyline-timeline-desc">
                Đối mặt với sự thật đằng sau giao ước cổ xưa và cái giá phải trả của dòng tộc.
              </p>
            </div>

            <!-- Timeline Item 4 (957:430449) -->
            <div class="storyline-timeline-card trailer-scroll-reveal" data-node-id="957:430449">
              <div class="storyline-timeline-card-img">
                <img src="./assets/e3a639baefb40e04cdb3e9dcea62a8712877f085.png" alt="Lối Thoát Duy Nhất" />
              </div>
              <span class="storyline-timeline-year">1952</span>
              <h3 class="storyline-timeline-title">Lối Thoát Duy Nhất</h3>
              <p class="storyline-timeline-desc">
                Trận chiến cuối cùng để phá vỡ xiềng xích oán hận hoặc bị nuốt chửng mãi mãi.
              </p>
            </div>

          </div>

          <button type="button" class="storyline-timeline-nav-btn" id="btnTimelineNext" aria-label="Tiến dòng thời gian">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>

      </section>

      <!-- ========================================================
           4. CHAPTER SECTION: CHƯƠNG HỒI (1006:72947)
           ======================================================== -->
      <section class="storyline-chapters-section" data-node-id="1006:72947">
        
        <!-- Chapter Title Card (1006:73078) -->
        <div class="storyline-chapters-title-wrap trailer-scroll-reveal" data-node-id="1006:73078">
          <img src="./assets/a8296e45104dffbbccc5a21543cae16549fa6b7c.png" alt="" class="storyline-chapters-title-bg" />
          <div class="storyline-chapters-title-content" data-node-id="1006:73080">
            <h2 class="storyline-chapters-heading" data-node-id="1006:73081">CHƯƠNG HỒI</h2>
            <p class="storyline-chapters-sub" data-node-id="1006:73082">Bí ẩn được bật mí</p>
          </div>
        </div>

        <!-- Chapters 2x2 Grid (1006:73293) -->
        <div class="storyline-chapters-grid" data-node-id="1006:73293">
          
          <!-- Chapter 1 (1006:73083) -->
          <div class="storyline-chapter-card trailer-scroll-reveal trailer-reveal-left" data-node-id="1006:73083">
            <div class="storyline-chapter-thumb" data-node-id="1006:72959">
              <img src="./assets/9efa1cecb8231d52751451000865c82eba95d56d.png" alt="Chương 1" />
            </div>
            <div class="storyline-chapter-body" data-node-id="1006:72971">
              <h3 class="storyline-chapter-title" data-node-id="1006:72969">CHƯƠNG 1: KHỞI NGUỒN</h3>
              <p class="storyline-chapter-desc" data-node-id="1006:72967">
                Những bước chân đầu tiên vào lãnh địa của nỗi sợ hãi và khám phá quá khứ u tối.
              </p>
            </div>
            <div class="storyline-chapter-crest" data-node-id="1006:73035">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" stroke="#9c7e21" stroke-width="2"/>
                <polygon points="50,15 62,38 88,38 67,54 75,78 50,63 25,78 33,54 12,38 38,38" fill="rgba(156, 126, 33, 0.2)" stroke="#d9b74c" stroke-width="1.5"/>
              </svg>
            </div>
          </div>

          <!-- Chapter 2 (1006:73135) -->
          <div class="storyline-chapter-card trailer-scroll-reveal trailer-reveal-right" data-node-id="1006:73135">
            <div class="storyline-chapter-thumb">
              <img src="./assets/10d658b193d39b5a3f16abed9c1a208f7c835572.png" alt="Chương 2" />
            </div>
            <div class="storyline-chapter-body">
              <h3 class="storyline-chapter-title">CHƯƠNG 2: MÊ CUNG KÝ ỨC</h3>
              <p class="storyline-chapter-desc">
                Vượt qua những cạm bẫy tâm lý và đối diện với ảo ảnh của các thành viên gia tộc.
              </p>
            </div>
            <div class="storyline-chapter-crest">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" stroke="#9c7e21" stroke-width="2"/>
                <circle cx="50" cy="50" r="30" stroke="#d9b74c" stroke-dasharray="6 4" stroke-width="1.5"/>
                <path d="M50 20 V80 M20 50 H80" stroke="#d9b74c" stroke-width="1.5"/>
              </svg>
            </div>
          </div>

          <!-- Chapter 3 (1006:73187) -->
          <div class="storyline-chapter-card trailer-scroll-reveal trailer-reveal-left" data-node-id="1006:73187">
            <div class="storyline-chapter-thumb">
              <img src="./assets/2cdc59b18d22124f9e3fa1601ea0562d3bb5fe91.png" alt="Chương 3" />
            </div>
            <div class="storyline-chapter-body">
              <h3 class="storyline-chapter-title">CHƯƠNG 3: HUYẾT TẾ VÔ HÌNH</h3>
              <p class="storyline-chapter-desc">
                Mở khóa mật thất dưới lòng đất và khám phá nghi lễ hiến tế tàn khốc của dòng tộc.
              </p>
            </div>
            <div class="storyline-chapter-crest">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" stroke="#9c7e21" stroke-width="2"/>
                <path d="M50 18 L82 78 H18 Z" fill="rgba(153, 0, 0, 0.25)" stroke="#d9b74c" stroke-width="1.5"/>
                <circle cx="50" cy="55" r="12" stroke="#d9b74c" stroke-width="1.5"/>
              </svg>
            </div>
          </div>

          <!-- Chapter 4 (1006:73188) -->
          <div class="storyline-chapter-card trailer-scroll-reveal trailer-reveal-right" data-node-id="1006:73188">
            <div class="storyline-chapter-thumb">
              <img src="./assets/ec49aaa98ea541c95d49fe2efde86ff621ffcbce.png" alt="Chương 4" />
            </div>
            <div class="storyline-chapter-body">
              <h3 class="storyline-chapter-title">CHƯƠNG 4: GIẢI THOÁT OÁN HẬN</h3>
              <p class="storyline-chapter-desc">
                Quyết định số phận của những linh hồn vất vưởng và tìm đường thoát thân khỏi phế tích.
              </p>
            </div>
            <div class="storyline-chapter-crest">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" stroke="#9c7e21" stroke-width="2"/>
                <polygon points="50,15 85,50 50,85 15,50" fill="rgba(156, 126, 33, 0.2)" stroke="#d9b74c" stroke-width="1.5"/>
                <polygon points="50,30 70,50 50,70 30,50" stroke="#d9b74c" stroke-width="1.5"/>
              </svg>
            </div>
          </div>

        </div>

      </section>

      <!-- ========================================================
           5. KEY LOCATIONS SECTION: ĐỊA DANH THEN CHỐT (1020:73152)
           ======================================================== -->
      <section class="storyline-locations-section" data-node-id="1020:73152">
        
        <!-- Header (1020:73443) -->
        <div class="storyline-locations-header trailer-scroll-reveal" data-node-id="1020:73443">
          <div class="storyline-locations-header-crest">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" stroke="#9c7e21" stroke-width="2"/>
              <polygon points="50,15 62,38 88,38 67,54 75,78 50,63 25,78 33,54 12,38 38,38" fill="rgba(156, 126, 33, 0.3)" stroke="#d9b74c" stroke-width="1.5"/>
            </svg>
          </div>
          <h2 class="storyline-locations-title" data-node-id="1020:73449">
            ĐỊA DANH THEN CHỐT
          </h2>
          <div class="storyline-locations-header-crest" style="transform: scaleX(-1);">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" stroke="#9c7e21" stroke-width="2"/>
              <polygon points="50,15 62,38 88,38 67,54 75,78 50,63 25,78 33,54 12,38 38,38" fill="rgba(156, 126, 33, 0.3)" stroke="#d9b74c" stroke-width="1.5"/>
            </svg>
          </div>
        </div>

        <!-- 3 Location Cards (1021:73481) -->
        <div class="storyline-locations-grid" data-node-id="1021:73481">
          
          <!-- Location 1: NHÀ HỨA (1021:73445) -->
          <a href="#character" class="storyline-location-card trailer-scroll-reveal trailer-reveal-left" data-node-id="1021:73445">
            <div class="storyline-location-img-wrap">
              <img src="./assets/0eb4668ed3b21f4bc7a616ec5fe4f183e2289e56.png" alt="Nhà Hứa" />
            </div>
            <div class="storyline-location-overlay"></div>
            <div class="storyline-location-footer">
              <h3 class="storyline-location-name">NHÀ HỨA</h3>
              <svg class="storyline-location-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </a>

          <!-- Location 2: MIẾU HOANG (1021:73457) -->
          <a href="#puzzle" class="storyline-location-card trailer-scroll-reveal trailer-reveal-scale" data-node-id="1021:73457">
            <div class="storyline-location-img-wrap">
              <img src="./assets/c94f432040d13aafe0507e10240fe4cc288bc6f0.png" alt="Miếu Hoang" />
            </div>
            <div class="storyline-location-overlay"></div>
            <div class="storyline-location-footer">
              <h3 class="storyline-location-name">MIẾU HOANG</h3>
              <svg class="storyline-location-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </a>

          <!-- Location 3: RỪNG GIÀ (1021:73469) -->
          <a href="#investigation" class="storyline-location-card trailer-scroll-reveal trailer-reveal-right" data-node-id="1021:73469">
            <div class="storyline-location-img-wrap">
              <img src="./assets/0eb4668ed3b21f4bc7a616ec5fe4f183e2289e56.png" alt="Rừng Già" />
            </div>
            <div class="storyline-location-overlay"></div>
            <div class="storyline-location-footer">
              <h3 class="storyline-location-name">RỪNG GIÀ</h3>
              <svg class="storyline-location-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </a>

        </div>

      </section>

      <!-- ========================================================
           6. READY SECTION: BẠN ĐÃ SẴN SÀNG BƯỚC VÀO NHÀ HỨA? (1363:86758)
           ======================================================== -->
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

    </div>
  `;

  // Timeline Carousel Interaction
  const track = container.querySelector('#storylineTimelineTrack');
  const prevBtn = container.querySelector('#btnTimelinePrev');
  const nextBtn = container.querySelector('#btnTimelineNext');

  if (track && prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -420, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: 420, behavior: 'smooth' });
    });
  }

  // Scroll Reveal Observer
  const scrollTargets = container.querySelectorAll('.trailer-scroll-reveal');
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  scrollTargets.forEach(el => scrollObserver.observe(el));

  setTimeout(() => {
    scrollTargets.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('revealed');
      }
    });
  }, 100);
}
