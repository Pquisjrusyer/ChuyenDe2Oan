/* ========================================================
   OAN HORROR GAME — HỒ SƠ NGƯỜI DÙNG / USER PROFILE PAGE
   ======================================================== */

import { getReadySectionHTML } from '../components/ready-section.js';

export async function renderProfile(container) {
  // Retrieve current logged in user from localStorage if exists
  let user = null;
  try {
    const raw = localStorage.getItem('OAN_LOGGED_IN_USER');
    if (raw) user = JSON.parse(raw);
  } catch (e) {
    console.error(e);
  }

  const username = user?.username || 'THÁM TỬ NHÀ HỨA';
  const email = user?.email || 'thamtu.oan@dinhthu.vn';
  const joinDate = user?.registeredAt || '14/08/2026';
  const lastLogin = user?.loggedInAt || 'Hôm nay 11:58';

  const achievements = [
    {
      id: 'ach-1',
      title: 'Kẻ Sống Sót Đầu Tiên',
      desc: 'Thoát khỏi tầng trệt Dinh Thự không bị oán linh phát hiện.',
      icon: '🏆',
      rarity: 'HIẾM',
      unlocked: true,
      date: '15/08/2026'
    },
    {
      id: 'ach-2',
      title: 'Chìa Khóa Mật Thất',
      desc: 'Giải mã thành công cơ quan rương gia truyền Nhà Họ Hứa.',
      icon: '🗝️',
      rarity: 'CỰC HIẾM',
      unlocked: true,
      date: '16/08/2026'
    },
    {
      id: 'ach-3',
      title: 'Khắc Chế Oán Khí',
      desc: 'Sinh tồn 10 phút liên tục trong vùng hắc ám không dùng đèn dầu.',
      icon: '🩸',
      rarity: 'HUYỀN THOẠI',
      unlocked: true,
      date: '17/08/2026'
    },
    {
      id: 'ach-4',
      title: 'Học Giả Dinh Thự',
      desc: 'Thu thập đủ 12 trang nhật ký Hứa Gia Mật Lục thất truyền.',
      icon: '📜',
      rarity: 'HIẾM',
      unlocked: true,
      date: '18/08/2026'
    },
    {
      id: 'ach-5',
      title: 'Bậc Thầy Trận Pháp',
      desc: 'Xoay cơ quan Bát Quái và bài trừ phong ấn không một lần sai sót.',
      icon: '⭐',
      rarity: 'CỰC HIẾM',
      unlocked: true,
      date: '19/08/2026'
    },
    {
      id: 'ach-6',
      title: 'Giải Thoát Vĩnh Hằng',
      desc: 'Phá hủy nguồn cơn oán niệm và mở ra cái kết chân thực của Dinh Thự.',
      icon: '👑',
      rarity: 'HUYỀN THOẠI',
      unlocked: false,
      date: 'Chưa mở khóa'
    }
  ];

  container.innerHTML = `
    <div class="profile-page-wrapper">
      
      <!-- Ambient Background Layer -->
      <div class="profile-bg-ambient">
        <div class="profile-grunge-overlay"></div>
        <div class="profile-blood-glow"></div>
      </div>

      <div class="profile-container">
        
        <!-- Header Banner & Avatar Card -->
        <div class="profile-hero-card trailer-scroll-reveal">
          <div class="profile-hero-bg-texture">
            <img src="./assets/ff9d543cf73586d43ba0141f3e6b83922ae6ff93.png" alt="" />
          </div>
          
          <div class="profile-hero-content">
            <!-- Left: Avatar with Gold Frame -->
            <div class="profile-avatar-wrap">
              <div class="profile-avatar-glow"></div>
              <div class="profile-avatar-frame">
                <img src="./assets/982de4bcd6a16630803542fbfab99bbf3ff3563d.png" alt="" class="profile-frame-border" />
                <div class="profile-avatar-inner">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#d9b74c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>
              <span class="profile-status-dot" title="Trạng thái: Trực tuyến trong Dinh Thự"></span>
            </div>

            <!-- Middle: User Details -->
            <div class="profile-user-info">
              <div class="profile-badge-row">
                <span class="profile-tag-rank">HỒ SƠ NGƯỜI CHƠI</span>
                <span class="profile-tag-verified">BẢN QUYỀN CHÍNH THỨC</span>
              </div>
              <h1 class="profile-username">${username.toUpperCase()}</h1>
              <p class="profile-user-email">${email}</p>
              
              <div class="profile-meta-chips">
                <div class="profile-chip">
                  <span class="chip-label">Gia nhập:</span>
                  <span class="chip-value">${joinDate}</span>
                </div>
                <div class="profile-chip">
                  <span class="chip-label">Lần đăng nhập gần nhất:</span>
                  <span class="chip-value highlight">${lastLogin}</span>
                </div>
                <div class="profile-chip">
                  <span class="chip-label">Khu vực:</span>
                  <span class="chip-value">Việt Nam (Máy chủ Dinh Thự #01)</span>
                </div>
              </div>
            </div>

            <!-- Right: Fast Actions -->
            <div class="profile-quick-actions">
              <a href="#gameplay" class="profile-submit-btn">
                <div class="profile-submit-btn-inner">
                  <div class="profile-submit-btn-bg">
                    <img src="./assets/982de4bcd6a16630803542fbfab99bbf3ff3563d.png" alt="" />
                  </div>
                  <span class="profile-submit-btn-text">VÀO GAME TIẾP TỤC</span>
                </div>
              </a>
              <a href="#collection" class="profile-submit-btn profile-btn-secondary">
                <div class="profile-submit-btn-inner">
                  <div class="profile-submit-btn-bg">
                    <img src="./assets/982de4bcd6a16630803542fbfab99bbf3ff3563d.png" alt="" />
                  </div>
                  <span class="profile-submit-btn-text">BỘ SƯU TẬP MANH MỐI</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- 4 Key Stats Grid -->
        <div class="profile-stats-grid">
          
          <!-- Stat 1: Score -->
          <div class="profile-stat-card trailer-scroll-reveal trailer-reveal-left">
            <div class="stat-icon-wrap gold">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d9b74c" stroke-width="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <div class="stat-data">
              <span class="stat-label">TỔNG ĐIỂM SINH TỒN</span>
              <span class="stat-value">18,450 <small>PTS</small></span>
              <span class="stat-sub positive">+120 PTS từ chương vừa hoàn thành</span>
            </div>
          </div>

          <!-- Stat 2: Rank -->
          <div class="profile-stat-card trailer-scroll-reveal trailer-reveal-left">
            <div class="stat-icon-wrap red">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e62217" stroke-width="2">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                <path d="M4 22h16"></path>
                <path d="M10 14.66V17c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-2.34"></path>
                <path d="M14 14.66V17c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.34"></path>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
              </svg>
            </div>
            <div class="stat-data">
              <span class="stat-label">CẤP BẬC XẾP HẠNG</span>
              <span class="stat-value rank-gold">BẬC III: KẺ TRỪ TÀ</span>
              <span class="stat-sub">Top 4.2% thám tử xuất sắc toàn cầu</span>
            </div>
          </div>

          <!-- Stat 3: Chapters -->
          <div class="profile-stat-card trailer-scroll-reveal trailer-reveal-right">
            <div class="stat-icon-wrap blue">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5dade2" stroke-width="2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <div class="stat-data">
              <span class="stat-label">TIẾN ĐỘ CHƯƠNG HỒI</span>
              <span class="stat-value">3 / 4 <small>CHƯƠNG</small></span>
              <span class="stat-sub">Hoàn thành 75% cốt truyện chính</span>
            </div>
          </div>

          <!-- Stat 4: Playtime -->
          <div class="profile-stat-card trailer-scroll-reveal trailer-reveal-right">
            <div class="stat-icon-wrap purple">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#af7ac5" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div class="stat-data">
              <span class="stat-label">THỜI GIAN SINH TỒN</span>
              <span class="stat-value">18h 45m</span>
              <span class="stat-sub">12 lần trốn thoát ma quái thành công</span>
            </div>
          </div>

        </div>

        <!-- Chapter Progression Breakdown -->
        <div class="profile-section-block trailer-scroll-reveal">
          <div class="profile-block-header">
            <h2 class="profile-block-title">TIẾN ĐỘ KHÁM PHÁ CỐT TRUYỆN</h2>
            <span class="profile-block-badge">3 / 4 CHƯƠNG HOÀN THÀNH</span>
          </div>

          <div class="profile-chapter-list">
            
            <div class="profile-ch-item completed">
              <div class="profile-ch-thumb">
                <img src="./assets/9efa1cecb8231d52751451000865c82eba95d56d.png" alt="Chương 1" />
                <span class="ch-status-badge">ĐÃ HOÀN THÀNH</span>
              </div>
              <div class="profile-ch-info">
                <div class="profile-ch-top">
                  <h3>CHƯƠNG 1: KHỞI NGUỒN</h3>
                  <span class="ch-grade">HẠNG S ★★★</span>
                </div>
                <p>Những bước chân đầu tiên vào lãnh địa của nỗi sợ hãi và khám phá quá khứ u tối.</p>
                <div class="ch-prog-bar">
                  <div class="ch-prog-fill" style="width: 100%;"></div>
                </div>
              </div>
            </div>

            <div class="profile-ch-item completed">
              <div class="profile-ch-thumb">
                <img src="./assets/10d658b193d39b5a3f16abed9c1a208f7c835572.png" alt="Chương 2" />
                <span class="ch-status-badge">ĐÃ HOÀN THÀNH</span>
              </div>
              <div class="profile-ch-info">
                <div class="profile-ch-top">
                  <h3>CHƯƠNG 2: MÊ CUNG KÝ ỨC</h3>
                  <span class="ch-grade">HẠNG A ★★★</span>
                </div>
                <p>Vượt qua những cạm bẫy tâm lý và đối diện với ảo ảnh của các thành viên gia tộc.</p>
                <div class="ch-prog-bar">
                  <div class="ch-prog-fill" style="width: 100%;"></div>
                </div>
              </div>
            </div>

            <div class="profile-ch-item completed">
              <div class="profile-ch-thumb">
                <img src="./assets/2cdc59b18d22124f9e3fa1601ea0562d3bb5fe91.png" alt="Chương 3" />
                <span class="ch-status-badge">ĐÃ HOÀN THÀNH</span>
              </div>
              <div class="profile-ch-info">
                <div class="profile-ch-top">
                  <h3>CHƯƠNG 3: HUYẾT TẾ VÔ HÌNH</h3>
                  <span class="ch-grade">HẠNG B ★★☆</span>
                </div>
                <p>Mở khóa mật thất dưới lòng đất và khám phá nghi lễ hiến tế tàn khốc của dòng tộc.</p>
                <div class="ch-prog-bar">
                  <div class="ch-prog-fill" style="width: 100%;"></div>
                </div>
              </div>
            </div>

            <div class="profile-ch-item locked">
              <div class="profile-ch-thumb">
                <img src="./assets/ec49aaa98ea541c95d49fe2efde86ff621ffcbce.png" alt="Chương 4" />
                <span class="ch-status-badge locked">CHƯA MỞ KHÓA</span>
              </div>
              <div class="profile-ch-info">
                <div class="profile-ch-top">
                  <h3>CHƯƠNG 4: GIẢI THOÁT OÁN HẬN</h3>
                  <span class="ch-grade locked">CHỜ KHÁM PHÁ</span>
                </div>
                <p>Quyết định số phận của những linh hồn vất vưởng và tìm đường thoát thân khỏi phế tích.</p>
                <div class="ch-prog-bar">
                  <div class="ch-prog-fill" style="width: 25%;"></div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Achievements & Awards Section -->
        <div class="profile-section-block trailer-scroll-reveal">
          <div class="profile-block-header">
            <h2 class="profile-block-title">GIẢI THƯỞNG & HUÂN CHƯƠNG ĐẠT ĐƯỢC</h2>
            <span class="profile-block-badge">5 / 6 DANH HIỆU</span>
          </div>

          <div class="profile-achievements-grid">
            ${achievements.map(ach => `
              <div class="profile-ach-card ${ach.unlocked ? 'unlocked' : 'locked'}">
                <div class="ach-icon-box">
                  <span class="ach-emoji">${ach.icon}</span>
                </div>
                <div class="ach-details">
                  <div class="ach-header-row">
                    <h4 class="ach-title">${ach.title}</h4>
                    <span class="ach-rarity ${ach.rarity.toLowerCase()}">${ach.rarity}</span>
                  </div>
                  <p class="ach-desc">${ach.desc}</p>
                  <span class="ach-date">${ach.unlocked ? `Đạt được: ${ach.date}` : '🔒 Cần hoàn thành Chương 4'}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Account Security & Sign Out -->
        <div class="profile-footer-card trailer-scroll-reveal">
          <div class="profile-footer-left">
            <span class="profile-security-title">BẢO MẬT & QUẢN TRỊ TÀI KHOẢN</span>
            <p class="profile-security-desc">Tài khoản được mã hóa bảo vệ theo tiêu chuẩn Dinh Thự OAN.</p>
          </div>
          <div class="profile-footer-right">
            <button type="button" class="profile-submit-btn profile-btn-logout" id="profilePageLogoutBtn">
              <div class="profile-submit-btn-inner">
                <div class="profile-submit-btn-bg">
                  <img src="./assets/982de4bcd6a16630803542fbfab99bbf3ff3563d.png" alt="" />
                </div>
                <span class="profile-submit-btn-text">ĐĂNG XUẤT</span>
              </div>
            </button>
          </div>
        </div>

      </div>

      <!-- Ready Call to Action -->
      ${getReadySectionHTML()}

    </div>
  `;

  // Attach Logout Handler
  const logoutBtn = container.querySelector('#profilePageLogoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('OAN_LOGGED_IN_USER');
      window.location.hash = '#home';
      window.location.reload();
    });
  }

  // Scroll reveal
  const reveals = container.querySelectorAll('.trailer-scroll-reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('revealed');
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => obs.observe(el));
}
