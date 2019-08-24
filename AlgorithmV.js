/*before problems generate an array -10 through 10 as arr*/
var arr = [];
for (i = -10; i < 11; i++){
	arr.push(i);
}

/*problem 1*/
/*Return the given array, after setting any negative values to zero.  For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].*/
function negToZero(arr){
	for (i = 0; i < arr.length; i++){
		if (arr[i] < 0){
			arr[i] = 0;
		}
	}
	return arr;
}
// console.log(negToZero(arr))

/*problem 2*/
/*Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end.  For example moveForward( [1,2,3]) should return [2,3,0].*/
function pushIndex(arr){
	for (i = 1; i < arr.length; i++){
		arr[i - 1] = arr[i];
	}
	arr[arr.length-1] = 0;
	return arr;
}
// console.log(pushIndex([1,2,3]));

/*problem 3*/
/*Given an array, return an array with values in a reversed order.  For example, returnReversed([1,2,3]) should return [3,2,1].*/
function reverseOrder(arr){
	for (i = 0; i < arr.length/2; i++){
		var temp = arr[i];
		arr[i] = arr[arr.length-1-i];
		arr[arr.length-1-i] = temp;
	}
	return arr;
}
// console.log(reverseOrder(arr));

/*problem 4*/
/*Create a function that changes a given array to list each original element twice, retaining original order.  Have the function return the new array.  For example repeatTwice( [4,”Ulysses”, 42, false] ) should return [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].*/
function doubleElement(arr){
	for (i = 0; i < arr.length; i+=2){
		// arr.splice(i,0,arr[i])
	}
	return arr
}
console.log(arr)
y = doubleElement(arr)
console.log(y)