* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
 😀
*/

var   markMass = 78; // kg 
var   markHeight= 1.69; // metre
var    johnMass = 792; 
var   johnHeight= 1.95; 

var bimMarks = ( markMass / (markHeight * markHeight)); 
console.log(bimMarks); 

var bimJohn = (johnMass / (johnHeight * johnHeight)); 
console.log(bimJohn); 
if ( bimMarks > bimJohn){
    console.log(" Marks's BIM higher then John" );
}
else {
    console.log(" John's BIM higher then marks");
}
