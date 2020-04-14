/*
What is Luhn Formula?

- counting from right most digit, we double every second digit
  - if a digit becomes more than 10 by doubling, we subtract 9 from it
- then we add all the digits to get a checksum
- if checksum % 10 === 0, it is a valid number


input: number (in string format)
output: boolean (true if valid, false otherwise)

rules:
- ignore all non-numeric characters

mental model:
- we can clean the given number first
- convert the string into an array
- reverse the string
- double every integer on odd index
- we can do that by mapping over the array
- once that is done we can use a reucer method to find the sum of the array
- if the sum % 10 !== 0, return false
- otherwise return true

Algorithm:
- clean num = numstring.replace(/[\D]/g, '');
- numsArr = clean.split('').reverse();
- numsArr.map((digit, index) => {
  if (index % 2 === 1) {
    return digit * 2;
  }

  return digit;
});

  checksum = numsArr.reduce(sum);
  return (checksum % 10 === 0);

ADDITIONAL Requirements:
- write a function that can add a check digit to make the number valid per the Luhn Formula and return the original number plus that digit. This should give "2323 2005 7766 3554" in response to "2323 2005 7766 355".

*/

let sum = (acc, val) => acc + val;

function validPerLuhn(numStr) {
  let digits = numStr.replace(/[\D]/g, '').split('').reverse().map(Number);
  let checksum = digits.map((digit, index) => {
    let doubledDigit;

    if (index % 2 === 1) {
      doubledDigit = digit * 2;
    } else {
      return digit;
    }

    return doubledDigit >= 10 ? doubledDigit - 9 : doubledDigit;
  }).reduce(sum);

  return checksum % 10 === 0;
}

// Test Cases
console.log(validPerLuhn('2323 2005 7766 3554')) // true
console.log(validPerLuhn('1111'))                // false
console.log(validPerLuhn('8763'))                // true









