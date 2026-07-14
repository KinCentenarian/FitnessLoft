"use client";

import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@fitnessloft/content";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { getUiChrome } from "@/lib/ui-chrome";
import { cn } from "@/lib/utils";

export function ImageSlideshow({
  images,
  alt,
  className,
  locale = "fr",
}: {
  images: string[];
  alt: string;
  className?: string;
  locale?: Locale;
}) {
  const [index, setIndex] = useState(0);
  const labels = getUiChrome(locale);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + images.length) % images.length);
    },
    [images.length],
  );

  return (
    <div className={cn("relative aspect-[3/4] overflow-hidden", className)}>
      {images.map((image, i) => (
        <div
          key={image}
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            i === index ? "opacity-100" : "opacity-0",
          )}
        >
          <OptimizedImage id={image} alt={alt} sizes="(max-width: 768px) 100vw, 33vw" />
        </div>
      ))}
      {images.length > 1 ? (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((image, i) => (
            <button
              key={image}
              type="button"
              aria-label={labels.slide(i + 1)}
              onClick={() => goTo(i)}
              className={cn(
                "h-2 w-2 rounded-full transition",
                i === index ? "bg-primary" : "bg-white/40",
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
