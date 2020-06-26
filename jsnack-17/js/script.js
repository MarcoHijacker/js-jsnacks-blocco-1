// Es.4 Somma e Media 10 Numeri - 26 Giugno 2020 JS

// Dichiarazione variabili
var somma = 0;

for (var i = 0; i < 10; i++) {
  somma += parseInt(prompt("Inserisci il " + (i+1) + "° numero intero: "));
}

console.log("La somma dei numeri inseriti è:", somma);
console.log("La media dei numeri inseriti è:", somma/10);
