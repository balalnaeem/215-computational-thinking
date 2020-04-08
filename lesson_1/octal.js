/*
In: string
Out: number - decimal

Thinking in abstractions:
- since we need to perform an action on each number in the string
- map all the values
- and reduce

AL:
- convert the string into an array and reverse the array
- map the array into number
- map over the array again and perform num*8**2
- reduce sum the resulting array

*/

let sum = (acc, val) => acc + val;
let octDigitToDecimal = (digit, index) => digit * (8**index);

function octalToDecimal(numStr) {
  return numStr.split('').reverse().map(Number)
        .map((digit, index) => octDigitToDecimal(digit, index))
        .reduce(sum);
}

console.log(octalToDecimal('1'));
console.log(octalToDecimal('10'));
console.log(octalToDecimal('130'));
console.log(octalToDecimal('17'));
console.log(octalToDecimal('2047'));
console.log(octalToDecimal('011'));