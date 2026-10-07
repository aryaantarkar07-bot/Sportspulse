import React, { useState } from 'react';
import { ArrowRight, Check, ShieldCheck, Mail } from 'lucide-react';
import { SportCategory } from '../types';
import { SPORT_CATEGORIES } from '../data/sportsData';

interface FooterProps {
  onSelectCategory: (cat: SportCategory | 'ALL') => void;
  onOpenArchitectureModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onOpenArchitectureModal }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-white border-t border-stone-200 text-stone-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top: Masthead & Tagline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-12 border-b border-stone-200 gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter uppercase font-sans text-stone-950 mb-2">
              SPORTSPULSE
            </h2>
            <p className="font-mono text-xs sm:text-sm tracking-widest text-stone-500 uppercase">
              EVERY SPORT. EVERY STORY. EVERY DAY.
            </p>
          </div>

          {/* Daily Dispatch Newsletter Subscription */}
          <div className="w-full max-w-md">
            <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-rose-600 font-sans">
              <Mail className="w-3.5 h-3.5" />
              <span>Daily Longform Dispatch</span>
            </div>
            <p className="text-xs text-stone-500 mb-3 font-sans">
              One deep-dive sports story delivered to your inbox every morning at 07:00 AM. No clickbait, no spam.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>You are subscribed to the SportsPulse morning magazine dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:border-stone-900 text-stone-900"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-stone-900 hover:bg-rose-600 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Middle: Sports Directory & Desks */}
        <div className="py-12 border-b border-stone-200">
          <div className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-6 font-mono">
            COVERAGE DIRECTORY & SPORTS DESKS
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-4 gap-x-6 text-xs">
            {SPORT_CATEGORIES.map((cat) => (
              <button
                key={cat.name}
                onClick={() => onSelectCategory(cat.name)}
                className="flex items-center gap-2 text-left text-stone-600 hover:text-rose-600 transition-colors py-1 group cursor-pointer"
              >
                <span>{cat.emoji}</span>
                <span className="font-semibold group-hover:underline">{cat.name}</span>
              </button>
            ))}
            <button
              onClick={() => onSelectCategory('ALL')}
              className="flex items-center gap-2 text-left text-rose-600 hover:text-rose-700 transition-colors py-1 font-bold group cursor-pointer"
            >
              <span>🌐</span>
              <span className="underline">All Archives</span>
            </button>
          </div>
        </div>

        {/* Bottom: Editorial Standards, Architecture Info & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-mono">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-stone-700 font-semibold">SPORTSPULSE PUBLISHING</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <button
              onClick={onOpenArchitectureModal}
              className="text-stone-600 hover:text-stone-900 underline decoration-dotted"
            >
              Version 1 & 2 Technical Specs
            </button>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Independent Editorial Desk</span>
          </div>

          <div className="text-center md:text-right text-[11px] text-stone-400">
            © 2026 SportsPulse Media. Clean + Premium + Editorial + Modern.
          </div>
        </div>
      </div>
    </footer>
  );
};
