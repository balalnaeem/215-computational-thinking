/*
PROBLEM:
- You are give numbers in shorthand
- only the significant part of the number is given
- because numbers are always increasing
- ex. "1, 3, 7, 2, 4, 1" => [1, 3, 7, 12, 14, 21]
    1 => 1
    3 => 3
    7 => 7
    2 => 12
    4 => 14
    1 => 21
- everytime the next number is smaller than the previous number
  - we add 10 to that number, let say 10 is our base which was zero before
  - next time the number is smaller than the previous number
  - we add 10 more to the base and add that to the number


input: string of numbers separated by ','
ouput: array of numbers

AL:
- convert the string format digits into numbers
  1. split(',')
  2. map and Number over the array
- declare a variable and set it equal to empty array
- find out the starting base
  1. digits[0] / 10, Math.floor this number
  2. now we have our starting base
- forEach over our digits
  1. on the first iteration
    - add the number to empty array .push(num + (10 * base))
  2. on each iteration after the first check if
    - the number is smaller than the previous one
    - if it is, add 1 to the base
    - and then add the number to the empty array
- return the new array in the end


*/

function completeNums(numString) {
  let resultArr = [];
  let shorthandArr = numString.split(',').map(Number);
  let base = Math.floor(shorthandArr[0] / 10);

  shorthandArr.forEach((num, ind) => {
    if (num % 10 < shorthandArr[ind - 1] % 10) {
      base += 1;
    }

    resultArr.push(num % 10 + (10 * base));
  });

  return resultArr;
}


//TEST CASES
console.log(completeNums('1,3,7,2,4,1'));  // [1,3,7,12,14,21]
console.log(completeNums('1,7,1,7,1,7'));  // [1,7,11,17,21,27]
console.log(completeNums('1,9,7,5,3,2'));  // [1,9,17,25,33,42]
console.log(completeNums('9,8,7,6,5,4,3,2,1,0'));
                      // [9,18,27,36,45,54,63,72,81,90]
console.log(completeNums('104,2,7,1,3,2'));