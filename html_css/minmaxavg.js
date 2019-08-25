function maxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var avg = 0;
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    for (i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
    }
    var arrnew = [];
    arrnew.push(max);
    arrnew.push(min);
    return arrnew; 
}