// Esercizio Nome Cognome JS

// Dichiarazione variabili
var submit = document.getElementById('submit');

// Listener sul tasto Invia
submit.addEventListener("click", function() {
  var nomeUtente;
  var cognomeUtente;

  // Salvo l'inserimento nei campi nelle 2 var
  nomeUtente = document.getElementById('nomeUtente').value;
  cognomeUtente = document.getElementById('cognomeUtente').value;

  // Stampo nome (spazio) cognome nella console
  console.log(nomeUtente + " " + cognomeUtente);
})
