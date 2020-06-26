// Busta Paga JS

// Richiesta di Andrea: L'utente inserisce il nome e il numero di ore lavorative effettuate e viene visualizzato lo stipendio percepito.
// Le ore di lavoro ordinario (pari o inferiori a 160 ore) vengono retribuite 16 euro/ora.
// Le ore di lavoro straordinario (eccedenti 160 ore) verranno retribuite il 25% in più.

var calcolaStipendio = document.getElementById('calcolaStipendio');
var stipendio = 0;
var rateOrdinario = 16; // 16eur/ora ordinario
var rateStraordinario = 20; // 20eur/ora straordinario

calcolaStipendio.addEventListener("click", function () {
  // Immagazzino in 2 var nome lavoratore e numero ore, forniti in input
  var nomeLavoratore = document.getElementById('nomeLavoratore').value;
  var oreLavorate = parseInt(document.getElementById('oreLavorate').value);

  // Saluto il lavoratore!
  document.getElementById('resultBox').innerHTML = "Ciao " + nomeLavoratore + "!<br>";
  if (oreLavorate <= 160) {
    // Se sono sotto le 160 ore, lo stipendio è una semplice moltiplicazione
    stipendio = oreLavorate * rateOrdinario;
    document.getElementById('resultBox').innerHTML += "Hai lavorato un totale di <b>" + oreLavorate + "</b> ore mensili.<br>" + "Il tuo stipendio totale è di <b>" + stipendio + " Euro.</b>";
  } else if (oreLavorate > 160) {
    // Se il lavoratore ha ecceduto le 160, parto da una base di stipendio ordinario per le 160 ore e calcolo l'esubero con il rate per lo straordinario
    stipendio = (160 * rateOrdinario) + (oreLavorate - 160) * rateStraordinario;
    // Qui stampo anche, in aggiunta, i dettagli sullo straordinario
    document.getElementById('resultBox').innerHTML += "Hai lavorato un totale di <b>" + oreLavorate + "</b> ore mensili.<br>" + "Il tuo stipendio totale è di <b>" + stipendio + " Euro.</b><br>" + "Un totale di <b>" + (oreLavorate - 160) + "</b> ore di straordinario ti sono state remunerate con un <b>+25%</b>!";
  }

});
