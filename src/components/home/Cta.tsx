import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { contact, ctaText } from "@/lib/data";

export function Cta() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <AnimatedSection className="glow-border relative overflow-hidden rounded-[2.5rem] p-2">
          <div className="glass relative overflow-hidden rounded-[2.25rem] px-8 py-20 text-center sm:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(139,92,246,0.35),transparent)]"
            />
            <h2 className="mx-auto max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Dine konkurrenter stopper ikke med at{" "}
              <GradientText>vokse online</GradientText> — hvorfor skulle du?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/55">
              Hver dag uden en ordentlig hjemmeside er en dag dine kunder finder en anden.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="/kontakt" size="lg">
                {ctaText}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/45">
              Uforpligtende samtale · Svar inden 24 timer · Tlf. {contact.phone}
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
