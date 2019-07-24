
// var count = 0;

// function cc(card) {
// debugger
//     count = 0 //even 1  odd -1
//     function recon(num) {
//         if (num % 2 === 0) {
//             count += 1
//         } else if (num % 2 !== 0) {
//             count -= 1
//         } else {
//             return
//         }
//     }

//     recon(2); recon(4); recon(6)
//     console.log('count', count);

//     //  calculate Birth Year

//     function calculateAge(birthYear) {
//         return 2018 - birthYear;
//     }

//     function yearUntilRetirement(year, firstName) {
//         var age = calculateAge(year)
//         var retirement = 65 - age;
//         if (retirement > 0) {
//             console.log(firstName + "retires in " + retirement + "years.");
//         }
//         else {
//             console.log(firstName + "is already retired")
//         }
//     }

//     yearUntilRetirement(1993, "John");
//     yearUntilRetirement(1948, "MANISH");
//     yearUntilRetirement(1967, "BISHAL");
//     yearUntilRetirement(1996, "Kami");


// function using swich statement¨

var whatDoYouDO = function (job, firstName) {
    switch (job) {
        case "teacher":
            return firstName + " teaches code to children"
        case "driver":
            return firstName + " drive the cab "
        case "designer":
            return firstName + " design beautiful website"
        default:
            return "looking for job"
    }
}
console.log(whatDoYouDO("teacher", "ram"));