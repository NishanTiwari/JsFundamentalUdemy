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
