"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuSearch, LuMenu, LuX, LuCompass, LuShieldCheck, LuBookOpen, LuInfo } from "react-icons/lu";
import SearchModal from "./SearchModal";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/explore", label: "Explore Topics", icon: LuCompass },
    { href: "/methodology", label: "Methodology", icon: LuBookOpen },
    { href: "/safety", label: "Safety & Support", icon: LuShieldCheck },
    { href: "/about", label: "About", icon: LuInfo },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#F8F6F0]/90 backdrop-blur-md border-b border-[#B69A5A]/20 transition-all">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo / Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A5A]"
            aria-label="Qur'anic Guidance Home"
          >
            <div className="w-8 h-8 rounded-lg bg-[#163D32] flex items-center justify-center text-[#B69A5A] shadow-sm group-hover:bg-[#102A24] transition-colors">
              <span className="font-arabic text-base font-bold select-none leading-none pt-0.5">
                ن
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wider text-[#102A24] uppercase font-sans">
                Hikmah
              </span>
              <span className="text-[10px] tracking-widest text-[#B69A5A] uppercase font-medium">
                Qur&apos;anic Guidance
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-wider font-medium transition-colors ${
                    isActive
                      ? "text-[#163D32] font-semibold underline underline-offset-8 decoration-[#B69A5A] decoration-2"
                      : "text-[#69736E] hover:text-[#102A24]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search topics and verses"
              className="p-2 rounded-xl text-[#163D32] hover:bg-[#B69A5A]/15 hover:text-[#102A24] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A5A]"
            >
              <LuSearch className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              className="p-2 rounded-xl text-[#163D32] hover:bg-[#B69A5A]/15 hover:text-[#102A24] transition-colors md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A5A]"
            >
              {isMenuOpen ? (
                <LuX className="w-5 h-5" />
              ) : (
                <LuMenu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#B69A5A]/15 bg-[#FAF8F5] px-4 pt-3 pb-6 shadow-xl animate-fade-in">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#163D32] text-white"
                        : "text-[#1E2723] hover:bg-[#B69A5A]/15"
                    }`}
                  >
                    {IconComponent && (
                      <IconComponent
                        className={`w-4 h-4 ${
                          isActive ? "text-[#B69A5A]" : "text-[#69736E]"
                        }`}
                      />
                    )}
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4 pt-3 border-t border-[#B69A5A]/20">
              <p className="text-[11px] text-[#69736E] leading-relaxed">
                A curated, respectful reflection tool exploring Qur&apos;anic themes for life&apos;s moments.
              </p>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
