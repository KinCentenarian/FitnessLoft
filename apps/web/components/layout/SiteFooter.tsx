import Image from "next/image";
import Link from "next/link";
import type { SiteContent } from "@fitnessloft/content";
import { Container } from "@/components/ui/Container";

export function SiteFooter({ content }: { content: SiteContent }) {
  const { footer } = content;

  return (
    <footer className="border-t border-white/10 bg-panel-dark py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/media/FitnessLoft_BRAND_LOGO_NOIR_COMPLET.svg"
              alt="Le Fitness Loft"
              width={180}
              height={80}
              className="mb-6 h-auto w-40"
            />
            <p className="text-sm text-accent">{footer.copyright}</p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">{footer.contactTitle}</h3>
            <ul className="space-y-2 text-sm text-accent">
              <li>
                <a href={`mailto:${footer.email}`} className="hover:text-primary">
                  {footer.email}
                </a>
              </li>
              <li>
                <a href={`tel:${footer.phone.replace(/\./g, "")}`} className="hover:text-primary">
                  {footer.phone}
                </a>
              </li>
              <li>{footer.address}</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">{footer.hoursTitle}</h3>
            <ul className="space-y-2 text-sm text-accent">
              {footer.hours.hours.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <div className="mt-6 flex gap-4">
              <Link href={footer.social.facebook} className="text-sm uppercase text-primary hover:underline">
                Facebook
              </Link>
              <Link href={footer.social.instagram} className="text-sm uppercase text-primary hover:underline">
                Instagram
              </Link>
              <Link href={footer.social.linkedin} className="text-sm uppercase text-primary hover:underline">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
