import type { Metadata } from "next";
import { Phone, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { GradientText } from "@/components/ui/GradientText";
import { ContactForm } from "@/components/contact/ContactForm";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kontakt — Structura Digital",
  description:
    "Få et gratis tilbud fra Structura Digital på din næste hjemmeside, kursusplatform, lead page eller data-tjek. Svar inden 24 timer.",
};

const infoItems = [
  {
    icon: Phone,
    label: "Telefon",
    value: contact.phone,
    href: contact.phoneHref,
  },
  {
    icon: Clock,
    label: "Svartid",
    value: "Svar inden 24 timer",
  },
];

export default function KontaktPage() {
  return (
    <section className="relative overflow-hidden pt-40 pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(30,64,175,0.1),transparent)]"
      />
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <AnimatedSection direction="left">
              <Badge>Kontakt</Badge>
              <h1 className="mt-6 text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Få et gratis <GradientText>tilbud</GradientText>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-foreground/55">
                Fortæl os om dit projekt, så vender vi tilbage med et konkret forslag til
                løsning, tidsplan og pris — helt uforpligtende. Ingen binding.
              </p>

              <ul className="mt-10 space-y-5">
                {infoItems.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/[0.03] text-primary">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs text-foreground/40">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-medium text-foreground hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-foreground">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="right" delay={0.1}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
