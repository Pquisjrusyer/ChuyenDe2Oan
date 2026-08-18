with open('f:/PROJECT-SOFTWARE/OanNe/js/utils/smooth-scroll.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Locate section 4 in initInfoScrollTriggers
s4_marker = "  // 4. Section 4: Latest News & Updates (CẬP NHẬT MỚI NHẤT)"
comm_marker = "export function initCommunityScrollTriggers()"

idx_s4 = content.find(s4_marker)
idx_comm = content.find(comm_marker)

print(f"idx_s4: {idx_s4}, idx_comm: {idx_comm}")

clean_s4_and_s5 = """  // 4. Section 4: Latest News & Updates (CẬP NHẬT MỚI NHẤT)
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
"""

new_content = content[:idx_s4] + clean_s4_and_s5 + content[idx_comm:]

with open('f:/PROJECT-SOFTWARE/OanNe/js/utils/smooth-scroll.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated smoothly!")
