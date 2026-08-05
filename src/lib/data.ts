export const contact = {
  email: "kontakt@webløsning.dk",
  phone: "30 13 73 28",
  phoneHref: "tel:+4530137328",
  priceLine: "Starter fra 985 kr — ring for et tilbud på tlf. 30 13 73 28",
};

export const ctaText = "Få et gratis tilbud";

export type Service = {
  title: string;
  description: string;
  points: string[];
  result: string;
};

export const services: Service[] = [
  {
    title: "Hjemmesider",
    description:
      "Moderne, hurtige hjemmesider der konverterer besøgende til kunder.",
    points: [
      "Mobiloptimeret på alle skærme",
      "SEO-klar fra dag ét",
      "Hurtig loadtid",
      "Bookingsystem eller kontaktformular",
    ],
    result: "Ikke bare en flot side — en side der arbejder for dig 24/7.",
  },
  {
    title: "Online kurser & kursusplatforme",
    description: "Strukturering og opsætning af online læringsplatforme.",
    points: [
      "Kursusstruktur der giver mening",
      "Betalingsløsning",
      "Medlemsadgang",
      "Videohosting",
    ],
    result: "Gør din viden til en indtægtskilde der kører mens du sover.",
  },
  {
    title: "Lead Pages",
    description:
      "Landingssider designet til ét formål: at fange leads og konvertere besøgende.",
    points: [
      "Optimeret til annoncer og kampagner",
      "Bygget til målrettet trafik",
      "Klar handling, ingen distraktioner",
    ],
    result: "En side der gør klik til kunder.",
  },
  {
    title: "Data Checking / Reparation",
    description:
      "Gennemgang af din eksisterende hjemmeside eller system: virker alt som det skal? Er det sikkert?",
    points: [
      "Tjek af performance",
      "Sikkerhedsgennemgang",
      "Links og formularer",
      "Integrationer",
    ],
    result: "Vær sikker på at din digitale forretning kører fejlfrit og sikkert.",
  },
];

export const painPoints: string[] = [
  "Dine konkurrenter dukker op på Google — gør du?",
  "Kunder tjekker din hjemmeside inden de ringer. Hvad ser de?",
  "Du ved dit håndværk er godt — men din online tilstedeværelse viser det ikke.",
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const howItWorks: ProcessStep[] = [
  {
    number: "01",
    title: "Vi snakker om din forretning",
    description:
      "En uforpligtende samtale om hvad du har brug for, og hvad der reelt vil rykke.",
  },
  {
    number: "02",
    title: "Vi bygger din løsning",
    description:
      "Du får løbende indblik, mens vi bygger den løsning der passer til dit budget og behov.",
  },
  {
    number: "03",
    title: "Du får flere kunder",
    description:
      "Din løsning går live, og du bliver fundet, valgt og kontaktet — også mens du sover.",
  },
];

export const trustBadges: string[] = [
  "Svar inden 24 timer",
  "Ingen skjulte gebyrer",
  "Dansk support",
];

export type Testimonial = {
  quote: string;
  name: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "[TESTIMONIAL_TEKST]",
    name: "[KUNDENAVN]",
    company: "[VIRKSOMHED]",
  },
  {
    quote: "[TESTIMONIAL_TEKST]",
    name: "[KUNDENAVN]",
    company: "[VIRKSOMHED]",
  },
  {
    quote: "[TESTIMONIAL_TEKST]",
    name: "[KUNDENAVN]",
    company: "[VIRKSOMHED]",
  },
];

export const resultShift = {
  before: [
    "Ingen hjemmeside",
    "Usynlig på Google",
    "Kunder ringer til konkurrenten",
  ],
  after: [
    "Professionel online tilstedeværelse",
    "Synlig i søgeresultater",
    "Kunder der finder dig selv",
  ],
};

export type FaqItem = { question: string; answer: string };

export const faqItems: FaqItem[] = [
  {
    question: "Hvor lang tid tager det?",
    answer: "Typisk 1-2 uger for en standardside — du får en konkret tidsplan, før vi går i gang.",
  },
  {
    question: "Hvad hvis jeg ikke er teknisk?",
    answer: "Det behøver du heller ikke være. Vi klarer alt det tekniske, så du kan fokusere på din forretning.",
  },
  {
    question: "Kan jeg redigere siden selv bagefter?",
    answer: "Ja, vi sørger for det er nemt at opdatere tekster og indhold selv, når du har brug for det.",
  },
  {
    question: "Hvad koster det?",
    answer: `${contact.priceLine}.`,
  },
  {
    question: "Hvad med vedligeholdelse?",
    answer: "Vi tilbyder løbende support, så din løsning bliver ved med at virke fejlfrit.",
  },
  {
    question: "Hvad hvis jeg ikke er tilfreds?",
    answer: "Vi arbejder sammen indtil du er tilfreds med resultatet.",
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
