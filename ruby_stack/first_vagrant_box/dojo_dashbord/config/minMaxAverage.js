function minMaxAverage(arr) {
    let min = arr[0];
    let max = arr[0];
    let sum = 0;
    for (i=0; i<arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
        if (arr[i] > max) {
            max = arr[i]
        }
        sum += arr[i]
    }
    return 'min:', min,'max:' max, 'avg:', sum / arr.length
}

console.log(minMaxAverage([1,3,5]))