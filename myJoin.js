/* Write Code Here */
function myJoin(input, joiner) {
    let newString = "";
    for (let x = 0; x < input.length; x++) {
        if (input[x] !== undefined && input[x] !== null) {
            if (joiner && x > 0 || joiner === "") {
                newString+=joiner;
            } else if (x > 0) {
                newString+=",";
            }
            newString+=input[x];
        }
    }
    return newString;
    
}

console.log(myJoin(['hello', undefined, 'world'], ' '));
// OUTPUT: 'hello world'
console.log(myJoin([2, "be", false]));
// OUTPUT: '2,be,false`