function myReduce(array, func, initial) {
  let acc;
  let i;

  if (initial === undefined) {
    acc = array[0];
    i = 1;
  } else {
    acc = initial;
    i = 0;
  }

  for (; i < array.length; i += 1) {
    acc = func(acc, array[i], i, array);
  }

  return acc;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));

/*
RULES:
- takes an array
- a function
- an optional initial value

AL:
- if the initial value is undefined (which means not provided)
  - set the first element of the array equal to initial value
  - set the i = 1 rather than 0
- we are gonna pass to the callback function four values
  1. accumulator
  2. current value
  3. current index
  4 array

on each iteration, set the accumulator equal to whatever is returned by the callback function
return the accumulator at the end
*/