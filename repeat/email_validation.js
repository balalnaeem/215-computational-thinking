/*
PROBLEM:
- an email has two parts separated by '@'
  1. local part
  2. domain part

- there must be an @
- local part must have one or more letters or digits (not any other chars)
- domain part must have two or more components separated by a dot
  - components must contain one or more letters only

in: string
out: boolean

AL:
- we can just write a regex that checks the given criteria

*/
function isValidEmail(email) {
  let regex = /^[a-z0-9]+@[a-z]+\.[a-z]+(\.[a-z]+)*$/gi;
  return regex.test(email);
}

console.log(isValidEmail('Foo@baz.com.ph'));
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));