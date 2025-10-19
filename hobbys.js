const hobbys = [
    {
        "name": "Tanzen", "beschreibung": "Bewegung zur Musik in verschiedenen Stilen wie Ballett oder Hip-Hop.", "bild": "tanzen.jpeg",
        "antworten": { "draussen": false, "team": true, "sport": true, "kreativ": false, "natur": false, "musik": true, "faul":false, "wettbewerb":true }
    },
    {
        "name": "Basteln", "beschreibung": "Kreatives Arbeiten mit Papier, Holz oder anderen Materialien.", "bild": "basteln.jpeg",
        "antworten": { "draussen": false, "team": false, "sport": false, "kreativ": true, "natur": false, "musik": false, "faul":false, "wettbewerb":false }
    },
    {
        "name": "Turnen", "beschreibung": "Körperliche Übungen zur Verbesserung von Kraft und Beweglichkeit.", "bild": "turnen.jpeg",
        "antworten": { "draussen": false, "team": true, "sport": true, "kreativ": false, "natur": false, "musik": false, "faul":false, "wettbewerb":true }
    },
    {
        "name": "Zocken", "beschreibung": "Videospiele spielen, allein oder mit anderen – am PC oder Konsole.", "bild": "zocken.jpeg",
        "antworten": { "draussen": false, "team": false, "sport": false, "kreativ": false, "natur": false, "musik": false, "faul":false, "wettbewerb":false }
    },
    {
        "name": "Stricken", "beschreibung": "Herstellung von Kleidung oder Accessoires mit Wolle und Nadeln.", "bild": "stricken.jpeg",
        "antworten": { "draussen": false, "team": false, "sport": false, "kreativ": true, "natur": false, "musik": false, "faul":false, "wettbewerb":false }
    },
    {
        "name": "Escape Rooms", "beschreibung": "Rätsel lösen, um innerhalb einer bestimmten Zeit aus einem Raum zu entkommen.", "bild": "escaperooms.jpeg",
        "antworten": { "draussen": false, "team": true, "sport": false, "kreativ": true, "natur": false, "musik": false, "faul":false, "wettbewerb":false }
    },
    {
        "name": "Hockey", "beschreibung": "Schneller Mannschaftssport auf dem Eis oder Feld mit Schlägern und Ball oder Puck.", "bild": "hockey.webp",
        "antworten": { "draussen": true, "team": true, "sport": true, "kreativ": false, "natur": false, "musik": false, "faul":false, "wettbewerb":true }
    },
    {
        "name": "Komponieren", "beschreibung": "Erfinden und Aufschreiben von Musikstücken.", "bild": "komponieren.jpeg",
        "antworten": { "draussen": false, "team": false, "sport": false, "kreativ": true, "natur": false, "musik": true, "faul":false, "wettbewerb":false }
    },
    {
        "name": "Sprachen lernen (Latein)", "beschreibung": "Erlernen der lateinischen Sprache, inklusive Grammatik und Wortschatz.", "bild": "sprachenlernen.webp",
        "antworten": { "draussen": false, "team": false, "sport": false, "kreativ": false, "natur": false, "musik": false, "faul":false, "wettbewerb":false }
    },
    {
        "name": "Tennis", "beschreibung": "Ballsport mit Schlägern, bei dem der Ball über ein Netz gespielt wird.", "bild": "tennis.jpeg",
        "antworten": { "draussen": true, "team": false, "sport": true, "kreativ": false, "natur": false, "musik": false, "faul":false, "wettbewerb":true }
    },
    {
        "name": "Gärtnern", "beschreibung": "Pflege und Anbau von Pflanzen, Gemüse und Blumen im Garten.", "bild": "gaertnern.jpeg",
        "antworten": { "draussen": true, "team": false, "sport": false, "kreativ": true, "natur": true, "musik": false, "faul":false, "wettbewerb":false }
    },
    {
        "name": "Lesen", "beschreibung": "Bücher oder Texte lesen zur Unterhaltung oder Bildung.", "bild": "lesen.webp",
        "antworten": { "draussen": false, "team": false, "sport": false, "kreativ": false, "natur": false, "musik": false, "faul":false, "wettbewerb":false }
    },
    {
        "name": "Kampfsport", "beschreibung": "Sportarten wie Judo, Karate oder Boxen zur Selbstverteidigung und Fitness.", "bild": "kampfsport.jpeg",
        "antworten": { "draussen": false, "team": false, "sport": true, "kreativ": false, "natur": false, "musik": false, "faul":false, "wettbewerb":true }
    },
    {
        "name": "Hobbyhorsing", "beschreibung": "Sport mit Steckenpferden, oft mit Dressur- oder Springelementen.", "bild": "hobby horse.jpeg",
        "antworten": { "draussen": true, "team": false, "sport": true, "kreativ": false, "natur": true, "musik": false, "faul":false, "wettbewerb":true }
    },
    {
        "name": "Reiten", "beschreibung": "Freizeit oder Sport mit dem Pferd, z. B. Ausritte oder Springreiten.", "bild": "reiten.jpeg",
        "antworten": { "draussen": true, "team": false, "sport": true, "kreativ": false, "natur": true, "musik": false, "faul":false, "wettbewerb":false }
    },
    {
        "name": "Darts", "beschreibung": "Zielspiel mit Pfeilen auf eine Dartscheibe.", "bild": "dart.jpeg",
        "antworten": { "draussen": false, "team": true, "sport": false, "kreativ": false, "natur": false, "musik": false, "faul":false, "wettbewerb":true }
    },
    {
        "name": "Singen", "beschreibung": "Musizieren mit der Stimme, ob allein oder im Chor.", "bild": "singen.jpeg",
        "antworten": { "draussen": false, "team": false, "sport": false, "kreativ": false, "natur": false, "musik": true, "faul":false, "wettbewerb":false }
    },
    {
        "name": "Klettern", "beschreibung": "Vertikale Bewegung an Kletterwänden oder Felswänden.", "bild": "klettern.jpeg",
        "antworten": { "draussen": true, "team": true, "sport": true, "kreativ": false, "natur": false, "musik": false, "faul":false, "wettbewerb":false }
    },
    {
        "name": "Klavier", "beschreibung": "Tasteninstrument spielen, klassische oder moderne Stücke.", "bild": "klavier.jpeg",
        "antworten": { "draussen": false, "team": false, "sport": false, "kreativ": false, "natur": false, "musik": true, "faul":false, "wettbewerb":true }
    },
    {
        "name": "Gitarre", "beschreibung": "Saiteninstrument spielen, z. B. Akustik- oder E-Gitarre.", "bild": "gitarre.jpeg",
        "antworten": { "draussen": false, "team": false, "sport": false, "kreativ": false, "natur": false, "musik": true, "faul":false, "wettbewerb":false }
    },
    {
        "name": "Schwimmen", "beschreibung": "Bewegung im Wasser, als Sport oder Freizeitaktivität.", "bild": "schwimmen.jpeg",
        "antworten": { "draussen": false, "team": true, "sport": true, "kreativ": false, "natur": false, "musik": false, "faul":false, "wettbewerb":true }
    },
    {
        "name": "Töpfern", "beschreibung": "Gestalten von Gefäßen oder Skulpturen aus Ton.", "bild": "toepfern.jpeg",
        "antworten": { "draussen": false, "team": false, "sport": false, "kreativ": true, "natur": false, "musik": false, "faul":false, "wettbewerb":false }
    },
    {
        "name": "Shorts gucken", "beschreibung": "Kurze Videos auf Plattformen wie YouTube oder TikTok anschauen.", "bild": "shorts kucken.jpeg",
        "antworten": { "draussen": false, "team": false, "sport": false, "kreativ": false, "natur": false, "musik": false, "faul":true, "wettbewerb":false }
    },
    {
        "name": "Volleyball", "beschreibung": "Teamsport, bei dem der Ball über ein Netz geschlagen wird.", "bild": "volleyball.jpg",
        "antworten": { "draussen": true, "team": true, "sport": true, "kreativ": false, "natur": false, "musik": false, "faul":false, "wettbewerb":true }
    },
    {
        "name": "Handball", "beschreibung": "Mannschaftssport, bei dem der Ball mit der Hand geworfen wird.", "bild": "handball.jpg",
        "antworten": { "draussen": false, "team": true, "sport": true, "kreativ": false, "natur": false, "musik": false, "faul":false, "wettbewerb":true }
    },
    {
        "name": "Fußball", "beschreibung": "Weltweit beliebter Mannschaftssport mit Ball und Toren.", "bild": "fussball.jpeg",
        "antworten": { "draussen": true, "team": true, "sport": true, "kreativ": false, "natur": false, "musik": false, "faul":false, "wettbewerb":true }
    },
    {
        "name": "Basketball", "beschreibung": "Schneller Teamsport, bei dem der Ball in einen hohen Korb geworfen wird.", "bild": "basketball.jpeg",
        "antworten": { "draussen": false, "team": true, "sport": true, "kreativ": false, "natur": false, "musik": false, "faul":false, "wettbewerb":true }
    },
    {
        "name": "Programmieren", "beschreibung": "Schreiben von Code zur Erstellung von Software oder Webseiten.", "bild": "programmieren.jpeg",
        "antworten": { "draussen": false, "team": false, "sport": false, "kreativ": true, "natur": false, "musik": false, "faul":false, "wettbewerb":false }
    },
    {
        "name": "Bouldern", "beschreibung": "Klettern ohne Seil in Absprunghöhe, meist an künstlichen Wänden.", "bild": "bouldern.jpeg",
        "antworten": { "draussen": true, "team": false, "sport": true, "kreativ": false, "natur": false, "musik": false, "faul":false, "wettbewerb":false }
    },
    {
        "name": "Zeichnen", "beschreibung": "Erstellen von Bildern mit Stift, Bleistift oder anderen Zeichenwerkzeugen.", "bild": "zeichnen.jpeg",
        "antworten": { "draussen": false, "team": false, "sport": false, "kreativ": true, "natur": false, "musik": false, "faul":false, "wettbewerb":false }
    }


];