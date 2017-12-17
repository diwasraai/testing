function greetings(word) {

	var sayHello = "welcome to brodway infosys nepal" + word;

	return {
		getName: function() {
			return sayHello;
		},
		setName: function(newName) {
			sayHello = newName;
		}
	}
};

// console.log(greetings()); ///return object
var closureVar = greetings('thank you');
// console.log(closureVar.getName());
closureVar.setName('you are must welcome to brodway infosys nepal');
console.log(closureVar.getName());