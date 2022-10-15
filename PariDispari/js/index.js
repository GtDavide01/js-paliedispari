/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */


//recupero elementi html 
const userChoiceHtml = document.getElementById("user-choice");
const userNumberHtml = document.getElementById("user-number");
const rndNumberComputerHtml = document.getElementById("computer-number");
const sommaOfNumberHtml = document.getElementById("somma-numeri");
const sommaPariDispariHtml = document.getElementById("somma-pari-dispari");
const resultWinHtml = document.getElementById("result");


//prendo la scelta dell'utente (pari o dispari)
let userChoice = "";
while (userChoice !== "dispari" && userChoice !== "pari"){
    userChoice = prompt("Vuoi giocare come pari o dispari?")
}
//prendo il numero inserito dall'utente 
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(userNumber);
//genero numero per il computer
const rndNumberComputer = generateRndNumber(1 , 6);
console.log(rndNumberComputer);
//sommo i due numeri tramite funzione 
const sommaOfNumber = somma(userNumber , rndNumberComputer);
console.log(sommaOfNumber);
//verifico se il numero della somma è pari o dispari 
const sommaPariDispari = isPariDispari(sommaOfNumber);
console.log(sommaPariDispari);
//dichiaro il vincitore 
let messageResult = "";
if(sommaPariDispari === userChoice){
    messageResult = "Complimenti hai vinto contro il computer";
}else{
    messageResult = "Dispiace hai perso contro il computer";
}
const resultWin = messageResult;

//restituisco i valori all'html 
userChoiceHtml.innerHTML += userChoice;
userNumberHtml.innerHTML += userNumber;
rndNumberComputerHtml.innerHTML += rndNumberComputer;
sommaOfNumberHtml.innerHTML += sommaOfNumber;
sommaPariDispariHtml.innerHTML += sommaPariDispari;
resultWinHtml.innerHTML += resultWin;

//funzione per generare numeri random da 1 a 5 
function generateRndNumber ( min , max ){
    const rndNumber = Math.floor(Math.random() * (max - min) + min);
    return rndNumber ;
}
//funzione per la somma 
function somma (a,b){
    const sommaResult = a+b;
    return sommaResult;
}
//funzione per verificare se un numero è pari o dispari 
function isPariDispari (number) {
    let result = "";
    if (number % 2 === 0) {
        result = "pari";
    } else {
        result = "dispari";
    }
    return result;
}