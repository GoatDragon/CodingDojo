var fibCache = {}

function fibonacci(n){
    if (n <= 1){
        return n
    }
    if (n in fibCache){
        return fibCache[n]
    }
    else{
        var value = fibonacci(n - 1) + fibonacci(n - 2)
        fibCache[n] = value
        return value
    }
}

console.log(fibonacci(147600000))

function fibonacci2(n){
    if (n <= 1){
        return n
    }
    return(fibonacci2(n - 1) + fibonacci2(n - 2))
}

// console.log(fibonacci2(40))
