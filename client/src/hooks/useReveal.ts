'use client';
import { useEffect } from 'react';

/**
 * Scroll reveal hook — works reliably on both desktop & mobile.
 * Uses a very low threshold (0) so elements trigger as soon as
 * even 1px enters the viewport, with a small negative rootMargin
 * to prevent too-early triggers above the fold.
 */
export function useReveal() {
  useEffect(() => {
    const selectors = '.reveal, .reveal-left, .reveal-right';
    const els = document.querySelectorAll(selectors);

    // Immediately reveal anything already in the viewport on mount
    els.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        el.classList.add('visible');
      }
    });

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            // Unobserve after reveal so it stays visible on scroll back
            obs.unobserve(e.target);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}
