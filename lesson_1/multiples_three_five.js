function multiplesOfThreeOrFive(array) {
  return myFilter(array, isMultipleOfThreeOrFive);
}

function isMultipleOfThreeOrFive(value) {
  return value % 5 === 0 || value % 3 === 0;
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

console.log(multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]));
