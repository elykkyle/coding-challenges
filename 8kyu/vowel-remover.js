/*
https://www.codewars.com/kata/5547929140907378f9000039

DESCRIPTION:
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
*/

function shortcut(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return string
    .split('')
    .filter((char) => (vowels.includes(char) ? '' : char))
    .join('');
}

console.log(shortcut('hello')); // 'hll';
console.log(shortcut('how are you today?')); // 'hw r y tdy?';
console.log(shortcut('complain')); // 'cmpln';
console.log(shortcut('never')); // 'nvr';
