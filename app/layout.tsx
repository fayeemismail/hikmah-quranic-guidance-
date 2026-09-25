import type { Metadata, Viewport } from "next";
import { Amiri, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://hikmah-guidance.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | Hikmah Qur'anic Guidance",
    default: "Hikmah — Qur'anic Guidance for Life's Difficult Moments",
  },
  description:
    "Find authentic Qur'anic guidance and solutions for patience, anxiety, sadness, hardship, and life's trials. Explore verified Arabic verses, English translations, classical Tafsir (Ibn Kathir, As-Sa'di), and authentic Hadith.",
  keywords: [
    "patience quranic verses",
    "guidance in quran",
    "motivational quran verses",
    "solution in quran verse",
    "quranic verses",
    "quran verses for anxiety",
    "quran verses for sadness",
    "quran verses for hardship",
    "quran verses for patience",
    "quran verses for financial difficulty",
    "islamic guidance",
    "sabr in quran",
    "tafsir ibn kathir",
    "authentic hadith",
    "spiritual comfort",
    "solutions in quran",
    "hikmah quranic guidance",
  ],
  authors: [{ name: "Hikmah Guidance Team" }],
  creator: "Hikmah Guidance",
  publisher: "Hikmah Guidance",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Hikmah — Qur'anic Guidance",
    title: "Hikmah — Qur'anic Guidance for Life's Difficult Moments",
    description:
      "Find solace, direction, and verified Islamic solutions in Qur'anic verses curated for real-life emotional and spiritual challenges.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hikmah — Qur'anic Guidance for Life's Difficult Moments",
    description:
      "Explore curated Qur'anic verses with authentic classical Tafsir, verified context, and grounded spiritual reflections.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#102A24",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hikmah — Qur'anic Guidance",
    url: siteUrl,
    description:
      "Explore curated Qur'anic verses, English translations, classical Tafsir, and authentic Hadith for life's challenges.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/explore?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en",
  };

  return (
    <html
      lang="en"
      className={`${amiri.variable} ${plusJakartaSans.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8F6F0] text-[#1E2723] font-sans selection:bg-[#B69A5A]/25 selection:text-[#102A24]">
        <Navbar />
        <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
