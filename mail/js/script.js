/*
1.Chiedi all’utente la sua email
2.Controlla che sia nella lista di chi può accedere
3.Creare quindi una lista di utenti autorizzati
4.Stampa un messaggio appropriato sull’esito del controllo
*/

let email= prompt ("Inserisci la tua mail");

const arrAuthorized =["zrxr@nalsci.com","timoninstas@ichstet.com","angiloxlkaz@livegolftv.com", "cjs016@bookug.site"];

let verifiedMail=false;

for(let i=0; i<arrAuthorized.length; i++){

    console.log(i);

    if(email===arrAuthorized[i]){
        verifiedMail=true;
        document.getElementById("output").innerHTML= "Congratulazioni, la mail inserita è corretta";
    }else{
        document.getElementById("output").innerHTML= "Spiacenti, la mail inserita non è corretta, la preghiamo di riprovare";
        }
}