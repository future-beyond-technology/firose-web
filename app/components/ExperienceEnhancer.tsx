'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

const REVEAL_SELECTOR = [
  'main > section',
  'main > article',
  'main > div',
  'main > ul',
  'main .fe-panel',
  'main .fe-panel-strong',
].join(', ');

export default function ExperienceEnhancer() {
  const pathname = usePathname();
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const progressElement = progressRef.current;
    if (!progressElement) {
      return;
    }

    let ticking = false;

    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollHeight > 0 ? Math.min(Math.max(window.scrollY / scrollHeight, 0), 1) : 0;
      progressElement.style.transform = `scaleX(${ratio})`;
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotionQuery.matches) {
      return;
    }

    const targets = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)).filter((element) => {
      if (element.dataset.auRevealReady === 'true') {
        return false;
      }

      if (element.closest('[data-au-reveal="off"]')) {
        return false;
      }

      return true;
    });

    if (!targets.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target as HTMLElement;
          element.classList.add('au-visible');
          observer.unobserve(element);
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.16,
      }
    );

    targets.forEach((element, index) => {
      element.dataset.auRevealReady = 'true';
      element.style.setProperty('--au-delay', `${Math.min((index % 8) * 70, 420)}ms`);
      element.classList.add('au-reveal');
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <div className="au-progress" aria-hidden="true">
        <span ref={progressRef} className="au-progressBar" />
      </div>
      <div key={pathname} className="au-routePulse" aria-hidden="true" />
    </>
  );
}
