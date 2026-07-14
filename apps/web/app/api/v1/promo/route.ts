import { PROMO_OPTIN_MESSAGE, promoLeadSchema } from "@fitnessloft/schemas";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  const parsed = promoLeadSchema.safeParse(body);

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

  const to = process.env.CONTACT_TO_EMAIL ?? "info@lefitnessloft.com";
  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  const emailBody = [
    PROMO_OPTIN_MESSAGE,
    "",
    `Courriel du visiteur : ${data.email}`,
    `Langue : ${data.locale}`,
  ].join("\n");

  if (!resend) {
    console.info("[promo] RESEND_API_KEY missing — submission logged only", {
      email: data.email,
      message: PROMO_OPTIN_MESSAGE,
    });
    return NextResponse.json({ success: true, mode: "log-only" });
  }

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject: "[Fitness Loft] Rabais 15% — première évaluation",
    text: emailBody,
  });

  if (error) {
    return NextResponse.json({ error: "Email delivery failed" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
