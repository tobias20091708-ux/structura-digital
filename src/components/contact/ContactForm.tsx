"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const projectTypes = [
  "Hjemmeside",
  "Online kursus / platform",
  "Lead page",
  "Data-tjek / reparation",
  "Ved ikke endnu",
];

const inputClasses =
  "w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent-violet/60 focus:bg-white/[0.05]";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 900);
  }

  if (status === "sent") {
    return (
      <div className="glass flex flex-col items-center justify-center rounded-3xl px-8 py-20 text-center">
        <CheckCircle2 className="h-12 w-12 text-accent-cyan" />
        <h3 className="mt-5 text-2xl font-semibold text-white">Tak for din besked!</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55">
          Vi vender tilbage hurtigst muligt — svar inden 24 timer.
        </p>
        <Button variant="outline" className="mt-8" onClick={() => setStatus("idle")}>
          Send en ny besked
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass space-y-5 rounded-3xl p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Navn" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Dit fulde navn"
            className={inputClasses}
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="dig@firma.dk"
            className={inputClasses}
          />
        </Field>
      </div>

      <Field label="Virksomhed (valgfrit)" htmlFor="company">
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Firmanavn"
          className={inputClasses}
        />
      </Field>

      <div>
        <span className="mb-2 block text-sm font-medium text-white/70">Hvad drejer det sig om?</span>
        <div className="flex flex-wrap gap-2">
          {projectTypes.map((type) => (
            <label
              key={type}
              className={cn(
                "cursor-pointer rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-white/60 transition-colors",
                "has-[:checked]:border-accent-violet/60 has-[:checked]:bg-accent-violet/15 has-[:checked]:text-white"
              )}
            >
              <input type="radio" name="project_type" value={type} className="sr-only" />
              {type}
            </label>
          ))}
        </div>
      </div>

      <Field label="Fortæl om dit projekt" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Hvad skal vi bygge sammen?"
          className={cn(inputClasses, "resize-none")}
        />
      </Field>

      <Button type="submit" className="w-full" size="lg">
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sender...
          </>
        ) : (
          <>
            Send besked
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-white/70">
        {label}
      </label>
      {children}
    </div>
  );
}
