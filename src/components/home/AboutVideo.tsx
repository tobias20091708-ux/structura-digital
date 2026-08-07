import { Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";

/**
 * Pass `videoUrl` once the final company video exists to swap in a real
 * <video> element — until then a professional placeholder is shown.
 */
export function AboutVideo({ videoUrl }: { videoUrl?: string } = {}) {
  return (
    <section className="bg-dark py-20 sm:py-28">
      <Container>
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <Badge invert>Lær os at kende</Badge>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Se hvem vi er, og hvordan vi arbejder
          </h2>
          <p className="mt-4 text-lg text-white/60">
            En kort video om hvem vi er, hvad vi laver, og hvordan vi hjælper din
            virksomhed med at stå stærkere online.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mx-auto mt-14 max-w-4xl">
          {videoUrl ? (
            <video
              controls
              className="aspect-video w-full rounded-2xl bg-dark object-cover"
              src={videoUrl}
            />
          ) : (
            <VideoPlaceholder />
          )}
        </AnimatedSection>
      </Container>
    </section>
  );
}

function VideoPlaceholder() {
  return (
    <div
      role="img"
      aria-label="Videopræsentation af Structura Digital kommer snart"
      className="card group relative aspect-video overflow-hidden rounded-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-primary to-primary-light" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:32px_32px]"
      />
      <div className="relative flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
          <Play className="h-6 w-6 translate-x-0.5 text-white" fill="currentColor" />
        </span>
        <div>
          <p className="text-sm font-semibold text-white">Videopræsentation på vej</p>
          <p className="mt-1 text-xs text-white/60">
            Vores introvideo bliver snart tilføjet her
          </p>
        </div>
      </div>
    </div>
  );
}
