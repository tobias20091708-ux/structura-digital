# Gratis demo-strategi

Den mest effektive måde at sælge en hjemmeside til en håndværker: vis dem
den, før de har betalt noget. Ingen abstrakt snak om "SEO" og "konvertering"
— bare en side med deres eget firmanavn på, som de kan se med det samme.

## Sådan bygger du en ny demo (10-20 minutter)

1. **Duplikér demo-siden.** Kopiér mappen
   `src/app/eksempel/vvs-demo/` til fx `src/app/eksempel/[firmanavn]/`
   (brug et URL-venligt navn, fx `andersen-elektrik`).
2. **Udskift data-objektet** øverst i den nye `page.tsx`: firmanavn, tagline,
   by, telefon, ydelser (3-6 stk.) og en kort "about"-sætning. Se
   `src/components/demo/DemoSiteTemplate.tsx` for de felter, der findes.
3. **Skift `industryLabel`** til den rigtige branche (VVS/Elektriker/Tømrer/
   Maler) og evt. `accent`-farven, hvis du vil variere lidt fra sag til sag.
4. **Behold disclaimer-boksen** øverst på siden ("Dette er et eksempel...")
   — men ret teksten til at nævne firmaet ved navn, fx:
   > "Dette er et eksempel bygget specielt til [Firmanavn] — ikke jeres
   > rigtige side endnu. Kontakt os, hvis I vil gøre det til virkelighed."
5. **Commit og vent på auto-sync** (pusher automatisk til GitHub/Vercel hvert
   minut), eller kør `git push` manuelt hvis du har lavet ændringer meget
   hurtigt efter hinanden.
6. **Send linket** — det bliver noget i stil med
   `https://webløsning.dk/eksempel/andersen-elektrik`.

## Hvorfor det virker

- Håndværkere er visuelle og konkrete — de tror det, når de ser det.
- Det koster dig kun tid, ikke penge, og du opbygger en portefølje af
  eksempler undervejs (som senere kan blive til rigtige case-studies, når du
  får dine første betalende kunder).
- Det adskiller dig fra alle andre, der bare sender et tilbud på mail.

## Vigtigt: hold det ærligt

Skriv altid tydeligt, at det er et eksempel/demo og ikke en rigtig kunde,
både i selve demoen og i beskeden du sender. Det er det, der gør det
troværdigt i stedet for vildledende — håndværkere gennemskuer hurtigt, hvis
noget virker fupagtigt, og det ødelægger tilliden med det samme.
