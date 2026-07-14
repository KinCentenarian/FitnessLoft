import type { Metadata } from "next";
import { Bodoni_Moda, Inter, Roboto } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { locales, getContent } from "@fitnessloft/content";
import { GoogleTagManager } from "@/components/analytics/GoogleTagManager";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { PromoPopup } from "@/features/promo/components/PromoPopup";
import { getCanonicalUrl } from "@/lib/seo";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});
const bodoni = Bodoni_Moda({ subsets: ["latin"], variable: "--font-bodoni" });

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as "fr" | "en")) return {};
  const content = await getContent(locale as "fr" | "en");
  const canonical = getCanonicalUrl(content.locale);

  return {
    title: content.metadata.title,
    description: content.metadata.description,
    alternates: {
      canonical,
      languages: {
        fr: getCanonicalUrl("fr"),
        en: getCanonicalUrl("en"),
        "x-default": getCanonicalUrl("fr"),
      },
    },
    openGraph: {
      title: content.metadata.title,
      description: content.metadata.description,
      locale: content.metadata.ogLocale,
      type: "website",
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: content.metadata.title,
      description: content.metadata.description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!locales.includes(locale as "fr" | "en")) notFound();

  setRequestLocale(locale);
  const content = await getContent(locale as "fr" | "en");

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${roboto.variable} ${bodoni.variable}`}
    >
      <body>
        <GoogleTagManager />
        <JsonLd content={content} />
        <NextIntlClientProvider locale={locale} messages={{}}>
          <SiteHeader content={content} />
          <main>{children}</main>
          <SiteFooter content={content} />
          <PromoPopup locale={content.locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
