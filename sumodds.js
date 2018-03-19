// Prints the sum of all odd integers in an array.

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let sum_odd = 0 // Sum to ultimately be printed, 0 as a starting value/placeholder.
let x = 0  // Iterating variable for indexing through the array.

while (x < array.length) {
    if (array[x] % 2 === 1) {
        sum_odd+=array[x]
    };
    x+=1
}
console.log(sum_odd === 25) //Prints 'true' - 1+3+5+7+9 = 25

