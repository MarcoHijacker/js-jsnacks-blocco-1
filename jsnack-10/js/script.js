// Es.2 Comparazione 2 Parole - 25 Giugno 2020 JS

// Dichiarazione variabili
var parola1;
var parola2;

parola1 = prompt("Inserisci una prima parola: ");
parola2 = prompt("Inserisci una seconda parola: ");

if (parola1.length > parola2.length) {
  console.log(parola2, parola1);
} else if (parola2.length > parola1.length) {
  console.log(parola1, parola2);
} else {
  console.log("Le 2 parole hanno egual lunghezza:")
  console.log(parola1, parola2);
}
