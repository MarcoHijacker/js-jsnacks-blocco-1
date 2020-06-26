// Es.5 Lista Numeri Dispari - 25 Giugno 2020 JS

// Dichiarazione variabili

var listaNumeri = [];
var numero = 0;

for (var i = 0; i < 6; i++) {
  numero = parseInt(prompt("Inserisci il " + (i+1) + "° numero intero:"));
  if (numero%2) {
    listaNumeri.push(numero);
  }
}
console.log(listaNumeri);
