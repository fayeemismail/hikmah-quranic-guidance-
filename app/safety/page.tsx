import React from "react";
import type { Metadata } from "next";
import {
  LuShieldCheck,
  LuShieldAlert,
  LuHeart,
  LuInfo,
  LuBookOpen,
} from "react-icons/lu";

export const metadata: Metadata = {
  title: "Mental Health Safety & Guidance Principles",
  description:
    "Important safety principles: spiritual comfort, medical disclaimer, crisis contacts, and respectful boundaries regarding divine text.",
};

export default function SafetyPage() {
  return (
    <div className="py-6 sm:py-10 max-w-3xl mx-auto space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#163D32]/8 text-[#163D32] border border-[#B69A5A]/30">
          <LuShieldCheck className="w-3.5 h-3.5 text-[#B69A5A]" />
          <span className="text-[11px] font-semibold uppercase tracking-wider">
            Safety & Ethical Boundaries
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#102A24] tracking-tight">
          Mental Health Safety & Respectful Principles
        </h1>
        <p className="text-xs sm:text-sm text-[#69736E] max-w-xl mx-auto leading-relaxed">
          Understanding the nature of this platform, spiritual boundaries, and where to seek professional care.
        </p>
      </div>

      {/* Immediate Crisis Notice */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[#FEF2F2] border border-[#EF4444]/30 space-y-3">
        <div className="flex items-center gap-2.5 text-[#991B1B]">
          <LuShieldAlert className="w-5 h-5 text-[#DC2626]" />
          <h2 className="text-sm sm:text-base font-semibold uppercase tracking-wide">
            Immediate Danger or Crisis Support
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#7F1D1D] leading-relaxed">
          If you or someone you know is in immediate physical danger, struggling with suicidal thoughts, or experiencing an overwhelming acute mental health crisis:
        </p>
        <p className="text-xs sm:text-sm font-semibold text-[#991B1B]">
          Seek immediate help from local emergency services (e.g. 911 in the US, 999/111 in the UK, 112 in Europe, or your local emergency number), a medical professional, a crisis hotline, or someone you trust.
        </p>
        <div className="pt-2 flex flex-wrap gap-2 text-xs">
          <div className="bg-white/80 px-3 py-1.5 rounded-lg border border-[#EF4444]/20 text-[#991B1B] font-medium">
            <span className="font-bold">United States & Canada:</span> Call or text 988 (Lifeline)
          </div>
          <div className="bg-white/80 px-3 py-1.5 rounded-lg border border-[#EF4444]/20 text-[#991B1B] font-medium">
            <span className="font-bold">United Kingdom:</span> Call 111 (NHS) or 116 123 (Samaritans)
          </div>
          <div className="bg-white/80 px-3 py-1.5 rounded-lg border border-[#EF4444]/20 text-[#991B1B] font-medium">
            <span className="font-bold">International:</span> Befrienders Worldwide (befrienders.org)
          </div>
        </div>
      </div>

      {/* Section 1: What this website provides vs does NOT provide */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-[#E8E3D7] shadow-xs space-y-2">
          <div className="flex items-center gap-2 text-[#163D32]">
            <LuHeart className="w-4 h-4 text-[#B69A5A]" />
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              What This Website Provides
            </h3>
          </div>
          <ul className="text-xs text-[#1E2723]/90 space-y-2 leading-relaxed list-disc list-inside">
            <li>Carefully curated Qur&apos;anic passages related to common life topics.</li>
            <li>Accurate Arabic text with verified English translations.</li>
            <li>Established historical context and classical scholarly commentary summaries.</li>
            <li>Thoughtful, distinct editorial reflections for contemplative pause.</li>
          </ul>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#E8E3D7] shadow-xs space-y-2">
          <div className="flex items-center gap-2 text-[#991B1B]">
            <LuShieldAlert className="w-4 h-4 text-[#DC2626]" />
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              What This Website Does Not Provide
            </h3>
          </div>
          <ul className="text-xs text-[#1E2723]/90 space-y-2 leading-relaxed list-disc list-inside">
            <li>Medical, psychological, psychiatric, or clinical diagnosis or therapy.</li>
            <li>A replacement or substitute for licensed mental health care.</li>
            <li>Personalized divine prophecies, fortune telling, or algorithmic fatwas.</li>
            <li>Claims that a specific verse was personally selected by God for you through this app.</li>
          </ul>
        </div>
      </div>

      {/* Section 2: Spiritual comfort, not medical treatment */}
      <div className="p-6 rounded-2xl bg-white border border-[#E8E3D7] space-y-3 shadow-xs">
        <div className="flex items-center gap-2 text-[#163D32]">
          <LuHeart className="w-4 h-4 text-[#B69A5A]" />
          <h2 className="text-base font-semibold text-[#102A24]">
            Spiritual Comfort, Not Medical Treatment
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#1E2723] leading-relaxed">
          The Qur&apos;an can be a source of spiritual comfort, reflection, moral fortitude, and hope. However, this website does not provide medical or mental-health treatment, and Qur&apos;anic passages should not be presented as a replacement for professional care.
        </p>
        <p className="text-xs sm:text-sm text-[#69736E] leading-relaxed">
          In Islamic tradition, seeking qualified medical and psychological assistance when unwell is a praised and sunnah-aligned act. Physical and psychological conditions deserve compassionate clinical attention alongside spiritual remembrance.
        </p>
        <p className="text-xs sm:text-sm text-[#69736E] leading-relaxed">
          For serious or persistent mental-health difficulties, please consider speaking with a qualified mental-health professional, counselor, or a trusted person who can support you.
        </p>
      </div>

      {/* Section 3: No Personal Divine-Message Claims */}
      <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#B69A5A]/30 space-y-3">
        <div className="flex items-center gap-2 text-[#102A24]">
          <LuInfo className="w-4 h-4 text-[#B69A5A]" />
          <h2 className="text-base font-semibold">
            No Personal Divine-Message Claims
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#1E2723] leading-relaxed">
          This website never says:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#991B1B] italic font-medium">
          <div className="p-2.5 rounded-lg bg-white border border-[#EF4444]/20">
            &ldquo;Allah chose this verse for you.&rdquo;
          </div>
          <div className="p-2.5 rounded-lg bg-white border border-[#EF4444]/20">
            &ldquo;This verse was sent to you.&rdquo;
          </div>
          <div className="p-2.5 rounded-lg bg-white border border-[#EF4444]/20">
            &ldquo;Allah is speaking directly to you through this website.&rdquo;
          </div>
          <div className="p-2.5 rounded-lg bg-white border border-[#EF4444]/20">
            &ldquo;This is the sign you were looking for.&rdquo;
          </div>
        </div>
        <p className="text-xs sm:text-sm text-[#69736E] leading-relaxed pt-2">
          Instead, we use sober, honest phrasing:
          <span className="block mt-1 italic text-[#163D32]">
            &ldquo;This passage has been curated as relevant to this topic.&rdquo;
          </span>
          <span className="block italic text-[#163D32]">
            &ldquo;Explore a Qur&apos;anic passage related to what you&apos;re experiencing.&rdquo;
          </span>
        </p>
      </div>

      {/* Section 4: Qur'an vs Translation & Scholarly Explanation vs Reflection */}
      <div className="p-6 rounded-2xl bg-white border border-[#E8E3D7] space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-[#163D32]">
          <LuBookOpen className="w-4 h-4 text-[#B69A5A]" />
          <h2 className="text-base font-semibold text-[#102A24]">
            Content Distinction: Text, Translation, Tafsir & Reflection
          </h2>
        </div>
        <div className="space-y-3 text-xs sm:text-sm text-[#1E2723] leading-relaxed">
          <p>
            <strong>1. The Qur&apos;an:</strong> The literal word of Allah revealed in Arabic to Prophet Muhammad (peace be upon him). Only the Arabic text is the Qur&apos;an.
          </p>
          <p>
            <strong>2. English Meaning / Translation:</strong> A human interpretation and endeavor to convey the meanings into English. It is not the Qur&apos;an itself and must never be called such. We use verified translations (e.g. Saheeh International).
          </p>
          <p>
            <strong>3. Classical Scholarly Context:</strong> Summaries of classical tafsir works (e.g. Ibn Kathir, As-Sa&apos;di, Al-Qurtubi, At-Tabari) providing historical circumstances and verified linguistic insights.
          </p>
          <p>
            <strong>4. Editorial Reflection:</strong> Human observations created by the editorial team to offer practical, daily framing. They are distinctly separated and do not carry religious authority.
          </p>
        </div>
      </div>
    </div>
  );
}
