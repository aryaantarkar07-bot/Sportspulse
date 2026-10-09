import React from 'react';
import { ArrowLeft, Clock, ArrowRight, Users } from 'lucide-react';
import { Article, PlayerData, SportCategory } from '../types';
import { SportsArtwork } from './SportsArtwork';
import { PlayerRosterStrip } from './PlayerRosterStrip';
import { getPlayersBySport } from '../data/playersData';

interface CategoryHubProps {
  category: SportCategory;
  articles: Article[];
  players?: PlayerData[];
  onSelectArticle: (article: Article) => void;
  onSelectPlayer?: (player: PlayerData) => void;
  onBackToHome: () => void;
}

export const CategoryHub: React.FC<CategoryHubProps> = ({
  category,
  articles,
  players,
  onSelectArticle,
  onSelectPlayer,
  onBackToHome,
}) => {
  const leadArticle = articles[0];
  const otherArticles = articles.slice(1);
  const sportPlayers = players && players.length > 0 ? players : getPlayersBySport(category);

  return (
    <section className="py-8 bg-white min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Back navigation */}
        <div className="mb-6">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-stone-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>
        </div>

        {/* Hub Header */}
        <div className="border-b border-stone-200 pb-8 mb-10">
          <div className="text-[11px] font-mono uppercase tracking-widest text-rose-600 font-bold mb-2">
            SPORTSPULSE DESK ARCHIVE
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-950 mb-3">
            {category} Longform Desk
          </h1>
          <p className="font-body text-base sm:text-lg text-stone-600 max-w-3xl leading-relaxed">
            Exhaustive tactical breakdowns, generational profiles, physiological investigations, and longform essays from our dedicated {category.toLowerCase()} correspondents.
          </p>
        </div>

        {/* Lead Story */}
        {leadArticle && (
          <div
            onClick={() => onSelectArticle(leadArticle)}
            className="mb-14 group cursor-pointer border border-stone-200 rounded-2xl overflow-hidden hover:border-stone-400 hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12"
          >
            <div className="lg:col-span-7">
              <SportsArtwork
                category={leadArticle.category}
                title={leadArticle.title}
                personality={leadArticle.featuredPersonality}
                aspectRatio="16/9"
                className="w-full h-full min-h-[320px]"
              />
            </div>
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-stone-50/50">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-rose-600 font-bold mb-2">
                  COVER STORY
                </div>
                <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-stone-950 group-hover:text-rose-600 transition-colors leading-tight mb-3">
                  {leadArticle.title}
                </h2>
                <p className="font-body text-sm sm:text-base text-stone-600 leading-relaxed mb-6">
                  {leadArticle.subtitle}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs font-mono text-stone-500">
                <span>By {leadArticle.author} · {leadArticle.readTime}</span>
                <span className="text-rose-600 font-bold group-hover:translate-x-1 transition-transform">
                  Read Feature →
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Other Stories in Hub */}
        {otherArticles.length > 0 ? (
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-6 font-mono">
              ADDITIONAL ESSAYS & INVESTIGATIONS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherArticles.map((art) => (
                <div
                  key={art.id}
                  onClick={() => onSelectArticle(art)}
                  className="group cursor-pointer bg-white rounded-xl border border-stone-200 hover:border-stone-400 hover:shadow-sm transition-all overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-[16/10] overflow-hidden">
                      <SportsArtwork
                        category={art.category}
                        title={art.title}
                        aspectRatio="16/9"
                        className="w-full h-full group-hover:scale-102 transition-transform"
                      />
                    </div>
                    <div className="p-5">
                      <div className="text-[10px] font-mono uppercase text-stone-400 mb-1">
                        {art.date} · {art.readTime}
                      </div>
                      <h4 className="font-editorial text-lg sm:text-xl font-bold text-stone-900 group-hover:text-rose-600 transition-colors leading-snug mb-2">
                        {art.title}
                      </h4>
                      <p className="font-body text-xs text-stone-600 line-clamp-2 leading-relaxed">
                        {art.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="px-5 pb-4 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-400">
                    <span>By {art.author}</span>
                    <span className="text-rose-600 font-semibold group-hover:translate-x-0.5 transition-transform">
                      Read →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-8 bg-stone-50 rounded-xl border border-stone-200 text-center">
            <p className="text-sm text-stone-600 font-serif">
              New comprehensive features from the {category} desk are dispatched daily at 07:00 AM.
            </p>
          </div>
        )}
        {/* Cricbuzz-Inspired Player Dossier Roster Strip */}
        {sportPlayers.length > 0 && (
          <PlayerRosterStrip
            sport={category}
            players={sportPlayers}
            title={`${category} Stars & Cricbuzz-Style Profiles`}
            subtitle={`In-depth career records, historical milestones, and tactical analysis for ${category} icons.`}
            onSelectPlayer={onSelectPlayer}
          />
        )}
      </div>
    </section>
  );
};
