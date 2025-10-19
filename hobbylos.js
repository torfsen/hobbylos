function ich_wuensche_mir_eine_schoene_checkliste_danke_danke(){
    let html = "<form id=\"formular\">";
    for (const frage of fragen) {
        html = html + html_fuer_frage_merci_gracias(frage.id,frage.text);
    }
    html = html + "<input type=\"submit\"></form>";
    return html;
};

function html_fuer_frage_merci_gracias(id,text) {
    return (
            "<input type=\"checkbox\" id=\""
            + id
            + "\"/><label for=\""
            + id
            + "\">"
            + text
            + "</label><br>"
    );
};

function fragenliste_ausgeben(fragen){
    const fragenliste_div = document.getElementById("fragenliste");
    fragenliste_div.innerHTML = ich_wuensche_mir_eine_schoene_checkliste_danke_danke(fragen);
}

function berechnung_von_punkten_fuer_hobby(hobby) {
    let punkte = 0;

    for (const frage in hobby.antworten) {

        const gefragt = document.getElementById(frage); 
        if (gefragt.checked == hobby.antworten[frage]) {
            punkte = punkte + 1;
        }
    }
    console.log(hobby.name + ": " + punkte);
    return punkte;
}

function vergleiche_hobbys_anhand_von_punkten(hobby1, hobby2) {
    const punkte1 = berechnung_von_punkten_fuer_hobby(hobby1);
    const punkte2 = berechnung_von_punkten_fuer_hobby(hobby2);
    if (punkte1 < punkte2) {
        return -1;
    }
    if (punkte1 > punkte2) {
        return 1;
    }
    return 0;
}

function schreibe_html_fuer_hobby_ZACK_ZACK(hobby) {
    return (
        "<div class=\"Karte\"><h2 class=\"Name\">"
        + hobby.name 
        + "</h2><img src=\"bilder/" + hobby.bild + "\"><p class=\"Beschreibung\">" 
        + hobby.beschreibung 
        + "</p></div>"
    );
}

function bitte_bitte_mache_mir_eine_schoene_liste_mit_DIESEN_hobbys_danke_danke(hobbys) {
    let html = "";
    for (const hobby of hobbys) {
        html = html + schreibe_html_fuer_hobby_ZACK_ZACK(hobby);
    }
    return html;
}

function vorschlagen(event) {
    const ergebnis_div = document.getElementById("ergebnis");
    const input_draussen = document.getElementById("draussen");
    let ergebnis = "";
    hobbys.sort(vergleiche_hobbys_anhand_von_punkten);
    hobbys.reverse();
    ergebnis_div.innerHTML = bitte_bitte_mache_mir_eine_schoene_liste_mit_DIESEN_hobbys_danke_danke(hobbys);
    event.preventDefault();
}

