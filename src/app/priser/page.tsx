import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Faq } from "@/components/ui/Faq";
import { PriceEstimator } from "@/components/pricing/PriceEstimator";
import { PackageCard } from "@/components/pricing/PackageCard";
import { faqItems, contact, pricingPackages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Priser — Structura Digital",
  description:
    "Faste, gennemskuelige priser fra 985 kr. Svar på 4 hurtige spørgsmål og få en anbefaling til den rigtige løsning for din virksomhed.",
};

export default function PricingPage() {
  return (
    <div className="bg-dark">
      <section className="relative overflow-hidden pt-40 pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(37,99,235,0.15),transparent)]"
        />
        <Container>
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <Badge invert>Priser</Badge>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Find den rigtige løsning på 30 sekunder
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              Svar på 4 hurtige spørgsmål, og få en anbefaling der passer til din
              virksomhed og dit budget. Faste priser — ingen overraskelser.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mx-auto mt-14 max-w-2xl">
            <PriceEstimator />
          </AnimatedSection>
        </Container>
      </section>

      <section id="pakker" className="scroll-mt-24 py-20 sm:py-28">
        <Container>
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <Badge invert>Pakker</Badge>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Alle vores pakker
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Gennemskuelige priser og faste pakker — du ved præcis, hvad du får,
              og hvad det koster.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 gap-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {pricingPackages.map((pkg, i) => (
              <AnimatedSection key={pkg.id} delay={i * 0.06}>
                <PackageCard pkg={pkg} className="h-full" />
              </AnimatedSection>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-white/40">
            Alle priser er ekskl. moms.
          </p>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          <AnimatedSection className="rounded-2xl border border-white/15 bg-white/[0.04] px-8 py-14 text-center sm:px-16">
            <h2 className="mx-auto max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ikke sikker på hvad du har brug for?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/60">
              Ring til os på {contact.phone} eller skriv til {contact.email} — vi
              hjælper dig med at finde den rigtige løsning.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href={contact.phoneHref} size="lg">
                <Phone className="h-4 w-4" />
                Ring på {contact.phone}
              </Button>
              <Button href={`mailto:${contact.email}`} variant="outlineOnDark" size="lg">
                <Mail className="h-4 w-4" />
                Skriv til os
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="pb-28">
        <Container className="max-w-3xl">
          <AnimatedSection className="text-center">
            <Badge invert>Spørgsmål</Badge>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Godt at vide
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="mt-12">
            <Faq items={faqItems} />
          </AnimatedSection>
        </Container>
      </section>
    </div>
  );
}
