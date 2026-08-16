import {
  Globe,
  Target,
  GraduationCap,
  MailPlus,
  Megaphone,
  Bot,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

type BentoService = {
  icon: LucideIcon;
  title: string;
  text: string;
  className?: string;
  featured?: boolean;
};

const bentoServices: BentoService[] = [
  {
    icon: Globe,
    title: "Hjemmesider",
    text: "Moderne, lynhurtige sider bygget til at gøre besøgende til kunder. Mobilvenlige og SEO-klar fra dag et.",
    className: "md:col-span-2",
    featured: true,
  },
  {
    icon: Target,
    title: "Landingssider",
    text: "En side med et klart mål: flere kunder. Perfekt til kampagner og annoncer.",
  },
  {
    icon: GraduationCap,
    title: "Kursusplatforme",
    text: "Sælg din viden online med login, betaling og videohosting.",
  },
  {
    icon: MailPlus,
    title: "E-mail automation",
    text: "Opfølgning der kører af sig selv, mens du passer din forretning.",
  },
  {
    icon: Megaphone,
    title: "Digital markedsføring",
    text: "Google og Meta-annoncer der rammer de rigtige kunder.",
  },
  {
    icon: Bot,
    title: "AI-assistenter",
    text: "Svar dine kunder døgnet rundt med en assistent trænet på din virksomhed.",
    className: "md:col-span-2",
    featured: true,
  },
];

export function ServicesBento() {
  return (
    <section id="services" className="scroll-mt-24 bg-dark py-14 sm:py-20">
      <Container>
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <Badge invert>Services</Badge>
          <h2 className="mt-5 text-3xl tracking-tight text-white sm:text-4xl">
            Vi bygger det. Du vokser.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/60">
            Alt hvad din virksomhed skal bruge for at blive fundet, valgt og
            kontaktet online.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-4">
          {bentoServices.map((service, i) => (
            <AnimatedSection
              key={service.title}
              delay={i * 0.06}
              className={cn("md:col-span-2 lg:col-span-1", service.className && "lg:col-span-2")}
            >
              <div
                className={cn(
                  "group h-full rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1",
                  service.featured
                    ? "border-accent/25 bg-gradient-to-br from-accent/[0.10] to-transparent hover:border-accent/40"
                    : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.06]"
                )}
              >
                <span
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110",
                    service.featured ? "bg-accent/15 text-accent" : "bg-white/[0.07] text-primary-light"
                  )}
                >
                  <service.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl text-white sm:text-2xl">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{service.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
