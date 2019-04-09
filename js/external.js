/*
// external JS file for External_js.html

"use strict";

console.log('Hellow fomr external JS!!!!!!');

alert("Welcome to my website!");

var favColor= prompt("what is your favorite color?");

while (favColor.length < 2) {
    favColor= prompt("what is your favorite color?");
}

alert( favColor + " is my favorite color too!!!");

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

//var = days rented per movie
var lilMer = prompt("How many days did you keep The little Mermaid?");
var broBear = prompt("How long did you keep Brother Bear?");
var hurc = prompt("how ,many days did you keep Hercules?");

function willPay(x, y, z) {
    x=Number(x);
    y=Number(y);
    z=Number(z);
    var price = (x+y+z)*3;
    price = price.toFixed(2);
    var rPrice = "The price of the rentals is $" + price;

    return rPrice;

}

var alertMessage_1= willPay(lilMer, broBear, hurc);

alert(alertMessage_1);

// console.log(willPay(lilMer, broBear, hurc)); code for previous lesson

//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

function income(fB, aZon, gOog) {

    var fbPay = fB * 350;
    var azonPay = aZon * 380;
    var googPay = gOog * 400;

    var totesIncome = fbPay + azonPay + googPay;
    var payArray = [fbPay, azonPay, googPay, totesIncome ];

    fbPay = fbPay.toFixed(2);
    azonPay = azonPay.toFixed(2);
    googPay =  googPay.toFixed(2);
    totesIncome = totesIncome.toFixed(2);

    // console.log(payArray);
    //
    //
    // for (var i = 0; i< payArray.length; i++ ){
    //
    //     payArray[i]= payArray[i].toFixed(2);
    //
    //     console.log(payArray[i]);
    //     switch (payArray[i]) {
    //
    //         case fbPay:
    //             fbPay = payArray[i];
    //             console.log(fbPay);
    //             break;
    //
    //     }
    //
    // }
    // console.log(payArray);




    var incomeReport = "Total earnings for each company: Facebook = $" +fbPay + " Google: $" + googPay + " Amazon: $" + azonPay + ". Total earnins this week = $" + totesIncome + ".";
    return incomeReport;

}

var fbHrs= prompt("How many hours did you work for Facebook?");
while(fbHrs<0){fbHrs= prompt("How many hours did you work for Facebook?");}

var azHrs= prompt('How many hours did you work for Amazon?');
while(azHrs<0){azHrs= prompt("How many hours did you work for Facebook?");}
var gooHrs= prompt('How many hours did you work for Google?');
while(gooHrs<0){gooHrs= prompt("How many hours did you work for Facebook?");}

var totesPay = income(fbHrs, azHrs, gooHrs);
alert (totesPay);

// console.log(income(10, 4, 6)); code from previous exercise

/!* A student can be enrolled to a class only if the class is not full and the class schedule does not conflict with her current schedule.
*!/

function canEnroll(nStudents, available) {

    if (nStudents >= 0) {

        if (available) {
            var x = 22;
            if (nStudents >= x) {
                var rejectMessage = "We already have " + nStudents + ". Sorry, we are at max student capacity";
                return rejectMessage;
            } else {
                var acceptMessage = "Congratulations! We have room for you!";
                return acceptMessage;
            }
        }else {
            var rejectMessage = "Maybe you can dedicate more time next year";
            return rejectMessage;
        }
    }
    else {return -1;}
};

var nStudents = Math.floor(Math.random() * 30);
var bConflict = confirm('Will you be able to dedicate 40 hrs + a week for school?');

var available = canEnroll(nStudents, bConflict);

alert(available);


/!*
var testArray=[ 12, 24, -9, 0];

for(i=0; i < 4; i++ ) {

    // console.log(canEnroll(testArray[i])); resolution for previous lesson.*!/

//}
//    A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

function offerValid(nItems, expired, premium) {
    if ((premium && expired) || ((nItems>2)&&expired)){
        var vOffer= "the offer is valid";
    }else{
        vOffer = "The offer is not valid";
    }

    return vOffer;
}

var nItems = prompt('How many items did you purchase?');
    if (isNaN(nItems)){
        nItems = prompt('Please enter the Number of items you purchased?');
    }
    var premium= confirm('Are you a premium member?');

    var expired= confirm('Is the offer expired?');

    var oOffer= offerValid(nItems, expired, premium);
    alert(oOffer);

/!*
Solution to previous assignment.
var testArray=[ 12, 24, -9, 0];

for(var i=0; i < 4; i++ ) {

    console.log(offerValid(testArray[i]));

}
*!/
* Fizz Buzz: log all numbers from 1 - 100
–    if divisible by 3 log “Fizz"
–    if divisible by 5 log “Buzz"
–    if divisible by 3 and 5 log “FizzBuzz”
–    else, log the current number
*/
(function () {


})();
