"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { LuSearch, LuX, LuArrowRight, LuBookOpen } from "react-icons/lu";
import { GUIDANCE_THEMES } from "@/data/themes";
import { QURAN_VERSES } from "@/data/verses";
import TopicIcon from "./TopicIcon";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const filteredThemes = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return GUIDANCE_THEMES.filter(
      (theme) =>
        theme.title.toLowerCase().includes(q) ||
        theme.description.toLowerCase().includes(q)
    );
  }, [query]);

  const filteredVerses = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return QURAN_VERSES.filter((verse) => {
      const surahNameMatch =
        verse.surah.nameEnglish.toLowerCase().includes(q) ||
        verse.surah.nameArabic.includes(q);
      const refMatch =
        `${verse.surah.number}:${verse.ayah.start}`.includes(q) ||
        `${verse.surah.number}` === q;
      const translationMatch = verse.translation.text.toLowerCase().includes(q);
      const contextMatch = verse.context.toLowerCase().includes(q);
      return surahNameMatch || refMatch || translationMatch || contextMatch;
    }).slice(0, 6);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search guidance topics and verses"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#102A24]/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#FAF8F5] rounded-2xl border border-[#B69A5A]/30 shadow-2xl overflow-hidden p-4 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-[#B69A5A]/20">
          <div className="flex items-center gap-2 text-[#163D32]">
            <LuSearch className="w-5 h-5 text-[#B69A5A]" />
            <span className="text-sm font-semibold tracking-wide uppercase">
              Search Guidance
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close search"
            className="p-1 rounded-lg text-[#69736E] hover:text-[#102A24] hover:bg-[#B69A5A]/10 transition-colors"
          >
            <LuX className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4">
          <div className="relative">
            <input
              type="text"
              autoFocus
              placeholder="Search by topic, Surah, or keyword (e.g. 'Patience', 'Ash-Sharh', 'peace')..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-3 rounded-xl bg-white border border-[#B69A5A]/30 text-[#1E2723] text-sm focus:outline-none focus:ring-2 focus:ring-[#B69A5A]/50 placeholder:text-[#69736E]/60 shadow-inner"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-3.5 text-[#69736E] hover:text-[#102A24]"
                aria-label="Clear query"
              >
                <LuX className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <div className="mt-4 max-h-[60vh] overflow-y-auto space-y-4 pr-1">
          {query.trim() === "" ? (
            <div className="text-center py-8 text-xs text-[#69736E]">
              <p className="font-medium text-[#163D32] mb-1">
                Explore Curated Passages
              </p>
              <p>Type a life situation or Surah reference to explore.</p>
            </div>
          ) : (
            <>
              {filteredThemes.length === 0 && filteredVerses.length === 0 && (
                <div className="text-center py-8 text-[#69736E] text-xs">
                  No matching themes or passages found for &ldquo;{query}&rdquo;.
                </div>
              )}

              {filteredThemes.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#69736E] mb-2">
                    Topics ({filteredThemes.length})
                  </h4>
                  <div className="space-y-1.5">
                    {filteredThemes.map((theme) => (
                      <Link
                        key={theme.id}
                        href={`/topic/${theme.slug}`}
                        onClick={onClose}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-white hover:bg-[#B69A5A]/10 border border-transparent hover:border-[#B69A5A]/30 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#163D32]/10 text-[#163D32] flex items-center justify-center">
                            <TopicIcon name={theme.icon} className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-[#102A24] group-hover:text-[#163D32]">
                              {theme.title}
                            </p>
                            <p className="text-xs text-[#69736E] line-clamp-1">
                              {theme.description}
                            </p>
                          </div>
                        </div>
                        <LuArrowRight className="w-4 h-4 text-[#B69A5A] group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {filteredVerses.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#69736E] mb-2">
                    Passages ({filteredVerses.length})
                  </h4>
                  <div className="space-y-2">
                    {filteredVerses.map((verse) => {
                      const themeSlug = verse.themes[0] || "need-for-guidance";
                      return (
                        <Link
                          key={verse.id}
                          href={`/topic/${themeSlug}?v=${verse.id}`}
                          onClick={onClose}
                          className="block p-3 rounded-xl bg-white hover:bg-[#B69A5A]/10 border border-[#B69A5A]/20 transition-all group"
                        >
                          <div className="flex items-center justify-between text-xs font-semibold text-[#163D32] mb-1">
                            <span className="flex items-center gap-1.5">
                              <LuBookOpen className="w-3.5 h-3.5 text-[#B69A5A]" />
                              Surah {verse.surah.nameEnglish} ({verse.surah.number}:{verse.ayah.start}
                              {verse.ayah.end ? `–${verse.ayah.end}` : ""})
                            </span>
                            <span className="font-arabic text-sm text-[#102A24]">
                              {verse.surah.nameArabic}
                            </span>
                          </div>
                          <p className="text-xs text-[#1E2723] line-clamp-2 italic font-serif">
                            &ldquo;{verse.translation.text}&rdquo;
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
