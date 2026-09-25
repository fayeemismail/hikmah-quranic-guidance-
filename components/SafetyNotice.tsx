import React from "react";
import Link from "next/link";
import { LuShieldAlert, LuArrowRight } from "react-icons/lu";

interface SafetyNoticeProps {
  themeSlug: string;
}

export default function SafetyNotice({ themeSlug }: SafetyNoticeProps) {
  // Show dedicated safety notice for emotional distress / anxiety / hardship themes
  const sensitiveThemes = ["sadness", "anxiety-and-worry", "hardship", "feeling-lost"];
  if (!sensitiveThemes.includes(themeSlug)) return null;

  return (
    <div className="w-full max-w-xl mx-auto my-5 p-4 rounded-xl bg-[#FAF0E6]/60 border border-[#D97706]/20 text-left">
      <div className="flex items-start gap-3">
        <div className="p-1 rounded bg-[#D97706]/10 text-[#B45309] shrink-0 mt-0.5">
          <LuShieldAlert className="w-4 h-4" />
        </div>
        <div className="space-y-1.5 flex-1">
          <h5 className="text-xs font-semibold text-[#78350F] tracking-wide uppercase">
            Spiritual Comfort, Not Medical Treatment
          </h5>
          <p className="text-[11px] text-[#92400E] leading-relaxed">
            The Qur&apos;an is a source of spiritual peace and contemplative hope. This website does not offer medical or mental health care, and scripture is not a replacement for qualified clinical support.
          </p>
          <div className="pt-1">
            <Link
              href="/safety"
              className="inline-flex items-center gap-1 text-[11px] font-medium text-[#78350F] hover:text-[#451A03] underline decoration-[#D97706]/40 underline-offset-2"
            >
              <span>Learn about mental health support & crisis resources</span>
              <LuArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
