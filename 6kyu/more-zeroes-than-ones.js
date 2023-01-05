/*
https://www.codewars.com/kata/5d41e16d8bad42002208fe1a

DESCRIPTION:
Create a moreZeros function which will receive a string for input, and return an array (or null terminated string in C) containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

You should remove any duplicate characters, keeping the first occurrence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.

Examples

'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
               True       True       False      True       False

        --> ['a','b','d']

'DIGEST'--> ['D','I','E','T']
All input will be valid strings of length > 0. Leading zeros in binary should not be counted.

*/
/*
function moreZeros(s) {
  const bins = Array.from(new Set(s.split(''))).map((c) =>
    c.charCodeAt().toString(2)
  );
  const filtered = bins.filter((bin) => {
    return bin.length / 2 > bin.split('').reduce((a, c) => a + +c, 0);
  });
  const result = filtered.map((el) => String.fromCharCode(parseInt(el, 2)));
  return result;
}
 */

// refactoring to remove unnecessary variables:
function moreZeros(s) {
  return Array.from(new Set(s.split('')))
    .map((c) => c.charCodeAt().toString(2))
    .filter((bin) => {
      return bin.length / 2 > bin.split('').reduce((a, c) => a + +c, 0);
    })
    .map((el) => String.fromCharCode(parseInt(el, 2)));
}

console.log(moreZeros('abcde')); // ['a','b','d'])
console.log(moreZeros('Great job!')); // ['a', ' ', 'b', '!'])
console.log(moreZeros('DIGEST')); // ['D','I','E','T'])
console.log(moreZeros('abcdeabcde')); // ['a','b','d'],'Should not return duplicates values')

/*

.filter((b) => {
        b.length < b.split('').reduce((a, b) => (a += +b), 0) / 2
          ? true
          : false;
      })
*/
