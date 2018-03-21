function isPrime (number) {
    if (number <= 1) {
        return false
    }
    
    x = 2
    while (x < number) {
        if (number % x === 0) {
            return false
        }
        x+=1;
    }
    return true;
    
}
console.log(isPrime(11) === true) //Output: true
console.log(isPrime(2) === true) //Output: true
console.log(isPrime(3) === true) //Output: true
console.log(isPrime(22) === false) //Output: true