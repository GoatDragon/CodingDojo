function fizzBuzz(num) {
    if (typeof num != "number"){
        return "input must be a number";
    }
    let str = "";
    for (let i=1; i <= num; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            str += ("FizzBuzz");
        }
        else if (i % 3 == 0) {
            str += ("Fizz");
        }
        else if (i % 5 == 0) {
            str += ("Buzz");
        }
        else {
            str += (i);
        }
        if (i < num){
            str += ", ";
        }
        if (i == num - 1) {
            str += "and ";
        }
    }
    return str;
}

console.log(fizzBuzz(30));