"use client";

import { useCallback, useState } from "react";
import type { Locale, TeamMember } from "@fitnessloft/content";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { getUiChrome } from "@/lib/ui-chrome";
import { cn } from "@/lib/utils";

export function TeamCarousel({
  members,
  locale,
}: {
  members: TeamMember[];
  locale: Locale;
}) {
  const [index, setIndex] = useState(0);
  const labels = getUiChrome(locale);

  const go = useCallback(
    (direction: -1 | 1) => {
      setIndex((current) => (current + direction + members.length) % members.length);
    },
    [members.length],
  );

  const member = members[index];
  if (!member) return null;

  return (
    <div className="relative">
      <div className="grid items-end gap-8 md:grid-cols-[1fr_1.2fr]">
        <div className="aspect-[3/4] overflow-hidden bg-panel-dark">
          {member.image ? (
            <OptimizedImage
              id={member.image}
              alt={member.name}
              sizes="(max-width: 768px) 80vw, 35vw"
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center bg-gradient-to-br from-panel-dark to-secondary"
              aria-hidden
            >
              <span className="font-brand text-5xl text-white/25 md:text-7xl">
                {member.name.slice(0, 1)}
              </span>
            </div>
          )}
        </div>
        <div className="pb-4">
          <h3 className="font-brand text-3xl text-white md:text-4xl">{member.name}</h3>
          <p className="mt-2 text-sm uppercase tracking-widest text-primary">{member.role}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label={labels.previousTeamMember}
          className="rounded border border-white/20 px-4 py-2 text-sm uppercase tracking-wide text-white transition hover:border-primary hover:text-primary"
        >
          {labels.prev}
        </button>
        <div className="flex gap-2">
          {members.map((item, i) => (
            <button
              key={item.id}
              type="button"
              aria-label={item.name}
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
          aria-label={labels.nextTeamMember}
          className="rounded border border-white/20 px-4 py-2 text-sm uppercase tracking-wide text-white transition hover:border-primary hover:text-primary"
        >
          {labels.next}
        </button>
      </div>
    </div>
  );
}
