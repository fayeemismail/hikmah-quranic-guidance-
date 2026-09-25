import React from "react";
import Link from "next/link";
import { LuBookOpen, LuShieldCheck, LuInfo, LuCompass } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#B69A5A]/25 bg-[#F4F1EA] text-[#69736E] text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Identity & Principle */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[#102A24]">
              <div className="w-6 h-6 rounded bg-[#163D32] flex items-center justify-center text-[#B69A5A] text-xs font-bold font-arabic">
                ن
              </div>
              <span className="font-semibold uppercase tracking-wider text-xs">
                Hikmah • Qur&apos;anic Guidance
              </span>
            </div>
            <p className="text-xs text-[#69736E] leading-relaxed">
              Carefully curated Qur&apos;anic passages presented for reflection during common life moments and challenges.
            </p>
            <div className="inline-flex items-center gap-1.5 text-[11px] text-[#163D32] bg-[#B69A5A]/15 px-2.5 py-1 rounded-full border border-[#B69A5A]/30">
              <LuShieldCheck className="w-3.5 h-3.5 text-[#B69A5A]" />
              <span>Independent spiritual & educational resource</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="font-semibold text-xs text-[#102A24] uppercase tracking-wider mb-3">
              Explore & Understand
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/explore"
                  className="flex items-center gap-2 hover:text-[#163D32] transition-colors"
                >
                  <LuCompass className="w-3.5 h-3.5 text-[#B69A5A]" />
                  <span>All 10 Life Situations</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/methodology"
                  className="flex items-center gap-2 hover:text-[#163D32] transition-colors"
                >
                  <LuBookOpen className="w-3.5 h-3.5 text-[#B69A5A]" />
                  <span>Curatorial Methodology & Hierarchy</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/safety"
                  className="flex items-center gap-2 hover:text-[#163D32] transition-colors"
                >
                  <LuShieldCheck className="w-3.5 h-3.5 text-[#B69A5A]" />
                  <span>Mental Health Safety & Support</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex items-center gap-2 hover:text-[#163D32] transition-colors"
                >
                  <LuInfo className="w-3.5 h-3.5 text-[#B69A5A]" />
                  <span>About This Project</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Respectful Content Disclaimer */}
          <div className="space-y-2">
            <h4 className="font-semibold text-xs text-[#102A24] uppercase tracking-wider">
              Content & Respect Notice
            </h4>
            <p className="text-[11px] leading-relaxed text-[#69736E]">
              This website presents verified Qur&apos;anic text alongside recognized English translations (Saheeh International) and classical scholarly references.
            </p>
            <p className="text-[11px] leading-relaxed text-[#69736E]">
              The appearance of any verse here does not claim that Allah specifically selected this verse for you, nor does it deliver personal divine commands. Editorial reflections are strictly human and distinct from the Qur&apos;an.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#B69A5A]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
          <p>© {new Date().getFullYear()} Hikmah Qur&apos;anic Guidance. Designed with reverence and restraint.</p>
          <p className="text-[#69736E]">Mobile-first spiritual reflection</p>
        </div>
      </div>
    </footer>
  );
}
