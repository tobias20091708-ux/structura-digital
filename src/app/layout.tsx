import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Albert_Sans, DM_Serif_Display, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { AmbientOrbs } from "@/components/ui/AmbientOrbs";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { contact, SITE_URL } from "@/lib/data";
import "./globals.css";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  variable: "--font-dm-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Hjemmeside til håndværkere — Fra 2.999 kr. | Webløsning.dk",
  description:
    "Vi bygger hjemmesider til VVS'ere, elektrikere, tømrere og andre håndværkere. Fra 2.999 kr., klar på få dage, optimeret så dine kunder finder dig på Google.",
  openGraph: {
    title: "Hjemmeside til håndværkere — Fra 2.999 kr. | Webløsning.dk",
    description:
      "Vi bygger hjemmesider til håndværkere og små virksomheder. Fra 2.999 kr., klar på få dage.",
    url: "/",
    siteName: "Webløsning.dk",
    locale: "da_DK",
    type: "website",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Webløsning.dk",
  image: `${SITE_URL}/og-icon.png`,
  url: SITE_URL,
  telephone: contact.phoneHref.replace("tel:", ""),
  email: contact.email,
  priceRange: "2999-7999 DKK",
  areaServed: "DK",
  address: {
    "@type": "PostalAddress",
    addressCountry: "DK",
  },
  description:
    "Webløsning.dk bygger hjemmesider til håndværkere og små danske virksomheder — VVS'ere, elektrikere, tømrere og malere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="da"
      className={`${albertSans.variable} ${geistMono.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-background pb-16 text-foreground md:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <AmbientOrbs />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCallBar />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
