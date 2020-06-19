// Comparatore di Età JS

// Dichiarazione variabili
var iniziaCalcolo = document.getElementById('iniziaCalcolo');
// Dichiarazione funzione
function compare(a, b) {
  if (a > b) return 1;
  if (b > a) return -1;

  return 0;
}

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
    eta[count] = parseInt(prompt("Inserisci età dell'invitato numero " + count + ":"));
    console.log(eta[count]);
    count++;
    }
    while (count < numeroPersone);

    // Inietta i valori dell'array eta, uno per uno, in una stringa e separali da spazio
    var printThis = "";

    for(var i = 0; i < eta.length; i++){
        printThis += " "+eta[i];
    }
    // Stampa i valori di età nell'ordine di inserimento dell'utente
    document.getElementById('listaEta').innerHTML = printThis;

    // Mostro età del partecipante più vecchio e di quello più giovane mostrandolo in 2 span
    document.getElementById('oldestOne').innerHTML = Math.max.apply(Math, eta);
    document.getElementById('youngestOne').innerHTML = Math.min.apply(Math, eta);

    var dateBirth = "";

    for(var i = 0; i < eta.length; i++){
        eta[i] = 2020 - eta[i];
        dateBirth += " "+eta[i];
    }

    document.getElementById('listaNascit').innerHTML = dateBirth;

    // Ordina crescentemente i valori dell'array
    eta = eta.sort(compare);

    // Inietta i valori dell'array eta, uno per uno, in una stringa e separali da spazio
    var printThisOrd = "";
    var i = 0;

    for(var i = 0; i < eta.length; i++){
        eta[i] = 2020 - eta[i];
        printThisOrd += " "+eta[i];
    }
    // Stampa i valori di età nell'ordine crescente
    document.getElementById('listaEtaCresc').innerHTML = printThisOrd;

  } else {
    // Mostro diniego a procedere per eccessivi partecipanti
    document.getElementById('authTravel').innerHTML = "No, massimo 10 persone, minimo una!"
  }

});
