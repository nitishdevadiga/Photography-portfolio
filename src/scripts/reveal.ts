// Add `.is-visible` to elements as they enter the viewport.
// Photos use clip-path for a cinematic reveal; everything else uses opacity+translate.

export const initReveal = (): void => {
  const photoTargets = document.querySelectorAll<HTMLElement>('.feat, .arc, .card');
  const textTargets = document.querySelectorAll<HTMLElement>('.section-head, h2, .lede, .meta, .about-text, .facts');

  if (!('IntersectionObserver' in window)) {
    [...photoTargets, ...textTargets].forEach((el) => el.classList.add('is-visible'));
    return;
  }

  photoTargets.forEach((el) => el.classList.add('reveal-clip'));
  textTargets.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
  );

  [...photoTargets, ...textTargets].forEach((el) => observer.observe(el));
};
