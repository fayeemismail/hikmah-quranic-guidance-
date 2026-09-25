import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { GUIDANCE_THEMES } from "@/data/themes";
import { QURAN_VERSES } from "@/data/verses";
import TopicClient from "./TopicClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const TOPIC_SEO: Record<
  string,
  {
    title: string;
    description: string;
    keywords: string[];
  }
> = {
  patience: {
    title: "Patience in the Quran (Sabr) — Motivational Verses & Solutions",
    description:
      "Looking for patience quranic verses? Discover authentic Qur'anic guidance and solutions for patience (Sabr). Verified Arabic, Saheeh International translation, classical Tafsir (Ibn Kathir, As-Sa'di), and authentic Hadith.",
    keywords: [
      "patience quranic verses",
      "sabr in quran",
      "patience in islam",
      "motivational quran verses",
      "solution in quran verse",
      "quran guidance for patience",
      "quran verses for patience",
      "endurance in islam",
      "tafsir ibn kathir patience",
    ],
  },
  "need-for-guidance": {
    title: "Guidance in the Quran — Verified Verses, Solutions & Direction",
    description:
      "Seeking guidance in the Quran? Explore powerful Quranic verses and solutions for making decisions, finding direction, and the authentic Du'a al-Istikharah with classical Tafsir.",
    keywords: [
      "guidance in quran",
      "need for guidance",
      "solution in quran verse",
      "motivational quran verses",
      "istikharah quran",
      "direction in islam",
      "quranic guidance for decisions",
      "seeking allah help",
    ],
  },
  "lack-of-motivation": {
    title: "Motivational Quran Verses for When You Feel Stuck & Discouraged",
    description:
      "Discover motivational Quran verses to overcome lack of motivation, procrastination, and discouragement. Authentic Arabic passages, English meaning, and classical Tafsir.",
    keywords: [
      "motivational quran verses",
      "lack of motivation quran",
      "solution in quran verse",
      "guidance in quran",
      "quran verses for hard work",
      "overcoming laziness islam",
      "striving for good islam",
    ],
  },
  "anxiety-and-worry": {
    title: "Quran Verses for Anxiety & Worry — Spiritual Solutions & Solace",
    description:
      "Discover reassuring Quranic verses for anxiety, fear, stress, and worry. Verified Arabic text, Saheeh International translation, classical Tafsir, and authentic prophetic Hadith.",
    keywords: [
      "quran verses for anxiety",
      "anxiety in quran",
      "solution in quran verse",
      "guidance in quran",
      "motivational quran verses",
      "quranic verses for worry",
      "inner peace quran",
      "calm anxiety islam",
    ],
  },
  sadness: {
    title: "Quran Verses for Sadness & Grief — Comfort, Healing & Solace",
    description:
      "When your heart feels heavy, find comfort in verified Quran verses for sadness, sorrow, and grief. Classical Tafsir explanations, verified contexts, and authentic prophetic Hadith.",
    keywords: [
      "quran verses for sadness",
      "grief in quran",
      "solution in quran verse",
      "motivational quran verses",
      "guidance in quran",
      "healing in quran",
      "emotional comfort islam",
      "sorrow in islam",
    ],
  },
  hardship: {
    title: "Quran Verses for Hardship & Difficult Times — Solutions & Hope",
    description:
      "Facing difficult trials? Explore powerful Quran verses for hardship, ease after difficulty (Surah Ash-Sharh), and enduring trials with faith and classical Tafsir.",
    keywords: [
      "quran verses for hardship",
      "difficulty in quran",
      "solution in quran verse",
      "with hardship comes ease",
      "motivational quran verses",
      "guidance in quran",
      "trials in islam",
      "sabr during trials",
    ],
  },
  "financial-difficulty": {
    title: "Quran Verses for Financial Difficulty, Sustenance (Rizq) & Debt",
    description:
      "Find Islamic guidance and Quran verses for financial hardship, reliance upon Allah (Tawakkul), and seeking halal sustenance (Rizq) with authentic classical Tafsir.",
    keywords: [
      "quran verses for financial difficulty",
      "rizq in quran",
      "solution in quran verse",
      "guidance in quran",
      "motivational quran verses",
      "poverty in islam",
      "tawakkul sustenance",
      "debt relief quran",
    ],
  },
  hope: {
    title: "Quran Verses of Hope & Divine Mercy — Solutions for Despair",
    description:
      "Never lose hope in Allah's mercy. Explore inspiring Quran verses of hope, forgiveness, and new beginnings with authentic classical Tafsir and prophetic Hadith.",
    keywords: [
      "quran verses of hope",
      "hope in quran",
      "solution in quran verse",
      "motivational quran verses",
      "guidance in quran",
      "mercy of allah",
      "overcoming despair islam",
      "do not despair of the mercy of allah",
    ],
  },
  "peace-and-tranquility": {
    title: "Quran Verses for Peace of Mind & Tranquility (Sakinah)",
    description:
      "Explore authentic Quran verses for inner peace, tranquility (Sakinah), and calming the heart through the remembrance of Allah with classical Tafsir insights.",
    keywords: [
      "quran verses for peace",
      "peace of mind quran",
      "sakinah in quran",
      "solution in quran verse",
      "guidance in quran",
      "motivational quran verses",
      "remembrance of allah",
      "tranquility in islam",
    ],
  },
  "feeling-lost": {
    title: "Feeling Lost? Quran Verses for Purpose, Clarity & Direction",
    description:
      "When you feel lost or uncertain, turn to verified Quranic verses for clarity, life purpose, and reassurance. Classical Tafsir commentary and verified translations.",
    keywords: [
      "feeling lost quran",
      "purpose of life quran",
      "solution in quran verse",
      "guidance in quran",
      "motivational quran verses",
      "clarity in islam",
      "quran verses for confusion",
      "finding direction islam",
    ],
  },
};

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

  const seo = TOPIC_SEO[slug] || {
    title: `Qur'anic Guidance for ${theme.title} — Verified Verses & Meaning`,
    description: `Explore curated Qur'anic passages related to ${theme.title.toLowerCase()}. Includes verified Arabic text, English meaning, context and scholarly references.`,
    keywords: [
      "quranic verses",
      "guidance in quran",
      "motivational quran verses",
      "solution in quran verse",
      `${theme.title.toLowerCase()} quran`,
    ],
  };

  const canonicalUrl = `https://hikmah-guidance.vercel.app/topic/${slug}`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${seo.title} | Hikmah`,
      description: seo.description,
      url: canonicalUrl,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${seo.title} | Hikmah`,
      description: seo.description,
    },
  };
}

