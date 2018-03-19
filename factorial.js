let num = -1 //Number to be factorial-ized.
let sum = 1

if (num === 0) {  //Special condition for 0! : prints 1. 
    console.log(1);
} else if (num < 0) {
    console.log("No factorials for negatives!")
}

while (num > 0) { 
    
    if (num === 1){
        console.log(sum);
    }
    
    sum*=num 
    num-=1
    }

    
