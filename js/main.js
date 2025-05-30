/*Consegna:
Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda: Come faccio a sapere se un numero è divisibile per? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" 

Scomponiamo il problema:

programma che stampi i numeri da 1 a 100

-devo utilizzare il for loop visto oggi (tutte le variabili devono essere let)
- poi mi serivirà una funzione "if/else" per i vari multipli che sono:     
- per tutti i "multipli" devo usare il % modulo 
- multipli di 3 stampi “Fizz” al posto del numero
- multipli di 5 stampi Buzz
- sia multipli di 3 che di 5 stampi FizzBuzz

sicuramnete con più di singolo if 
 */

/*

1 
2
3 - Fizz
4
...
15 - FizzBuzz
16
17
18 - Fizz

*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + " - FizzBuzz"); // entrambi
  } else if (i % 3 == 0) {
    console.log(i + " - Fizz");
  } else if (i % 5 == 0) {
    console.log(i + " - Buzz");
  } else {
    console.log(i);
  }
}
