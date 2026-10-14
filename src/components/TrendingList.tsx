import React from 'react';
import { Flame, Clock, ArrowRight } from 'lucide-react';
import { Article } from '../types';
import { getArticleUrl } from '../utils/router';

interface TrendingListProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export const TrendingList: React.FC<TrendingListProps> = ({ articles, onSelectArticle }) => {
  return (
    <section className="py-14 border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-baseline justify-between mb-8 pb-3 border-b border-stone-200">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-rose-600" />
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-stone-900 font-sans">
              TRENDING
            </h2>
          </div>
          <span className="text-xs font-mono text-stone-400">MOST READ THIS WEEK</span>
        </div>

        {/* Numbered Editorial List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article, idx) => {
            const rank = String(idx + 1).padStart(2, '0');
            const articleUrl = getArticleUrl(article.category, article.slug);
            return (
              <div
                key={article.id}
                className="group p-6 rounded-2xl border border-stone-200 hover:border-stone-400 hover:shadow-sm bg-white transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top: Editorial Number + Category */}
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="font-editorial text-4xl sm:text-5xl font-bold text-stone-300 group-hover:text-rose-600 transition-colors select-none">
                      {rank}
                    </span>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-rose-600 font-sans">
                      {article.categoryEmoji} {article.category}
                    </span>
                  </div>

                  {/* Headline with Semantic Link */}
                  <h3 className="mb-3">
                    <a
                      href={articleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Read story: ${article.title} in a new tab`}
                      className="font-editorial text-xl sm:text-2xl font-bold text-stone-950 group-hover:text-rose-600 transition-colors leading-snug no-underline block"
                    >
                      {article.title}
                    </a>
                  </h3>

                  {/* Subtitle */}
                  <p className="font-body text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed mb-4">
                    {article.subtitle}
                  </p>
                </div>

                {/* Footer metadata with explicit anchor link */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-400">
                  <span className="text-stone-500 font-medium">By {article.author}</span>
                  <a
                    href={articleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Read Dispatch: ${article.title} in a new tab`}
                    className="text-rose-600 font-semibold group-hover:translate-x-0.5 transition-transform no-underline flex items-center gap-1"
                  >
                    <span>Read Dispatch</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
