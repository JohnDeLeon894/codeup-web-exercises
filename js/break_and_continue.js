(function () {

/*
* Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
* */

"use strict";
var int;

function wait(ms)
{
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
}

//console.log ("************************************************************ break and continue*********************");
// while(true){
//     int = prompt("Please enter an odd number between 1 and 50.");
//     if((int > 0) && (int<51)&& (int%2!==0)) break;
// }
//
//
// /*
// * Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
// * */
//
// for(var i=1; i<=50; i++){
//     wait(250);
//     if(i==int){
//         console.log("Woooops! Skipping " + int + "!");
//         //wait(1000*i);
//         continue;
//     }
//     if(i % 2 !==0){
//         console.log(i + ' is an odd number');
//         //wait(1000*i);
//     }
//
// }
//


var arr= [1,2,3,4,5,6,7,8,9,10,11,12];

arr.forEach(function (item, indx, array) {

    var x = item;
    array.forEach(function (value, index, array) {
        wait(50);
        console.log(x + " x " +value + " = " + x * value);
    })
})




}());