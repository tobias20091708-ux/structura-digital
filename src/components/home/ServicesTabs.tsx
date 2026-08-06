"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";
import { services } from "@/lib/data";

export function ServicesTabs() {
  const [activeId, setActiveId] = useState(services[0].id);
  const active = services.find((s) => s.id === activeId) ?? services[0];

  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <Badge>Services</Badge>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Det vi kan hjælpe dig med
          </h2>
          <p className="mt-4 text-lg text-muted">
            Vi bygger hjemmesider, onlinekurser og målrettede landingssider – og sørger
            for, at dine data og kontaktoplysninger fungerer korrekt på tværs af
            platforme.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-14 grid grid-cols-1 gap-3 lg:grid-cols-[320px_1fr] lg:gap-8">
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {services.map((service) => {
              const isActive = service.id === activeId;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveId(service.id)}
                  className={cn(
                    "flex shrink-0 items-center gap-3 rounded-lg border px-4 py-3.5 text-left text-sm font-semibold transition-colors lg:shrink",
                    isActive
                      ? "border-primary-light/30 bg-primary-light/[0.06] text-primary-light"
                      : "border-transparent text-foreground/70 hover:bg-foreground/[0.03] hover:text-foreground"
                  )}
                >
                  <service.icon
                    className={cn("h-5 w-5 shrink-0", isActive ? "text-primary-light" : "text-foreground/40")}
                  />
                  {service.tab}
                </button>
              );
            })}
          </div>

          <div className="card relative overflow-hidden rounded-xl p-8 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <h3 className="text-2xl font-bold tracking-tight text-foreground">
                  {active.heading}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted">{active.text}</p>
                <ul className="mt-6 space-y-3">
                  {active.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm font-medium text-foreground">
                      <Check className="h-4 w-4 shrink-0 text-success" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
