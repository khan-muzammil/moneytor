let array = [1, 2, 3, 4, 4, 2, 1, 5, 1, 4, 5]

function removeDuplicates(array) {
	let uniqueArray = array.filter(function (item, pos) {
		return array.indexOf(item) == pos
	})
	return uniqueArray
}

console.log(removeDuplicates(array))
