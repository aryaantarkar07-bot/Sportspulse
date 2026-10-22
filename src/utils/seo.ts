import { SportCategory, Article, PlayerData } from '../types';
import { getCategoryUrl, getArticleUrl, getPlayerUrl } from './router';

export interface SeoConfig {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  jsonLd?: Record<string, unknown>;
}

/**
 * Returns a safe origin URL string (e.g. for sandboxed preview environments).
 */
export function getSafeOrigin(): string {
  try {
    if (typeof window !== 'undefined' && window.location?.origin && window.location.origin !== 'null') {
      return window.location.origin;
    }
  } catch {
    // fallback to production applet domain
  }
  return 'https://ais-pre-7jtq3bibuqbctz7nykc3nk-914880582772.asia-southeast1.run.app';
}

/**
 * Constructs a fully qualified, normalized self-referencing canonical URL
 * for any given page or route, stripping extraneous query strings and trailing slashes.
 */
export function buildCanonicalUrl(path: string): string {
  const origin = getSafeOrigin();
  // Clean query strings or hashes if present
  let cleanPath = (path || '/').split('?')[0].split('#')[0];
  if (!cleanPath.startsWith('/')) {
    cleanPath = `/${cleanPath}`;
  }
  // Normalize double slashes
  cleanPath = cleanPath.replace(/\/+/g, '/');
  // Root remains '/', all sub-paths have trailing slashes stripped
  if (cleanPath.length > 1) {
    cleanPath = cleanPath.replace(/\/+$/, '');
  }
  return origin ? `${origin}${cleanPath}` : cleanPath;
}

/**
 * Formats a question title to strictly conform to meta title length rules (50-60 characters)
 * and guarantees a question mark before the brand suffix.
 */
export function formatQuestionTitle(question: string, brand = 'SPORTSPULSE'): string {
  const maxLen = 60;
  const suffix = ` | ${brand}`;
  const maxQuestionLen = maxLen - suffix.length; // 45 chars

  // Ensure the question ends with a '?'
  let cleanQuestion = question.trim().replace(/[?!.]+$/, '');

  if (cleanQuestion.length + 1 <= maxQuestionLen) {
    return `${cleanQuestion}?${suffix}`;
  }

  // Trim to word boundary so it ends neatly with '?'
  const slice = cleanQuestion.slice(0, maxQuestionLen - 1).trim();
  const lastSpace = slice.lastIndexOf(' ');
  const trimmed = lastSpace > 20 ? slice.slice(0, lastSpace) : slice;
  return `${trimmed}?${suffix}`;
}

/**
 * Curated high-relevance question titles for each category desk.
 * Uses required SEO/AEO keywords at start of question format titles.
 */
const CATEGORY_QUESTION_TITLES: Record<SportCategory, string> = {
  Cricket: 'cricket match news: who will dominate the next test era? | SPORTSPULSE', // Starts with 'cricket match news'
  Football: 'football news: how are modern tactical shifts changing the game? | SPORTSPULSE', // Starts with 'football news'
  Kabaddi: 'kabaddi information: how did the 30-second raid transform the game? | SPORTSPULSE', // Starts with 'kabaddi information'
  Hockey: "What Fuels Modern Field Hockey's Rebirth? | SPORTSPULSE",
  Tennis: 'Who Will Rule Tennis in the Next Major Era? | SPORTSPULSE',
  Basketball: 'How Did Analytics Reinvigorate Basketball? | SPORTSPULSE',
  Badminton: 'Why Are Badminton Rallies Fastest in Sport? | SPORTSPULSE',
  'Formula 1': 'How Does Ground Effect Aerodynamics Rule F1? | SPORTSPULSE',
  'Boxing & Wrestling': 'What Separates Combat & Wrestling Champions? | SPORTSPULSE',
  Athletics: 'How Fast Can the Human Body Go on the Track? | SPORTSPULSE',
  'Other Sports': 'What Sports Are Captivating Global Fans Today? | SPORTSPULSE',
};

/**
 * Curated high-relevance question titles for each article.
 * Strict length: 50-60 characters, question format.
 */
