/*
https://www.codewars.com/kata/5a3f2925b6cfd78fb0000040

Given a string, return the minimal number of parenthesis reversals needed to make balanced parenthesis.

For example:

solve(")(") = 2 Because we need to reverse ")" to "(" and "(" to ")". These are 2 reversals.
solve("(((())") = 1 We need to reverse just one "(" parenthesis to make it balanced.
solve("(((") = -1 Not possible to form balanced parenthesis. Return -1.
Parenthesis will be either "(" or ")".

More examples in the test cases.
*/

/* function solve(s) {
  if (s.length % 2 != 0) return -1;
  sArr = s.split('');
  let counter = 0;
  for (let i = 1; i < sArr.length; i++) {
    sArr[i] === ')' ? counter++ : '';
  }
  return counter;
} */

console.log(solve(')()(')); // 2);
console.log(solve('((()')); // 1);
console.log(solve('(((')); // -1);
console.log(solve('())(((')); // 3);
console.log(solve('())()))))()()(')); // 4);

// solution from codewars:

function solve(s) {
  if (s.length % 2 != 0) return -1;
  let res = 0,
    k = 0;
  for (let c of s) {
    if (c == '(') k++;
    else if (k > 0) k--;
    else k++, res++;
  }
  return res + k / 2;
}
