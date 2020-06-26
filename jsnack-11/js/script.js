// Es.3 Somma 5 Numeri - 25 Giugno 2020 JS

// Dichiarazione variabili
var listaNumeri = [];
var somma = 0;

// Versione con for
for (var i = 0; i < 5; i++) {
  listaNumeri[i] = parseInt(prompt("Inserisci il " + (i+1) + "° numero:"));
  somma += listaNumeri[i];
}

// Versione con while
// var i = 0;
// while(i < 5) {
//   listaNumeri[i] = parseInt(prompt("Inserisci il " + (i+1) + "° numero:"));
//   somma += listaNumeri[i];
//   i++
// }

console.log("La somma totale dei numeri inseriti è: " + somma);
