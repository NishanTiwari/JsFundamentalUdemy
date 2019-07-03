// data types
/*
var firstName = "JHON";
console.log(firstName)
var lastName = "NAMER"
var age = 27; 
var fullAge = true; 
console.log(fullAge); 

var job; 
console.log(job);
job = "teacher"; 
console.log(job);

/***************************************
  variable mutation and type coercion  
 */

 // type coercion ( convert number, bool, in string is coercion )

 /*
 var firstName = "john"; 
var age = 22; 
console.log(firstName + " " + age ); 
var job, ismarried; 
job = 'teacher'; 
ismarried  = false; 
d(firstName + ' IS A ' +  age + ' years old school ' +  job + ' is he married? ' + ismarried )

//********** variable mutaion  ( change the values of variable)
*/


firstName = "John"
age = 'twenty eight'; 
job = 'driver'; 

alert(age+ " " + job) // send massage in the page 
var lastName = prompt('what is your last name?');// ask value from user and store it 
console.log( firstName + ' ' + lastName)



/*******************
 * Basic operatos
 */

/*
var now, yearJohn, yearMark; 
 now = 2019; 
 ageJohn = 28; 
 ageMark = 23; 

 // math Operations 
 var yearJohn = now  - ageJohn;
 var yearMark = now - ageMark;  
 console.log(yearJohn)
 console.log(yearMark)

 console.log (now + 2)
 console.log (now * 2)
 console.log (now / 10) 

 // logical operators

 var johnOlder = ageJohn > ageMark; 
console.log(johnOlder) ; 

// type of opearator
console.log(typeof johnOlder);
console.log(typeof ageJohn); 
console.log(typeof now); 


/********************************
 * operator Procendance 
 */
/*
var now  = 2019; 
var yearJohn = 1990; 
var fullAge  = 18; 
var isFullage = now - yearJohn >= fullAge; 
console.log (isFullage)

// Grouping 
var ageJohn = now - yearJohn; 
var ageMark = 35; 
var average = (ageJohn + ageMark) / 2; 
console.log(average) 

//multipal assignmet
var x, y; 
x = y = (3 + 5) * 4 - 6 ;
console.log(x,y); // multiple assignment calculate from right to left \
x += 7;
x++
x--
console.log(x)

/****
 *  if else statement
 */
/*
var firstName = 'john'; 
var status = 'single'; 
if (status === 'married')
{
  console.log(firstName + ' ' +  'is  married');
} else { 
  console.log ( firstName + ' IS GOING TO MARRIED SOON ');
}
