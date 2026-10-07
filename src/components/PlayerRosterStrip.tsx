import React from 'react';
import { PlayerData, SportCategory } from '../types';
import { PlayerCard } from './PlayerCard';
import { Users, ChevronRight } from 'lucide-react';

interface PlayerRosterStripProps {
  sport: SportCategory;
  players: PlayerData[];
  title?: string;
  subtitle?: string;
}

export const PlayerRosterStrip: React.FC<PlayerRosterStripProps> = ({
  sport,
  players,
  title,
  subtitle,
}) => {
  if (!players || players.length === 0) return null;

  return (
    <div className="mt-8 pt-8 border-t border-stone-100">
      <div className="flex items-baseline justify-between mb-5">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-rose-600 font-bold block mb-0.5">
            ATHLETE ROSTER & SCOUTING DOSSIERS
          </span>
          <h4 className="text-base sm:text-lg font-bold uppercase tracking-tight text-stone-900 font-sans flex items-center gap-2">
            <span>{title || `Key ${sport} Athletes To Watch`}</span>
          </h4>
        </div>
        <span className="text-xs font-mono text-stone-400">
          {players.length} FEATURED STARS
        </span>
      </div>

      {/* Grid of Player Cards with Photos */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} variant="card" />
        ))}
      </div>
    </div>
  );
};
