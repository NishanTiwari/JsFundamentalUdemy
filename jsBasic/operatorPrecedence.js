/********************************
 * operator Procendance 
 */

var now = 2019;
var yearJohn = 1990;
var fullAge = 18;
var isFullage = now - yearJohn >= fullAge;
console.log(isFullage)

// Grouping 
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average)

//multipal assignmet
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y); // multiple assignment calculate from right to left \
x += 7;
x++
x--
console.log(x)