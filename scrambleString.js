//This function 'scrambles' a string into index positions of a given array. 
function scramble (string, positions) {
    new_string = []
    for (let x = 0; x < string.length; x++) {
        new_string.push(string[positions[x]]);
    }
    return new_string.join("")
}
console.log(scramble("hello", [3, 1, 4, 0, 2]) === "leohl") //Output === true
console.log(scramble("fox", [2, 0, 1]) === "xfo") //Output === true
console.log(scramble("news", [0, 2, 3, 1]) === "nwse") //Output == true