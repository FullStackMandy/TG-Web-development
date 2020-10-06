/* Opdracht 9, Als het ingevoerde getal ​is groter dan​ 5 ​en​ ​is kleiner dan​ 10, dan toon je op het label:
        “Het ingevoerde getal is tussen 5 en 10”.
 */
function checkNumber9() {
    var input = document.getElementById("number9").value;
    if (input > 5 && input < 10) {
        document.getElementById("label9").innerHTML = "Het ingevoerde getal is tussen 5 en 10";
    } else {
        document.getElementById("label9").innerHTML = ""
    }
}

/* Opdracht 10, Als het ingevoerde getal ​is gelijk aan​ 13 o​f​ ​is groter dan​ 13 en het ingevoerde getal i​s
        gelijk aan​ 20 of k​leiner dan​ 20, dan toon je op het label: “Het ingevoerde getal is gelijk aan 11 of groter
        dan 11 en is gelijk aan 20 of kleiner dan 20".
*/
function checkNumber10() {
    var input = document.getElementById("number10").value;
    if (input >= 13 && input <= 20) {
        document.getElementById("label10").innerHTML = "Het ingevoerde getal is gelijk aan 13 of groter dan 13 en is gelijk aan 20 of kleinder dan 20";
    } else {
        document.getElementById("label10").innerHTML = ""
    }
}

/* Opdracht 11, Als het ingevoerde getal ​is gelijk aan​ 21 o​f h​et ingevoerde getal ​is gelijk aan​ 23 , dan
        toon je op het label: “Het ingevoerde getal is gelijk aan 21 of is gelijk aan 23.”.
 */
function checkNumber11() {
    var input = document.getElementById("number11").value;
    if (input == 21 || input == 23) {
        document.getElementById("label11").innerHTML = "Het ingevoerde getal is gelijk aan 21 of is gelijk aan 23";
    } else {
        document.getElementById("label11").innerHTML = ""
    }
}
/* Opdracht 12, Als het ingevoerde getal ​groter is dan​ 30 e​n​ ​kleiner is dan​ 35 o​f​ als het ingevoerde
        getal groter is dan​ 40 o​f kleiner is dan ​45,toon dan op het label:“het getal is tussen 30 en 35 of het getal is tussen 40 en
        45.”
 */
function checkNumber12() {
    var input = document.getElementById("number12").value;
    if (input > 30 && input < 35 || input > 40 && input < 45) {
        document.getElementById("label12").innerHTML = "Het ingevoerde getal is tussen 30 en 35 of het getal is tussen 40 en 45";
    } else {
        document.getElementById("label12").innerHTML = ""
    }
}

