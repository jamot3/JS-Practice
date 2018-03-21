//This function returns a reversed version of a string.
function reverse (string) {
    let reversed = [];
    for (let x = string.length; x >= 0; x--) {
        reversed.push(string[x]);
    }
    return reversed.join("");
}
console.log(reverse('olleh') === 'hello') //Output === true
console.log(reverse('doggo') === 'oggod') //Output === true
console.log(reverse('esrever') === 'reverse') //Output === true