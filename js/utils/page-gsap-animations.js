/* ========================================================
   OAN Horror Game — GSAP Scroll-Triggered Page Animations
   Dedicated Animation Module for Community & FAQ Pages
   ======================================================== */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Helper to safely query elements within a container or document
 */
function getElem(selector, scope = document) {
  return scope.querySelector(selector);
}

function getElems(selector, scope = document) {
  return Array.from(scope.querySelectorAll(selector));
}

/* ========================================================
   1. COMMUNITY PAGE GSAP SCROLL ANIMATIONS
   ======================================================== */
export function initCommunityGsapScroll(container = document) {
  // Refresh ScrollTrigger to get accurate heights
  ScrollTrigger.refresh();

  // --- A. Community Hero Section ---
  const heroSection = getElem('.community-hero-section', container);
  if (heroSection) {
    const title = getElem('.community-hero-title', heroSection);
    const subtitle = getElem('.community-hero-subtitle', heroSection);
    const actions = getElems('.community-hero-actions > *', heroSection);
    const watermark = getElem('.community-hero-watermark', heroSection);
    const bracketTopLeft = getElem('.comm-hero-bracket-top-left', heroSection);
    const bracketBottomRight = getElem('.comm-hero-bracket-bottom-right', heroSection);

    // Initial Hero Entrance Timeline
    const heroTl = gsap.timeline({ delay: 0.15 });

    if (bracketTopLeft && bracketBottomRight) {
      heroTl.fromTo(
        [bracketTopLeft, bracketBottomRight],
        { opacity: 0, scale: 0.6, rotation: (i) => (i === 0 ? -15 : 15) },
        { opacity: 1, scale: 1, rotation: 0, duration: 1.0, ease: 'back.out(1.7)' },
        0
      );
    }

    if (title) {
      heroTl.fromTo(
        title,
        { opacity: 0, y: -40, scale: 0.9, filter: 'blur(10px)' },
        { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', duration: 1.1, ease: 'power3.out' },
        0.1
      );
    }

    if (subtitle) {
      heroTl.fromTo(
        subtitle,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' },
        0.35
      );
    }

    if (actions.length > 0) {
      heroTl.fromTo(
        actions,
        { opacity: 0, y: 35, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15, ease: 'back.out(1.4)' },
        0.5
      );
    }

    // Parallax on Watermark
    if (watermark) {
      gsap.to(watermark, {
        yPercent: 30,
        opacity: 0.4,
        ease: 'none',
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }
  }

  // --- B. Tin Tức Nổi Bật (News & Articles) Section ---
  const newsSection = getElem('.community-news-section', container);
  if (newsSection) {
    const header = getElem('.community-news-header', newsSection);
    const bracketLeft = getElem('.comm-bracket-left', newsSection);
    const bracketRight = getElem('.comm-bracket-right', newsSection);
    const cards = getElems('.comm-article-card', newsSection);

    if (header) {
      gsap.fromTo(
        header,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      if (bracketLeft && bracketRight) {
        gsap.fromTo(
          [bracketLeft, bracketRight],
          { x: (i) => (i === 0 ? -30 : 30), opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: header,
              start: 'top 85%',
            },
          }
        );
      }
    }

    // 4 Articles Cascading Reveal
    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60, scale: 0.93, filter: 'blur(4px)' },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.85,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.comm-news-cards-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }

  // --- C. Subscribe Section ---
  const subSection = getElem('.community-subscribe-section', container);
  if (subSection) {
    const tagBadge = getElem('.comm-sub-tag-badge', subSection);
    const charFigure = getElem('.comm-sub-char-figure', subSection);
    const formBox = getElem('.comm-sub-form-box', subSection);
    const formGroups = getElems('.comm-form-group', subSection);
    const formActions = getElems('.comm-form-actions-row > *', subSection);

    if (tagBadge) {
      gsap.fromTo(
        tagBadge,
        { opacity: 0, y: 35, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: tagBadge,
            start: 'top 85%',
          },
        }
      );
    }

    // Character sliding in with floating idle
    if (charFigure) {
      gsap.fromTo(
        charFigure,
        { opacity: 0, x: -90, y: 40 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: subSection,
            start: 'top 75%',
          },
          onComplete: () => {
            // Subtle breathing/floating idle
            gsap.to(charFigure, {
              y: -12,
              duration: 3,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
            });
          },
        }
      );
    }

    // Form box reveal
    if (formBox) {
      gsap.fromTo(
        formBox,
        { opacity: 0, x: 50, scale: 0.96 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formBox,
            start: 'top 80%',
          },
        }
      );
    }

    if (formGroups.length > 0) {
      gsap.fromTo(
        formGroups,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formBox,
            start: 'top 75%',
          },
        }
      );
    }

    if (formActions.length > 0) {
      gsap.fromTo(
        formActions,
        { opacity: 0, y: 25, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: formBox,
            start: 'top 70%',
          },
        }
      );
    }
  }

  // --- D. Ready Section (if present) ---
  const readySection = getElem('.figma-ready-section', container);
  if (readySection) {
    const readyCore = getElem('.ready-inner-content', readySection);
    const readyChars = getElems('.ready-char-decor, .ready-decor-left, .ready-decor-right', readySection);

    if (readyCore) {
      gsap.fromTo(
        readyCore,
        { opacity: 0, scale: 0.9, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: readySection,
            start: 'top 75%',
          },
        }
      );
    }

    if (readyChars.length > 0) {
      gsap.fromTo(
        readyChars,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: readySection,
            start: 'top 75%',
          },
        }
      );
    }
  }
}

/* ========================================================
   2. FAQ / SUPPORT PAGE GSAP SCROLL ANIMATIONS
   ======================================================== */
