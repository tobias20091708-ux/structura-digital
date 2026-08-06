"use client";

import { useRef, useState, type FormEvent } from "react";
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
  "w-full rounded-2xl border border-foreground/10 bg-foreground/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 outline-none transition-colors focus:border-primary/60 focus:bg-foreground/[0.05]";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 900);
  }

  function handleReset() {
    formRef.current?.reset();
    setStatus("idle");
  }

  const sent = status === "sent";

  return (
    <div className="grid grid-cols-1">
      <div
        aria-hidden={!sent}
        inert={!sent || undefined}
        className={cn(
          "card col-start-1 row-start-1 flex flex-col items-center justify-center rounded-3xl px-8 py-12 text-center transition-opacity duration-300",
          sent ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <CheckCircle2 className="h-12 w-12 text-success" />
        <h3 className="mt-5 text-2xl font-semibold text-foreground">Tak for din besked!</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-foreground/55">
          Vi vender tilbage hurtigst muligt — svar inden 24 timer.
        </p>
        <Button variant="outline" className="mt-8" onClick={handleReset}>
          Send en ny besked
        </Button>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        aria-hidden={sent || undefined}
        inert={sent || undefined}
        className={cn(
          "card col-start-1 row-start-1 space-y-5 rounded-3xl p-8 transition-opacity duration-300",
          sent ? "pointer-events-none opacity-0" : "opacity-100"
        )}
      >
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
          <span className="mb-2 block text-sm font-medium text-foreground/70">Hvad drejer det sig om?</span>
          <div className="flex flex-wrap gap-2">
            {projectTypes.map((type) => (
              <label
                key={type}
                className={cn(
                  "cursor-pointer rounded-full border border-foreground/10 bg-foreground/[0.03] px-4 py-2 text-xs font-medium text-foreground/60 transition-colors",
                  "has-[:checked]:border-primary/60 has-[:checked]:bg-primary/10 has-[:checked]:text-foreground"
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
    </div>
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
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-foreground/70">
        {label}
      </label>
      {children}
    </div>
  );
}
