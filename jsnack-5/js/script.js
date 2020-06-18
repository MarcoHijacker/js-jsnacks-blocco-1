// Calcolatrice JS

// Dichiarazione variabili
var calcola = document.getElementById('calcola');

calcola.addEventListener("click", function() {
  var numeroUno = parseInt(document.getElementById('numeroUno').value);
  var numeroDue = parseInt(document.getElementById('numeroDue').value);
  var operazione = document.getElementById('operazione').value;
  var risultato;

  if (operazione == "somma") {
    risultato = numeroUno + numeroDue;
    document.getElementById('risultato').innerHTML = risultato;
  } else if (operazione == "sottrazione") {
    risultato = numeroUno - numeroDue;
    document.getElementById('risultato').innerHTML = risultato;
  } else if (operazione == "prodotto") {
    risultato = numeroUno * numeroDue;
    document.getElementById('risultato').innerHTML = risultato;
  } else if (operazione == "divisione") {
    risultato = numeroUno / numeroDue;
    if (numeroDue == 0) {
      document.getElementById('risultato').innerHTML = "Can't divide by ZERO!";
    } else {
    document.getElementById('risultato').innerHTML = risultato; }
  }

});
