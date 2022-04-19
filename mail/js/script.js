/*
1.Chiedi all’utente la sua email
2.Controlla che sia nella lista di chi può accedere
3.Creare quindi una lista di utenti autorizzati
4.Stampa un messaggio appropriato sull’esito del controllo
*/

let email= prompt ("Inserisci la tua mail");

const arrAuthorized =["mail1","mail2","mail3"];

let verifiedMail=false;

for(let i=0; i<arrAuthorized.length; i++){

    if(email===arrAuthorized[i]){
        verifiedMail=true
        console.log("mail trovata");
    }
}

let message;

if((verifiedMail===true)){
    console.log("found");
    message=`Congratulazioni, la mail inserita è corretta`
}else{
    console.log("not found");
    message=`Spiacenti, la mail inserita non è corretta, la preghiamo di riprovare`
}

document.getElementById("output").innerHTML=message