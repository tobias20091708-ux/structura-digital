import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { DemoPreview } from "@/components/DemoPreview";

export function DemoShowcase() {
  return (
    <section className="bg-dark py-20 sm:py-28">
      <Container>
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <Badge invert>Eksempler</Badge>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Se hvad vi bygger
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Interaktive eksempler på hjemmesider vi har designet — prøv dem selv,
            direkte her på siden.
          </p>
        </AnimatedSection>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          <AnimatedSection delay={0.1}>
            <DemoPreview title="www.holmogson.dk" src="/demos/tomrer.html" />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <ComingSoonPreview />
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}

function ComingSoonPreview() {
  return (
    <div className="flex h-full min-h-[350px] flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] px-6 text-center sm:min-h-[500px]">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/[0.06]">
        <Sparkles className="h-6 w-6 text-white/60" />
      </span>
      <div>
        <p className="text-sm font-semibold text-white">Endnu et eksempel på vej</p>
        <p className="mt-1 text-xs text-white/50">
          Vi tilføjer snart flere interaktive demoer her
        </p>
      </div>
    </div>
  );
}
