// Calcolatrice JS

// Dichiarazione variabili
var calcola = document.getElementById('calcola');

// Listener sul tasto CALCOLA
calcola.addEventListener("click", function() {
  // Rettifica a intero dei numeri forniti a input
  var numeroUno = parseInt(document.getElementById('numeroUno').value);
  var numeroDue = parseInt(document.getElementById('numeroDue').value);
  // Punto la variabile operazione sul value dell'option
  var operazione = document.getElementById('operazione').value;
  var risultato;

  // Sulla base dell'option, salvo l'operazione dei 2 numeri in risultato (var d'appoggio) e inietto nello span#risultato
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
    // Mi proteggo dal caso di divisione per 0
    if (numeroDue == 0) {
      document.getElementById('risultato').innerHTML = "Can't divide by ZERO!";
    } else {
    document.getElementById('risultato').innerHTML = risultato; }
  }

});
