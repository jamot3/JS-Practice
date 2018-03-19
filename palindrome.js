word = "tattarrattat"
x = 0 
y = (word.length - 1)
palindrome = true

while (x < word.length) { 
    if (word[x] !== word[y]){
        palindrome = false
    }
    x+=1
    y-=1
}
console.log(palindrome) // PRINTS 'TRUE'

       
