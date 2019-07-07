// //ternary operatoror conditnoal operator 
var firstName = 'ram';
var age = 15;
age >= 16 ? console.log(firstName + " drink Beer")
    : console.log(firstName + " drink juice");

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink)

if (age >= 18) {
    var drink = 'beer';
} else {
    drink = 'juice';
}
console.log(drink);



// switch case statement
var day = "sunday"
switch (day) {
    case 0:
        day = "Sunday is boaring";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

console.log(day)