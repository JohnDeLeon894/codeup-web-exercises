(function () {
    


"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

/*

// function for processing input number

function processInputNumber(num){
    // declaring local variables
    var isEven;
    var numHunned = +num + 100;
    var numPosNeg;

    //check if neg or pos, odd or eve, or 0

    if (num == 0){

        numPosNeg = "";
        isEven = "neutral";

    }else if (num > 0){
        numPosNeg = "positive";
        if((+num % 2 === 0) && (+num !== 0)) {
            isEven = "even";
        }else {
            isEven = "odd";
        }
    }else {
        numPosNeg = "negative";
        if((+num % 2 === 0) && (+num !== 0)) {
            isEven = "even";
        }else {
            isEven = "odd";
        }
    }
    // change num to string
    var refNum = num.toString();
    // string together response
    var answer = refNum + " is a " + numPosNeg + " " + isEven + " number. Adding 100 to " + refNum + " gives you: " + numHunned + ".";
    // return response
    return answer;
}

if(confirm("Would you like to enter a number?")){
    var num = prompt("What number would you like to enter?");
    alert(processInputNumber(num));
}else{
    alert("Ok, maybe next time");
}

*/

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color){
    if(color=== 'blue'){
        return "Blue is the color of the Blueman group.";
    }else if(color==='red'){
        return "Red is the color of Redwing shoes.";
    }else if(color === 'cyan'){
        return "Cyan is, oddly enough, not the same color as cayenne peppers. Are they even pronounced the same?";
    }else {
        return "Is that even a color?";
    }
}

var colorList = ['red', 'blue', 'cyan', 'cucumber'];

// console.log(colorList.forEach(analyzeColor()));
console.log(analyzeColor(colorList[Math.floor(Math.random() * 4)]));



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function reanalyzeColor(color) {

    switch (color) {

        case "blue":
            return "Blue is the color of the Blueman group.";
            break;
        case "red":
            return "Red is the color of Redwing shoes.";
            break;
        case "cyan":
            return "Cyan is, oddly enough, not the same color as cayenne peppers. Are they even pronounced the same?";
            break;
        default:
            return "Is that even a color?";
            break;
    }
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userColor = prompt("Please enter a color");
alert(reanalyzeColor(userColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(lNum, totesPrice) {
    var perc;
    var postDisc;
    switch (lNum) {
        case 0:
            perc= 0;
            break;
        case 1:
            perc= .1;
            break;
        case 2:
            perc= .25;
            break;
        case 3:
            perc= .35;
            break;
        case 4:
            perc= .5;
            break;
        case 5:
            perc= 1;
            break;
    }
    postDisc= totesPrice - (totesPrice * perc);
    return postDisc;
}

var lNum = [0,1,2,3,4,5];
for(var i = 0; i <6; i++){
    var totesPrice = 100;
    console.log(calculateTotal(i, totesPrice));
}


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var purcahse = prompt("Please enter your total bill");

var totesDisc = calculateTotal(luckyNumber, purcahse);
totesDisc = totesDisc.toFixed(2);
alert("Your lucky number is " + luckyNumber + "! Price before discount: " + purcahse + ". Price after discount: " + totesDisc + "!");

})();