function myMap(array, func) {
  let resultArr = [];
  array.forEach(ele => {
    resultArr.push(func(ele));
  });

  return resultArr;
}

let plusOne = n => n + 1;
console.log(myMap([1, 2, 3, 4], plusOne));