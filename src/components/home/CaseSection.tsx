import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";

export function CaseSection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <Container>
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <Badge>Rigtig kunde</Badge>
          <h2 className="mt-6 text-3xl tracking-tight text-foreground sm:text-4xl">
            Vi leverer rigtige sider til rigtige kunder
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground/55">
            Her er en hjemmeside, vi har bygget og leveret — ikke et eksempel, men et
            live projekt for en betalende kunde. Ikke en håndværker denne gang, men det
            viser samme håndværk: hurtigt, professionelt og til tiden.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mx-auto mt-12 max-w-2xl">
          <a
            href="https://bergur.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="card group flex flex-col gap-4 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-0.5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-primary-light">
                Foredragsholder / forsker
              </p>
              <h3 className="mt-2 text-xl text-foreground">Bergur Rønne Moberg</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-foreground/55">
                Bookingside til foredrag om færøsk litteratur og kultur — med
                foredragsoversigt, priser og direkte booking.
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-foreground/15 bg-foreground/[0.02] px-5 py-3 text-sm font-semibold text-foreground transition-colors group-hover:border-primary-light/40 group-hover:text-primary-light">
              Besøg sitet
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </AnimatedSection>
      </Container>
    </section>
  );
}
