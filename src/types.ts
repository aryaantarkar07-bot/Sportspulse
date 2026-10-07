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
}

export interface ArticleSection {
  heading?: string;
  level?: 'h2' | 'h3';
  paragraphs: string[];
  pullQuote?: {
    text: string;
    attribution?: string;
  };
  image?: {
    caption: string;
    credit: string;
    visualStyle: string;
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
  accentColor: string;
  isFeatured?: boolean;
  isTrending?: boolean;
  trendingRank?: number;
  keyTakeaways: string[];
  sections: ArticleSection[];
  tags: string[];
}
