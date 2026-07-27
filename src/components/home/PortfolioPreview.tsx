import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { BrowserMockupCard } from "@/components/portfolio/BrowserMockupCard";
import { portfolioItems } from "@/lib/data";

export function PortfolioPreview() {
  const preview = portfolioItems.slice(0, 3);

  return (
    <section className="relative py-28 sm:py-36">
      <Container>
        <AnimatedSection className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <Badge>Cases</Badge>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Eksempler på <GradientText>hjemmesider vi bygger</GradientText>
            </h2>
            <p className="mt-5 text-lg text-white/55">
              Illustrative eksempler på det niveau af design og struktur, dit projekt kan
              forvente.
            </p>
          </div>
          <Button href="/portfolio" variant="outline">
            Se hele portfolioet
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {preview.map((item, i) => (
            <AnimatedSection key={item.slug} delay={i * 0.1}>
              <BrowserMockupCard item={item} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
