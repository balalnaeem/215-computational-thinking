/*
- write a function that can add a check digit to make the number valid per the Luhn Formula and return the original number plus that digit. This should give "2323 2005 7766 3554" in response to "2323 2005 7766 355".

input: number (string format)
output: number - complete (string format)

Rules:
- make the number valid by adding the right most digit

Mental Model:
- basically the number that we add will make the given number a multiple of 10
- so we find out the luhn checksum of the given number
- and modulu that with 10
- the remainder should be added to the given string
- In order to find out the luhn checksum
  - we just need to change the logic a little bit
  - first we doubled the numbers at odd indexes
  - now we will double the numbers at even indexes
- And then compute checksum

AL:
- first we clean the string of any non-digit characters
- string => array of chars => array of numbers => reverse
- map over the array
  - double every number at even indexes starting from 0
  - odd indexed numbers are just returned as is
- reduce sum the array to get checksum
- find the remainder wth % 10
- return original string + remainder

*/

let sum = (acc, val) => acc + val;

function validLuhn(numStr) {
  let missingDigit;
  let digits = numStr.replace(/[^0-9]/g, '')
                     .split('').map(Number).reverse();

  let checksum = digits.map((digit, index) => {
    let num = digit;
    if (index % 2 === 0) {
      num = digit * 2;
    }

    return num >= 10 ? num - 9 : num;
  }).reduce(sum);

  missingDigit = 10 - (checksum % 10);
  return numStr + String(missingDigit);
}

console.log(validLuhn('2323 2005 7766 355'))  // 2323 2005 7766 3554
console.log(validLuhn('2323 2005 7766 365'))  // 2323 2005 7766 3653
console.log(validLuhn('2323 2005 7766 375'))  // 2323 2005 7766 3752