"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuChevronsUpDown,
  LuArrowRight,
  LuSparkles,
} from "react-icons/lu";
import { GuidanceTheme } from "@/types/guidance";
import TopicIcon from "./TopicIcon";

interface TopicWheelPickerProps {
  themes: GuidanceTheme[];
}

const ITEM_HEIGHT = 54; // pixels per item
const VISIBLE_COUNT = 5; // 5 visible rows
const CONTAINER_HEIGHT = ITEM_HEIGHT * VISIBLE_COUNT; // 270px
const PADDING_Y = (CONTAINER_HEIGHT - ITEM_HEIGHT) / 2; // 108px padding top & bottom

export default function TopicWheelPicker({ themes }: TopicWheelPickerProps) {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitioningSlug, setTransitioningSlug] = useState<string | null>(null);

  const selectedIndexRef = useRef(selectedIndex);
  selectedIndexRef.current = selectedIndex;

  const isTransitioningRef = useRef(isTransitioning);
  isTransitioningRef.current = isTransitioning;

  const selectedTheme = themes[selectedIndex] || themes[0];

  // Update selected index based on scroll position (touch/native scroll)
  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const currentScrollTop = scrollRef.current.scrollTop;

    // Calculate nearest item index
    const index = Math.round(currentScrollTop / ITEM_HEIGHT);
    const clampedIndex = Math.max(0, Math.min(themes.length - 1, index));
    if (clampedIndex !== selectedIndexRef.current) {
      setSelectedIndex(clampedIndex);
    }
  }, [themes.length]);

  // Programmatically scroll to an index
  const scrollToIndex = useCallback((index: number, smooth = true) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      top: index * ITEM_HEIGHT,
      behavior: smooth ? "smooth" : "auto",
    });
  }, []);

  // Center initial item on mount
  useEffect(() => {
    if (scrollRef.current) {
      scrollToIndex(0, false);
    }
  }, [scrollToIndex]);

  // Execute transition to verse page
  const triggerExplore = useCallback((theme: GuidanceTheme) => {
    if (isTransitioningRef.current) return;
    setIsTransitioning(true);
    setTransitioningSlug(theme.slug);

    setTimeout(() => {
      router.push(`/topic/${theme.slug}`);
    }, 400);
  }, [router]);

  // Handle clicking a problem item directly in the wheel
  const handleProblemClick = (theme: GuidanceTheme, index: number) => {
    if (isTransitioningRef.current) return;
    setSelectedIndex(index);
    scrollToIndex(index, true);
    // Directly open the topic on click just like the explore button
    triggerExplore(theme);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioningRef.current) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = Math.min(themes.length - 1, selectedIndex + 1);
        setSelectedIndex(next);
        scrollToIndex(next, true);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev = Math.max(0, selectedIndex - 1);
        setSelectedIndex(prev);
        scrollToIndex(prev, true);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (selectedTheme) {
          triggerExplore(selectedTheme);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, selectedTheme, themes.length, scrollToIndex, triggerExplore]);

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center">
      {/* Visual Instruction hint above picker */}
      <div className="flex items-center gap-1.5 text-xs text-[#B69A5A] font-medium tracking-wide uppercase mb-3 select-none">
        <LuChevronsUpDown className="w-3.5 h-3.5" />
        <span>Scroll to choose or click any topic to open</span>
      </div>

      {/* Main Wheel Container */}
      <div className="relative w-full rounded-2xl bg-[#FFFFFF] border border-[#E8E3D7] shadow-lg p-2 overflow-hidden">
        {/* Unified Center Selection Highlight Lens */}
        <div
          className="pointer-events-none absolute left-2 right-2 rounded-xl bg-gradient-to-r from-[#163D32]/8 via-[#B69A5A]/10 to-[#163D32]/8 border border-[#B69A5A]/35 shadow-xs z-10"
          style={{
            top: `${PADDING_Y + 8}px`,
            height: `${ITEM_HEIGHT}px`,
          }}
        />

        {/* Top Fade Gradient */}
        <div
          className="pointer-events-none absolute top-0 inset-x-0 bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF]/85 to-transparent z-20"
          style={{ height: `${PADDING_Y}px` }}
        />

        {/* Bottom Fade Gradient */}
        <div
          className="pointer-events-none absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/85 to-transparent z-20"
          style={{ height: `${PADDING_Y}px` }}
        />

        {/* Scrollable list */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          tabIndex={0}
          aria-label="Situation selector wheel. Click any topic to explore."
          className="w-full overflow-y-auto no-scrollbar outline-none select-none relative z-15"
          style={{
            height: `${CONTAINER_HEIGHT}px`,
            scrollSnapType: "y mandatory",
            paddingTop: `${PADDING_Y}px`,
            paddingBottom: `${PADDING_Y}px`,
          }}
        >
          {themes.map((theme, index) => {
            const isSelected = selectedIndex === index;
            const isItemTransitioning = isTransitioning && transitioningSlug === theme.slug;

            return (
              <div
                key={theme.id}
                role="button"
                tabIndex={0}
                onClick={() => handleProblemClick(theme, index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleProblemClick(theme, index);
                  }
                }}
                title={`Click to explore ${theme.title}`}
                style={{
                  height: `${ITEM_HEIGHT}px`,
                  scrollSnapAlign: "center",
                }}
                className={`flex items-center justify-between px-3.5 rounded-lg cursor-pointer transition-all duration-150 group ${
                  isSelected
                    ? "text-[#102A24] font-semibold"
                    : "text-[#69736E] hover:text-[#102A24] opacity-75 hover:opacity-100"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                      isSelected
                        ? "bg-[#163D32] text-[#B69A5A] shadow-xs"
                        : "bg-[#163D32]/8 text-[#69736E] group-hover:bg-[#163D32]/15"
                    }`}
                  >
                    <TopicIcon name={theme.icon} className="w-3.5 h-3.5" />
                  </div>
                  <span
                    className={`tracking-tight text-left ${
                      isSelected
                        ? "text-base text-[#102A24]"
                        : "text-sm text-[#4E5652]"
                    }`}
                  >
                    {theme.title}
                  </span>
                </div>

                {/* Direct Action Indicator on the item */}
                <div className="flex items-center gap-1.5">
                  {isSelected && (
                    <span className="text-[11px] font-medium text-[#B69A5A] hidden sm:inline">
                      {isItemTransitioning ? "Opening..." : "Click to open"}
                    </span>
                  )}
                  <div
                    className={`flex items-center justify-center w-6 h-6 rounded-full transition-all ${
                      isSelected
                        ? "bg-[#163D32] text-[#B69A5A]"
                        : "text-[#69736E]/40 group-hover:text-[#163D32] group-hover:bg-[#163D32]/8"
                    }`}
                  >
                    {isItemTransitioning ? (
                      <LuSparkles className="w-3 h-3 animate-spin" />
                    ) : (
                      <LuArrowRight className="w-3.5 h-3.5" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Topic Summary & CTA */}
      <div className="w-full mt-4 text-center px-4 space-y-2">
        <div className="inline-flex items-center gap-1.5 text-xs text-[#69736E]">
          <span>Selected:</span>
          <span className="font-semibold text-[#163D32]">
            {selectedTheme.title}
          </span>
        </div>

        <div className="min-h-[38px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={selectedTheme.id}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              transition={{ duration: 0.15 }}
              className="text-xs sm:text-sm text-[#1E2723]/90 italic font-serif leading-relaxed max-w-sm"
            >
              &ldquo;{selectedTheme.description}&rdquo;
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="pt-1">
          <button
            type="button"
            onClick={() => triggerExplore(selectedTheme)}
            disabled={isTransitioning}
            className={`w-full max-w-xs py-3 px-6 rounded-full font-medium text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2 mx-auto cursor-pointer ${
              isTransitioning
                ? "bg-[#102A24] text-white ring-2 ring-[#B69A5A]/50"
                : "bg-[#163D32] hover:bg-[#102A24] text-[#FAF8F5] border border-[#B69A5A]/30 active:scale-98 hover:shadow-lg"
            }`}
          >
            {isTransitioning ? (
              <>
                <LuSparkles className="w-4 h-4 text-[#B69A5A] animate-spin" />
                <span>Opening guidance...</span>
              </>
            ) : (
              <>
                <span>Explore this topic</span>
                <LuArrowRight className="w-4 h-4 text-[#B69A5A]" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
