// Custom cursor. Two parts: a dot that tracks 1:1, and a ring that lerps fast.
// Disabled on touch devices. Refined, not bouncy.

export const initCursor = (): void => {
  // Skip on touch — pointer:fine ensures we only enable on mouse devices
  const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!supportsHover) return;

  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  const ring = document.createElement('div');
  ring.className = 'cursor-ring';

  document.body.appendChild(dot);
  document.body.appendChild(ring);
  document.body.classList.add('has-cursor');

  let mx = 0,
    my = 0;
  let rx = 0,
    ry = 0;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    // dot tracks 1:1, no lerp
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
  });

  // ring lerps with low smoothing — fast enough to feel responsive
  const tick = (): void => {
    rx += (mx - rx) * 0.22;
    ry += (my - ry) * 0.22;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(tick);
  };
  tick();

  // Hide when mouse leaves window
  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity = '';
    ring.style.opacity = '';
  });

  // Hover targets — interactive elements
  const hoverTargets = 'a, button, [data-lightbox], [data-tilt], .mood-btn, .arc, .feat, .card';
  document.querySelectorAll<HTMLElement>(hoverTargets).forEach((el) => {
    el.addEventListener('mouseenter', () => {
      ring.classList.add('is-hover');
    });
    el.addEventListener('mouseleave', () => {
      ring.classList.remove('is-hover');
    });
  });

  // Click feedback — quick squeeze
  document.addEventListener('mousedown', () => ring.classList.add('is-click'));
  document.addEventListener('mouseup', () => ring.classList.remove('is-click'));
};
