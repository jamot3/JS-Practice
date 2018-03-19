//Function takes in a word and returns 'true' or 'false' if the word is a palindrome - if it is the same both forwards and backwards. 

function isPalindrome (word) {
    let x = 0; //indexes word from front->back
    let y = (word.length - 1); //indexes word from back->front
    
    while (x < word.length) {
        if (word[x] !== word[y]) { //if x&y aren't equivalent, it means the word isn't the same from back to front - returns 'false'.
            return false;
        }
        x+=1;
        y-=1;
        }
    return true; //if the function hasn't returned an answer before this point, the word is a palindrome - returns 'true'. 
}

console.log(isPalindrome("tattarrattat")) // Output === true
console.log(isPalindrome("gandalf")) //Output === false

       
