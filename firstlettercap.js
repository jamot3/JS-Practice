// This function capitalizes the first letter of every word in a given sentence.
// I made this slightly convoluted function to do something that should be simple.
// Will simplify this function in the future as I get better with JS.  

function capsFirstLetter (sentence) {
    sentence = sentence.split(" ");
    let x = 0; //iterates through the sentence
    let new_sentence = [];
    while (x < sentence.length) {
        let current_word = sentence[x];
        let y = 0; //iterates through current word
        let new_word = [];
        
        while (y < current_word.length) {
            let current_letter = current_word[y]
            
            if (y === 0) { //selects first letter of current word, capitalizes.
                current_letter = current_letter.toUpperCase()
            }
            
            new_word.push(current_letter);
            y+=1;
        }
        
        new_word = new_word.join("");
        new_sentence.push(new_word);
        x+=1;
    }
    return new_sentence.join(" ")
}
console.log(capsFirstLetter("hello my name is joe")) //Output: 'Hello My Name Is Joe'