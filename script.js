/*

JS-BIGLIETTI-TRENO:
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/


//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
const km = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));
//console.log(km);

const eta = parseFloat(prompt("Inserisci la tua età"));
//console.log(eta);

//operazione del prezzo totale
const prezzototale = km * 0.21;
//console.log(prezzototale);

let sconto = 0;
let scontoPercentage = 0;

if (eta < 18) {
    sconto = prezzototale * 0.2;
    scontoPercentage = 20;
} else if (eta > 65) {
    sconto = prezzototale * 0.4;
    scontoPercentage = 40;
}

const prezzofinale = prezzototale - sconto; 

console.log("devi percorrere " + km + " km ed hai " + eta + " anni");

if (sconto > 0) {
    console.log("Hai il diritto ad uno sconto del " + scontoPercentage + "%");
} else {
    console.log("Purtroppo alla tua categoria di età non spetta nessuno sconto");
}

console.log("Pagherai: " + prezzofinale.toFixed(2) + "€");



