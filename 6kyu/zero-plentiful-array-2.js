/*
https://www.codewars.com/kata/59e270da7997cba3d3000041

DESCRIPTION:
An array is called zero-plentiful if it contains multiple zeros, and every sequence of zeros is at least 4 items long.

Your task is to return the number of zero sequences if the given array is zero-plentiful, otherwise 0.

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

function zeroPlentiful(arr) {
  const result = arr
    .map((num) => (num === 0 ? num : ','))
    .join('')
    .split(',')
    .filter((str) => str);

  return result.every((str) => str.length >= 4) ? result.length : 0;
}

console.log(zeroPlentiful([0, 2, 0, 0, 0, 0, 3, 4, 5, 0, 0, 0, 0, 0])); // 0);
console.log(zeroPlentiful([3])); // 0);
console.log(zeroPlentiful([0, 0, 0, 0, 0, 0])); // 1);
console.log(zeroPlentiful([0, 2, 19, 4, 4])); // 0);
console.log(zeroPlentiful([1, 0, 0, 0, 0, 5, 4, 0, 0, 0, 0, 0])); // 2);
console.log(zeroPlentiful([-3, 2, 1, 3, -1, -2])); // 0);
console.log(zeroPlentiful([1000, 0, 1, 0, 0, 0, 0])); // 0);
console.log(zeroPlentiful([10, 0, 0, 0])); // 0);
console.log(zeroPlentiful([])); // 0);
