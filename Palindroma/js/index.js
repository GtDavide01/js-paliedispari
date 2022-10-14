/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma. */


//recupero elementi html
const wordUserHtml = document.getElementById("word-user");
const wordUserReverseHtml = document.getElementById("word-user-reverse");
const wordPalindormaHtml = document.getElementById("word-palindroma");

//chiedo all'utente una parola
const userWord = prompt("inserisci una parola..");
console.log(userWord);
//tramite funzione scrivo in senso inverso  la parola inserita 
const wordReverse = reverseWord(userWord);
console.log(wordReverse);
//verifico tramite funzione se la parola è palindroma 
const wordPalindroma = isPalindroma(userWord , wordReverse);
console.log(wordPalindroma);

//collego tramite innerHTML i risultati ottenuti

wordUserHtml.innerHTML += userWord;
wordUserReverseHtml.innerHTML += wordReverse;
wordPalindormaHtml.innerHTML += wordPalindroma;


//FUNZIONI
//funzione che scrive in senso contrario la parola inserita dall'utente ; 
function reverseWord (word){
    //trasformo la parola dell'utente in un array 
    const userWord = word.split("");
    //ordino l'array in senso inverso 
    const reverseStringArray = userWord.reverse();
    //ricompongo la stringa in senso inverso 
    const reverseString = reverseStringArray.join("");

    return reverseString;
}
//funzione che verifica se la parola è palindroma
function isPalindroma (wordA , wordB){
    let message = "";
    if(wordA===wordB){
        message = "è palindroma.";
    }else{
        message ="non è palindroma.";
    }
    return message ;
}