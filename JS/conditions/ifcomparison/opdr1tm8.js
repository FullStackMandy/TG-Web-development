/* Opdracht 1, Als het ingevoerde getal ​is gelijk aan​ 3, dan toon je op het label: “Het ingevoerde
getal is gelijk aan 3”.
 */
function checkNumber1() {
    var input = document.getElementById("number").value;
    if (input === '3') {
        document.getElementById("label").innerHTML = "Het ingevoerde getal is gelijk aan 3";
    } else {
        document.getElementById("label").innerHTML = ""
    }
}

/* Opdracht 2,Als het ingevoerde getal ​is groter dan​ 4, dan toon je op het label: “Het ingevoerde
getal is groter dan 4”.
*/
function checkNumber2() {
    var input = document.getElementById("number2").value;
    if (input > 4) {
        document.getElementById("label2").innerHTML = "Het ingevoerde getal is groter dan 4";
    } else if (input < 4) {
        document.getElementById("label2").innerHTML = ""
    }
}

/* Opdracht 3, Als het ingevoerde getal ​is gelijk aan​ en i​ s groter dan​ 11, dan toon je op het label:
“Het ingevoerde getal is gelijk aan 11 of groter dan 11.”.
 */
function checkNumber3() {
    var input = document.getElementById("number3").value;
    if (input >= 11) {
        document.getElementById("label3").innerHTML = "Het ingevoerde getal is gelijk aan of groter dan 11";
    } else if (input <= 11) {
        document.getElementById("label3").innerHTML = ""
    }
}
/* Opdracht 4, Als het ingevoerde getal ​is kleiner dan​ 3, dan toon je op het label: “Het ingevoerde
getal is kleiner dan 3”.
 */
function checkNumber4() {
    var input = document.getElementById("number4").value;
    if (input < 3) {
        document.getElementById("label4").innerHTML = "Het ingevoerde getal is kleiner dan 3";
    } else if (input > 3) {
        document.getElementById("label4").innerHTML = ""
    }
}

// Opdracht 5 zie html//
// Opdracht 6 zie html//
// Opdracht 7 is de else if statement, geen inhoud aan het label//
// Opdracht 8 zie html//