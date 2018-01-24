var arrayTasks = {

	 concat: function (arr1, arr2) {
    return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
    arr.splice(index, 0, itemToAdd);
		return arr;
	},

	 square: function (arr) {
    const square = arr.map(x => x ** 2);
		return square;
	 },

	sum: function (arr) {
   var sum = 0;
	 arr.forEach(function(n){
		 sum+= n;
   })
	 return sum;
	},

// 	const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
//
// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10


	findDuplicates: function (arr) {
		let result = [];

		arr.forEach(function(n, index) {
			if (arr.indexOf(n, index + 1) > -1) {
				if (result.indexOf(n) === -1) {
					result.push(n);
				}
			}
		});

		return result;
	},



		// return arr.sort().filter(function(item, pos, ary) {
		// 		return !pos || item != ary[pos - 1];
		// })
	// const result = words.filter(word => word.length > 6);

	removeAndClone: function (arr, valueToRemove) {
		var removed = [];
		arr.forEach(function(n){
			if (n != valueToRemove){
        removed.push(n);
			}
		})
    return removed;
	},

	findIndexesOf: function (arr, itemToFind) {
		var removed = [];
		var index;
		arr.forEach(function(n){
			if (n == itemToFind){
				index = arr.indexOf(n);
        removed.push(index);
			}
		})
    return removed;
	},




	sumOfAllEvenNumbersSquared: function (arr) {


	}

}

module.exports = arrayTasks
