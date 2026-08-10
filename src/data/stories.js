import { apps } from './apps';

// Story metadata extracted from frontmatter
export const storyMetadata = [
  {
    slug: 'why-i-built-dailyask',
    title: 'Why I Built DailyAsk',
    app: 'DailyAsk',
    hook: 'Bringing daily reflection to Android in an intentional, distraction-free way.',
    date: '2024-03-15',
    ogImage: '/assets/dailyask.png',
  },
  {
    slug: 'why-i-built-medtrack',
    title: 'Why I Built MedTrack',
    app: 'MedTrack',
    hook: 'Making medication management simple, free, and accessible to everyone.',
    date: '2024-05-22',
    ogImage: '/assets/medtrack.png',
  },
  {
    slug: 'why-i-built-smsapi',
    title: 'Why I Built SMSAPI',
    app: 'SMSAPI',
    hook: 'Empowering developers and students to build with SMS, using hardware they already own.',
    date: '2024-07-08',
    ogImage: '/assets/smsapi.png',
  },
  {
    slug: 'why-i-built-runnerspod',
    title: 'Why I Built RunnersPod',
    app: 'RunnersPod',
    hook: 'Turning running data into storytelling—for solo runners and running communities.',
    date: '2024-08-10',
    ogImage: '/assets/runnerspod.png',
  },
];

// Get story metadata with app icon
export function getStory(slug) {
  const story = storyMetadata.find(s => s.slug === slug);
  if (!story) return null;

  const app = apps.find(a => a.name === story.app);
  return {
    ...story,
    icon: app?.icon,
    storeUrl: app?.storeUrl,
  };
}

// Get all stories sorted by date (newest first)
export function getAllStories() {
  return storyMetadata
    .map(story => ({
      ...story,
      icon: apps.find(a => a.name === story.app)?.icon,
      storeUrl: apps.find(a => a.name === story.app)?.storeUrl,
    }))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Get latest N stories
export function getLatestStories(count = 2) {
  return getAllStories().slice(0, count);
}
