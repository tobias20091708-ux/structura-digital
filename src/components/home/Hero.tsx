"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ctaText } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl leading-[1.1] font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Professionelle hjemmesider til din virksomhed
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-muted md:text-xl"
            >
              Vi bygger hjemmesider, kursusplatforme og lead pages der skaber vækst for
              små virksomheder i Danmark.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button href="/#services" size="lg">
                Se vores services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button href="/kontakt" variant="outline" size="lg">
                Kontakt os
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none"
          >
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#0f172a] via-primary to-primary-light" />
            <div
              aria-hidden
              className="absolute inset-0 rounded-[2.5rem] opacity-[0.15] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:28px_28px]"
            />
            <div className="absolute -top-6 -right-6 h-28 w-28 rounded-3xl bg-accent/90 shadow-xl" />
            <div className="absolute top-1/3 left-6 h-16 w-16 rounded-2xl border-2 border-white/40" />
            <div className="absolute -bottom-8 left-10 h-40 w-40 rounded-full bg-white/10 backdrop-blur-sm" />
            <div className="absolute right-10 bottom-10 h-20 w-20 rounded-2xl bg-white/15" />
            <div className="absolute top-10 left-10 h-10 w-10 rounded-full bg-success" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
