function gcf (num1, num2) { 
    let gcf = null;
    let x = 0; 
    while (x <= num1) {
        
        if (num1%x===0 && num2%x===0) {
            gcf = x;
        }
        x+=1;
    }

    return gcf;
}
console.log(gcf(4,8)) //Output === 4
console.log(gcf(100,20)) //Output === 20
console.log(gcf(9,81)) // Output === 9