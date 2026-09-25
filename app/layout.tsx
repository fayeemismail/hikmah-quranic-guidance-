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

export const metadata: Metadata = {
  title: {
    template: "%s | Qur'anic Guidance",
    default: "Qur'anic Guidance for Life's Difficult Moments",
  },
  description:
    "Explore carefully curated Qur'anic passages related to life's challenges, with Arabic text, English meaning, context and scholarly references.",
  keywords: [
    "Quran",
    "Islamic Guidance",
    "Quranic Verses",
    "Spiritual Comfort",
    "Patience in Islam",
    "Quranic Reflections",
  ],
  authors: [{ name: "Curated Quranic Guidance Project" }],
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
  return (
    <html
      lang="en"
      className={`${amiri.variable} ${plusJakartaSans.variable} h-full scroll-smooth antialiased`}
    >
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
