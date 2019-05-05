//(()=>{
"use strict";
// Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.
const users = [
	{
		id: 1,
		name: 'ryan',
		email: 'ryan@codeup.com',
		languages: ['clojure', 'javascript'],
		yearsOfExperience: 5
	},
	{
		id: 2,
		name: 'luis',
		email: 'luis@codeup.com',
		languages: ['java', 'scala', 'php'],
		yearsOfExperience: 6
	},
	{
		id: 3,
		name: 'zach',
		email: 'zach@codeup.com',
		languages: ['javascript', 'bash'],
		yearsOfExperience: 7
	},
	{
		id: 4,
		name: 'fernando',
		email: 'fernando@codeup.com',
		languages: ['java', 'php', 'sql'],
		yearsOfExperience: 8
	},
	{
		id: 5,
		name: 'justin',
		email: 'justin@codeup.com',
		languages: ['html', 'css', 'javascript', 'php'],
		yearsOfExperience: 9
	}
];

//Use .filter to create an array of user objects where each user object has at least 3
// languages in the languages array.
let lang3 = [];
let emails =[];
const trheeLangFinder = users.filter(n =>  (n.languages.length>=3)? lang3.push(n):"".log);
// console.log(lang3);
// console.log(trheeLangFinder);

//Use .map to create an array of strings where each element is a user's email address

const emailFinder = users.map((user) => emails.push(user.email));
// console.log(emails);

//Use reduce to get the total years of experience from the list of users. Once you get the
// total of years you can use the result to calculate the average.

const avExperience = users.reduce((years, aveExp) => {
	//console.log(aveExp.yearsOfExperience);
	return (aveExp.yearsOfExperience + years)/users.length;
}, 0);
// console.log(avExperience);

//Use reduce to get the longest email from the list of users.
const largestEmail = users.reduce((lrgEmail, usrEmail) => {
	//console.log(usrEmail.email);
	 (usrEmail.email.length > lrgEmail.length) ? lrgEmail = usrEmail.email : "";
return lrgEmail;
}, "");
// console.log(largestEmail);

// Use reduce to get the list of user's names in a single string. Example: Your instructors are:
// ryan, luis, zach, fernando, justin.

//const usrStrng =

const nameArrToString = ()=> {
	let nameArr = [];
	for (let usr of users) {
		//console.log(usr.name);
		nameArr.push(usr.name);
	}
	return nameArr.join(", ");
};
// console.log(nameArrToString());

//Use reduce to get the unique list of languages from the list of users.

const langList = ()=> {
	const langs = {};
	let codeString= '';
	users.reduce((langCount, usr) =>{
		let strLang = usr.languages;
		//console.log(strLang);
		for (let str of strLang){
			console.log(str);
			//(typeof langCount[str] === "string") ? langCount[str]+=1 :  langCount[str]= 1;
			codeString += `, ${str}`;

		}
		console.log(codeString);
		console.log(langCount);
	}, '');

	return langs;
};

console.log(langList());

function countWords(sentence) {
	const words = sentence.split(' '); // transform a sentence into an array of words
	const wordCountObject = words.reduce((wordCounts, word) => {
		if (typeof wordCounts[word] === 'undefined') {
			// if the word is not yet present in our object, set it's value to 1
			wordCounts[word] = 1;
		} else {
			// otherwise increment the existing count
			wordCounts[word] += 1;
		}
		return wordCounts;
	}, {}); // start with an empty object
	return wordCountObject;
}

//console.log(countWords('Mary had a little lamb little lamb little lamb'));

//});