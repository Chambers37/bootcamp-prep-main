let word = 'carrots';
// let word = 'pacific';
// let word = 'perfecto';
// let word = 'perfect';


let lastWord;

// YOUR CODE BELOW

let arr = word.toLowerCase().split('');

if (arr[0] === 'p' && word.length === 7)  {lastWord = word.toUpperCase()}
else {lastWord = word}