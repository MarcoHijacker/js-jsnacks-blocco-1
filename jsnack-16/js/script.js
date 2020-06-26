// Es.3 Somma Cifre Numero - 26 Giugno 2020 JS

// Dichiarazione variabili
var numeroIns = prompt("Inserisci un numero intero: ");
var numeroSomma = 0;
for (var i = 0; i < numeroIns.length; i++) {
  numeroSomma += parseInt(numeroIns[i]);
}

console.log("La somma delle cifre del numero inserito è: " + numeroSomma);
