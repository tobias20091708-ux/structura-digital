export type Service = {
  title: string;
  description: string;
  icon: "layout" | "graduation" | "network";
  points: string[];
};

export const services: Service[] = [
  {
    title: "Hjemmesider",
    description:
      "Skræddersyede hjemmesider der konverterer besøgende til kunder — fra skarpe landingpages til avancerede webshops.",
    icon: "layout",
    points: ["Responsivt design", "SEO-fundament", "Hurtig indlæsningstid"],
  },
  {
    title: "Online kurser & platforme",
    description:
      "Strukturerede kursusplatforme og medlemssites, så du kan pakke og sælge din viden professionelt.",
    icon: "graduation",
    points: ["Videomoduler & LMS", "Betaling & medlemslogin", "Certifikater & fremgang"],
  },
  {
    title: "IT-strukturering",
    description:
      "Vi rydder op i systemer, data og arbejdsgange, så alt hænger sammen og kan skalere med jer.",
    icon: "network",
    points: ["Systemintegration", "Automatisering", "Dokumentation & overblik"],
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "Fra 999 kr.", label: "Startpris" },
  { value: "100%", label: "Skræddersyet design" },
  { value: "14 dage", label: "Typisk leveringstid" },
  { value: "3D", label: "Moderne, interaktive oplevelser" },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  {
    number: "01",
    title: "Opdagelse",
    description:
      "Vi afdækker mål, målgruppe og behov i en indledende samtale, så løsningen bygges på det rigtige fundament.",
  },
  {
    number: "02",
    title: "Design & struktur",
    description:
      "Vi bygger wireframes og visuel identitet, der matcher jeres brand — struktureret, så intet er tilfældigt.",
  },
  {
    number: "03",
    title: "Udvikling",
    description:
      "Vi koder en hurtig, sikker og skalerbar løsning, der er testet på tværs af enheder og skærmstørrelser.",
  },
  {
    number: "04",
    title: "Lancering & vækst",
    description:
      "Vi lancerer, måler resultater og optimerer løbende, så jeres digitale tilstedeværelse fortsætter med at vokse.",
  },
];

export type PortfolioTheme = "amber" | "emerald" | "violet" | "slate" | "rose" | "teal";

export type PortfolioLayout = "split" | "centered" | "grid";

export type PortfolioItem = {
  slug: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  theme: PortfolioTheme;
  url: string;
  layout: PortfolioLayout;
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "lumiere-cafe",
    name: "Lumière Café",
    category: "Restaurant & café",
    description: "Varm og indbydende hjemmeside med online bordreservation og digitalt menukort.",
    tags: ["Landingpage", "Booking", "SEO"],
    theme: "amber",
    url: "lumiere-cafe.dk",
    layout: "split",
  },
  {
    slug: "nordic-fitness",
    name: "Nordic Fitness Studio",
    category: "Fitness & sundhed",
    description: "Energisk designsite med holdtilmelding, trænerprofiler og medlemsportal.",
    tags: ["Medlemslogin", "Kalender", "Mobiloptimeret"],
    theme: "emerald",
    url: "nordicfitness.dk",
    layout: "centered",
  },
  {
    slug: "vaekst-med-content",
    name: "Vækst med Content",
    category: "Online kursus",
    description: "Kursusplatform med videomoduler, fremgangsmåling og automatiske certifikater.",
    tags: ["LMS", "Betaling", "Fællesskab"],
    theme: "violet",
    url: "vaekstmedcontent.dk",
    layout: "grid",
  },
  {
    slug: "anker-partners",
    name: "Anker & Partners",
    category: "Advokatfirma",
    description: "Professionel og tillidsvækkende erhvervsside med sagsformular og teamoversigt.",
    tags: ["Erhverv", "CMS", "Sikkerhed"],
    theme: "slate",
    url: "ankerpartners.dk",
    layout: "centered",
  },
  {
    slug: "solberg-fotografi",
    name: "Solberg Fotografi",
    category: "Fotograf & portfolio",
    description: "Visuelt fokuseret portfolio med fuldskærmsgallerier og bookingkalender.",
    tags: ["Portfolio", "Galleri", "Hurtig indlæsning"],
    theme: "rose",
    url: "solbergfoto.dk",
    layout: "grid",
  },
  {
    slug: "greenloop",
    name: "GreenLoop",
    category: "Webshop",
    description: "Bæredygtig webshop med produktfiltre, lagerstyring og gnidningsfrit checkout-flow.",
    tags: ["E-commerce", "Betaling", "Lagerstyring"],
    theme: "teal",
    url: "greenloop.dk",
    layout: "grid",
  },
];

