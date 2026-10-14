import React from 'react';
import { Search, Bookmark, Menu, X, ArrowRight, ShieldCheck, Flame } from 'lucide-react';
import { SportCategory } from '../types';
import { SPORT_CATEGORIES } from '../data/sportsData';
import { getHomeUrl, getCategoryUrl } from '../utils/router';

interface HeaderProps {
  activeCategory: SportCategory | 'ALL';
  onSelectCategory: (cat: SportCategory | 'ALL') => void;
  onOpenSearch: () => void;
  onOpenBookmarks: () => void;
  savedCount: number;
  onNavigateHome: () => void;
  onOpenArchitectureModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeCategory,
  onSelectCategory,
  onOpenSearch,
  onOpenBookmarks,
  savedCount,
  onNavigateHome,
  onOpenArchitectureModal,
}) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="w-full bg-white border-b border-stone-200 sticky top-0 z-40">
      {/* Editorial Utility Micro-Bar */}
      <div className="border-b border-stone-100 bg-stone-50/70 text-stone-500 text-[11px] font-medium tracking-wide">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-stone-700 font-semibold uppercase tracking-wider">Edition: Global</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Wednesday, October 7, 2026</span>
            <span aria-hidden="true" className="hidden sm:inline text-stone-300">·</span>
            <span className="hidden sm:inline text-rose-700 font-medium">Daily Longform Dispatch #842</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenArchitectureModal}
              className="text-stone-600 hover:text-stone-900 transition-colors hidden md:flex items-center gap-1.5 cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Publishing Architecture: Static v1 / API v2</span>
            </button>
            <span aria-hidden="true" className="hidden md:inline text-stone-300">·</span>
            <span className="font-mono text-stone-400 text-[10px]">VERIFIED SPORTS DESK</span>
          </div>
        </div>
      </div>

      {/* Main Masthead: 3-Zone Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark with Semantic Link */}
        <div className="flex items-baseline gap-3">
          <a
            href={getHomeUrl()}
            onClick={(e) => {
              e.preventDefault();
              onNavigateHome();
            }}
            title="SPORTSPULSE Homepage"
            aria-label="SPORTSPULSE Homepage"
            className="text-left group cursor-pointer no-underline block"
          >
            <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tighter font-sans uppercase text-stone-900 group-hover:text-rose-600 transition-colors">
              SPORTSPULSE
            </span>
          </a>
          <span className="hidden lg:inline text-[11px] font-mono tracking-widest text-stone-400 uppercase">
            EVERY SPORT. EVERY STORY. EVERY DAY.
          </span>
        </div>

        {/* Zone 2: Editorial Navigation Links (Desktop) */}
        <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-stone-600">
          {(['Cricket', 'Football', 'Kabaddi', 'Hockey', 'Tennis'] as SportCategory[]).map((catName) => (
            <a
              key={catName}
              href={getCategoryUrl(catName)}
              onClick={(e) => {
                e.preventDefault();
                onSelectCategory(catName);
              }}
              title={`Explore ${catName} stories`}
              className={`hover:text-rose-600 transition-colors no-underline ${
                activeCategory === catName ? 'text-rose-600 font-bold' : ''
              }`}
            >
              {catName} Desk
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search Action */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200/80 rounded-md transition-colors cursor-pointer"
            aria-label="Search articles and players"
          >
            <Search className="w-3.5 h-3.5 text-stone-600" />
            <span className="hidden sm:inline">SEARCH</span>
            <kbd className="hidden md:inline text-[10px] bg-white border border-stone-300 rounded px-1 text-stone-500 font-mono">⌘K</kbd>
          </button>

          {/* Bookmarks Action */}
          <button
            onClick={onOpenBookmarks}
            className="relative p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors cursor-pointer"
            title="Saved Reading List"
            aria-label="Saved reading list stories"
          >
            <Bookmark className="w-4 h-4" />
            {savedCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {savedCount}
              </span>
            )}
          </button>

          {/* Menu Action */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-stone-900 border border-stone-300 hover:border-stone-400 rounded-md transition-colors cursor-pointer"
            aria-label="Open sports directory menu"
          >
            {menuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">MENU</span>
          </button>
        </div>
      </div>

      {/* Subnav Ribbon: All Categories with overflow scrolling */}
      <div className="border-t border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-1 overflow-x-auto py-2.5 scrollbar-none text-xs font-bold tracking-wider uppercase text-stone-600 whitespace-nowrap">
            <a
              href={getHomeUrl()}
              onClick={(e) => {
                e.preventDefault();
                onSelectCategory('ALL');
              }}
              title="All Sports Stories"
              className={`px-3 py-1 rounded transition-colors no-underline ${
                activeCategory === 'ALL'
                  ? 'bg-stone-900 text-white'
                  : 'hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              All Stories
            </a>
            <span className="text-stone-300 px-1" aria-hidden="true">|</span>
            {SPORT_CATEGORIES.map((cat) => (
              <a
                key={cat.name}
                href={getCategoryUrl(cat.name)}
                target="_blank"
                rel="noopener noreferrer"
                title={`Explore ${cat.name} desk in a new tab`}
                className={`flex items-center gap-1.5 px-3 py-1 rounded transition-colors no-underline ${
                  activeCategory === cat.name
                    ? 'bg-rose-600 text-white'
                    : 'hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Slide-out Menu Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 top-[108px] bg-black/60 z-50 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-md bg-white h-full overflow-y-auto p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-6">
                <div>
                  <h3 className="font-extrabold text-lg uppercase tracking-tight text-stone-900">
                    SPORTSPULSE DIRECTORY
                  </h3>
                  <p className="text-xs text-stone-500 font-mono">EVERY SPORT. EVERY STORY. EVERY DAY.</p>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-1 rounded text-stone-400 hover:text-stone-900 cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                  All Sports Desks
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {SPORT_CATEGORIES.map((cat) => (
                    <a
                      key={cat.name}
                      href={getCategoryUrl(cat.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMenuOpen(false)}
                      title={`Visit ${cat.name} Desk in a new tab`}
                      className="flex items-center justify-between p-2.5 text-left rounded-lg border border-stone-100 hover:border-stone-300 hover:bg-stone-50 transition-all text-sm text-stone-800 no-underline"
                    >
                      <span className="flex items-center gap-2">
                        <span>{cat.emoji}</span>
                        <span className="font-medium">{cat.name}</span>
                      </span>
                      <span className="text-[11px] font-mono text-stone-400">{cat.count}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/80 mb-6">
                <div className="flex items-center gap-2 text-rose-600 font-semibold text-xs uppercase tracking-wider mb-2">
                  <Flame className="w-4 h-4" />
                  <span>Editorial Mission</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  SportsPulse is dedicated to long-form, magazine-style sports journalism. We examine tactics, biomechanics, psychology, and culture—elevating the craft beyond short-term scoreboards.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-200">
              <button
                onClick={() => {
                  onOpenArchitectureModal();
                  setMenuOpen(false);
                }}
                className="w-full flex items-center justify-between p-3 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors cursor-pointer"
              >
                <span>Read About Publishing Architecture (Static vs API)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-stone-400 text-center mt-3 font-mono">
                SportsPulse © 2026 · All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
