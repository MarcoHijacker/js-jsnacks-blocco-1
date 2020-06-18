// Verificatore di Segno JS

// Dichiarazione variabili
var submit = document.getElementById('submit');

submit.addEventListener("click", function () {
  // Reset delle classi indicatori segno del p
  var sgnChecker = document.getElementById('sgnChecker').classList.remove("positive","negative","zero");

  // Inserimento numero
  var numero = parseInt(prompt("Inserisci un numero relativo intero:"));
  // Verifica del segno
  if (numero > 0) {
    var sgnChecker = document.getElementById('sgnChecker').classList.add("positive");
  } else if (numero < 0) {
    var sgnChecker = document.getElementById('sgnChecker').classList.add("negative");
  } else {
    var sgnChecker = document.getElementById('sgnChecker').classList.add("zero");
  }
})
