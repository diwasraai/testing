// var newFunction = function(amount,callback) {
// 		// console.log('test statement is ', test);
// 		callback(amount * percentage);
// 	}
// 	// var amount = newFunction(1000);

// newFunction(400, function(result) {
// 	console.log("result is ", result);
// });

// var secondFunction = function() {
// 	const test = "hello world to programming language";
// 	console.log('test statement is ', test);
// }

/*
 *
 */

/// key value pair///
{}



var a = [];
var b = {
	'name': 'kishor',
	'class': 'd',
	'abc': 'cd'
};
// for (var key in b) {
//   var obj= {};
//   obj[key]=b[key];
//   a.push(obj);
// }
// console.log(a);
var obj = {}; // empty
var newArray = [{
	name: 'kishor',
	address:'bhaktapur'
}, {
	class: 'd'
}, {
	abc: 'cd'
}];
newArray.forEach(function(item) {
	// obj[Object.keys(item)[0]]=Object.values(item)[0];
	for (var i in item) {		
		obj[i] = item[i];
	}

});
console.log(obj);