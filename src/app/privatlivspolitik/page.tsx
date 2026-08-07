import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privatlivspolitik — Structura Digital",
  description:
    "Læs hvordan Structura Digital behandler dine personoplysninger i henhold til GDPR.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage badge="Privatliv" title="Privatlivspolitik" updated="7. august 2026">
      <h2>1. Dataansvarlig</h2>
      <p>
        Structura Digital
        <br />
        E-mail: <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <br />
        Telefon: <a href={contact.phoneHref}>{contact.phone}</a>
      </p>

      <h2>2. Hvilke oplysninger indsamler vi?</h2>
      <p>
        Når du besøger vores hjemmeside eller kontakter os, kan vi indsamle følgende
        oplysninger:
      </p>
      <ul>
        <li>Navn</li>
        <li>E-mailadresse</li>
        <li>Telefonnummer</li>
        <li>Virksomhedsnavn</li>
        <li>Beskedindhold fra kontaktformularer</li>
        <li>
          Tekniske data (IP-adresse, browsertype, besøgstidspunkt) via cookies, hvis du har
          givet samtykke
        </li>
      </ul>

      <h2>3. Formål med behandlingen</h2>
      <p>Vi behandler dine personoplysninger til følgende formål:</p>
      <ul>
        <li>At besvare henvendelser via kontaktformular, e-mail eller telefon</li>
        <li>At levere de ydelser, du har bestilt</li>
        <li>At forbedre vores hjemmeside og brugeroplevelse (kun med dit samtykke)</li>
        <li>At overholde lovgivning, herunder bogføringsloven</li>
      </ul>

      <h2>4. Retsgrundlag</h2>
      <p>Vi behandler dine data på følgende grundlag:</p>
      <ul>
        <li>
          <strong>Samtykke</strong> (artikel 6, stk. 1, litra a) — når du udfylder vores
          kontaktformular eller accepterer cookies
        </li>
        <li>
          <strong>Kontraktopfyldelse</strong> (artikel 6, stk. 1, litra b) — når vi leverer en
          ydelse til dig
        </li>
        <li>
          <strong>Retlig forpligtelse</strong> (artikel 6, stk. 1, litra c) — bogføring og
          regnskab
        </li>
      </ul>

      <h2>5. Opbevaringsperiode</h2>
      <p>
        Vi opbevarer dine personoplysninger så længe det er nødvendigt for det formål, de blev
        indsamlet til:
      </p>
      <ul>
        <li>Henvendelser via kontaktformular: op til 12 måneder efter afsluttet dialog</li>
        <li>Kundedata i forbindelse med leverede ydelser: 5 år (bogføringsloven)</li>
        <li>Cookiedata: se vores cookiepolitik</li>
      </ul>

      <h2>6. Videregivelse af oplysninger</h2>
      <p>Vi videregiver ikke dine personoplysninger til tredjeparter, medmindre:</p>
      <ul>
        <li>Det er nødvendigt for at levere den bestilte ydelse (fx hosting via Vercel)</li>
        <li>Vi er retligt forpligtet hertil</li>
        <li>Du har givet dit samtykke</li>
      </ul>
      <p>Vi bruger følgende databehandlere:</p>
      <ul>
        <li>
          <strong>Vercel</strong> (hosting af hjemmeside) — USA, EU-standardkontraktklausuler
        </li>
        <li>
          <strong>Simply.com</strong> (e-mail og domæne) — Danmark
        </li>
        <li>
          <strong>Formspree/tilsvarende</strong> (kontaktformular) — se deres privatlivspolitik
        </li>
      </ul>

      <h2>7. Dine rettigheder</h2>
      <p>Du har følgende rettigheder i henhold til GDPR:</p>
      <ul>
        <li>
          <strong>Ret til indsigt</strong> — du kan bede om at se, hvilke data vi har om dig
        </li>
        <li>
          <strong>Ret til berigtigelse</strong> — du kan bede os rette forkerte oplysninger
        </li>
        <li>
          <strong>Ret til sletning</strong> — du kan bede os slette dine data
        </li>
        <li>
          <strong>Ret til begrænsning</strong> — du kan bede os begrænse behandlingen
        </li>
        <li>
          <strong>Ret til dataportabilitet</strong> — du kan få dine data udleveret i et
          maskinlæsbart format
        </li>
        <li>
          <strong>Ret til indsigelse</strong> — du kan gøre indsigelse mod vores behandling
        </li>
      </ul>
      <p>
        Kontakt os på <a href={`mailto:${contact.email}`}>{contact.email}</a> for at gøre brug
        af dine rettigheder.
      </p>

      <h2>8. Klage</h2>
      <p>
        Du kan klage til Datatilsynet, hvis du mener, vi behandler dine data i strid med
        reglerne:
      </p>
      <p>
        Datatilsynet
        <br />
        Carl Jacobsens Vej 35
        <br />
        2500 Valby
        <br />
        Telefon: 33 19 32 00
        <br />
        E-mail: dt@datatilsynet.dk
        <br />
        <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer">
          www.datatilsynet.dk
        </a>
      </p>

      <h2>9. Ændringer</h2>
      <p>
        Vi forbeholder os retten til at opdatere denne privatlivspolitik. Væsentlige ændringer
        vil blive annonceret på hjemmesiden.
      </p>
    </LegalPage>
  );
}
