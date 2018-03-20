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
        let new_word = [];//container for letters processed by following while loop.
        
        while (y < current_word.length) {
            let current_letter = current_word[y]
            
            if (y === 0) { //selects first letter of current word, capitalizes.
                current_letter = current_letter.toUpperCase()
            }
            
            new_word.push(current_letter);//adds processed letters to new_word container
            y+=1;
        }
        new_sentence.push(new_word.join(""));//joins new_word array letters into word, adds to new_sentence 
        x+=1;
    }
    return new_sentence.join(" ")//joins words in new_sentence by a space, returns finished sentence. 
}
console.log(capsFirstLetter("hello my name is joe")) //Output: 'Hello My Name Is Joe'
