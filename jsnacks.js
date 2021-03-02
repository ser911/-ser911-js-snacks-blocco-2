// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// // parola più lunga.

var userWord1 = prompt("Inserisci la prima parola");
var userWord2 = prompt("Inserisci la seconda parola");

if (userWord1.length > userWord2.length) {
console.log(userWord2);
console.log(userWord1);
}
else if (userWord2.length > userWord1.length) {
    console.log(userWord1);
    console.log(userWord2);
}
else{
  console.log("Le parole hanno la stessa lunghezza.");
}
