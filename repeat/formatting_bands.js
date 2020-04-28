/*
input: an object
output: an object

RULES:
- all country should be Canada
- all names should be capitalized
- all names should lose the dots from them

AL:
- we can mutate the object as well
  - iterate over the array of objects
  - on each iteration we can access Object.keys
    - Object.keys will give us [name, country, active]
      - we can iterate over the keys
        - on each iteration, access the value of name and country and modify

*/

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function removeDotsAndCapitalize(string) {
  string = string.replace(/[.]/g, '');
  return string.split(' ').map(word => {
    return word[0].toUpperCase() + word.slice(1);
  }).join(' ');
}

function processBands(data) {
  data.forEach(band => {
    band.country = 'Canada';
    band.name = removeDotsAndCapitalize(band.name);
  });

  return data;
}

processBands(bands);

console.log(bands);