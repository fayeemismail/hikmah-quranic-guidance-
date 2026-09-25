"use client";

import React, { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { GuidanceTheme, QuranVerse } from "@/types/guidance";
import GuidanceReveal from "@/components/GuidanceReveal";

interface TopicClientProps {
  theme: GuidanceTheme;
  themeVerses: QuranVerse[];
}

export default function TopicClient({ theme, themeVerses }: TopicClientProps) {
  const searchParams = useSearchParams();
  const requestedVerseId = searchParams.get("v");

  // Pick initial verse: either the requested query param or random from the 4 curated passages
  const initialVerse = useMemo(() => {
    if (requestedVerseId) {
      const found = themeVerses.find((v) => v.id === requestedVerseId);
      if (found) return found;
    }
    const randomIndex = Math.floor(Math.random() * themeVerses.length);
    return themeVerses[randomIndex] || themeVerses[0];
  }, [requestedVerseId, themeVerses]);

  return (
    <GuidanceReveal
      theme={theme}
      initialVerse={initialVerse}
      allThemeVerses={themeVerses}
    />
  );
}
