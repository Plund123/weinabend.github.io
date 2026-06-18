# weinabend.github.io

## Geräteübergreifende Gewinnerliste

Die Website läuft weiterhin ohne Backend und speichert Gewinner:innen lokal im Browser. Damit die Ergebnisseite die Gewinner:innen von allen Geräten anzeigt, kann optional eine Firebase Realtime Database verbunden werden:

1. Firebase-Projekt anlegen und eine Realtime Database erstellen.
2. In `index.html` bei `window.WEINMATCH_CONFIG.remoteWinners.databaseUrl` die Datenbank-URL eintragen.
3. `path` bei Bedarf auf einen eigenen Event-Pfad ändern, z. B. `weinabend-2026/winners`.
4. Die Datenbankregeln passend für den Abend konfigurieren, damit die Website die Liste lesen und schreiben darf.

Ist keine `databaseUrl` gesetzt, nutzt die App automatisch die lokale Gewinnerliste des jeweiligen Geräts.
