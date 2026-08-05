import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { GradientText } from "@/components/ui/GradientText";
import { Faq } from "@/components/ui/Faq";
import { faqItems } from "@/lib/data";

export function FaqSection() {
  return (
    <section className="relative py-28 sm:py-36">
      <Container className="max-w-3xl">
        <AnimatedSection className="text-center">
          <Badge>Spørgsmål</Badge>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Ofte stillede <GradientText>spørgsmål</GradientText>
          </h2>
          <p className="mt-5 text-lg text-white/55">
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
