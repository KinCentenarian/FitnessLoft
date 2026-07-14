import type { SiteContent } from "@fitnessloft/content";
import { buildLocalBusinessJsonLd } from "@/lib/seo";

export function JsonLd({ content }: { content: SiteContent }) {
  const data = buildLocalBusinessJsonLd(content);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
