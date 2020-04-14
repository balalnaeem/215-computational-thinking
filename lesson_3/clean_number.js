/*
other than digits, number may contain
  - special characters
    - spaces,
    - dash
    - dot
    - parentheses
- special characters should be ignored
- if the phone number is less than 10 digits => bad number
- if the phone number is 10 digits => good number
- if the phone number is 11 digits, and the first digit is 1, trim 1 and use last 10 digits
- if the phone number is 11 digits, first is not 1 => bad number
- if more than 11 digits => bad number
- if number is bad => '000...0'

input: number(string representation)
output: clean number (string representation)

AL:
- so special character shoul be ignored NOT removed.
- we can walk through the string, building an array of digits only
- now we have an array of digits only
- if the length of the array is not 10
  - return the zeros
- and if the length is 11 and first digit is not 1
  - return the zeros

- if none of the above two guard clauses true
  - we can move forward with building our final string
  - we need to boolean variable that will tell us if the leading char is 1 and need to be removed
  - while we are iterating, when we come to that 1, we set the boolean to false and continue to the next iteration
  - return the final string in the end
}

pseudo code:

function cleanNumber(numString) {
  let i;
  let digitsArr;
  let badNum = '0000000000'
  let goodNum =''
  let leadingOne = false;

  digitsArr = numString.replace(/[^0-9]/, '').split('');

  if (digitsArr.length === 11 && digitsArr[0] === 1) {
    leadingOne = true;
  }

  if (digitsArr.length !== 10 && !leadingOne) return badNum;

  for (i = 0; i < numString.length; i == 1) {
    if (leadingOne && numString[i] === 1) {
      leadingOne = false;
      continue;
    }

    goodNum += numString[i];
  }

  return goodNum;
}
*/

function cleanNumber(numString) {
  let i;
  let digitsArr;
  let goodNum = '';
  let badNum = '0000000000';
  let leadingOne = false;

  digitsArr = numString.replace(/[^0-9]/g, '').split('');

  if (digitsArr.length === 11 && digitsArr[0] === '1') {
    leadingOne = true;
  }

  if (digitsArr.length !== 10 && !leadingOne) {
    return badNum;
  }

  for (i = 0; i < numString.length; i += 1) {
    if (leadingOne && numString[i] === '1') {
      leadingOne = false;
      continue;
    }

    goodNum += numString[i];
  }

  return goodNum;
}





// TEST CASES

console.log(cleanNumber('123-456-789-0'))    // logs '123-456-789-0'
console.log(cleanNumber('123-456-789-012'))  // logs '0000000000'
console.log(cleanNumber('123-456-789'))      // logs '0000000000'
console.log(cleanNumber('123.456.789.01'))      // logs '23.456.789.01'
console.log(cleanNumber('12345678901'))      // logs '2345678901'
console.log(cleanNumber('123456789012'))     // logs '0000000000'
console.log(cleanNumber('1123.456.789.0'))     // logs '123.456.789.0'
console.log(cleanNumber('(1234567890)'))     // logs '(1234567890)'

