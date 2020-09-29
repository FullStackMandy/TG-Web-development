// Opdracht 9 //
function checkNumber9(){
    var input = document.getElementById("number9").value;
    if( input > 5 && input < 10){
        document.getElementById("label9").innerHTML = "Het ingevoerde getal is tussen 5 en 10";
    } else {
        document.getElementById("label9").innerHTML = "";
    }
    
}

// Opdracht 10 //
function checkNumber10(){
    var input = document.getElementById("number10").value;
    if( input >= 11 && input <= 20 ){
        document.getElementById("label10").innerHTML = "Het ingevoerde getal is gelijk aan 11 of groter dan 11 en is gelijk aan 20 of kleiner dan 20.";
    } else {
        document.getElementById("label10").innerHTML = "";
    }
    
}

// Opdracht 11 //
function checkNumber11(){
    var input = document.getElementById("number11").value;
    if( input == 21 || input == 23 ){
        document.getElementById("label11").innerHTML = "Het ingevoerde getal is gelijk aan 21 of is gelijk aan 23.";
    } else {
        document.getElementById("label11").innerHTML = "";
    }
}

// Opdracht 12 //
function checkNumber12(){
    var input = document.getElementById("number12").value;
    if( input > 30 && input < 35 || input > 40 && input < 45){
        document.getElementById("label12").innerHTML = "Het getal is tussen 30 en 35 of het getal is tussen 40 en 45";
    } else {
        document.getElementById("label12").innerHTML = "";
    }
}