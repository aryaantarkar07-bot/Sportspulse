import React from 'react';
import { SportCategory } from '../types';

interface SportsArtworkProps {
  category: SportCategory;
  title: string;
  className?: string;
  aspectRatio?: '16/9' | '4/3' | '3/2' | '21/9';
  priority?: boolean;
}

export const SportsArtwork: React.FC<SportsArtworkProps> = ({
  category,
  title,
  className = '',
  aspectRatio = '16/9',
}) => {
  // Bespoke aesthetic palette and geometry per sport
  const getTheme = () => {
    switch (category) {
      case 'Cricket':
        return {
          gradient: 'from-[#0B132B] via-[#1C2541] to-[#3A506B]',
          accent: '#E63946',
          secondary: '#F1FAEE',
          fieldLine: '#48CAE4',
          label: 'MATCH ANALYSIS & SENSOR DATA',
          pitchOverlay: (
            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 400 225" fill="none">
              {/* Cricket 22 yards crease & stumps */}
              <rect x="60" y="20" width="280" height="185" rx="8" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="160" y1="20" x2="160" y2="205" stroke="white" strokeWidth="1.5" />
              <line x1="240" y1="20" x2="240" y2="205" stroke="white" strokeWidth="1.5" />
              <circle cx="200" cy="112.5" r="45" stroke="#E63946" strokeWidth="1" />
              <line x1="185" y1="65" x2="185" y2="160" stroke="white" strokeWidth="2" />
              <line x1="215" y1="65" x2="215" y2="160" stroke="white" strokeWidth="2" />
              {/* Bat swing arc trace */}
              <path d="M 120 160 Q 200 40 280 140" stroke="#F1FAEE" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          )
        };
      case 'Football':
        return {
          gradient: 'from-[#0B2545] via-[#134074] to-[#1D4E89]',
          accent: '#00F5D4',
          secondary: '#8EE3EF',
          fieldLine: '#EEF4F8',
          label: 'SPATIAL HALF-SPACE MAPPING',
          pitchOverlay: (
            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 400 225" fill="none">
              <rect x="20" y="15" width="360" height="195" rx="2" stroke="white" strokeWidth="1.5" />
              <line x1="200" y1="15" x2="200" y2="210" stroke="white" strokeWidth="1.5" />
              <circle cx="200" cy="112.5" r="40" stroke="white" strokeWidth="1.5" />
              <rect x="20" y="55" width="60" height="115" stroke="white" strokeWidth="1.2" />
              <rect x="320" y="55" width="60" height="115" stroke="white" strokeWidth="1.2" />
              {/* Vector passing vectors */}
              <path d="M 80 110 L 220 70 L 330 110" stroke="#00F5D4" strokeWidth="2" strokeDasharray="3 3" />
            </svg>
          )
        };
      case 'Kabaddi':
        return {
          gradient: 'from-[#3D0C11] via-[#670E1A] to-[#991B1B]',
          accent: '#FBBF24',
          secondary: '#FED7AA',
          fieldLine: '#FDE047',
          label: 'BAULK LINE & COMBAT KINETICS',
          pitchOverlay: (
            <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none" viewBox="0 0 400 225" fill="none">
              {/* Kabaddi mat boundaries: Midline, Baulk Line, Bonus Line */}
              <rect x="30" y="20" width="340" height="185" stroke="white" strokeWidth="1.5" />
              <line x1="200" y1="20" x2="200" y2="205" stroke="#FBBF24" strokeWidth="2.5" />
              <line x1="130" y1="20" x2="130" y2="205" stroke="white" strokeWidth="1.2" strokeDasharray="5 5" />
              <line x1="270" y1="20" x2="270" y2="205" stroke="white" strokeWidth="1.2" strokeDasharray="5 5" />
              <line x1="100" y1="20" x2="100" y2="205" stroke="#FED7AA" strokeWidth="1" />
              <line x1="300" y1="20" x2="300" y2="205" stroke="#FED7AA" strokeWidth="1" />
              {/* Raider leap trajectory */}
              <path d="M 230 140 C 200 60, 160 80, 120 120" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" />
            </svg>
          )
        };
      case 'Hockey':
        return {
          gradient: 'from-[#064E3B] via-[#047857] to-[#0F766E]',
          accent: '#34D399',
          secondary: '#E6FFFA',
          fieldLine: '#A7F3D0',
          label: 'TURF TRANSITION VELOCITY',
          pitchOverlay: (
            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 400 225" fill="none">
              <rect x="25" y="15" width="350" height="195" stroke="white" strokeWidth="1.5" />
              <line x1="200" y1="15" x2="200" y2="210" stroke="white" strokeWidth="1.5" />
              {/* D-Circle */}
              <path d="M 25 60 C 90 60, 90 165, 25 165" stroke="#34D399" strokeWidth="2" fill="none" />
              <path d="M 375 60 C 310 60, 310 165, 375 165" stroke="#34D399" strokeWidth="2" fill="none" />
            </svg>
          )
        };
      case 'Formula 1':
        return {
          gradient: 'from-[#1A1A1A] via-[#2A0808] to-[#991B1B]',
          accent: '#EF4444',
          secondary: '#FEF2F2',
          fieldLine: '#DC2626',
          label: 'TELEMETRY & DOWNFORCE SUCTION',
          pitchOverlay: (
            <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none" viewBox="0 0 400 225" fill="none">
              {/* Curving apex track geometry */}
              <path d="M 30 190 C 140 180, 180 50, 370 40" stroke="#EF4444" strokeWidth="3" />
              <path d="M 30 210 C 150 200, 190 70, 370 60" stroke="white" strokeWidth="1.5" strokeDasharray="6 4" />
              <circle cx="210" cy="115" r="6" fill="#EF4444" />
            </svg>
          )
        };
      case 'Tennis':
        return {
          gradient: 'from-[#0C4A6E] via-[#0284C7] to-[#0369A1]',
          accent: '#38BDF8',
          secondary: '#F0F9FF',
          fieldLine: '#BAE6FD',
          label: 'BASELINE RPM & VELOCITY',
          pitchOverlay: (
            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 400 225" fill="none">
              <rect x="40" y="25" width="320" height="175" stroke="white" strokeWidth="1.5" />
              <line x1="200" y1="25" x2="200" y2="200" stroke="#38BDF8" strokeWidth="2" />
              <line x1="40" y1="70" x2="360" y2="70" stroke="white" strokeWidth="1" />
              <line x1="40" y1="155" x2="360" y2="155" stroke="white" strokeWidth="1" />
            </svg>
          )
        };
      default:
        return {
          gradient: 'from-[#18181B] via-[#27272A] to-[#3F3F46]',
          accent: '#F43F5E',
          secondary: '#F4F4F5',
          fieldLine: '#71717A',
          label: 'HIGH-PRECISION REPLAY',
          pitchOverlay: (
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
      {/* Structural SVG Pitch & Tactical Vectors */}
      {theme.pitchOverlay}

      {/* Atmospheric lighting gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

      {/* Floodlight flare simulation */}
      <div
        className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ backgroundColor: theme.accent }}
      />

      {/* Content Metadata Bar on visual */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <span className="text-[10px] tracking-widest font-mono uppercase text-white/70">
          SPORTSPULSE · {theme.label}
        </span>
        <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-black/40 backdrop-blur-sm rounded text-white/80">
          EDITORIAL ARCHIVE
        </span>
      </div>

      {/* Bottom Title Deck inside visual */}
      <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
        <div className="flex items-center gap-2 mb-1">
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: theme.accent }}
          />
          <span className="text-[11px] font-medium tracking-wider uppercase text-white/90">
            {category} Longform Feature
          </span>
        </div>
        <p className="font-editorial text-sm sm:text-base md:text-lg text-white font-medium line-clamp-2 leading-snug drop-shadow-sm">
          {title}
        </p>
      </div>
    </div>
  );
};
