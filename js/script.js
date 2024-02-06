// L’utente sceglie pari o dispari.
// Inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Se l'utente ha indovinato l'esito (pari o dispari) della somma ha vinto, altrimenti ha perso.



// funzione che generi un numero da 1 a 5

function randomNumber_1_5(){

    return Math.floor(Math.random() * 5 + 1);

}

// funzione che controlla se il numero passato per parametro è pari o dispari
function isEven(num){

    if(num % 2 == 0){
        return true;
    }else{
        return false;
    }

}




// scelta utente di pari o displari
const userChoice = "pari";

// scelta numero dell'utente
const userNumber = 3;


const cpuNumber = randomNumber_1_5();

console.log(cpuNumber);

const sum = userNumber + cpuNumber;

console.log(sum);

if(isEven(sum)){
    console.log("è uscito pari");
}else{
    console.log("è uscito dispari");

}

