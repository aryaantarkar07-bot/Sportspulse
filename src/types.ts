export type SportCategory =
  | 'Cricket'
  | 'Football'
  | 'Hockey'
  | 'Kabaddi'
  | 'Tennis'
  | 'Basketball'
  | 'Badminton'
  | 'Formula 1'
  | 'Boxing & Wrestling'
  | 'Athletics'
  | 'Other Sports';

export type ArtworkVariant = 'hero' | 'tactical' | 'player' | 'action' | 'stadium' | 'equipment';

export interface FamousPersonality {
  name: string;
  sport: SportCategory;
  nickname?: string;
  jerseyNumber?: string | number;
  country: string;
  countryCode: string;
  honors: string;
  signatureAction: string;
  avatarInitials: string;
  accentColor: string;
}

export interface SportEvent {
  name: string;
  tournament: string;
  venue: string;
  location: string;
  edition: string;
  stage: string;
  dateOrEra: string;
}

export interface StatRow {
  label: string;
  values: (string | number)[];
}

export interface PlayerProfile {
  name: string;
  role: string;
  team: string;
  stats: string;
  bio: string;
  jerseyNumber?: string | number;
  nationality?: string;
  accentColor?: string;
}

export interface PlayerStatsTable {
  format: string; // e.g. 'Test', 'ODI', 'T20I', 'IPL' or 'Champions League', 'League', 'International'
  matches: number;
  innings?: number;
  runs?: number;
  highestScore?: string | number;
  average?: number | string;
  strikeRate?: number | string;
  hundreds?: number;
  fifties?: number;
  wickets?: number;
  bestBowling?: string;
  economy?: number | string;
  fiveWickets?: number;
  catches?: number;
  // Sport-specific metrics
  goals?: number;
  assists?: number;
  cleanSheets?: number;
  tacklePoints?: number;
  raidPoints?: number;
  superRaids?: number;
  super10s?: number;
  superTackles?: number;
  points?: number;
  rebounds?: number;
  blocks?: number;
  threePointers?: number;
  wins?: number;
  podiums?: number;
  polePositions?: number;
  titles?: number;
  medals?: number;
  goldMedals?: number;
  silverMedals?: number;
  bronzeMedals?: number;
  fieldGoals?: number;
  penaltyCorners?: number;
  winRate?: string;
  distance?: string;
  personalBest?: string;
  heights?: string;
  nationalRecord?: string;
  rating?: string;
  [key: string]: any;
}

export interface PlayerData {
  id: string;
  slug: string;
  name: string;
  fullName?: string;
  sport: SportCategory;
  role: string;
  team: string;
  nationality: string;
  jerseyNumber?: string | number;
  dateOfBirth?: string;
  birthPlace?: string;
  height?: string;
  battingStyle?: string;
  bowlingStyle?: string;
  worldRanking?: string;
  teamsPlayedFor?: string[];
  debutInfo?: {
    test?: string;
    odi?: string;
    t20i?: string;
    league?: string;
  };
  stats: string;
  statsTable?: PlayerStatsTable[];
  bio: string;
  fullBio?: string[];
  strengths?: string[];
  careerHighlights?: string[];
  quote?: string;
  imageUrl: string;
  accentColor: string;
}

export interface SupportingImage {
  figureNumber: string;
  title: string;
  caption: string;
  credit: string;
  variant: ArtworkVariant;
  event?: SportEvent;
  aspectRatio?: '16/9' | '4/3' | '3/2';
}

export interface ArticleSection {
  heading?: string;
  level?: 'h2' | 'h3';
  paragraphs?: string[];
  pullQuote?: {
    text: string;
    attribution?: string;
  };
  image?: {
    figureNumber?: string;
    title?: string;
    caption: string;
    credit: string;
    visualStyle?: string;
    variant?: ArtworkVariant;
    event?: SportEvent;
    layout?: 'full' | 'inset' | 'duo';
    secondaryImage?: {
      figureNumber?: string;
      title?: string;
      caption: string;
      credit: string;
      variant?: ArtworkVariant;
      event?: SportEvent;
    };
  };
  video?: {
    title: string;
    duration: string;
    caption: string;
    previewBadge?: string;
  };
  statsTable?: {
    title: string;
    columns: string[];
    rows: (string | number)[][];
    footnote?: string;
  };
  playerProfiles?: PlayerProfile[];
}

export interface Article {
  id: string;
  slug: string;
  category: SportCategory;
  categoryEmoji: string;
  title: string;
  subtitle: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  wordCount: number;
  heroCaption: string;
  heroCredit: string;
  heroVariant?: ArtworkVariant;
  featuredPersonality?: FamousPersonality;
  supportingImages: SupportingImage[];
  accentColor: string;
  isFeatured?: boolean;
  isTrending?: boolean;
  trendingRank?: number;
  keyTakeaways: string[];
  sections: ArticleSection[];
  tags: string[];
}
