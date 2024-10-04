

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.


let giocatore 
giocatore = prompt('scegli un numero da 1 a 5')

let cpu = getRndInteger

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  console.log(getRndInteger(1,6));
   
function sum_pari_dispari(num_1, num_2) {
    const sum = num_1 + num_2;
    return sum
}
const result = sum_pari_dispari(giocatore, cpu)
console.log(result);

