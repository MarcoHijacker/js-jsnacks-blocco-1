// Pari Dispari e Classi JS

// Dichiarazione variabili
var generateNum = document.getElementById('generateNum');

// Listener sul bottone AVVIA GENERATORE
generateNum.addEventListener("click", function () {
  var number;
  var numero = document.getElementById('numero');

  // Assegno le 2 classi sul p
  numero = document.getElementById('numero').classList.add("pari","dispari");
  number = Math.floor((Math.random() * 10) + 1);

  // Verifica nascosta
  console.log(number);

  // Verifico se il numero è pari o dispari
  if (number % 2) {
    // Se il numero è dispari, tolgo classe dispari
    numero = document.getElementById('numero').classList.remove("dispari");
    // Se il numero è pari, tolgo classe pari
  } else {
    numero = document.getElementById('numero').classList.remove("pari");
  }
  // Stampo il numero sulla pagina
  document.getElementById('showNum').innerHTML = "Il numero generato è " + number;
});
