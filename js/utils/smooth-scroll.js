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

  // 5. Mechanics Tag & 3 Cards (Scroll in from respective sides, hold, then exit)
  const mechTag = document.querySelector('.mechanics-badge-container');
  if (mechTag) {
    const tlTag = gsap.timeline({
      scrollTrigger: {
        trigger: mechTag,
        start: 'top 92%',
        end: 'bottom 10%',
        scrub: 1,
      },
    });

    tlTag
      .fromTo(mechTag,
        { x: -200, opacity: 0, scale: 0.92 },
        { x: 0, opacity: 1, scale: 1, ease: 'power2.out' },
        0
      )
      .to(mechTag,
        { x: 0, opacity: 1, scale: 1, ease: 'none' },
        0.35
      )
      .to(mechTag,
        { x: -200, opacity: 0, scale: 0.92, ease: 'power2.in' },
        0.7
      );
  }

  const mechCards = document.querySelectorAll('.mechanic-card-item');
  if (mechCards.length >= 3) {
    const cardLeft = mechCards[0];
    const cardCenter = mechCards[1];
    const cardRight = mechCards[2];

    const tlCards = gsap.timeline({
      scrollTrigger: {
        trigger: '.mechanics-cards-container',
        start: 'top 90%',
        end: 'bottom 12%',
        scrub: 1.2,
      },
    });

    // Card 1 (Left - ĐIỀU TRA): Enters from Left, holds, exits to Left
    tlCards
      .fromTo(cardLeft,
        { x: -260, opacity: 0, scale: 0.86, rotateY: 15 },
        { x: 0, opacity: 1, scale: 1, rotateY: 0, ease: 'power2.out' },
        0
      )
      .to(cardLeft,
        { x: 0, opacity: 1, scale: 1, rotateY: 0, ease: 'none' },
        0.35
      )
      .to(cardLeft,
        { x: -260, opacity: 0, scale: 0.86, rotateY: 15, ease: 'power2.in' },
        0.7
      );

    // Card 2 (Center - GIẢI ĐỐ): Enters by fading in & expanding, holds, exits by fading out & shrinking
    tlCards
      .fromTo(cardCenter,
        { opacity: 0, scale: 0.76, filter: 'blur(10px)', y: 60 },
        { opacity: 1, scale: 1, filter: 'blur(0px)', y: 0, ease: 'power2.out' },
        0
      )
      .to(cardCenter,
        { opacity: 1, scale: 1, filter: 'blur(0px)', y: 0, ease: 'none' },
        0.35
      )
      .to(cardCenter,
        { opacity: 0, scale: 0.76, filter: 'blur(10px)', y: -60, ease: 'power2.in' },
        0.7
      );

    // Card 3 (Right - THU THẬP MANH MỐI): Enters from Right, holds, exits to Right
    tlCards
      .fromTo(cardRight,
        { x: 260, opacity: 0, scale: 0.86, rotateY: -15 },
        { x: 0, opacity: 1, scale: 1, rotateY: 0, ease: 'power2.out' },
        0
      )
      .to(cardRight,
        { x: 0, opacity: 1, scale: 1, rotateY: 0, ease: 'none' },
        0.35
      )
      .to(cardRight,
        { x: 260, opacity: 0, scale: 0.86, rotateY: -15, ease: 'power2.in' },
        0.7
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

  // 7.5. Character Tag & Golden Line (Scroll in from the Right, hold, then exit - Section 5)
  const charTagBox = document.querySelector('.char-tag-right-box');
  const charTagLine = document.querySelector('.char-tag-gold-line');
  const charTagWrapper = document.querySelector('.char-tag-right-container');

  if (charTagWrapper) {
    const tlCharTag = gsap.timeline({
      scrollTrigger: {
        trigger: charTagWrapper,
        start: 'top 92%',
        end: 'bottom 10%',
        scrub: 1,
      },
    });

    if (charTagBox) {
      tlCharTag
        .fromTo(charTagBox,
          { x: 260, opacity: 0, scale: 0.9 },
          { x: 0, opacity: 1, scale: 1, ease: 'power2.out' },
          0
        )
        .to(charTagBox,
          { x: 0, opacity: 1, scale: 1, ease: 'none' },
          0.35
        )
        .to(charTagBox,
          { x: 260, opacity: 0, scale: 0.9, ease: 'power2.in' },
          0.7
        );
    }

    if (charTagLine) {
      tlCharTag
        .fromTo(charTagLine,
          { x: 320, opacity: 0, scaleX: 0.85 },
          { x: 0, opacity: 1, scaleX: 1, ease: 'power2.out' },
          0.05
        )
        .to(charTagLine,
          { x: 0, opacity: 1, scaleX: 1, ease: 'none' },
          0.35
        )
        .to(charTagLine,
          { x: 320, opacity: 0, scaleX: 0.85, ease: 'power2.in' },
          0.7
        );
    }
  }

  // 8. Character Cards & Wanted Dossier Board ScrollTrigger (Figma 1301:82038 -> 1301:82037)
  const charStage = document.querySelector('.char-interactive-stage-area');
  const cardsFlexWrapper = document.querySelector('#char-cards-flex-wrapper');
  const wantedBoard = document.querySelector('#wanted-dossier-board');

  if (charStage && cardsFlexWrapper && wantedBoard) {
    ScrollTrigger.create({
      trigger: charStage,
      start: 'top 35%',
      onEnter: () => {
        cardsFlexWrapper.classList.remove('state-default');
        cardsFlexWrapper.classList.add('state-selected');
        wantedBoard.classList.add('active-board');
        wantedBoard.classList.remove('has-character-selected');
        document.querySelectorAll('.char-card-interactive-item').forEach(c => {
          c.classList.remove('active-selected');
          c.classList.remove('blood-crossed');
        });
      },
      onLeaveBack: () => {
        cardsFlexWrapper.classList.remove('state-selected');
        cardsFlexWrapper.classList.add('state-default');
        wantedBoard.classList.remove('active-board');
        wantedBoard.classList.remove('has-character-selected');
        document.querySelectorAll('.char-card-interactive-item').forEach(c => {
          c.classList.remove('active-selected');
          c.classList.remove('blood-crossed');
        });
      },
    });
  }

  // 8.5. NHÀ HỨA Subblock & Tag Scroll Animation (Matching "CƠ CHẾ TRÒ CHƠI" Tag scrub animation)
  const nhaHuaTag = document.querySelector('.nha-hua-tag-left-box');
  const nhaHuaHallway = document.querySelector('.nha-hua-fear-hallway-frame');
  const nhaHuaBlock = document.querySelector('.nha-hua-fear-subblock');

  if (nhaHuaTag) {
    const tlNhaHua = gsap.timeline({
      scrollTrigger: {
        trigger: nhaHuaTag,
        start: 'top 92%',
        end: 'bottom 10%',
        scrub: 1,
      },
    });

    tlNhaHua
      .fromTo(nhaHuaTag,
        { x: -220, opacity: 0, scale: 0.92 },
        { x: 0, opacity: 1, scale: 1, ease: 'power2.out' },
        0
      )
      .to(nhaHuaTag,
        { x: 0, opacity: 1, scale: 1, ease: 'none' },
        0.35
      )
      .to(nhaHuaTag,
        { x: -220, opacity: 0, scale: 0.92, ease: 'power2.in' },
        0.7
      );

    if (nhaHuaHallway) {
      tlNhaHua
        .fromTo(nhaHuaHallway,
          { x: 220, opacity: 0, scale: 0.94 },
          { x: 0, opacity: 1, scale: 1, ease: 'power2.out' },
          0.05
        )
        .to(nhaHuaHallway,
          { x: 0, opacity: 1, scale: 1, ease: 'none' },
          0.35
        )
        .to(nhaHuaHallway,
          { x: 220, opacity: 0, scale: 0.94, ease: 'power2.in' },
          0.7
        );
    }
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

// 11. TRAILER PAGE — Thư viện ảnh & Khám phá Tag Scrub Animations (Matching "CƠ CHẾ TRÒ CHƠI")
export function initTrailerScrollTriggers() {
  const trailerGalleryTag = document.querySelector('.trailer-gallery-section .gallery-tag-section-badge');
  if (trailerGalleryTag) {
    const tlGalleryTag = gsap.timeline({
      scrollTrigger: {
        trigger: trailerGalleryTag,
        start: 'top 92%',
        end: 'bottom 10%',
        scrub: 1,
      },
    });

    tlGalleryTag
      .fromTo(trailerGalleryTag,
        { x: -220, opacity: 0, scale: 0.92 },
        { x: 0, opacity: 1, scale: 1, ease: 'power2.out' },
        0
      )
      .to(trailerGalleryTag,
        { x: 0, opacity: 1, scale: 1, ease: 'none' },
        0.35
      )
      .to(trailerGalleryTag,
        { x: -220, opacity: 0, scale: 0.92, ease: 'power2.in' },
        0.7
      );
  }

  const trailerExploreTag = document.querySelector('.trailer-explore-section .gallery-tag-section-badge');
  if (trailerExploreTag) {
    const tlExploreTag = gsap.timeline({
      scrollTrigger: {
        trigger: '.trailer-explore-section',
        start: 'top 92%',
        end: 'bottom 10%',
        scrub: 1,
      },
    });

    tlExploreTag
      .fromTo(trailerExploreTag,
        { x: -220, opacity: 0, scale: 0.92 },
        { x: 0, opacity: 1, scale: 1, ease: 'power2.out' },
        0
      )
      .to(trailerExploreTag,
        { x: 0, opacity: 1, scale: 1, ease: 'none' },
        0.35
      )
      .to(trailerExploreTag,
        { x: -220, opacity: 0, scale: 0.92, ease: 'power2.in' },
        0.7
      );
  }

  // Refresh after layout calculations
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);
}

// 12. INFO PAGE � Custom triggers
export function initInfoScrollTriggers() {
  const featuredTag = document.querySelector('.info-featured-tag-badge');
  if (featuredTag) {
    const tlFeatured = gsap.timeline({
      scrollTrigger: {
        trigger: featuredTag,
        start: 'top 92%',
        end: 'bottom 10%',
        scrub: 1,
      },
    });
    tlFeatured
      .fromTo(featuredTag,
        { x: -220, opacity: 0, scale: 0.92 },
        { x: 0, opacity: 1, scale: 1, ease: 'power2.out' },
        0
      )
      .to(featuredTag,
        { x: 0, opacity: 1, scale: 1, ease: 'none' },
        0.35
      )
      .to(featuredTag,
        { x: -220, opacity: 0, scale: 0.92, ease: 'power2.in' },
        0.7
      );
  }

  const newsTag = document.querySelector('.info-news-tag-badge');
  if (newsTag) {
    const tlNews = gsap.timeline({
      scrollTrigger: {
        trigger: newsTag,
        start: 'top 92%',
        end: 'bottom 10%',
        scrub: 1,
      },
    });
    tlNews
      .fromTo(newsTag,
        { x: 220, opacity: 0, scale: 0.92 },
        { x: 0, opacity: 1, scale: 1, ease: 'power2.out' },
        0
      )
      .to(newsTag,
        { x: 0, opacity: 1, scale: 1, ease: 'none' },
        0.35
      )
      .to(newsTag,
        { x: 220, opacity: 0, scale: 0.92, ease: 'power2.in' },
        0.7
      );
  }
}
