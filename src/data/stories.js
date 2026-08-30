import { appsStories } from './app-stories';

// Story metadata extracted from frontmatter
export const storyMetadata = [
  {
    slug: 'why-i-built-dailyask',
    title: 'Why I Built DailyAsk',
    app: 'DailyAsk',
    hook: 'Bringing daily Catholic reflection in an intentional, distraction-free way.',
    date: '2024-03-15',
    ogImage: '/assets/dailyask.png',
  },
  {
    slug: 'why-i-built-medtrack',
    title: 'Why I Built MedTrack',
    app: 'MedTrack',
    hook: 'An offline, privacy first, ad-free family health companion.',
    date: '2026-08-12',
    ogImage: '/assets/medtrack.png',
  },
  {
    slug: 'why-i-built-smsapi',
    title: 'Why I Built SMSAPI',
    app: 'SMSAPI',
    hook: 'Turn your Android phone into a powerful SMS Gateway.',
    date: '2026-08-12',
    ogImage: '/assets/smsapi-logo.png',
  },
  {
    slug: 'why-i-built-runnerspod',
    title: 'Why I Built RunnersPod',
    app: 'RunnersPod',
    date: '2026-08-10',
    hook: 'Connecting every runner, every race.',
    ogImage: '/assets/runnerspod-logo.png',
  },
  {
    slug: 'why-i-built-cenacle',
    title: 'Why I Built Cenacle',
    app: 'Cenacle',
    date: '2026-08-12',
    hook: 'A sacred space for anyone to gather in prayer.',
    ogImage: '/assets/cenacle-logo.webp',
  },
  {
    slug: 'why-i-built-gabaystrand',
    title: 'Why I Built GabayStrand',
    app: 'GabayStrand',
    date: '2026-08-12',
    hook: 'Take our multi-dimensional assessment to find the perfect track for your skills, interests, and future career goals.',
    ogImage: '/assets/gabaystrand-logo.webp',
  },
  {
    slug: 'why-i-built-wanminit',
    title: 'Why I Built Wanminit with Fr. Elric Web',
    app: 'Wanminit with Fr. Elric Web',
    date: '2026-08-12',
    hook: 'A sacred archive of daily one-minute Gospel reflections.',
    ogImage: '/assets/wanminit-logo.webp',
  },
  {
    slug: 'why-i-built-marriage',
    title: 'Why I Built Marriage is Beautiful web',
    app: 'Marriage is Beautiful web',
    date: '2026-08-12',
    hook: 'Share your reasons why the world celebrates marriage.',
    ogImage: '/assets/marriage-is-beautiful-logo.svg',
  },
];

// Get story metadata with project icon & store/project URL
export function getStory(slug) {
  const story = storyMetadata.find(s => s.slug === slug);
  if (!story) return null;

  const project = appsStories.find(a => a.name === story.app || a.name === story.project);
  return {
    ...story,
    icon: project?.icon || story.ogImage,
    storeUrl: project?.storeUrl,
  };
}

// Get all stories sorted by date (newest first)
export function getAllStories() {
  return storyMetadata
    .map(story => {
      const project = appsStories.find(a => a.name === story.app || a.name === story.project);
      return {
        ...story,
        icon: project?.icon || story.ogImage,
        storeUrl: project?.storeUrl,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Get latest N stories
export function getLatestStories(count = 2) {
  return getAllStories().slice(0, count);
}
