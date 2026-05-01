import { initLightbox } from './lightbox.ts';
import { initMoodFilter } from './filter.ts';
import { initReveal } from './reveal.ts';
import { initCursor } from './cursor.ts';
import { initTilt } from './tilt.ts';

const start = (): void => {
  initCursor();
  initTilt();
  initLightbox();
  initMoodFilter();
  initReveal();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start);
} else {
  start();
}
