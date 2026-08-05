import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { contact } from "@/lib/data";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7.5 10.5V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="7.5" cy="7.2" r="1" fill="currentColor" />
      <path
        d="M11 17v-4c0-1.4 1-2.5 2.4-2.5S16 11.6 16 13v4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M11 10.5V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

const columns = [
  {
    title: "Sitemap",
    links: [
      { href: "/", label: "Forside" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "/priser", label: "Priser" },
      { href: "/kontakt", label: "Kontakt" },
    ],
  },
  {
    title: "Ydelser",
    links: [
      { href: "/#ydelser", label: "Hjemmesider" },
      { href: "/#ydelser", label: "Online kurser & platforme" },
      { href: "/#ydelser", label: "Lead Pages" },
      { href: "/#ydelser", label: "Data Checking / Reparation" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-foreground/10 pt-20 pb-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent"
      />
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground/50">
              Hjemmesider, online kurser, lead pages og data-tjek til små virksomheder, der vil
              findes af flere kunder.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={`mailto:${contact.email}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 text-foreground/60 transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 text-foreground/60 transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 text-foreground/60 transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-foreground">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link, i) => (
                  <li key={link.label + i}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/50 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-semibold text-foreground">Kontakt</h4>
            <ul className="mt-4 space-y-3 text-sm text-foreground/50">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href={`mailto:${contact.email}`} className="hover:text-foreground">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href={contact.phoneHref} className="hover:text-foreground">
                  {contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-8 text-xs text-foreground/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Structura Digital. Alle rettigheder forbeholdes.</p>
          <p>CVR 00000000 · Danmark</p>
        </div>
      </Container>
    </footer>
  );
}
