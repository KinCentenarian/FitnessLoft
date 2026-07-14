"use client";

import { useState } from "react";
import type { ContactContent, Locale } from "@fitnessloft/content";
import { contactFormSchema } from "@fitnessloft/schemas";
import { Button } from "@/components/ui/Button";
import { getUiChrome } from "@/lib/ui-chrome";
import { cn } from "@/lib/utils";

export function ContactForm({
  content,
  locale,
}: {
  content: ContactContent;
  locale: Locale;
}) {
  const { form } = content;
  const labels = getUiChrome(locale);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
      locale,
      website: String(formData.get("website") ?? ""),
    };

    const parsed = contactFormSchema.safeParse(payload);
    if (!parsed.success) {
      setStatus("error");
      setError(labels.formError);
      return;
    }

    const response = await fetch("/api/v1/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });

    if (!response.ok) {
      setStatus("error");
      setError(labels.formError);
      return;
    }

    setStatus("success");
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
      <label className="block md:col-span-1">
        <span className="mb-2 block text-sm text-accent">{form.name}</span>
        <input
          name="name"
          required
          className="w-full rounded-sm border border-white/15 bg-black/40 px-4 py-3 text-white outline-none focus:border-primary"
        />
      </label>
      <label className="block md:col-span-1">
        <span className="mb-2 block text-sm text-accent">{form.email}</span>
        <input
          type="email"
          name="email"
          required
          className="w-full rounded-sm border border-white/15 bg-black/40 px-4 py-3 text-white outline-none focus:border-primary"
        />
      </label>
      <label className="block md:col-span-1">
        <span className="mb-2 block text-sm text-accent">{form.phone}</span>
        <input
          type="tel"
          name="phone"
          required
          className="w-full rounded-sm border border-white/15 bg-black/40 px-4 py-3 text-white outline-none focus:border-primary"
        />
      </label>
      <label className="block md:col-span-1">
        <span className="mb-2 block text-sm text-accent">{form.service}</span>
        <select
          name="service"
          required
          defaultValue=""
          className="w-full rounded-sm border border-white/15 bg-black/40 px-4 py-3 text-white outline-none focus:border-primary"
        >
          <option value="" disabled>
            —
          </option>
          {form.serviceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <label className="block md:col-span-2">
        <span className="mb-2 block text-sm text-accent">{form.message}</span>
        <textarea
          name="message"
          rows={4}
          className="w-full rounded-sm border border-white/15 bg-black/40 px-4 py-3 text-white outline-none focus:border-primary"
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
      <div className="md:col-span-2">
        <Button
          type="submit"
          className={cn("w-full", status === "loading" && "opacity-70")}
          disabled={status === "loading"}
        >
          {status === "loading" ? "..." : form.submit}
        </Button>
        {status === "success" ? (
          <p className="mt-3 text-sm text-primary">{labels.formSuccess}</p>
        ) : null}
        {error ? <p className="mt-3 text-sm text-red-400">{error}</p> : null}
      </div>
    </form>
  );
}
