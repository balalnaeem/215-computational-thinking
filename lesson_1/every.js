function myOwnEvery(array, func) {
  for (let i = 0; i < array.length; i += 1) {
    if (!func(array[i])) {
      return false;
    }
  }

  return true;
}

let isAString = value => typeof value === 'string';

console.log(myOwnEvery(['a', 'a234', '1'], isAString));