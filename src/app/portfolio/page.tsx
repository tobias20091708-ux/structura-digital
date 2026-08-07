import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DemoPreview } from "@/components/DemoPreview";
import { demoSites, ctaText } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cases — Structura Digital",
  description:
    "Se interaktive eksempler på hjemmesider bygget af Structura Digital — prøv dem selv, direkte i browseren.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-dark">
      <section className="relative overflow-hidden pt-40 pb-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(228,87,46,0.13),transparent)]"
        />
        <Container>
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <Badge invert>Cases</Badge>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Digitalt håndværk du kan prøve
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              Ingen skærmbilleder — hver case er en rigtig hjemmeside, du kan
              scrolle og klikke rundt i, direkte her på siden.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="space-y-20">
            {demoSites.map((demo, i) => (
              <AnimatedSection key={demo.slug} delay={i * 0.08}>
                <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold tracking-[0.2em] text-accent uppercase">
                      {demo.category}
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                      {demo.name}
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base">
                      {demo.description}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {demo.points.map((point) => (
                      <li
                        key={point}
                        className="inline-flex items-center gap-2 text-sm font-medium text-white/60"
                      >
                        <Check className="h-4 w-4 shrink-0 text-success" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <DemoPreview title={demo.url} src={demo.src} size="large" />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-28">
        <Container>
          <AnimatedSection className="grain relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary via-[#16302a] to-dark px-8 py-16 text-center sm:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(228,87,46,0.18),transparent)]"
            />
            <div className="relative">
              <h2 className="mx-auto max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Kunne dit projekt være det næste eksempel?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-white/60">
                Fortæl os om din idé, og få et konkret forslag til struktur og
                design — uforpligtende.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button href="/kontakt" size="lg">
                  {ctaText}
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
                <Button href="/priser" variant="outlineOnDark" size="lg">
                  Se priser
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </div>
  );
}
