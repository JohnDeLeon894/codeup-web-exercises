//(function() {
"use strict";

/**
 * TODO:
 * Create an object with firstName and lastName properties that are strings
 * with your first and last name. Store this object in a variable named
 * `person`.
 *
 * Example:
 *  > console.log(person.firstName) // "Rick"
 *  > console.log(person.lastName) // "Sanchez"
 */

var person = {
    "firstName": "John",
    "lastName": "De Leon"
};
console.log(person.firstName);
console.log(person.lastName);

/**
 * TODO:
 * Add a sayHello method to the person object that returns a greeting using
 * the firstName and lastName properties.
 * console.log the returned message to check your work
 *
 * Example
 * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
 */
person.sayHello = function () {
    return console.log("Hello from " + person.firstName + "" + person.lastName + "!");
};

/** TODO:
 * HEB has an offer for the shoppers that buy products amounting to
 * more than $200. If a shopper spends more than $200, they get a 12%
 * discount. Write a JS program, using conditionals, that logs to the
 * browser, how much Ryan, Cameron and George need to pay. We know that
 * Cameron bought $180, Ryan $250 and George $320. Your program will have to
 * display a line with the name of the person, the amount before the
 * discount, the discount, if any, and the amount after the discount.
 *
 * Uncomment the lines below to create an array of objects where each object
 * represents one shopper. Use a foreach loop to iterate through the array,
 * and console.log the relevant messages for each person
 */

var shoppers = [
    {name: 'Cameron', amount: 180},
    {name: 'Ryan', amount: 250},
    {name: 'George', amount: 320}
];

function hEB_DiscountCalc(item) {

    // console.log("function called");
    var amount = item.amount;
    var hEB_postdiscount = amount.toFixed(2);
    var hEB_Discount = 0;
    var hEB_DiscountAmount= 0;
    if (amount > 199) {
        hEB_Discount = 0.12;
        hEB_DiscountAmount= amount*hEB_Discount;
        hEB_postdiscount = (amount - (amount * hEB_Discount)).toFixed(2);

    }
    var reply = "Purchase cost: $" + amount + "\n" + "Applied discount: " + "-"+ hEB_DiscountAmount + "%\n" + "Total: $" + hEB_postdiscount;
    console.log(reply);
    return reply;
}

shoppers.forEach(hEB_DiscountCalc);

/** TODO:
 * Create an array of objects that represent books and store it in a
 * variable named `books`. Each object should have a title and an author
 * property. The author property should be an object with properties
 * `firstName` and `lastName`. Be creative and add at least 5 books to the
 * array
 *
 * Example:
 * > console.log(books[0].title) // "The Salmon of Doubt"
 * > console.log(books[0].author.firstName) // "Douglas"
 * > console.log(books[0].author.lastName) // "Adams"
 */

var books = [];
// var books= [
//         {
//             "title": "The Sun Also Rises",
//             "author": {
//                 "firstName": "Ernest",
//                 "lastName": "Hemmingway"
//             }
//
//         },
//     //******next object
//         {
//            "title": " The Hunt For The Red Octover",
//            "author": {
//                "firstName": "Tom",
//                 "lastName": "Clancy"
//             }
//
//         },
//     //******next object
//         {
//            "title": "The Agony and the Ecstasy ",
//            "author": {
//                "firstName": "Irving",
//                 "lastName": "Stone"
//             }
//
//         },
//     //******next object
//         {
//             "title": "The 12th Planet",
//             "author": {
//                 "firstName": "Zacharia",
//                 "lastName": "Sitchin"
//             }
//
//         },
//     //******next object
//         {
//            "title": "Unholy Mourning",
//            "author": {
//                "firstName": "David",
//                 "lastName": "Lippincott"
//             }
//
//         }
//     ];

/**
 * TODO:
 * Loop through the books array and output the following information about
 * each book:
 * - the book number (use the index of the book in the array)
 * - the book title
 * - author's full name (first name + last name)
 *
 * Example Console Output:
 *
 *      Book # 1
 *      Title: The Salmon of Doubt
 *      Author: Douglas Adams
 *      ---
 *      Book # 2
 *      Title: Walkaway
 *      Author: Cory Doctorow
 *      ---
 *      Book # 3
 *      Title: A Brief History of Time
 *      Author: Stephen Hawking
 *      ---
 *      ...
 */

books.forEach(function (book, ind) {
    var title = book.title;
    var auth = book.author.firstName + " " + book.author.lastName;
    console.log("Book # " + ind + "\n Title: " + title + "\n Author: " + auth + "\n __________________");
    //return "Book # " + ind + "\n Title: " + title + "\n Author: " + auth + "\n __________________";
});

/**
 * Bonus:
 * - Create a function named `createBook` that accepts a title and author
 *   name and returns a book object with the properties described
 *   previously. Refactor your code that creates the books array to instead
 *   use your function.
 * - Create a function named `showBookInfo` that accepts a book object and
 *   outputs the information described above. Refactor your loop to use your
 *   `showBookInfo` function.
 */

/*
Book # 0
Title: The Sun Also Rises
Author: Ernest Hemmingway
__________________
Book # 1
Title:  The Hunt For The Red Octover
Author: Tom Clancy
__________________
Book # 2
Title: The Agony and the Ecstasy
Author: Irving Stone
__________________
Book # 3
Title: The 12th Planet
Author: Zacharia Sitchin
__________________
Book # 4
Title: Unholy Mourning
Author: David Lippincott
__________________
*/

function createBook(title, auth) {
    var authArr = auth.split(" ");
    //var books = [];
    var book = {};
    book.title = title;
    book.author = {};
    book.author.firstName = authArr[0];
    book.author.lastName = authArr[1];
    books.push(book);
    console.log(books);
}

createBook("The Sun Also Rises", "Ernest Hemmingway");
createBook("The Hunt for Red October", "Tom Clancy");
createBook("The Agony and the Ecstasy", "Irving Stone");
createBook("The 12th Planet", "Zacharia Sitcin");
createBook("Unholy Mourning", "David Lippincott");

function showBookInfo(book, ind) {
    if (ind === undefined) {
        ind = "";
    } else {
        ind = "Book # " + ind
    }
    var title = book.title;
    var auth = book.author.firstName + " " + book.author.lastName;
    console.log(ind + "\n Title: " + title + "\n Author: " + auth + "\n __________________");
}

books.forEach(showBookInfo);

/*Create a few beverage objects and assign values to each object for the following properties:

    - brandName
    - type
    - volumeInLiters
    - priceInCents
    - expirationDate
    - dateTimesOfLastSips
    - isOpen

  Define your objects using both literal syntax to create all properties and values at once and also try defining empty objects and assign property values in separate statements.*/
var bev1 = {
    "brandName": "Busted Sandal",
    type : "Beer",
    volumeInLiters: 0.47,
    priceInCents: 600,

};


//})();
