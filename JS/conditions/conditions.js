// Opdracht 1 //
function checkNumber1(){
    var input = document.getElementById("number").value;
    if( input === '3' ){
        document.getElementById("label").innerHTML = "Het ingevoerde getal is gelijk aan 3";
    } else {
        document.getElementById("label").innerHTML = ""
    }
}

// Opdracht 2 //
function checkNumber2(){
    var input = document.getElementById("number2").value;
    if( input > 4 ){
        document.getElementById("label2").innerHTML = "Het ingevoerde getal is groter dan 4";
    } else if( input < 4){
        document.getElementById("label2").innerHTML = ""
    }
}

// Opdracht 3 //
function checkNumber3(){
    var input = document.getElementById("number3").value;
    if( input >= 11 ){
        document.getElementById("label3").innerHTML = "Het ingevoerde getal is gelijk aan of groter dan 11";
    } else if( input <= 11){
        document.getElementById("label3").innerHTML = ""
    }
}
// Opdracht 4 //
function checkNumber4(){
    var input = document.getElementById("number4").value;
    if( input < 3 ){
        document.getElementById("label4").innerHTML = "Het ingevoerde getal is kleiner dan 3";
    } else if( input > 3){
        document.getElementById("label4").innerHTML = ""
    }
}

// Opdracht 5 zie html//
