import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const points = [
  "Faste priser — ingen skjulte gebyrer",
  "Svar på 4 spørgsmål og få en anbefaling",
  "Alle priser er ekskl. moms",
];

export function PricingTeaser() {
  return (
    <section className="bg-dark py-20 sm:py-28">
      <Container>
        <AnimatedSection className="grain relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary via-[#16302a] to-dark px-8 py-16 text-center sm:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(228,87,46,0.18),transparent)]"
          />
          <div className="relative">
            <Badge invert>Priser</Badge>
            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Løsninger fra <span className="text-accent">985 kr.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-white/60">
              Tag vores pris-quiz og få en anbefaling, der passer til din
              virksomhed og dit budget — på 30 sekunder.
            </p>
            <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {points.map((point) => (
                <li key={point} className="inline-flex items-center gap-2 text-sm font-medium text-white/65">
                  <Check className="h-4 w-4 text-success" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="/priser" size="lg">
                Se priser og tag quizzen
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
