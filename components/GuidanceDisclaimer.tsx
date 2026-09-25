"use client";

import React, { useState } from "react";
import { LuInfo, LuChevronDown, LuChevronUp } from "react-icons/lu";

export default function GuidanceDisclaimer() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full max-w-xl mx-auto my-4">
      <div className="rounded-xl border border-[#B69A5A]/25 bg-[#FAF8F5]/80 p-3 sm:p-4 text-xs transition-all">
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between gap-2 text-left text-[#163D32] hover:text-[#102A24] focus:outline-none cursor-pointer"
          aria-expanded={isExpanded}
        >
          <div className="flex items-center gap-2">
            <LuInfo className="w-4 h-4 text-[#B69A5A] shrink-0" />
            <span className="font-medium text-[11px] uppercase tracking-wider">
              Curatorial Notice & Spiritual Clarification
            </span>
          </div>
          <span className="text-[#B69A5A] p-0.5 rounded hover:bg-[#B69A5A]/10">
            {isExpanded ? (
              <LuChevronUp className="w-4 h-4" />
            ) : (
              <LuChevronDown className="w-4 h-4" />
            )}
          </span>
        </button>

        {/* Collapsed short teaser vs full expanded note */}
        {!isExpanded && (
          <p className="mt-1 text-[11px] text-[#69736E] leading-relaxed line-clamp-1">
            This passage has been curated as relevant to this topic. Its appearance here is not a claim that Allah specifically selected this verse for you.
          </p>
        )}

        {isExpanded && (
          <div className="mt-2.5 pt-2.5 border-t border-[#B69A5A]/20 space-y-2 text-[11px] text-[#69736E] leading-relaxed animate-fade-in">
            <p>
              This passage has been curated as relevant to this topic. Its appearance here is not a claim that Allah specifically selected this verse for you or that the website is delivering a personal divine message.
            </p>
            <p>
              We present timeless Qur&apos;anic themes for contemplative reading, moral orientation, and spiritual peace.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
