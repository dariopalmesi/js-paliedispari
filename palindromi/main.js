

// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma



function log_user_promt(str) {

    console.log(str);

    return str == str.split('').reverse().join('');


}

log_user_promt('inserisci una parola')