"use client";

import { useEffect, useId, useState } from "react";
import type { Locale } from "@fitnessloft/content";
import { promoLeadSchema } from "@fitnessloft/schemas";
import { Button } from "@/components/ui/Button";
import { getPromoCopy, isPromoPeriodActive, PROMO_STORAGE_KEY } from "@/lib/promo";
import { cn } from "@/lib/utils";

export function PromoPopup({ locale }: { locale: Locale }) {
  const titleId = useId();
  const copy = getPromoCopy(locale);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isPromoPeriodActive()) return;
    try {
      if (window.localStorage.getItem(PROMO_STORAGE_KEY)) return;
    } catch {
      // private mode — still show once per session
    }
    const timer = window.setTimeout(() => setOpen(true), 800);
    return () => window.clearTimeout(timer);
  }, []);

  function dismiss() {
    setOpen(false);
    try {
      window.localStorage.setItem(PROMO_STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      email: String(formData.get("email") ?? email),
      locale,
      website: String(formData.get("website") ?? ""),
    };

    const parsed = promoLeadSchema.safeParse(payload);
    if (!parsed.success) {
      setStatus("error");
      setError(copy.invalidEmail);
      return;
    }

    const response = await fetch("/api/v1/promo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });

    if (!response.ok) {
      setStatus("error");
      setError(copy.error);
      return;
    }

    setStatus("success");
    try {
      window.localStorage.setItem(PROMO_STORAGE_KEY, "1");
    } catch {
      // ignore
    }
    window.setTimeout(() => setOpen(false), 1800);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="relative w-full max-w-md border border-white/15 bg-panel-dark p-6 shadow-2xl md:p-8">
        <button
          type="button"
          onClick={dismiss}
          className="absolute top-3 right-3 text-sm text-accent transition hover:text-white"
          aria-label={copy.dismiss}
        >
          ✕
        </button>

        <p className="font-brand text-xs tracking-[0.2em] text-primary">{copy.eyebrow}</p>
        <h2 id={titleId} className="font-brand mt-2 text-3xl text-white md:text-4xl">
          {copy.title}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-accent md:text-base">
          {copy.description}
        </p>

        {status === "success" ? (
          <p className="mt-6 text-sm text-primary">{copy.success}</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm text-accent">{copy.emailLabel}</span>
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={copy.emailPlaceholder}
                className="w-full rounded-sm border border-white/15 bg-black/40 px-4 py-3 text-white outline-none focus:border-primary"
                autoComplete="email"
              />
            </label>
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden
            />
            <Button
              type="submit"
              className={cn("w-full", status === "loading" && "opacity-70")}
              disabled={status === "loading"}
            >
              {status === "loading" ? "..." : copy.submit}
            </Button>
            <button
              type="button"
              onClick={dismiss}
              className="w-full text-center text-xs uppercase tracking-wide text-accent transition hover:text-white"
            >
              {copy.dismiss}
            </button>
            {error ? <p className="text-sm text-red-400">{error}</p> : null}
          </form>
        )}
      </div>
    </div>
  );
}
