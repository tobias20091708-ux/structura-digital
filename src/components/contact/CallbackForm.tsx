"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, Loader2, Mail, Phone, PhoneCall } from "lucide-react";
import { requestCallback, type LeadFormState } from "@/app/actions";
import { contact } from "@/lib/data";
import { cn } from "@/lib/cn";

const initialState: LeadFormState = { status: "idle" };

const inputClasses =
  "w-full rounded-lg border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-accent/70 focus:bg-white/[0.1]";

export function CallbackForm({ className }: { className?: string }) {
  const [state, formAction] = useActionState(requestCallback, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div
        className={cn(
          "flex flex-col items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.05] px-6 py-8 text-center",
          className
        )}
      >
        <CheckCircle2 className="h-9 w-9 text-success" />
        <p className="text-base font-semibold text-white">Modtaget!</p>
        <p className="text-sm text-white/60">
          Vi ringer til dig hurtigst muligt, senest inden 24 timer.
        </p>
      </div>
    );
  }

  if (state.status === "not-configured") {
    return (
      <div
        className={cn(
          "flex flex-col items-center gap-4 rounded-2xl border border-white/12 bg-white/[0.05] px-6 py-8 text-center",
          className
        )}
      >
        <p className="text-sm text-white/60">
          Formularen tager lige et øjeblik at sætte op — ring eller skriv til os i mellemtiden:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={contact.phoneHref}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-strong"
          >
            <Phone className="h-4 w-4" />
            Ring {contact.phone}
          </a>
          <a
            href={`mailto:${contact.email}?subject=${encodeURIComponent("Ring mig op")}&body=${encodeURIComponent("Navn: \nTelefon: ")}`}
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Mail className="h-4 w-4" />
            Send en mail
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      className={cn(
        "flex flex-col gap-3 rounded-2xl border border-white/12 bg-white/[0.05] p-5 sm:p-3",
        className
      )}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2">
          <input
            type="text"
            name="name"
            required
            placeholder="Dit navn"
            aria-label="Dit navn"
            className={inputClasses}
          />
          <input
            type="tel"
            name="phone"
            required
            placeholder="Dit telefonnummer"
            aria-label="Dit telefonnummer"
            className={inputClasses}
          />
        </div>
        <SubmitButton />
      </div>
      {state.status === "error" && <p className="text-sm text-accent">{state.message}</p>}
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-strong disabled:opacity-60"
    >
      {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <PhoneCall className="h-4 w-4" />}
      Ring mig op
    </button>
  );
}