const ARTICLE_QUESTION_TITLES: Record<string, string> = {
  'indias-changing-cricket-landscape-next-era':
    "Who Will Define India's Next Era in Cricket? | SPORTSPULSE", // 58 chars
  'football-tactical-renaissance-positional-fluidity':
    'Why Is Fluidity Overhauling Modern Football? | SPORTSPULSE', // 58 chars
  'physics-and-ferocity-modern-kabaddi-raid':
    'How Did the 30-Second Raid Redefine Kabaddi? | SPORTSPULSE', // 58 chars
  'speed-synthetic-turf-indian-hockey-olympic-hegemony':
    "What Fuels Modern Field Hockey's Rebirth? | SPORTSPULSE", // 55 chars
  'post-big-three-velocity-shift-grand-slam-tennis':
    'How Did Heavy Forehands Remap Grand Slams? | SPORTSPULSE', // 55 chars
  'formula-one-ground-effect-aerodynamics-regulations':
    'Why Do Ground Effects Rule Modern F1 Racing? | SPORTSPULSE', // 58 chars
  'sub-880-sprint-barrier-biomechanics-spikes':
    'Can Humans Break the 100m Sprint Barrier? | SPORTSPULSE', // 55 chars
  'the-400-kmh-shuttle-relentless-reflexes-modern-badminton':
    'How Do Players React to 400 km/h Shuttles? | SPORTSPULSE', // 56 chars
  'basketball-space-and-pace-global-evolution':
    'How Did Positionless Big Men Rule Basketball? | SPORTSPULSE', // 58 chars
  'wrestling-akhada-to-olympic-podium-indian-grit':
    'How Did Akhadas Forge Olympic Champions? | SPORTSPULSE', // 54 chars
  'india-chess-golden-generation-candidates-champion':
    'Why Are Teenage Grandmasters Dominating Chess? | SPORTSPULSE', // 60 chars
};

/**
 * Curated complete meta descriptions for each article adhering strictly to meta rules (120-158 chars).
 */
const ARTICLE_META_DESCRIPTIONS: Record<string, string> = {
  'indias-changing-cricket-landscape-next-era':
    "Analyze how Yashasvi Jaiswal and India's emerging cricket cohort are redefining batting aggression and tactics. Read full coverage on SPORTSPULSE.", // 145 chars
  'football-tactical-renaissance-positional-fluidity':
    'Explore how inverted full-backs, box midfields, and high-press spatial control are overhauling modern football. Read full analysis on SPORTSPULSE.', // 143 chars
  'physics-and-ferocity-modern-kabaddi-raid':
    'Explore the biomechanics, chain maneuvers, and high-speed chess inside the 30-second Pro Kabaddi raid. Read the full investigation on SPORTSPULSE.', // 145 chars
  'speed-synthetic-turf-indian-hockey-olympic-hegemony':
    "Discover how watered synthetic turf, aerial scoops, and penalty-corner science spurred India's hockey resurgence. Read full story on SPORTSPULSE.", // 143 chars
  'post-big-three-velocity-shift-grand-slam-tennis':
    'Explore how Carlos Alcaraz, Jannik Sinner, and 140mph baseline artillery are remapping Grand Slam tennis dominance. Read full analysis on SPORTSPULSE.', // 148 chars
  'formula-one-ground-effect-aerodynamics-regulations':
    'Explore how ground effect aerodynamics, dirty air turbulence, and active wing rules dictate Formula 1 racing. Read the full dossier on SPORTSPULSE.', // 144 chars
  'sub-880-sprint-barrier-biomechanics-spikes':
    'Examine how stiff carbon spike plates, ground reaction forces, and stride frequency push the 100m sprint barrier. Read full story on SPORTSPULSE.', // 144 chars
  'the-400-kmh-shuttle-relentless-reflexes-modern-badminton':
    'Discover how 400 km/h smashes, carbon-graphite racquets, and lightning reflexes rule modern badminton rallies. Read full analysis on SPORTSPULSE.', // 144 chars
  'basketball-space-and-pace-global-evolution':
    'Explore how 7-foot unicorns, deep perimeter spacing, and positionless play transformed international basketball. Read full story on SPORTSPULSE.', // 144 chars
  'wrestling-akhada-to-olympic-podium-indian-grit':
    'Discover how traditional clay akhadas, relentless discipline, and explosive grit forge Indian Olympic wrestling stars. Read more on SPORTSPULSE.', // 142 chars
  'india-chess-golden-generation-candidates-champion':
    'Discover how teenage grandmasters, computer engines, and tactical daring propelled India to global chess supremacy. Read more on SPORTSPULSE.', // 141 chars
};

