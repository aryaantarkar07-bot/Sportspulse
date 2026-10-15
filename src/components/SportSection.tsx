import React from 'react';
import { ArrowRight, Clock, ChevronRight } from 'lucide-react';
import { Article, PlayerData, SportCategory } from '../types';
import { SportsArtwork } from './SportsArtwork';
import { PlayerRosterStrip } from './PlayerRosterStrip';
import { getArticleUrl, getCategoryUrl } from '../utils/router';

interface SportSectionProps {
  sport: SportCategory;
  emoji: string;
  largeArticle: Article;
  sideArticles: Article[];
  players?: PlayerData[];
  onSelectArticle: (article: Article) => void;
  onViewCategory?: (sport: SportCategory) => void;
  onSelectPlayer?: (player: PlayerData) => void;
}

export const SportSection: React.FC<SportSectionProps> = ({
  sport,
  emoji,
  largeArticle,
  sideArticles,
  players,
  onSelectArticle,
  onViewCategory,
  onSelectPlayer,
}) => {
  const largeArticleUrl = getArticleUrl(largeArticle.category, largeArticle.slug);
  const categoryUrl = getCategoryUrl(sport);

  return (
    <section className="py-12 border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="flex items-baseline justify-between mb-8 pb-3 border-b border-stone-200">
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl">{emoji}</span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-stone-900 font-sans">
              {sport}
            </h2>
          </div>
          {onViewCategory && (
            <a
              href={categoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                  e.preventDefault();
                  onViewCategory(sport);
                }
              }}
              title={`Explore ${sport} Desk (Click to view, Ctrl/Cmd+Click to open in new tab)`}
              className="text-xs font-bold uppercase tracking-wider text-rose-600 hover:text-rose-700 flex items-center gap-1 group no-underline"
            >
              <span>Explore {sport} Desk</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          )}
        </div>

        {/* 2-Column Split: [ LARGE ARTICLE ] (approx 60%) + [ 2x ARTICLE ] (approx 40%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Large Article */}
          <div className="lg:col-span-7 group flex flex-col justify-between pr-0 lg:pr-6 lg:border-r lg:border-stone-200">
            <div>
              <a
                href={largeArticleUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                    e.preventDefault();
                    onSelectArticle(largeArticle);
                  }
                }}
                title={`Read story: ${largeArticle.title} (Click to read, Ctrl/Cmd+Click for new tab)`}
                className="block rounded-xl overflow-hidden border border-stone-200 shadow-xs mb-5 cursor-pointer no-underline"
              >
                <SportsArtwork
                  category={largeArticle.category}
                  title={largeArticle.title}
                  personality={largeArticle.featuredPersonality}
                  aspectRatio="16/9"
                  className="w-full h-auto group-hover:scale-101 transition-transform duration-300"
                />
                <span className="sr-only">Read lead story: {largeArticle.title}</span>
              </a>

              <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-stone-400 mb-2">
                <span>LEAD ANALYSIS</span>
                <span aria-hidden="true">·</span>
                <span>{largeArticle.readTime}</span>
              </div>

              <h3 className="mb-3">
                <a
                  href={largeArticleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                      e.preventDefault();
                      onSelectArticle(largeArticle);
                    }
                  }}
                  title={`Read story: ${largeArticle.title} (Click to read, Ctrl/Cmd+Click for new tab)`}
                  className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold text-stone-950 group-hover:text-rose-600 transition-colors leading-tight text-balance no-underline block"
                >
                  {largeArticle.title}
                </a>
              </h3>

              <p className="font-body text-base text-stone-600 leading-relaxed line-clamp-3 mb-4">
                {largeArticle.subtitle}
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-500">
              <span>By {largeArticle.author} · {largeArticle.authorRole}</span>
              <a
                href={largeArticleUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                    e.preventDefault();
                    onSelectArticle(largeArticle);
                  }
                }}
                title={`Read Magazine Story: ${largeArticle.title} in a new tab`}
                className="text-rose-600 font-semibold group-hover:translate-x-1 transition-transform no-underline flex items-center gap-1"
              >
                <span>Read Magazine Story</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* 2 Side Stacked Articles */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 sm:gap-8">
            {sideArticles.map((article, idx) => {
              const sideUrl = getArticleUrl(article.category, article.slug);
              return (
                <div
                  key={article.id}
                  className={`group flex flex-col justify-between ${
                    idx > 0 ? 'pt-6 border-t border-stone-100' : ''
                  }`}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
                    <a
                      href={sideUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Read story: ${article.title} in a new tab`}
                      className="sm:col-span-5 block rounded-lg overflow-hidden border border-stone-200 shadow-2xs cursor-pointer no-underline"
                    >
                      <SportsArtwork
                        category={article.category}
                        title={article.title}
                        aspectRatio="4/3"
                        className="w-full h-auto group-hover:scale-102 transition-transform duration-300"
                      />
                      <span className="sr-only">Read story: {article.title}</span>
                    </a>
                    <div className="sm:col-span-7">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400 mb-1">
                        {article.readTime} · {article.date}
                      </div>
                      <h4 className="mb-2">
                        <a
                          href={sideUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`Read story: ${article.title} in a new tab`}
                          className="font-editorial text-lg sm:text-xl font-bold text-stone-900 group-hover:text-rose-600 transition-colors leading-snug line-clamp-2 no-underline block"
                        >
                          {article.title}
                        </a>
                      </h4>
                      <p className="font-body text-xs text-stone-600 line-clamp-2 leading-relaxed">
                        {article.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-stone-400">
                    <span>By {article.author}</span>
                    <a
                      href={sideUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Read Feature: ${article.title} in a new tab`}
                      className="text-stone-900 group-hover:text-rose-600 font-semibold no-underline flex items-center gap-1"
                    >
                      <span>Read Feature</span>
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Player Photos Roster Section */}
        {players && players.length > 0 && (
          <PlayerRosterStrip
            sport={sport}
            players={players}
            title={`${sport} Athlete Roster & Crickbuzz-Style Dossiers`}
            onSelectPlayer={onSelectPlayer}
          />
        )}
      </div>
    </section>
  );
};
