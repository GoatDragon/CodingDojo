function coinChange(amt){
    return {
        "dollars": Math.floor(amt / 100),
        "quarters": Math.floor((amt % 100) / 25),
        "dimes": Math.floor(((amt % 100) % 25) / 10),
        "nickles": Math.floor((((amt % 100) % 25) % 10) / 5),
        "pennies": Math.floor((((amt % 100) % 25) % 10) % 5)
    }
}

console.log(coinChange(268))