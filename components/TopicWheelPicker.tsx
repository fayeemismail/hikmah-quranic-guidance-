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
  const [transitioningSlug, setTransitioningSlug] = useState<string | null>(null);

  const selectedIndexRef = useRef(selectedIndex);
  selectedIndexRef.current = selectedIndex;

  const isTransitioningRef = useRef(isTransitioning);
  isTransitioningRef.current = isTransitioning;

  const lastWheelTimeRef = useRef(0);
  const wheelLockRef = useRef(false);

  const selectedTheme = themes[selectedIndex] || themes[0];

  // Update selected index based on scroll position (touch/native scroll)
  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const currentScrollTop = scrollRef.current.scrollTop;
    setScrollTop(currentScrollTop);

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

  // Precise desktop mouse wheel handler: moves one by one on standard ticks, faster when scrolling fast
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (isTransitioningRef.current) return;
      // Prevent default browser jump of 100-120px which skips items
      e.preventDefault();

      const now = Date.now();
      const timeDiff = now - lastWheelTimeRef.current;
      lastWheelTimeRef.current = now;

      const absDelta = Math.abs(e.deltaY);
      if (absDelta < 6) return; // ignore micro trackpad drift

      // If already mid-notch within a very short window, throttle slightly to prevent accidental double-jumps
      if (wheelLockRef.current && timeDiff < 60) return;

      // Determine step count:
      // Standard mouse wheel notch (80-160px delta) moves EXACTLY 1 item
      // Fast spins (>240px delta or rapid successive ticks < 40ms) can move 2-3 items
      let steps = 1;
      if (absDelta >= 280) {
        steps = Math.min(3, Math.round(absDelta / 120));
      } else if (timeDiff < 40 && absDelta > 100) {
        steps = 2;
      }

      const direction = e.deltaY > 0 ? 1 : -1;
      const current = selectedIndexRef.current;
      const next = Math.max(0, Math.min(themes.length - 1, current + direction * steps));

      if (next !== current) {
        wheelLockRef.current = true;
        setSelectedIndex(next);
        scrollToIndex(next, true);

        setTimeout(() => {
          wheelLockRef.current = false;
        }, 80);
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, [themes.length, scrollToIndex]);

  // Execute transition to verse page
  const triggerExplore = (theme: GuidanceTheme) => {
    if (isTransitioningRef.current) return;
    setIsTransitioning(true);
    setTransitioningSlug(theme.slug);

    // Peaceful 650ms Framer Motion transition before navigation
    setTimeout(() => {
      router.push(`/topic/${theme.slug}`);
    }, 650);
  };

  // Handle clicking a problem item directly in the wheel
  const handleProblemClick = (theme: GuidanceTheme, index: number) => {
    if (isTransitioningRef.current) return;

    // Set selected & scroll to it
    setSelectedIndex(index);
    scrollToIndex(index, true);

    // Directly explore this problem on click!
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
  }, [selectedIndex, selectedTheme, themes.length, scrollToIndex]);

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center">
      {/* Visual Instruction above picker */}
      <div className="flex items-center gap-1.5 text-xs text-[#B69A5A] font-medium tracking-wide uppercase mb-3 select-none">
        <LuChevronsUpDown className="w-4 h-4 animate-bounce" style={{ animationDuration: "2s" }} />
        <span>Scroll one by one or click any problem</span>
      </div>

      {/* Main Wheel Container */}
      <div className="relative w-full rounded-3xl bg-[#FFFFFF] border border-[#E8E3D7] shadow-xl p-2 sm:p-3 overflow-hidden">
        {/* Subtle center lens / indicator bracket */}
        <div
          className="pointer-events-none absolute left-3 right-3 rounded-2xl bg-gradient-to-r from-[#163D32]/8 via-[#B69A5A]/12 to-[#163D32]/8 border-y border-[#B69A5A]/40 transition-all duration-300 z-10 shadow-xs"
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
          aria-label="Situation selector wheel. Click any problem to explore or use arrow keys."
          className="w-full overflow-y-auto no-scrollbar outline-none select-none"
          style={{
            height: `${CONTAINER_HEIGHT}px`,
            scrollSnapType: "y mandatory",
            paddingTop: `${PADDING_Y}px`,
            paddingBottom: `${PADDING_Y}px`,
          }}
        >
          {themes.map((theme, index) => {
            const itemOffset = index * ITEM_HEIGHT;
            const distance = Math.abs(scrollTop - itemOffset);
            const normalizedDist = Math.min(distance / (ITEM_HEIGHT * 2.5), 1);

            const isSelected = selectedIndex === index;
            const isItemTransitioning = isTransitioning && transitioningSlug === theme.slug;
            const scale = isItemTransitioning ? 1.05 : 1 - normalizedDist * 0.16;
            const opacity = isItemTransitioning ? 1 : 1 - normalizedDist * 0.7;

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
                  transform: `scale(${scale})`,
                  opacity: opacity,
                  transition: "transform 0.16s ease-out, opacity 0.16s ease-out",
                }}
                className={`flex items-center justify-between px-5 rounded-xl cursor-pointer transition-all duration-200 group ${
                  isSelected
                    ? "font-semibold text-[#102A24] bg-[#163D32]/5 shadow-inner"
                    : "font-normal text-[#69736E] hover:text-[#102A24] hover:bg-[#FAF8F5]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? "bg-[#163D32] text-[#B69A5A]"
                        : "bg-[#163D32]/5 text-[#69736E] group-hover:bg-[#163D32]/15"
                    }`}
                  >
                    <TopicIcon name={theme.icon} className="w-3.5 h-3.5" />
                  </div>
                  <span
                    className={`tracking-tight text-left ${
                      isSelected
                        ? "text-base sm:text-lg text-[#102A24]"
                        : "text-sm sm:text-base"
                    }`}
                  >
                    {theme.title}
                  </span>
                </div>

                {/* Subtle right click/explore indicator */}
                <div
                  className={`flex items-center gap-1 text-xs transition-all ${
                    isSelected
                      ? "text-[#B69A5A] opacity-100 group-hover:translate-x-0.5"
                      : "text-[#69736E]/40 opacity-0 group-hover:opacity-75"
                  }`}
                >
                  <span className="text-[10px] hidden sm:inline uppercase tracking-wider font-semibold">
                    {isItemTransitioning ? "Opening..." : "Explore"}
                  </span>
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

        {/* Primary Explore Action Button */}
        <div className="pt-2">
          <motion.button
            type="button"
            onClick={() => triggerExplore(selectedTheme)}
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
          Click any problem directly or tap &ldquo;Explore this topic&rdquo;
        </p>
      </div>
    </div>
  );
}
