//(() => {


	//Write a function named wait that accepts a number as a parameter, and returns a promise
	// that resolves after the passed number of milliseconds.


	// const waitPromise = new Promise((resolve, reject) => {
	//
	// 	resolve();
	//
	// });

	const wait = num => {
			return new Promise((resolve, reject) => {
				setTimeout(()=> {
					resolve();
				}, num)
			} );

	};

	wait(1000).then(() => console.log('You\'ll see this after 1 second'));
	wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
let url = "https://api.github.com/users/cassielopez/events";
//console.log(fetch(url, {headers: {'Authorization': gitHubKey}}));

fetch(url, {headers: {'Authorization': gitHubKey}})
	.then(data => console.log(data.json()));


//})();