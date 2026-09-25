import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Link from "next/link";
import {
  LuBookOpen,
  LuShieldCheck,
  LuSparkles,
  LuCompass,
  LuHeart,
  LuArrowRight,
} from "react-icons/lu";

export const metadata: Metadata = {
  title: "Motivational Quran Verses & Guidance for Life's Difficult Moments",
  description:
    "Seeking solutions in Quran verses? Discover authentic Qur'anic guidance and motivational verses for patience, anxiety, sadness, feeling lost, hardship, and financial difficulty. Verified Arabic, Saheeh International translation, classical Tafsir, and authentic Hadith.",
  keywords: [
    "patience quranic verses",
    "guidance in quran",
    "motivational quran verses",
    "solution in quran verse",
    "quranic verses",
    "solutions to problems in quran",
    "quran verses for anxiety",
    "quran verses for sadness",
    "quran verses for hardship",
    "sabr in quran",
    "quranic wisdom for life",
  ],
  alternates: {
    canonical: "https://hikmah-guidance.vercel.app",
  },
  openGraph: {
    title: "Motivational Quran Verses & Guidance for Life's Difficult Moments | Hikmah",
    description:
      "Find genuine solutions and peace in verified Quran verses curated for emotional challenges like anxiety, sadness, hardship, and seeking guidance.",
    url: "https://hikmah-guidance.vercel.app",
    type: "website",
  },
};

export default function HomePage() {
  const steps = [
    {
      num: "01",
      title: "Choose Your Moment",
      desc: "Select the situation that feels closest to what your heart is experiencing.",
      icon: LuCompass,
    },
    {
      num: "02",
      title: "Turn Toward the Qur'an",
      desc: "Explore verified Arabic passages curated around that specific life theme.",
      icon: LuBookOpen,
    },
    {
      num: "03",
      title: "Pause & Reflect",
      desc: "Read classical commentary and context for grounded, peaceful spiritual perspective.",
      icon: LuHeart,
    },
  ];

  // FAQ Schema for Rich Search Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How can I find solutions to life's problems in Quran verses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Quran addresses human experiences—such as anxiety, sadness, financial difficulty, and loss of purpose—by providing divine reminders, ethical frameworks, and models of perseverance. Hikmah organizes verified passages by life challenge with classical Tafsir and authentic Hadith to help readers understand context and meaning.",
        },
      },
      {
        "@type": "Question",
        name: "What does the Quran say about patience (Sabr)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Quran emphasizes patience (Sabr) in more than 90 verses, pairing it with prayer (Surah Al-Baqarah 2:153), promising unlimited reward (Surah Az-Zumar 39:10), and reminding believers that ease accompanies hardship (Surah Ash-Sharh 94:5-6).",
        },
      },
      {
        "@type": "Question",
        name: "Where can I find motivational Quran verses for difficult times?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hikmah offers curated passages across 10 vital topics including Hardship, Hope, Lack of Motivation, Anxiety, and Need for Guidance, complete with Arabic calligraphy, English meaning, and classical scholarly explanations.",
        },
      },
    ],
  };

  return (
    <div className="space-y-10 sm:space-y-14 pb-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero section */}
      <Hero />

      {/* 3-Step Simple Intuitive Flow Guide */}
      <section className="max-w-3xl mx-auto px-2">
        <div className="text-center mb-6 space-y-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B69A5A]">
            How It Works
          </span>
          <h2 className="text-xl sm:text-2xl font-semibold text-[#102A24] tracking-tight">
            A Quiet, Intuitive Journey
          </h2>
          <p className="text-xs sm:text-sm text-[#69736E] max-w-md mx-auto">
            Three simple steps to pause, reflect, and discover relevant Qur&apos;anic wisdom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-5 rounded-2xl bg-white border border-[#E8E3D7] shadow-xs flex flex-col justify-between space-y-3 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#B69A5A]">
                    {step.num}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#163D32]/8 text-[#163D32] flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#B69A5A]" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-[#102A24]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#69736E] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Central Action CTA */}
        <div className="mt-8 text-center">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#163D32] hover:bg-[#102A24] text-[#FAF8F5] text-xs sm:text-sm font-medium tracking-wide shadow-md hover:shadow-lg transition-all border border-[#B69A5A]/30 group"
          >
            <span>Choose what you&apos;re going through</span>
            <LuArrowRight className="w-4 h-4 text-[#B69A5A] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Curatorial Principles Banner */}
      <section className="p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-[#E8E3D7] text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#163D32]/8 text-[#163D32] border border-[#B69A5A]/30">
          <LuSparkles className="w-3.5 h-3.5 text-[#B69A5A]" />
          <span className="text-[11px] font-semibold uppercase tracking-wider">
            Curatorial Principles
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-semibold text-[#102A24]">
          Carefully Curated, Reverently Presented
        </h3>

        <p className="text-xs sm:text-sm text-[#69736E] leading-relaxed max-w-lg mx-auto">
          Every passage in this collection is verified against reliable Qur&apos;anic sources, paired with recognized translations, and supplemented with classical scholarly context. We never claim divine personal selection.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/methodology"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-[#163D32] bg-white border border-[#B69A5A]/30 hover:bg-[#B69A5A]/10 transition-colors shadow-xs"
          >
            <LuBookOpen className="w-3.5 h-3.5 text-[#B69A5A]" />
            <span>Read Curatorial Methodology</span>
          </Link>
          <Link
            href="/safety"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-[#163D32] bg-white border border-[#B69A5A]/30 hover:bg-[#B69A5A]/10 transition-colors shadow-xs"
          >
            <LuShieldCheck className="w-3.5 h-3.5 text-[#B69A5A]" />
            <span>Mental Health Safety Statement</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