export function initFaqGsapScroll(container = document) {
  // Refresh ScrollTrigger
  ScrollTrigger.refresh();

  // --- A. FAQ Hero Section ---
  const heroSection = getElem('.faq-hero-section', container);
  if (heroSection) {
    const bgImg = getElem('.faq-hero-bg-img', heroSection);
    const title = getElem('.faq-hero-title', heroSection);
    const desc = getElem('.faq-hero-desc', heroSection);
    const socialLead = getElem('.faq-hero-social-lead', heroSection);
    const socialLinks = getElems('.faq-social-link', heroSection);

    // Hero entrance timeline
    const heroTl = gsap.timeline({ delay: 0.1 });

    if (title) {
      heroTl.fromTo(
        title,
        { opacity: 0, x: -60, filter: 'blur(8px)' },
        { opacity: 1, x: 0, filter: 'blur(0px)', duration: 1.0, ease: 'power3.out' },
        0
      );
    }

    if (desc) {
      heroTl.fromTo(
        desc,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        0.25
      );
    }

    if (socialLead) {
      heroTl.fromTo(
        socialLead,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
        0.4
      );
    }

    if (socialLinks.length > 0) {
      heroTl.fromTo(
        socialLinks,
        { opacity: 0, scale: 0.6, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'back.out(2)' },
        0.55
      );
    }

    // Parallax background drift
    if (bgImg) {
      gsap.to(bgImg, {
        yPercent: 18,
        scale: 1.08,
        ease: 'none',
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }
  }

  // --- B. Section 2: Câu Hỏi Phổ Biến (Questions & Accordions) ---
  const questionsSection = getElem('.faq-questions-section', container);
  if (questionsSection) {
    const header = getElem('.faq-questions-header', questionsSection);
    const bracketLeft = getElem('.faq-frame-bracket-left', questionsSection);
    const bracketRight = getElem('.faq-frame-bracket-right', questionsSection);
    const charFlank = getElem('.faq-character-flank', questionsSection);
    const accordionItems = getElems('.faq-accordion-item', questionsSection);

    if (header) {
      gsap.fromTo(
        header,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 85%',
          },
        }
      );

      if (bracketLeft && bracketRight) {
        gsap.fromTo(
          [bracketLeft, bracketRight],
          { x: (i) => (i === 0 ? -35 : 35), opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: header,
              start: 'top 85%',
            },
          }
        );
      }
    }

    // Left Flank Character Entrance & Idle Float
    if (charFlank) {
      gsap.fromTo(
        charFlank,
        { opacity: 0, x: 70, y: 50 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: questionsSection,
            start: 'top 75%',
          },
          onComplete: () => {
            gsap.to(charFlank, {
              y: -10,
              duration: 3.5,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
            });
          },
        }
      );
    }

    // Accordions Cascading Entrance
    if (accordionItems.length > 0) {
      gsap.fromTo(
        accordionItems,
        { opacity: 0, x: -50, filter: 'blur(4px)' },
        {
          opacity: 1,
          x: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.faq-accordion-container',
            start: 'top 80%',
          },
        }
      );
    }
  }

  // --- C. Section 4: Vẫn Cần Hỗ Trợ? (Help Cards) ---
  const helpSection = getElem('.faq-still-need-help-section', container);
  if (helpSection) {
    const header = getElem('.faq-still-help-header', helpSection);
    const largeCard = getElem('.faq-help-large-card', helpSection);
    const smallCards = getElems('.faq-help-small-card', helpSection);
    const aura = getElem('.faq-section4-aura', helpSection);

    if (header) {
      gsap.fromTo(
        header,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 85%',
          },
        }
      );
    }

    if (aura) {
      gsap.fromTo(
        aura,
        { scale: 0.7, opacity: 0.2 },
        {
          scale: 1.1,
          opacity: 0.85,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: helpSection,
            start: 'top 75%',
          },
        }
      );
    }

    if (largeCard) {
      gsap.fromTo(
        largeCard,
        { opacity: 0, x: -60, scale: 0.94 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: largeCard,
            start: 'top 80%',
          },
        }
      );
    }

    if (smallCards.length > 0) {
      gsap.fromTo(
        smallCards,
        { opacity: 0, x: 60, scale: 0.94 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.18,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.faq-help-stack',
            start: 'top 80%',
          },
        }
      );
    }
  }

  // --- D. Section 5: Sẵn Sàng & Liên Hệ ---
  const readySection = getElem('.faq-ready-section', container);
  if (readySection) {
    const charFlank = getElem('.faq-ready-char-flank', readySection);
    const watermark = getElem('.faq-ready-watermark', readySection);
    const coreBox = getElem('.faq-ready-core', readySection);
    const buttons = getElems('.faq-ready-buttons-row > *', readySection);
    const supportBox = getElem('.faq-support-bottom-box', readySection);

    // Large character sliding from left
    if (charFlank) {
      gsap.fromTo(
        charFlank,
        { opacity: 0, x: -100, y: 50 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: readySection,
            start: 'top 75%',
          },
        }
      );
    }

    // Watermark drift
    if (watermark) {
      gsap.to(watermark, {
        yPercent: -20,
        opacity: 0.25,
        ease: 'none',
        scrollTrigger: {
          trigger: readySection,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }

    // Core Box
    if (coreBox) {
      gsap.fromTo(
        coreBox,
        { opacity: 0, y: 40, scale: 0.93 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: coreBox,
            start: 'top 80%',
          },
        }
      );
    }

    if (buttons.length > 0) {
      gsap.fromTo(
        buttons,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: coreBox,
            start: 'top 75%',
          },
        }
      );
    }

    // Support Box
    if (supportBox) {
      gsap.fromTo(
        supportBox,
        { opacity: 0, y: 45, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: supportBox,
            start: 'top 85%',
          },
        }
      );
    }
  }
}
