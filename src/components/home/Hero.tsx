"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroParticles } from "@/components/ui/HeroParticles";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-dark pt-40 pb-24 sm:pt-48 sm:pb-32">
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-[#0a1428] via-[#0f1f3d] to-dark"
      />
      <HeroParticles />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white/80 backdrop-blur-sm"
          >
            <span
              className={`h-1.5 w-1.5 rounded-full bg-primary-light ${reduce ? "" : "animate-pulse"}`}
            />
            Digital partner for vækst
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Professionelle hjemmesider til din virksomhed
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/60 md:text-xl"
          >
            Vi bygger hjemmesider, kursusplatforme og lead pages der skaber vækst for
            små virksomheder i Danmark.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="/#services" size="lg">
              Se vores services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button href="/kontakt" variant="outlineOnDark" size="lg">
              Kontakt os
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
