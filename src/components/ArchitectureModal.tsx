import React, { useState } from 'react';
import { X, Check, Copy, Code, Layers, Cpu, Globe } from 'lucide-react';
import { ARTICLES } from '../data/sportsData';

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ isOpen, onClose }) => {
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const sampleArticle = ARTICLES[0];

  if (!isOpen) return null;

  const staticHtmlTemplate = `<!-- SPORTSPULSE MAGAZINE ARTICLE TEMPLATE (Version 1 Static HTML) -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${sampleArticle.title} — SportsPulse</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body class="editorial-body">
  <header class="masthead">
    <div class="brand">SPORTSPULSE</div>
    <div class="tagline">EVERY SPORT. EVERY STORY. EVERY DAY.</div>
  </header>

  <article class="magazine-article">
    <div class="kicker">${sampleArticle.category} • FEATURED STORY</div>
    <h1 class="headline">${sampleArticle.title}</h1>
    <p class="deck">${sampleArticle.subtitle}</p>
    <div class="byline">By ${sampleArticle.author} • ${sampleArticle.date} • ${sampleArticle.readTime}</div>

    <figure class="hero-image">
      <img src="images/cricket-hero.jpg" alt="${sampleArticle.title}">
      <figcaption>${sampleArticle.heroCaption}</figcaption>
    </figure>

    <div class="key-takeaways">
      <h3>Key Takeaways</h3>
      <ul>
        ${sampleArticle.keyTakeaways.map(k => `<li>${k}</li>`).join('\n        ')}
      </ul>
    </div>

    <div class="prose">
      <p class="drop-cap">${sampleArticle.sections[0]?.paragraphs?.[0] ?? ''}</p>
      <h2>The Changing Landscape</h2>
      <p>${sampleArticle.sections[1]?.paragraphs?.[0] ?? ''}</p>
    </div>
  </article>
</body>
</html>`;

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(staticHtmlTemplate);
      setCopiedSnippet(true);
      setTimeout(() => setCopiedSnippet(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-3xl border border-stone-200 shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="p-6 border-b border-stone-200 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-rose-600 font-bold mb-1">
              SYSTEM ARCHITECTURE
            </div>
            <h3 className="font-editorial text-2xl font-bold text-stone-900">
              Publishing Roadmap: Version 1 & Version 2
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-stone-400 hover:text-stone-900"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6 text-sm text-stone-700">
          {/* Two-Stage Blueprint */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border border-stone-200 bg-stone-50">
              <div className="flex items-center gap-2 text-stone-900 font-bold text-base mb-2">
                <Globe className="w-4 h-4 text-emerald-600" />
                <span>Version 1 — Static Website</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed mb-3">
                Articles are structured as clean, self-contained semantic HTML pages. You can manually author, update, and host them directly on GitHub Pages, Netlify, or Vercel with zero database overhead.
              </p>
              <div className="text-[11px] font-mono bg-white p-2.5 rounded border border-stone-200 text-stone-600">
                HTML5 + Vanilla CSS + Minimal JS
              </div>
            </div>

            <div className="p-5 rounded-xl border border-stone-200 bg-stone-50">
              <div className="flex items-center gap-2 text-stone-900 font-bold text-base mb-2">
                <Cpu className="w-4 h-4 text-rose-600" />
                <span>Version 2 — Automated Pipeline</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed mb-3">
                Connect external sports feeds, RSS, and headless CMS directly to an automated static site generator (SSG). Articles compile daily and deploy automatically to the CDN edge.
              </p>
              <div className="text-[11px] font-mono bg-white p-2.5 rounded border border-stone-200 text-stone-600">
                APIs/CMS → Daily Data → SSG Build → Static Host
              </div>
            </div>
          </div>

          {/* Pipeline Diagram */}
          <div className="p-5 bg-stone-900 text-white rounded-xl font-mono text-xs overflow-x-auto">
            <div className="text-stone-400 mb-2 font-bold uppercase tracking-wider text-[10px]">
              DATA PIPELINE SPECIFICATION
            </div>
            <pre className="text-emerald-400 leading-relaxed">
{`Sports APIs / CMS (Cricinfo / Opta / FIH / PKL)
       ↓
Daily Sports Data & Tactical Transcripts
       ↓
Article / Content Pipeline (Magazine Format)
       ↓
Semantic HTML5 + Vanilla CSS Pages
       ↓
Static Hosting (GitHub Pages / Netlify / Vercel)`}
            </pre>
          </div>

          {/* Sample Static Template */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-900 font-sans">
                Sample Static HTML Article Blueprint
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded transition-colors"
              >
                {copiedSnippet ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Static HTML Template</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-4 bg-stone-100 rounded-lg text-xs font-mono text-stone-800 overflow-x-auto max-h-48 border border-stone-200">
              {staticHtmlTemplate}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-stone-900 text-white text-xs font-semibold rounded-lg hover:bg-stone-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
