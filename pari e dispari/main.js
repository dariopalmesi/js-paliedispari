

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.


let giocatore 
giocatore = prompt('scegli un numero da 1 a 5')

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  console.log(getRndInteger(1,6));
   

//   for (let i = 0; i < 10; i++) {
//     let randomNumber = getRndInteger(1,100)
//     console.log(randomNumber);
//   }