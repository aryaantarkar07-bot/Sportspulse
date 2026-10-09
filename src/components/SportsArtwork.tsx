import React from 'react';
import { SportCategory, FamousPersonality, SportEvent } from '../types';
import { Trophy, MapPin, Award, Shield, User, Flame } from 'lucide-react';

export type ArtworkVariant = 'hero' | 'tactical' | 'player' | 'action' | 'stadium' | 'equipment';

interface SportsArtworkProps {
  category: SportCategory;
  title: string;
  variant?: ArtworkVariant;
  figureNumber?: string;
  personality?: FamousPersonality;
  event?: SportEvent;
  className?: string;
  aspectRatio?: '16/9' | '4/3' | '3/2' | '21/9' | '1/1';
  priority?: boolean;
}

export const SportsArtwork: React.FC<SportsArtworkProps> = ({
  category,
  title,
  variant = 'hero',
  figureNumber,
  personality,
  event,
  className = '',
  aspectRatio = '16/9',
}) => {
  // Bespoke palettes and geometry per sport
  const getTheme = () => {
    switch (category) {
      case 'Cricket':
        return {
          gradient: personality
            ? 'from-[#051124] via-[#0C2340] to-[#1E3A8A]'
            : event
            ? 'from-[#0A1628] via-[#162A45] to-[#1F3D63]'
            : 'from-[#0B132B] via-[#1C2541] to-[#3A506B]',
          accent: '#E63946',
          secondary: '#38BDF8',
          stadiumLines: (
            <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none" viewBox="0 0 400 225" fill="none">
              {/* Grandstand floodlight beams & cricket oval */}
              <ellipse cx="200" cy="180" rx="190" ry="80" stroke="white" strokeWidth="1" strokeDasharray="6 4" />
              <rect x="160" y="100" width="80" height="90" rx="4" stroke="#E63946" strokeWidth="1.5" />
              <line x1="180" y1="100" x2="180" y2="190" stroke="white" strokeWidth="1" />
              <line x1="220" y1="100" x2="220" y2="190" stroke="white" strokeWidth="1" />
              {/* Batting trajectory arc */}
              <path d="M 120 180 Q 200 40 330 120" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
              {/* Stadium floodlight rays */}
              <line x1="40" y1="0" x2="180" y2="130" stroke="white" strokeWidth="0.8" opacity="0.4" />
              <line x1="360" y1="0" x2="220" y2="130" stroke="white" strokeWidth="0.8" opacity="0.4" />
            </svg>
          )
        };
      case 'Football':
        return {
          gradient: personality
            ? 'from-[#031526] via-[#082D52] to-[#134E7F]'
            : event
            ? 'from-[#051829] via-[#0B3559] to-[#1A5C8C]'
            : 'from-[#0B2545] via-[#134074] to-[#1D4E89]',
          accent: '#00F5D4',
          secondary: '#F59E0B',
          stadiumLines: (
            <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none" viewBox="0 0 400 225" fill="none">
              <rect x="25" y="20" width="350" height="185" rx="3" stroke="white" strokeWidth="1.5" />
              <line x1="200" y1="20" x2="200" y2="205" stroke="white" strokeWidth="1.5" />
              <circle cx="200" cy="112.5" r="45" stroke="white" strokeWidth="1.5" />
              <rect x="25" y="60" width="60" height="105" stroke="white" strokeWidth="1.2" />
              <rect x="315" y="60" width="60" height="105" stroke="white" strokeWidth="1.2" />
              <path d="M 85 110 L 200 70 L 320 110" stroke="#00F5D4" strokeWidth="2" strokeDasharray="4 3" />
            </svg>
          )
        };
      case 'Kabaddi':
        return {
          gradient: personality
            ? 'from-[#35070B] via-[#5C0D17] to-[#8C1B28]'
            : event
            ? 'from-[#2B0609] via-[#4A0A12] to-[#751522]'
            : 'from-[#3D0C11] via-[#670E1A] to-[#991B1B]',
          accent: '#FBBF24',
          secondary: '#F87171',
          stadiumLines: (
            <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 400 225" fill="none">
              <rect x="30" y="20" width="340" height="185" stroke="white" strokeWidth="1.5" />
              <line x1="200" y1="20" x2="200" y2="205" stroke="#FBBF24" strokeWidth="2.5" />
              <line x1="130" y1="20" x2="130" y2="205" stroke="white" strokeWidth="1.2" strokeDasharray="5 5" />
              <line x1="270" y1="20" x2="270" y2="205" stroke="white" strokeWidth="1.2" strokeDasharray="5 5" />
              <path d="M 230 140 C 200 60, 160 80, 110 120" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" />
            </svg>
          )
        };
      case 'Hockey':
        return {
          gradient: personality
            ? 'from-[#022118] via-[#054332] to-[#0D6E54]'
            : event
            ? 'from-[#03261C] via-[#07523D] to-[#12775C]'
            : 'from-[#064E3B] via-[#047857] to-[#0F766E]',
          accent: '#34D399',
          secondary: '#60A5FA',
          stadiumLines: (
            <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none" viewBox="0 0 400 225" fill="none">
              <rect x="25" y="15" width="350" height="195" stroke="white" strokeWidth="1.5" />
              <line x1="200" y1="15" x2="200" y2="210" stroke="white" strokeWidth="1.5" />
              <path d="M 25 60 C 95 60, 95 165, 25 165" stroke="#34D399" strokeWidth="2" fill="none" />
              <circle cx="70" cy="112.5" r="5" fill="#34D399" />
              <line x1="70" y1="112.5" x2="355" y2="90" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          )
        };
      case 'Tennis':
        return {
          gradient: personality
            ? 'from-[#062238] via-[#0A416B] to-[#1166A3]'
            : event
            ? 'from-[#072842] via-[#0C4E80] to-[#1474B8]'
            : 'from-[#0C4A6E] via-[#0284C7] to-[#0369A1]',
          accent: '#38BDF8',
          secondary: '#34D399',
          stadiumLines: (
            <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none" viewBox="0 0 400 225" fill="none">
              <rect x="40" y="25" width="320" height="175" stroke="white" strokeWidth="1.5" />
              <line x1="200" y1="25" x2="200" y2="200" stroke="#38BDF8" strokeWidth="2" />
              <line x1="40" y1="65" x2="360" y2="65" stroke="white" strokeWidth="1" />
              <line x1="40" y1="160" x2="360" y2="160" stroke="white" strokeWidth="1" />
            </svg>
          )
        };
      case 'Formula 1':
        return {
          gradient: personality
            ? 'from-[#170505] via-[#330A0A] to-[#691111]'
            : event
            ? 'from-[#140808] via-[#2E0F0F] to-[#591A1A]'
            : 'from-[#1A1A1A] via-[#2A0808] to-[#991B1B]',
          accent: '#EF4444',
          secondary: '#F59E0B',
          stadiumLines: (
            <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 400 225" fill="none">
              <path d="M 30 190 C 140 180, 180 50, 370 40" stroke="#EF4444" strokeWidth="3" />
              <path d="M 30 210 C 150 200, 190 70, 370 60" stroke="white" strokeWidth="1.5" strokeDasharray="6 4" />
              <circle cx="210" cy="115" r="6" fill="#EF4444" />
            </svg>
          )
        };
      case 'Athletics':
        return {
          gradient: personality
            ? 'from-[#2B1003] via-[#521E06] to-[#8C340C]'
            : event
            ? 'from-[#240D04] via-[#451806] to-[#752B0A]'
            : 'from-[#240F06] via-[#431B0B] to-[#7C2D12]',
          accent: '#FB923C',
          secondary: '#FACC15',
          stadiumLines: (
            <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none" viewBox="0 0 400 225" fill="none">
              <path d="M 30 210 C 120 200, 280 200, 370 210" stroke="white" strokeWidth="2" />
              <path d="M 40 180 C 130 170, 270 170, 360 180" stroke="white" strokeWidth="1.5" />
              <path d="M 50 150 C 140 140, 260 140, 350 150" stroke="#FB923C" strokeWidth="1.5" />
            </svg>
          )
        };
      default:
        return {
          gradient: personality
            ? 'from-[#111827] via-[#1F2937] to-[#374151]'
            : event
            ? 'from-[#0F172A] via-[#1E293B] to-[#334155]'
            : 'from-[#18181B] via-[#27272A] to-[#3F3F46]',
          accent: '#F43F5E',
          secondary: '#818CF8',
          stadiumLines: (
            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 400 225" fill="none">
              <circle cx="200" cy="112.5" r="70" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="50" y1="112.5" x2="350" y2="112.5" stroke="white" strokeWidth="1" />
            </svg>
          )
        };
    }
  };

  const theme = getTheme();

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${theme.gradient} text-white select-none ${className}`}
      style={{ aspectRatio }}
    >
      {/* Structural stadium / pitch / track vectors */}
      {theme.stadiumLines}

      {/* Atmospheric lighting gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 pointer-events-none" />

      {/* Floodlight flare simulation */}
      <div
        className="absolute -top-12 -right-12 w-64 h-64 rounded-full opacity-35 blur-3xl pointer-events-none"
        style={{ backgroundColor: theme.accent }}
      />
      <div
        className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ backgroundColor: theme.secondary }}
      />

      {/* ─────────────────────────────────────────────────────────────
          CASE 1: FAMOUS SPORT PERSONALITY (Main Image / Hero Feature)
         ───────────────────────────────────────────────────────────── */}
      {personality ? (
        <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between pointer-events-none z-10">
          {/* Top Personality Badge */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-md text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-white flex items-center gap-1.5 border border-white/20">
                <Flame className="w-3.5 h-3.5 text-rose-400 fill-current" />
                <span>FEATURED PERSONALITY</span>
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-white/70 hidden sm:inline">
                {personality.country} · {personality.sport}
              </span>
            </div>

            {personality.jerseyNumber && (
              <span className="text-3xl sm:text-5xl font-black font-mono text-white/20 leading-none select-none">
                #{personality.jerseyNumber}
              </span>
            )}
          </div>

          {/* Center: Stylized Athlete Avatar Lockup */}
          <div className="my-auto flex items-center gap-4 sm:gap-6">
            {/* Visual Athlete Emblem */}
            <div className="relative w-16 h-16 sm:w-22 sm:h-22 rounded-2xl bg-gradient-to-br from-white/25 to-white/5 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0 shadow-2xl">
              <span className="text-2xl sm:text-4xl font-extrabold font-mono tracking-tighter text-white drop-shadow-md">
                {personality.avatarInitials}
              </span>
              <div
                className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-stone-900 flex items-center justify-center text-[10px] font-bold"
                style={{ backgroundColor: personality.accentColor || theme.accent }}
              >
                ★
              </div>
            </div>

            {/* Athlete Details */}
            <div className="min-w-0">
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-amber-300 font-bold mb-0.5">
                {personality.nickname || 'WORLD-CLASS CHAMPION'}
              </div>
              <h3 className="font-editorial text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md truncate">
                {personality.name}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-sans line-clamp-1 mt-0.5">
                {personality.honors}
              </p>
            </div>
          </div>

          {/* Bottom Bar: Signature Move & Title */}
          <div className="pt-3 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-white/90 gap-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: theme.accent }} />
              <span className="font-mono text-[11px] uppercase tracking-wider text-white/80">
                SIGNATURE: <span className="text-white font-bold">{personality.signatureAction}</span>
              </span>
            </div>
            <span className="text-[11px] font-mono text-white/60">
              EDITORIAL EXCLUSIVE · SPORTSPULSE
            </span>
          </div>
        </div>
      ) : event ? (
        /* ─────────────────────────────────────────────────────────────
            CASE 2: RESPECTIVE EVENT THE ARTICLE IS ABOUT (Supporting Image)
           ───────────────────────────────────────────────────────────── */
        <div className="absolute inset-0 p-3 sm:p-5 flex flex-col justify-between pointer-events-none z-10">
          {/* Top Event Venue Tag */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {figureNumber && (
                <span className="px-2 py-0.5 bg-rose-600 text-[10px] font-mono font-bold rounded text-white shadow-xs">
                  {figureNumber}
                </span>
              )}
              <span className="px-2 py-0.5 bg-black/60 backdrop-blur-md rounded text-[10px] font-mono uppercase tracking-widest text-amber-300 border border-white/10 flex items-center gap-1">
                <Trophy className="w-3 h-3 text-amber-400" />
                <span>{event.stage || 'OFFICIAL EVENT'}</span>
              </span>
            </div>
            <span className="text-[10px] font-mono text-white/70 bg-white/10 px-2 py-0.5 rounded backdrop-blur-sm">
              {event.edition}
            </span>
          </div>

          {/* Center / Bottom: Event & Venue Callout */}
          <div className="mt-auto">
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-stone-300 uppercase tracking-wider mb-1">
              <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              <span className="font-semibold text-white">{event.venue}</span>
              <span aria-hidden="true" className="text-white/40">·</span>
              <span className="text-white/70">{event.location}</span>
            </div>
            <h4 className="font-editorial text-sm sm:text-lg md:text-xl font-bold text-white tracking-tight leading-snug drop-shadow-md line-clamp-2">
              {event.name}
            </h4>
            <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/60">
              <span>{category} Championship Action</span>
              <span className="text-amber-300/90">{event.dateOrEra}</span>
            </div>
          </div>
        </div>
      ) : (
        /* ─────────────────────────────────────────────────────────────
            CASE 3: DEFAULT EDITORIAL VIEWPORT
           ───────────────────────────────────────────────────────────── */
        <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {figureNumber && (
                <span className="px-1.5 py-0.5 bg-white/20 backdrop-blur-sm rounded font-mono text-[10px] font-bold text-white">
                  {figureNumber}
                </span>
              )}
              <span className="text-[10px] tracking-wider font-mono uppercase text-white/80">
                {category} ARCHIVE
              </span>
            </div>
            <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 bg-black/50 backdrop-blur-sm rounded text-white/70">
              HIGH PRECISION SENSOR
            </span>
          </div>

          <div>
            <p className="font-editorial text-xs sm:text-base text-white font-medium line-clamp-2 leading-snug drop-shadow-xs">
              {title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
