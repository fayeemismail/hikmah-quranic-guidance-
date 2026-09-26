export interface QuranVerse {
  id: string;
  surah: {
    number: number;
    nameArabic: string;
    nameEnglish: string;
  };
  ayah: {
    start: number;
    end?: number;
  };
  arabic: string;
  translation: {
    text: string;
    source: string;
  };
  malayalamTranslation?: {
    text: string;
    source: string;
    reference?: string;
    sourceUrl?: string;
  } | null;
  summary: string;
  context: string;
  scholarlyReference?: {
    source: string;
    reference?: string;
    summary: string;
  } | null;
  hadith?: {
    collection: string;
    reference: string;
    text?: string;
    relevance: string;
  } | null;
  reflection: string;
  themes: string[];
  sourceUrls?: {
    quran?: string;
    tafsir?: string;
    hadith?: string;
    malayalam?: string;
  };
}

export interface GuidanceTheme {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string; // identifier mapped to React Icons
  verseIds: string[];
}
