import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { trustStats } from "@/lib/data";

export function TrustStats() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {trustStats.map((item, i) => (
            <AnimatedSection key={item.stat} delay={i * 0.1} className="text-center sm:text-left">
              <p className="text-3xl font-bold tracking-tight text-primary-light sm:text-4xl">
                {item.stat}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
