import React, { useState, useEffect } from 'react';
import { Search, X, Clock, ArrowRight } from 'lucide-react';
import { Article, SportCategory } from '../types';
import { SPORT_CATEGORIES } from '../data/sportsData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  articles,
  onSelectArticle,
}) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<SportCategory | 'ALL'>('ALL');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredArticles = articles.filter((art) => {
    const matchesCat = selectedCategory === 'ALL' || art.category === selectedCategory;
    const lowerQ = query.toLowerCase().trim();
    if (!lowerQ) return matchesCat;

    const matchesQuery =
      art.title.toLowerCase().includes(lowerQ) ||
      art.subtitle.toLowerCase().includes(lowerQ) ||
      art.author.toLowerCase().includes(lowerQ) ||
      art.category.toLowerCase().includes(lowerQ) ||
      art.tags.some((t) => t.toLowerCase().includes(lowerQ));

    return matchesCat && matchesQuery;
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 px-4 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-2xl border border-stone-200 shadow-2xl overflow-hidden mb-12 animate-in fade-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stories, tactics, players, authors, or sports..."
            className="w-full text-base sm:text-lg bg-transparent text-stone-900 placeholder:text-stone-400 focus:outline-hidden font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded text-stone-400 hover:text-stone-600 text-xs font-mono"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="px-4 py-2.5 bg-stone-50 border-b border-stone-200 flex items-center gap-1.5 overflow-x-auto scrollbar-none text-xs">
          <button
            onClick={() => setSelectedCategory('ALL')}
            className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap font-medium ${
              selectedCategory === 'ALL'
                ? 'bg-stone-900 text-white'
                : 'text-stone-600 hover:bg-stone-200/70'
            }`}
          >
            All Sports
          </button>
          {SPORT_CATEGORIES.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap font-medium ${
                selectedCategory === cat.name
                  ? 'bg-rose-600 text-white'
                  : 'text-stone-600 hover:bg-stone-200/70'
              }`}
            >
              {cat.emoji} {cat.name}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 divide-y divide-stone-100">
          {filteredArticles.length === 0 ? (
            <div className="py-12 text-center text-stone-400">
              <p className="font-editorial text-lg text-stone-600 mb-1">No stories found</p>
              <p className="text-xs">Try searching for "Cricket", "Tactics", "Jaiswal", or "Kabaddi".</p>
            </div>
          ) : (
            filteredArticles.map((art) => (
              <div
                key={art.id}
                onClick={() => {
                  onSelectArticle(art);
                  onClose();
                }}
                className="py-3.5 px-3 rounded-lg hover:bg-stone-50 transition-colors group cursor-pointer flex items-center justify-between gap-4"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-rose-600 font-sans">
                      {art.category}
                    </span>
                    <span aria-hidden="true" className="text-stone-300">·</span>
                    <span className="text-[11px] font-mono text-stone-400">
                      {art.readTime}
                    </span>
                  </div>
                  <h4 className="font-editorial text-base sm:text-lg font-bold text-stone-900 group-hover:text-rose-600 transition-colors truncate">
                    {art.title}
                  </h4>
                  <p className="text-xs text-stone-500 truncate font-sans">
                    By {art.author} · {art.subtitle}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-rose-600 group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-[11px] font-mono text-stone-400">
          <span>{filteredArticles.length} stories matched</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};
