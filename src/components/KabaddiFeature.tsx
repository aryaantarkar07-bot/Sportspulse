import React, { useState } from 'react';
import { Play, Pause, ArrowRight, Shield, Zap, Activity } from 'lucide-react';
import { Article, PlayerData } from '../types';
import { SportsArtwork } from './SportsArtwork';
import { PlayerRosterStrip } from './PlayerRosterStrip';
import { getPlayersBySport } from '../data/playersData';

interface KabaddiFeatureProps {
  article: Article;
  onSelectArticle: (article: Article) => void;
  onSelectPlayer?: (player: PlayerData) => void;
}

export const KabaddiFeature: React.FC<KabaddiFeatureProps> = ({
  article,
  onSelectArticle,
  onSelectPlayer,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const kabaddiPlayers = getPlayersBySport('Kabaddi');

  return (
    <section className="py-14 border-b border-stone-200 bg-stone-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-baseline justify-between mb-8 pb-3 border-b border-stone-200">
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl">🤼</span>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-stone-900 font-sans">
                KABADDI
              </h2>
            </div>
          </div>
          <span className="text-xs font-mono uppercase tracking-wider text-rose-600 font-bold">
            ARTICLES · IMAGES · VIDEO BREAKDOWN
          </span>
        </div>

        {/* 3-Part Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Part 1: Main Story Deck (5 cols) */}
          <div
            onClick={() => onSelectArticle(article)}
            className="lg:col-span-5 group cursor-pointer flex flex-col justify-between h-full bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs hover:border-stone-400 hover:shadow-md transition-all"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-amber-500 text-stone-950 text-[10px] font-mono font-bold rounded uppercase">
                  RECORD BREAKER
                </span>
                <span className="text-[11px] font-mono uppercase tracking-widest text-amber-700 font-bold">
                  PARDEEP NARWAL SPOTLIGHT
                </span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-stone-950 group-hover:text-rose-600 transition-colors leading-tight mb-4">
                {article.title}
              </h3>

              <p className="font-body text-sm sm:text-base text-stone-600 leading-relaxed mb-6">
                {article.subtitle}
              </p>

              {/* Tactical Quick Facts */}
              <div className="grid grid-cols-3 gap-3 p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-center mb-6">
                <div>
                  <div className="text-xs font-mono font-bold text-stone-900">30 Sec</div>
                  <div className="text-[10px] text-stone-500 uppercase tracking-wider font-mono">Raid Clock</div>
                </div>
                <div className="border-x border-stone-200">
                  <div className="text-xs font-mono font-bold text-amber-700">1,200 N</div>
                  <div className="text-[10px] text-stone-500 uppercase tracking-wider font-mono">Ankle Force</div>
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-rose-600">8.2 m/s</div>
                  <div className="text-[10px] text-stone-500 uppercase tracking-wider font-mono">Dubki Speed</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono">
              <span className="text-stone-500">By {article.author} · {article.readTime}</span>
              <span className="text-rose-600 font-bold group-hover:translate-x-1 transition-transform">
                Read Article →
              </span>
            </div>
          </div>

          {/* Part 2: Interactive Video & Supporting Media Reel (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Interactive Video Breakdown Banner */}
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-stone-950 text-white">
              <div className="relative aspect-video">
                <SportsArtwork
                  category="Kabaddi"
                  title="Masterclass: The Biomechanics of the Pro Kabaddi Dubki"
                  aspectRatio="16/9"
                  className="w-full h-full opacity-80"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Video Play Button */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 flex items-center justify-center transition-all shadow-xl hover:scale-105 active:scale-95 z-20 cursor-pointer"
                  aria-label={isPlaying ? 'Pause kabaddi reel' : 'Play kabaddi tactical reel'}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 fill-current" />
                  ) : (
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  )}
                </button>

                {/* Video HUD metadata */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 bg-amber-600 text-stone-950 text-[10px] font-bold font-mono tracking-wider rounded uppercase">
                    KABADDI VIDEO LAB · 03:45
                  </span>
                  <span className="text-[11px] font-mono text-white/80">
                    S12 MATCH ANALYSIS
                  </span>
                </div>

                {/* Bottom title inside player */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h4 className="font-editorial text-lg sm:text-xl font-bold text-white mb-1">
                    Frame Analysis: Escaping the Cover Chain in 0.4 Seconds
                  </h4>
                  <p className="text-xs text-white/70 line-clamp-1">
                    Motion tracking of the center-of-gravity drop to 32cm off the mat before the corner clamp strikes.
                  </p>
                </div>
              </div>
            </div>

            {/* Supporting Images Gallery Row */}
            <div className="grid grid-cols-2 gap-4">
              <div
                onClick={() => onSelectArticle(article)}
                className="group cursor-pointer bg-white p-3 rounded-xl border border-stone-200 hover:border-stone-400 transition-all shadow-2xs"
              >
                <div className="aspect-[16/10] rounded-lg overflow-hidden mb-2">
                  <SportsArtwork
                    category="Kabaddi"
                    title="Pro Kabaddi S12 Grand Finale: Defensive Chain"
                    event={article.supportingImages[0]?.event}
                    aspectRatio="16/9"
                    className="w-full h-full group-hover:scale-102 transition-transform"
                  />
                </div>
                <div className="text-[10px] font-mono uppercase text-amber-700 font-bold mb-0.5">
                  EVENT: PRO KABADDI S12 FINALE
                </div>
                <div className="font-editorial text-xs sm:text-sm font-bold text-stone-900 group-hover:text-rose-600 transition-colors line-clamp-1">
                  Corner & In-Cover Locking Angles
                </div>
              </div>

              <div
                onClick={() => onSelectArticle(article)}
                className="group cursor-pointer bg-white p-3 rounded-xl border border-stone-200 hover:border-stone-400 transition-all shadow-2xs"
              >
                <div className="aspect-[16/10] rounded-lg overflow-hidden mb-2">
                  <SportsArtwork
                    category="Kabaddi"
                    title="Asian Games Gold Medal: High-Speed Raider Touch"
                    event={article.supportingImages[1]?.event}
                    aspectRatio="16/9"
                    className="w-full h-full group-hover:scale-102 transition-transform"
                  />
                </div>
                <div className="text-[10px] font-mono uppercase text-amber-700 font-bold mb-0.5">
                  EVENT: ASIAN GAMES FINAL
                </div>
                <div className="font-editorial text-xs sm:text-sm font-bold text-stone-900 group-hover:text-rose-600 transition-colors line-clamp-1">
                  Baulk Line Extension & Retreat
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kabaddi Players Showcase */}
        {kabaddiPlayers.length > 0 && (
          <PlayerRosterStrip
            sport="Kabaddi"
            players={kabaddiPlayers}
            title="Kabaddi Raiders & Defenders To Watch"
            subtitle="Scouting reports, raid strike rates, and signature escape moves."
            onSelectPlayer={onSelectPlayer}
          />
        )}
      </div>
    </section>
  );
};
