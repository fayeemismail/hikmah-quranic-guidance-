"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";
import { GuidanceTheme } from "@/types/guidance";
import TopicIcon from "./TopicIcon";

interface ThemeCardProps {
  theme: GuidanceTheme;
  index: number;
}

export default function ThemeCard({ theme, index }: ThemeCardProps) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSelect = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    // 700ms peaceful transition sequence
    setTimeout(() => {
      router.push(`/topic/${theme.slug}`);
    }, 650);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="relative"
    >
      <motion.button
        type="button"
        onClick={handleSelect}
        whileHover={{ y: -3, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        aria-label={`Explore guidance on ${theme.title}: ${theme.description}`}
        className={`w-full text-left relative overflow-hidden rounded-2xl p-5 sm:p-6 transition-all duration-300 border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A5A] group cursor-pointer ${
          isTransitioning
            ? "bg-[#163D32] border-[#B69A5A] text-white shadow-xl ring-2 ring-[#B69A5A]/50"
            : "bg-[#FFFFFF] hover:bg-[#FAF8F5] border-[#E8E3D7] hover:border-[#B69A5A]/50 shadow-xs hover:shadow-md"
        }`}
      >
        {/* Soft radial expansion animation on select */}
        {isTransitioning && (
          <motion.div
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#B69A5A]/25 pointer-events-none"
          />
        )}

        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3.5">
            {/* Topic Icon Container */}
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                isTransitioning
                  ? "bg-[#FAF8F5]/15 text-[#B69A5A]"
                  : "bg-[#163D32]/8 text-[#163D32] group-hover:bg-[#163D32] group-hover:text-[#B69A5A]"
              }`}
            >
              <TopicIcon name={theme.icon} className="w-5 h-5" />
            </div>

            {/* Title & Description */}
            <div className="space-y-1">
              <h3
                className={`text-base sm:text-lg font-semibold tracking-tight transition-colors duration-200 ${
                  isTransitioning
                    ? "text-white"
                    : "text-[#102A24] group-hover:text-[#163D32]"
                }`}
              >
                {theme.title}
              </h3>
              <p
                className={`text-xs sm:text-sm leading-relaxed transition-colors duration-200 line-clamp-2 ${
                  isTransitioning ? "text-white/80" : "text-[#69736E]"
                }`}
              >
                {theme.description}
              </p>
            </div>
          </div>

          {/* Action indicator arrow */}
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
              isTransitioning
                ? "bg-[#B69A5A] text-[#102A24]"
                : "bg-transparent text-[#B69A5A] group-hover:bg-[#B69A5A]/15 group-hover:translate-x-0.5"
            }`}
          >
            <LuArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Subtle decorative bottom accent bar */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 ${
            isTransitioning
              ? "bg-[#B69A5A]"
              : "bg-transparent group-hover:bg-[#B69A5A]/40"
          }`}
        />
      </motion.button>
    </motion.div>
  );
}
