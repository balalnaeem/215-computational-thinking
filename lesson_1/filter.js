build the `filter` method

function myFilter(array, func) {
  let i;
  let newArr = [];
  for (i = 0; i < array.length; i += 1) {
    if (func(array[i], i, array)) {
      newArr.push(array[i]);
    }
  }

  return newArr;
}

function myFilter(array, func) {
  let newArr = [];

  array.forEach(ele => {
    if (func(ele)) {
      newArr.push(ele);
    }
  });

  return newArr;
}

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2)
};

let arr = [ {a: 3, b: 4, c:5},
              {a: 5, b: 12, c: 13},
              {a: 1, b: 2, c: 3} ];

console.log(myFilter(arr, isPythagoreanTriple));