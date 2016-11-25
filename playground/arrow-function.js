var square = x => x * x;
console.log(square(9));

var user = {
	name: 'shazwan',
	sayHi: () => {
		console.log(arguments);
		console.log(`Hi. I'm ${this.name}`);
	},
	//array functions does not bind to 'this keyword
	//arguments does not exist in arrow functions
	sayHiAlt (){
		console.log(arguments);
		console.log(`Hi. I'm ${this.name}`);	
	}
};
user.sayHi(1,2,3);
