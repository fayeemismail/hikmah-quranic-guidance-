"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuChevronsUpDown,
  LuArrowRight,
  LuSparkles,
  LuLayoutGrid,
  LuSlidersHorizontal,
} from "react-icons/lu";
import { GuidanceTheme } from "@/types/guidance";
import TopicIcon from "./TopicIcon";

interface TopicWheelPickerProps {
  themes: GuidanceTheme[];
}

const ITEM_HEIGHT = 52; // pixels per item
const VISIBLE_COUNT = 5; // 5 visible rows
const CONTAINER_HEIGHT = ITEM_HEIGHT * VISIBLE_COUNT; // 260px
const PADDING_Y = (CONTAINER_HEIGHT - ITEM_HEIGHT) / 2; // 104px padding top & bottom

export default function TopicWheelPicker({ themes }: TopicWheelPickerProps) {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useState<"wheel" | "grid">("wheel");
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
  const triggerExplore = (theme: GuidanceTheme) => {
    if (isTransitioningRef.current) return;
    setIsTransitioning(true);
    setTransitioningSlug(theme.slug);

    setTimeout(() => {
      router.push(`/topic/${theme.slug}`);
    }, 500);
  };

  // Handle clicking a problem item directly in the wheel
  const handleProblemClick = (theme: GuidanceTheme, index: number) => {
    if (isTransitioningRef.current) return;
    setSelectedIndex(index);
    scrollToIndex(index, true);
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
  }, [selectedIndex, selectedTheme, themes.length, scrollToIndex]);

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col items-center">
      {/* View Mode Switcher */}
      <div className="flex items-center gap-1 p-1 bg-[#FAF6EE] border border-[#E8E3D7] rounded-full mb-4 shadow-2xs">
        <button
          type="button"
          onClick={() => setViewMode("wheel")}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
            viewMode === "wheel"
              ? "bg-[#163D32] text-[#FAF8F5] shadow-xs"
              : "text-[#69736E] hover:text-[#102A24]"
          }`}
        >
          <LuSlidersHorizontal className="w-3.5 h-3.5 text-[#B69A5A]" />
          <span>Interactive Wheel</span>
        </button>
        <button
          type="button"
          onClick={() => setViewMode("grid")}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
            viewMode === "grid"
              ? "bg-[#163D32] text-[#FAF8F5] shadow-xs"
              : "text-[#69736E] hover:text-[#102A24]"
          }`}
        >
          <LuLayoutGrid className="w-3.5 h-3.5 text-[#B69A5A]" />
          <span>Browse All ({themes.length})</span>
        </button>
      </div>

      {viewMode === "wheel" ? (
        <div className="w-full max-w-md flex flex-col items-center">
          {/* Wheel Instruction hint */}
          <div className="flex items-center gap-1.5 text-xs text-[#B69A5A] font-medium tracking-wide uppercase mb-2 select-none">
            <LuChevronsUpDown className="w-3.5 h-3.5" />
            <span>Scroll or tap any situation</span>
          </div>

          {/* Wheel Container */}
          <div className="relative w-full rounded-2xl bg-[#FFFFFF] border border-[#E8E3D7] shadow-lg p-2 overflow-hidden">
            {/* Unified Center Selection Highlight Lens */}
            <div
              className="pointer-events-none absolute left-2 right-2 rounded-xl bg-gradient-to-r from-[#163D32]/6 via-[#B69A5A]/10 to-[#163D32]/6 border border-[#B69A5A]/35 shadow-xs z-10"
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
              aria-label="Situation selector wheel"
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
                    style={{
                      height: `${ITEM_HEIGHT}px`,
                      scrollSnapAlign: "center",
                    }}
                    className={`flex items-center justify-between px-3.5 rounded-lg cursor-pointer transition-all duration-150 ${
                      isSelected
                        ? "text-[#102A24] font-semibold"
                        : "text-[#69736E] hover:text-[#102A24] opacity-70 hover:opacity-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                          isSelected
                            ? "bg-[#163D32] text-[#B69A5A] shadow-xs"
                            : "bg-[#163D32]/8 text-[#69736E]"
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

                    <div
                      className={`flex items-center gap-1 text-xs transition-opacity ${
                        isSelected
                          ? "text-[#B69A5A] opacity-100"
                          : "text-[#69736E]/30 opacity-0"
                      }`}
                    >
                      {isItemTransitioning ? (
                        <LuSparkles className="w-3.5 h-3.5 animate-spin" />
                      ) : (
                        <LuArrowRight className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Selected Topic Summary & CTA */}
          <div className="w-full mt-4 text-center px-4 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs text-[#69736E]">
              <span>Selected situation:</span>
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
      ) : (
        /* Grid View: All Topics at a Glance */
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {themes.map((theme) => {
            const isItemTransitioning = isTransitioning && transitioningSlug === theme.slug;
            return (
              <div
                key={theme.id}
                role="button"
                tabIndex={0}
                onClick={() => triggerExplore(theme)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    triggerExplore(theme);
                  }
                }}
                className={`group relative p-4 rounded-2xl bg-[#FFFFFF] border border-[#E8E3D7] hover:border-[#B69A5A]/50 shadow-xs hover:shadow-md transition-all cursor-pointer text-left flex items-start gap-3.5 ${
                  isItemTransitioning ? "ring-2 ring-[#B69A5A] bg-[#FAF8F2]" : ""
                }`}
              >
                <div className="w-9 h-9 rounded-xl bg-[#163D32]/8 text-[#163D32] group-hover:bg-[#163D32] group-hover:text-[#B69A5A] flex items-center justify-center shrink-0 transition-colors">
                  <TopicIcon name={theme.icon} className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <h3 className="text-sm font-semibold text-[#102A24] group-hover:text-[#163D32] transition-colors truncate">
                      {theme.title}
                    </h3>
                    <LuArrowRight className="w-3.5 h-3.5 text-[#B69A5A] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </div>
                  <p className="text-xs text-[#69736E] line-clamp-2 leading-relaxed">
                    {theme.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
