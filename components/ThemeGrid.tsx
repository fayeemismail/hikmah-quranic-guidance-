"use client";

import React from "react";
import { GUIDANCE_THEMES } from "@/data/themes";
import ThemeCard from "./ThemeCard";

export default function ThemeGrid() {
  return (
    <section id="topics-section" className="py-6 sm:py-10">
      <div className="text-center mb-8 sm:mb-10 max-w-xl mx-auto space-y-2">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#102A24] tracking-tight">
          What are you going through?
        </h2>
        <p className="text-xs sm:text-sm text-[#69736E] leading-relaxed">
          Select a situation below to explore a carefully curated Qur&apos;anic passage related to that theme.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 lg:gap-5">
        {GUIDANCE_THEMES.map((theme, index) => (
          <ThemeCard key={theme.id} theme={theme} index={index} />
        ))}
      </div>
    </section>
  );
}
