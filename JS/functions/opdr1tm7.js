// Opdracht 1: Schrijf een functie die de tekst “hello world” in de console uitprint. 

function testGreeting() {
    var greeting = "Hello world";
    console.log(greeting);
}
testGreeting();


// Opdracht 2: Schrijf een functie waarbij je een tekst mee kan geven aan de functie. 

function logText(text) {
    console.log(text);
}
logText("Hello world");


// Opdracht 3: Schrijf een functie waarbij je een getal mee kan geven aan de functie.

function logGetal(a) {
    console.log(a);
}
logGetal(7);

// Opdracht 3-a, aanvulling voorbeeld mogelijkheden:

function logGetal(a, b, c) {
    console.log(a);
}
logGetal(7, 'jj', 6);


// Opdracht 4:Schrijf een functie die twee getallen met elkaar vermenigvuldigt 
//en geef de waarde van de vermenigvuldiging terug.

function vermenigvuldigGetal(a, b) {
    console.log(a * b);
}
vermenigvuldigGetal(3, 3);


// Opdracht 5 en 6:Schrijf een functie waarbij je een naam kan meegeven aan de functie. 
//De functie moet vervolgens controleren of de naam een bekende is.

function showName() {
    // een functie waarbij je een naam kan meegeven aan de functie:
    var input = document.getElementById('name').value;
    // Als het een bekende is, dan toon je het volgende tekst op het scherm:
    var known = 'Dit is een bekende van ons: ';
    // Als het ​niet ​een bekende is, dan toon je het volgende tekst op het scherm
    var unknown = 'Onbekend in ons systeem!';
    var output = unknown;
    // De namen die bekend zijn:
    var names = [
        "john",
        "olly",
        "mo",
        "hendrik",
        "tony"
    ];
    // De functie moet vervolgens controleren of de naam een bekende is:
    if (names.includes(input.toLowerCase())) {
        // “Dit is een bekende van ons: <naam die je aan de functie hebt meegegeven>”.
        output = known + input;
    }
    // toon je het volgende tekst op het scherm:
    document.getElementById('showName').innerHTML = output;
}



// We gaan de applicatie uitbreiden! Je hebt een functie geschreven waarbij je zelf een naam meegeeft aan de functie.
// Nu willen we dat de naam random gekozen wordt. We gaan gebruik maken van Math.random() en Math.round() functie. 

// Schrijf nu een functie die een random naam teruggeeft. Math.random() geeft een getal terug. Zorg ervoor dat getal en naam samenhang hebben. 
// Bijvoorbeeld getal 1 geeft aan dat het “John” is. Hieronder zie je de getallen en de namen die samenhang met elkaar hebben.



let namesArray = [
    "John",
    "Oly",
    "Mo",
    "Hendrik",
    "Tony",
    "Irus",
    "Jan",
    "Peter",
];

let randomName = Math.floor(Math.random() * namesArray.length);
console.log(namesArray[randomName])

// arrow function
randomName = () => namesArray[Math.floor(Math.random() * namesArray.length)];

console.log(randomName());

//Opdracht 7, zie html file//