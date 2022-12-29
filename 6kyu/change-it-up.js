/*
https://www.codewars.com/kata/58039f8efca342e4f0000023

Create a function that takes a string as a parameter and does the following, in this order:

Replaces every letter with the letter following it in the alphabet (see note below)
Makes any vowels capital
Makes any consonants lower case
Note:

the alphabet should wrap around, so Z becomes A
in this kata, y isn't considered as a vowel.
So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)

*/

/*
function changer(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let shifted = '';
  let cased = '';
  for (c of str) {
    if (c === 'z') {
      shifted += 'a';
    } else if (c === 'Z') {
      shifted += 'A';
    } else if (
      (c.charCodeAt() >= 97 && c.charCodeAt() <= 121) ||
      (c.charCodeAt() >= 65 && c.charCodeAt() <= 89)
    ) {
      shifted += String.fromCharCode(c.charCodeAt() + 1);
    } else {
      shifted += c;
    }
  }
  for (c of shifted) {
    if (vowels.includes(c)) {
      cased += c.toUpperCase();
    } else {
      cased += c.toLowerCase();
    }
  }
  return cased;
}
 */

function changer(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let result = '';
  for (c of str) {
    let newChar = '';
    if (c === 'z' || c === 'Z') {
      newChar = 'A';
    } else if (
      (c.charCodeAt() >= 97 && c.charCodeAt() <= 121) ||
      (c.charCodeAt() >= 65 && c.charCodeAt() <= 89)
    ) {
      newChar = String.fromCharCode(c.charCodeAt() + 1);
      if (vowels.includes(newChar)) {
        newChar = newChar.toUpperCase();
      } else {
        newChar = newChar.toLowerCase();
      }
    } else {
      newChar = c;
    }
    result += newChar;
  }
  return result;
}

// console.log(changer('Cat30')); // 'dbU30'
// console.log(changer('Alice')); // 'bmjdf'
// console.log(changer('sponge1')); // 'tqpOhf1'
// console.log(changer('Hello World')); // 'Ifmmp xpsmE'
// console.log(changer('dogs')); // 'Epht'
// console.log(changer('z')); // 'A'
console.log(changer('hxNtsBSsslJnJBIjfuXIZh7gNsDKFcWQw')); // 'IyOUtctttmkOkcjkgvyjAI7hOtElgdxrx'
