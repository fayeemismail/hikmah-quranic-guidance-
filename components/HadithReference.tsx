import React from "react";
import { LuQuote } from "react-icons/lu";

interface HadithReferenceProps {
  hadith?: {
    collection: string;
    reference: string;
    text?: string;
    relevance: string;
  } | null;
}

export default function HadithReference({ hadith }: HadithReferenceProps) {
  if (!hadith) return null;

  return (
    <div className="w-full max-w-xl mx-auto my-4 p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#B69A5A]/30 text-left">
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2 text-[#163D32]">
          <LuQuote className="w-4 h-4 text-[#B69A5A]" />
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#102A24]">
            Prophetic Narration (Hadith)
          </h4>
        </div>
        <span className="text-[10px] uppercase tracking-wider text-[#163D32] font-semibold bg-[#163D32]/10 px-2 py-0.5 rounded">
          {hadith.collection} • {hadith.reference}
        </span>
      </div>

      {hadith.text && (
        <blockquote className="text-xs sm:text-sm text-[#1E2723] italic font-serif my-2 pl-3 border-l-2 border-[#B69A5A]/40 leading-relaxed">
          &ldquo;{hadith.text}&rdquo;
        </blockquote>
      )}

      <p className="text-xs text-[#69736E] leading-relaxed pt-1">
        <span className="font-medium text-[#102A24]">Relevance: </span>
        {hadith.relevance}
      </p>
    </div>
  );
}
