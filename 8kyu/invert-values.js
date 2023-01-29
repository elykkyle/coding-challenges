/*
https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/javascript

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.


*/

function invert(array) {
  return array.map((num) => num * -1);
}

console.log(invert([1, 2, 3, 4, 5])); // [-1,-2,-3,-4,-5]);
console.log(invert([1, -2, 3, -4, 5])); // [-1,2,-3,4,-5]);
console.log(invert([])); // []);
console.log(invert([0])); // [-0]);
