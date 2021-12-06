/*1>John and Mike both play basketball in different teams. In the latest 3 games, John's team scored
89, 120, 103 points, while Mike's team scored 116, 94, and 123 points.
1>Calculate the average score for each team
2>Decide which team wins in average and print the winner
*/

/*
var avgJohnScore = (89+120+103)/3;
console.log(avgJohnScore);
var avgMikeScore = (116+94+123)/3;
console.log(avgMikeScore);
if(avgJohnScore>avgMikeScore){
    console.log("John's team wins by"+" "+avgJohnScore+" "+"points");
}else{
    console.log("Mike's team wins by"+" "+avgMikeScore+" "+"points");
}
*/

/*2>(continue with above quesition) Marry also play basketball and her team scored 97, 134, 105 points
like before log the winner to the console */
var avgJohnScore = (89+120+103)/3;
console.log(avgJohnScore);
var avgMikeScore = (116+94+123)/3;
console.log(avgMikeScore);
var avgMarryScore = (97+134+105)/3;
console.log(avgMarryScore);
if(avgJohnScore>avgMikeScore && avgJohnScore>avgMarryScore){
    console.log("John's team wins by"+" "+avgJohnScore+" "+"points");
}else if(avgMikeScore>avgMarryScore && avgMikeScore>avgJohnScore){
    console.log("Mike's team wins by"+" "+avgMikeScore+" "+"points");
}else if(avgMarryScore>avgJohnScore && avgMarryScore>avgMikeScore){
    console.log("Marry's team wins by"+" "+avgMarryScore+" "+"points");
}else{
    console.log("There's a draw");
}