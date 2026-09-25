import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { LuCompass, LuHeart, LuBookOpen, LuShieldCheck, LuSparkles, LuArrowRight } from "react-icons/lu";

export const metadata: Metadata = {
  title: "About the Project — Ethical & Reverent Qur'anic Guidance",
  description:
    "An elegant digital sanctuary designed to explore Qur'anic guidance through verified passages, clear content hierarchy, classical Tafsir, and peaceful typography.",
  keywords: [
    "about hikmah guidance",
    "quranic guidance project",
    "quran verses with meaning",
    "islamic guidance website",
    "authentic quranic reflections",
  ],
  alternates: {
    canonical: "https://hikmah-guidance.vercel.app/about",
  },
  openGraph: {
    title: "About Hikmah — Ethical & Reverent Qur'anic Guidance",
    description:
      "A calm digital sanctuary designed to connect seekers with verified Qur'anic wisdom, classical commentary, and peaceful perspective.",
    url: "https://hikmah-guidance.vercel.app/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="py-6 sm:py-10 max-w-3xl mx-auto space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#163D32]/8 text-[#163D32] border border-[#B69A5A]/30">
          <LuCompass className="w-3.5 h-3.5 text-[#B69A5A]" />
          <span className="text-[11px] font-semibold uppercase tracking-wider">
            Our Purpose
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#102A24] tracking-tight">
          About Hikmah
        </h1>
        <p className="text-xs sm:text-sm text-[#69736E] max-w-xl mx-auto leading-relaxed">
          An intentional digital space where anyone can pause, breathe, and reflect on what the Qur&apos;an says about their current season of life.
        </p>
      </div>

      {/* Narrative Section */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E3D7] shadow-xs space-y-4">
        <h2 className="text-lg font-semibold text-[#102A24]">
          A Quiet Space in a Noisy Digital World
        </h2>
        <p className="text-xs sm:text-sm text-[#1E2723] leading-relaxed">
          When people experience sadness, anxiety, financial stress, or a sense of directionlessness, they often search for a moment of quiet reassurance. Modern web platforms are often filled with distracting popups, algorithmic noise, and social pressure.
        </p>
        <p className="text-xs sm:text-sm text-[#1E2723] leading-relaxed">
          Hikmah was built to be different. It is designed as a calm, contemplative digital sanctuary—minimal, reverent, and focused entirely on the timeless beauty of the Qur&apos;an.
        </p>
      </div>

      {/* Core Principles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E3D7] space-y-2">
          <div className="w-8 h-8 rounded-lg bg-[#163D32]/10 text-[#163D32] flex items-center justify-center">
            <LuBookOpen className="w-4 h-4 text-[#B69A5A]" />
          </div>
          <h3 className="text-sm font-semibold text-[#102A24]">
            Content Reverence
          </h3>
          <p className="text-xs text-[#69736E] leading-relaxed">
            Every Qur&apos;anic verse is verified, displayed with full Arabic diacritics, and paired with recognized translations and authentic classical contexts.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E3D7] space-y-2">
          <div className="w-8 h-8 rounded-lg bg-[#163D32]/10 text-[#163D32] flex items-center justify-center">
            <LuShieldCheck className="w-4 h-4 text-[#B69A5A]" />
          </div>
          <h3 className="text-sm font-semibold text-[#102A24]">
            Ethical Restraint
          </h3>
          <p className="text-xs text-[#69736E] leading-relaxed">
            We never claim that an algorithm or website delivers a personal decree from God, nor do we present scripture as a substitute for professional mental health care.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E3D7] space-y-2">
          <div className="w-8 h-8 rounded-lg bg-[#163D32]/10 text-[#163D32] flex items-center justify-center">
            <LuHeart className="w-4 h-4 text-[#B69A5A]" />
          </div>
          <h3 className="text-sm font-semibold text-[#102A24]">
            Mobile-First Elegance
          </h3>
          <p className="text-xs text-[#69736E] leading-relaxed">
            Crafted specifically for human hands and mobile screens (from 320px to 430px+), using warm parchment tones, generous line heights, and zero distracting animations.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E3D7] space-y-2">
          <div className="w-8 h-8 rounded-lg bg-[#163D32]/10 text-[#163D32] flex items-center justify-center">
            <LuSparkles className="w-4 h-4 text-[#B69A5A]" />
          </div>
          <h3 className="text-sm font-semibold text-[#102A24]">
            No Emojis or Clichés
          </h3>
          <p className="text-xs text-[#69736E] leading-relaxed">
            Styled with bespoke Arabic typography (Amiri) and clean iconography rather than cartoonish illustrations or overwhelming decorative tropes.
          </p>
        </div>
      </div>

      {/* Creator Section: Spiritual, humble, personal note */}
      <section className="p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-[#B69A5A]/30 relative overflow-hidden space-y-4">
        {/* Subtle decorative Qur'anic detail */}
        <div className="flex items-center gap-2 text-[#B69A5A]">
          <span className="h-px w-8 bg-[#B69A5A]/40" />
          <span className="text-xs font-arabic select-none">۞</span>
          <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#102A24]">
            A Note From the Creator
          </h2>
          <span className="h-px w-8 bg-[#B69A5A]/40" />
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-[#1E2723] leading-relaxed font-sans">
          <p>
            I created this project from a simple intention: to make it easier for someone going through a difficult moment to pause and turn toward the Qur&apos;an.
          </p>
          <p>
            There are moments in life when a person feels lost, overwhelmed, heartbroken, uncertain, or simply in need of hope. In those moments, finding a relevant passage from the Qur&apos;an can be a meaningful starting point for reflection.
          </p>
          <p>
            This website was created to provide a quiet space for that exploration — not to speak on behalf of Allah, and not to tell anyone what Allah intends specifically for them, but to help people discover passages of the Qur&apos;an that relate to the situation they are facing.
          </p>
          <p>
            My hope is that this becomes a small means through which someone can pause, reflect, remember Allah, and take their next step with greater patience and hope.
          </p>
          <p className="italic text-[#163D32] pt-1 font-medium">
            May this project remain sincere in its intention and beneficial to anyone who visits it.
          </p>
        </div>

        <div className="pt-3 border-t border-[#B69A5A]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div>
            <p className="text-sm font-semibold text-[#102A24]">Muhammed Faheem</p>
            <p className="text-xs text-[#69736E]">Creator of this project</p>
          </div>
          <span className="text-[11px] text-[#B69A5A] uppercase tracking-wider font-medium">
            Dedicated in sincerity
          </span>
        </div>
      </section>

      {/* CTA Box */}
      <div className="p-6 rounded-2xl bg-[#163D32] text-white text-center space-y-3">
        <h3 className="text-base sm:text-lg font-semibold text-[#FAF8F5]">
          Ready to Explore?
        </h3>
        <p className="text-xs sm:text-sm text-white/80 max-w-md mx-auto">
          Begin exploring the 10 curated life themes and discover passages that bring clarity and calm.
        </p>
        <div className="pt-2">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B69A5A] hover:bg-[#A38848] text-[#102A24] text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
          >
            <span>Explore All 10 Themes</span>
            <LuArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
