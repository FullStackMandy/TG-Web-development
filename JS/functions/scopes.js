('-- opdracht 1 -- :')
function carPrint() {
    const carBrand = "Volvo";
}
console.log(carBrand);

// error gelogd, 
// en script wordt onderbroken
// carBrand variable kan niet worden gevonden
// carBrand is local voor functie carPrint()


('-- opdracht 2 -- :')
let carName;
function printCar() {
    carBrand = "Volvo";
}
console.log(carBrand);

// error gelogd, 
// en script wordt onderbroken
// carBrand variable kan niet worden gevonden
// carBrand is local voor functie carPrint()


('-- opdracht 3 -- :')
function printCar() {
    carBrand = "Volvo";
}
printCar();
console.log(carBrand);

// "Volvo" wordt gelogd
// Omdat eerst een functie wordt aangeroepen die een global variable zet: "carBrand"
// ook al is deze niet eerst gedefinieerd als global
// schijnbaar wordt "carBrand" een global variable omdat hij niet local in de functie wordt declared

('-- opdracht 4 -- :')
function printCar() {
    carBrand = "Volvo";
    return function (type) {
        console.log(carBrand + " " + type);
    }
}
const car = printCar();
car("v40");

// "Volvo v40" wordt gelogd
// car is een functie waar een local variable "type" aan kan worden toegekend
// "carBrand" is een global variable zoals in vorige opdracht die wordt declared op het moment dat de functie aan "car" wordt toegekend
