// Prints the sum of all odd integers in an array.

const sumOdds = (array) => {
    let sum_odd = 0;
    let x = 0;
    while (x < array.length) {
    if (array[x] % 2 === 1) { //Determines if number is odd or even. 
        sum_odd+=array[x] //adds all odd to the sum_odd variable.
        };
        x+=1;
    };
    return sum_odd; //when finished indexing through array, the sum is returned. 
};

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sumOdds(arr)) //Prints 25: (1+3+5+7+9)

