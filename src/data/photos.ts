import type { ImageMetadata } from 'astro';

export type Mood = 'quiet' | 'burning' | 'dark' | 'wander' | 'sacred' | 'conceptual' | 'composed';

export interface Photo {
  id: string;
  src: ImageMetadata;
  title: string;
  caption: string;
  moods: Mood[];
  date: string; // YYYY-MM
  featured?: boolean;
  aspect: 'portrait' | 'landscape' | 'square';
}

// Eager-import all photos so Astro can optimize them
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/photos/*.jpeg',
  { eager: true }
);

const img = (filename: string): ImageMetadata => {
  const key = `../assets/photos/${filename}`;
  const mod = modules[key];
  if (!mod) throw new Error(`Photo not found: ${filename}`);
  return mod.default;
};

export const photos: Photo[] = [
  {
    id: '01',
    src: img('01-cyclamen.jpeg'),
    title: 'Cyclamen, undone',
    caption: 'A blossom letting go of the dark.',
    moods: ['quiet'],
    date: '2024-11',
    featured: true,
    aspect: 'portrait',
  },
  {
    id: '02',
    src: img('02-dragonfly.jpeg'),
    title: 'Morning watcher',
    caption: 'First light, glass wings.',
    moods: ['quiet', 'burning'],
    date: '2024-08',
    featured: true,
    aspect: 'portrait',
  },
  {
    id: '03',
    src: img('03-ant-leaf.jpeg'),
    title: 'Backlit, briefly',
    caption: 'A small commute through golden hour.',
    moods: ['quiet', 'burning'],
    date: '2024-09',
    featured: true,
    aspect: 'portrait',
  },
  {
    id: '04',
    src: img('04-ant-edge.jpeg'),
    title: 'On the cliff',
    caption: 'Scale is a story you tell yourself.',
    moods: ['quiet'],
    date: '2024-09',
    aspect: 'portrait',
  },
  {
    id: '05',
    src: img('05-ant-portrait.jpeg'),
    title: 'Antennae up',
    caption: 'Eye to eye with the ground.',
    moods: ['quiet'],
    date: '2024-09',
    aspect: 'portrait',
  },
  {
    id: '06',
    src: img('06-droplet-line.jpeg'),
    title: 'One drop',
    caption: 'A feather holds the sun.',
    moods: ['quiet'],
    date: '2024-07',
    aspect: 'portrait',
  },
  {
    id: '07',
    src: img('07-droplets-cluster.jpeg'),
    title: 'Where rain rests',
    caption: 'Tiny moons, briefly held.',
    moods: ['quiet'],
    date: '2024-07',
    featured: true,
    aspect: 'portrait',
  },
  {
    id: '08',
    src: img('08-droplets-feather.jpeg'),
    title: 'Bokeh weather',
    caption: 'A whole sky in five drops.',
    moods: ['quiet'],
    date: '2024-07',
    aspect: 'portrait',
  },
  {
    id: '09',
    src: img('09-rose.jpeg'),
    title: 'A rose that knew the dark',
    caption: 'Old petals, older light.',
    moods: ['dark'],
    date: '2025-02',
    featured: true,
    aspect: 'portrait',
  },
  {
    id: '10',
    src: img('10-escape.jpeg'),
    title: 'Escape',
    caption: 'Ready to fly.',
    moods: ['conceptual', 'wander'],
    date: '2025-01',
    featured: true,
    aspect: 'portrait',
  },
  {
    id: '11',
    src: img('11-pattern.jpeg'),
    title: 'Pattern',
    caption: 'Order, by accident.',
    moods: ['conceptual'],
    date: '2025-01',
    aspect: 'portrait',
  },
  {
    id: '12',
    src: img('12-hibiscus.jpeg'),
    title: 'Looking up',
    caption: 'Hibiscus against an indifferent sky.',
    moods: ['quiet', 'wander'],
    date: '2024-10',
    aspect: 'portrait',
  },
  {
    id: '13',
    src: img('13-spotify-mountain.jpeg'),
    title: 'On repeat',
    caption: 'Western Ghats, headphones on.',
    moods: ['wander'],
    date: '2024-06',
    featured: true,
    aspect: 'portrait',
  },
  {
    id: '14',
    src: img('14-backlit-leaves.jpeg'),
    title: 'Last sun',
    caption: 'Leaves as stained glass.',
    moods: ['burning', 'quiet'],
    date: '2024-09',
    aspect: 'portrait',
  },
  {
    id: '15',
    src: img('15-sunset-daisies.jpeg'),
    title: 'Daisies, on fire',
    caption: 'A whole hour in one frame.',
    moods: ['burning'],
    date: '2024-10',
    featured: true,
    aspect: 'portrait',
  },
  {
    id: '16',
    src: img('16-feather-mono.jpeg'),
    title: 'Suspended',
    caption: 'Almost nothing, almost everything.',
    moods: ['quiet', 'dark'],
    date: '2024-12',
    aspect: 'portrait',
  },
  {
    id: '17',
    src: img('17-web-droplets.jpeg'),
    title: 'After rain',
    caption: 'A web wears its weight in pearls.',
    moods: ['quiet'],
    date: '2024-08',
    aspect: 'portrait',
  },
  {
    id: '18',
    src: img('18-mountain-back.jpeg'),
    title: 'Standing watch',
    caption: 'Karnataka, monsoon edge.',
    moods: ['wander'],
    date: '2024-06',
    aspect: 'portrait',
  },
  {
    id: '19',
    src: img('19-fire.jpeg'),
    title: 'Breath',
    caption: 'Crowd, dark, sudden sun.',
    moods: ['burning'],
    date: '2025-03',
    featured: true,
    aspect: 'portrait',
  },
  {
    id: '20',
    src: img('20-rainy-window.jpeg'),
    title: 'From the inside',
    caption: 'A city through glass and weather.',
    moods: ['dark', 'quiet'],
    date: '2024-08',
    aspect: 'portrait',
  },
  {
    id: '21',
    src: img('21-orange-dark.jpeg'),
    title: 'Embers',
    caption: 'Marigolds before the night took them.',
    moods: ['dark'],
    date: '2024-11',
    aspect: 'portrait',
  },
  {
    id: '22',
    src: img('22-oxalis.jpeg'),
    title: 'Oxalis',
    caption: 'A small white anyway.',
    moods: ['quiet'],
    date: '2024-09',
    aspect: 'portrait',
  },
  {
    id: '23',
    src: img('23-diyas.jpeg'),
    title: 'A thousand small fires',
    caption: 'Diwali, before lighting.',
    moods: ['sacred', 'burning'],
    date: '2024-11',
    featured: true,
    aspect: 'portrait',
  },
  {
    id: '24',
    src: img('24-droplet-leaf-mono.jpeg'),
    title: 'Held',
    caption: 'A drop, a leaf, the world inside.',
    moods: ['quiet', 'dark'],
    date: '2025-04',
    featured: true,
    aspect: 'portrait',
  },
  {
    id: '25',
    src: img('25-banipuram-collage.jpeg'),
    title: 'Banipuram',
    caption: 'Three frames of a long walk.',
    moods: ['composed', 'wander'],
    date: '2024-07',
    featured: true,
    aspect: 'portrait',
  },
];

export const moods: { id: Mood; label: string; description: string }[] = [
  { id: 'quiet', label: 'Quiet', description: 'small subjects, held breath' },
  { id: 'burning', label: 'Burning', description: 'last light, golden edges' },
  { id: 'dark', label: 'Dark', description: 'low keys, deep shadow' },
  { id: 'wander', label: 'Wander', description: 'places, distances' },
  { id: 'sacred', label: 'Sacred', description: 'rituals, lit objects' },
  { id: 'conceptual', label: 'Conceptual', description: 'titled frames' },
  { id: 'composed', label: 'Composed', description: 'multi-frame layouts' },
];

export const featured = photos.filter((p) => p.featured);
