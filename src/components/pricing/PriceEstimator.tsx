"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PackageCard } from "@/components/pricing/PackageCard";
import { pricingPackages } from "@/lib/data";
import { cn } from "@/lib/cn";

type Question = {
  id: string;
  title: string;
  options: { value: string; label: string }[];
};

const questions: Question[] = [
  {
    id: "site",
    title: "Har du allerede en hjemmeside?",
    options: [
      { value: "update", label: "Ja, men den trænger til en opdatering" },
      { value: "broken", label: "Ja, men der er fejl og mangler" },
      { value: "scratch", label: "Nej, jeg starter fra scratch" },
    ],
  },
  {
    id: "goal",
    title: "Hvad er vigtigst for dig lige nu?",
    options: [
      { value: "fast", label: "Bare at komme online hurtigt" },
      { value: "pro", label: "Et professionelt førstehåndsindtryk med alt inkluderet" },
      { value: "customers", label: "At få flere kunder ind automatisk" },
      { value: "fix", label: "At få min eksisterende side til at virke igen" },
    ],
  },
  {
    id: "content",
    title: "Vil du have hjælp til at overbevise dine kunder med tekst og indhold?",
    options: [
      { value: "own", label: "Nej, jeg har mit eget indhold klar" },
      { value: "write", label: "Ja, I skal researche min branche og skrive overbevisende tekster" },
      {
        value: "ai",
        label: "Ja, og jeg vil gerne have en AI-assistent der kan svare mine kunder automatisk",
      },
    ],
  },
  {
    id: "budget",
    title: "Hvad er dit budget?",
    options: [
      { value: "b1", label: "Under 1.500 kr" },
      { value: "b2", label: "1.500 — 5.000 kr" },
      { value: "b3", label: "5.000 — 10.000 kr" },
      { value: "b4", label: "Over 10.000 kr — jeg vil have det hele" },
    ],
  },
];

function recommend(a: Record<string, string>): number {
  if (a.content === "ai" || a.budget === "b4") return 7;

  if (a.site === "scratch") {
    if (a.goal === "fast" && a.content === "own" && a.budget === "b1") return 1;
    if ((a.goal === "pro" || a.goal === "customers") && a.content === "write" && a.budget === "b3")
      return 3;
    if (a.goal === "pro") return 2;
    return a.budget === "b3" ? 3 : 2;
  }

  // Har allerede en hjemmeside
  if (a.goal === "fix" && a.budget === "b1") return 5;
  if (a.site === "update" && a.content === "write" && a.budget === "b3") return 6;
  if (a.goal === "customers" && (a.budget === "b1" || a.budget === "b2")) return 4;
  if (a.budget === "b3") return 6;
  if (a.goal === "fix") return 5;
  return 4;
}

export function PriceEstimator() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const done = step >= questions.length;
  const question = questions[step];
  const recommendation = done
    ? pricingPackages.find((p) => p.id === recommend(answers))
    : undefined;

  function select(value: string) {
    setAnswers((prev) => ({ ...prev, [question.id]: value }));
    setStep((s) => s + 1);
  }

  function back() {
    setStep((s) => Math.max(0, s - 1));
  }

  function restart() {
    setAnswers({});
    setStep(0);
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04]">
      {/* Progress */}
      <div className="border-b border-white/10 px-6 py-4 sm:px-8">
        <div className="flex items-center justify-between text-xs font-medium text-white/50">
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Din anbefaling på 30 sekunder
          </span>
          <span>
            {done ? "Færdig" : `Spørgsmål ${step + 1} af ${questions.length}`}
          </span>
        </div>
        <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-accent"
            initial={false}
            animate={{ width: `${(Math.min(step, questions.length) / questions.length) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <AnimatePresence mode="wait" initial={false}>
          {!done ? (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <h3 className="text-xl font-bold text-white sm:text-2xl">{question.title}</h3>

              <div className="mt-6 flex flex-col gap-3">
                {question.options.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => select(option.value)}
                    className={cn(
                      "rounded-xl border px-5 py-4 text-left text-sm font-medium transition-all duration-200 sm:text-base",
                      "border-white/15 bg-white/[0.04] text-white/85",
                      "hover:-translate-y-0.5 hover:border-accent/60 hover:bg-white/[0.08] hover:text-white",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60",
                      answers[question.id] === option.value &&
                        "border-accent/70 bg-accent/10 text-white"
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              {step > 0 && (
                <button
                  type="button"
                  onClick={back}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white/50 transition-colors hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Tilbage
                </button>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <p className="text-center text-sm font-semibold tracking-wide text-accent uppercase">
                Baseret på dine svar
              </p>
              <h3 className="mt-2 text-center text-2xl font-bold text-white">
                Vi anbefaler denne løsning til dig
              </h3>

              {recommendation && (
                <div className="mx-auto mt-8 max-w-md">
                  <PackageCard
                    pkg={recommendation}
                    highlighted
                    ctaLabel="Kontakt os for et tilbud"
                  />
                </div>
              )}

              <p className="mt-6 text-center text-xs text-white/45">
                Uforpligtende — vi vender tilbage inden for 24 timer.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={restart}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-white/50 transition-colors hover:text-white"
                >
                  <RotateCcw className="h-4 w-4" />
                  Start forfra
                </button>
                <Button href="#pakker" variant="outlineOnDark" size="sm">
                  Se alle pakker
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
