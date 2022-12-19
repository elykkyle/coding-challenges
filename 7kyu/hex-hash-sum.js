/*
https://www.codewars.com/kata/5ab363ff6a176b29880000dd

Complete the function that accepts a valid string and returns an integer.

Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).

Examples
"Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
"Hello, World!"  ==> 91
"Forty4Three"    ==> 113

*/

/* function hexHash(code) {
  const hexArr = [];
  const intArr = [];
  for (let i = 0; i < code.length; i++) {
    hexArr.push(code.charCodeAt(i).toString(16));
  }
  hexArr.forEach((el) => {
    for (char of el) {
      +char ? intArr.push(+char) : '';
    }
  });
  return intArr.reduce((cur, acc) => cur + acc, 0);
} */

function hexHash(code) {
  const intArr = [];
  for (let i = 0; i < code.length; i++) {
    for (char of code.charCodeAt(i).toString(16)) {
      +char ? intArr.push(+char) : '';
    }
  }
  return intArr.reduce((cur, acc) => cur + acc, 0);
}

console.log(hexHash('Yo'));
console.log(hexHash('Hello, World!'));
console.log(hexHash('Forty4Three'));
