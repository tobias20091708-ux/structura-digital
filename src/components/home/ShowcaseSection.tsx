import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { DemoSiteTemplate } from "@/components/demo/DemoSiteTemplate";

const previewData = {
  companyName: "Andersen VVS",
  industryLabel: "VVS",
  tagline: "Din lokale VVS'er",
  city: "København",
  phone: "12 34 56 78",
  phoneHref: "tel:+4512345678",
  services: ["Akut rørskade", "Nyt badeværelse", "Varmepumper", "Afløb og kloak"],
  about: "Vi rykker ud hurtigt og laver arbejdet ordentligt første gang.",
  accent: "#1e3a34",
};

export function ShowcaseSection() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <AnimatedSection direction="left">
            <Badge>Se eksempel</Badge>
            <h2 className="mt-6 text-3xl tracking-tight text-foreground sm:text-4xl">
              Sådan kan din hjemmeside se ud
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/55">
              Herunder ser du et eksempel på en hjemmeside til et VVS-firma. Vil du se, hvordan
              det ser ud med dit eget firmanavn og dine ydelser? Vi bygger en gratis demo til
              dig — helt uden binding.
            </p>
            <Link
              href="/eksempel/vvs-demo"
              className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-primary-light transition-colors hover:text-primary"
            >
              Se eksemplet i fuld størrelse
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.1}>
            <Link href="/eksempel/vvs-demo" className="block scale-[0.94] transition-transform hover:scale-[0.96]">
              <div className="pointer-events-none">
                <DemoSiteTemplate data={previewData} />
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
