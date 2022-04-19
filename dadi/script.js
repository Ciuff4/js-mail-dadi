/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

const max=6

let playerNumber=(Math.floor(Math.random()*max)+1);
console.log(playerNumber);
let computerNumber=(Math.floor(Math.random()*max)+1);
console.log(computerNumber);

let winner;

if(playerNumber===computerNumber){
    winner=`it's a Tie!`
}else if(playerNumber>computerNumber){
    winner=`Your number (${playerNumber}) wins!`
}else{
    winner=`I'm sorry!The Computer number (${computerNumber}) wins! :(`
}

document.querySelector("h1").innerHTML=winner