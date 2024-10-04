

// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

prompt('inserisci una parola')

function log_user_promt(str) {
    if (str == str) {
        console.log('è palindromo');

    }else {
        console.log('non è palindromo');
        
    }
    console.log(str);
    
    return str == str.split('').reverse().join('');


}

log_user_promt()