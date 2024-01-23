/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 4;
let num2 = 7;
if (num1 > num2) {
  console.log(`Esercizio 1 : ${num1} è maggiore di ${num2}`);
} else {
  console.log(`Esercizio 1 : ${num2} è maggiore di ${num1}`);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (num1 !== 5) {
  console.log(`Esercizio 2: not equal`);
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num3 = 10;
if (num3 % 5 === 0) {
  console.log("Esercizio 3 :", num3, " è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (num1 === 8) {
  console.log("Esercizio 4:", num1, "è uguale a 8");
} else if (num2 === 8) {
  console.log("Esercizio 4:", num2, "è uguale a 8");
} else if (num1 + num2 === 8) {
  console.log("Esercizio 4: La somma di ", num1, num2, "è 8");
} else if (num1 - num2 === 8) {
  console.log("Esercizio 4: La sottrazione di ", num1, num2, "fa 8");
} else {
  console.log(`Esercizio 4: nessun numero tra ${num1} e ${num2} è uguale a 8 \n nemmeno la loro somma o sottrazione`);
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let prodotto = 10;
let prodotto2 = 25;
let spedizione = 10;
let totale = prodotto + prodotto2;
if (totale > 50) {
  console.log(`Esercizio 5: Hai speso ${totale}€, hai diritto alla spedizione gratuita`);
} else if (totale < 50) {
  console.log(`Esercizio 5:
  Hai speso ${totale}€ non hai diritto alla spedizione gratuita, costo totale`,
    totale + spedizione
  );
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num4 = 2;
let num5 = 5;
let num6 = 9;


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num7 = 12;
const message = typeof num7 === "number" ? "number" : "string";
console.log(`Esercizio 8: ${num7} è di tipo:`, message);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num8 = 15;
let message2 =`Esercizio 9: `;
if (num8 % 2 === 0) {
   message2 += `${num8} è pari!`
} else{
  message2 += `${num8} è dispari!`
}
console.log(message2)

// ESERCIZIO 10
//Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
let val = 7;
if (val < 5) {
  console.log("ESERCIZIO 10 - Meno di 5");
} else if (val < 10) {
  console.log("ESERCIZIO 10 - Meno di 10");
} else {
  console.log("ESERCIZIO 10 - Uguale a 10 o maggiore");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */


me.city = "Toronto";
console.log(`Esercizio 11: aggiunta proprieta city: Toronto`,me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(`Esercizio 12: rimossa proprietà lastName`,me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.splice(2,1)
 
console.log(`Esercizio 13: rimosso ultimo elemento della proprietà skills`,me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const arrayNumbers = [];
arrayNumbers.push(1,2,3,4,5,6,7,8,9,10)
console.log(`Esercizio 14:`, arrayNumbers)


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
arrayNumbers.splice(9, 1, 100); 
console.log(`Esercizio 15:`,arrayNumbers)
