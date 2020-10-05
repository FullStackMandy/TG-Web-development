//Eerste onderdeel van datatypes is:undefined en getallen toekennen aan variabelen
//Opdracht 1, maak een variabele aan met let en noem het "getal1", ken geen waarde toe aan de variabele.
let getal1 = "";
//Print console.log(“getal1 ” + getal1);.
console.log("getal1 " + getal1);//output getal1

//Opdracht 2, idem opdracht 1 maar dan met getal2 en var const
const getal2 = 6;
console.log("getal2 " + getal2);//output getal2 6
// Ken nu een nummer toe aan de variabele.

//Opdracht 3, idem opdracht 1, maar dan met getal3
let getal3 = 3;
console.log("getal3 " + getal3);//output getal3 3

//Opdracht 4, idem opdracht 3, maar het nummer 3 wordt gewijzigd in het nummer 5
getal3 = 5;
console.log("getal3 " + getal3);//output getal3 5

//Tweede onderdeel van datatypes is: verschillende datatypes herkennen
//Opdracht 5, let var naam datatype, waarde var true,console.log(“datatype ” + typeof datatype);
let dataType = true;
console.log("datatype " + typeof dataType);//output datatype boolean
//Nu met waarde false, wat is dan de output
dataType = false;
console.log("datatype " + typeof dataType);//output hetzelfde, want boolean = true of  false

//Opdracht 6, hoe herken je dat een waarde: string, number, bigInt of symbol is
//Antwoord, zie html file. De voorbeelden in js volgen nog...

//Derde onderdeel van datatypes is: wat je met numbers kan doen
//Opdracht 7,
var price1 = 6;
var price2 = 8;
var total = price1 + price2;
document.getElementById("demo").innerHTML =
    "The total is: " + total;
console.log(total);

var price1 = 8;
var price2 = 6;
var total = price1 - price2;
document.getElementById("demo2").innerHTML =
    "The total is: " + total;
console.log(total);

var price1 = 24;
var price2 = 2;
var total = price1 * price2;
document.getElementById("demo3").innerHTML =
    "The total is: " + total;
console.log(total);

var price1 = 2.66;
var price2 = 2;
var total = price1 / price2;
document.getElementById("demo4").innerHTML =
    "The total is: " + total;
console.log(total);

//Opdracht 8, antwoord van de volgende som:3+5*10/2? en dan loggen
var price1 = 3 + 5;
var price2 = 10 / 2;
var total = price1 * price2;
document.getElementById("demo5").innerHTML =
    "The total is: " + total;
console.log(total);

//Opdracht 9, copieer de code en log
let number = 3;
number++;
/*let total = number++;
document.getElementById("demo6").innerHTML =
    "The total is: " + number++;*/
console.log(number++);

let numberExpl2 = 3;
numberExpl2--;
console.log(numberExpl2--);

let numberExpl3 = 3;
const sum = numberExpl3++ + 2;
console.log(sum);

let numberExpl4 = 3;
const sum2 = ++numberExpl4 + 2;
console.log(sum2);

//Opdracht 10, code en loggen
let numberExpl5 = 3;
numberExpl5 += 4;
console.log(numberExpl5);
//Dit is een andere manier om bovenstaande som op te schrijven
let numberExpl6 = 3;
let numberExpl7 = 4;
const add = numberExpl6 + numberExpl7;
console.log(add);

//Opdracht 11, code en loggen
let numberA = 3;
numberA += 4;
numberA -= 2;
numberA /= 5;
numberA *= 4;
console.log(numberA);

// Het vierde onderdeel, wat kan je met een string doen
//Opdracht 12, code en loggen
var vnaam1 = "Anna";
var anaam2 = "Bakker";
var output = "vnaam" + "anaam";
document.getElementById("demo7").innerHTML =
    "The output is: " + output;
console.log(output);

// Opdracht 13 //
var cijfer1 = "3";
var cijfer2 = 3;
var combinedText = "3" + 3;
document.getElementById("demo8").innerHTML =
    "Combined text is: " + combinedText;
console.log(combinedText);

//Opdracht 14, string single en double quotes, zie html

//Opdracht 15,
let text = "text";
text += "another text";
console.log(text)
//Ander manier van schrijven;
let textB = "text";
let textC = "another text";
console.log(textB + textC);

//Het vijfde onderdeel,Built in methodes
//Opdracht 16, voorbeelden van de html tekst volgen nog