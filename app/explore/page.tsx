import React from "react";
import type { Metadata } from "next";
import { GUIDANCE_THEMES } from "@/data/themes";
import TopicWheelPicker from "@/components/TopicWheelPicker";
import { LuCompass } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Explore Guidance — Choose What You're Going Through",
  description:
    "Choose the situation that feels closest to what you're experiencing. Explore Qur'anic passages curated around that theme.",
};

export default function ExplorePage() {
  return (
    <div className="py-4 sm:py-8 max-w-lg mx-auto space-y-6">
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
