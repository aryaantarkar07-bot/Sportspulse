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
import {
  PLAYERS,
  getPlayersBySport,
  getPlayerBySlug,
} from './data/playersData';
import { Article, PlayerData, SportCategory } from './types';
import { Header } from './components/Header';
import { FeaturedHero } from './components/FeaturedHero';
import { LatestStories } from './components/LatestStories';
import { SportSection } from './components/SportSection';
import { KabaddiFeature } from './components/KabaddiFeature';
import { TrendingList } from './components/TrendingList';
import { ArticleView } from './components/ArticleView';
import { CategoryHub } from './components/CategoryHub';
import { PlayerProfileView } from './components/PlayerProfileView';
import { NotFoundPage } from './components/NotFoundPage';
import { SearchModal } from './components/SearchModal';
import { SavedModal } from './components/SavedModal';
import { ArchitectureModal } from './components/ArchitectureModal';
import { Footer } from './components/Footer';
import {
  parseCurrentRoute,
  navigateTo,
  getHomeUrl,
  getCategoryUrl,
  getArticleUrl,
  getPlayerUrl,
  getSportSlug,
} from './utils/router';
import {
  applySeo,
  getHomeSeo,
  getCategorySeo,
  getArticleSeo,
  getPlayerSeo,
  getNotFoundSeo,
} from './utils/seo';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<SportCategory | 'ALL'>('ALL');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedPlayer, setSelectedPlayer] = useState<PlayerData | null>(null);
  const [isNotFound, setIsNotFound] = useState(false);
  const [notFoundAttemptedPath, setNotFoundAttemptedPath] = useState<string | undefined>(undefined);
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

  // Synchronize component state with browser URL
  useEffect(() => {
    const handleLocationChange = () => {
      const route = parseCurrentRoute();

      if (route.type === 'home') {
        setIsNotFound(false);
        setNotFoundAttemptedPath(undefined);
        setSelectedArticle(null);
        setSelectedPlayer(null);
        setActiveCategory('ALL');
        applySeo(getHomeSeo());
      } else if (route.type === 'category') {
        setIsNotFound(false);
        setNotFoundAttemptedPath(undefined);
        setSelectedArticle(null);
        setSelectedPlayer(null);
        setActiveCategory(route.category);
        applySeo(getCategorySeo(route.category));
      } else if (route.type === 'article') {
        const art =
          ARTICLES.find((a) => a.slug === route.slug || a.id === route.slug) || null;
        if (art) {
          setIsNotFound(false);
          setNotFoundAttemptedPath(undefined);
          setSelectedArticle(art);
          setSelectedPlayer(null);
          setActiveCategory(art.category);
          applySeo(getArticleSeo(art));
        } else {
          setIsNotFound(true);
          setNotFoundAttemptedPath(window.location.pathname || route.slug);
          setSelectedArticle(null);
          setSelectedPlayer(null);
          applySeo(getNotFoundSeo(route.slug));
        }
      } else if (route.type === 'player') {
        const p = getPlayerBySlug(route.slug);
        if (p) {
          setIsNotFound(false);
          setNotFoundAttemptedPath(undefined);
          setSelectedPlayer(p);
          setSelectedArticle(null);
          setActiveCategory(p.sport);
          applySeo(getPlayerSeo(p));
        } else {
          setIsNotFound(true);
          setNotFoundAttemptedPath(window.location.pathname || route.slug);
          setSelectedPlayer(null);
          setSelectedArticle(null);
          applySeo(getNotFoundSeo(route.slug));
        }
      } else if (route.type === 'not-found') {
        setIsNotFound(true);
        setNotFoundAttemptedPath(route.attemptedPath || window.location.pathname);
        setSelectedArticle(null);
        setSelectedPlayer(null);
        applySeo(getNotFoundSeo(route.attemptedPath));
      }
    };

    // Initial route check on mount
    handleLocationChange();

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

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

  // Cricket section: Large article + 2 side articles + 5-6 Stars with Cricbuzz Dossiers
  const cricketLarge = CRICKET_ARTICLES[0] || ARTICLES[0];
  const cricketSides = [
    {
      ...ARTICLES[6],
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
  const cricketPlayers = getPlayersBySport('Cricket');

  // Football section: Large article + 2 side articles + 6 Stars
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
  const footballPlayers = getPlayersBySport('Football');

  // Kabaddi section lead
  const kabaddiLead = KABADDI_ARTICLES[0] || ARTICLES[2];

  // Category specific articles
  const categoryArticles =
    activeCategory === 'ALL'
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === activeCategory);

  // Navigation handlers that update clean semantic URLs
  const handleSelectArticle = (art: Article) => {
    setIsNotFound(false);
    setSelectedArticle(art);
    setSelectedPlayer(null);
    navigateTo(getArticleUrl(art.category, art.slug));
    applySeo(getArticleSeo(art));
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleSelectPlayer = (player: PlayerData) => {
    setIsNotFound(false);
    setSelectedPlayer(player);
    setSelectedArticle(null);
    navigateTo(getPlayerUrl(player.sport, player.slug));
    applySeo(getPlayerSeo(player));
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleSelectCategory = (cat: SportCategory | 'ALL') => {
    setIsNotFound(false);
    setActiveCategory(cat);
    setSelectedArticle(null);
    setSelectedPlayer(null);
    if (cat === 'ALL') {
      navigateTo(getHomeUrl());
      applySeo(getHomeSeo());
    } else {
      navigateTo(getCategoryUrl(cat));
      applySeo(getCategorySeo(cat));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setIsNotFound(false);
    setSelectedArticle(null);
    setSelectedPlayer(null);
    setActiveCategory('ALL');
    navigateTo(getHomeUrl());
    applySeo(getHomeSeo());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 flex flex-col font-sans">
      {/* Universal Top Navigation Header */}
      <Header
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenBookmarks={() => setSavedModalOpen(true)}
        savedCount={savedArticleIds.length}
        onNavigateHome={handleNavigateHome}
        onOpenArchitectureModal={() => setArchitectureOpen(true)}
      />

      {/* Main View Switcher */}
      <main className="flex-1">
        {isNotFound ? (
          <NotFoundPage
            onNavigateHome={handleNavigateHome}
            onSelectCategory={handleSelectCategory}
            onSelectArticle={handleSelectArticle}
            onOpenSearch={() => setSearchOpen(true)}
            attemptedPath={notFoundAttemptedPath}
          />
        ) : selectedPlayer ? (
          /* Cricbuzz-Inspired Athlete Dossier Profile Page */
          <PlayerProfileView
            player={selectedPlayer}
            onBack={() => {
              if (selectedPlayer.sport) {
                handleSelectCategory(selectedPlayer.sport);
              } else {
                handleNavigateHome();
              }
            }}
            onSelectPlayer={handleSelectPlayer}
            onSelectArticle={handleSelectArticle}
          />
        ) : selectedArticle ? (
          /* Magazine Longform Article Page */
          <ArticleView
            article={selectedArticle}
            onBack={() => {
              if (selectedArticle.category) {
                handleSelectCategory(selectedArticle.category);
              } else {
                handleNavigateHome();
              }
            }}
            onSelectArticle={handleSelectArticle}
            isBookmarked={savedArticleIds.includes(selectedArticle.id)}
            onToggleBookmark={toggleBookmark}
          />
        ) : activeCategory !== 'ALL' ? (
          /* Category Specific Hub View with Articles & Player Roster */
          <CategoryHub
            category={activeCategory}
            articles={categoryArticles}
            players={getPlayersBySport(activeCategory)}
            onSelectArticle={handleSelectArticle}
            onSelectPlayer={handleSelectPlayer}
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

            {/* 3. CRICKET SECTION (Large Article + 2 Side Articles + Crickbuzz Player Dossiers) */}
            <SportSection
              sport="Cricket"
              emoji="🏏"
              largeArticle={cricketLarge}
              sideArticles={cricketSides}
              players={cricketPlayers}
              onSelectArticle={handleSelectArticle}
              onSelectPlayer={handleSelectPlayer}
              onViewCategory={handleSelectCategory}
            />

            {/* 4. FOOTBALL SECTION (Large Article + 2 Side Articles + Star Dossiers) */}
            <SportSection
              sport="Football"
              emoji="⚽"
              largeArticle={footballLarge}
              sideArticles={footballSides}
              players={footballPlayers}
              onSelectArticle={handleSelectArticle}
              onSelectPlayer={handleSelectPlayer}
              onViewCategory={handleSelectCategory}
            />

            {/* 5. KABADDI SECTION (Articles + Images + Video + Players) */}
            <KabaddiFeature
              article={kabaddiLead}
              onSelectArticle={handleSelectArticle}
              onSelectPlayer={handleSelectPlayer}
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
        onSelectCategory={handleSelectCategory}
        onOpenArchitectureModal={() => setArchitectureOpen(true)}
      />

      {/* Modals & Dialogs */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        articles={ARTICLES}
        players={PLAYERS}
        onSelectArticle={handleSelectArticle}
        onSelectPlayer={handleSelectPlayer}
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
