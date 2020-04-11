/*
RULES:
- implement a function that checks whether an email is valid or not
- And email has two parts: 1) a local part 2) a domain part
- An @ sign separates two parts
- The local part is usually a username
- The domain part is the domain name (gmail.com, yahoo.com.ph)
  - domain name contains a server name
  - and top level domain (.com, .ph, etc)

CRITERIA:
- there must be one '@' sign
- the local part must contain one or more letters
  - it may also contain numbers
  - and may not contain any other chars
- the domain part must contain two or more components separated by a single dot
  - each component must contain one or more letters only
- Don't need to check if it's official

In: string
Out: boolean

AL:
- abstract logic into different validation methods
- first method we need: isValidLocal
  - method checks if the local part of the email is valid
- the second method we need: isValidDomain
  - method checks if the domain part is valid
*/

function isValidLocal(string) {
  return !string.match(/[^a-z0-9]/gi);
}

function isValidDomain(string) {
  let domParts = string.split('.');
  if (domParts.length < 2 || domParts.includes('')) return false;
  if (string.match(/[^a-z.]/gi)) return false;
  return true;
}

function isValidEmail(email) {
  let parts = email.split('@');
  let local = parts[0];
  let domain = parts[1];
  return isValidLocal(local) && isValidDomain(domain);
}

console.log(isValidEmail('Foo@baz.com.ph'));
console.log(isValidEmail('Foo@mx.baz.com.ph'));
console.log(isValidEmail('foo@baz.com'));
console.log(isValidEmail('foo@baz.ph'));
console.log(isValidEmail('HELLO123@baz'));
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false












