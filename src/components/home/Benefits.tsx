import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { benefits } from "@/lib/data";

export function Benefits() {
  return (
    <section id="fordele" className="scroll-mt-24 bg-dark py-14 sm:py-20">
      <Container>
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <Badge invert>Om os</Badge>
          <h2 className="mt-5 text-3xl tracking-tight text-white sm:text-4xl">
            Derfor vælger virksomheder os
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/60">
            Vi er en dansk digital partner for virksomheder, der vil stå stærkere
            online — med personlig kontakt, gennemskuelige priser og løsninger, der er
            bygget til deres behov.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <AnimatedSection key={benefit.title} delay={i * 0.08} className="card rounded-xl p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/[0.08] text-accent">
                <benefit.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-xl text-foreground sm:text-2xl">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{benefit.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
