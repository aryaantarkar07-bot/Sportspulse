import React, { useState, useEffect } from 'react';
import { Search, X, Clock, ArrowRight, User, FileText } from 'lucide-react';
import { Article, PlayerData, SportCategory } from '../types';
import { SPORT_CATEGORIES } from '../data/sportsData';
import { PLAYERS } from '../data/playersData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  players?: PlayerData[];
  onSelectArticle: (article: Article) => void;
  onSelectPlayer?: (player: PlayerData) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  articles,
  players = PLAYERS,
  onSelectArticle,
  onSelectPlayer,
}) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<SportCategory | 'ALL'>('ALL');
  const [searchTab, setSearchTab] = useState<'all' | 'stories' | 'players'>('all');

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

  const lowerQ = query.toLowerCase().trim();

  const filteredArticles = articles.filter((art) => {
    const matchesCat = selectedCategory === 'ALL' || art.category === selectedCategory;
    if (!lowerQ) return matchesCat;

    const matchesQuery =
      art.title.toLowerCase().includes(lowerQ) ||
      art.subtitle.toLowerCase().includes(lowerQ) ||
      art.author.toLowerCase().includes(lowerQ) ||
      art.category.toLowerCase().includes(lowerQ) ||
      art.tags.some((t) => t.toLowerCase().includes(lowerQ));

    return matchesCat && matchesQuery;
  });

  const filteredPlayers = players.filter((p) => {
    const matchesCat = selectedCategory === 'ALL' || p.sport === selectedCategory;
    if (!lowerQ) return matchesCat;

    return (
      p.name.toLowerCase().includes(lowerQ) ||
      (p.fullName && p.fullName.toLowerCase().includes(lowerQ)) ||
      p.role.toLowerCase().includes(lowerQ) ||
      p.team.toLowerCase().includes(lowerQ) ||
      p.nationality.toLowerCase().includes(lowerQ) ||
      p.stats.toLowerCase().includes(lowerQ)
    );
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

        {/* Filter Pills / Tabs */}
        <div className="px-4 py-2.5 bg-stone-50 border-b border-stone-200 flex items-center justify-between gap-2 overflow-x-auto text-xs">
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
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

          <div className="hidden sm:flex items-center gap-1 shrink-0 border-l border-stone-200 pl-2">
            <button
              onClick={() => setSearchTab('all')}
              className={`px-2 py-0.5 rounded text-[11px] font-mono ${
                searchTab === 'all' ? 'bg-stone-200 text-stone-900 font-bold' : 'text-stone-500'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSearchTab('players')}
              className={`px-2 py-0.5 rounded text-[11px] font-mono ${
                searchTab === 'players' ? 'bg-stone-200 text-stone-900 font-bold' : 'text-stone-500'
              }`}
            >
              Athletes ({filteredPlayers.length})
            </button>
            <button
              onClick={() => setSearchTab('stories')}
              className={`px-2 py-0.5 rounded text-[11px] font-mono ${
                searchTab === 'stories' ? 'bg-stone-200 text-stone-900 font-bold' : 'text-stone-500'
              }`}
            >
              Articles ({filteredArticles.length})
            </button>
          </div>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {/* Athlete Dossiers Results */}
          {(searchTab === 'all' || searchTab === 'players') && filteredPlayers.length > 0 && (
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-rose-600 font-bold mb-2 flex items-center gap-1.5">
                <User className="w-3 h-3" />
                <span>ATHLETE DOSSIERS ({filteredPlayers.length})</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                {filteredPlayers.slice(0, 6).map((player) => (
                  <div
                    key={player.id}
                    onClick={() => {
                      if (onSelectPlayer) {
                        onSelectPlayer(player);
                        onClose();
                      }
                    }}
                    className="p-2.5 rounded-xl border border-stone-200 hover:border-stone-400 bg-white hover:bg-stone-50 transition-all cursor-pointer flex items-center gap-3 group"
                  >
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-stone-100 shrink-0 border border-stone-200 relative">
                      <img
                        src={player.imageUrl}
                        alt={player.name}
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform"
                      />
                      {player.jerseyNumber && (
                        <span className="absolute bottom-0 right-0 px-1 py-0.2 bg-stone-900 text-white text-[9px] font-mono font-bold rounded-tl">
                          #{player.jerseyNumber}
                        </span>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-stone-900 group-hover:text-rose-600 transition-colors truncate">
                          {player.name}
                        </span>
                      </div>
                      <div className="text-[11px] text-stone-500 truncate">
                        {player.sport} · {player.role}
                      </div>
                      <div className="text-[10px] font-mono text-stone-400 truncate">
                        {player.team}
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-stone-300 group-hover:text-rose-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Articles Results */}
          {(searchTab === 'all' || searchTab === 'stories') && (
            <div>
              {filteredArticles.length > 0 && (
                <div className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold mb-2 flex items-center gap-1.5">
                  <FileText className="w-3 h-3" />
                  <span>LONGFORM ARTICLES ({filteredArticles.length})</span>
                </div>
              )}
              <div className="divide-y divide-stone-100">
                {filteredArticles.map((art) => (
                  <div
                    key={art.id}
                    onClick={() => {
                      onSelectArticle(art);
                      onClose();
                    }}
                    className="py-3 px-3 rounded-lg hover:bg-stone-50 transition-colors group cursor-pointer flex items-center justify-between gap-4"
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
                      <h4 className="font-editorial text-base font-bold text-stone-900 group-hover:text-rose-600 transition-colors truncate">
                        {art.title}
                      </h4>
                      <p className="text-xs text-stone-500 truncate font-sans">
                        By {art.author} · {art.subtitle}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-rose-600 group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {filteredArticles.length === 0 && filteredPlayers.length === 0 && (
            <div className="py-12 text-center text-stone-400">
              <p className="font-editorial text-lg text-stone-600 mb-1">No matches found</p>
              <p className="text-xs">Try searching for "Kohli", "Cricket", "Mbappé", "Pardeep", or "Neeraj".</p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-[11px] font-mono text-stone-400">
          <span>
            {filteredPlayers.length} athletes · {filteredArticles.length} stories matched
          </span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};
