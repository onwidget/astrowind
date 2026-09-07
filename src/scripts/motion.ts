import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Counters. The markup ships the final value, so this only has to animate up to
 * it; with `animate` false (reduced motion) the value is simply left in place.
 */
function countUp(animate: boolean) {
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const target = parseFloat(el.dataset.count ?? '0');
    const suffix = el.dataset.countSuffix ?? '';
    const render = (value: number) => {
      el.textContent = `${Math.round(value)}${suffix}`;
    };

    render(target);
    if (!animate) return;

    const counter = { value: 0 };
    render(0);
    gsap.to(counter, {
      value: target,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate: () => render(counter.value),
      onComplete: () => render(target),
    });
  });
}

/**
 * Scroll choreography for the whole site.
 *
 * Markup contract:
 *  - [data-reveal]            fades/slides in when scrolled into view
 *  - [data-reveal-group]      staggers its direct children
 *  - [data-count="42"]        counts up to 42 when visible; markup already holds
 *                             the final value, so no-JS and reduced-motion keep it
 *  - #site-header             gets .scrolled past 40px
 */
function init() {
  document.documentElement.classList.add('js');

  // Re-entry via Astro view transitions: clear previous triggers.
  ScrollTrigger.getAll().forEach((t) => t.kill());

  const header = document.getElementById('site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  if (prefersReducedMotion()) {
    gsap.set('[data-reveal], [data-reveal-group] > *', { opacity: 1 });
    countUp(false);
    return;
  }

  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: Number(el.dataset.revealDelay ?? 0),
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      }
    );
  });

  document.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((group) => {
    gsap.fromTo(
      group.children,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.09,
        scrollTrigger: { trigger: group, start: 'top 85%', once: true },
      }
    );
  });

  countUp(true);
}

document.addEventListener('astro:page-load', init);
