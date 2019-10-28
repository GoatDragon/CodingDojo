function binarySearch(arr, val){
    var mid = Math.floor(arr.length / 2);
    if (arr[mid] == val){
        return mid
    }
    else if (arr[mid] < val && arr.length > 1){
        return binarySearch(arr.splice(mid, Number.MAX_VALUE), val)
    }
    else if (arr[mid] > val && arr.length > 1){
        return binarySearch(arr.splice(0, mid), val)
    }
    else{
        return -1
    }
}
console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93))
console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15))