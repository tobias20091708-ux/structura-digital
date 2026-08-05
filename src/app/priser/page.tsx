import type { Metadata } from "next";
import { ArrowUpRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Faq } from "@/components/ui/Faq";
import { faqItems, contact, ctaText } from "@/lib/data";

export const metadata: Metadata = {
  title: "Priser — Structura Digital",
  description: `Se priser hos Structura Digital. ${contact.priceLine}.`,
};

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(236,72,153,0.28),transparent)]"
        />
        <Container>
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <Badge>Priser</Badge>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Enkel pris, <GradientText>ingen overraskelser</GradientText>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/55">
              Ingen pakker, ingen skjulte gebyrer. Ring, og få et tilbud der er tilpasset
              præcis dit projekt.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="glow-border relative mx-auto mt-14 max-w-xl overflow-hidden rounded-[2rem] p-2">
            <div className="glass rounded-[1.75rem] px-8 py-12 text-center">
              <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Starter fra <GradientText>985 kr</GradientText>
              </p>
              <p className="mt-4 text-white/55">
                Ring for et tilbud tilpasset dig og dit projekt.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button href={contact.phoneHref} size="lg">
                  <Phone className="h-4 w-4" />
                  Ring på {contact.phone}
                </Button>
                <Button href="/kontakt" variant="outline" size="lg">
                  {ctaText}
                </Button>
              </div>
              <p className="mt-6 text-xs text-white/35">
                Alle priser er vejledende og ekskl. moms. Endeligt tilbud afhænger af
                projektets omfang.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="pb-28">
        <Container className="max-w-3xl">
          <AnimatedSection className="text-center">
            <Badge>Spørgsmål</Badge>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Godt at <GradientText>vide</GradientText>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="mt-12">
            <Faq items={faqItems} />
          </AnimatedSection>
        </Container>
      </section>

      <section className="pb-28">
        <Container>
          <AnimatedSection className="glow-border relative overflow-hidden rounded-[2.5rem] p-2">
            <div className="glass relative overflow-hidden rounded-[2.25rem] px-8 py-16 text-center sm:px-16">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(139,92,246,0.3),transparent)]"
              />
              <h2 className="mx-auto max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Usikker på hvad du har brug for?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-white/55">
                Book en uforpligtende samtale, så finder vi den rigtige løsning til dit projekt
                og budget.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button href="/kontakt" size="lg">
                  {ctaText}
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
