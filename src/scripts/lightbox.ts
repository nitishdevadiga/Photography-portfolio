// Lightbox controller. Open/close + keyboard nav + photo cycling.

interface LightboxElements {
  dialog: HTMLDialogElement;
  frames: HTMLElement[];
  closeBtn: HTMLButtonElement;
  prevBtn: HTMLButtonElement;
  nextBtn: HTMLButtonElement;
  counter: HTMLElement;
}

export const initLightbox = (): void => {
  const dialog = document.getElementById('lightbox') as HTMLDialogElement | null;
  if (!dialog) return;

  const frames = Array.from(dialog.querySelectorAll<HTMLElement>('.frame'));
  const closeBtn = document.getElementById('lb-close') as HTMLButtonElement;
  const prevBtn = document.getElementById('lb-prev') as HTMLButtonElement;
  const nextBtn = document.getElementById('lb-next') as HTMLButtonElement;
  const counter = document.getElementById('lb-counter') as HTMLElement;

  const els: LightboxElements = { dialog, frames, closeBtn, prevBtn, nextBtn, counter };

  let index = 0;
  const ids = frames.map((f) => f.dataset['id'] ?? '');

  const show = (i: number): void => {
    index = ((i % ids.length) + ids.length) % ids.length;
    els.frames.forEach((f, idx) => {
      f.classList.toggle('is-active', idx === index);
      f.setAttribute('aria-hidden', idx === index ? 'false' : 'true');
    });
    els.counter.textContent = `${String(index + 1).padStart(2, '0')} / ${String(ids.length).padStart(2, '0')}`;
  };

  const open = (id: string): void => {
    const idx = ids.indexOf(id);
    if (idx < 0) return;
    show(idx);
    if (!els.dialog.open) els.dialog.showModal();
    document.body.style.overflow = 'hidden';
  };

  const close = (): void => {
    els.dialog.close();
    document.body.style.overflow = '';
  };

  // Triggers — every element with [data-lightbox] opens the matching photo
  document.querySelectorAll<HTMLElement>('[data-lightbox]').forEach((el) => {
    el.addEventListener('click', () => {
      const id = el.dataset['photoId'];
      if (id) open(id);
    });
  });

  els.closeBtn.addEventListener('click', close);
  els.prevBtn.addEventListener('click', () => show(index - 1));
  els.nextBtn.addEventListener('click', () => show(index + 1));

  els.dialog.addEventListener('click', (e) => {
    // close when clicking the backdrop (not the image/buttons)
    if (e.target === els.dialog) close();
  });

  document.addEventListener('keydown', (e) => {
    if (!els.dialog.open) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });

  // Touch swipe
  let touchX = 0;
  els.dialog.addEventListener('touchstart', (e) => {
    touchX = e.touches[0]?.clientX ?? 0;
  }, { passive: true });
  els.dialog.addEventListener('touchend', (e) => {
    const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX;
    if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
  }, { passive: true });
};
