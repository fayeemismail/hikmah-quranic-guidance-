import React from "react";
import { LuLanguages, LuExternalLink, LuInfo } from "react-icons/lu";

interface MalayalamTranslationProps {
  malayalamTranslation?: {
    text: string;
    source: string;
    reference?: string;
    sourceUrl?: string;
  } | null;
}

export default function MalayalamTranslation({
  malayalamTranslation,
}: MalayalamTranslationProps) {
  // If no Malayalam translation is available, show a calm, graceful unavailable notice
  // without falsely attributing to Amani Moulavi.
  if (!malayalamTranslation || !malayalamTranslation.text) {
    return (
      <section
        aria-label="Malayalam Meaning"
        className="mt-6 pt-5 border-t border-[#E8E3D7]/70"
      >
        <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#69736E] mb-2">
          <LuLanguages className="w-3.5 h-3.5 text-[#B69A5A]" />
          <span>Malayalam Meaning</span>
          <span className="text-[10px] lowercase text-[#69736E]/70 font-normal">
            (മലയാള പരിഭാഷ)
          </span>
        </div>
        <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E3D7]/60 text-xs text-[#69736E] flex items-start gap-2.5">
          <LuInfo className="w-4 h-4 text-[#B69A5A] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Malayalam meaning currently unavailable for this passage. Verified
            translations from Amani Moulavi are added only after direct source
            and licensing verification.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      aria-label="Malayalam Meaning"
      className="mt-6 pt-5 border-t border-[#E8E3D7]/70 space-y-3"
    >
      {/* Header with clear distinction */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#163D32]">
          <LuLanguages className="w-3.5 h-3.5 text-[#B69A5A]" />
          <span>Malayalam Meaning</span>
          <span className="text-[10px] text-[#69736E] font-normal">
            • മലയാള അർത്ഥം
          </span>
        </div>

        <span className="text-[10px] font-medium text-[#B69A5A] uppercase tracking-wider bg-[#B69A5A]/10 px-2 py-0.5 rounded-full border border-[#B69A5A]/25">
          {malayalamTranslation.source}
        </span>
      </div>

      {/* Sourced Malayalam text */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E3D7] shadow-xs">
        <p
          className="text-base sm:text-lg text-[#102A24] font-medium leading-[1.8] sm:leading-[1.85]"
          style={{
            fontFamily:
              'var(--font-malayalam), "Noto Sans Malayalam", "Manjari", "Gayathri", "Malayalam Sangam MN", "Nirmala UI", sans-serif',
          }}
        >
          {malayalamTranslation.text}
        </p>

        {/* Source citation */}
        <div className="mt-3 pt-3 border-t border-[#E8E3D7]/60 flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#69736E]">
          <div className="flex items-center gap-1">
            <span className="font-medium text-[#163D32]">Source:</span>
            <span>{malayalamTranslation.source}</span>
            {malayalamTranslation.reference && (
              <span className="text-[#69736E]/80">
                ({malayalamTranslation.reference})
              </span>
            )}
          </div>

          {malayalamTranslation.sourceUrl && (
            <a
              href={malayalamTranslation.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#163D32] hover:text-[#102A24] hover:underline"
            >
              <span>Source Archive</span>
              <LuExternalLink className="w-3 h-3 text-[#B69A5A]" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
