/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  ARTICLES,
  LATEST_STORIES,
  TRENDING_STORIES,
  CRICKET_ARTICLES,
  FOOTBALL_ARTICLES,
  KABADDI_ARTICLES,
  HOCKEY_ARTICLES,
} from './data/sportsData';
import { Article, SportCategory } from './types';
import { Header } from './components/Header';
import { FeaturedHero } from './components/FeaturedHero';
import { LatestStories } from './components/LatestStories';
import { SportSection } from './components/SportSection';
import { KabaddiFeature } from './components/KabaddiFeature';
import { TrendingList } from './components/TrendingList';
import { ArticleView } from './components/ArticleView';
import { CategoryHub } from './components/CategoryHub';
import { SearchModal } from './components/SearchModal';
import { SavedModal } from './components/SavedModal';
import { ArchitectureModal } from './components/ArchitectureModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<SportCategory | 'ALL'>('ALL');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [savedModalOpen, setSavedModalOpen] = useState(false);
  const [architectureOpen, setArchitectureOpen] = useState(false);

  // Persistent reading list in localStorage
  const [savedArticleIds, setSavedArticleIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('sportspulse_saved_ids');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('sportspulse_saved_ids', JSON.stringify(savedArticleIds));
    } catch {
      // ignore in restrictive iframe storage environments
    }
  }, [savedArticleIds]);

  const toggleBookmark = (art: Article) => {
    setSavedArticleIds((prev) =>
      prev.includes(art.id) ? prev.filter((id) => id !== art.id) : [...prev, art.id]
    );
  };

  const clearAllBookmarks = () => {
    setSavedArticleIds([]);
  };

  const savedArticles = ARTICLES.filter((a) => savedArticleIds.includes(a.id));

  // The featured centerpiece article
  const featuredArticle = ARTICLES.find((a) => a.isFeatured) || ARTICLES[0];

  // Cricket section: Large article + 2 side articles
  const cricketLarge = CRICKET_ARTICLES[0] || ARTICLES[0];
  const cricketSides = [
    {
      ...ARTICLES[6], // Badminton or other fast-paced article
      id: 'cricket-tactical-pace-depth',
      category: 'Cricket' as SportCategory,
      title: "The Reverse-Swing Renaissance: Why Low Arm Release Angles Confound Red-Ball Openers",
      subtitle: "Sensory tracking of seam orientation and atmospheric pressure on fifth-day subcontinental wickets.",
      readTime: '8 min read',
    },
    {
      ...ARTICLES[7],
      id: 'cricket-powerplay-strike-rates',
      category: 'Cricket' as SportCategory,
      title: "The Math of the Short Boundary: How Ground Dimensions Dictate Bowler Matchups",
      subtitle: "Analytical models proving why left-arm orthodox spinners thrive when targeting the longer 74m boundary.",
      readTime: '7 min read',
    }
  ];

  // Football section: Large article + 2 side articles
  const footballLarge = FOOTBALL_ARTICLES[0] || ARTICLES[1];
  const footballSides = [
    {
      ...ARTICLES[4],
      id: 'football-pressing-matrices',
      category: 'Football' as SportCategory,
      title: "The High-Press Transition: Why Counter-Pressing Requires 6-Second Regains",
      subtitle: "Statistical examination of tactical fouls, space denial, and defensive recoveries in the modern box midfield.",
      readTime: '9 min read',
    },
    {
      ...ARTICLES[8],
      id: 'football-goalkeeper-playmaking',
      category: 'Football' as SportCategory,
      title: "The Sweeper-Keeper Index: How Long-Range Distribution Unlocks Deep Blocks",
      subtitle: "Passing maps showing how elite goalkeepers create numerical superiorities in the first third.",
      readTime: '8 min read',
    }
  ];

  // Kabaddi section lead
  const kabaddiLead = KABADDI_ARTICLES[0] || ARTICLES[2];

  // Category specific articles
  const categoryArticles =
    activeCategory === 'ALL'
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === activeCategory);

  const handleSelectArticle = (art: Article) => {
    setSelectedArticle(art);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleNavigateHome = () => {
    setSelectedArticle(null);
    setActiveCategory('ALL');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 flex flex-col font-sans">
      {/* Universal Top Navigation Header */}
      <Header
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setSelectedArticle(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenBookmarks={() => setSavedModalOpen(true)}
        savedCount={savedArticleIds.length}
        onNavigateHome={handleNavigateHome}
        onOpenArchitectureModal={() => setArchitectureOpen(true)}
      />

      {/* Main View Switcher */}
      <main className="flex-1">
        {selectedArticle ? (
          /* Magazine Longform Article Page */
          <ArticleView
            article={selectedArticle}
            onBack={() => {
              setSelectedArticle(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectArticle={handleSelectArticle}
            isBookmarked={savedArticleIds.includes(selectedArticle.id)}
            onToggleBookmark={toggleBookmark}
          />
        ) : activeCategory !== 'ALL' ? (
          /* Category Specific Hub View */
          <CategoryHub
            category={activeCategory}
            articles={categoryArticles}
            onSelectArticle={handleSelectArticle}
            onBackToHome={handleNavigateHome}
          />
        ) : (
          /* Homepage Layout Matching Exact User ASCII Specifications */
          <div>
            {/* 1. FEATURED STORY (Large Image, Headline, Deck, CTA) */}
            <FeaturedHero
              article={featuredArticle}
              onSelectArticle={handleSelectArticle}
            />

            {/* 2. LATEST STORIES (3-Column Grid) */}
            <LatestStories
              articles={LATEST_STORIES}
              onSelectArticle={handleSelectArticle}
            />

            {/* 3. CRICKET SECTION (Large Article + 2 Side Articles) */}
            <SportSection
              sport="Cricket"
              emoji="🏏"
              largeArticle={cricketLarge}
              sideArticles={cricketSides}
              onSelectArticle={handleSelectArticle}
              onViewCategory={(cat) => {
                setActiveCategory(cat);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 4. FOOTBALL SECTION (Large Article + 2 Side Articles) */}
            <SportSection
              sport="Football"
              emoji="⚽"
              largeArticle={footballLarge}
              sideArticles={footballSides}
              onSelectArticle={handleSelectArticle}
              onViewCategory={(cat) => {
                setActiveCategory(cat);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 5. KABADDI SECTION (Articles + Images + Video) */}
            <KabaddiFeature
              article={kabaddiLead}
              onSelectArticle={handleSelectArticle}
            />

            {/* 6. TRENDING SECTION (01, 02, 03...) */}
            <TrendingList
              articles={TRENDING_STORIES}
              onSelectArticle={handleSelectArticle}
            />
          </div>
        )}
      </main>

      {/* Global Editorial Footer */}
      <Footer
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setSelectedArticle(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenArchitectureModal={() => setArchitectureOpen(true)}
      />

      {/* Modals & Dialogs */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        articles={ARTICLES}
        onSelectArticle={handleSelectArticle}
      />

      <SavedModal
        isOpen={savedModalOpen}
        onClose={() => setSavedModalOpen(false)}
        savedArticles={savedArticles}
        onSelectArticle={handleSelectArticle}
        onRemoveBookmark={toggleBookmark}
        onClearAll={clearAllBookmarks}
      />

      <ArchitectureModal
        isOpen={architectureOpen}
        onClose={() => setArchitectureOpen(false)}
      />
    </div>
  );
}