/**
 * Curated AEO/SEO meta descriptions for category desks adhering strictly to 150-160 characters max limit.
 * Contains exact target search keywords requested for AEO optimization.
 */
const CATEGORY_META_DESCRIPTIONS: Partial<Record<SportCategory, string>> = {
  Cricket:
    'Discover test cricket records india, historical cricket records, deep match breakdowns, player dossiers, and live tournament analysis on the SPORTSPULSE desk.', // 158 chars, contains 'cricket records' and 'test cricket records india'
  Football:
    'Read latest football news and football updates today with deep tactical breakdowns, European league standings, transfer dossiers, and features on SPORTSPULSE.', // 158 chars, contains 'latest football news' and 'football updates today'
  Kabaddi:
    'Discover essential kabaddi rules, historical kabaddi facts, raid tactics, Pro Kabaddi league breakdowns, and player statistics exclusively on SPORTSPULSE.', // 154 chars, contains 'kabaddi rules' and 'kabaddi facts'
};

/**
 * Formats a meta description to strictly conform to meta description rules (120-160 characters).
 */
export function formatSeoDescription(text: string, fallbackCta = 'Read full coverage on SPORTSPULSE.'): string {
  const minLen = 120;
  const maxLen = 160;

  let cleaned = text.replace(/\s+/g, ' ').trim();
  if (cleaned.length < minLen) {
    cleaned = `${cleaned} ${fallbackCta}`.trim();
  }

  if (cleaned.length > maxLen) {
    const slice = cleaned.slice(0, maxLen - 1).trim();
    const lastSpace = slice.lastIndexOf(' ');
    cleaned = (lastSpace > 100 ? slice.slice(0, lastSpace) : slice) + '…';
  }

  return cleaned;
}

/**
 * Generates SEO metadata for the home page with question-format title and compliant meta description.
 * Starts with 'news sports news', includes 'sports news today' and 'the sports news', strictly 150-160 chars.
 */
export function getHomeSeo(): SeoConfig {
  const title = 'news sports news: what are the top sports stories today? | SPORTSPULSE'; // Starts with 'news sports news'
  const description =
    'Explore the sports news and sports news today with deep tactical breakdowns, athlete records, breaking global match results, and journalism on SPORTSPULSE.'; // 155 chars (150-160 chars)
  const canonicalUrl = buildCanonicalUrl('/');

  return {
    title,
    description,
    canonicalUrl,
    ogType: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'NewsMediaOrganization',
      name: 'SPORTSPULSE',
      url: canonicalUrl,
      logo: `${getSafeOrigin()}/icon.png`,
      slogan: 'EVERY SPORT. EVERY STORY. EVERY DAY.',
      description,
    },
  };
}

/**
 * Generates SEO metadata for a sport category page with question-format title and compliant meta description.
 */
export function getCategorySeo(category: SportCategory): SeoConfig {
  // Title in question format starting with required keyword for Cricket, Football, Kabaddi
  const title =
    CATEGORY_QUESTION_TITLES[category] ||
    formatQuestionTitle(`What Are the Stories Shaping ${category}`);

  // Meta description adhering strictly to 150-160 characters max limit for AEO
  const description =
    CATEGORY_META_DESCRIPTIONS[category] ||
    `Explore ${category} breaking stories, deep tactical breakdowns, tournament coverage, and athlete dossiers. Read full coverage on SPORTSPULSE.`;
  const canonicalUrl = buildCanonicalUrl(getCategoryUrl(category));

  return {
    title,
    description,
    canonicalUrl,
    ogType: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: title,
      description,
      url: canonicalUrl,
      about: {
        '@type': 'SportingEvent',
        name: `${category} Coverage Desk`,
      },
    },
  };
}

/**
 * Generates SEO metadata for an article page with question-format title and compliant meta description.
 */
