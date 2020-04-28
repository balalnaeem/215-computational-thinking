/*
in: string
out: string ( in reverse order)

rules:
- case is maintained
- everything is maintained the way it is, just reverse the order

Al:
- convert the string into chars
- reverse the chars array
- join the array with nothing
*/

function reverse(string) {
  return string.split('').reverse().join('');
}

console.log(reverse('hello'));
console.log(reverse('The quick brown fox'));