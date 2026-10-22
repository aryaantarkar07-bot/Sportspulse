import React from 'react';
import {
  Home,
  Search,
  ArrowRight,
  Compass,
  Flame,
  Flag,
  Activity,
  ChevronRight,
  RotateCcw,
  BookOpen
} from 'lucide-react';
import { SportCategory, Article } from '../types';
import { SPORT_CATEGORIES, TRENDING_STORIES } from '../data/sportsData';
import { getHomeUrl, getCategoryUrl, getArticleUrl } from '../utils/router';

interface NotFoundPageProps {
  onNavigateHome: () => void;
  onSelectCategory: (cat: SportCategory) => void;
  onSelectArticle: (article: Article) => void;
  onOpenSearch: () => void;
  attemptedPath?: string;
}

interface DeskLinkConfig {
  sport: SportCategory;
  emoji: string;
  anchorText: string;
  tagline: string;
  keywords: string;
  highlightAthlete?: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
}

const DESK_LINKS: DeskLinkConfig[] = [
  {
    sport: 'Cricket',
    emoji: '🏏',
    anchorText: 'Cricket Match News & Records Hub',
    tagline: 'Test cricket records India, match analysis & Yashasvi Jaiswal lead',
    keywords: 'cricket match news, cricket records, test cricket records india',
    highlightAthlete: 'Yashasvi Jaiswal',
    accentBg: 'bg-emerald-50/70',
    accentBorder: 'hover:border-emerald-500',
    accentText: 'text-emerald-700',
  },
  {
    sport: 'Football',
    emoji: '⚽',
    anchorText: 'Football News & Positional Fluidity',
    tagline: 'Latest football news, football updates today & Lionel Messi maestro spotlight',
    keywords: 'football news, latest football news, football updates today',
    highlightAthlete: 'Lionel Messi',
    accentBg: 'bg-blue-50/70',
    accentBorder: 'hover:border-blue-500',
    accentText: 'text-blue-700',
  },
  {
    sport: 'Kabaddi',
    emoji: '🤼',
    anchorText: 'Kabaddi Information, Rules & Facts',
    tagline: 'Kabaddi rules, kabaddi facts & 30-second raid biomechanics by Pardeep Narwal',
    keywords: 'kabaddi information, kabaddi rules, kabaddi facts',
    highlightAthlete: 'Pardeep Narwal',
    accentBg: 'bg-amber-50/70',
    accentBorder: 'hover:border-amber-500',
    accentText: 'text-amber-800',
  },
  {
    sport: 'Hockey',
    emoji: '🏑',
    anchorText: 'Field Hockey Resurgence & Olympic Drag-Flick',
    tagline: 'Synthetic turf speed, penalty-corner science & Harmanpreet Singh Sarpanch dossier',
    keywords: 'field hockey news, drag-flick science, olympic hockey',
    highlightAthlete: 'Harmanpreet Singh',
    accentBg: 'bg-emerald-50/70',
    accentBorder: 'hover:border-emerald-500',
    accentText: 'text-emerald-700',
  },
  {
    sport: 'Tennis',
    emoji: '🎾',
    anchorText: 'Tennis Velocity & Grand Slam Tour',
    tagline: 'Post-Big Three baseline artillery, 140mph returns & Carlos Alcaraz forehand lasers',
    keywords: 'tennis grand slams, carlos alcaraz, atp tour updates',
    highlightAthlete: 'Carlos Alcaraz',
    accentBg: 'bg-sky-50/70',
    accentBorder: 'hover:border-sky-500',
    accentText: 'text-sky-700',
  },
  {
    sport: 'Formula 1',
    emoji: '🏎️',
    anchorText: 'Formula 1 Aerodynamics & Telemetry',
    tagline: 'Ground effect regulations, 2026 engine splits & Max Verstappen title defense',
    keywords: 'formula 1 news, ground effect aerodynamics, max verstappen',
    highlightAthlete: 'Max Verstappen',
    accentBg: 'bg-red-50/70',
    accentBorder: 'hover:border-red-500',
    accentText: 'text-red-700',
  },
  {
    sport: 'Badminton',
    emoji: '🏸',
    anchorText: 'Badminton 400 km/h Shuttle & Net Deception',
    tagline: 'Relentless reflex rallies, steep smash angles & Viktor Axelsen Great Dane profile',
    keywords: 'badminton rallies, viktor axelsen, bwf world tour',
    highlightAthlete: 'Viktor Axelsen',
    accentBg: 'bg-purple-50/70',
    accentBorder: 'hover:border-purple-500',
    accentText: 'text-purple-700',
  },
  {
    sport: 'Basketball',
    emoji: '🏀',
    anchorText: 'Basketball Space & Pace Revolution',
    tagline: 'Deep perimeter spacing, positionless unicorns & Victor Wembanyama 8ft wingspan',
    keywords: 'nba analytics, space and pace, victor wembanyama',
    highlightAthlete: 'Victor Wembanyama',
    accentBg: 'bg-orange-50/70',
    accentBorder: 'hover:border-orange-500',
    accentText: 'text-orange-700',
  },
  {
    sport: 'Boxing & Wrestling',
    emoji: '🥊',
    anchorText: 'Boxing & Wrestling Akhada Grit',
    tagline: 'Clay training grounds, Olympic mats & Vinesh Phogat combat warrior profile',
    keywords: 'indian wrestling, olympic combat, vinesh phogat',
    highlightAthlete: 'Vinesh Phogat',
    accentBg: 'bg-rose-50/70',
    accentBorder: 'hover:border-rose-500',
    accentText: 'text-rose-700',
  },
  {
    sport: 'Athletics',
    emoji: '🏃',
    anchorText: 'Athletics & Track Science Desks',
    tagline: 'Sub-880 sprint science, javelin biomechanics & Neeraj Chopra Diamond League',
    keywords: 'world athletics, javelin science, track and field',
    highlightAthlete: 'Neeraj Chopra',
    accentBg: 'bg-stone-50',
    accentBorder: 'hover:border-stone-500',
    accentText: 'text-stone-800',
  },
];

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onNavigateHome,
  onSelectCategory,
  onSelectArticle,
  onOpenSearch,
  attemptedPath,
}) => {
  const topTrending = TRENDING_STORIES.slice(0, 3);

  return (
    <div className="bg-stone-50/60 min-h-[80vh] py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Friendly Hero Banner */}
        <section aria-labelledby="not-found-heading" className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-12 shadow-sm mb-12 relative overflow-hidden">
          {/* Subtle athletic field lines in background */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full border-[12px] border-stone-100/70 pointer-events-none" />
          <div className="absolute right-12 top-8 text-9xl font-black font-mono text-stone-100 select-none pointer-events-none hidden md:block">
            404
          </div>

          <div className="relative z-10 max-w-2xl">
            {/* Whistle / Referee Kicker */}
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 font-mono text-xs font-bold uppercase tracking-wider">
                <Flag className="w-3.5 h-3.5" />
                <span>WHISTLE BLOWN · PLAY OUT OF BOUNDS</span>
              </span>
              <span className="font-mono text-xs text-stone-400">ERROR 404</span>
            </div>

            <h1 id="not-found-heading" className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-extrabold text-stone-950 tracking-tight leading-tight mb-4">
              We couldn’t find that play in the playbook.
            </h1>

            <p className="font-body text-base sm:text-lg text-stone-600 leading-relaxed mb-6">
              The article, page, or athlete profile you were looking for seems to have stepped outside the pitch lines or moved to a different sports desk. Don’t worry — the full archive of journalism, match records, and player dossiers is ready below.
            </p>

            {attemptedPath && (
              <div className="mb-6 p-3 bg-stone-100 rounded-xl border border-stone-200 inline-flex items-center gap-2 text-xs font-mono text-stone-600 max-w-full overflow-x-auto">
                <span className="text-stone-400">Attempted address:</span>
                <span className="font-semibold text-rose-600">{attemptedPath}</span>
              </div>
            )}

            {/* Quick Return Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={getHomeUrl()}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateHome();
                }}
                title="Return to the SPORTSPULSE Home Page"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-stone-900 text-white font-medium text-sm hover:bg-rose-600 transition-colors shadow-sm no-underline cursor-pointer group"
              >
                <Home className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                <span className="font-bold">Return to Home Page</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenSearch}
                title="Search all sports stories, topics, and athlete dossiers"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-stone-300 text-stone-800 font-medium text-sm hover:border-stone-500 hover:bg-stone-50 transition-colors shadow-2xs cursor-pointer"
              >
                <Search className="w-4 h-4 text-stone-500" />
                <span>Search Stories & Athletes</span>
              </button>
            </div>
          </div>
        </section>

        {/* Section: Main Pages & Sports Desks Directory */}
        <section aria-labelledby="main-desks-heading" className="mb-14">
          <div className="flex items-baseline justify-between pb-3 mb-6 border-b border-stone-200">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-rose-600 font-bold block mb-1">
                EDITORIAL DIRECTORY · ALL MAIN DESKS
              </span>
              <h2 id="main-desks-heading" className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-stone-900 font-sans">
                Jump Straight to Our Main Pages
              </h2>
            </div>
            <span className="text-xs font-mono text-stone-400 hidden sm:inline">
              SELECT A SPORT TO RESUME READING
            </span>
          </div>

          {/* Central Featured Anchor: HOME PAGE Primary Card */}
          <div className="mb-6">
            <a
              href={getHomeUrl()}
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
              }}
              title="Navigate to the SPORTSPULSE Home Page: sports news today and the sports news lead stories"
              className="group block p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 text-white border border-stone-800 hover:border-rose-500 shadow-md transition-all no-underline cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase tracking-widest">
                    <Compass className="w-4 h-4" />
                    <span>FRONT PAGE · EDITORIAL CENTERPIECE</span>
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold group-hover:text-rose-300 transition-colors">
                    Home Page: News Sports News & Breaking Editorial Dispatches
                  </h3>
                  <p className="font-sans text-sm text-stone-300 max-w-2xl leading-relaxed">
                    Access <strong className="text-white">sports news today</strong> and <strong className="text-white">the sports news</strong> front cover, featuring our Yashasvi Jaiswal lead analysis, multi-sport radar, and cricbuzz-style dossiers.
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-2 text-sm font-bold text-white bg-white/10 group-hover:bg-rose-600 px-4 py-2.5 rounded-xl backdrop-blur-sm transition-colors self-start sm:self-center">
                  <span>Open Home Page</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          </div>

          {/* Grid of Main Sport Desks (Cricket, Football, Kabaddi, etc.) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {DESK_LINKS.map((desk) => {
              const url = getCategoryUrl(desk.sport);
              return (
                <a
                  key={desk.sport}
                  href={url}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectCategory(desk.sport);
                  }}
                  title={`Read ${desk.sport} coverage: ${desk.anchorText}`}
                  className={`group block p-5 rounded-2xl bg-white border border-stone-200 ${desk.accentBorder} shadow-2xs hover:shadow-md transition-all no-underline cursor-pointer flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl" role="img" aria-label={desk.sport}>
                        {desk.emoji}
                      </span>
                      <span className={`text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded-md ${desk.accentBg} ${desk.accentText}`}>
                        {desk.sport} DESK
                      </span>
                    </div>

                    <h3 className="font-editorial text-lg sm:text-xl font-bold text-stone-900 group-hover:text-rose-600 transition-colors mb-1.5 leading-snug">
                      {desk.anchorText}
                    </h3>

                    <p className="font-body text-xs text-stone-600 leading-relaxed mb-3">
                      {desk.tagline}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-mono">
                    {desk.highlightAthlete ? (
                      <span className="text-stone-400 truncate max-w-[170px]">
                        ★ {desk.highlightAthlete}
                      </span>
                    ) : (
                      <span className="text-stone-400">Deep-Dive Coverage</span>
                    )}
                    <span className="text-stone-900 font-semibold group-hover:text-rose-600 group-hover:translate-x-0.5 transition-all flex items-center gap-1">
                      <span>Explore</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Section: Trending Stories Right Now */}
        {topTrending.length > 0 && (
          <section aria-labelledby="trending-stories-heading" className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 mb-6 pb-3 border-b border-stone-100">
              <Flame className="w-4 h-4 text-rose-500 fill-current" />
              <h2 id="trending-stories-heading" className="text-lg font-bold font-sans uppercase tracking-tight text-stone-900">
                Trending Longform Stories Right Now
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {topTrending.map((article) => {
                const articleUrl = getArticleUrl(article.category, article.slug);
                return (
                  <a
                    key={article.id}
                    href={articleUrl}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectArticle(article);
                    }}
                    title={`Read trending story: ${article.title}`}
                    className="group block p-4 rounded-xl border border-stone-200 hover:border-stone-400 bg-stone-50/50 hover:bg-white transition-all shadow-2xs no-underline cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-rose-600 font-bold mb-1.5">
                        <span>{article.categoryEmoji}</span>
                        <span>{article.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="font-editorial text-base font-bold text-stone-950 group-hover:text-rose-600 transition-colors leading-snug line-clamp-2 mb-2">
                        {article.title}
                      </h3>
                      <p className="font-body text-xs text-stone-500 line-clamp-2 leading-relaxed">
                        {article.subtitle}
                      </p>
                    </div>

                    <div className="mt-4 pt-2.5 border-t border-stone-200/60 flex items-center justify-between text-[11px] font-mono text-stone-500">
                      <span>By {article.author}</span>
                      <span className="text-rose-600 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                        <span>Read</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
