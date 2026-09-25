import React from "react";

interface ArabicVerseProps {
  arabic: string;
}

export default function ArabicVerse({ arabic }: ArabicVerseProps) {
  return (
    <div className="w-full my-6 sm:my-8 px-2 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <p
          lang="ar"
          dir="rtl"
          className="quran-text font-arabic text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] text-[#102A24] font-normal tracking-wide antialiased select-text leading-[2.3] sm:leading-[2.4] md:leading-[2.5]"
        >
          {arabic}
        </p>
      </div>
    </div>
  );
}
