"use strict";
var hello = "hello :)";

function greetings(name) {

	var greetWord = "welcome";

	function sayHello(place) {
		var innerFunctionWord = 'inner word';
		return hello + " " + name + " " + greetWord + " to " + place;
	}

	return sayHello();
}
// console.log(greetWord); //refrenece error

// console.log(greetings('sishir'));

var obj = {
	name: 'bordway',
	address: 'tinkune'
};
var callOuterFn = greetings(obj); ///outer function called
// console.log(callOuterFn);

console.log(callOuterFn('lab-no-10')); //// inner function called

////////closure////////////////
//closure  is inner function with in function that has access
//----global scope
//---outer function scope
//---own function scope
//--- outer function arugument