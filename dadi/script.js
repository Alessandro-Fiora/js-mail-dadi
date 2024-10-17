// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// ! DATI
// * MESSAGGIO INIZIALE
alert(
  "Gioco dei dadi contro il PC: \nVerrà assegnato un numero casuale sia a te che al PC \nVince chi ha il numero maggiore!"
);

// * GENERO NUMERO CASUALE PER COMPUTER
const pcNumber = Math.floor(Math.random() * 6 + 1);
console.log(pcNumber);

// * GENERO NUMERO CASUALE PER UTENTE
const userNumber = Math.floor(Math.random() * 6 + 1);
console.log(userNumber);

// * GENERO OPUTPUTMESSAGE
let outputMessage;

// ! ELABORAZIONE
// * SE il numero dell'utente è maggiore di quello del computer
if (userNumber > pcNumber) {
  // * AGGIORNO outputmessage con 'HAI VINTO! il tuo numero è userNumber e quello del computer è pcNumber'
  outputMessage = `HAI VINTO! il tuo numero è ${userNumber} e quello del computer è ${pcNumber}`;
}
// * ALTRIMENTI SE il numero dell'utente è minore di quello del computer
else if (userNumber < pcNumber) {
  // * AGGIORNO outputmessage con 'HAI PERSO! il tuo numero è userNumber e quello del computer è pcNumber'
  outputMessage = `HAI PERSO! il tuo numero è ${userNumber} e quello del computer è ${pcNumber}`;
}
// * ALTRIMENTI
else {
  // * AGGIORNO outputmessage con 'PAREGGIO! il tuo numero è userNumber e quello del computer è pcNumber'
  outputMessage = `PAREGGIO! il tuo numero è ${userNumber} e quello del computer è ${pcNumber}`;
}

// ! OUTPUT
// * STAMPO outputmessage
alert(outputMessage);
