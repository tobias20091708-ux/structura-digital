import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { BrowserMockupCard } from "@/components/portfolio/BrowserMockupCard";
import { portfolioItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio — Structura Digital",
  description:
    "Se eksempler på hjemmesider, webshops og kursusplatforme Structura Digital kan bygge til din branche.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(139,92,246,0.3),transparent)]"
        />
        <Container>
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <Badge>Portfolio</Badge>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Eksempler på <GradientText>digitalt håndværk</GradientText>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/55">
              Nedenfor ser du seks illustrative eksempler på tværs af brancher, der viser den
              designkvalitet og struktur, dit projekt kan forvente — fra restaurant og fitness til
              webshop og kursusplatform.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="pb-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {portfolioItems.map((item, i) => (
              <AnimatedSection key={item.slug} delay={(i % 3) * 0.08}>
                <BrowserMockupCard item={item} />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-28">
        <Container>
          <AnimatedSection className="glow-border relative overflow-hidden rounded-[2.5rem] p-2">
            <div className="glass relative overflow-hidden rounded-[2.25rem] px-8 py-16 text-center sm:px-16">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(34,211,238,0.25),transparent)]"
              />
              <h2 className="mx-auto max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Kunne dit projekt være det <GradientText>næste eksempel</GradientText>?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-white/55">
                Fortæl os om din idé, og få et konkret forslag til struktur og design.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button href="/kontakt" size="lg">
                  Book en samtale
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
                <Button href="/priser" variant="outline" size="lg">
                  Se priser
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
