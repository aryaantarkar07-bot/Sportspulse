import React from 'react';
import { PlayerData, SportCategory } from '../types';
import { PlayerCard } from './PlayerCard';
import { Users, ChevronRight } from 'lucide-react';

interface PlayerRosterStripProps {
  sport: SportCategory;
  players: PlayerData[];
  title?: string;
  subtitle?: string;
  onSelectPlayer?: (player: PlayerData) => void;
}

export const PlayerRosterStrip: React.FC<PlayerRosterStripProps> = ({
  sport,
  players,
  title,
  subtitle,
  onSelectPlayer,
}) => {
  if (!players || players.length === 0) return null;

  return (
    <div className="mt-10 pt-8 border-t border-stone-200">
      <div className="flex items-baseline justify-between mb-6">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-rose-600 font-bold block mb-1">
            CRICBUZZ-INSPIRED DOSSIER DIRECTORY · {sport.toUpperCase()}
          </span>
          <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-stone-900 font-sans flex items-center gap-2">
            <span>{title || `Featured ${sport} Stars & Profiles`}</span>
          </h4>
          {subtitle && (
            <p className="text-xs text-stone-500 font-mono mt-0.5">{subtitle}</p>
          )}
        </div>
        <span className="text-xs font-mono text-stone-500 bg-stone-100 px-2.5 py-1 rounded-full border border-stone-200">
          {players.length} PROFILES AVAILABLE
        </span>
      </div>

      {/* Grid of Player Cards with Photos */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            variant="card"
            onSelect={onSelectPlayer}
          />
        ))}
      </div>
    </div>
  );
};
