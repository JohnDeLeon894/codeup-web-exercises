//(function () {

/*
* Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
* */
var int;

while(true){
    int = prompt("Please enter an odd number between 1 and 50.");
    if((int > 0) && (int<51)&& (int%2!==0)) break;
}


/*
* Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
* */

for(var i=1; i<=50; i++){
    if(i==int){
        console.log("Woooops! Skipping " + int + "!");
        continue;
    }
    if(i % 2 !==0){
        console.log(i + ' is an odd number');

    }

}










//}());