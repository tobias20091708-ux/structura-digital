import { Marquee } from "@/components/ui/Marquee";

const items = [
  "Landingpages",
  "Webshops",
  "Online kurser",
  "IT-strukturering",
  "SEO",
  "Automatisering",
  "Medlemsplatforme",
  "Brand & design",
];

export function ServicesMarquee() {
  return (
    <div className="border-y border-white/10 bg-white/[0.015] py-6">
      <Marquee items={items} />
    </div>
  );
}
