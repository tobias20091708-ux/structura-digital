import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DemoPreview } from "@/components/DemoPreview";
import { demoSites } from "@/lib/data";

export function DemoShowcase() {
  return (
    <section id="demoer" className="scroll-mt-24 bg-dark py-20 sm:py-28">
      <Container>
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <Badge invert>Eksempler</Badge>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Se hvad vi bygger
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Interaktive eksempler på hjemmesider vi har designet — prøv dem selv,
            direkte her på siden.
          </p>
        </AnimatedSection>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          {demoSites.map((demo, i) => (
            <AnimatedSection key={demo.slug} delay={0.1 + i * 0.1}>
              <DemoPreview title={demo.url} src={demo.src} />
              <p className="mt-4 text-center text-sm text-white/45">
                {demo.name} — {demo.category}
              </p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.25} className="mt-12 text-center">
          <Button href="/portfolio" variant="outlineOnDark">
            Se alle cases
            <ArrowRight className="h-4 w-4" />
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}
