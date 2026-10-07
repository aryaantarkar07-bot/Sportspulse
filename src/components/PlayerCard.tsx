import React, { useState } from 'react';
import { PlayerData } from '../types';
import { Shield, Sparkles, Trophy, Quote, X } from 'lucide-react';

interface PlayerCardProps {
  player: PlayerData;
  onSelect?: (player: PlayerData) => void;
  variant?: 'card' | 'compact' | 'spotlight';
}

export const PlayerCard: React.FC<PlayerCardProps> = ({
  player,
  onSelect,
  variant = 'card',
}) => {
  const [imgError, setImgError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    if (onSelect) {
      onSelect(player);
    } else {
      setModalOpen(true);
    }
  };

  // Fallback athlete silhouette graphic
  const renderFallbackAvatar = () => (
    <div
      className="w-full h-full flex flex-col items-center justify-center p-4 text-white relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #111827 0%, ${player.accentColor} 100%)`,
      }}
    >
      {/* Background jersey number outline */}
      {player.jerseyNumber && (
        <span className="absolute -right-2 -bottom-4 text-7xl font-black font-mono text-white/10 select-none pointer-events-none">
          {player.jerseyNumber}
        </span>
      )}

      {/* Stylized athletic vector icon */}
      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-2 shadow-inner">
        <span className="text-xl font-bold font-mono tracking-tight text-white">
          {player.name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .slice(0, 2)}
        </span>
      </div>

      <div className="text-center z-10">
        <span className="text-[10px] font-mono uppercase tracking-widest text-white/80 block">
          {player.nationality}
        </span>
        <span className="text-xs font-semibold text-white truncate max-w-[160px] block">
          {player.team}
        </span>
      </div>
    </div>
  );

  if (variant === 'compact') {
    return (
      <div
        onClick={handleClick}
        className="group cursor-pointer flex items-center gap-3 p-2.5 rounded-xl border border-stone-200 hover:border-stone-400 bg-white hover:bg-stone-50 transition-all shadow-2xs"
      >
        <div className="w-12 h-12 rounded-lg overflow-hidden bg-stone-100 shrink-0 border border-stone-200 relative">
          {!imgError && player.imageUrl ? (
            <img
              src={player.imageUrl}
              alt={player.name}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform"
            />
          ) : (
            renderFallbackAvatar()
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-stone-900 group-hover:text-rose-600 transition-colors truncate">
              {player.name}
            </span>
            {player.jerseyNumber && (
              <span className="text-[9px] font-mono px-1 py-0.2 bg-stone-100 text-stone-600 rounded">
                #{player.jerseyNumber}
              </span>
            )}
          </div>
          <div className="text-[11px] text-stone-500 truncate">{player.role}</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        onClick={handleClick}
        className="group cursor-pointer bg-white rounded-2xl border border-stone-200 overflow-hidden hover:border-stone-400 hover:shadow-md transition-all flex flex-col justify-between"
      >
        <div>
          {/* Player Photo Container */}
          <div className="relative aspect-[4/5] bg-stone-100 overflow-hidden border-b border-stone-100">
            {!imgError && player.imageUrl ? (
              <img
                src={player.imageUrl}
                alt={player.name}
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
              />
            ) : (
              renderFallbackAvatar()
            )}

            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

            {/* Top Badge: Nationality & Jersey */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
              <span className="text-[10px] font-mono tracking-wider uppercase text-white/90 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded">
                {player.nationality}
              </span>
              {player.jerseyNumber && (
                <span className="text-[11px] font-mono font-bold text-white bg-rose-600/90 px-2 py-0.5 rounded shadow-xs">
                  #{player.jerseyNumber}
                </span>
              )}
            </div>

            {/* Bottom Overlay on Photo: Name & Role */}
            <div className="absolute bottom-3 left-3 right-3 z-10 pointer-events-none">
              <div className="text-[10px] font-mono uppercase tracking-wider text-rose-300 font-semibold mb-0.5">
                {player.role}
              </div>
              <h4 className="font-editorial text-lg sm:text-xl font-bold text-white drop-shadow-sm leading-tight">
                {player.name}
              </h4>
              <div className="text-xs text-white/80 font-sans truncate">
                {player.team}
              </div>
            </div>
          </div>

          {/* Body stats & bio */}
          <div className="p-4 sm:p-5">
            <p className="font-body text-xs text-stone-600 line-clamp-2 leading-relaxed mb-3">
              {player.bio}
            </p>

            {/* Key Stat Badge */}
            <div className="p-2.5 bg-stone-50 rounded-xl border border-stone-200/80 text-[11px] font-mono text-stone-800">
              <span className="text-[9px] uppercase tracking-wider text-stone-400 block font-sans font-semibold mb-0.5">
                PERFORMANCE METRIC
              </span>
              <span className="font-semibold text-stone-900 block truncate">
                {player.stats}
              </span>
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="px-4 sm:px-5 pb-4 pt-1 flex items-center justify-between text-xs font-mono text-stone-400">
          <span className="text-[10px] uppercase">{player.sport} Star</span>
          <span className="text-rose-600 font-semibold group-hover:translate-x-0.5 transition-transform">
            View Profile →
          </span>
        </div>
      </div>

      {/* Expanded Player Dossier Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg border border-stone-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="relative aspect-[16/9] bg-stone-900 overflow-hidden">
              {!imgError && player.imageUrl ? (
                <img
                  src={player.imageUrl}
                  alt={player.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                renderFallbackAvatar()
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-black/50 hover:bg-black/80 text-white z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-xs font-mono uppercase tracking-widest text-rose-400 font-bold block mb-1">
                  {player.sport} PLAYER DOSSIER · #{player.jerseyNumber}
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold">
                  {player.name}
                </h3>
                <p className="text-xs text-white/80 font-sans">
                  {player.role} · {player.team} ({player.nationality})
                </p>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-1.5 font-mono">
                  Tactical Role & Scouting Report
                </h5>
                <p className="font-body text-sm text-stone-700 leading-relaxed">
                  {player.bio}
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                <h5 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-1 font-mono">
                  Career Performance & Sensor Metrics
                </h5>
                <p className="font-mono text-xs font-semibold text-stone-900">
                  {player.stats}
                </p>
              </div>

              {player.quote && (
                <div className="p-4 border-l-3 border-rose-600 bg-rose-50/50 rounded-r-xl">
                  <p className="font-editorial italic text-stone-800 text-sm">
                    “{player.quote}”
                  </p>
                  <span className="text-[11px] font-mono text-rose-700 uppercase block mt-1">
                    — {player.name}
                  </span>
                </div>
              )}

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-5 py-2 bg-stone-900 text-white text-xs font-semibold rounded-lg hover:bg-stone-800"
                >
                  Close Dossier
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
