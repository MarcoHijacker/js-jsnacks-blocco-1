// Testa o Croce JS

// Dichiarazione variabili
var lanciaMoneta = document.getElementById('lanciaMoneta');

// Listener sul tasto Lancia Moneta
lanciaMoneta.addEventListener("click", function () {
  // Genero numero casuale da 0 a 9
  var numeroRandom = Math.floor(Math.random()*10);
  // Punto le 2 var sui rispettivi div relativi all'esito croce e testa
  var croceOut = document.getElementById('croceOut');
  var testaOut = document.getElementById('testaOut');
  // Inizializzo le classi hidden sui 2 div contenenti i 2 esiti
  croceOut.classList.add("hidden");
  testaOut.classList.add("hidden");

  // Verifica nascosta del numero uscito
  console.log(numeroRandom);

  // Se dispari, mostro croce, se pari, mostro testa
  if (numeroRandom % 2) {
    croceOut.classList.remove("hidden");
  } else {
    testaOut.classList.remove("hidden");
  }
  // Visualizzo anche il numero estratto
  document.getElementById('numeroUscito').innerHTML = numeroRandom;
});
