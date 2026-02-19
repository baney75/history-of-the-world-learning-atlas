export interface HistoricalPeriod {
  id: string;
  title: string;
  subtitle: string;
  era: string;
  description: string;
  scripturalContext?: string;
  quote?: string;
  quoteSource?: string;
  imageUrl?: string;
  imageAlt?: string;
  keyFigures: HistoricalFigure[];
  keyEvents: HistoricalEvent[];
  sources: Source[];
}

export interface HistoricalFigure {
  id: string;
  name: string;
  title?: string;
  lifespan?: string;
  description: string;
  significance: string;
  scripturalReference?: string;
}

export interface HistoricalEvent {
  id: string;
  name: string;
  date: string;
  description: string;
  location?: string;
  scripturalReference?: string;
}

export interface Source {
  title: string;
  url: string;
  type: 'bible' | 'archaeological' | 'theological' | 'historical' | 'primary' | 'academic';
}

export interface Definition {
  id: string;
  term: string;
  shortDefinition: string;
  fullDefinition: string;
  category: 'theology' | 'historical' | 'political';
  scriptureReferences: string[];
  relatedFigures: string[];
  relatedPeriods: string[];
  relatedTerms: string[];
  sources: Source[];
}

export interface GrokipediaResponse {
  title: string;
  slug: string;
  url: string;
  content_text: string;
  char_count: number;
  word_count: number;
  references_count: number;
  references: Array<{
    number: number;
    url: string;
  }>;
}

export type TimelineTheme = 'light' | 'sepia' | 'dark';
