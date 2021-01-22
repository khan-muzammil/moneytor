function power(number, raisedTo) {
	let result = 1

	//assuming if undefined then raisedTo is 2
	if (raisedTo == undefined) raisedTo = 2

	for (var i = 1; i <= raisedTo; i++) {
		result = result * number
	}
	return result
}

console.log(power(2, 0))
