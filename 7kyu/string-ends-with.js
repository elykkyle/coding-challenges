/*
https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

DESCRIPTION:
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

function solution(str, ending) {
  return ending.length === 0 ? true : str.slice(-ending.length) === ending;
}

// TIL there's an 'endsWith' string method.
/* function solution(str, ending) {
  return str.endsWith(ending);
} */

console.log(solution('abcde', 'cde')); // true
console.log(solution('abcde', 'abc')); // false
console.log(solution('abcde', '')); // true
