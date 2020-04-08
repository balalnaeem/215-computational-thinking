/*
In: array
Out: number

Rules:
- we get an array of arrays
- each nested array has two values (height and width)
- area = height * width

Thnking in Abstraction:
- convert each nested array into the area => map
  - find the total area of each nested array => reduce
- find the total of resul array => reduce

AL:
- iterate over the array with map
  - on each iteration transform each nested array into the total area
    - perform reduce that does multi sum
- reduce sum on the resulting array
*/

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
let sum = (acc, val) => acc + val;
let product = (acc, val) => acc * val;

function totalArea(array) {
  return array.map(subArr => subArr.reduce(product)).reduce(sum);
}




// ONLY SQUARES

function totalSquareArea(array) {
  let squares = array.filter(subArr => subArr[0] === subArr[1]);
  return totalArea(squares);
}

console.log(totalSquareArea(rectangles));