export default async function TopicPage({ params }: PageProps) {
  const { slug } = await params;
  const theme = GUIDANCE_THEMES.find((t) => t.slug === slug);

  if (!theme) {
    notFound();
  }

  // Filter curated verses for this theme
  const themeVerses = QURAN_VERSES.filter((v) => v.themes.includes(theme.id));

  const pageUrl = `https://hikmah-guidance.vercel.app/topic/${theme.slug}`;

  // Structured Data (Schema.org) for rich indexing and search ranking
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://hikmah-guidance.vercel.app",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Explore Guidance",
            item: "https://hikmah-guidance.vercel.app/explore",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: theme.title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "CollectionPage",
        name: `Qur'anic Guidance for ${theme.title}`,
        url: pageUrl,
        description: theme.description,
        about: {
          "@type": "Thing",
          name: theme.title,
          description: `Islamic and Qur'anic perspective on ${theme.title.toLowerCase()}`,
        },
        hasPart: themeVerses.slice(0, 10).map((v) => ({
          "@type": "Quotation",
          name: `${v.surah.nameEnglish} ${v.surah.number}:${v.ayah.start}${v.ayah.end ? `-${v.ayah.end}` : ""}`,
          text: v.translation.text,
          creator: {
            "@type": "Person",
            name: "Allah (Qur'an)",
          },
          citation: `${v.surah.nameEnglish} (${v.surah.number}:${v.ayah.start})`,
        })),
      },
    ],
  };

  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-xs uppercase tracking-wider text-[#69736E]">
          Loading guidance...
        </div>
      }
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <TopicClient theme={theme} themeVerses={themeVerses} />
    </Suspense>
  );
}
