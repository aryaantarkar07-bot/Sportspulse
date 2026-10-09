import React from 'react';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { Article } from '../types';
import { SportsArtwork } from './SportsArtwork';

interface FeaturedHeroProps {
  article: Article;
  onSelectArticle: (article: Article) => void;
}

export const FeaturedHero: React.FC<FeaturedHeroProps> = ({ article, onSelectArticle }) => {
  return (
    <section className="border-b border-stone-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-14 text-center">
        {/* Large Hero Image */}
        <div
          onClick={() => onSelectArticle(article)}
          className="group cursor-pointer rounded-2xl overflow-hidden border border-stone-200 shadow-sm mb-8 transition-all hover:border-stone-400 hover:shadow-lg"
        >
          <SportsArtwork
            category={article.category}
            title={article.title}
            variant={article.heroVariant || 'hero'}
            personality={article.featuredPersonality}
            aspectRatio="16/9"
            className="w-full max-h-[580px] group-hover:scale-101 transition-transform duration-500"
            priority
          />
        </div>

        {/* Category & Featured Badge */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-rose-600 font-sans">
            {article.category}
          </span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span className="text-xs uppercase tracking-widest text-stone-500 font-mono">
            FEATURED STORY
          </span>
        </div>

        {/* Main Headline */}
        <h1
          onClick={() => onSelectArticle(article)}
          className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-stone-950 max-w-4xl mx-auto leading-[1.14] mb-4 hover:text-rose-600 transition-colors cursor-pointer text-balance"
        >
          {article.title}
        </h1>

        {/* Excerpt / Deck */}
        <p className="font-body text-base sm:text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed mb-6 font-normal">
          {article.subtitle}
        </p>

        {/* Byline and Read Time */}
        <div className="flex items-center justify-center gap-4 text-xs font-mono text-stone-400 mb-8">
          <span>By {article.author}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-stone-400" />
            <span>{article.readTime}</span>
          </span>
          <span aria-hidden="true">·</span>
          <span>{article.wordCount.toLocaleString()} words</span>
        </div>

        {/* CTA Button */}
        <div>
          <button
            onClick={() => onSelectArticle(article)}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-stone-900 hover:bg-rose-600 text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg transition-all duration-200 shadow-sm hover:shadow group cursor-pointer"
          >
            <span>READ THE STORY</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
