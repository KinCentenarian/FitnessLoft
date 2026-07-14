import { contactFormSchema } from "@fitnessloft/schemas";
import { SERVICE_LABELS_EN, SERVICE_LABELS_FR } from "@fitnessloft/content/catalog/service-labels";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;
  if (data.website) {
    return NextResponse.json({ success: true });
  }

  const labels = data.locale === "fr" ? SERVICE_LABELS_FR : SERVICE_LABELS_EN;
  const serviceLabel = labels[data.service];

  const to = process.env.CONTACT_TO_EMAIL ?? "info@lefitnessloft.com";
  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!resend) {
    console.info("[contact] RESEND_API_KEY missing — submission logged only", data);
    return NextResponse.json({ success: true, mode: "log-only" });
  }

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject: `[Fitness Loft] ${serviceLabel} — ${data.name}`,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Service: ${serviceLabel}`,
      `Locale: ${data.locale}`,
      "",
      data.message ?? "(no message)",
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: "Email delivery failed" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
