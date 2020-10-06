//Opdracht 13, vertaal van getallen naar maanden. Als je het getal 1 invoerd, dan toont het scherm Januari//

function translateMonth() {
    var input = document.getElementById('number').value;
    var months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'Juli',
        'August',
        'September',
        'Oktober',
        'November',
        'December'
    ];
    document.getElementById('translationMonth').innerHTML = months[(input - 1)];
}
//Opdracht 14, maak bovenstaande Array opdracht nu met een Switch aan//

function translateMonthSwitch() {

    var input = document.getElementById('number2').value;
    var output = 'Geef een nummer van een maand (1-12)';

    switch (parseInt(input)) {
        case 1:
            output = 'January';
            break;
        case 2:
            output = 'February';
            break;
        case 3:
            output = 'March';
            break;
        case 4:
            output = 'April';
            break;
        case 5:
            output = 'May';
            break;
        case 6:
            output = 'June';
            break;
        case 7:
            output = 'Juli';
            break;
        case 8:
            output = 'August';
            break;
        case 9:
            output = 'September';
            break;
        case 10:
            output = 'Oktober';
            break;
        case 11:
            output = 'November';
            break;
        case 12:
            output = 'December';
            break;

    }

    document.getElementById('translationMonth2').innerHTML = output;
}