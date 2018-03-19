// Since I just started Code Academy's JS course yesterday, I still haven't gotten to defining methods, so 
// I'm still just making little snippets of code that print values to the console. This one takes in a word 
// and returns 'true' or 'false' whether or not it's a palindrome. 
//
// It utilizes one iterating variable to index the word from the beginning, x, and another to index 
// the word starting from the end, y. Then, x is iterated by +1 and y by -1 until x reaches the end of 
// the string - if any differences are detected, the 'palindrome' variable (which defaults to 'true') 
// changes in value to 'false', indicating the word isn't a palindrome. 

let word = "tattarrattat"
let x = 0 
let y = (word.length - 1)
let palindrome = true

while (x < word.length) { 
    if (word[x] !== word[y]){
        palindrome = false
    }
    x+=1
    y-=1
}

switch(palindrome) {
    case true:
        console.log(`${word} is a palindrome.`);
        break;
    case false:
        console.log(`${word} is not a palindrome.`);
        break;
}
//in the case of the example word, 'tattarrattat', our program prints to the console: 'tattarrattat is a palindrome.'

       
