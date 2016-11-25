arrow functions
===============
var someFunction(a,b) = {
	somestatement;
	somestatement2;
} 
//can be written as
var someFunction = () => {
	somestatement;
	somestatement2;
}
//if an arrow function has only one statement, it can be written as
var someFunction = () => somestatement;
//without the curly braces
//if an arrow function has only one argument and one statement, it can be written as
var someFunction = a => a*a;
//where 'a' is the argument and 'a*a' is the return value.
//return does not need to be written explicitly

//Arrow function does not bind to the this keyword
//arguments does not exist in arrow functions