"use client";

import { useCallback, useState } from "react";
import type { Locale, Testimonial } from "@fitnessloft/content";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { getUiChrome } from "@/lib/ui-chrome";
import { cn } from "@/lib/utils";

export function TestimonialCarousel({
  items,
  locale,
}: {
  items: Testimonial[];
  locale: Locale;
}) {
  const [index, setIndex] = useState(0);
  const labels = getUiChrome(locale);

  const go = useCallback(
    (direction: -1 | 1) => {
      setIndex((current) => (current + direction + items.length) % items.length);
    },
    [items.length],
  );

  const item = items[index];
  if (!item) return null;

  return (
    <div className="relative rounded-sm bg-panel-dark p-8 md:p-12">
      <div className="mb-6 w-12">
        <OptimizedImage id="Quotes-Icon" alt="" sizes="48px" />
      </div>
      <blockquote className="font-body text-lg leading-relaxed text-white/90 md:text-xl">
        {item.quote}
      </blockquote>
      <cite className="mt-6 block text-sm font-semibold not-italic tracking-widest text-primary uppercase">
        {item.author}
      </cite>
      {item.source ? (
        <p className="mt-1 text-xs tracking-wide text-accent">{item.source}</p>
      ) : null}
      {items.length > 1 ? (
        <div className="mt-8 flex items-center justify-between">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label={labels.previousTestimonial}
            className="text-sm uppercase tracking-wide text-accent transition hover:text-primary"
          >
            {labels.prev}
          </button>
          <div className="flex gap-2">
            {items.map((entry, i) => (
              <button
                key={entry.author}
                type="button"
                aria-label={labels.testimonial(i + 1)}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2 w-2 rounded-full",
                  i === index ? "bg-primary" : "bg-white/30",
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label={labels.nextTestimonial}
            className="text-sm uppercase tracking-wide text-accent transition hover:text-primary"
          >
            {labels.next}
          </button>
        </div>
      ) : null}
    </div>
  );
}
