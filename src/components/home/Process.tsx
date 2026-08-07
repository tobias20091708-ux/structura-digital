import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <section className="bg-dark py-20 sm:py-28">
      <Container>
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <Badge invert>Sådan foregår det</Badge>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Fra idé til lancering
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Fire trin. Ingen overraskelser. De fleste projekter er live på 1-2 uger.
          </p>
        </AnimatedSection>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div
            aria-hidden
            className="absolute top-6 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-accent/40 via-white/15 to-primary-light/40 lg:block"
          />
          {processSteps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.1} className="relative text-center lg:text-left">
              <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-dark text-accent lg:mx-0">
                <step.icon className="h-5 w-5" />
              </div>
              <p className="mt-5 text-xs font-bold tracking-[0.2em] text-white/30">
                TRIN {step.number}
              </p>
              <h3 className="mt-2 text-lg font-bold text-white">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-white/55 lg:mx-0">
                {step.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
