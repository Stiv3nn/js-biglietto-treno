/*

JS-BIGLIETTI-TRENO:
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/


//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
let km = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
console.log(km);

let eta = parseInt(prompt("Inserisci la tua età"));
console.log(eta);

//prezzo al chilometro
let prezzokm = 0.21; 
//operazione del prezzo totale
let prezzototale = km * 0.21;
console.log(prezzototale);




