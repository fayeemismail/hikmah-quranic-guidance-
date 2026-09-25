"use client";

import React from "react";
import { motion } from "framer-motion";
import { QuranVerse } from "@/types/guidance";
import ArabicVerse from "./ArabicVerse";
import Translation from "./Translation";
import VerseSummary from "./VerseSummary";
import VerseContext from "./VerseContext";
import ScholarlyReferences from "./ScholarlyReferences";
import HadithReference from "./HadithReference";
import ReflectionCard from "./ReflectionCard";
import GuidanceDisclaimer from "./GuidanceDisclaimer";
import SafetyNotice from "./SafetyNotice";
import AnotherPassageButton from "./AnotherPassageButton";

interface VerseCardProps {
  verse: QuranVerse;
  themeSlug: string;
  onExploreAnother: () => void;
  isSwitching?: boolean;
}

export default function VerseCard({
  verse,
  themeSlug,
  onExploreAnother,
  isSwitching = false,
}: VerseCardProps) {
  return (
    <article
      aria-label={`Verse from Surah ${verse.surah.nameEnglish}`}
      className="relative w-full max-w-2xl mx-auto rounded-3xl bg-[#FFFFFF] border border-[#E8E3D7] shadow-xl p-5 sm:p-8 md:p-10 transition-all duration-300"
    >
      {/* Decorative top inner border accent */}
      <div className="absolute top-0 inset-x-8 h-1 bg-gradient-to-r from-transparent via-[#B69A5A]/50 to-transparent" />

      {/* Surah Header Information (Staged Reveal 1) */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
        className="text-center space-y-1.5 pb-4 border-b border-[#E8E3D7]"
      >
        <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B69A5A]">
          <span>Surah {verse.surah.number}</span>
          <span>•</span>
          <span>
            Ayah {verse.ayah.start}
            {verse.ayah.end ? `–${verse.ayah.end}` : ""}
          </span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#102A24]">
          Surah {verse.surah.nameEnglish}
        </h2>

        <p className="font-arabic text-lg text-[#163D32] pt-0.5">
          سورة {verse.surah.nameArabic}
        </p>
      </motion.div>

      {/* Subtle ornamental divider (Staged Reveal 2) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.18, ease: "easeOut" }}
        className="flex items-center justify-center gap-3 my-4 text-[#B69A5A]"
      >
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#B69A5A]/40" />
        <span className="text-xs font-arabic select-none text-[#B69A5A]">۞</span>
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#B69A5A]/40" />
      </motion.div>

      {/* Arabic Qur'anic Verse Display (Staged Reveal 3 with subtle scale & upward motion) */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        <ArabicVerse arabic={verse.arabic} />
      </motion.div>

      {/* English Meaning & Source Attribution (Staged Reveal 4) */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.38, ease: "easeOut" }}
      >
        <Translation
          text={verse.translation.text}
          source={verse.translation.source}
        />
      </motion.div>

      {/* Simple Summary of Meaning */}
      {verse.summary && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.43, ease: "easeOut" }}
        >
          <VerseSummary summary={verse.summary} />
        </motion.div>
      )}

      {/* Context */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.48, ease: "easeOut" }}
      >
        <VerseContext context={verse.context} />
      </motion.div>

      {/* Scholarly References */}
      {verse.scholarlyReference && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.58, ease: "easeOut" }}
        >
          <ScholarlyReferences reference={verse.scholarlyReference} />
        </motion.div>
      )}

      {/* Prophetic Narration (Hadith) */}
      {verse.hadith && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.63, ease: "easeOut" }}
        >
          <HadithReference hadith={verse.hadith} />
        </motion.div>
      )}

      {/* Editorial Reflection */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.68, ease: "easeOut" }}
      >
        <ReflectionCard reflection={verse.reflection} />
      </motion.div>

      {/* Safety Notice for sensitive emotional categories */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.75 }}
      >
        <SafetyNotice themeSlug={themeSlug} />
      </motion.div>

      {/* Curatorial Disclaimer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
      >
        <GuidanceDisclaimer />
      </motion.div>

      {/* Another Passage Action */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.85 }}
      >
        <AnotherPassageButton
          onExploreAnother={onExploreAnother}
          isLoading={isSwitching}
        />
      </motion.div>
    </article>
  );
}
