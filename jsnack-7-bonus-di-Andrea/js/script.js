// Comparatore di Età JS

// Dichiarazione variabili
var iniziaCalcolo = document.getElementById('iniziaCalcolo');

iniziaCalcolo.addEventListener("click", function () {
  var numeroPersone = parseInt(document.getElementById('numeroPersone').value);
  var count = 0;
  eta = new Array();

  if (numeroPersone <= 10 && numeroPersone > 0 && numeroPersone != 0) {

    document.getElementById('authTravel').innerHTML = "Sì, numero consentito."
    do {
    eta[count] = parseInt(prompt("Inserisci età dell'invitato numero " + count));
    console.log(eta[count]);
    count++;
    }
    while (count < numeroPersone);

    document.getElementById('oldestOne').innerHTML = Math.max.apply(Math, eta);
    document.getElementById('youngestOne').innerHTML = Math.min.apply(Math, eta);
  } else {
    document.getElementById('authTravel').innerHTML = "No, massimo 10 persone, minimo una!"
  }

});
