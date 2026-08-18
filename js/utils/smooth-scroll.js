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

  // 8. Character Cards ScrollTrigger
  const charStage = document.querySelector('.char-interactive-stage-area');
  const cardsFlexWrapper = document.querySelector('#char-cards-flex-wrapper');

  if (charStage && cardsFlexWrapper) {
    gsap.fromTo(cardsFlexWrapper,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: charStage,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }

  // 8.5. NHÀ HỨA Subblock & Tag Scroll Animation (Snappy, Fast-Revealing Horror Entrance)
  const nhaHuaBlock = document.querySelector('.nha-hua-fear-subblock');
  const nhaHuaTag = document.querySelector('.nha-hua-tag-left-box');
  const nhaHuaHallway = document.querySelector('.nha-hua-fear-hallway-frame');

  if (nhaHuaBlock) {
    if (nhaHuaTag) {
      const nhaHuaTitle = nhaHuaTag.querySelector('.char-tag-title-main');
      const nhaHuaDesc = nhaHuaTag.querySelector('.char-tag-sub-desc');

      // Fast, responsive entrance as soon as user scrolls near
      gsap.fromTo(nhaHuaTag,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: nhaHuaTag,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      if (nhaHuaTitle) {
        gsap.fromTo(nhaHuaTitle,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: nhaHuaTag,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (nhaHuaDesc) {
        gsap.fromTo(nhaHuaDesc,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: nhaHuaTag,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }

    if (nhaHuaHallway) {
      gsap.fromTo(nhaHuaHallway,
        { opacity: 0, scale: 0.97, y: 25 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: nhaHuaHallway,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
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

  // 5-Frame Gallery Scroll Scrub Animation
  const collage = document.querySelector('.figma-horrorframe-collage');
  if (collage) {
    const f1 = collage.querySelector('.hf-item-1');
    const f2 = collage.querySelector('.hf-item-2');
    const f3 = collage.querySelector('.hf-item-3');
    const f4 = collage.querySelector('.hf-item-4');
    const f5 = collage.querySelector('.hf-item-5');

    const tlCollage = gsap.timeline({
      scrollTrigger: {
        trigger: collage,
        start: 'top 85%',
        end: 'bottom 15%',
        scrub: 1.2,
      },
    });

    if (f1) {
      tlCollage
        .fromTo(f1, { x: -140, opacity: 0.2, scale: 0.92 }, { x: 0, opacity: 1, scale: 1, ease: 'power2.out' }, 0)
        .to(f1, { x: 0, opacity: 1, scale: 1, ease: 'none' }, 0.35)
        .to(f1, { x: -100, opacity: 0.3, scale: 0.94, ease: 'power2.in' }, 0.7);
    }
    if (f2 && f3) {
      tlCollage
        .fromTo([f2, f3], { y: 60, opacity: 0.2, scale: 0.92 }, { y: 0, opacity: 1, scale: 1, ease: 'power2.out' }, 0)
        .to([f2, f3], { y: 0, opacity: 1, scale: 1, ease: 'none' }, 0.35)
        .to([f2, f3], { y: -60, opacity: 0.3, scale: 0.92, ease: 'power2.in' }, 0.7);
    }
    if (f4 && f5) {
      tlCollage
        .fromTo([f4, f5], { x: 140, opacity: 0.2, scale: 0.92 }, { x: 0, opacity: 1, scale: 1, ease: 'power2.out' }, 0)
        .to([f4, f5], { x: 0, opacity: 1, scale: 1, ease: 'none' }, 0.35)
        .to([f4, f5], { x: 100, opacity: 0.3, scale: 0.94, ease: 'power2.in' }, 0.7);
    }
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

// 12. INFO PAGE — GSAP ScrollTrigger Animations
export function initInfoScrollTriggers() {
  ScrollTrigger.getAll().forEach(t => t.kill());

  // 1. Hero Section Animations
  const heroBoard = document.querySelector('.info-hero-board-section');
  if (heroBoard) {
    const titleOverlay = heroBoard.querySelector('.info-hero-title-overlay');
    const hudObj = heroBoard.querySelector('.info-board-hud-objective');
    const profileCard = heroBoard.querySelector('.info-profile-sidebar');
    const hotspots = heroBoard.querySelectorAll('.char-hotspot-btn');
    const hotkeyBar = heroBoard.querySelector('.info-board-hotkey-bar');

    if (titleOverlay) {
      gsap.fromTo(titleOverlay,
        { opacity: 0, x: -60, filter: 'blur(6px)' },
        { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.9, delay: 0.2, ease: 'power3.out' }
      );
    }
    if (hudObj) {
      gsap.fromTo(hudObj,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: 'power2.out' }
      );
    }
    if (profileCard) {
      gsap.fromTo(profileCard,
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, duration: 0.9, delay: 0.4, ease: 'power3.out' }
      );
    }
    if (hotspots.length) {
      gsap.fromTo(hotspots,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.04, delay: 0.4, ease: 'back.out(1.7)' }
      );
    }
    if (hotkeyBar) {
      gsap.fromTo(hotkeyBar,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.6, ease: 'power2.out' }
      );
    }
  }

  // 2. Section 2: 4 Story Scenes Photo Gallery Grid
  const storyGrid = document.querySelector('.info-story-gallery-grid');
  if (storyGrid) {
    const cards = storyGrid.querySelectorAll('.story-scene-horror-card');
    if (cards.length >= 4) {
      // Card 1 (Top-Left): slide in from left
      gsap.fromTo(cards[0],
        { x: -80, opacity: 0, scale: 0.94 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: storyGrid,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
      // Card 2 (Top-Right): slide in from right
      gsap.fromTo(cards[1],
        { x: 80, opacity: 0, scale: 0.94 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: storyGrid,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
      // Card 3 (Bottom-Left): slide in from left
      gsap.fromTo(cards[2],
        { x: -80, opacity: 0, scale: 0.94 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.25,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: storyGrid,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
        }
      );
      // Card 4 (Bottom-Right): slide in from right
      gsap.fromTo(cards[3],
        { x: 80, opacity: 0, scale: 0.94 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: storyGrid,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }

  // 3. Section 3: Feature Story Highlight (BI KỊCH CỦA NHÀ HỨA)
  const featureSection = document.querySelector('.info-feature-story-section');
  if (featureSection) {
    const tagBadge = featureSection.querySelector('.feature-tag-badge-left');
    const fTitle = featureSection.querySelector('.feature-story-title');
    const fDesc = featureSection.querySelector('.feature-story-desc');
    const fBtn = featureSection.querySelector('.btn-horror-cta-readmore');

    if (tagBadge) {
      gsap.fromTo(tagBadge,
        { x: -90, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: featureSection,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    if (fTitle) {
      gsap.fromTo(fTitle,
        { x: -60, opacity: 0, filter: 'blur(6px)' },
        {
          x: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.8,
          delay: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: featureSection,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    if (fDesc) {
      gsap.fromTo(fDesc,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: featureSection,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    if (fBtn) {
      gsap.fromTo(fBtn,
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          delay: 0.45,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: featureSection,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }

  // 4. Section 4: Latest News & Updates (CẬP NHẬT MỚI NHẤT)
  const updatesSection = document.querySelector('.info-updates-section');
  if (updatesSection) {
    const upTag = updatesSection.querySelector('.updates-tag-badge');
    const viewAllLink = updatesSection.querySelector('.updates-view-all-link');
    const newsCards = updatesSection.querySelectorAll('.info-news-card');

    if (upTag) {
      gsap.fromTo(upTag,
        { x: 90, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: updatesSection,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    if (viewAllLink) {
      gsap.fromTo(viewAllLink,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: updatesSection,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    if (newsCards.length) {
      gsap.fromTo(newsCards,
        { y: 50, opacity: 0, scale: 0.94 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: updatesSection,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }

  // 5. Ready Section
  const readySec = document.querySelector('.figma-ready-section');
  if (readySec) {
    const heading = readySec.querySelector('.ready-heading-text');
    const btns = readySec.querySelectorAll('.figma-btn-horror-frame');
    if (heading) {
      gsap.fromTo(heading,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: readySec,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
    if (btns.length) {
      gsap.fromTo(btns,
        { opacity: 0, scale: 0.9, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          delay: 0.2,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: readySec,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }

  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);
}

/**
 * GSAP ScrollTrigger Animations for Community Page (Figma 1024:73961)
 */
export function initCommunityScrollTriggers() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  killPageTriggers();

  // 1. Community Hero Section
  const commHero = document.querySelector('.community-hero-section');
  if (commHero) {
    const watermark = commHero.querySelector('.community-hero-watermark');
    const title = commHero.querySelector('.community-hero-title');
    const subtitle = commHero.querySelector('.community-hero-subtitle');
    const actions = commHero.querySelector('.community-hero-actions');
    const bracketL = commHero.querySelector('.comm-hero-bracket-top-left');
    const bracketR = commHero.querySelector('.comm-hero-bracket-bottom-right');

    if (watermark) {
      gsap.fromTo(watermark,
        { opacity: 0, scale: 0.88, xPercent: -50, yPercent: -50 },
        { opacity: 0.92, scale: 1, xPercent: -50, yPercent: -50, duration: 1.2, ease: 'power3.out' }
      );
    }
    if (bracketL) {
      gsap.fromTo(bracketL,
        { opacity: 0, x: -30, y: -20 },
        { opacity: 0.85, x: 0, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.2 }
      );
    }
    if (bracketR) {
      gsap.fromTo(bracketR,
        { opacity: 0, x: 30, y: 20 },
        { opacity: 0.85, x: 0, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.2 }
      );
    }
    if (title) {
      gsap.fromTo(title,
        { opacity: 0, y: 35, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, ease: 'power3.out', delay: 0.15 }
      );
    }
    if (subtitle) {
      gsap.fromTo(subtitle,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.3 }
      );
    }
    if (actions) {
      gsap.fromTo(actions.children,
        { opacity: 0, scale: 0.9, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'back.out(1.5)', delay: 0.4 }
      );
    }
  }

  // 2. Community News Section (1024:74098)
  const newsSec = document.querySelector('.community-news-section');
  if (newsSec) {
    const newsHeader = newsSec.querySelector('.community-news-header');
    const newsCards = newsSec.querySelectorAll('.comm-article-card');

    if (newsHeader) {
      gsap.fromTo(newsHeader,
        { opacity: 0, y: 30, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: newsSec,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    if (newsCards.length) {
      gsap.fromTo(newsCards,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: newsSec,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }

  // 3. Community Subscribe Section (1030:73731)
  const subSec = document.querySelector('.community-subscribe-section');
  if (subSec) {
    const subBadge = subSec.querySelector('.comm-sub-tag-badge');
    const charFigure = subSec.querySelector('.comm-sub-char-figure');
    const formBox = subSec.querySelector('.comm-sub-form-box');

    if (subBadge) {
      gsap.fromTo(subBadge,
        { opacity: 0, y: 40, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'back.out(1.3)',
          scrollTrigger: {
            trigger: subSec,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    if (charFigure) {
      gsap.fromTo(charFigure,
        { opacity: 0, x: -60, scale: 0.92 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: subSec,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    if (formBox) {
      gsap.fromTo(formBox,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: subSec,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }

  // 4. Shared Ready Section (1363:86758)
  const readySec = document.querySelector('.figma-ready-section');
  if (readySec) {
    const heading = readySec.querySelector('.ready-heading-text');
    const btns = readySec.querySelectorAll('.figma-btn-horror-frame');
    const sysreq = readySec.querySelector('.ready-sysreq-box');

    if (heading) {
      gsap.fromTo(heading,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: readySec,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
    if (btns.length) {
      gsap.fromTo(btns,
        { opacity: 0, scale: 0.9, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          delay: 0.15,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: readySec,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
    if (sysreq) {
      gsap.fromTo(sysreq,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.35,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: readySec,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }

  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);
}
