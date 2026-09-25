"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { LuArrowLeft, LuSparkles } from "react-icons/lu";
import { GuidanceTheme, QuranVerse } from "@/types/guidance";
import VerseCard from "./VerseCard";
import TopicIcon from "./TopicIcon";

interface GuidanceRevealProps {
  theme: GuidanceTheme;
  initialVerse: QuranVerse;
  allThemeVerses: QuranVerse[];
}

export default function GuidanceReveal({
  theme,
  initialVerse,
  allThemeVerses,
}: GuidanceRevealProps) {
  const [currentVerse, setCurrentVerse] = useState<QuranVerse>(initialVerse);
  const [viewedIds, setViewedIds] = useState<string[]>([initialVerse.id]);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isSwitching, setIsSwitching] = useState(false);

  // Initial gentle reveal delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  // Defensive empty state
  if (!allThemeVerses || allThemeVerses.length === 0) {
    return (
      <div className="w-full py-16 text-center max-w-md mx-auto space-y-4">
        <p className="text-sm text-[#69736E]">
          No passages are currently available for this topic.
        </p>
        <Link
          href="/explore"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#163D32] text-white text-xs font-medium"
        >
          <LuArrowLeft className="w-3.5 h-3.5" />
          <span>Choose another situation</span>
        </Link>
      </div>
    );
  }

  // Handle exploring another passage: rotates through all remaining verses before restarting cycle
  const handleExploreAnother = () => {
    if (isSwitching) return;
    setIsSwitching(true);

    const unviewed = allThemeVerses.filter((v) => !viewedIds.includes(v.id));
    let nextVerse: QuranVerse;
    let nextViewed: string[];

    if (unviewed.length > 0) {
      // Pick randomly from the unviewed ones
      nextVerse = unviewed[Math.floor(Math.random() * unviewed.length)];
      nextViewed = [...viewedIds, nextVerse.id];
    } else {
      // All 4 have been viewed! Start cycle again, choosing from the other 3
      const others = allThemeVerses.filter((v) => v.id !== currentVerse.id);
      nextVerse =
        others.length > 0
          ? others[Math.floor(Math.random() * others.length)]
          : currentVerse;
      nextViewed = [nextVerse.id];
    }

    setTimeout(() => {
      setCurrentVerse(nextVerse);
      setViewedIds(nextViewed);
      setIsSwitching(false);
    }, 350);
  };

  return (
    <div className="w-full pb-16 pt-2 sm:pt-4">
      {/* Navigation breadcrumb back */}
      <div className="max-w-2xl mx-auto mb-6 flex items-center justify-between">
        <Link
          href="/explore"
          className="inline-flex items-center gap-1.5 text-xs text-[#163D32] hover:text-[#102A24] font-medium transition-colors group px-2.5 py-1.5 rounded-lg hover:bg-[#B69A5A]/10 border border-[#B69A5A]/25"
        >
          <LuArrowLeft className="w-3.5 h-3.5 text-[#B69A5A] group-hover:-translate-x-0.5 transition-transform" />
          <span>Choose another situation</span>
        </Link>

        <span className="text-[11px] text-[#69736E] font-medium tracking-wide">
          Passage {viewedIds.length} of {allThemeVerses.length}
        </span>
      </div>

      {/* Header section explaining the purpose clearly */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center max-w-xl mx-auto mb-8 space-y-2 px-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#163D32]/8 text-[#163D32] border border-[#B69A5A]/30">
          <TopicIcon name={theme.icon} className="w-3.5 h-3.5 text-[#B69A5A]" />
          <span className="text-[11px] font-semibold uppercase tracking-widest">
            Related To
          </span>
        </div>

        <p className="text-xs text-[#69736E] font-medium">
          You selected: <span className="text-[#102A24] font-semibold">{theme.title}</span>
        </p>

        <h1 className="text-2xl sm:text-3xl font-bold text-[#102A24] tracking-tight uppercase">
          {theme.title}
        </h1>

        <p className="text-xs sm:text-sm text-[#69736E] max-w-md mx-auto leading-relaxed">
          Here is a Qur&apos;anic passage curated around this theme.
        </p>

        {/* Small ornamental line */}
        <div className="flex items-center justify-center gap-2 pt-2 text-[#B69A5A]/40">
          <span className="h-px w-10 bg-[#B69A5A]/30" />
          <span className="text-[10px]">♦</span>
          <span className="h-px w-10 bg-[#B69A5A]/30" />
        </div>
      </motion.div>

      {/* Reveal Sequence Container */}
      {!isRevealed ? (
        <div className="max-w-md mx-auto py-16 text-center space-y-3">
          <div className="inline-block p-3 rounded-full bg-[#163D32]/10 text-[#B69A5A] animate-pulse">
            <LuSparkles className="w-6 h-6 animate-spin" style={{ animationDuration: "3s" }} />
          </div>
          <p className="text-xs tracking-wider uppercase text-[#69736E]">
            Preparing passage...
          </p>
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVerse.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <VerseCard
              verse={currentVerse}
              themeSlug={theme.slug}
              onExploreAnother={handleExploreAnother}
              isSwitching={isSwitching}
            />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
