import React from "react";
import { LuScroll } from "react-icons/lu";

interface ScholarlyReferencesProps {
  reference?: {
    source: string;
    summary: string;
  };
}

export default function ScholarlyReferences({
  reference,
}: ScholarlyReferencesProps) {
  if (!reference) return null;

  return (
    <div className="w-full max-w-xl mx-auto my-4 p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E3D7] text-left">
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2 text-[#163D32]">
          <LuScroll className="w-4 h-4 text-[#B69A5A]" />
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#102A24]">
            Scholarly Reference
          </h4>
        </div>
        <span className="text-[10px] uppercase tracking-wider text-[#B69A5A] font-semibold bg-[#B69A5A]/10 px-2 py-0.5 rounded">
          {reference.source}
        </span>
      </div>
      <p className="text-xs sm:text-sm text-[#1E2723]/90 leading-relaxed font-sans">
        <span className="text-[#69736E] text-[11px] block mb-1">
          Summary of classical commentary:
        </span>
        {reference.summary}
      </p>
    </div>
  );
}
