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


document.querySelector("#btn-play").addEventListener("click", 
    function(){
        const resultEl= document.querySelector("#result");


        // scelta utente di pari o displari
        const userChoice = document.querySelector("#choice").value;
        
        // scelta numero dell'utente
        const userNumber = Number(document.querySelector("#number").value);
        
        
        const cpuNumber = randomNumber_1_5();
        
        console.log(cpuNumber);
        
        const sum = userNumber + cpuNumber;
        
        resultEl.innerText = "La somma dei due numeri è: "+ sum;
        
        if(isEven(sum)){
            if(userChoice == "pari"){
                resultEl.innerText += ". E' uscito pari ed hai vinto";
            }else{
                resultEl.innerText += ". E' uscito pari ed hai perso";
            }
        }else{
            if(userChoice == "dispari"){
                resultEl.innerText += ". E' uscito dispari ed hai vinto";
            }else{
                resultEl.innerText += ". E' uscito dispari ed hai perso";
            }
        
        }

    }    

)    
