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

export type TrustStat = {
  stat: string;
  description: string;
};

export const trustStats: TrustStat[] = [
  {
    stat: "Skræddersyet",
    description: "Hver løsning bygges til netop din virksomhed — ingen templates.",
  },
  {
    stat: "100% dansk",
    description: "Personlig kontakt, dansk support og lokal forståelse for dit marked.",
  },
  {
    stat: "Hurtig levering",
    description: "Din nye hjemmeside klar på 1-2 uger — ikke måneder.",
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
    text: "Landingssider designet til én ting: at få besøgende til at handle. Perfekt til kampagner, launches og leadgenerering.",
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
    text: "Vi tjekker og reparerer din virksomheds data — fra hjemmesidefejl til kontaktoplysninger på tværs af platforme.",
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
      "En uforpligtende snak om dine behov — du får et konkret forslag med fast pris og tidsplan.",
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
    description: "Vi bygger siden i moderne teknologi — hurtigt og skalerbart.",
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
    description: "Du taler direkte med den der bygger din side — ingen mellemled.",
  },
  {
    icon: Wallet,
    title: "Faste priser",
    description: "Du ved hvad det koster fra start. Ingen skjulte gebyrer.",
  },
  {
    icon: Headset,
    title: "Dansk support",
    description: "Hjælp når du har brug for det — på dansk, til danske virksomheder.",
  },
  {
    icon: Zap,
    title: "Moderne teknologi",
    description: "Hurtige sider bygget i Next.js — ikke tunge WordPress-templates.",
  },
];

export type FaqItem = { question: string; answer: string };

export const faqItems: FaqItem[] = [
  {
    question: "Hvor lang tid tager det?",
    answer: "De fleste hjemmesider er klar inden for 1-2 uger.",
  },
  {
    question: "Kan jeg selv redigere min side?",
    answer:
      "Ja, vi sætter dig op med et brugervenligt system så du selv kan opdatere tekst og billeder.",
  },
  {
    question: "Hvad med hosting og domæne?",
    answer: "Vi hjælper med alt det tekniske — hosting, domæne og email.",
  },
  {
    question: "Laver I også webshops?",
    answer:
      "Vi fokuserer på hjemmesider, kurser og lead pages. Kontakt os hvis du har et webshop-behov, så finder vi en løsning.",
  },
];

export type PricingPackage = {
  id: number;
  name: string;
  price: string;
  tagline: string;
  features: string[];
  badge?: "popular" | "value";
  addon?: string;
};

export const pricingPackages: PricingPackage[] = [
  {
    id: 1,
    name: "Landing Page",
    price: "985",
    tagline: "Kom online hurtigt — professionelt fra dag ét.",
    features: [
      "Én professionel landingsside",
      "Tekst, billeder og layout tilpasset din virksomhed",
      "Kontaktformular med direkte notifikation til din e-mail",
      "Mobilvenligt og hurtigt design",
      "Klar inden for 3-5 hverdage",
    ],
  },
  {
    id: 2,
    name: "Professionel Hjemmeside",
    price: "3.985",
    tagline: "Det komplette førstehåndsindtryk.",
    features: [
      "Alt fra Landing Page",
      "Eksklusivt, skræddersyet design",
      "Video- og billedintegration",
      "Prisestimat/prisliste baseret på dine ydelser",
      "Komplet lovpakke (privatlivspolitik, cookiepolitik, handelsbetingelser)",
      "Kontaktformularer og call-to-action optimering",
    ],
  },
  {
    id: 3,
    name: "Vækstpakke",
    price: "5.985",
    tagline: "Bygget til at skaffe dig kunder — ikke bare besøgende.",
    badge: "popular",
    features: [
      "Alt fra Landing Page og Professionel Hjemmeside",
      "Automatisk e-mail opsamling fra besøgende",
      "Professionelle tekster baseret på research i din branche",
      "Layout designet til at konvertere besøgende til kunder",
      "E-mail automation der følger op på interesserede leads",
    ],
    addon: "Tilkøb: AI-assistent trænet på din virksomhed (+4.999 kr.)",
  },
  {
    id: 4,
    name: "Automatisering",
    price: "985",
    tagline: "Sæt din kundekontakt på autopilot.",
    features: [
      "Integration med din eksisterende hjemmeside",
      "Automatiserede e-mail flows",
      "Online bookingsystem direkte på din side",
      "Opsætning og test inkluderet",
    ],
  },
  {
    id: 5,
    name: "Hjemmeside-tjek",
    price: "985",
    tagline: "Ro i maven — få styr på fejl, sikkerhed og lovkrav.",
    features: [
      "Sikkerhedsgennemgang af din hjemmeside",
      "Tjek af lovpligtig information (GDPR, cookies, e-handelslov)",
      "Test af alle funktioner og formularer",
      "Rapport med anbefalinger til forbedringer",
    ],
  },
  {
    id: 6,
    name: "Total Makeover",
    price: "6.985",
    tagline: "Din side — som ny, men bedre.",
    features: [
      "Alt fra Automatisering og Hjemmeside-tjek",
      "Ny tekst og layout der overbeviser dine kunder",
      "Research i din branche og konkurrenter",
      "Opdatering af al information",
      "Fejlrettelser i eksisterende kode",
      "Moderne og eksklusivt redesign",
      "Alle funktioner genoprettet og testet",
    ],
  },
  {
    id: 7,
    name: "Alt Inkluderet",
    price: "12.999",
    tagline: "Den komplette løsning fra A til Z.",
    badge: "value",
    features: [
      "Alt fra alle pakker",
      "AI-assistent trænet på din virksomheds information og ydelser",
      "Komplet løsning fra A til Z",
      "Prioriteret support",
    ],
  },
];

export type DemoSite = {
  slug: string;
  name: string;
  category: string;
  url: string;
  src: string;
  description: string;
  points: string[];
};

export const demoSites: DemoSite[] = [
  {
    slug: "tomrer",
    name: "Holm & Søn",
    category: "Tømrerfirma · København",
    url: "www.holmogson.dk",
    src: "/demos/tomrer.html",
    description:
      "Landingsside for et tømrerfirma i tredje generation — varmt, håndværksnært udtryk med fokus på tillid og ét klart mål: at få telefonen til at ringe.",
    points: ["Konverteringsoptimeret hero", "Trust-sektion med erfaring", "Direkte tilbuds-CTA"],
  },
  {
    slug: "klinik",
    name: "Nordvig Klinik",
    category: "Fysioterapi · Aarhus",
    url: "www.nordvigklinik.dk",
    src: "/demos/klinik.html",
    description:
      "Klinik-side med roligt, professionelt udtryk — bygget til at skabe tryghed og gøre det nemt at booke en tid med det samme.",
    points: ["Online booking-flow", "Behandlinger med priser", "Social proof med anmeldelser"],
  },
];
