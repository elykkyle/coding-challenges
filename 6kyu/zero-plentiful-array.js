/*
https://www.codewars.com/kata/59e270da7997cba3d3000041

DESCRIPTION:
An array is called zero-plentiful if it contains multiple zeros, and every sequence of zeros is at least 4 items long.

Your task is to return the number of zero sequences if the given array is zero-plentiful, oherwise 0.

Examples
[0, 0, 0, 0, 0, 1]  -->  1
# 1 group of 5 zeros (>= 4), thus the result is 1

[0, 0, 0, 0, 1, 0, 0, 0, 0]  -->  2
# 2 group of 4 zeros (>= 4), thus the result is 2

[0, 0, 0, 0, 1, 0]  -->  0
# 1 group of 4 zeros and 1 group of 1 zero (< 4)
# _every_ sequence of zeros must be at least 4 long, thus the result is 0

[0, 0, 0, 1, 0, 0]  -->  0
# 1 group of 3 zeros (< 4) and 1 group of 2 zeros (< 4)

[1, 2, 3, 4, 5]  -->  0
# no zeros

[]  -->  0
# no zeros
*/

/* function zeroPlentiful(arr) {
  let count = 0;
  let consecutive = 0;
  let first = arr.findIndex(0)

} */

// Solution from CodeWars. map checks for falsiness. if falsey (0 is falsey), 0 gets added to array. if truthy (any integer), then a comma is added.
// map is joined to a string, then split at commas. empty strings are filtered out.
// return checks remaining strings. all must have length greater than or equal to 4, otherwise 0 is returned.
function zeroPlentiful(arr) {
  const sequences = arr
    .map((x) => (!x ? x : ','))
    .join('')
    .split(',')
    .filter((str) => str);
  console.log(sequences);
  return sequences.every((str) => str.length >= 4) ? sequences.length : 0;
}

console.log(zeroPlentiful([0, 2, 0, 0, 0, 0, 3, 4, 5, 0, 0, 0, 0, 0])); // 0
console.log(zeroPlentiful([3])); // 0
console.log(zeroPlentiful([0, 0, 0, 0, 0, 0])); // 1
console.log(zeroPlentiful([0, 2, 19, 4, 4])); // 0
console.log(zeroPlentiful([1, 0, 0, 0, 0, 5, 4, 0, 0, 0, 0, 0])); // 2
console.log(zeroPlentiful([-3, 2, 1, 3, -1, -2])); // 0
console.log(zeroPlentiful([1000, 0, 1, 0, 0, 0, 0])); // 0
console.log(zeroPlentiful([10, 0, 0, 0])); // 0
console.log(zeroPlentiful([])); // 0
