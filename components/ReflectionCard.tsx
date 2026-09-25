import React from "react";
import { LuPenLine, LuInfo } from "react-icons/lu";

interface ReflectionCardProps {
  reflection: string;
}

export default function ReflectionCard({ reflection }: ReflectionCardProps) {
  if (!reflection) return null;

  return (
    <div className="w-full max-w-xl mx-auto my-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#F5F2EA] to-[#EFECE3] border border-[#B69A5A]/30 text-left relative overflow-hidden">
      {/* Decorative vertical accent */}
      <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#B69A5A]" />

      <div className="space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 text-[#102A24]">
            <LuPenLine className="w-4 h-4 text-[#B69A5A]" />
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#102A24]">
              Reflection
            </h4>
          </div>
          <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-[#69736E] bg-white/70 px-2 py-0.5 rounded border border-[#E8E3D7]">
            <LuInfo className="w-3 h-3 text-[#B69A5A]" />
            Human Editorial Note • Not Tafsir
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#1E2723] leading-relaxed font-sans">
          {reflection}
        </p>

        <p className="text-[10px] text-[#69736E] italic pt-1 border-t border-[#B69A5A]/15">
          This reflection is an editorial commentary offering practical perspectives; it is not sacred text or binding scholarship.
        </p>
      </div>
    </div>
  );
}
