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
  context: string;
  scholarlyReference?: {
    source: string;
    summary: string;
  };
  reflection: string;
  themes: string[];
}

export interface GuidanceTheme {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string; // identifier mapped to React Icons
  verseIds: string[];
}
