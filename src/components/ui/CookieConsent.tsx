"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/Button";

const COOKIE_NAME = "cookie_consent";
const GA_ID = "G-XXXXXXXXXX";
const META_PIXEL_ID = "XXXXXXXXXX";

function readConsent(): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function writeConsent(value: string) {
  const maxAge = 60 * 60 * 24 * 365; // 12 måneder
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(value)}; max-age=${maxAge}; path=/; SameSite=Lax`;
}

export function CookieConsent() {
  const [consent, setConsent] = useState<string | null | "unloaded">("unloaded");

  useEffect(() => {
    setConsent(readConsent());
  }, []);

  function choose(value: "accepted" | "necessary") {
    writeConsent(value);
    setConsent(value);
  }

  const visible = consent === null;

  return (
    <>
      {/* Statistik/marketing-scripts loader KUN ved fuldt samtykke */}
      {consent === "accepted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');`}
          </Script>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
              document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');`}
          </Script>
        </>
      )}

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            role="dialog"
            aria-label="Cookie-samtykke"
            className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl rounded-2xl border border-white/10 bg-dark/95 p-5 shadow-[0_24px_64px_-24px_rgba(0,0,0,0.6)] backdrop-blur-md sm:p-6"
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.08]">
                <Cookie className="h-4.5 w-4.5 text-accent" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Vi bruger cookies</p>
                <p className="mt-1 text-xs leading-relaxed text-white/60">
                  Vi bruger cookies til at forbedre din oplevelse. Nødvendige cookies
                  er altid aktive — statistik og markedsføring kræver dit samtykke.
                  Læs vores{" "}
                  <Link
                    href="/cookiepolitik"
                    className="text-primary-light underline-offset-2 hover:underline"
                  >
                    cookiepolitik
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap justify-end gap-3">
              <Button variant="outlineOnDark" size="sm" onClick={() => choose("necessary")}>
                Kun nødvendige
              </Button>
              <Button size="sm" onClick={() => choose("accepted")}>
                Acceptér
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
