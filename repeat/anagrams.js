/*
input: word, an array of words
out: array

rules:
- resulting array should contain all the words that are anagrams of the word

AL:
- filter the sorted array and return the words that are equal to the given word

*/

function wordSort(word) {
  return word.split('').sort().join('');
}

function anagram(word, list) {
  return list.filter(anagram => wordSort(word) === wordSort(anagram));
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]