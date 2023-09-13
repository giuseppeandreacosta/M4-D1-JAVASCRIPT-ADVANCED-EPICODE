// Crea una funzione che controlli due numeri interi,ritorna 'true' se uno dei due è 50 o se la somma dei due è 50.

function integers(number1, number2) {
  if (number1 === 50 || number2 === 50 || number1 + number2 === 50) {
    return true;
  } else {
    return false;
  }
}
console.log(integers(20, 20));

// Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata.

const strings = "Charmeleon";                         //.slice restituisce una copia superficiale di un array in base all'indice di inizio/fine fornito dall'utente
const position = 9;

function removeCharacter(strings, position) {
  return strings.slice(0, position) + strings.slice(position + 1);
}
console.log("Results:" + " " + removeCharacter(strings, position));

// Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna 'true' se rispecchiano queste condizioni,altrimenti ritorna 'false'.

function controlNumbers(num1, num2) {
  if (
    (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) ||
    (num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100)
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(controlNumbers(110, 80));

// Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con "Los" o "New", altrimenti ritorna 'false'.

const city = "Palermo";

function controlCity(city) {
  if (city.startsWith("Los") || city.startsWith("New")) {       //.startsWith Verifica se la stringa inizia con una determinata stringa di destinazione.
    return city;
  } else {
    return false;
  }
}
console.log("Results:" + " " + controlCity(city));

// Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L'array deve essere passato come paramentro.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
console.log("Results:" + " " + sumArray(array));

// Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene,ritorna 'true', altrimenti ritorna 'false'.
const arrays= [2,4,5,7,9]


function controlArray(arrays) {
  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i] === 1 || arrays[i] === 3) {
      return false;
    }
  }
  return true;
} console.log("Results:" + " " + controlArray(arrays))

// Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come paramentro. 
// Angolo acuto : meno di 90° => ritorna "acuto";
// Angolo ottuso : tra i 90° e i 180° => ritorna "ottuso";
// Angolo retto : 90° => ritorna "retto";
// Angolo piatto : 180° => ritorna "piatto"

const grades = 80;


function typeOfAngles(grades) {
    if (grades < 90) {
        return "acute angles";
    } else if (grades === 90) {
        return "right angles";
    } else if (grades > 90 && grades < 180) {
        return "obtuse angles";
    } else if (grades === 180) {
        return "straight angle";
    } else {
        return "Invalid grades";
    }
} console.log("Type of Angles:" + " " + typeOfAngles(grades))

// Crea una funzione che crei un acronimo a partire da una frase. Es. "Fabbrica Italiana Automobili Torino" deve tornare "FIAT".
let phrase = "Fabbrica Italiana Automobili Torino";

function createAcronym(phrase) {
    
    let words = phrase.split(' ');                          // .split :crea una matrice di sottostringhe
    let acronym = '';                                       // .charAT restituisce un carattere di una stringa in base alla posizione desiderata
    for (let i = 0; i < words.length; i++) {                // .toUpperCase : per rendere maiuscolo
        acronym += words[i].charAt(0).toUpperCase();
    }
    return acronym;
}
console.log("Acronym: " + createAcronym(phrase));



//EXTRA  

//1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.
// const stringa = "Gonna catch em all";
// function character(stringa) {
//     const charMap = {};
//     let maxCharValue = 0;
//     let maxChar = '';

//     for(let i = 0; i < stringa.length; i++) {
//         let char = stringa[i];
//         if(charMap.hasOwnProperty(char)) {
//             charMap[char]++;
//         } else {
//             charMap[char] = 1;
//         }
//     }

//     const keys = Object.keys(charMap);
//     for(let i = 0; i < keys.length; i++) {
//         let char = keys[i];
//         if(charMap[char] > maxCharValue) {
//             maxCharValue = charMap[char];
//             maxChar = char;
//         }
//     }

//     return maxChar;
// }

// console.log(character(stringa));



// 2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, ritorna true , altrimenti ritorna `false`.


// 3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.
//Per esempio, partendo da “cartine” e [”carenti”, “incerta”, “espatrio”], il valore ritornato deve essere [”carenti”, “incerta”].


//4. Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è.


//5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981


//6. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini.

