import type { Metadata } from "next";
import { LegalPage, LegalTable } from "@/components/legal/LegalPage";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cookiepolitik — Webløsning",
  description: "Læs om hvilke cookies Webløsning bruger, og hvordan du styrer dit samtykke.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage badge="Cookiepolitik" title="Cookiepolitik" updated="7. august 2026">
      <h2>Hvad er cookies?</h2>
      <p>
        Cookies er små tekstfiler, der gemmes på din enhed, når du besøger en hjemmeside. De
        bruges til at huske dine præferencer og til at indsamle statistik om brugen af
        hjemmesiden.
      </p>

      <h2>Hvilke cookies bruger vi?</h2>

      <h3>Nødvendige cookies</h3>
      <p>
        Disse cookies er nødvendige for, at hjemmesiden fungerer korrekt. De kan ikke
        fravælges.
      </p>
      <LegalTable
        head={["Cookie", "Formål", "Udløb"]}
        rows={[["cookie_consent", "Husker dit cookievalg", "12 måneder"]]}
      />

      <h3>Statistik-cookies (kræver samtykke)</h3>
      <p>Disse cookies hjælper os med at forstå, hvordan besøgende bruger vores hjemmeside.</p>
      <LegalTable
        head={["Cookie", "Formål", "Udløb"]}
        rows={[
          ["_ga (Google Analytics)", "Statistik over besøgende", "2 år"],
          ["_ga_* (Google Analytics)", "Skelner mellem brugere", "2 år"],
        ]}
      />

      <h3>Marketing-cookies (kræver samtykke)</h3>
      <p>Disse cookies bruges til at vise relevante annoncer.</p>
      <LegalTable
        head={["Cookie", "Formål", "Udløb"]}
        rows={[["_fbp (Meta Pixel)", "Måler annonceeffektivitet", "3 måneder"]]}
      />

      <h2>Samtykke</h2>
      <p>
        Vi indhenter dit samtykke, før vi sætter statistik- og marketing-cookies. Du kan til
        enhver tid ændre eller trække dit samtykke tilbage via cookiebanneret på vores
        hjemmeside.
      </p>

      <h2>Tredjeparter</h2>
      <p>Vi bruger følgende tredjeparter, som kan sætte cookies:</p>
      <ul>
        <li>
          <strong>Google Analytics</strong> — statistik (Google LLC, USA)
        </li>
        <li>
          <strong>Meta Pixel</strong> — annoncering (Meta Platforms Inc., USA)
        </li>
      </ul>
      <p>
        Disse tredjeparters behandling af data er underlagt deres egne privatlivspolitikker.
      </p>

      <h2>Sletning af cookies</h2>
      <p>
        Du kan til enhver tid slette cookies via din browsers indstillinger. Vær opmærksom på,
        at dette kan påvirke hjemmesidens funktionalitet.
      </p>

      <h2>Kontakt</h2>
      <p>
        Har du spørgsmål til vores brug af cookies, kontakt os på{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>.
      </p>
    </LegalPage>
  );
}
