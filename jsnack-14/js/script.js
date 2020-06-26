// Es.1 Cubo N numeri - 26 Giugno 2020 JS

// Dichiarazione variabili

var numCicli = parseInt(prompt("Inserisci un numero intero naturale:"));

for (var i = 1; i < numCicli + 1; i++) {
  console.log(Math.pow(i, 3)); // Oppure i**3 , funzione base di JS
}
