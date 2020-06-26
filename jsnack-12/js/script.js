// Es.4 Lista Invitati - 25 Giugno 2020 JS

// Dichiarazione variabili
var listaInvitati = ["pippo", "pluto", "topolino", "paperino", "minnie", "paperone", "paperoga"];
var presente = false;

var nomeUtente;
nomeUtente = prompt("Inserisci il tuo nome: ").toLowerCase();

for (var i = 0; i < listaInvitati.length; i++) {
  if(nomeUtente == listaInvitati[i]) {
    presente = true;
  }
}
if (presente) {
  alert("Sei in lista, si accomodi al centro della pista!");
} else {
  alert("Non sei in lista, vattene via o chiamo la polizia!");
}
