import { SportCategory } from '../types';

export type Route =
  | { type: 'home' }
  | { type: 'category'; category: SportCategory }
  | { type: 'article'; category?: SportCategory; slug: string }
  | { type: 'player'; category?: SportCategory; slug: string };

const SPORT_SLUG_MAP: Record<SportCategory, string> = {
  Cricket: 'cricket',
  Football: 'football',
  Hockey: 'hockey',
  Kabaddi: 'kabaddi',
  Tennis: 'tennis',
  Basketball: 'basketball',
  Badminton: 'badminton',
  'Formula 1': 'formula-1',
  'Boxing & Wrestling': 'boxing-wrestling',
  Athletics: 'athletics',
  'Other Sports': 'other-sports',
};

const SLUG_TO_SPORT_MAP: Record<string, SportCategory> = Object.entries(
  SPORT_SLUG_MAP
).reduce((acc, [sport, slug]) => {
  acc[slug] = sport as SportCategory;
  return acc;
}, {} as Record<string, SportCategory>);

export function getSportSlug(sport: SportCategory): string {
  return SPORT_SLUG_MAP[sport] || 'other-sports';
}

export function getSportFromSlug(slug: string): SportCategory | null {
  const normalized = slug.toLowerCase().trim();
  return SLUG_TO_SPORT_MAP[normalized] || null;
}

export function getHomeUrl(): string {
  return '/';
}

export function getCategoryUrl(category: SportCategory): string {
  return `/${getSportSlug(category)}`;
}

export function getArticleUrl(category: SportCategory, slug: string): string {
  return `/${getSportSlug(category)}/article/${slug}`;
}

export function getPlayerUrl(category: SportCategory, slug: string): string {
  return `/${getSportSlug(category)}/player/${slug}`;
}

export function parseCurrentRoute(): Route {
  // Support both clean pathname and hash-based routing (e.g. for static previews)
  let path = '';
  if (window.location.hash && window.location.hash.startsWith('#/')) {
    path = window.location.hash.slice(2);
  } else if (window.location.pathname && window.location.pathname !== '/') {
    path = window.location.pathname.replace(/^\/+/, '');
  }

  // Remove query strings if any
  path = path.split('?')[0].replace(/\/+$/, '');

  if (!path) {
    return { type: 'home' };
  }

  const segments = path.split('/').filter(Boolean);

  // Pattern 1: /player/:playerSlug or /:sport/player/:playerSlug
  if (segments.length === 2 && segments[0] === 'player') {
    return { type: 'player', slug: segments[1] };
  }
  if (segments.length === 3 && segments[1] === 'player') {
    const category = getSportFromSlug(segments[0]) || undefined;
    return { type: 'player', category, slug: segments[2] };
  }

  // Pattern 2: /article/:articleSlug or /:sport/article/:articleSlug
  if (segments.length === 2 && segments[0] === 'article') {
    return { type: 'article', slug: segments[1] };
  }
  if (segments.length === 3 && segments[1] === 'article') {
    const category = getSportFromSlug(segments[0]) || undefined;
    return { type: 'article', category, slug: segments[2] };
  }

  // Pattern 3: /:sport
  if (segments.length === 1) {
    const category = getSportFromSlug(segments[0]);
    if (category) {
      return { type: 'category', category };
    }
  }

  return { type: 'home' };
}

export function navigateTo(url: string) {
  if (window.location.pathname === url && !window.location.hash) {
    return;
  }
  window.history.pushState({}, '', url);
  window.dispatchEvent(new Event('popstate'));
}
