/*
In: string
Out: boolean

Rule:
- '(' and ')' occur in matching pairs
- each pair starts with '('

AL:
- filter the string chars array for '(' and ')'
- walk through the resulting array checking if
  - '(' comes before ')' and there are equal number of parens

*/

function isBalanced(string) {
  let parenCounter = 0
  let i;
  let parensArr = [...string].filter(char => {
    return ['(', ')'].includes(char)
  });

  for (i = 0; i < parensArr.length; i += 1) {
    if (parensArr[i] === '(') {
      parenCounter += 1;
    } else {
      parenCounter -= 1;
    }

    if (parenCounter < 0) return false;
  }

  return parenCounter === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false







