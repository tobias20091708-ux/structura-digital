import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { contact } from "@/lib/data";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#fordele", label: "Om os" },
  { href: "/kontakt", label: "Kontakt" },
];

const legalLinks = [
  { href: "/privatlivspolitik", label: "Privatlivspolitik" },
  { href: "/cookiepolitik", label: "Cookiepolitik" },
  { href: "/handelsbetingelser", label: "Handelsbetingelser" },
];

export function Footer() {
  return (
    <footer className="bg-dark pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Logo invert />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Vi bygger hjemmesider, online kurser, lead pages og tjekker din virksomheds data,
              så små virksomheder i Danmark bliver fundet af flere kunder.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white">Sitemap</h4>
            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white">Kontakt</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/50">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary-light" />
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary-light" />
                <a href={contact.phoneHref} className="hover:text-white">
                  {contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>© 2026 Webløsning. Alle rettigheder forbeholdt.</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
