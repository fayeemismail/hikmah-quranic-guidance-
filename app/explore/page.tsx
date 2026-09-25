import React from "react";
import type { Metadata } from "next";
import { GUIDANCE_THEMES } from "@/data/themes";
import TopicWheelPicker from "@/components/TopicWheelPicker";
import { LuCompass } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Explore Quranic Guidance by Situation — Solutions & Wisdom",
  description:
    "Find solutions in Quran verses across 10 life topics: patience, anxiety, sadness, financial difficulty, feeling lost, hardship, and seeking guidance. Browse verified passages with classical Tafsir and authentic Hadith.",
  keywords: [
    "solution in quran verse",
    "guidance in quran",
    "patience quranic verses",
    "motivational quran verses",
    "quranic verses by topic",
    "solutions to problems in quran",
    "quran verses for anxiety",
    "quran verses for patience",
    "quran verses for sadness",
    "islamic guidance situations",
  ],
  alternates: {
    canonical: "https://hikmah-guidance.vercel.app/explore",
  },
  openGraph: {
    title: "Explore Quranic Guidance by Situation — Solutions & Wisdom | Hikmah",
    description:
      "Select what you are going through to explore verified Qur'anic passages, classical commentary, and authentic prophetic guidance.",
    url: "https://hikmah-guidance.vercel.app/explore",
    type: "website",
  },
};

export default function ExplorePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://hikmah-guidance.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Explore Guidance",
        item: "https://hikmah-guidance.vercel.app/explore",
      },
    ],
  };

  return (
    <div className="pt-4 pb-20 sm:py-8 max-w-lg mx-auto space-y-5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header section with explicit wording */}
      <div className="text-center space-y-2.5 px-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#163D32]/8 text-[#163D32] border border-[#B69A5A]/30">
          <LuCompass className="w-3.5 h-3.5 text-[#B69A5A]" />
          <span className="text-[11px] font-semibold uppercase tracking-widest">
            Explore Guidance
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-[#102A24] tracking-tight">
          What are you going through?
        </h1>

        <p className="text-xs sm:text-sm text-[#69736E] max-w-md mx-auto leading-relaxed">
          Choose the situation that feels closest to what you&apos;re experiencing. We&apos;ll show you Qur&apos;anic passages that have been carefully curated around that theme.
        </p>
      </div>

      {/* Central Scroll Picker / Wheel Picker */}
      <div className="pt-2">
        <TopicWheelPicker themes={GUIDANCE_THEMES} />
      </div>
    </div>
  );
}
