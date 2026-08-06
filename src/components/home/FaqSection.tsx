import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { Faq } from "@/components/ui/Faq";
import { faqItems } from "@/lib/data";

export function FaqSection() {
  return (
    <section className="bg-dark py-20 sm:py-28">
      <Container className="max-w-3xl">
        <AnimatedSection className="text-center">
          <Badge invert>Spørgsmål</Badge>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ofte stillede spørgsmål
          </h2>
          <p className="mt-4 text-lg text-white/60">
            De spørgsmål vi oftest får, besvaret med det samme.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-12">
          <Faq items={faqItems} />
        </AnimatedSection>
      </Container>
    </section>
  );
}
