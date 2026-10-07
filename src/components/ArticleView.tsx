import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Bookmark,
  Share2,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Check,
  Clock,
  Calendar,
  User,
  ExternalLink,
  ChevronRight,
  Maximize2,
  Sliders,
  Type
} from 'lucide-react';
import { Article } from '../types';
import { ARTICLES } from '../data/sportsData';
import { SportsArtwork } from './SportsArtwork';

interface ArticleViewProps {
  article: Article;
  onBack: () => void;
  onSelectArticle: (article: Article) => void;
  isBookmarked: boolean;
  onToggleBookmark: (article: Article) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  onBack,
  onSelectArticle,
  isBookmarked,
  onToggleBookmark,
}) => {
  // Reading enhancements
  const [scrollProgress, setScrollProgress] = useState(0);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [copiedShare, setCopiedShare] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioSeconds, setAudioSeconds] = useState(0);

  // Video player interactive state
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const [videoProgress, setVideoProgress] = useState(24);

  // Track scroll depth
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article.id]);

  // Audio dispatch simulation timer
  useEffect(() => {
    let interval: any = null;
    if (isPlayingAudio) {
      interval = setInterval(() => {
        setAudioSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlayingAudio]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  const formatAudioTime = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const remainingSecs = sec % 60;
    return `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
  };

  const getFontSizeClasses = () => {
    switch (fontSize) {
      case 'large':
        return 'text-lg md:text-xl leading-relaxed md:leading-loose';
      case 'xlarge':
        return 'text-xl md:text-2xl leading-loose';
      default:
        return 'text-base md:text-lg leading-relaxed md:leading-relaxed';
    }
  };

  // Related articles from same or similar category
  const relatedArticles = ARTICLES.filter(
    (a) => a.id !== article.id && a.category === article.category
  ).slice(0, 3);

  const fallbackRelated = ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);
  const displayRelated = relatedArticles.length > 0 ? relatedArticles : fallbackRelated;

  return (
    <article className="min-h-screen bg-white text-stone-900 pb-24">
      {/* Scroll Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-stone-100 z-50">
        <div
          className="h-full bg-rose-600 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Article Sticky Action Navigation */}
      <div className="sticky top-[108px] z-30 bg-white/95 backdrop-blur-md border-b border-stone-200 py-2.5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Stories</span>
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Audio Listen Dispatch */}
            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                isPlayingAudio
                  ? 'bg-rose-50 text-rose-700 border border-rose-200'
                  : 'text-stone-600 hover:bg-stone-100 border border-transparent'
              }`}
              title="Listen to audio narration"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">
                {isPlayingAudio ? `Playing (${formatAudioTime(audioSeconds)})` : 'Listen (12 min)'}
              </span>
            </button>

            {/* Font Sizer */}
            <div className="flex items-center border border-stone-200 rounded p-0.5 text-xs">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-0.5 rounded font-mono ${fontSize === 'normal' ? 'bg-stone-900 text-white' : 'text-stone-600'}`}
                title="Default font size"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-0.5 rounded font-mono font-medium ${fontSize === 'large' ? 'bg-stone-900 text-white' : 'text-stone-600'}`}
                title="Larger font size"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-2 py-0.5 rounded font-mono font-bold ${fontSize === 'xlarge' ? 'bg-stone-900 text-white' : 'text-stone-600'}`}
                title="Extra large font size"
              >
                A++
              </button>
            </div>

            {/* Bookmark button */}
            <button
              onClick={() => onToggleBookmark(article)}
              className={`p-1.5 rounded transition-colors ${
                isBookmarked
                  ? 'bg-rose-600 text-white'
                  : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
              }`}
              title={isBookmarked ? 'Saved to reading list' : 'Save story'}
              aria-label="Bookmark article"
            >
              <Bookmark className="w-4 h-4 fill-current" />
            </button>

            {/* Share button */}
            <button
              onClick={handleShare}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded transition-colors"
              title="Share story"
              aria-label="Share article"
            >
              {copiedShare ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Share</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Magazine Header Container */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-8">
        {/* Category Kicker */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-rose-600">
            {article.categoryEmoji} {article.category}
          </span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span className="text-xs uppercase tracking-wider text-stone-500 font-mono">
            MAGAZINE FEATURE
          </span>
        </div>

        {/* Article Headline */}
        <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-stone-950 leading-[1.12] mb-6 text-balance">
          {article.title}
        </h1>

        {/* Deck / Subtitle */}
        <p className="font-body text-lg sm:text-xl md:text-2xl text-stone-600 leading-relaxed font-normal mb-8 max-w-3xl">
          {article.subtitle}
        </p>

        {/* Byline & Metadata Bar */}
        <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold text-xs uppercase font-sans">
              {article.author.slice(0, 2)}
            </div>
            <div>
              <div className="font-semibold text-stone-900 text-sm">
                By {article.author}
              </div>
              <div className="text-[11px] text-stone-500 font-mono">
                {article.authorRole}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-stone-400" />
              <span>{article.date}</span>
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-stone-400" />
              <span>{article.readTime}</span>
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-stone-600 font-medium">
              {article.wordCount.toLocaleString()} words
            </span>
          </div>
        </div>
      </header>

      {/* Large Hero Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-12">
        <div className="rounded-xl overflow-hidden border border-stone-200 shadow-sm">
          <SportsArtwork
            category={article.category}
            title={article.title}
            aspectRatio="16/9"
            className="w-full h-auto max-h-[580px]"
            priority
          />
        </div>
        <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-stone-500 gap-1 px-1">
          <span className="italic font-serif">{article.heroCaption}</span>
          <span className="font-mono text-[11px] text-stone-400 uppercase shrink-0">
            {article.heroCredit}
          </span>
        </div>
      </div>

      {/* Reading Column Container */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Key Takeaways Callout Box */}
        {article.keyTakeaways && article.keyTakeaways.length > 0 && (
          <section
            aria-label="Key Takeaways"
            className="mb-12 p-6 sm:p-7 bg-stone-50/90 rounded-xl border border-stone-200"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-sm bg-rose-600" />
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-stone-900 font-sans">
                Key Takeaways
              </h2>
            </div>
            <ul className="space-y-3 font-sans text-sm text-stone-700">
              {article.keyTakeaways.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-rose-600 font-bold text-base leading-none select-none">•</span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Article Sections Prose */}
        <div className="space-y-12">
          {article.sections.map((sec, secIdx) => (
            <section key={secIdx} className="space-y-6">
              {/* Heading */}
              {sec.heading && (
                <div className="pt-4">
                  {sec.level === 'h3' ? (
                    <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight leading-snug">
                      {sec.heading}
                    </h3>
                  ) : (
                    <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-tight">
                      {sec.heading}
                    </h2>
                  )}
                </div>
              )}

              {/* Prose Paragraphs */}
              {sec.paragraphs.map((para, paraIdx) => (
                <p
                  key={paraIdx}
                  className={`font-body text-stone-800 ${getFontSizeClasses()} ${
                    secIdx === 0 && paraIdx === 0 ? 'editorial-drop-cap' : ''
                  }`}
                >
                  {para}
                </p>
              ))}

              {/* Statistical Data Table */}
              {sec.statsTable && (
                <div className="my-8 rounded-xl border border-stone-200 overflow-hidden bg-white shadow-xs">
                  <div className="bg-stone-100/80 px-4 py-3 border-b border-stone-200">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 font-sans">
                      {sec.statsTable.title}
                    </h4>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs font-sans">
                      <thead>
                        <tr className="border-b border-stone-200 bg-stone-50/50">
                          {sec.statsTable.columns.map((col, colIdx) => (
                            <th
                              key={colIdx}
                              className={`p-3 font-semibold uppercase tracking-wider text-stone-600 ${
                                colIdx > 0 ? 'text-right font-mono' : ''
                              }`}
                            >
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100">
                        {sec.statsTable.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-stone-50/80 transition-colors">
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`p-3 text-stone-800 ${
                                  cIdx === 0
                                    ? 'font-medium'
                                    : 'text-right font-mono tabular-nums text-stone-700'
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {sec.statsTable.footnote && (
                    <div className="px-4 py-2.5 bg-stone-50/60 border-t border-stone-200 text-[11px] text-stone-500 font-mono">
                      {sec.statsTable.footnote}
                    </div>
                  )}
                </div>
              )}

              {/* Supporting Graphic / Image */}
              {sec.image && (
                <div className="my-8">
                  <div className="rounded-xl overflow-hidden border border-stone-200 shadow-xs">
                    <SportsArtwork
                      category={article.category}
                      title={sec.image.caption}
                      aspectRatio="16/9"
                      className="w-full max-h-[420px]"
                    />
                  </div>
                  <div className="mt-2.5 flex items-center justify-between text-xs text-stone-500 px-1">
                    <span className="italic font-serif">{sec.image.caption}</span>
                    <span className="font-mono text-[10px] uppercase text-stone-400">
                      {sec.image.credit}
                    </span>
                  </div>
                </div>
              )}

              {/* Pull Quote */}
              {sec.pullQuote && (
                <figure className="my-10 py-6 px-6 sm:px-8 border-l-4 border-rose-600 bg-stone-50/70 rounded-r-xl">
                  <blockquote className="font-editorial italic text-xl sm:text-2xl md:text-3xl text-stone-900 leading-snug">
                    “{sec.pullQuote.text}”
                  </blockquote>
                  {sec.pullQuote.attribution && (
                    <figcaption className="mt-3 text-xs uppercase tracking-wider font-semibold font-sans text-rose-700">
                      — {sec.pullQuote.attribution}
                    </figcaption>
                  )}
                </figure>
              )}

              {/* Player Profiles Cards */}
              {sec.playerProfiles && sec.playerProfiles.length > 0 && (
                <div className="my-8 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 font-sans">
                    Profiles of the Generation
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {sec.playerProfiles.map((p, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-4 rounded-xl border border-stone-200 bg-white hover:border-stone-400 transition-all shadow-xs flex flex-col justify-between"
                      >
                        <div>
                          <div className="text-[11px] uppercase tracking-wider font-mono text-rose-600 font-semibold mb-1">
                            {p.role}
                          </div>
                          <h5 className="font-editorial text-lg font-bold text-stone-950 mb-1">
                            {p.name}
                          </h5>
                          <div className="text-xs text-stone-500 font-sans mb-3">
                            {p.team}
                          </div>
                          <p className="text-xs text-stone-600 leading-relaxed font-sans mb-3">
                            {p.bio}
                          </p>
                        </div>
                        <div className="pt-2 border-t border-stone-100 text-[11px] font-mono text-stone-700 bg-stone-50 p-2 rounded">
                          {p.stats}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Interactive Video Breakdown Reel */}
              {sec.video && (
                <div className="my-10 rounded-xl overflow-hidden border border-stone-200 bg-stone-950 text-white shadow-lg">
                  <div className="relative aspect-video bg-stone-900 flex items-center justify-center overflow-hidden">
                    {/* Simulated High-Res Video Canvas */}
                    <SportsArtwork
                      category={article.category}
                      title={sec.video.title}
                      aspectRatio="16/9"
                      className="absolute inset-0 opacity-75"
                    />

                    {/* Dark gradient for controls */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />

                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                      <span className="px-2.5 py-1 bg-rose-600 text-white text-[10px] font-bold font-mono tracking-wider rounded">
                        {sec.video.previewBadge || 'VIDEO REEL'}
                      </span>
                      <span className="text-xs font-mono text-white/80">
                        {sec.video.duration}
                      </span>
                    </div>

                    {/* Centered Play Button */}
                    <button
                      onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                      className="relative z-10 w-16 h-16 rounded-full bg-white/95 text-stone-900 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-2xl group cursor-pointer"
                      aria-label={isVideoPlaying ? 'Pause breakdown reel' : 'Play breakdown reel'}
                    >
                      {isVideoPlaying ? (
                        <Pause className="w-7 h-7 text-rose-600 fill-current" />
                      ) : (
                        <Play className="w-7 h-7 text-rose-600 fill-current ml-1" />
                      )}
                    </button>

                    {/* Bottom Controls Bar */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                      <div className="w-full bg-white/20 h-1 rounded-full mb-3 overflow-hidden cursor-pointer">
                        <div
                          className="bg-rose-600 h-full transition-all duration-300"
                          style={{ width: `${isVideoPlaying ? 58 : videoProgress}%` }}
                        />
                      </div>
                      <div className="flex items-center justify-between text-xs text-white/90">
                        <div className="font-semibold text-sm truncate max-w-md">
                          {sec.video.title}
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setIsVideoMuted(!isVideoMuted)}
                            className="p-1 text-white/80 hover:text-white"
                          >
                            {isVideoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                          </button>
                          <span className="font-mono text-xs text-white/70">
                            {isVideoPlaying ? '01:42' : '00:00'} / {sec.video.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-stone-900 border-t border-stone-800 text-xs text-stone-300 flex items-start gap-2">
                    <span className="font-bold text-rose-400 uppercase text-[10px] tracking-wider mt-0.5 font-mono">
                      VIDEO ANALYSIS:
                    </span>
                    <span className="font-sans leading-relaxed">{sec.video.caption}</span>
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-14 pt-8 border-t border-stone-200">
          <div className="text-xs uppercase font-bold tracking-wider text-stone-400 mb-3 font-mono">
            Article Topics & Coverage
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Editorial Disclosure & Author Card */}
        <div className="mt-10 p-6 bg-stone-50 rounded-xl border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold text-sm uppercase">
              {article.author.slice(0, 2)}
            </div>
            <div>
              <div className="font-bold text-stone-900 text-sm">
                Written by {article.author}
              </div>
              <div className="text-xs text-stone-500 font-sans">
                {article.authorRole} · SportsPulse Bureau
              </div>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[11px] font-mono text-stone-400 block">
              PUBLISHED OCTOBER 2026
            </span>
            <span className="text-xs font-semibold text-rose-600">
              Verified Editorial Standard
            </span>
          </div>
        </div>
      </div>

      {/* MORE FROM [SPORT] Section */}
      <section className="mt-20 pt-14 border-t border-stone-200 bg-stone-50/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-baseline justify-between mb-8 pb-3 border-b border-stone-200">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-1">
                CONTINUE READING
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold uppercase tracking-tight text-stone-950">
                MORE FROM {article.category}
              </h2>
            </div>
            <button
              onClick={onBack}
              className="text-xs font-bold uppercase tracking-wider text-rose-600 hover:text-rose-700 flex items-center gap-1"
            >
              <span>View All</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayRelated.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onSelectArticle(rel)}
                className="group cursor-pointer bg-white rounded-xl border border-stone-200 overflow-hidden hover:border-stone-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden">
                    <SportsArtwork
                      category={rel.category}
                      title={rel.title}
                      aspectRatio="16/9"
                      className="w-full h-full group-hover:scale-102 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-rose-600 mb-1.5 font-sans">
                      {rel.category}
                    </div>
                    <h3 className="font-editorial text-lg font-bold text-stone-900 group-hover:text-rose-600 transition-colors leading-snug line-clamp-2 mb-2">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {rel.subtitle}
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-400">
                  <span>{rel.readTime}</span>
                  <span className="text-rose-600 font-semibold group-hover:translate-x-0.5 transition-transform">
                    Read →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};
