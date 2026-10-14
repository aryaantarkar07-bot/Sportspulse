import { SportCategory, Article, PlayerData } from '../types';
import { getSportSlug, getCategoryUrl, getArticleUrl, getPlayerUrl } from './router';

export interface SeoConfig {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  jsonLd?: Record<string, unknown>;
}

/**
 * Truncates or formats a title to strictly conform to title length rules (30-60 chars).
 */
export function formatSeoTitle(rawTitle: string, brand = 'SPORTSPULSE'): string {
  const maxLen = 60;
  const suffix = ` | ${brand}`;
  const availableLen = maxLen - suffix.length; // 45 chars

  if (rawTitle.length <= availableLen) {
    return `${rawTitle}${suffix}`;
  }

  // Trim to word boundary
  const trimmed = rawTitle.slice(0, availableLen - 1).trim();
  const lastSpace = trimmed.lastIndexOf(' ');
  const cleanTrim = lastSpace > 20 ? trimmed.slice(0, lastSpace) : trimmed;
  return `${cleanTrim}…${suffix}`;
}

/**
 * Formats a meta description to strictly conform to meta description rules (120-160 characters).
 */
export function formatSeoDescription(text: string, fallbackCta = 'Read full coverage on SPORTSPULSE.'): string {
  const minLen = 120;
  const maxLen = 158;

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
 * Generates SEO metadata for the home page
 */
export function getHomeSeo(): SeoConfig {
  const title = 'SPORTSPULSE — Sports Magazine & Athlete Dossiers'; // 50 chars
  const description =
    'SPORTSPULSE delivers long-form investigative sports journalism, deep match tactical analysis, and Cricbuzz-style athlete career dossiers across global sports.'; // 160 chars
  const canonicalUrl = `${window.location.origin}/`;

  return {
    title,
    description,
    canonicalUrl,
    ogType: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'NewsMediaOrganization',
      name: 'SPORTSPULSE',
      url: window.location.origin,
      logo: `${window.location.origin}/icon.png`,
      slogan: 'EVERY SPORT. EVERY STORY. EVERY DAY.',
      description,
    },
  };
}

/**
 * Generates SEO metadata for a sport category page
 */
export function getCategorySeo(category: SportCategory): SeoConfig {
  const title = `${category} News, Analysis & Athlete Dossiers | SPORTSPULSE`; // 48-58 chars
  const description = formatSeoDescription(
    `Explore ${category} breaking stories, deep tactical breakdowns, tournament coverage, and Cricbuzz-style athlete dossiers on SPORTSPULSE.`
  );
  const canonicalUrl = `${window.location.origin}${getCategoryUrl(category)}`;

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
 * Generates SEO metadata for an article page
 */
export function getArticleSeo(article: Article): SeoConfig {
  const title = formatSeoTitle(article.title);
  const rawDesc = `${article.subtitle} In-depth tactical breakdown by ${article.author}. Read full coverage on SPORTSPULSE.`;
  const description = formatSeoDescription(rawDesc);
  const canonicalUrl = `${window.location.origin}${getArticleUrl(article.category, article.slug)}`;

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
      articleBody: article.sections?.map(s => s.paragraphs?.join(' ')).join(' ').slice(0, 1000),
      author: {
        '@type': 'Person',
        name: article.author,
        jobTitle: article.authorRole,
      },
      publisher: {
        '@type': 'Organization',
        name: 'SPORTSPULSE',
        url: window.location.origin,
      },
      datePublished: '2026-10-07T08:00:00+00:00',
      mainEntityOfPage: canonicalUrl,
      wordCount: article.wordCount,
      articleSection: article.category,
    },
  };
}

/**
 * Generates SEO metadata for a player profile page
 */
export function getPlayerSeo(player: PlayerData): SeoConfig {
  // Title rule: 30-60 characters
  const rawTitle = `${player.name} Stats, Career Bio & Records`;
  const title = formatSeoTitle(rawTitle);

  // Meta description: 120-160 characters with CTA
  const rawDesc = `Explore ${player.name} career stats, personal bio, debut history, records, and scouting report in this ${player.sport} dossier on SPORTSPULSE.`;
  const description = formatSeoDescription(rawDesc);
  const canonicalUrl = `${window.location.origin}${getPlayerUrl(player.sport, player.slug)}`;

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
 * Applies SEO tags to document <head> dynamically
 */
export function applySeo(seo: SeoConfig): void {
  // 1. Update <title>
  document.title = seo.title;

  // 2. Helper to set or create <meta>
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
  setMeta('meta[property="og:url"]', 'property', 'og:url', seo.canonicalUrl);
  setMeta('meta[property="og:type"]', 'property', 'og:type', seo.ogType || 'website');

  // Twitter Card
  setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', seo.title);
  setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', seo.description);

  // Canonical Link
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', seo.canonicalUrl);

  // Schema.org JSON-LD Structured Data
  let jsonLdScript = document.querySelector('script[type="application/ld+json"]#seo-ld') as HTMLScriptElement | null;
  if (!jsonLdScript) {
    jsonLdScript = document.createElement('script');
    jsonLdScript.setAttribute('type', 'application/ld+json');
    jsonLdScript.setAttribute('id', 'seo-ld');
    document.head.appendChild(jsonLdScript);
  }
  if (seo.jsonLd) {
    jsonLdScript.textContent = JSON.stringify(seo.jsonLd);
  }
}
