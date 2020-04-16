/*
PROBLEM:
- we have a collection of spelling blocks
- each block has two letters
- words cannot use both letter from a singel block
- and words can only use a block once
- so basically words can only use one letter from a block, that too only once
- ignore case in this problem

in: word string
out: boolean (whether we have a valid word or not)

Data:
- nested array of block letters

Al:
- convert the string to lowercase
- then we walk through the string with the help of a loop
- on each letter
  - we walk through the array and check which block is being used
  - have an empty array of used blocks
  - check if the used index is already in the array
  - if not insert it, if it is, return false(that means the block is being used more than once)

return true in the end;

*/

const blocks = [
  ['b', 'o'],
  ['x', 'k'],
  ['d', 'q'],
  ['c', 'p'],
  ['n', 'a'],
  ['g', 't'],
  ['r', 'e'],
  ['f', 's'],
  ['j', 'w'],
  ['h', 'u'],
  ['v', 'i'],
  ['l', 'y'],
  ['z', 'm']
];

function isBlockWord(word) {
  let i;
  let j;
  let usedBlocks = [];
  word = word.toLowerCase();

  for (i = 0; i < word.length; i += 1) {
    for (j = 0; j < blocks.length; j += 1) {
      if (blocks[j].includes(word[i])) {
        if (usedBlocks.includes(j)) return false;
        usedBlocks.push(j);
      }
    }
  }

  return true;
}

//TEST CASES
console.log(isBlockWord('BATCH'));  // true
console.log(isBlockWord('BUTCH'));  // false
console.log(isBlockWord('jest'));   // true
console.log(isBlockWord('BoaT'));   // false

