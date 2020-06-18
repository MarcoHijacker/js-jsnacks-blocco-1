// Esercizio Numero Maggiore JS

// Dichiarazione variabili
var number1;
var number2;

// Richiesta inserimento
number1 = prompt("Inserisci un numero:");
number2 = prompt("Inserisci un altro numero:");

// Confronto dei 2 numeri
if (!isNaN(number1) && !isNaN(number2)) {
  number1 = parseInt(number1);
  number2 = parseInt(number2);
if (number1 > number2) {
  document.getElementById('highest').innerHTML = number1;
} else if (number1 < number2) {
  document.getElementById('highest').innerHTML = number2;
} else {
  document.getElementById('highest').innerHTML = "Nessuno, hai inserito 2 numeri uguali";
}} else {
  document.getElementById('highest').innerHTML = "Nessuno, non sono entrambi dei numeri";
}
