"use client";

import Link from "next/link";
import type { Locale } from "@fitnessloft/content";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const nextLocale = locale === "fr" ? "en" : "fr";
  const href = nextLocale === "fr" ? "/" : "/en";

  return (
    <Link
      href={href}
      className={cn(
        "rounded border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide transition",
        "hover:border-primary hover:text-primary",
      )}
      hrefLang={nextLocale}
      aria-label={nextLocale === "fr" ? "Passer en français" : "Switch to English"}
      prefetch
    >
      {nextLocale === "fr" ? "FR" : "EN"}
    </Link>
  );
}
