/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

in: string (will only contain letters and digits)
out: number (count of how many letters are being repeated (once or more than once))

Rules:
  - string to be considered case insensitive
  - even if a letter is repeated more than once, it only counts as 1

Requirements:
- if there are no repeat letters return 0

Data structure:
- use an object to keep count of the repetitions

AL:
- initialize an empty object
- convert the string to lowercase
- iterate over the string with a for loop
  - on each iteration, check if the letter key exists in the object
  - if it does, increment the value
  - if it does not, set it equal to 0

by now we have an object that has all the letters and digits as keys, and their repetition count as values
- we need to count how many keys have value higher than 1
- we can iterate over the object with Object.keys
- use forEach, and on each iteration increment the counter that we already have initialized to zero, if the value is higher than 1
- return the counter
*/
function duplicateCount(text){
  let charCounts = {};
  let repeats = 0;
  let char;
  let i;

  text = text.toLowerCase();

  for (let i = 0; i < text.length; i += 1) {
    let char = text[i];
    charCounts[char] = charCounts[char] || 0;
    charCounts[char] += 1;
  }

  Object.keys(charCounts).forEach(char => {
    if (charCounts[char] > 1) {
      repeats += 1;
    }
  });

  return repeats;
}

//TEST CASES
console.log(duplicateCount('abcde')); // 0
console.log(duplicateCount('aabbcde')); // 2
console.log(duplicateCount('aaBbcde')); // 2
console.log(duplicateCount('indivisibility')); // 1
console.log(duplicateCount('indivisibilities')); // 2
console.log(duplicateCount('aA11')); // 2
console.log(duplicateCount('ABBA')); // 2

























