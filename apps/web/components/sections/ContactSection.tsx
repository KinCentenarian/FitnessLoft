import type { SiteContent } from "@fitnessloft/content";
import { ContactForm } from "@/features/contact/components/ContactForm";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection({ content }: { content: SiteContent }) {
  return (
    <section id="contact" className="py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading watermark={content.contact.watermark} title={content.contact.title} />
          <h3 className="font-brand text-xl text-primary md:text-2xl">{content.contact.subtitle}</h3>
          <p className="mt-6 text-lg text-white">
            <a href={`tel:${content.contact.phone.replace(/\./g, "")}`} className="hover:text-primary">
              {content.contact.phone}
            </a>
          </p>
        </div>
        <ContactForm content={content.contact} locale={content.locale} />
      </Container>
    </section>
  );
}
