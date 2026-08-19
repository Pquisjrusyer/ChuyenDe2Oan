/* ========================================================
   OAN HORROR GAME — CỐT TRUYỆN / STORYLINE PAGE (Figma Node 928:2111)
   ======================================================== */

import { getReadySectionHTML } from '../components/ready-section.js';

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
        
        <!-- Ambient Background Layers (957:430401) -->
        <div class="storyline-tl-vector-left" data-node-id="987:73049">
          <img src="./assets/bfba5bd560fe80614d9e676c08b62a0192fee777.svg" alt="" />
        </div>
        <div class="storyline-tl-vector-right" data-node-id="987:73051">
          <img src="./assets/febc28debbde6ce0955b130159a4939fb55c34ca.svg" alt="" />
        </div>
        <div class="storyline-tl-char-left trailer-scroll-reveal trailer-reveal-left" data-node-id="989:73129">
          <img src="./assets/70e35fdf5cfd155e343a92c93dd0336941674795.png" alt="Nhân vật cốt truyện" />
        </div>
        <div class="storyline-tl-char-right trailer-scroll-reveal trailer-reveal-right" data-node-id="989:73126">
          <img src="./assets/07e106d153239fd57a876804d473b2e2a93ac6cc.png" alt="Nhân vật cốt truyện" />
        </div>
        <div class="storyline-tl-top-fade" data-node-id="1040:76491"></div>
        <div class="storyline-tl-bottom-fade" data-node-id="989:73170"></div>

        <div class="storyline-timeline-inner-container">
          
          <!-- Section Header Badge with Horror Frame 1 (957:430415) -->
          <div class="storyline-timeline-header-wrap trailer-scroll-reveal trailer-reveal-left" data-node-id="957:430415">
            <div class="storyline-timeline-badge" data-node-id="957:430413">
              <img src="./assets/ebfe6dda13717378e326b16cc9a90c342ad682ea.svg" alt="" class="timeline-bracket-left" />
              <h2 class="storyline-timeline-title-main" data-node-id="957:430412">Dòng thời gian</h2>
              <img src="./assets/bed5bbc8356fc39117b000c195ec884427ed7dca.svg" alt="" class="timeline-bracket-right" />
            </div>
          </div>

          <!-- Carousel Track with Navigation Buttons (957:430457) -->
          <div class="storyline-timeline-carousel-container" data-node-id="957:430457">
            <button type="button" class="storyline-timeline-nav-btn" id="btnTimelinePrev" aria-label="Lùi dòng thời gian">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>

            <div class="storyline-timeline-track" id="storylineTimelineTrack" data-node-id="957:430456">
              
              <!-- Timeline Item 1 (957:430427) -->
              <div class="storyline-timeline-card trailer-scroll-reveal" data-node-id="957:430427">
                <div class="timeline-card-bg-overlay" data-node-id="957:430421">
                  <img src="./assets/17d332d1aa4cfc528c757faf993b50210a3622ee.png" alt="" />
                </div>
                <div class="storyline-timeline-card-img" data-node-id="957:430422">
                  <img src="./assets/681560f862120946a2ec7d0f1c4d672bd8f6a502.png" alt="Lời Hứa Định Mệnh" data-node-id="957:430423" />
                </div>
                <span class="storyline-timeline-year" data-node-id="957:430424">1952</span>
                <h3 class="storyline-timeline-title" data-node-id="957:430425">Lời Hứa Định Mệnh</h3>
                <p class="storyline-timeline-desc" data-node-id="957:430426">
                  Ông nội họ Hứa lập ra giao ước với thế lực bóng tối để cứu lấy gia tộc khỏi cảnh lầm than.
                </p>
              </div>

              <!-- Timeline Item 2 (957:430435) -->
              <div class="storyline-timeline-card trailer-scroll-reveal" data-node-id="957:430435">
                <div class="timeline-card-bg-overlay">
                  <img src="./assets/17d332d1aa4cfc528c757faf993b50210a3622ee.png" alt="" />
                </div>
                <div class="storyline-timeline-card-img">
                  <img src="./assets/e3a639baefb40e04cdb3e9dcea62a8712877f085.png" alt="Bóng Ma Quá Khứ" />
                </div>
                <span class="storyline-timeline-year">1952</span>
                <h3 class="storyline-timeline-title">Bóng Ma Quá Khứ</h3>
                <p class="storyline-timeline-desc">
                  Sự xuất hiện của những thực thể không thuộc về thế giới này và những manh mối đầu tiên.
                </p>
              </div>

              <!-- Timeline Item 3 (957:430442) -->
              <div class="storyline-timeline-card trailer-scroll-reveal" data-node-id="957:430442">
                <div class="timeline-card-bg-overlay">
                  <img src="./assets/e0fc3aff82a19bb11168f1b69d0cd57854bc0b63.png" alt="Giao Ước Máu" />
                </div>
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
                <div class="timeline-card-bg-overlay">
                  <img src="./assets/17d332d1aa4cfc528c757faf993b50210a3622ee.png" alt="" />
                </div>
                <div class="storyline-timeline-card-img">
                  <img src="./assets/490f35dd0cfd6be6cfd4964695c25a5df027a590.png" alt="Lối Thoát Duy Nhất" />
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
          
          <!-- Chapter 1 (1006:73077) -->
          <div class="storyline-chapter-card trailer-scroll-reveal trailer-reveal-left" data-node-id="1006:73077">
            <div class="storyline-chapter-card-bg" data-node-id="1006:72977">
              <img src="./assets/ff9d543cf73586d43ba0141f3e6b83922ae6ff93.png" alt="" />
            </div>
            <div class="storyline-chapter-thumb" data-node-id="1006:72959">
              <img src="./assets/9efa1cecb8231d52751451000865c82eba95d56d.png" alt="Chương 1" data-node-id="1006:72973" />
            </div>
            <div class="storyline-chapter-body" data-node-id="1006:72971">
              <h3 class="storyline-chapter-title" data-node-id="1006:72969">CHƯƠNG 1: KHỞI NGUỒN</h3>
              <p class="storyline-chapter-desc" data-node-id="1006:72967">
                Những bước chân đầu tiên vào lãnh địa của nỗi sợ hãi và khám phá quá khứ u tối.
              </p>
            </div>
            <div class="storyline-chapter-crest" data-node-id="1006:73035">
              <img src="./assets/chapter_emblem_1.svg" alt="Biểu tượng Chương 1" class="storyline-chapter-crest-img" />
            </div>
          </div>

          <!-- Chapter 2 (1006:73135) -->
          <div class="storyline-chapter-card trailer-scroll-reveal trailer-reveal-right" data-node-id="1006:73135">
            <div class="storyline-chapter-card-bg">
              <img src="./assets/ff9d543cf73586d43ba0141f3e6b83922ae6ff93.png" alt="" />
            </div>
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
              <img src="./assets/chapter_emblem_2.svg" alt="Biểu tượng Chương 2" class="storyline-chapter-crest-img" />
            </div>
          </div>

          <!-- Chapter 3 (1006:73187) -->
          <div class="storyline-chapter-card trailer-scroll-reveal trailer-reveal-left" data-node-id="1006:73187">
            <div class="storyline-chapter-card-bg">
              <img src="./assets/ff9d543cf73586d43ba0141f3e6b83922ae6ff93.png" alt="" />
            </div>
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
              <img src="./assets/chapter_emblem_2.svg" alt="Biểu tượng Chương 3" class="storyline-chapter-crest-img" />
            </div>
          </div>

          <!-- Chapter 4 (1006:73188) -->
          <div class="storyline-chapter-card trailer-scroll-reveal trailer-reveal-right" data-node-id="1006:73188">
            <div class="storyline-chapter-card-bg">
              <img src="./assets/ff9d543cf73586d43ba0141f3e6b83922ae6ff93.png" alt="" />
            </div>
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
              <img src="./assets/chapter_emblem_2.svg" alt="Biểu tượng Chương 4" class="storyline-chapter-crest-img" />
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
      ${getReadySectionHTML()}

    </div>
  `;

  // Timeline Carousel Drag-to-Scroll & Button Navigation
  const track = container.querySelector('#storylineTimelineTrack');
  const prevBtn = container.querySelector('#btnTimelinePrev');
  const nextBtn = container.querySelector('#btnTimelineNext');

  if (track) {
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -420, behavior: 'smooth' });
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: 420, behavior: 'smooth' });
      });
    }

    // Mouse drag-to-scroll interaction
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let hasMoved = false;

    track.addEventListener('mousedown', (e) => {
      isDown = true;
      hasMoved = false;
      track.classList.add('is-dragging');
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });

    window.addEventListener('mouseup', () => {
      if (!isDown) return;
      isDown = false;
      track.classList.remove('is-dragging');
    });

    track.addEventListener('mouseleave', () => {
      if (isDown) {
        isDown = false;
        track.classList.remove('is-dragging');
      }
    });

    track.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.5;
      if (Math.abs(walk) > 5) hasMoved = true;
      track.scrollLeft = scrollLeft - walk;
    });

    track.addEventListener('click', (e) => {
      if (hasMoved) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, true);
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
