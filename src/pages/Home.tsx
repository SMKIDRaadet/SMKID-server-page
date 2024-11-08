import React from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';

const content = `

# Velkommen til SMKID Serverprojektet

Velkommen til hjemmesiden for SMKID’s serverprojekt! Her giver vi DTU-studerende en unik mulighed for at udforske og eksperimentere med serverinfrastruktur, netværk og avanceret teknologi - helt gratis.

### Hvad er SMKID Serverprojektet?
Dette projekt er skabt for at give studerende praktisk erfaring med servere og netværksinfrastruktur. Med støtte fra DTU Computing Center (DCC) har vi opbygget et servermiljø, hvor du som studerende kan få adgang til din egen virtuelle server (VPS) og bruge den til at lære, bygge projekter eller eksperimentere med nye idéer uden begrænsninger fra de akademiske ressourcer.

---

### Kom i gang

Er du ny her? Begynd med at kigge på vores **[Kom i gang-guide](link-til-guide)**, hvor vi hjælper dig trin-for-trin med at få adgang til din egen server. Uanset om du vil prøve kræfter med webhosting, dataanalyse, AI eller netværksopsætning, så er vi her for at hjælpe dig i gang.

---

### Hurtige Links

- **[Server Status](https://status.smkid.dk)** - Se status på SMKID servere og services .
- **[Guidelines & Regler](guidelines)** - Vigtig information om ansvarlig brug og adfærdsregler.
- **[Wiki & Vidensbase](wiki)** - Find svar på spørgsmål, guides og teknisk dokumentation.
- **[Guides og Tutorials](link-til-guides)** - Få hjælp til opsætning og administration af din VPS.
- **[Projektidéer](link-til-projektidéer)** - Bliv inspireret til projekter, du kan starte.

---

### Nyheder og Opdateringer

Her kan du følge med i de nyeste opdateringer om serverprojektet, arrangementer og workshops:

- **Kommende Event**: SMKID server dag – Kom og få din egen VPS og mød andre studerende!
- **Nye tutorials**: Vi er i gang med skrive og samle en række guides til at komme godt i gang med din server
- **Backup server**: En backup server er på vej til så vi kan få inkrementel af alle VPS. 

---

### Har du spørgsmål?

Har du spørgsmål eller brug for hjælp? Besøg vores **[Kontakt og Support-side](link-til-kontakt)**, hvor du kan finde vores kontaktinformation eller sende os en besked. Vi er her for at hjælpe dig!

---

## Bliv en del af fællesskabet

Vil du være med til at gøre serverprojektet endnu bedre? Vores fællesskab vokser, og vi leder altid efter engagerede studerende, der vil bidrage. Uanset om du vil være med til at udvikle serverne, hjælpe andre studerende eller dele dine erfaringer, så er der plads til dig her.



`;

function Home() {
  return <MarkdownRenderer content={content} />;
}

export default Home;