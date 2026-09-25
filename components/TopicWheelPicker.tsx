"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LuChevronsUpDown, LuArrowRight, LuSparkles } from "react-icons/lu";
import { GuidanceTheme } from "@/types/guidance";
import TopicIcon from "./TopicIcon";

interface TopicWheelPickerProps {
  themes: GuidanceTheme[];
}

const ITEM_HEIGHT = 58; // pixels per item
const VISIBLE_COUNT = 5; // 5 visible rows, middle is row index 2
const CONTAINER_HEIGHT = ITEM_HEIGHT * VISIBLE_COUNT; // 290px
const PADDING_Y = (CONTAINER_HEIGHT - ITEM_HEIGHT) / 2; // 116px padding top & bottom

export default function TopicWheelPicker({ themes }: TopicWheelPickerProps) {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const selectedTheme = themes[selectedIndex] || themes[0];

  // Update selected index based on scroll position
  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const currentScrollTop = scrollRef.current.scrollTop;
    setScrollTop(currentScrollTop);

    // Calculate nearest item index
    const index = Math.round(currentScrollTop / ITEM_HEIGHT);
    const clampedIndex = Math.max(0, Math.min(themes.length - 1, index));
    if (clampedIndex !== selectedIndex) {
      setSelectedIndex(clampedIndex);
    }

    // Debounce snap settlement
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    isScrollingRef.current = true;
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
      // Ensure perfect snap alignment on settle
      if (scrollRef.current) {
        const targetScroll = clampedIndex * ITEM_HEIGHT;
        if (Math.abs(scrollRef.current.scrollTop - targetScroll) > 1) {
          scrollRef.current.scrollTo({
            top: targetScroll,
            behavior: "smooth",
          });
        }
      }
    }, 120);
  }, [selectedIndex, themes.length]);

  // Handle clicking an item directly
  const handleItemClick = (index: number) => {
    if (isTransitioning) return;
    setSelectedIndex(index);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: index * ITEM_HEIGHT,
        behavior: "smooth",
      });
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = Math.min(themes.length - 1, selectedIndex + 1);
        handleItemClick(next);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev = Math.max(0, selectedIndex - 1);
        handleItemClick(prev);
      } else if (e.key === "Enter") {
        handleExplore();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, isTransitioning, themes.length]);

  // Transition to verse page
  const handleExplore = () => {
    if (isTransitioning || !selectedTheme) return;
    setIsTransitioning(true);

    // Peaceful transition of 750ms
    setTimeout(() => {
      router.push(`/topic/${selectedTheme.slug}`);
    }, 750);
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center">
      {/* Visual Instruction above picker */}
      <div className="flex items-center gap-1.5 text-xs text-[#B69A5A] font-medium tracking-wide uppercase mb-3 select-none">
        <LuChevronsUpDown className="w-4 h-4 animate-bounce" style={{ animationDuration: "2s" }} />
        <span>Scroll or tap to choose</span>
      </div>

      {/* Main Wheel Container */}
      <div className="relative w-full rounded-3xl bg-[#FFFFFF] border border-[#E8E3D7] shadow-xl p-2 sm:p-3 overflow-hidden">
        {/* Subtle center lens / indicator bracket */}
        <div
          className="pointer-events-none absolute left-3 right-3 rounded-2xl bg-gradient-to-r from-[#163D32]/8 via-[#B69A5A]/12 to-[#163D32]/8 border-y border-[#B69A5A]/40 transition-all duration-300 z-10"
          style={{
            top: `${PADDING_Y + 12}px`,
            height: `${ITEM_HEIGHT}px`,
          }}
        >
          <div className="absolute left-2.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#B69A5A]" />
          <div className="absolute right-2.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#B69A5A]" />
        </div>

        {/* Top Vignette Gradient (Blur / Fade for distant items) */}
        <div
          className="pointer-events-none absolute top-0 inset-x-0 bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF]/85 to-transparent z-20"
          style={{ height: `${PADDING_Y + 8}px` }}
        />

        {/* Bottom Vignette Gradient */}
        <div
          className="pointer-events-none absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/85 to-transparent z-20"
          style={{ height: `${PADDING_Y + 8}px` }}
        />

        {/* Scrollable wheel list */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          tabIndex={0}
          aria-label="Situation selector wheel. Use arrow keys to navigate."
          className="w-full overflow-y-auto no-scrollbar outline-none cursor-grab active:cursor-grabbing select-none"
          style={{
            height: `${CONTAINER_HEIGHT}px`,
            scrollSnapType: "y mandatory",
            paddingTop: `${PADDING_Y}px`,
            paddingBottom: `${PADDING_Y}px`,
          }}
        >
          {themes.map((theme, index) => {
            // Calculate distance from center to dynamically style scaling/opacity
            const itemOffset = index * ITEM_HEIGHT;
            const distance = Math.abs(scrollTop - itemOffset);
            const normalizedDist = Math.min(distance / (ITEM_HEIGHT * 2.5), 1);

            const isSelected = selectedIndex === index;
            const scale = 1 - normalizedDist * 0.18;
            const opacity = 1 - normalizedDist * 0.72;

            return (
              <div
                key={theme.id}
                onClick={() => handleItemClick(index)}
                style={{
                  height: `${ITEM_HEIGHT}px`,
                  scrollSnapAlign: "center",
                  transform: `scale(${scale})`,
                  opacity: opacity,
                  transition: "transform 0.15s ease-out, opacity 0.15s ease-out",
                }}
                className={`flex items-center justify-center gap-3 px-4 rounded-xl cursor-pointer text-center transition-colors ${
                  isSelected
                    ? "font-semibold text-[#102A24]"
                    : "font-normal text-[#69736E]"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isSelected
                      ? "bg-[#163D32] text-[#B69A5A]"
                      : "bg-[#163D32]/5 text-[#69736E]"
                  }`}
                >
                  <TopicIcon name={theme.icon} className="w-3.5 h-3.5" />
                </div>
                <span
                  className={`tracking-tight ${
                    isSelected
                      ? "text-base sm:text-lg text-[#102A24]"
                      : "text-sm sm:text-base"
                  }`}
                >
                  {theme.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Topic Status & Description */}
      <div className="w-full mt-5 text-center px-4 space-y-2">
        <div className="inline-flex items-center gap-1.5 text-xs text-[#69736E]">
          <span>You&apos;re exploring:</span>
          <span className="font-semibold text-[#163D32]">
            {selectedTheme.title}
          </span>
        </div>

        {/* Topic Short Description Card */}
        <div className="min-h-[44px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={selectedTheme.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="text-xs sm:text-sm text-[#1E2723]/90 italic font-serif leading-relaxed max-w-sm"
            >
              &ldquo;{selectedTheme.description}&rdquo;
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Primary Explore Action Button with peaceful transition */}
        <div className="pt-2">
          <motion.button
            type="button"
            onClick={handleExplore}
            disabled={isTransitioning}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full max-w-xs py-3.5 px-6 rounded-full font-medium text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2 mx-auto cursor-pointer ${
              isTransitioning
                ? "bg-[#102A24] text-white ring-2 ring-[#B69A5A]/50 scale-102"
                : "bg-[#163D32] hover:bg-[#102A24] text-[#FAF8F5] border border-[#B69A5A]/30 hover:shadow-lg"
            }`}
          >
            {isTransitioning ? (
              <>
                <LuSparkles className="w-4 h-4 text-[#B69A5A] animate-spin" />
                <span>Opening passage...</span>
              </>
            ) : (
              <>
                <span>Explore this topic</span>
                <LuArrowRight className="w-4 h-4 text-[#B69A5A]" />
              </>
            )}
          </motion.button>
        </div>

        <p className="text-[11px] text-[#69736E]/80 pt-1">
          Presents verified Qur&apos;anic verses relevant to this theme
        </p>
      </div>
    </div>
  );
}
