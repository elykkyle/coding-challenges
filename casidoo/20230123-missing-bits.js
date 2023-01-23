/*
You are given a list of positive integers which represents some range of integers which has been truncated. Find the missing bits, insert ellipses to show that that part has been truncated, and print it. If the consecutive values differ by exactly two, then insert the missing value.

Examples:

> missingBits([1,2,3,4,20,21,22,23])
> "[1,2,3,4,...,20,21,22,23]"

> missingBits([1,2,3,5,6])
> "[1,2,3,4,5,6]"

> missingBits([1,3,20,27])
> "[1,2,3,...,20,...,27]"
*/

function missingBits(arr) {
  arr.forEach((num, i, a) => {
    if (a[i] - a[i - 1] > 2) {
      arr.splice(i, 0, '...');
    }
    if (a[i] - a[i - 1] === 2) {
      arr.splice(a[i - 1], 0, a[i] - 1);
    }
  });
  return arr;
}

console.log(missingBits([1, 2, 3, 4, 20, 21, 22, 23]));
console.log(missingBits([1, 2, 3, 5, 6]));
console.log(missingBits([1, 3, 20, 27]));
