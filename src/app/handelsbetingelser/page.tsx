import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Handelsbetingelser — Webløsning",
  description: "Læs handelsbetingelserne for ydelser leveret af Webløsning.",
};

export default function TermsPage() {
  return (
    <LegalPage badge="Betingelser" title="Handelsbetingelser" updated="7. august 2026">
      <h2>1. Generelt</h2>
      <p>
        Disse handelsbetingelser gælder for alle ydelser leveret af Webløsning
        (&quot;vi&quot;, &quot;os&quot;) til kunden (&quot;du&quot;, &quot;kunden&quot;).
      </p>
      <p>Ved at bestille en ydelse accepterer du disse betingelser.</p>

      <h2>2. Ydelser</h2>
      <p>Vi tilbyder følgende ydelser:</p>
      <ul>
        <li>Design og udvikling af hjemmesider</li>
        <li>Landingssider og lead pages</li>
        <li>Online kursusplatforme</li>
        <li>Reparation og vedligeholdelse af eksisterende hjemmesider</li>
        <li>Digital markedsføring (Google Ads, Meta Ads)</li>
        <li>E-mail automation</li>
      </ul>
      <p>
        Det konkrete omfang af ydelsen aftales individuelt og bekræftes skriftligt via e-mail
        eller tilbud.
      </p>

      <h2>3. Priser og betaling</h2>
      <ul>
        <li>Alle priser oplyses i danske kroner (DKK)</li>
        <li>Priser er ekskl. moms, medmindre andet er angivet</li>
        <li>
          Betaling sker via faktura med 8 dages betalingsfrist, medmindre andet er aftalt
        </li>
        <li>Ved forsinket betaling tilskrives renter i henhold til renteloven</li>
      </ul>

      <h2>4. Levering</h2>
      <ul>
        <li>Leveringstid aftales individuelt for hver opgave</li>
        <li>
          Vi bestræber os på at overholde aftalte deadlines, men kan ikke holdes ansvarlige for
          forsinkelser forårsaget af kundens manglende levering af materialer, tekster eller
          billeder
        </li>
      </ul>

      <h2>5. Fortrydelsesret</h2>
      <p>
        For forbrugere gælder 14 dages fortrydelsesret fra aftalens indgåelse, jf.
        forbrugeraftaleloven.
      </p>
      <p>
        Fortrydelsesretten bortfalder, hvis arbejdet er påbegyndt med kundens udtrykkelige
        samtykke inden fristens udløb.
      </p>
      <p>
        For at gøre brug af fortrydelsesretten skal du kontakte os skriftligt på{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>.
      </p>

      <h2>6. Rettigheder</h2>
      <ul>
        <li>Kunden opnår fulde rettigheder til den leverede hjemmeside efter fuld betaling</li>
        <li>
          Vi forbeholder os retten til at bruge projektet som reference i vores portfolio,
          medmindre andet er aftalt
        </li>
        <li>
          Tredjepartslicenser (skrifttyper, stockfotos, plugins) er underlagt deres egne
          licensbetingelser
        </li>
      </ul>

      <h2>7. Ansvar</h2>
      <ul>
        <li>Vi er ansvarlige for, at den leverede ydelse er i overensstemmelse med det aftalte</li>
        <li>Vores ansvar er begrænset til det fakturerede beløb for den pågældende opgave</li>
        <li>
          Vi er ikke ansvarlige for indirekte tab, herunder tabt fortjeneste, driftstab eller
          tab af data
        </li>
      </ul>

      <h2>8. Hosting og vedligeholdelse</h2>
      <ul>
        <li>Hvis vi hoster kundens hjemmeside, er vi ansvarlige for rimelig oppetid</li>
        <li>
          Vi er ikke ansvarlige for nedetid forårsaget af tredjeparter (fx Vercel,
          domæneudbyderen)
        </li>
        <li>Vedligeholdelse og opdateringer aftales separat</li>
      </ul>

      <h2>9. Opsigelse af løbende aftaler</h2>
      <ul>
        <li>
          Løbende aftaler (fx månedligt abonnement) kan opsiges med 30 dages varsel til
          udgangen af en måned
        </li>
        <li>Ved opsigelse leverer vi alle kundens data og filer i et almindeligt format</li>
      </ul>

      <h2>10. Klager</h2>
      <p>
        Klager rettes til <a href={`mailto:${contact.email}`}>{contact.email}</a>. Vi
        bestræber os på at besvare klager inden for 5 hverdage.
      </p>
      <p>Kan vi ikke finde en løsning, kan du indbringe sagen for:</p>
      <p>
        Nævnenes Hus
        <br />
        Toldboden 2
        <br />
        8800 Viborg
        <br />
        <a href="https://www.naevneneshus.dk" target="_blank" rel="noopener noreferrer">
          www.naevneneshus.dk
        </a>
      </p>
      <p>
        EU-Kommissionens online klageplatform:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ec.europa.eu/consumers/odr
        </a>
      </p>

      <h2>11. Lovvalg</h2>
      <p>
        Disse betingelser er underlagt dansk ret. Eventuelle tvister afgøres ved de danske
        domstole.
      </p>
    </LegalPage>
  );
}
