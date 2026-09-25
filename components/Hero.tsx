"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuArrowRight, LuCompass } from "react-icons/lu";

export default function Hero() {
  return (
    <section className="relative pt-6 pb-12 sm:pt-12 sm:pb-16 text-center max-w-2xl mx-auto px-2">
      {/* Decorative subtle backdrop element */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#163D32]/5 via-[#B69A5A]/10 to-transparent blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-4 sm:space-y-6"
      >
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B69A5A]/35 bg-[#FAF8F5]/80 text-[#163D32] shadow-xs">
          <LuCompass className="w-3.5 h-3.5 text-[#B69A5A]" />
          <span className="text-[11px] font-semibold tracking-widest uppercase">
            Qur&apos;anic Guidance
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#102A24] leading-[1.2]">
          Find a moment of guidance in the Qur&apos;an.
        </h1>

        {/* Supporting text */}
        <p className="text-sm sm:text-base text-[#69736E] max-w-xl mx-auto leading-relaxed font-normal">
          Explore Qur&apos;anic passages related to the moments, questions and challenges you may be experiencing.
        </p>

        {/* Primary CTA navigating to /explore */}
        <div className="pt-2 sm:pt-4 flex flex-col items-center space-y-2.5">
          <Link
            href="/explore"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#163D32] hover:bg-[#102A24] text-[#FAF8F5] text-sm sm:text-base font-medium tracking-wide shadow-md hover:shadow-lg transition-all border border-[#B69A5A]/30 group cursor-pointer"
          >
            <span>Explore Guidance</span>
            <LuArrowRight className="w-4 h-4 text-[#B69A5A] group-hover:translate-x-1 transition-transform" />
          </Link>
          <span className="text-xs sm:text-sm font-medium text-[#163D32]/80 tracking-wide">
            Choose what you&apos;re going through.
          </span>
        </div>

        {/* Reassurance note */}
        <p className="text-[11px] text-[#69736E]/80 tracking-wide pt-1">
          Curated themes with verified Arabic text, translations, and classical context.
        </p>
      </motion.div>
    </section>
  );
}
