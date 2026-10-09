import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { Article } from '../types';
import { SportsArtwork } from './SportsArtwork';

interface LatestStoriesProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export const LatestStories: React.FC<LatestStoriesProps> = ({ articles, onSelectArticle }) => {
  // Take top 3 for the primary latest row as depicted in the ASCII diagram
  const displayArticles = articles.slice(0, 3);

  return (
    <section className="py-12 border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-baseline justify-between mb-8 pb-3 border-b border-stone-200">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-stone-400 block mb-1">
              DISPATCHES FROM THE DESK
            </span>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-stone-900 font-sans">
              LATEST STORIES
            </h2>
          </div>
          <span className="text-xs font-mono text-stone-400">UPDATED DAILY</span>
        </div>

        {/* 3-Column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {displayArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* [IMAGE] */}
                <div className="rounded-xl overflow-hidden border border-stone-200 shadow-xs mb-4">
                  <SportsArtwork
                    category={article.category}
                    title={article.title}
                    personality={article.featuredPersonality}
                    aspectRatio="16/9"
                    className="w-full h-auto group-hover:scale-102 transition-transform duration-300"
                  />
                </div>

                {/* Category kicker */}
                <div className="text-[11px] font-extrabold uppercase tracking-widest text-rose-600 mb-1.5 font-sans">
                  {article.categoryEmoji} {article.category}
                </div>

                {/* Headline */}
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-stone-950 group-hover:text-rose-600 transition-colors leading-snug mb-2 text-balance">
                  {article.title}
                </h3>

                {/* Subtitle / Excerpt */}
                <p className="font-body text-sm text-stone-600 line-clamp-3 leading-relaxed mb-4">
                  {article.subtitle}
                </p>
              </div>

              {/* Byline & read time */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-400">
                <span>By {article.author}</span>
                <span className="flex items-center gap-1 text-stone-500 font-medium">
                  <Clock className="w-3 h-3 text-stone-400" />
                  <span>{article.readTime}</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
