// Subtle 3D tilt for elements with [data-tilt].
// Tilt amount is small — 6 degrees max — for refinement, not gimmick.

const MAX_TILT = 6; // degrees

export const initTilt = (): void => {
  // Skip on touch devices and when reduced-motion is preferred
  const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!supportsHover || reduceMotion) return;

  const targets = document.querySelectorAll<HTMLElement>('[data-tilt]');

  targets.forEach((el) => {
    let baseRot = 0;
    // Read base rotation from CSS custom property if defined
    const baseRotStr = getComputedStyle(el).getPropertyValue('--base-rot').trim();
    if (baseRotStr) {
      baseRot = parseFloat(baseRotStr);
    }

    const apply = (rx: number, ry: number, lift: boolean): void => {
      // When hovered, neutralize the base rotation so the tilt is symmetric
      const z = lift ? 'translateZ(20px)' : '';
      el.style.transform = `${z} rotateX(${rx}deg) rotateY(${ry}deg) rotate(${lift ? 0 : baseRot}deg)`;
    };

    el.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width; // 0..1
      const y = (e.clientY - rect.top) / rect.height; // 0..1
      const ry = (x - 0.5) * 2 * MAX_TILT; // -MAX..MAX
      const rx = -(y - 0.5) * 2 * MAX_TILT; // inverted Y
      apply(rx, ry, true);
    });

    el.addEventListener('mouseleave', () => {
      // Reset to base rotation
      el.style.transform = '';
    });
  });
};
