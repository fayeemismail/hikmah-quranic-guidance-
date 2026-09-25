"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { LuSparkles, LuArrowRight } from "react-icons/lu";

interface AnotherPassageButtonProps {
  onExploreAnother: () => void;
  isLoading?: boolean;
}

export default function AnotherPassageButton({
  onExploreAnother,
  isLoading = false,
}: AnotherPassageButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full max-w-xl mx-auto my-6 text-center">
      <motion.button
        type="button"
        onClick={onExploreAnother}
        disabled={isLoading}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Explore another passage from this topic"
        className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#163D32] hover:bg-[#102A24] text-[#FAF8F5] text-xs sm:text-sm font-medium tracking-wide shadow-md hover:shadow-lg transition-all border border-[#B69A5A]/30 cursor-pointer disabled:opacity-50"
      >
        <LuSparkles
          className={`w-4 h-4 text-[#B69A5A] transition-transform duration-300 ${
            isLoading ? "animate-spin" : isHovered ? "rotate-45" : ""
          }`}
        />
        <span>Explore another passage</span>
        <LuArrowRight
          className={`w-4 h-4 text-[#B69A5A] transition-transform duration-200 ${
            isHovered ? "translate-x-1" : ""
          }`}
        />
      </motion.button>
      <p className="text-[11px] text-[#69736E] mt-2">
        Displays another curated passage belonging to this theme
      </p>
    </div>
  );
}
