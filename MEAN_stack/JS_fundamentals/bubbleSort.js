function bubbleSort(arr){
    for (let i=0; i<=arr.length; i++){
        for (let j=1; j<=arr.length-i; j++){
            if (arr[j-1] > arr[j]){
                temp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort([5,4,3,2,1]))