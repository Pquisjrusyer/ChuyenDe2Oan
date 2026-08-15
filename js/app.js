/* ============================================
   OAN Horror Game — Main Application Entry
   ============================================ */

import { router } from './router.js';
import { renderNavbar } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { initSmoothScroll, getLenis } from './utils/smooth-scroll.js';

// Page imports
import { renderIntro } from './pages/intro.js';
import { renderHome } from './pages/home.js';
import { renderTrailer } from './pages/trailer.js';
import { renderInfo } from './pages/info.js';
import { renderCommunity } from './pages/community.js';
import { renderFaq } from './pages/faq.js';
import { renderDownload } from './pages/download.js';
import { renderRegister } from './pages/register.js';
import { renderLogin } from './pages/login.js';
import { renderForgotPassword } from './pages/forgot-password.js';
import { renderCheckInbox } from './pages/check-inbox.js';
import { renderMailConfirm } from './pages/mail-confirm.js';
import { renderCharacter } from './pages/character.js';
import { renderStoryline } from './pages/storyline.js';
import { renderGameplay } from './pages/gameplay.js';
import { renderInvestigation } from './pages/investigation.js';
import { renderPuzzle } from './pages/puzzle.js';
import { renderCollection } from './pages/collection.js';
import { renderFullscreen } from './pages/fullscreen.js';

// ---- Initialize App ---- //
function initApp() {
  const pageRoot = document.getElementById('page-root');
  const navbarRoot = document.getElementById('navbar-root');
  const footerRoot = document.getElementById('footer-root');

  // Register routes
  router.addRoute('intro', renderIntro);
  router.addRoute('home', renderHome);
  router.addRoute('trailer', renderTrailer);
  router.addRoute('info', renderInfo);
  router.addRoute('community', renderCommunity);
  router.addRoute('faq', renderFaq);
  router.addRoute('download', renderDownload);
  router.addRoute('register', renderRegister);
  router.addRoute('login', renderLogin);
  router.addRoute('forgot-password', renderForgotPassword);
  router.addRoute('check-inbox', renderCheckInbox);
  router.addRoute('mail-confirm', renderMailConfirm);
  router.addRoute('character', renderCharacter);
  router.addRoute('storyline', renderStoryline);
  router.addRoute('gameplay', renderGameplay);
  router.addRoute('investigation', renderInvestigation);
  router.addRoute('puzzle', renderPuzzle);
  router.addRoute('collection', renderCollection);
  router.addRoute('fullscreen', renderFullscreen);

  // Initialize Lenis smooth scrolling engine
  const lenis = initSmoothScroll();

  // Update navbar and footer on navigation
  router.onAfterNavigate = (hash) => {
    // Reset scroll to top smoothly or immediately on page switch
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    renderNavbar(navbarRoot, hash);
    renderFooter(footerRoot, hash);
    
    // Update page title
    const titles = {
      intro: 'OAN — Cursed Memories',
      home: 'Trang Chủ — OAN',
      trailer: 'Trailer — OAN',
      info: 'Thông Tin — OAN',
      community: 'Cộng Đồng — OAN',
      faq: 'FAQ — OAN',
      download: 'Tải Game — OAN',
      register: 'Đăng Ký — OAN',
      login: 'Đăng Nhập — OAN',
      'forgot-password': 'Quên Mật Khẩu — OAN',
      'check-inbox': 'Kiểm Tra Hộp Thư — OAN',
      'mail-confirm': 'Cảm Ơn — OAN',
      character: 'Nhân Vật — OAN',
      storyline: 'Cốt Truyện — OAN',
      gameplay: 'Gameplay — OAN',
      investigation: 'Điều Tra — OAN',
      puzzle: 'Giải Đố — OAN',
      collection: 'Thu Thập — OAN',
      fullscreen: 'OAN — Media',
    };
    document.title = titles[hash] || 'OAN — Cursed Memories';
  };

  // Initialize router
  router.init(pageRoot);
}

// Start app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
