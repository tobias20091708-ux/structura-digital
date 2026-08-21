"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, Loader2, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { submitContactForm, type LeadFormState } from "@/app/actions";
import { contact } from "@/lib/data";
import { cn } from "@/lib/cn";

const projectTypes = [
  "Hjemmeside",
  "Online kursus / platform",
  "Lead page",
  "Data-tjek / reparation",
  "Ved ikke endnu",
];

const inputClasses =
  "w-full rounded-xl border border-foreground/10 bg-foreground/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 outline-none transition-colors focus:border-primary/60 focus:bg-foreground/[0.05]";

const initialState: LeadFormState = { status: "idle" };

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (state.status === "success" || state.status === "not-configured") setDismissed(false);
  }, [state]);

  function handleReset() {
    formRef.current?.reset();
    setDismissed(true);
  }

  const sent = state.status === "success" && !dismissed;
  const notConfigured = state.status === "not-configured" && !dismissed;
  const formHidden = sent || notConfigured;

  return (
    <div className="grid grid-cols-1">
      <div
        aria-hidden={!sent}
        inert={!sent || undefined}
        className={cn(
          "card col-start-1 row-start-1 flex flex-col items-center justify-center rounded-2xl px-8 py-12 text-center transition-opacity duration-300",
          sent ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <CheckCircle2 className="h-12 w-12 text-success" />
        <h3 className="mt-5 text-xl text-foreground sm:text-2xl">Tak for din besked!</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-foreground/55">
          Vi vender tilbage hurtigst muligt, senest inden 24 timer.
        </p>
        <Button variant="outline" className="mt-8" onClick={handleReset}>
          Send en ny besked
        </Button>
      </div>

      <div
        aria-hidden={!notConfigured}
        inert={!notConfigured || undefined}
        className={cn(
          "card col-start-1 row-start-1 flex flex-col items-center justify-center gap-4 rounded-2xl px-8 py-12 text-center transition-opacity duration-300",
          notConfigured ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <p className="max-w-sm text-sm leading-relaxed text-foreground/55">
          Formularen tager lige et øjeblik at sætte op — ring eller skriv til os i mellemtiden:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button href={contact.phoneHref}>
            <Phone className="h-4 w-4" />
            Ring {contact.phone}
          </Button>
          <Button href={`mailto:${contact.email}`} variant="outline">
            <Mail className="h-4 w-4" />
            Send en mail
          </Button>
        </div>
        <Button variant="ghost" className="mt-2" onClick={handleReset}>
          Tilbage til formularen
        </Button>
      </div>

      <form
        ref={formRef}
        action={formAction}
        aria-hidden={formHidden || undefined}
        inert={formHidden || undefined}
        className={cn(
          "card col-start-1 row-start-1 space-y-5 rounded-2xl p-8 transition-opacity duration-300",
          formHidden ? "pointer-events-none opacity-0" : "opacity-100"
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

        {state.status === "error" && (
          <p className="text-sm text-accent">{state.message}</p>
        )}

        <SubmitButton />
      </form>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" size="lg" disabled={pending}>
      {pending ? (
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
