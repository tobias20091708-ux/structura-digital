import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { GradientText } from "@/components/ui/GradientText";
import { painPoints } from "@/lib/data";

export function PainPoints() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <Badge>Genkender du det?</Badge>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Lyder noget af <GradientText>dette</GradientText> bekendt?
          </h2>
        </AnimatedSection>

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-foreground/10 border-y border-foreground/10">
          {painPoints.map((point, i) => (
            <AnimatedSection key={point} delay={i * 0.1} className="py-7">
              <p className="text-xl leading-snug text-foreground/80 sm:text-2xl">{point}</p>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
