import React, { useState } from 'react';
import {
  ArrowLeft,
  Share2,
  Check,
  Trophy,
  Shield,
  Star,
  Activity,
  Award,
  ChevronRight,
  ExternalLink,
  Calendar,
  MapPin,
  TrendingUp,
  FileText
} from 'lucide-react';
import { PlayerData, Article, SportCategory } from '../types';
import { getPlayersBySport } from '../data/playersData';
import { ARTICLES } from '../data/sportsData';
import { getSportSlug, getPlayerUrl, getArticleUrl, navigateTo } from '../utils/router';

interface PlayerProfileViewProps {
  player: PlayerData;
  onBack: () => void;
  onSelectPlayer: (player: PlayerData) => void;
  onSelectArticle: (article: Article) => void;
}

export const PlayerProfileView: React.FC<PlayerProfileViewProps> = ({
  player,
  onBack,
  onSelectPlayer,
  onSelectArticle,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'stats' | 'highlights' | 'stories'>('overview');
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Other athletes in this sport
  const peerPlayers = getPlayersBySport(player.sport).filter((p) => p.id !== player.id);

  // Related articles in this sport
  const relatedArticles = ARTICLES.filter(
    (a) => a.category === player.sport || a.title.toLowerCase().includes(player.name.toLowerCase())
  ).slice(0, 3);

  const handleCopyLink = () => {
    const canonicalUrl = `${window.location.origin}${getPlayerUrl(player.sport, player.slug)}`;
    navigator.clipboard.writeText(canonicalUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Sub-header Breadcrumb Bar */}
      <div className="bg-white border-b border-stone-200 sticky top-14 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-stone-500 overflow-x-auto">
            <button
              onClick={onBack}
              className="hover:text-stone-900 transition-colors inline-flex items-center gap-1 font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
            <span>/</span>
            <span
              onClick={() => navigateTo(`/${getSportSlug(player.sport)}`)}
              className="hover:text-rose-600 cursor-pointer uppercase transition-colors"
            >
              {player.sport}
            </span>
            <span>/</span>
            <span className="text-stone-900 font-bold uppercase truncate max-w-[200px]">
              {player.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border border-stone-200 bg-white text-stone-700 hover:border-stone-400 hover:text-stone-950 transition-colors"
              title="Copy Profile URL"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">URL Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Dossier</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Profile Header - Cricbuzz Inspired Hero Card */}
      <div className="bg-stone-900 text-white relative overflow-hidden border-b border-stone-800">
        {/* Subtle accent glow */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ backgroundColor: player.accentColor }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Player Avatar / Portrait */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-2xl overflow-hidden border-2 border-stone-700/80 shadow-2xl bg-stone-800 group">
                {!imgError ? (
                  <img
                    src={player.imageUrl}
                    alt={player.name}
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div
                    className="w-full h-full flex flex-col items-center justify-center p-4 relative"
                    style={{
                      background: `linear-gradient(135deg, #18181b 0%, ${player.accentColor} 100%)`,
                    }}
                  >
                    <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-3">
                      <span className="text-3xl font-black font-mono tracking-tight text-white">
                        {player.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')
                          .slice(0, 2)}
                      </span>
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-white/80">
                      {player.nationality}
                    </span>
                  </div>
                )}

                {/* Jersey number badge */}
                {player.jerseyNumber && (
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-stone-950/80 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-white shadow-lg">
                    #{player.jerseyNumber}
                  </div>
                )}
              </div>
            </div>

            {/* Player Main Bio & Meta */}
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-rose-600/30 text-rose-300 border border-rose-500/30">
                  {player.sport}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-stone-800 text-stone-300 border border-stone-700">
                  {player.nationality}
                </span>
                {player.worldRanking && (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                    <Trophy className="w-3 h-3" />
                    <span>{player.worldRanking}</span>
                  </span>
                )}
              </div>

              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-1">
                {player.name}
              </h1>
              {player.fullName && player.fullName !== player.name && (
                <p className="text-xs sm:text-sm font-mono text-stone-400 mb-3">
                  Official Name: {player.fullName}
                </p>
              )}

              <p className="text-sm sm:text-base font-semibold text-stone-300 mb-4 flex items-center gap-2">
                <span className="text-rose-400 font-bold">{player.role}</span>
                <span className="text-stone-600">·</span>
                <span className="text-stone-300">{player.team}</span>
              </p>

              {/* Quick Stat Pill Bar (Cricbuzz style) */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-stone-800/80 border border-stone-700/80 backdrop-blur-sm mb-5">
                <div className="text-[10px] font-mono uppercase tracking-widest text-stone-400 mb-1">
                  CAREER BENCHMARK AT A GLANCE
                </div>
                <div className="text-sm sm:text-base font-mono font-bold text-stone-100 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>{player.stats}</span>
                </div>
              </div>

              {/* Canonical URL chip */}
              <div className="flex items-center gap-2 text-[11px] font-mono text-stone-400">
                <span>Unique Dossier URL:</span>
                <code className="px-2 py-0.5 rounded bg-stone-800 text-rose-300 select-all border border-stone-700">
                  {getPlayerUrl(player.sport, player.slug)}
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Cricbuzz Personal Information Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-5 sm:p-6 shadow-xs">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-stone-100">
                <Shield className="w-4 h-4 text-rose-600" />
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-stone-900">
                  PERSONAL INFORMATION
                </h3>
              </div>

              <dl className="divide-y divide-stone-100 text-xs sm:text-sm">
                {player.dateOfBirth && (
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="text-stone-500 font-mono">Born</dt>
                    <dd className="font-semibold text-stone-900 text-right">{player.dateOfBirth}</dd>
                  </div>
                )}
                {player.birthPlace && (
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="text-stone-500 font-mono">Birth Place</dt>
                    <dd className="font-semibold text-stone-900 text-right">{player.birthPlace}</dd>
                  </div>
                )}
                {player.height && (
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="text-stone-500 font-mono">Height</dt>
                    <dd className="font-semibold text-stone-900 text-right">{player.height}</dd>
                  </div>
                )}
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="text-stone-500 font-mono">Role</dt>
                  <dd className="font-semibold text-rose-600 text-right">{player.role}</dd>
                </div>
                {player.battingStyle && (
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="text-stone-500 font-mono">Batting Style</dt>
                    <dd className="font-semibold text-stone-900 text-right">{player.battingStyle}</dd>
                  </div>
                )}
                {player.bowlingStyle && (
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="text-stone-500 font-mono">Bowling Style</dt>
                    <dd className="font-semibold text-stone-900 text-right">{player.bowlingStyle}</dd>
                  </div>
                )}
              </dl>

              {/* Teams Played For (Cricbuzz style) */}
              {player.teamsPlayedFor && player.teamsPlayedFor.length > 0 && (
                <div className="mt-5 pt-4 border-t border-stone-100">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-stone-400 mb-2">
                    TEAMS & FRANCHISES
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {player.teamsPlayedFor.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-stone-100 text-stone-700 border border-stone-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Debut Information (Cricbuzz style) */}
              {player.debutInfo && (
                <div className="mt-5 pt-4 border-t border-stone-100">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-stone-400 mb-2">
                    CAREER DEBUTS
                  </div>
                  <div className="space-y-2 text-xs">
                    {player.debutInfo.test && (
                      <div>
                        <span className="font-mono text-stone-400 block text-[10px]">Test Debut</span>
                        <span className="font-medium text-stone-800">{player.debutInfo.test}</span>
                      </div>
                    )}
                    {player.debutInfo.odi && (
                      <div>
                        <span className="font-mono text-stone-400 block text-[10px]">ODI Debut</span>
                        <span className="font-medium text-stone-800">{player.debutInfo.odi}</span>
                      </div>
                    )}
                    {player.debutInfo.t20i && (
                      <div>
                        <span className="font-mono text-stone-400 block text-[10px]">T20I Debut</span>
                        <span className="font-medium text-stone-800">{player.debutInfo.t20i}</span>
                      </div>
                    )}
                    {player.debutInfo.league && (
                      <div>
                        <span className="font-mono text-stone-400 block text-[10px]">League Debut</span>
                        <span className="font-medium text-stone-800">{player.debutInfo.league}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Athlete Quote Box */}
            {player.quote && (
              <div className="p-5 rounded-2xl bg-stone-900 text-white border border-stone-800 relative">
                <div className="text-3xl font-serif text-rose-500 absolute top-2 left-4 select-none">“</div>
                <p className="font-editorial italic text-base text-stone-200 pt-3 mb-2 leading-relaxed">
                  {player.quote}
                </p>
                <div className="text-right text-[11px] font-mono text-stone-400 uppercase tracking-wider">
                  — {player.name}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Multi-Tab Detailed Content */}
          <div className="lg:col-span-8">
            {/* Tab navigation ribbon (Cricbuzz style) */}
            <div className="flex border-b border-stone-200 bg-white rounded-t-2xl px-4 pt-2 overflow-x-auto gap-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-3 px-4 text-xs font-mono font-bold uppercase tracking-wider border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === 'overview'
                    ? 'border-rose-600 text-rose-600'
                    : 'border-transparent text-stone-500 hover:text-stone-900'
                }`}
              >
                Career Profile
              </button>
              <button
                onClick={() => setActiveTab('stats')}
                className={`py-3 px-4 text-xs font-mono font-bold uppercase tracking-wider border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === 'stats'
                    ? 'border-rose-600 text-rose-600'
                    : 'border-transparent text-stone-500 hover:text-stone-900'
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Format Stats Table</span>
              </button>
              <button
                onClick={() => setActiveTab('highlights')}
                className={`py-3 px-4 text-xs font-mono font-bold uppercase tracking-wider border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === 'highlights'
                    ? 'border-rose-600 text-rose-600'
                    : 'border-transparent text-stone-500 hover:text-stone-900'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>Milestones</span>
              </button>
              <button
                onClick={() => setActiveTab('stories')}
                className={`py-3 px-4 text-xs font-mono font-bold uppercase tracking-wider border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === 'stories'
                    ? 'border-rose-600 text-rose-600'
                    : 'border-transparent text-stone-500 hover:text-stone-900'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Features & News</span>
              </button>
            </div>

            {/* Tab Panels */}
            <div className="bg-white rounded-b-2xl border-x border-b border-stone-200 p-6 sm:p-8 shadow-xs">
              {/* TAB 1: OVERVIEW */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-editorial text-2xl font-bold text-stone-950 mb-3">
                      Career Overview & Playing Philosophy
                    </h3>
                    <p className="font-body text-base text-stone-700 leading-relaxed mb-4">
                      {player.bio}
                    </p>

                    {player.fullBio && player.fullBio.length > 0 && (
                      <div className="space-y-4 pt-2 border-t border-stone-100">
                        {player.fullBio.map((paragraph, idx) => (
                          <p key={idx} className="font-body text-base text-stone-700 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Strengths & Signature Traits */}
                  {player.strengths && player.strengths.length > 0 && (
                    <div className="p-5 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-stone-900 mb-3 flex items-center gap-1.5">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <span>SIGNATURE TACTICAL STRENGTHS & WEAPONS</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {player.strengths.map((strength, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 text-xs font-mono text-stone-800 bg-white p-2.5 rounded-lg border border-stone-200"
                          >
                            <span className="text-rose-600 font-bold">✓</span>
                            <span>{strength}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: FORMAT STATS TABLE (Cricbuzz style) */}
              {activeTab === 'stats' && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-editorial text-xl font-bold text-stone-950">
                      Career Performance Breakdown by Format
                    </h3>
                    <span className="text-xs font-mono text-stone-500">
                      Official Competition Records
                    </span>
                  </div>

                  {player.statsTable && player.statsTable.length > 0 ? (
                    <div className="overflow-x-auto rounded-xl border border-stone-200">
                      <table className="w-full text-left text-xs font-mono divide-y divide-stone-200">
                        <thead className="bg-stone-100 text-stone-700 font-bold uppercase">
                          <tr>
                            <th className="py-3 px-4">Competition / Format</th>
                            <th className="py-3 px-3 text-center">Matches</th>
                            {player.statsTable[0]?.innings !== undefined && (
                              <th className="py-3 px-3 text-center">Innings</th>
                            )}
                            {player.statsTable[0]?.runs !== undefined && (
                              <th className="py-3 px-3 text-center">Runs</th>
                            )}
                            {player.statsTable[0]?.highestScore !== undefined && (
                              <th className="py-3 px-3 text-center">HS</th>
                            )}
                            {player.statsTable[0]?.average !== undefined && (
                              <th className="py-3 px-3 text-center">Avg</th>
                            )}
                            {player.statsTable[0]?.strikeRate !== undefined && (
                              <th className="py-3 px-3 text-center">SR</th>
                            )}
                            {player.statsTable[0]?.hundreds !== undefined && (
                              <th className="py-3 px-3 text-center">100s / 50s</th>
                            )}
                            {player.statsTable[0]?.wickets !== undefined && (
                              <th className="py-3 px-3 text-center">Wickets</th>
                            )}
                            {player.statsTable[0]?.bestBowling !== undefined && (
                              <th className="py-3 px-3 text-center">BBI</th>
                            )}
                            {player.statsTable[0]?.goals !== undefined && (
                              <th className="py-3 px-3 text-center">Goals</th>
                            )}
                            {player.statsTable[0]?.assists !== undefined && (
                              <th className="py-3 px-3 text-center">Assists</th>
                            )}
                            {player.statsTable[0]?.points !== undefined && (
                              <th className="py-3 px-3 text-center">Points</th>
                            )}
                            {player.statsTable[0]?.raidPoints !== undefined && (
                              <th className="py-3 px-3 text-center">Raid Pts</th>
                            )}
                            {player.statsTable[0]?.winRate !== undefined && (
                              <th className="py-3 px-3 text-center">Win %</th>
                            )}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-100 bg-white">
                          {player.statsTable.map((row, i) => (
                            <tr key={i} className="hover:bg-stone-50 transition-colors">
                              <td className="py-3 px-4 font-bold text-stone-900 flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                                <span>{row.format}</span>
                              </td>
                              <td className="py-3 px-3 text-center font-bold text-stone-800">
                                {row.matches}
                              </td>
                              {row.innings !== undefined && (
                                <td className="py-3 px-3 text-center text-stone-600">{row.innings}</td>
                              )}
                              {row.runs !== undefined && (
                                <td className="py-3 px-3 text-center font-bold text-rose-600">
                                  {row.runs.toLocaleString()}
                                </td>
                              )}
                              {row.highestScore !== undefined && (
                                <td className="py-3 px-3 text-center text-stone-700">
                                  {row.highestScore}
                                </td>
                              )}
                              {row.average !== undefined && (
                                <td className="py-3 px-3 text-center font-semibold text-stone-900">
                                  {row.average}
                                </td>
                              )}
                              {row.strikeRate !== undefined && (
                                <td className="py-3 px-3 text-center text-stone-600">
                                  {row.strikeRate}
                                </td>
                              )}
                              {row.hundreds !== undefined && (
                                <td className="py-3 px-3 text-center text-stone-800">
                                  <span className="font-bold text-stone-950">{row.hundreds}</span> /{' '}
                                  <span>{row.fifties || 0}</span>
                                </td>
                              )}
                              {row.wickets !== undefined && (
                                <td className="py-3 px-3 text-center font-bold text-rose-600">
                                  {row.wickets}
                                </td>
                              )}
                              {row.bestBowling !== undefined && (
                                <td className="py-3 px-3 text-center text-stone-700">
                                  {row.bestBowling}
                                </td>
                              )}
                              {row.goals !== undefined && (
                                <td className="py-3 px-3 text-center font-bold text-rose-600">
                                  {row.goals}
                                </td>
                              )}
                              {row.assists !== undefined && (
                                <td className="py-3 px-3 text-center text-stone-700">
                                  {row.assists}
                                </td>
                              )}
                              {row.points !== undefined && (
                                <td className="py-3 px-3 text-center font-bold text-rose-600">
                                  {row.points}
                                </td>
                              )}
                              {row.raidPoints !== undefined && (
                                <td className="py-3 px-3 text-center font-bold text-rose-600">
                                  {row.raidPoints}
                                </td>
                              )}
                              {row.winRate !== undefined && (
                                <td className="py-3 px-3 text-center font-semibold text-emerald-700">
                                  {row.winRate}
                                </td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="p-6 rounded-xl bg-stone-50 border border-stone-200 text-center font-mono text-xs text-stone-600">
                      Standard metrics: {player.stats}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: HIGHLIGHTS & MILESTONES */}
              {activeTab === 'highlights' && (
                <div className="space-y-4">
                  <h3 className="font-editorial text-xl font-bold text-stone-950 mb-3">
                    Historic Milestones & Championship Honors
                  </h3>
                  {player.careerHighlights && player.careerHighlights.length > 0 ? (
                    <div className="space-y-3">
                      {player.careerHighlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-50 border border-stone-200"
                        >
                          <Trophy className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-stone-900 text-sm block">
                              {highlight}
                            </span>
                            <span className="text-[11px] font-mono text-stone-500">
                              Verified Official Record
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-stone-600 font-mono">
                      Major honors documented in career dossier.
                    </p>
                  )}
                </div>
              )}

              {/* TAB 4: RELATED STORIES */}
              {activeTab === 'stories' && (
                <div className="space-y-4">
                  <h3 className="font-editorial text-xl font-bold text-stone-950 mb-3">
                    Related Longform Features on {player.name}
                  </h3>
                  {relatedArticles.length > 0 ? (
                    <div className="space-y-3">
                      {relatedArticles.map((art) => (
                        <div
                          key={art.id}
                          onClick={() => onSelectArticle(art)}
                          className="group cursor-pointer p-4 rounded-xl border border-stone-200 hover:border-stone-400 hover:shadow-xs transition-all flex items-start justify-between gap-4"
                        >
                          <div>
                            <div className="text-[10px] font-mono uppercase text-rose-600 font-bold mb-1">
                              {art.category} · {art.readTime}
                            </div>
                            <h4 className="font-editorial text-base sm:text-lg font-bold text-stone-900 group-hover:text-rose-600 transition-colors">
                              {art.title}
                            </h4>
                            <p className="font-body text-xs text-stone-600 line-clamp-1 mt-1">
                              {art.subtitle}
                            </p>
                          </div>
                          <span className="text-rose-600 text-xs font-mono font-bold shrink-0 self-center">
                            Read →
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-stone-600 font-mono">
                      No direct articles linked yet.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Peer Athletes Strip (Browse other stars in this sport) */}
        {peerPlayers.length > 0 && (
          <div className="mt-14 pt-8 border-t border-stone-200">
            <div className="flex items-baseline justify-between mb-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-rose-600 font-bold block mb-1">
                  MORE {player.sport.toUpperCase()} DOSSIERS
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-stone-950 font-sans">
                  Other {player.sport} Stars To Explore
                </h3>
              </div>
              <button
                onClick={() => navigateTo(`/${getSportSlug(player.sport)}`)}
                className="text-xs font-mono font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1"
              >
                <span>Full {player.sport} Desk</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {peerPlayers.map((peer) => (
                <div
                  key={peer.id}
                  onClick={() => onSelectPlayer(peer)}
                  className="group cursor-pointer bg-white rounded-xl border border-stone-200 hover:border-stone-400 hover:shadow-md transition-all p-3 text-center flex flex-col justify-between"
                >
                  <div className="aspect-square rounded-lg overflow-hidden bg-stone-100 mb-2.5 relative">
                    <img
                      src={peer.imageUrl}
                      alt={peer.name}
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    {peer.jerseyNumber && (
                      <span className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-stone-950/80 text-white">
                        #{peer.jerseyNumber}
                      </span>
                    )}
                  </div>
                  <div>
                    <h5 className="font-sans font-bold text-xs sm:text-sm text-stone-900 group-hover:text-rose-600 transition-colors truncate">
                      {peer.name}
                    </h5>
                    <p className="text-[10px] font-mono text-stone-500 truncate">
                      {peer.role}
                    </p>
                  </div>
                  <div className="mt-2 pt-2 border-t border-stone-100 text-[10px] font-mono text-rose-600 font-semibold group-hover:translate-x-0.5 transition-transform">
                    View Dossier →
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
