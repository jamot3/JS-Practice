// Returns the factorial of a given number. Returns 1 if the given number = 0, and an error message
// if the given number is a negative. 


function factorial (num) {
    if (num === 0) {
        return 1;
    } else if (num < 0) {
        return "Hmm... try a positive number next time.";
    };
        
    let fact = 1;
    while (num > 0) {
        fact*=num;
        num-=1;
    }
    return fact;
}

// FOR LOOP VERSION
function factorial (num) {
    if (num === 0) {
        return 1; 
    } else if (num < 0) {
        return 'Error'
    }
    
    let fact = 1;
    for (num; num >= 1; num--) {
        fact*=num;
    }
    return fact;
}
    
//Below, test cases for the above factorial function. All print 'true'. 
console.log(factorial(3) === 6) 
console.log(factorial(4) === 24) 
console.log(factorial(0) === 1) 
console.log(factorial(-1) === "Hmm... try a positive number next time.")
