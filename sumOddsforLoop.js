// Prints the sum of all odd integers in an array. A 'for loop' version of the sumodds function I previously uploaded.
function sumOdd (array) {
    let sum = 0
    for (let x = 0; x < array.length; x++) {
        if (array[x]%2===1) {
            sum+=array[x];
        }
    }
    return sum
}
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sumOdd(array)) //Output === 25







