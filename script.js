{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const frasi = [\
    "Ti ho pensato molto anche se so poco o niente di te",\
    "Sono stato molto amato e questo mi ha reso un uomo buono",\
    "Tu cosa sogni?",\
    "Sono gli ultimi 100 metri che fanno la differenza",\
    "Mi sento un po\'92 come un elefante sul ghiaccio",\
    "Ci vuole tempo per vedere se siamo esattamente sovrapponibili",\
    "Sono cresciuto con mia madre quindi ho sempre avuto senso di responsabilit\'e0",\
    "Avremo tante notti per parlarci di tutto quello che vorrai",\
    "Ricordati che i valori ci uniscono, non le leggi che dobbiamo ancora scrivere",\
    "Sembra che tutte le strade portino a te",\
    "Quando parlo con te mi scatta una vocina che dice: \'93attento\'94",\
    "Posso sentire una complicit\'e0 con te che non ho mai trovato prima",\
    "\'c8 la paura di star bene che mi blocca",\
    "Tendo ad autosabotarmi",\
    "Forse ho fatto tardi per essere il tuo primo amore, ma sono arrivato in tempo per essere il tuo ultimo",\
    "Buongiorno raggio di luce che buca le nuvole dopo una tempesta",\
    "La bellezza salver\'e0 il mondo, disse Dostoevskij, la tua salver\'e0 me",\
    "Vita dura felicit\'e0 a momenti",\
    "\'c8 proprio il tuo anno: il duemila-venti-sei-bellissima",\
    "sono una persona estremamente fedele, non solo con il cuore ma anche con il corpo",\
    "Perch\'e9 io, in questo segno zodiacale, non riesco a non essere sincero e trasparente",\
    "I norvegesi hanno inventato la parola pi\'f9 bella del mondo. Oppholdsv\'e6r: \'e8 il primo raggio di luce che buca le nuvole dopo la tempesta.",\
    "Ti avviso che ti sto per dare un bacio: se non lo vuoi, devi solo restituirmelo",\
    "SEI COSI' BELLA CHE QUANDO UNA STELLA CADENTE TI VEDE ESPRIME UN DESIDERIO",\
    "Per corteggiarti voglio portarti a fare un giro in mongolfiera",\
    "Mi piace lasciare molto spazio agli altri",\
    "Io ho sempre avuto una visione, mia moglie seduta alla finestra che dipinge... posso solo che immaginarti protagonista",\
    "Tu sei l\'92unica con cui riesco a ridere veramente",\
    "Vissi d\'92arte, vissi d\'92amore",\
    "Oggi \'e8 luna piena e la luna piena crea grandi momenti nei cuori delle donne",\
    "Dopo una vita ad essere scelto ho incontrato te e mi fai venire voglia di scegliere",\
    "La gentilezza \'e8 la pi\'f9 grande forma di intelligenza",\
    "Tu sei la mia luce lunare",\
    "Tu sai illuminarmi nella notte",\
    "Un uomo intelligente non rischier\'e0 di perdere quello che sa di non poter trovare ancora",\
    "Bisogna essere disposti a prendere qualche cazzotto in quella rissa della vita chiamata \'93amore\'94",\
    "Tu: B9, D4, F6 // Lei: ?? // tu: mi hai colpito e affondato, puoi venire a salvarmi?",\
    "Se muoio voglio essere cremato e le mie ceneri devono essere cosparse nel tuo salotto...",\
    "Mai capir\'f2 come il sole sia capace di oscurare con la sua luce tutte le stelle che stanno nel cielo",\
    "Sai che assomigli molto alla mia prossima fidanzata?",\
    "Vorrei essere un gatto per passare le mie 7 vite con te",\
    "Scusa, non mi ricordo se avevamo detto di vederci stasera o domani o tutto il weekend",\
    "Ti scrivo dal 2041: sono appena tornato da un weekend con te su Marte...",\
    "Stavo leggendo il mio oroscopo e c'\'e8 scritto che oggi dovrei passare la giornata con il possibile amore della mia vita...",\
    "Scusami, avevo completamente dimenticato di rispondere... Poco fa ho visto un fiore bellissimo e mi sei venuta in mente.",\
    "sarai sicuramente nei miei sogni questa notte",\
    "Riposati bene che domani ho delle sorprese per te",\
    "Questo drink che ho inventato lo chiamer\'f2 col tuo nome, perch\'e9 una volta assaggiato non potrai farne a meno",\
    "Dammi tre buone ragioni perch\'e9 dovrei darti il mio numero",\
    "Quella stanza era piena di lampadine: quando sei entrata l\'92unica accesa eri tu",\
    "Indovinello: \'e8 tuo ed inizia con il 3, ha 10 cifre...",\
    "Tu sei la classica con cui sarebbe impossibile giocare a nascondino... perch\'e9 una come te \'e8 impossibile da trovare",\
    "Ogni volta che ti guardo mi cade una cosa, la mascella",\
    "Se tu vieni, per esempio, tutti i pomeriggi, alle quattro, dalle tre io comincer\'f2 ad essere felice...",\
    "Capisco che tu cerchi di cambiare discorso e va bene\'85ma io non riesco a non pensarti ogni giorno"\
];\
\
const display = document.getElementById('quote-display');\
const btn = document.getElementById('refresh-btn');\
\
function generaFrase() \{\
    // Sceglie un indice a caso tra 0 e la lunghezza dell'array\
    const indexCasuale = Math.floor(Math.random() * frasi.length);\
    display.textContent = frasi[indexCasuale];\
\}\
\
// Genera una frase al caricamento della pagina\
window.onload = generaFrase;\
\
// Genera una frase al click del pulsante\
btn.addEventListener('click', generaFrase);}