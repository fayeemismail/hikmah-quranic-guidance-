import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { GUIDANCE_THEMES } from "@/data/themes";
import { QURAN_VERSES } from "@/data/verses";
import TopicClient from "./TopicClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return GUIDANCE_THEMES.map((theme) => ({
    slug: theme.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const theme = GUIDANCE_THEMES.find((t) => t.slug === slug);
  if (!theme) {
    return {
      title: "Topic Not Found",
    };
  }

  return {
    title: `Qur'anic Guidance for ${theme.title}`,
    description: `Explore curated Qur'anic passages related to ${theme.title.toLowerCase()}. Includes verified Arabic text, English meaning, context and scholarly references.`,
  };
}

export default async function TopicPage({ params }: PageProps) {
  const { slug } = await params;
  const theme = GUIDANCE_THEMES.find((t) => t.slug === slug);

  if (!theme) {
    notFound();
  }

  // Filter the 4 curated verses for this theme
  const themeVerses = QURAN_VERSES.filter((v) => v.themes.includes(theme.id));

  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-xs uppercase tracking-wider text-[#69736E]">
          Loading guidance...
        </div>
      }
    >
      <TopicClient theme={theme} themeVerses={themeVerses} />
    </Suspense>
  );
}
