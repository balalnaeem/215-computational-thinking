/*
PROBLEM:
- we are given a list of numbers in short hand
- only significant part of the next number is written
- we know the numbers are always increasing
- ex. '1, 3, 7, 2, 4, 1' represents [1, 3, 7, 12, 14, 21]

- some people use different separators for their ranges
- ex. '1-3, 1-2,' '1:3, 1:2' '1..3, 1..2' represent the same numbers [1, 2, 3, 11, 12]
- Range limits are always inclusive

The possible separators are ['-', ':', '..']
we are given the short hand numbers in string format
our job is to return a list of complete numbers

input: string
output: array of numbers

Understanding:
- numbers are separated by a comma and space
ranges are also separated with a comma and space

AL:
Lets first build the simplest logic possible
- we can split the string into chars by splitting at (', '),
  (now if we do that, we either will just get the numbers or we will get the ranges)
- now the logic here is figuring out what the next number is going to be
  - if the next number is smaller than the previous number, we add 10 to
- we can iterate over the array of string numbers
 - on each iteration we can see what is the next number with the help of a function
 - find out what is that number and insert that number into a new array and return that array
*/

function getNextNum(currentDigit, previousDigit, previousNum) {
  if (currentDigit > previousDigit && currentDigit > previousNum) {
    return currentDigit;
  }

  let nextNum = previousNum + 1;

  while (true) {
    if (nextNum % 10 === currentDigit) {
      break;
    }

    nextNum += 1;
  }

  return nextNum;
}

function parseShortHand(shortNums) {
  let newArr = [];
  let shortNumsArr = shortNums.split(', ');

  shortNumsArr.forEach((digitStr, idx, arr) => {
    let nextNum;
    if (idx === 0) {
      nextNum = Number(digitStr);
    } else {
      nextNum = getNextNum(Number(digitStr), Number(arr[idx - 1]), newArr[idx - 1]);
    }
    newArr.push(nextNum);
  });

  return newArr;
}

//TEST CASES
console.log(parseShortHand('1, 3, 7, 2, 4, 1'));  // [1, 3, 7, 12, 14, 21]
console.log(parseShortHand('1, 3, 7, 1, 4, 5, 4'));  // [1, 3, 7, 12, 14, 21]

// console.log(parseShortHand('1-3, 1-2'));  // [1, 2, 3, 11, 12]
// console.log(parseShortHand('1:5:2'));  // [1, 2, 3, 4, 5, 6, ... 12]
// console.log(parseShortHand('104-2'));  // [104, 105, 106 ... 112]
// console.log(parseShortHand('104-02'));  // [104, 105, 106 ... 202]
// console.log(parseShortHand('545, 64:11'));  // [545, 564, 565, 566, ... 611]
// console.log(parseShortHand('1..4, 2..5'));  // [1, 2, 3, 4, 12, 13, 14, 15]
