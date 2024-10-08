/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let num1 = 10
let num2 = 12

if (num1 > num2) {
  console.log(num1)
} else num2 > num1
console.log(num2)

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let num3 = 5
if (num3 !== 5) {
  console.log("notequal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let num4 = 25
if (num4 % 5 === 0) {
  console.log("Divisibile per 5")
} else {
  console.log("Non divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let num5 = 16
let num6 = 29
if (num5 === 8 || num6 === 8 || num5 + num6 === 8 || num5 - num6 === 8) {
  console.log("Condizione raggiunta")
} else {
  console.log("Condizione non raggiunta")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 60
const discount = 10
if (totalShoppingCart >= 50) {
  console.log("Spedizione Gratuita")
} else console.log(totalShoppingCart + discount)

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let firstnum = 1
let secondnum = 2
let thirdnum = 3
let first, second, third
if (firstnum > secondnum && firstnum > thirdnum) {
  first = firstnum
  if (secondnum > thirdnum) {
    second = secondnum
    third = thirdnum
  } else {
    second = thirdnum
    third = secondnum
  }
} else if (secondnum > firstnum && secondnum > thirdnum) {
  first = secondnum
  if (firstnum > thirdnum) {
    second = firstnum
    third = thirdnum
  } else {
    second = thirdnum
    third = firstnum
  }
} else {
  first = thirdnum
  if (firstnum > secondnum) {
    second = firstnum
    third = secondnum
  } else {
    second = secondnum
    third = firstnum
  }
}
console.log(first, second, third)
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let num10 = 10
if (typeof num10 === "number") {
  console.log("Il valore è un numero")
} else {
  typeof num10 !== "number"
  console.log("Il valore non è un numero")
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let num11 = 12
if (num11 % 2 === 0) {
  console.log("Il numero è pari")
} else {
  console.log("Il numero è dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
let val = 7
if (val < 10) {
  console.log("Meno di 10")
} else if (val > 5) {
  console.log("Maggiore di 5")
} else {
  val >= 10
  console.log("Uguale a 10 o maggiore")
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
}
me.city = "Toronto"

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills[2]

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let numbers = []
numbers.push(1)
numbers.push(2)
numbers.push(3)
numbers.push(4)
numbers.push(5)
numbers.push(6)
numbers.push(7)
numbers.push(8)
numbers.push(9)
numbers.push(10)
console.log(numbers)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

numbers[9] = 100
