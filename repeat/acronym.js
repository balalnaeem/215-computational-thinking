/*
in: string
out: acronym

Rules:
- compund words are separate
- words connected by - are compound words
- returned acronym will  always be uppercase

AL:
- we need to split the string at spaces and -
- map over the string and only take the first letter
- capitalize those letters
- join and return

*/

function acronym(string) {
  return string.split(/[ \-]/g)
               .map(word => word[0].toUpperCase())
               .join('');
}

console.log(acronym('Portable Network Graphics'));
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));