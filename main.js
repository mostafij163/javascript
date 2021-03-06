		const companies = [
			{name: "fox movies", category: "studio", start: 1980, end: 1983},
			{name: "disney", category: "studio", start: 1930, end: 1950},
			{name: "Facebook", category: "technology", start: 2004, end: 2018},
			{name: "doglus", category: "technology", start: 1940, end: 2008},
			{name: "paypal", category: "finance", start: 1990, end: 2000},
			{name: "bangladesh bank", category: "finance", start: 1980, end: 2016}
		];

		const ages = [10, 20, 18, 40, 50, 39, 21, 12, 30, 41, 40];

		// for (let i = 0; i <= companies.lenght; i++) {
		// 	console.log(companies[i]);
		// }


			/*________________________
			      forEach function

			__________________________*/

		// companies.forEach(function(company){
		// 	console.log(company);
		// });

		//const canDrink = [];
		// for(let i = 0; i < ages.lenght; i++){
		// 	if (ages[i] >= 21) {
		// 		canDrink.push(ages[i]);
		// 	}
		// }


			/*________________________
			      filter function

			__________________________*/
		// const canDrink = ages.filter(function(age){
		// 	if (age >= 21) {
		// 		return true;
		// 	}
		// });
		// console.log(canDrink);

		// const canDrink = ages.filter(age => age >=21);
		// console.log(canDrink);

		// const financeCompany = companies.filter(function(company){
		// 	if (company.category == "finance") {
		// 		return true;
		// 	}
		// });

		// const financeCompany = companies.filter(company => company.category == "finance");

		//const companyLasting = companies.filter(company => (company.end - company.start) >=10);


			/*________________________
			      map function

			__________________________*/
		// const companyName = companies.map(function(company){
		// 	return `${company.name} [${company.start} - ${company.end}]`;
		// })

		//const companyName = companies.map(company => `${company.name} [${company.start}-${company.end}]`);
		//const companyName = companies.map(company => company.name);


			/*________________________
			      sort function

			__________________________*/
		// const sortedCompanies = companies.sort(function(a, b){
		// 	if (a.start > b.start) {
		// 		return 1;
		// 	} else{
		// 		return -1;
		// 	}
		// });

		//const sortedCompanies = companies.sort((a, b) => (a.start > b.start) ? 1 : -1);

		// let ageSum = 0;
		// for (let i = 0; i < ages.length; i++) {
		// 	ageSum += ages[i];
		// }


			/*________________________
			      reduce function

			__________________________*/
		// const ageSum = ages.reduce(function(total, age){
		// 	return total + age;
		// }, 0);

		//const ageSum = ages.reduce((total, age) => total + age, 0);

		// const totalYears = companies.reduce(function(total, company){
		// 	return total + (company.end - company.start);
		// }, 0);

		// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);


			/*________________________
			      All functions combined

			__________________________*/
		const combined = ages
			.map(age => age*2)
			.filter(age => age >= 30)
			.sort((a, b) => a - b)
			.reduce((total, age) => total + age);

		console.log(combined);



		/**************** Async Await callback promises ************/
		const book = [
            {title: 'book one', body: 'this is book one'},
            {title: 'book two', body: 'this is book two'}
        ];
        function getPosts(){
            setTimeout(() => {
                let output = '';
                book.forEach((post, index) => {
                    output += `<li>${post.title}</li>`;
                });
                document.body.innerHTML = output;
            }, 1000);
		}

		// function createGetPosts(post, callback){
		// 	setTimeout(() => {
		// 		book.push(post);
		// 		callback();
		// 	}, 2000);
		// }

		function createGetPosts(post){
			return new Promise((resolve, reject) =>{
				const error = false;
				setTimeout(() => {
					book.push(post);
					if(!error){
						resolve();
					} else{
						reject("something went wrong");
					}
				}, 2000);
			});
		}
		
		// createGetPosts({title: 'book three', body: 'this is book three'})
		// .then(getPosts)
		// .catch(err => console.log(err));

		async function init(){
			await createGetPosts({title: 'book three', body: 'this is book three'});
			getPosts();
			const res = await fetch("https://jsonplaceholder.typicode.com/users");
			const data = await res.json();
			console.log(data);
		}
		init();

		// const promise1 = Promise.resolve("hello world");
		// const promise2 = 10;
		// const promise3 = new Promise((resolve, reject) => {
		// 	setTimeout(resolve, 2000, "goodbye");
		// });
		// const promise4 = fetch("https://jsonplaceholder.typicode.com/users")
		// .then(res => res.json());

		// Promise.all([promise1, promise2, promise3, promise4, createGetPosts({title: 'book three', body: 'this is book three'}, getPosts)]).then(value => console.log(value ));
		
