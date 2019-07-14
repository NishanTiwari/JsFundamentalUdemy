

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
 😀
*/
var mikeAverageScore= (116+94+123)/ 3;
var maryAverageScore= (97+134+105)/3;
var johnAverageScore= (89 + 120 + 103)/3;

console.log(johnAverageScore,mikeAverageScore,maryAverageScore)
// compare mike with john
if (mikeAverageScore> johnAverageScore){
    console.log( " mike has highest score" + " "+ mikeAverageScore );
}
else if ( johnAverageScore>mikeAverageScore){
      console.log( "jones has highest score "+ " " + johnAverageScore);
}
else { console.log("They play draw"  )   }


// mike , john and marry comparison  and draw situation 


if (mikeAverageScore> maryAverageScore && mikeAverageScore> johnAverageScore){
    console.log( " mike has highest score" + " "+ mikeAverageScore );
}
else if ( johnAverageScore>mikeAverageScore && johnAverageScore> maryAverageScore){
      console.log( "jones has highest score "+ " " + johnAverageScore);
}
else if (maryAverageScore >johnAverageScore && maryAverageScore> mikeAverageScore ){
    console.log(" mary has highest score " + " " + maryAverageScore);
}

else { console.log("Match is draw")   }