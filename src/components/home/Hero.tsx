"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="grain relative overflow-hidden bg-dark pt-44 pb-28 sm:pt-52 sm:pb-36">
      {/* Warm glow background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-[-20%] h-[42rem] w-[68rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(228,87,46,0.16),transparent)]"
          animate={reduce ? undefined : { scale: [1, 1.08, 1], opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-18%] bottom-[-30%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(63,148,120,0.13),transparent)]"
          animate={reduce ? undefined : { scale: [1, 1.12, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <motion.div
          className="absolute left-[-14%] bottom-[-16%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(closest-side,rgba(228,87,46,0.08),transparent)]"
          animate={reduce ? undefined : { scale: [1, 1.06, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(250,247,242,1)_1px,transparent_1px),linear-gradient(90deg,rgba(250,247,242,1)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_40%,black,transparent)]" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.05] px-5 py-2 text-sm font-semibold text-white/75 backdrop-blur-sm"
          >
            <span
              className={`h-1.5 w-1.5 rounded-full bg-accent ${reduce ? "" : "animate-pulse"}`}
            />
            Dansk webbureau bygget til vækst
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 text-4xl leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Din næste hjemmeside{" "}
            <span className="relative inline-block text-accent">
              starter her.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/60 md:text-xl"
          >
            Vi bygger hjemmesider, kursusplatforme og landingssider, der skaffer
            kunder, ikke bare besøgende.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="/kontakt" size="lg">
              Kontakt os
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
