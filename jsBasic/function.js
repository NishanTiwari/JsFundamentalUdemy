
// function calculateAge (birthyear) {
//     return 2019 - birthyear;

// }
// var ageJohn =calculateAge(1993);
// console.log(ageJohn);

// var count = 0;

// function cc(card) {
//   // Only change code below this line


//   return "Change Me";
//   // Only change code above this line
// }

// // Add/remove calls to test your function.
// // Note: Only the last will display
// cc(2); cc(3); cc(7); cc('K'); cc('A');

// recon od or even

count = 0 //even 1  odd -1
function recon(num) {
    if (num % 2 === 0) {
        count += 1
    } else if (num % 2 !== 0) {
        count -= 1
    } else {

        return
    }
}

recon(2); recon(4); recon(6)
console.log('count', count)