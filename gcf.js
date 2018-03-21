//Finds the greatest common factor (GCF) of two given numbers. 

function gcf (num1, num2) { 
    let gcf = null; //placeholder value for gcf
    let x = 0; //iterating variable
    while (x <= num1) { 
        
        if (num1%x===0 && num2%x===0) { //if x divides evenly into both, it is a factor. Last factor before termination of loop
            gcf = x;                    //must be greatest common factor.
        }
        x+=1;
    }

    return gcf;
}
console.log(gcf(4,8)) //Output === 4
console.log(gcf(100,20)) //Output === 20
console.log(gcf(9,81)) // Output === 9
