import React from "react";
import type { Metadata } from "next";
import { LuBookOpen, LuLayers, LuCircleCheck, LuInfo, LuCompass } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Curatorial Methodology & Content Hierarchy",
  description:
    "How Qur'anic passages are selected, verified, and structured across 5 distinct layers of content integrity.",
};

export default function MethodologyPage() {
  const layers = [
    {
      step: "01",
      title: "The Qur'anic Arabic Text",
      tag: "Sacred Divine Revelation",
      description:
        "The verbatim divine text in Arabic. Displayed with authentic Uthmanic orthography and diacritics. It remains the centerpiece and focal point of every presentation, unaltered and preserved.",
    },
    {
      step: "02",
      title: "English Meaning & Translation",
      tag: "Human Rendering (Attributed)",
      description:
        "Accurate, recognized English translations (such as Saheeh International). Clearly labeled as 'English Meaning' or 'Translation' rather than conflated with the Qur'an itself, acknowledging that translation is an explanatory human approximation.",
    },
    {
      step: "03",
      title: "Historical & Thematic Context",
      tag: "Situational Background",
      description:
        "Concise, verified background information detailing the circumstances of revelation (Asbab an-Nuzul) or the textual position within the Surah, preventing out-of-context misinterpretations.",
    },
    {
      step: "04",
      title: "Scholarly References",
      tag: "Classical Tafsir Summaries",
      description:
        "Summaries drawn from verified classical exegetical works (including Tafsir Ibn Kathir, Tafsir as-Sa'di, Tafsir al-Qurtubi, and Tafsir at-Tabari). Clearly marked as summaries to preserve academic fidelity.",
    },
    {
      step: "05",
      title: "Editorial Reflection",
      tag: "Contemplative Human Note",
      description:
        "Modest, thoughtful observations written by the website editorial team to help readers reflect on personal growth and resilience. Explicitly separated and never framed as divine command or authoritative dogma.",
    },
  ];

  return (
    <div className="py-6 sm:py-10 max-w-3xl mx-auto space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#163D32]/8 text-[#163D32] border border-[#B69A5A]/30">
          <LuLayers className="w-3.5 h-3.5 text-[#B69A5A]" />
          <span className="text-[11px] font-semibold uppercase tracking-wider">
            Content Integrity
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#102A24] tracking-tight">
          Curatorial Methodology & Hierarchy
        </h1>
        <p className="text-xs sm:text-sm text-[#69736E] max-w-xl mx-auto leading-relaxed">
          This project helps users explore Qur&apos;anic passages that have been curated around common life situations with rigorous respect for sacred text.
        </p>
      </div>

      {/* Philosophy Statement */}
      <div className="p-6 rounded-2xl bg-white border border-[#E8E3D7] shadow-xs space-y-3">
        <h2 className="text-base font-semibold text-[#102A24] flex items-center gap-2">
          <LuCompass className="w-4 h-4 text-[#B69A5A]" />
          <span>Curatorial Principles</span>
        </h2>
        <p className="text-xs sm:text-sm text-[#1E2723] leading-relaxed">
          The purpose of this platform is not to act as an oracle, nor to claim insight into the personal decrees of Allah for an individual user. Rather, it serves as an educational and spiritual compass—allowing seekers to discover what the Qur&apos;an articulates regarding specific human trials, emotional seasons, and moral questions.
        </p>
        <p className="text-xs sm:text-sm text-[#69736E] leading-relaxed">
          Passages are selected strictly on the basis of authentic thematic relevance, verified meanings, and established contextual harmony. We avoid attaching verses haphazardly or presenting verses without their canonical references.
        </p>
      </div>

      {/* The 5-Layer Hierarchy */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-[#102A24] tracking-tight">
          The 5-Layer Content Hierarchy
        </h2>
        <p className="text-xs text-[#69736E]">
          Every passage in this application follows a strict informational hierarchy to prevent confusing human editorial commentary with divine revelation.
        </p>

        <div className="space-y-3 pt-2">
          {layers.map((layer) => (
            <div
              key={layer.step}
              className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E3D7] relative overflow-hidden"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#B69A5A]">
                      {layer.step}
                    </span>
                    <h3 className="text-sm sm:text-base font-semibold text-[#102A24]">
                      {layer.title}
                    </h3>
                  </div>
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-[#163D32] bg-[#163D32]/10 px-2 py-0.5 rounded">
                    {layer.tag}
                  </span>
                  <p className="text-xs sm:text-sm text-[#1E2723]/90 leading-relaxed pt-1">
                    {layer.description}
                  </p>
                </div>
                <LuCircleCheck className="w-5 h-5 text-[#B69A5A] shrink-0 mt-1" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Absolute Clarification */}
      <div className="p-6 rounded-2xl bg-[#102A24] text-white space-y-3 shadow-md">
        <div className="flex items-center gap-2 text-[#B69A5A]">
          <LuInfo className="w-4 h-4" />
          <h3 className="text-xs font-semibold uppercase tracking-wider">
            Reverent Clarification
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
          The website does not claim to know what Allah specifically intends for an individual user at any exact second. The presentation of a passage is an invitation to thoughtful study and reflection on enduring divine wisdom, not a proclamation of personal revelation.
        </p>
      </div>
    </div>
  );
}
