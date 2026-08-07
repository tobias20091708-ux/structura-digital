"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/Button";

const STORAGE_KEY = "cookie_consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function choose(value: "accepted" | "necessary") {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  }

  return (
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
                Vi bruger nødvendige cookies for at siden fungerer. Med dit samtykke
                bruger vi også cookies til statistik og markedsføring. Læs mere i vores{" "}
                <Link href="/cookiepolitik" className="text-primary-light underline-offset-2 hover:underline">
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
              Accepter alle
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
