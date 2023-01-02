/*
https://www.codewars.com/kata/5727bb0fe81185ae62000ae3

Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

function cleanString(s) {
  const result = [];
  for (let i = 0; i < s.length; i++) {
    s[i] !== '#' ? result.push(s[i]) : result.pop();
  }
  return result.join('');
}
//       if (s[i] !== '#') {
//     result.push(s[i]);
//   if (s[i] === '#') {
//     result.pop();
//   }
// }

console.log(cleanString('abc#d##c')); // 'ac';
console.log(cleanString('abc####d##c#')); // ''
