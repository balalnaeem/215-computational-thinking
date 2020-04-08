/*
In: array
Out: array

Rules:
- band countries all should be canada
- band names should have all words capitalized
- remove all dots from band names

Thinking in Abstractions:
- a method that takes a string
  - capitalizes each word in a string and removes dots
- map over the array and returning updated object

*/

function removeDotAndCapitalize(string) {
  return string.split(' ').map(word => word.replace(/\./g, ''))
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function processBands(data) {
  return data.map(band => {
    return {
      name: removeDotAndCapitalize(band.name),
      country: 'Canada',
      active: band.active,
    };
  });
}

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

console.log(processBands(bands));

console.log(bands);