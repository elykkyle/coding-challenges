/*
https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8

In this kata you are given a string for example:

"example(unwanted thing)example"
Your task is to remove everything inside the parentheses as well as the parentheses themselves.

The example above would return:

"exampleexample"
Notes
Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
There can be multiple parentheses.
The parentheses can be nested.
*/

function removeParentheses(s) {
  let stringArr = [...s];
  if (!stringArr.includes('(')) {
    return s;
  }
  let start = s.lastIndexOf('(');
  let end = s.indexOf(')', start);
  stringArr.splice(start, end - start + 1);
  let newString = stringArr.join('');
  return removeParentheses(newString);
}

console.log(removeParentheses('example(unwanted thing)example')); // "exampleexample"
console.log(removeParentheses('example (unwanted thing) example')); //  "example  example"
console.log(removeParentheses('a (bc d)e')); // "a e"
console.log(removeParentheses('a(b(c))')); // "a"
console.log(
  removeParentheses('hello example (words(more words) here) something')
); // "hello example  something"
console.log(removeParentheses('(first group) (second group) (third group)')); // "  "
