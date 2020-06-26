// Es.1 Comparazione 2 Numeri - 25 Giugno 2020 JS

// Dichiarazione variabili
var numero1;
var numero2;

numero1 = parseInt(prompt("Inserisci primo numero: "));
numero2 = parseInt(prompt("Inserisci secondo numero: "));

if (numero1 > numero2) {
  console.log("Il primo numero che hai inserito è maggiore!");
} else if (numero2 > numero1) {
  console.log("Il secondo numero che hai inserito è maggiore!");
} else {
  console.log("Hai inserito lo stesso numero!");
}
