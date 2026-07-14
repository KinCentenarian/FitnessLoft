"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { SiteContent } from "@fitnessloft/content";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getUiChrome } from "@/lib/ui-chrome";
import { cn } from "@/lib/utils";

export function SiteHeader({ content }: { content: SiteContent }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const labels = getUiChrome(content.locale);
  const homeHref = content.locale === "en" ? "/en" : "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition",
        scrolled ? "bg-secondary/95 shadow-lg backdrop-blur" : "bg-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href={homeHref} className="shrink-0">
          <Image
            src="/media/FitnessLoft_BRAND_LOGO_NOIR_GAUCHE.svg"
            alt="Le Fitness Loft"
            width={160}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label={labels.mainNav}>
          {content.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/90 transition hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <LanguageSwitcher locale={content.locale} />
          <Button href="#contact">{content.headerCta}</Button>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded border border-white/20 lg:hidden"
          aria-expanded={open}
          aria-label={labels.menu}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{labels.menu}</span>
          <div className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </div>
        </button>
      </Container>

      {open ? (
        <div className="border-t border-white/10 bg-secondary lg:hidden">
          <Container className="flex flex-col gap-4 py-6">
            {content.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4">
              <LanguageSwitcher locale={content.locale} />
              <Button href="#contact">{content.headerCta}</Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
