// phrase to translate to whale language
const input = 'a whale of a deal!';

// Array of vowels
const vowels = [
  'a',
  'e',
  'i',
  'o',
  'u'
];

// Variable to store the vowels from the input string
let resultArray = [];

// Loop to iterate through each letter of the input variable text.

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      if (input[i] === 'e') {
        resultArray.push('ee');
      } else if (input[i] === 'u') {
        resultArray.push('uu');
      } else {
        resultArray.push(input[i])
      }
    }
  }
};


// Log the translate
console.log(resultArray.join('').toUpperCase())