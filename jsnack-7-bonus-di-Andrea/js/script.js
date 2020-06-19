// Comparatore di Età JS

// Dichiarazione variabili
var iniziaCalcolo = document.getElementById('iniziaCalcolo');

// Listener sul tasto Inizia Calcolo
iniziaCalcolo.addEventListener("click", function () {
  var numeroPersone = parseInt(document.getElementById('numeroPersone').value);
  // Contatore per ciclo do-while
  var count = 0;
  // Nuovo array contenente tutte le età dei partecipanti
  eta = new Array();

  // Verifica di sicurezza per massimale partecipanti
  if (numeroPersone <= 10 && numeroPersone > 0 && numeroPersone != 0) {
    // Stampo autorizzazione o meno a procedere
    document.getElementById('authTravel').innerHTML = "Sì, numero consentito."
    // Finché il contatore è minore del numero partecipanti, mostro prompt, immagazzino età nel posto count dell'array e incremento count
    do {
    eta[count] = parseInt(prompt("Inserisci età dell'invitato numero " + count));
    console.log(eta[count]);
    count++;
    }
    while (count < numeroPersone);

    // Mostro età del partecipante più vecchio e di quello più giovane mostrandolo in 2 span
    document.getElementById('oldestOne').innerHTML = Math.max.apply(Math, eta);
    document.getElementById('youngestOne').innerHTML = Math.min.apply(Math, eta);
  } else {
    // Mostro diniego a procedere per eccessivi partecipanti
    document.getElementById('authTravel').innerHTML = "No, massimo 10 persone, minimo una!"
  }

});
