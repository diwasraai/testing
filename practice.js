const taxRate = 0.13;
const phonePrice = 2000;
const accessoryPrice = 200;
const spendingThreshold = 15000;

var bankBalance = 20000;
var totalPrice = 0;
//buy phone
while (totalPrice < bankBalance) {
	if (totalPrice + phonePrice > bankBalance) {
		break;
	}
	totalPrice += phonePrice;
	if (totalPrice < spendingThreshold) {
		totalPrice = totalPrice + accessoryPrice;

	}
	console.log('totalPrice>>', totalPrice);

}

// function addTax(amt) {
// 	return amt * taxRate;
// }
console.log(totalPrice + ' is total price you cannot buy phone now :(');