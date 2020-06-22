// Simulatore di Login JS

/* Richiesta di Andrea : Realizza una pagina html che mostri una schermata di login (nome utente e password).
Al click sul pulsante 'Esegui accesso' controlla (in un array composto da nomi utente, password e ruolo) se l'utente esiste, la password è corretta e se l'utente ha i permessi per visualizzare la pagina segreta...
Se l'utente ha i permessi, mostra prima un messaggio di benvenuto, e poi la pagina segreta... */

// Area Database
var usr1 = ["marco", "longo", "student"];
var usr2 = ["andrea", "castenetto", "teacher"];
var usr3 = ["simone", "icardi", "teacher"];
var usr4 = ["raffaele", "giammario", "teacher"];
var usr5 = ["roberto", "rossi", "student"];

// Variabile bottone
var login = document.getElementById('login');

// Listener sul bottone
login.addEventListener("click", function () {
  // Variabili username, password, role case unsensitive
  var username = document.getElementById('username').value.toLowerCase();
  var password = document.getElementById('password').value.toLowerCase();
  var role = document.getElementById('role').value.toLowerCase();

  // Inizializzazione span contenente errori
  document.getElementById('esito').innerHTML = "";

  // Creazione array con i campi del form
  var usrX = [username, password, role];

  // Confronto uno a uno, valore per valore, degli 'account' presenti nell'array
  if (usrX[0] == usr1[0] && usrX[1] == usr1[1] && usrX[2] == usr1[2]) {
    alert("Benvenuto Marco!");
    document.getElementById('secret').classList.remove("secret");
  } else if (usrX[0] == usr2[0] && usrX[1] == usr2[1] && usrX[2] == usr2[2]) {
    alert("Benvenuto Andrea!");
    document.getElementById('secret').classList.remove("secret");
  } else if (usrX[0] == usr3[0] && usrX[1] == usr3[1] && usrX[2] == usr3[2]) {
    alert("Benvenuto Simone!");
    document.getElementById('secret').classList.remove("secret");
  } else if (usrX[0] == usr4[0] && usrX[1] == usr4[1] && usrX[2] == usr4[2]) {
    alert("Benvenuto Raffaele!");
    document.getElementById('secret').classList.remove("secret");
  } else if (usrX[0] == usr5[0] && usrX[1] == usr5[1] && usrX[2] == usr5[2]) {
    alert("Benvenuto Roberto!");
    document.getElementById('secret').classList.remove("secret");
  } else {
    document.getElementById('esito').innerHTML = "Username/Pass errati o ruolo non corretto!";
  }

});
