import { ArrowUpRight, Check, Menu } from "lucide-react";
import { cn } from "@/lib/cn";
import type { PortfolioItem } from "@/lib/data";

function EstatePreview() {
  return (
    <div className="case-site case-estate">
      <div className="case-nav">
        <span className="case-wordmark">BOLIGRUM</span>
        <div className="case-nav-links"><span>Boliger</span><span>Om os</span><span>Kontakt</span></div>
        <Menu className="case-menu" />
      </div>
      <div className="case-estate-grid">
        <div className="case-estate-copy">
          <p className="case-kicker">Din lokale ejendomsmægler</p>
          <h3>Overvejer du at sælge din bolig?</h3>
          <p className="case-lead">Få en ærlig vurdering af dit hjem — helt uforpligtende.</p>
          <button className="case-button">Bestil vurdering <ArrowUpRight /></button>
          <div className="case-proof"><span>4.9</span><span>★★★★★</span><span>Vurderet af boligsælgere</span></div>
        </div>
        <div className="case-house" aria-hidden>
          <div className="case-sun" />
          <div className="case-cloud case-cloud-one" /><div className="case-cloud case-cloud-two" />
          <div className="case-home"><span className="case-roof" /><span className="case-wall"><i /><i /><i /></span></div>
          <div className="case-bush case-bush-one" /><div className="case-bush case-bush-two" />
        </div>
      </div>
    </div>
  );
}

function ClinicPreview() {
  return (
    <div className="case-site case-clinic">
      <div className="case-nav">
        <span className="case-wordmark">STILLE</span>
        <div className="case-nav-links"><span>Behandlinger</span><span>Priser</span><span>Om klinikken</span></div>
        <button className="case-mini-button">Book tid</button>
      </div>
      <div className="case-clinic-hero">
        <div className="case-clinic-art" aria-hidden><div className="case-arch" /><div className="case-leaf case-leaf-one" /><div className="case-leaf case-leaf-two" /><div className="case-arch-small" /></div>
        <div className="case-clinic-copy">
          <p className="case-kicker">Krop & velvære</p>
          <h3>Giv kroppen<br />ro igen.</h3>
          <p className="case-lead">Nærværende behandlinger, der giver dig plads til at lande.</p>
          <button className="case-text-button">Find din behandling <ArrowUpRight /></button>
        </div>
      </div>
      <div className="case-clinic-footer"><span>Massage</span><span>Fysioterapi</span><span>Velvære</span></div>
    </div>
  );
}

function CraftPreview() {
  return (
    <div className="case-site case-craft">
      <div className="case-nav">
        <span className="case-wordmark">FORM</span>
        <div className="case-nav-links"><span>Ydelser</span><span>Projekter</span><span>Kontakt</span></div>
        <span className="case-phone">70 24 08 16</span>
      </div>
      <div className="case-craft-hero">
        <div className="case-craft-copy"><p className="case-kicker">Tømrerarbejde med omtanke</p><h3>Godt håndværk<br />holder længere.</h3><button className="case-button">Få et tilbud <ArrowUpRight /></button></div>
        <div className="case-craft-art" aria-hidden><div className="case-plank case-plank-a" /><div className="case-plank case-plank-b" /><div className="case-plank case-plank-c" /><div className="case-plank case-plank-d" /></div>
      </div>
      <div className="case-craft-stats"><span><Check /> Lokal og personlig</span><span><Check /> Ordentlige materialer</span><span><Check /> Klare aftaler</span></div>
    </div>
  );
}

export function BrowserMockupCard({ item }: { item: PortfolioItem }) {
  const Preview = item.layout === "estate" ? EstatePreview : item.layout === "clinic" ? ClinicPreview : CraftPreview;

  return (
    <article className={cn("case-showcase", `case-showcase-${item.layout}`)}>
      <div className="case-label"><span>{item.category}</span><span>Landing page</span></div>
      <div className="case-browser">
        <div className="case-browser-bar"><i /><i /><i /><div /></div>
        <Preview />
      </div>
    </article>
  );
}
