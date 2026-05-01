// Mood filter for the archive. Toggle [data-mood] cards by tag.

const moodDescriptions: Record<string, string> = {
  all: '',
  quiet: 'small subjects, held breath',
  burning: 'last light, golden edges',
  dark: 'low keys, deep shadow',
  wander: 'places, distances',
  sacred: 'rituals, lit objects',
  conceptual: 'titled frames',
};

export const initMoodFilter = (): void => {
  const buttons = document.querySelectorAll<HTMLButtonElement>('.mood-btn');
  const cards = document.querySelectorAll<HTMLElement>('.arc');
  const desc = document.getElementById('mood-desc');

  if (!buttons.length || !cards.length) return;

  const setMood = (mood: string): void => {
    buttons.forEach((b) => {
      const isActive = b.dataset['mood'] === mood;
      b.classList.toggle('is-active', isActive);
      b.setAttribute('aria-selected', String(isActive));
    });

    cards.forEach((card) => {
      const moods = (card.dataset['moods'] ?? '').split(',');
      const show = mood === 'all' || moods.includes(mood);
      card.classList.toggle('is-hidden', !show);
    });

    if (desc) {
      const text = moodDescriptions[mood] ?? '';
      desc.textContent = text;
      desc.classList.toggle('is-show', !!text);
    }
  };

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const mood = btn.dataset['mood'];
      if (mood) setMood(mood);
    });
  });
};
