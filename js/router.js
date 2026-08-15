/* ============================================
   OAN Horror Game — Hash-based SPA Router
   ============================================ */

export class Router {
  constructor() {
    this.routes = {};
    this.currentPage = null;
    this.pageRoot = null;
    this.onBeforeNavigate = null;
    this.onAfterNavigate = null;
  }

  init(pageRoot) {
    this.pageRoot = pageRoot;
    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('load', () => this.handleRoute());
  }

  addRoute(path, handler) {
    this.routes[path] = handler;
  }

  navigate(path) {
    window.location.hash = path;
  }

  getHash() {
    return window.location.hash.slice(1) || 'intro';
  }

  async handleRoute() {
    const hash = this.getHash();
    const route = this.routes[hash];

    if (!route) {
      // Fallback to intro
      this.navigate('intro');
      return;
    }

    if (this.onBeforeNavigate) {
      this.onBeforeNavigate(hash);
    }

    // Page transition out
    this.pageRoot.classList.add('page-exit-active');

    await new Promise(resolve => setTimeout(resolve, 200));

    // Clear current page
    this.pageRoot.innerHTML = '';
    this.pageRoot.classList.remove('page-exit-active');

    // Render new page
    this.pageRoot.classList.add('page-enter');
    await route(this.pageRoot);
    this.currentPage = hash;

    // Page transition in
    requestAnimationFrame(() => {
      this.pageRoot.classList.remove('page-enter');
      this.pageRoot.classList.add('page-enter-active');
      setTimeout(() => {
        this.pageRoot.classList.remove('page-enter-active');
      }, 400);
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Init scroll reveal
    this.initScrollReveal();

    if (this.onAfterNavigate) {
      this.onAfterNavigate(hash);
    }
  }

  initScrollReveal() {
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    elements.forEach(el => observer.observe(el));
  }
}

export const router = new Router();
