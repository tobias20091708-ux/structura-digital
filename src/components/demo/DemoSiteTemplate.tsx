import { Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";

export type DemoSiteData = {
  companyName: string;
  industryLabel: string;
  tagline: string;
  city: string;
  phone: string;
  phoneHref: string;
  services: string[];
  about: string;
  accent?: string;
};

/**
 * Selvstændig, statisk mockup af en håndværker-hjemmeside.
 * Bruges som "sådan kunne din side se ud"-demo — dupliker denne fil
 * (se outreach/demo-strategi.md) og udskift `data` for en ny prospect.
 */
export function DemoSiteTemplate({ data }: { data: DemoSiteData }) {
  const accent = data.accent ?? "#1e3a34";

  return (
    <div className="overflow-hidden rounded-xl border border-foreground/10 bg-white text-[#1a1a1a]">
      {/* Demo-site header */}
      <header
        className="flex flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10"
        style={{ backgroundColor: accent }}
      >
        <div>
          <p className="text-lg font-bold text-white">{data.companyName}</p>
          <p className="text-sm text-white/70">{data.tagline}</p>
        </div>
        <a
          href={data.phoneHref}
          className="inline-flex w-fit items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold"
          style={{ color: accent }}
        >
          <Phone className="h-4 w-4" />
          {data.phone}
        </a>
      </header>

      {/* Hero */}
      <section className="border-b border-foreground/10 px-6 py-12 text-center sm:px-10 sm:py-16">
        <p className="text-xs font-bold uppercase tracking-wide text-foreground/40">
          {data.industryLabel} i {data.city}
        </p>
        <h2 className="mx-auto mt-4 max-w-xl text-2xl font-bold leading-tight sm:text-3xl">
          Hurtig, ærlig hjælp fra {data.companyName}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-foreground/60">
          {data.about}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={data.phoneHref}
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white"
            style={{ backgroundColor: accent }}
          >
            <Phone className="h-4 w-4" />
            Ring nu — {data.phone}
          </a>
          <span className="inline-flex items-center gap-2 rounded-lg border border-foreground/15 px-6 py-3 text-sm font-medium text-foreground/60">
            <Clock className="h-4 w-4" />
            Svar samme dag
          </span>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-foreground/10 px-6 py-10 sm:px-10">
        <h3 className="text-center text-lg font-bold">Det laver vi</h3>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {data.services.map((service) => (
            <div
              key={service}
              className="flex items-center gap-3 rounded-lg border border-foreground/10 bg-foreground/[0.02] px-4 py-3 text-sm"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: accent }} />
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Footer / contact strip */}
      <footer className="flex flex-col items-center gap-2 px-6 py-8 text-center text-sm text-foreground/50 sm:px-10">
        <p className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          {data.city}
        </p>
        <p>{data.companyName} — eksempel-side genereret af Webløsning.dk</p>
      </footer>
    </div>
  );
}
