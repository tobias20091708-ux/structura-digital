import {
  Globe,
  GraduationCap,
  Target,
  Wrench,
  MessageCircle,
  Palette,
  Code2,
  Rocket,
  UserCheck,
  Wallet,
  Headset,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const contact = {
  email: "kontakt@webløsning.dk",
  phone: "30 13 73 28",
  phoneHref: "tel:+4530137328",
};

export const SITE_URL = "https://webløsning.dk";

export function absoluteUrl(path: string = "/") {
  return new URL(path, SITE_URL).toString();
}

export type PricingPackage = {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaLabel: string;
};

export const pricingPackages: PricingPackage[] = [
  {
    id: "basis",
    name: "Basis",
    price: "2.999 kr.",
    priceNote: "engangspris",
    description: "Én side der fortæller kunderne hvem du er, hvad du laver, og hvordan de får fat i dig.",
    features: [
      "Forside med dine ydelser",
      "Klik-for-at-ringe knap",
      "Mobilvenlig",
      "Klar på 3-5 dage",
    ],
    ctaLabel: "Vælg Basis",
  },
  {
    id: "standard",
    name: "Standard",
    price: "4.999 kr.",
    priceNote: "engangspris",
    description: "Den mest valgte pakke. Flere sider, billeder af dit arbejde, og optimeret så Google finder dig.",
    features: [
      "Op til 5 undersider",
      "Billedgalleri af dit arbejde",
      "Søgemaskineoptimeret (SEO)",
      "Google My Business opsætning",
      "Klar på 5-7 dage",
    ],
    highlighted: true,
    ctaLabel: "Vælg Standard",
  },
  {
    id: "pro",
    name: "Pro",
    price: "7.999 kr.",
    priceNote: "engangspris",
    description: "Til dig der vil have det hele: booking, anmeldelser og løbende hjælp det første år.",
    features: [
      "Alt i Standard",
      "Online booking / kontaktformular med notifikation",
      "Opsætning af Google-anmeldelser",
      "1 års hjælp og små rettelser inkluderet",
    ],
    ctaLabel: "Vælg Pro",
  },
];

export const launchOffer = {
  headline: "De første 3 kunder får 25% rabat",
  subtext: "Vi er en ny virksomhed og vil gerne bevise, hvad vi kan. Derfor får de første 3 kunder 25% rabat på alle pakker.",
};

export type Industry = {
  slug: string;
  keyword: string;
  title: string;
  heroHeading: string;
  heroSub: string;
  painPoints: string[];
  metaTitle: string;
  metaDescription: string;
};

export const industries: Industry[] = [
  {
    slug: "vvs",
    keyword: "VVS-firma",
    title: "VVS'er",
    heroHeading: "Din næste kunde googler \"VVS\" lige nu. Finder de dig?",
    heroSub: "Vi bygger hjemmesider til VVS-firmaer, der gør ét: skaffer flere opkald. Ingen skjulte gebyrer, ingen bøvl med teknik.",
    painPoints: [
      "Kunder med akutte problemer (sprængt rør, stoppet afløb) googler og ringer til den første, de finder",
      "Uden hjemmeside taber du de opkald til konkurrenter, der dukker op i søgningen",
      "En hjemmeside med dit telefonnummer ét klik væk konverterer akutte opkald med det samme",
    ],
    metaTitle: "Hjemmeside til VVS-firma — Fra 2.999 kr. | Webløsning.dk",
    metaDescription: "Få en hjemmeside der skaffer flere VVS-kunder. Fra 2.999 kr., klar på få dage, optimeret så du findes på Google. Ring og hør mere.",
  },
  {
    slug: "elektriker",
    keyword: "elektriker",
    title: "Elektrikere",
    heroHeading: "Uden hjemmeside findes du ikke, når folk googler \"elektriker\"",
    heroSub: "Vi bygger hjemmesider til elektrikere, der viser dit arbejde, dine autorisationer og gør det nemt for kunder at ringe.",
    painPoints: [
      "9 ud af 10 tjekker Google, før de vælger en elektriker",
      "Uden en side, der ligger øverst, går opgaven til en konkurrent med bedre synlighed",
      "En simpel, hurtig hjemmeside gør dig til det oplagte valg — også for erhvervskunder",
    ],
    metaTitle: "Hjemmeside til elektriker — Fra 2.999 kr. | Webløsning.dk",
    metaDescription: "Få en hjemmeside der skaffer flere el-opgaver. Fra 2.999 kr., klar på få dage, optimeret så du findes på Google. Ring og hør mere.",
  },
  {
    slug: "tommer",
    keyword: "tømrer",
    title: "Tømrere",
    heroHeading: "Dit håndværk fortjener en hjemmeside, der viser det frem",
    heroSub: "Vi bygger hjemmesider til tømrere med billeder af dine projekter, dine ydelser og en tydelig vej til at kontakte dig.",
    painPoints: [
      "Gode referencer sælger opgaver — men kun hvis folk kan se dem",
      "Uden hjemmeside er du afhængig af mund-til-mund og opslagstavler",
      "En hjemmeside arbejder for dig 24/7, også når du står midt i en opgave",
    ],
    metaTitle: "Hjemmeside til tømrer — Fra 2.999 kr. | Webløsning.dk",
    metaDescription: "Få en hjemmeside der skaffer flere tømreropgaver. Fra 2.999 kr., klar på få dage, optimeret så du findes på Google. Ring og hør mere.",
  },
];

export type TrustStat = {
  stat: string;
  description: string;
};

export const trustStats: TrustStat[] = [
  {
    stat: "Skræddersyet",
    description: "Hver løsning bygges til netop din virksomhed. Ingen templates.",
  },
  {
    stat: "100% dansk",
    description: "Personlig kontakt, dansk support og lokal forståelse for dit marked.",
  },
  {
    stat: "Hurtig levering",
    description: "Din nye hjemmeside er klar på 1-2 uger, ikke måneder.",
  },
];

export type Service = {
  id: string;
  tab: string;
  icon: LucideIcon;
  heading: string;
  text: string;
  points: string[];
};

export const services: Service[] = [
  {
    id: "hjemmesider",
    tab: "Hjemmesider",
    icon: Globe,
    heading: "Hjemmesider der konverterer",
    text: "Vi designer og bygger moderne hjemmesider der er hurtige, mobilvenlige og optimeret til Google. Du får en side der gør besøgende til kunder.",
    points: [
      "Responsivt design til alle enheder",
      "SEO-optimeret fra start",
      "Hurtig loadtid og moderne teknologi",
    ],
  },
  {
    id: "kurser",
    tab: "Online kurser",
    icon: GraduationCap,
    heading: "Kursusplatforme der sælger",
    text: "Få din egen kursusplatform hvor du kan sælge og levere online kurser. Vi bygger alt fra login til betaling.",
    points: ["Medlemssystem med login", "Betalingsintegration", "Videohosting og modulstruktur"],
  },
  {
    id: "leadpages",
    tab: "Lead pages",
    icon: Target,
    heading: "Lead pages der fanger",
    text: "Landingssider designet til en ting: at få besøgende til at handle. Perfekt til kampagner, launches og leadgenerering.",
    points: [
      "Konverteringsoptimeret design",
      "A/B test-venligt setup",
      "Integration med email-marketing",
    ],
  },
  {
    id: "datacheck",
    tab: "Data checking",
    icon: Wrench,
    heading: "Data checking og reparation",
    text: "Vi tjekker og reparerer din virksomheds data, fra hjemmesidefejl til kontaktoplysninger på tværs af platforme.",
    points: [
      "Teknisk SEO-audit",
      "Fejlrettelse og optimering",
      "Data-konsistens på tværs af platforme",
    ],
  },
];

export type ProcessStep = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Samtale",
    description:
      "En uforpligtende snak om dine behov, hvor du får et konkret forslag med fast pris og tidsplan.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design",
    description: "Vi designer din side med fokus på dit brand og din målgruppe.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Udvikling",
    description: "Vi bygger siden i moderne teknologi, hurtigt og skalerbart.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lancering",
    description: "Vi tester alt, sætter live, og sikrer alt kører perfekt.",
  },
];

export type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const benefits: Benefit[] = [
  {
    icon: UserCheck,
    title: "Personlig kontakt",
    description: "Du taler direkte med den der bygger din side. Ingen mellemled.",
  },
  {
    icon: Wallet,
    title: "Faste priser",
    description: "Du ved hvad det koster fra start. Ingen skjulte gebyrer.",
  },
  {
    icon: Headset,
    title: "Dansk support",
    description: "Hjælp når du har brug for det, på dansk og til danske virksomheder.",
  },
  {
    icon: Zap,
    title: "Moderne teknologi",
    description: "Hurtige sider bygget i Next.js, ikke tunge WordPress-templates.",
  },
];
