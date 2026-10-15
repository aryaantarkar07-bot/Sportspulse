import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { Article } from '../types';
import { SportsArtwork } from './SportsArtwork';
import { getArticleUrl } from '../utils/router';

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
          {displayArticles.map((article) => {
            const articleUrl = getArticleUrl(article.category, article.slug);
            return (
              <article
                key={article.id}
                className="group flex flex-col justify-between"
              >
                <div>
                  {/* [IMAGE] */}
                  <a
                    href={articleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                        e.preventDefault();
                        onSelectArticle(article);
                      }
                    }}
                    title={`Read story: ${article.title} (Click to read, Ctrl/Cmd+Click for new tab)`}
                    aria-label={`Read story: ${article.title}`}
                    className="block rounded-xl overflow-hidden border border-stone-200 shadow-xs mb-4 cursor-pointer"
                  >
                    <SportsArtwork
                      category={article.category}
                      title={article.title}
                      personality={article.featuredPersonality}
                      aspectRatio="16/9"
                      className="w-full h-auto group-hover:scale-102 transition-transform duration-300"
                    />
                    <span className="sr-only">Read story: {article.title}</span>
                  </a>

                  {/* Category kicker */}
                  <div className="text-[11px] font-extrabold uppercase tracking-widest text-rose-600 mb-1.5 font-sans">
                    {article.categoryEmoji} {article.category}
                  </div>

                  {/* Headline with Semantic Link */}
                  <h3 className="mb-2">
                    <a
                      href={articleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                          e.preventDefault();
                          onSelectArticle(article);
                        }
                      }}
                      title={`Read story: ${article.title} (Click to read, Ctrl/Cmd+Click for new tab)`}
                      className="font-editorial text-xl sm:text-2xl font-bold text-stone-950 group-hover:text-rose-600 transition-colors leading-snug text-balance no-underline block"
                    >
                      {article.title}
                    </a>
                  </h3>

                  {/* Subtitle / Excerpt */}
                  <p className="font-body text-sm text-stone-600 line-clamp-3 leading-relaxed mb-4">
                    {article.subtitle}
                  </p>
                </div>

                {/* Byline & read time with explicit anchor text */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-400">
                  <span>By {article.author}</span>
                  <a
                    href={articleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                        e.preventDefault();
                        onSelectArticle(article);
                      }
                    }}
                    title={`Read Story: ${article.title} in a new tab`}
                    className="text-stone-900 group-hover:text-rose-600 font-semibold no-underline flex items-center gap-1"
                  >
                    <span>Read Story</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
