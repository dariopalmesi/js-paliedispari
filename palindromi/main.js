

// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
let works

works = prompt('inserisci una parola')

function log_user_promt(str) {

     console.log(str);
     
    return str == str.split('').reverse().join('');


}
 
log_user_promt(works)

const userWorks = log_user_promt



 if (works == userWorks) {
     console.log('è palindromo');
    
 }else {
     console.log('non è palindromo');
     }