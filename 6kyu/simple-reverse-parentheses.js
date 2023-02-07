/*
https://www.codewars.com/kata/5a3f2925b6cfd78fb0000040

DESCRIPTION:
Given a string, return the minimal number of parenthesis reversals needed to make balanced parenthesis.

For example:

solve(")(") = 2 Because we need to reverse ")" to "(" and "(" to ")". These are 2 reversals.
solve("(((())") = 1 We need to reverse just one "(" parenthesis to make it balanced.
solve("(((") = -1 Not possible to form balanced parenthesis. Return -1.
Parenthesis will be either "(" or ")".

More examples in the test cases.

Good luck.
*/
function solve(s) {
  if (s.length % 2 !== 0) return -1;
  while (s.includes('()')) {
    s = s.replace(/\(\)/g, '');
  }
  let count = 0;
  const obj = {
    ')(': 2,
    '((': 1,
    '))': 1,
  };
  for (let i = 0; i <= s.length - 2; i += 2) {
    count += obj[s[i] + s[i + 1]];
  }
  return count;
}

// console.log(solve(')()(')); //2
// console.log(solve('((()')); //1
// console.log(solve('(((')); //-1
// console.log(solve('())(((')); //3
// console.log(solve('())()))))()()(')); //4
console.log(
  solve(
    ')))((()()(()(())()((()(((((()()()))))()))()()))(()))))()())))))()))((()((((()(()))(((()((((())(()))()(((())())(()()(((())()()())))()())()(()()()(()))(())))())))()))((((((()()))))))()()((())((())))()()(())()((())((((()(())(())))((()))((((())()((())(()())))(((()()()))()()))))(((())()()(()()()(((()()())))()))))()(((()))))((()))()))())((()(())))()()((())((()()(()(((()))(((())())()())())())()()())((())))()())))((()(()()()()(()(()()))(())((()(((()((()(()()))()())(()()))))(())()((()()())(((())(()((((((()())()(()()()()(((()()())()())(()()()())))())((((()(((()(((((()(())())()((()())(()())))(()()(((())((()))(((((()))))((()(((((()())))))((()))()((((()))(()((()((()(()())(()((()()(((()))())())((()(())(()(((())))())))((()(()((((()())(()()(()())))))()())(())((())))(()())()))))(())())))))()((()))()(()))())())))((()(())(((((()((())))((()((())(()()(()))))()))()(()(()()())(()(())()()(()()(())))((((())())))()((((())))(()())((())())()())'
  )
); // 23
