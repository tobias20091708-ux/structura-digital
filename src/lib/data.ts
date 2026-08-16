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