export type PricingTier = {
  name: string;
  price: string;
  priceNote?: string;
  tagline: string;
  featured?: boolean;
  features: string[];
  cta: string;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    price: "999 kr.",
    tagline: "Perfekt til dig der skal i gang",
    features: [
      "1-siders landingpage",
      "Responsivt design til alle enheder",
      "Kontaktformular",
      "Grundlæggende SEO-opsætning",
      "3 dages leveringstid",
      "1 revisionsrunde",
    ],
    cta: "Kom i gang",
  },
  {
    name: "Business",
    price: "4.999 kr.",
    tagline: "Til den voksende virksomhed",
    featured: true,
    features: [
      "Op til 5 undersider",
      "Alt fra Basic",
      "CMS / blog-modul",
      "On-page SEO-optimering",
      "Kobling til statistik & analytics",
      "7 dages leveringstid",
      "2 revisionsrunder",
    ],
    cta: "Vælg Business",
  },
  {
    name: "Kursus & Webshop",
    price: "9.999 kr.",
    tagline: "Til dig der vil sælge online",
    features: [
      "Alt fra Business",
      "Webshop eller kursusplatform (LMS)",
      "Betalingsintegration",
      "Medlemslogin & adgangsstyring",
      "14 dages leveringstid",
      "3 revisionsrunder",
    ],
    cta: "Vælg pakke",
  },
  {
    name: "Enterprise",
    price: "Skræddersyet",
    priceNote: "Kontakt for tilbud",
    tagline: "Til komplekse behov",
    features: [
      "Alt fra Kursus & Webshop",
      "Fuld IT-strukturering & systemintegration",
      "Automatisering af arbejdsgange",
      "Dedikeret projektleder",
      "Løbende support & vedligeholdelsesaftale",
    ],
    cta: "Book en samtale",
  },
];

export type AddOn = { name: string; price: string };

export const addOns: AddOn[] = [
  { name: "Logo & visuel identitet", price: "fra 799 kr." },
  { name: "Copywriting pr. side", price: "fra 399 kr." },
  { name: "SEO-pakke", price: "fra 599 kr./md." },
  { name: "Vedligeholdelse & opdateringer", price: "fra 299 kr./md." },
  { name: "Ekstra revisionsrunde", price: "399 kr." },
  { name: "Flersproget hjemmeside", price: "fra 1.499 kr." },
];

export type FaqItem = { question: string; answer: string };

export const faqItems: FaqItem[] = [
  {
    question: "Hvor lang tid tager det at få en hjemmeside?",
    answer:
      "Det afhænger af pakken — en Basic-side leveres typisk på 3 dage, mens en webshop eller kursusplatform tager op til 14 dage. I får altid en konkret tidsplan, før vi går i gang.",
  },
  {
    question: "Hvad er inkluderet i prisen?",
    answer:
      "Design, udvikling, responsivt layout og et aftalt antal revisionsrunder er altid inkluderet. Domæne, hosting og tilkøb som SEO-pakker eller copywriting kan tilføjes efter behov.",
  },
  {
    question: "Kan jeg opgradere min pakke senere?",
    answer:
      "Ja. Mange starter med Basic eller Business og udvider senere med webshop, kursusplatform eller IT-strukturering, når behovet opstår.",
  },
  {
    question: "Ejer jeg selv hjemmesiden bagefter?",
    answer:
      "Ja, fuldt ud. Når projektet er betalt og afsluttet, er kode, design og indhold jeres — I er ikke bundet til os for at kunne bruge sitet.",
  },
  {
    question: "Tilbyder I hosting og drift?",
    answer:
      "Ja, vi kan stå for hosting, opdateringer og løbende vedligeholdelse via et månedligt abonnement, eller I kan vælge at drifte selv.",
  },
  {
    question: "Hvordan foregår samarbejdet?",
    answer:
      "Vi starter med en afklarende samtale, sender et fast tilbud, og holder jer opdateret undervejs i design- og udviklingsfasen med faste feedbackrunder.",
  },
];
