    // Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
function sigma(num){
	var sum = 0
	for(i=1;i<=num;i++){
		sum += i
	}
	return sum
}
//console.log(sigma(100))

    // Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).
function factorial(num){
	var mult = 1
	for(i=1;i<=num;i++){
		mult *= i
	}
	return mult
}
//console.log(factorial(5))

    // Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.
function fibonacci(index){
	var fibarr = [0, 1]
	for(i=2;i<=index;i++){
		fibarr[i] = fibarr[i-1] + fibarr[i-2]
	}
	return fibarr[index]
}
//console.log(fibonacci(1000));

	//Bonus: Fibonacci with recursion!
function fib(num){
	if(num<=1){
		return num
	}
	return(fib(num-1)+fib(num-2))
}
//console.log(fib(10))

    // Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.
function secondToLast(arr){
	if (arr.length>1){
		return arr[arr.length-2]
	}
	else{
		return null
	}
}
//console.log(secondToLast([1,2]))

    // Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.
function secondToLast(arr, num){
	if (arr.length>=num){
		return arr[arr.length-num]
	}
	else{
		return null
	}
}
//console.log(secondToLast([1,2,4,5,6,7,8,9], 8))

    // Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.
function secondLargest(arr){
	largest = arr[0]
	secLargest = Number.NEGATIVE_INFINITY
	if (arr.length<2){
		return null;
	}
	else{
		for (i=1; i<arr.length; i++){
			if (arr[i] > largest){
				largest = arr[i]
			}
		}
		for (i=0; i<arr.length; i++){
			if (arr[i] < largest && secLargest < arr[i]){
				secLargest = arr[i]
			}
		}
	}
return secLargest
}
//console.log(secondLargest([42,1,4,3.14,7]))

    // Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
function doubleTrouble(arr){
	for(i=0; i<arr.length; i+=2){
		arr.splice(i,0,arr[i])
	}
	return arr
}
console.log(doubleTrouble([1,2,3,4,5]))