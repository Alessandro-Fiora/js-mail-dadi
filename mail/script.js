// Mail
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

// ! DATI
// * HO un ARRAY di persone che possono accedere
const users = [
  "hello@email.it",
  "me@email.it",
  "info@email.it",
  "myname@email.it",
  "hr@email.it",
];
// * CHIEDO la mail all'utente
const userMail = prompt(
  "Inserisci la tua mail per sapere se hai già un account"
);

// * dichiaro var output
let outputMessage = "";

// ! ELABORAZIONE

// * VALIDAZIONE EMAIL USANDO REGEX
const validateEmail = (userMail) => {
  return String(userMail)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// * SE la MAIL DELL'UTENTE è valida
if (validateEmail(userMail)) {
  // * SE la MAIL DELL'UTENTE è presente nell'Array di  persone che possono accedere
  if (users.includes(userMail)) {
    // * AGGIORNO OUTPUTMESSAGE con "il tuo account esiste"
    outputMessage = "Hai già registrato un account con questa mail";
  }
  // * ALTRIMENTI
  else {
    // * AGGIORNO OUTPUTMESSAGE con "NON esiste nessun account abbinato a questa mail"
    outputMessage = "Non hai ancora registrato un account con questa mail";
  }
}
// * ALTRIMENTI AGGIORNO OUTPUTMESSAGE con "la mail inserita non è valida"
else {
  outputMessage = "mail non valida";
}

// ! OUTPUT
// * STAMPO OUTPUTMESSAGE
alert(outputMessage);
