/* ============================================
   OAN Horror Game — Smooth Scroll & GSAP ScrollTrigger
   ============================================ */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;

/**
 * Initialize Lenis Smooth Scrolling engine synchronized with GSAP Ticker
 */
export function initSmoothScroll() {
  if (lenisInstance) {
    lenisInstance.destroy();
  }

  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.5,
    infinite: false,
  });

  lenisInstance.on('scroll', () => {
    ScrollTrigger.update();
  });

  gsap.ticker.add((time) => {
    lenisInstance.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return lenisInstance;
}

export function getLenis() {
  return lenisInstance;
}

/**
 * Initialize GSAP ScrollTrigger animations on Homepage sections
 */
export function initHomeScrollTriggers() {
  // Kill any previous ScrollTriggers to prevent duplicate handlers
  ScrollTrigger.getAll().forEach(t => t.kill());

  // 1. Hero Parallax
  const heroImg = document.querySelector('.figma-hero-main-img');
  if (heroImg) {
    gsap.to(heroImg, {
      yPercent: 18,
      scale: 1.06,
      ease: 'none',
      scrollTrigger: {
        trigger: '.figma-hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }

  // 2. Scene 1 Khám Phá (Sticky Pinning ScrollTrigger Effect)
  const scene1 = document.querySelector('.scene-1-explore');
  if (scene1) {
    const s1Img = scene1.querySelector('.scene-explore-bg-img');
    const s1Badge = scene1.querySelector('.scene-title-badge-floating');

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: scene1,
        start: 'top top',
        end: '+=100%',
        pin: true,
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    if (s1Img) {
      tl1.fromTo(s1Img, { scale: 1.15, yPercent: -4 }, { scale: 1, yPercent: 4, ease: 'none' }, 0);
    }
    if (s1Badge) {
      tl1
        .fromTo(s1Badge, 
          { opacity: 0, scale: 0.8, y: 50, filter: 'blur(6px)' }, 
          { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)', ease: 'power2.out' }, 
          0.05
        )
        .to(s1Badge, { opacity: 1, scale: 1, ease: 'none' }, 0.7);
    }
  }

  // 3. Scene 2 Hồi Hộp (Sticky Pinning ScrollTrigger Effect)
  const scene2 = document.querySelector('.scene-2-suspense');
  if (scene2) {
    const s2Img = scene2.querySelector('.suspense-bg-img');
    const s2Badge = scene2.querySelector('.scene-title-badge-floating');
    const s2Glow = scene2.querySelector('.blood-red-glow');

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: scene2,
        start: 'top top',
        end: '+=100%',
        pin: true,
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    if (s2Img) {
      tl2.fromTo(s2Img, { scale: 1.15, yPercent: -4 }, { scale: 1, yPercent: 4, ease: 'none' }, 0);
    }
    if (s2Glow) {
      tl2.fromTo(s2Glow, { opacity: 0.2 }, { opacity: 0.95, ease: 'sine.inOut' }, 0.1);
    }
    if (s2Badge) {
      tl2
        .fromTo(s2Badge,
          { opacity: 0, x: 80, filter: 'blur(6px)' },
          { opacity: 1, x: 0, filter: 'blur(0px)', ease: 'power2.out' },
          0.05
        )
        .to(s2Badge, { opacity: 1, ease: 'none' }, 0.7);
    }
  }

  // 4. Intro Description Block
  const introBlock = document.querySelector('.intro-split-row');
  if (introBlock) {
    const introVisual = introBlock.querySelector('.intro-visual-preview');
    const introText = introBlock.querySelector('.intro-text-column');
    if (introVisual) {
      gsap.fromTo(introVisual,
        { opacity: 0, x: -60, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: introBlock,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
    if (introText) {
      gsap.fromTo(introText,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: introBlock,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }

  // 5. Mechanics Tag & 3 Cards
  const mechTag = document.querySelector('.mechanics-badge-container');
  if (mechTag) {
    gsap.fromTo(mechTag,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: mechTag,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }

  const mechCards = document.querySelectorAll('.mechanic-card-item');
  if (mechCards.length) {
    gsap.fromTo(mechCards,
      { opacity: 0, y: 60, scale: 0.92 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        stagger: 0.18,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.mechanics-cards-flex',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }

  // 6. Horror Ribbon Line
  const ribbon = document.querySelector('.horror-cta-line-ribbon');
  if (ribbon) {
    const clawL = ribbon.querySelector('.ribbon-claw-left');
    const clawR = ribbon.querySelector('.ribbon-claw-right');
    const rText = ribbon.querySelector('.ribbon-cta-text');
    if (clawL) {
      gsap.fromTo(clawL, { x: -50, opacity: 0 }, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ribbon,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    }
    if (clawR) {
      gsap.fromTo(clawR, { x: 50, opacity: 0 }, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ribbon,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    }
    if (rText) {
      gsap.fromTo(rText, { opacity: 0, scale: 0.9 }, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ribbon,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    }
  }

  // 7. Investigation Scene & Voices
  const invScene = document.querySelector('.investigation-scene-box');
  if (invScene) {
    const invImg = invScene.querySelector('.room-scene-img');
    const voice1 = invScene.querySelector('.figma-charvoice-box:nth-child(1)');
    const voice2 = invScene.querySelector('.figma-charvoice-box:nth-child(2)');

    if (invImg) {
      gsap.fromTo(invImg, { scale: 1.08, opacity: 0.7 }, {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: invScene,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });
    }
    if (voice1) {
      gsap.fromTo(voice1, { opacity: 0, x: -70 }, {
        opacity: 1,
        x: 0,
        duration: 0.9,
        delay: 0.2,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: invScene,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });
    }
    if (voice2) {
      gsap.fromTo(voice2, { opacity: 0, x: 70 }, {
        opacity: 1,
        x: 0,
        duration: 0.9,
        delay: 0.4,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: invScene,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });
    }
  }

  // 8. Character Cards Grid
  const charCards = document.querySelectorAll('.figma-char-card-item');
  if (charCards.length) {
    gsap.fromTo(charCards,
      { opacity: 0, y: 70, scale: 0.94 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.character-cards-grid-figma',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }

  // 9. Philosophy Banner
  const philBanner = document.querySelector('.character-philosophy-banner');
  if (philBanner) {
    gsap.fromTo(philBanner, 
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: philBanner,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }

  // 10. General Info Table & Gallery
  const generalInfo = document.querySelector('.figma-general-info-table');
  if (generalInfo) {
    gsap.fromTo(generalInfo,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: generalInfo,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }

  const galleryShowcase = document.querySelector('.figma-video-gallery-showcase');
  if (galleryShowcase) {
    gsap.fromTo(galleryShowcase,
      { opacity: 0, scale: 0.96, y: 40 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: galleryShowcase,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }

  // Refresh after layout calculations
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);
}
