/*BONUS 1 (grocery list APP)
Allow the user to enter a certain number of items and then display them on the page.
- for each item, prompt the user for the name of the item, and store in an array of items.
- for each item in the array of items create a new li element with the correct text and append to the DOM
- for a simpler alternative, build an entire HTML string and set the innerHTML of an existing <ul> element

BONUS 2 (custom styling)
In the same dom-bonuses.html page, allow the user to select custom styling for the page by setting the background color,
font color, and font-family for the page. Add additional style changes to have fun and experiment!

BONUS 3 (profile create form)
Create a form that will allow the user to enter the following information in text inputs:
firstName
lastName
username
email
address
age
shortBio
Create a function, createUserProfileDiv() that when run will grab all data in the form inputs and build a div with the
user's entered information and append it to the page. Test it by running it in the JS console.
*/

//(function () {

var groceryList=[];

function listBuilder() {
    var ulList = document.createElement("ul");
    ulList.setAttribute("class", "grocery-list");
}

function addToList(item) {
    var liList = document.createElement("li");

}



//})();

