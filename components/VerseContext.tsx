import React from "react";
import { LuBookOpen } from "react-icons/lu";

interface VerseContextProps {
  context: string;
}

export default function VerseContext({ context }: VerseContextProps) {
  return (
    <div className="w-full max-w-xl mx-auto my-4 p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E3D7] text-left">
      <div className="flex items-center gap-2 mb-2 text-[#163D32]">
        <LuBookOpen className="w-4 h-4 text-[#B69A5A]" />
        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#102A24]">
          Context
        </h4>
      </div>
      <p className="text-xs sm:text-sm text-[#1E2723]/90 leading-relaxed font-sans">
        {context}
      </p>
    </div>
  );
}