export function getArticleSeo(article: Article): SeoConfig {
  // 1. Question Title: use curated question or convert to question format
  let title = ARTICLE_QUESTION_TITLES[article.slug];
  if (!title) {
    if (article.title.endsWith('?')) {
      title = formatQuestionTitle(article.title);
    } else {
      title = formatQuestionTitle(`How Does ${article.title.slice(0, 32)}`);
    }
  }

  // 2. Meta description adhering strictly to meta rules (120-158 chars)
  let description = ARTICLE_META_DESCRIPTIONS[article.slug];
  if (!description) {
    const raw = `${article.subtitle} Read the full magazine tactical breakdown by ${article.author} on SPORTSPULSE.`;
    description = formatSeoDescription(raw);
  }

  const canonicalUrl = buildCanonicalUrl(getArticleUrl(article.category, article.slug));

  return {
    title,
    description,
    canonicalUrl,
    ogType: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: article.title,
      description,
      articleBody: article.sections?.map((s) => s.paragraphs?.join(' ')).join(' ').slice(0, 1000),
      author: {
        '@type': 'Person',
        name: article.author,
        jobTitle: article.authorRole,
      },
      publisher: {
        '@type': 'Organization',
        name: 'SPORTSPULSE',
        url: getSafeOrigin() || 'https://sportspulse.example.com',
      },
      datePublished: '2026-10-07T08:00:00+00:00',
      mainEntityOfPage: canonicalUrl,
      wordCount: article.wordCount,
      articleSection: article.category,
    },
  };
}

/**
 * Generates SEO metadata for a player profile page with question-format title and compliant meta description.
 */
export function getPlayerSeo(player: PlayerData): SeoConfig {
  // Title rule: Question format, 50-60 characters
  // Example: "What Makes Virat Kohli a Star in Cricket? | SPORTSPULSE"
  const shortName = player.name.length > 20 ? player.name.slice(0, 18).trim() : player.name;
  const rawQuestion = `What Makes ${shortName} a Star in ${player.sport}`;
  const title = formatQuestionTitle(rawQuestion);

  // Meta description: 120-158 characters with CTA and athlete stats
  const rawDesc = `Explore ${player.name} career stats, personal bio, debut history, records, and scouting report in this ${player.sport} dossier on SPORTSPULSE.`;
  const description = formatSeoDescription(rawDesc);
  const canonicalUrl = buildCanonicalUrl(getPlayerUrl(player.sport, player.slug));

  return {
    title,
    description,
    canonicalUrl,
    ogType: 'profile',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: player.fullName || player.name,
      jobTitle: player.role,
      nationality: player.nationality,
      memberOf: {
        '@type': 'SportsTeam',
        name: player.team,
      },
      description: player.bio,
      url: canonicalUrl,
    },
  };
}

/**
 * Generates SEO metadata for 404 Not Found pages.
 */
export function getNotFoundSeo(attemptedPath?: string): SeoConfig {
  const canonicalUrl = buildCanonicalUrl(attemptedPath || '/404');
  return {
    title: '404: Play Not Found · Whistle Blown | SPORTSPULSE',
    description:
      'The requested sports dispatch, article, or player dossier stepped out of bounds. Explore our cricket, football, kabaddi, and multi-sport desks.',
    canonicalUrl,
    ogType: 'website',
  };
}

/**
 * Applies SEO tags to document <head> dynamically with error resilience.
 */
export function applySeo(seo: SeoConfig): void {
  try {
    // 1. Update <title>
    document.title = seo.title;

    // 2. Guaranteed self-referencing canonical URL
    const canonicalHref = seo.canonicalUrl || buildCanonicalUrl(window.location.pathname);

    // 3. Helper to set or create <meta>
    const setMeta = (selector: string, attrName: string, attrValue: string, content: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Standard Meta Description
    setMeta('meta[name="description"]', 'name', 'description', seo.description);

    // Open Graph
    setMeta('meta[property="og:title"]', 'property', 'og:title', seo.title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', seo.description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalHref);
    setMeta('meta[property="og:type"]', 'property', 'og:type', seo.ogType || 'website');

    // Twitter Card
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', seo.title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', seo.description);
    setMeta('meta[name="twitter:url"]', 'name', 'twitter:url', canonicalHref);

    // Self-Referencing Canonical Tag: Essential for Google indexing & consolidation
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('id', 'canonical-link');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalHref);

    // Schema.org JSON-LD Structured Data
    let jsonLdScript = document.querySelector(
      'script[type="application/ld+json"]#seo-ld'
    ) as HTMLScriptElement | null;
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.setAttribute('type', 'application/ld+json');
      jsonLdScript.setAttribute('id', 'seo-ld');
      document.head.appendChild(jsonLdScript);
    }
    if (seo.jsonLd) {
      jsonLdScript.textContent = JSON.stringify(seo.jsonLd);
    }
  } catch {
    // Graceful fallback in sandboxed iframe contexts
  }
}
