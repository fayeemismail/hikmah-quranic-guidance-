import React from "react";
import { LuQuote } from "react-icons/lu";

interface TranslationProps {
  text: string;
  source: string;
}

export default function Translation({ text, source }: TranslationProps) {
  return (
    <div className="w-full max-w-xl mx-auto my-6 px-4">
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-2 text-[#B69A5A]">
          <span className="h-px w-8 bg-[#B69A5A]/30" />
          <span className="text-[11px] font-medium tracking-widest uppercase text-[#69736E]">
            English Meaning
          </span>
          <span className="h-px w-8 bg-[#B69A5A]/30" />
        </div>

        <blockquote className="relative text-base sm:text-lg text-[#1E2723] font-serif italic leading-relaxed px-4">
          <LuQuote className="w-4 h-4 text-[#B69A5A]/40 inline-block -mt-2 mr-1 rotate-180" />
          {text}
          <LuQuote className="w-4 h-4 text-[#B69A5A]/40 inline-block -mt-2 ml-1" />
        </blockquote>

        <p className="text-[11px] tracking-wide text-[#69736E]">
          Source: <span className="font-medium text-[#163D32]">{source}</span>
        </p>
      </div>
    </div>
  );
}
