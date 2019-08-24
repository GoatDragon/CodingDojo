/*before problems generate an array -10 through 10 as arr*/
var arr = [];
for (i = -10; i < 11; i++){
	arr.push(i);
}
//console.log(arr)

/*problem 1*/
/*Given an array and a value Y, count and print the number of array values greater than Y.*/
function countOverY(arr, y){
	var total = 0;
	for (i = 0; i < arr.length; i++){
		if (arr[i] > y){
			total ++;
		}
	}
	return total;
}
console.log(countOverY(arr, 4));

/*problem 2*/
/*Given an array, print the max, min and average values for that array.*/
function maxMinAvg(arr){
	var min = Infinity;
	var max = Number.NEGATIVE_INFINITY;
	var sum = 0;
	for (i = 0; i < arr.length; i++){
		if (arr[i] < min){
			min = arr[i];
		}		
		if (arr[i] > max){
			max = arr[i];
		}
		sum += arr[i];
	}
	var avg = sum / arr.length;
	console.log(max, min, avg);
}
(maxMinAvg(arr));

/*problem 3*/
/*Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.   For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].*/
function replaceNegatives(arr){
	for (i = 0; i < arr.length; i++){
		if(arr[i] < 0){
			arr[i] = 'Dojo';
		}
	}
	return arr;
}
console.log(replaceNegatives(arr));

/*problem 4*/
/*Given array, and indices start and end, remove values in that index range, working in-place (hence shortening the array).  For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].*/
function shortenArray(arr, start, end){
	var removeNum = end - start + 1;
	/*var removed = */arr.splice(start, removeNum);
	//console.log(removed)
	return arr;
}
console.log(shortenArray([20,30,40,50,60,70],2,4));