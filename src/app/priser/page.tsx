import type { Metadata } from "next";
import { ArrowUpRight, PlusCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Faq } from "@/components/ui/Faq";
import { PricingCard } from "@/components/pricing/PricingCard";
import { pricingTiers, addOns, faqItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Priser — Structura Digital",
  description:
    "Se priser på hjemmesider, webshops, kursusplatforme og IT-strukturering hos Structura Digital. Priser starter fra 999 kr.",
};

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(236,72,153,0.28),transparent)]"
        />
        <Container>
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <Badge>Priser</Badge>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Struktureret prissætning, <GradientText>fra 999 kr.</GradientText>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/55">
              Ingen skjulte gebyrer, ingen uklare tilbud. Vælg den pakke, der matcher dit projekt
              — eller book en samtale, så finder vi den rigtige løsning sammen.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="pb-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            {pricingTiers.map((tier, i) => (
              <AnimatedSection key={tier.name} delay={i * 0.08} className="h-full">
                <PricingCard tier={tier} />
              </AnimatedSection>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-white/35">
            Alle priser er vejledende og ekskl. moms. Endeligt tilbud afhænger af projektets
            omfang.
          </p>
        </Container>
      </section>

      <section className="pb-28">
        <Container>
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <Badge>Tilkøb</Badge>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Byg videre med <GradientText>tilvalg</GradientText>
            </h2>
            <p className="mt-5 text-lg text-white/55">
              Tilpas din pakke med ekstra ydelser, når behovet opstår.
            </p>
          </AnimatedSection>

          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
            {addOns.map((addOn, i) => (
              <AnimatedSection key={addOn.name} delay={(i % 2) * 0.08}>
                <div className="glass flex items-center justify-between gap-4 rounded-2xl px-6 py-5">
                  <div className="flex items-center gap-3">
                    <PlusCircle className="h-5 w-5 shrink-0 text-accent-violet" />
                    <span className="text-sm font-medium text-white">{addOn.name}</span>
                  </div>
                  <span className="text-sm text-white/50">{addOn.price}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
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
                Usikker på hvilken pakke der passer?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-white/55">
                Book en uforpligtende samtale, så finder vi den rigtige løsning til dit projekt
                og budget.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button href="/kontakt" size="lg">
                  Book en samtale
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
