const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const reversedColors = [];

for (let i = colors.length - 1; i >= 0; i--) {
  reversedColors.push(colors[i]);
}

// console.log(reversedColors);
// Write a JavaScript code to get the even numbers from an array using any looping technique.
const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumber = [];
for(let i = 0 ; i< numbers.length; i++){
    if( numbers[i] % 2 === 0 ){
        evenNumber.push(numbers[i])
    }
}
// console.log(evenNumber)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
const statement = 'I am a hard working person';
const reversedStatement = statement.split(' ').reverse().join(' ');

console.log(reversedStatement);