//Opdracht 1-4//
// 1. Aan maken van een array. met [] geef je aan dat je een lege lijst wilt maken.
let numbers = [];
// 2. Toevoegen van producten in de array
numbers = [10, 2, 7, 3, 4, 5, 6, 8, 9, 1];
// 3. de array loggen. ​
console.log(numbers);

let fruits = [];
fruits = ["Appel", "Peer", "Citroen", "Banaan", "Mango"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[3]);

//Opdracht 5//
// random index van numbers array
let randomIndex = Math.floor(Math.random() * numbers.length);
// random number uit numbers array
let randomNumber = numbers[randomIndex];
// log het random nummer uit numbers array
console.log(randomNumber);
// log het fruit met index randomNumber (soms undefined)
console.log(fruits[randomNumber - 1]);

// modulo; tel fruit
let fruitcount = fruits.length;
// pas modulo toe op randomNumber (%fruitcount)
let modulo = (randomNumber % fruitcount);

// log random fruit
console.log(fruits[modulo]);


//Opdracht 6
//push(): voeg een fruit to aan fruits array
fruits.push("Aardbei");
console.log(fruits);

//pop(): verwijder laatste element van array (en return de waarde)
var lastone = fruits.pop();
console.log(lastone);
console.log(fruits);

//unshift(): voeg element toe aan begin van array
fruits.unshift("Aardbei");
console.log(fruits);

//shift(): verwijder eerste element van array (en return de waarde)
var firstone = fruits.shift();
console.log(firstone);
console.log(fruits);

//slice(): haal een aantal elementen uit array
var sliced = fruits.slice(1, 3);
console.log(sliced);

//splice(), haal een aantal elementen uit array en vervang door andere(n)
var spliced = fruits.splice(1, 2, "Kiwi", "Peer", "Mandarijn", "Aardbei");
console.log(spliced);
console.log(fruits);

//sort(), sorteer
fruits.sort();
console.log(fruits);

//Opdracht 7
console.log(fruits.length);

//Opdracht 8
fruits[6] = "sinaasappel"; // index 6 = peer
console.log(fruits);

//Opdracht 9
// index 0 = aardbei
// index 4 = mandarijn
fruits[0] = fruits[4];
fruits[4] = "Aardbei";
console.log(fruits);