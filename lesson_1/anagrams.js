/*
In: string, array
Out: array

Rules:
- resulting array should only include the anagrammical equals of the word

Thinking in Abstractions:
- we need to filter the array based on some condition

AL:
- sort the word
- filter array and compare with the sorted word on each iteration
- only words that are equal that gets returned

*/

let sortWord = word => word.split('').sort().join('');

function anagram(word, list) {
  return list.filter(listWord => sortWord(word) === sortWord(listWord));
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));