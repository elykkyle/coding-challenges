/*
https://www.codewars.com/kata/5844ba39a87f763849000c98

Build a function findNestedMaximum that finds the maximum value in an array containing both numbers and nested arrays. The nested arrays themselves can contain both numbers and further nested arrays. Some of the arrays may be empty but at least one number will be present amongst all the arrays.

For example, findNestedMaximum([4, -3, [10], [[-5, 6], 18]]) should return 18.
*/

function findNestedMaximum(arr) {
  let max = Number.NEGATIVE_INFINITY;
  const findMax = (arrA) => {
    arrA.forEach((el) => {
      if (typeof el === 'number') {
        el > max ? (max = el) : '';
      } else if (typeof el === 'object') {
        findMax(el);
      }
    });
  };
  findMax(arr);
  return max;
}

console.log(findNestedMaximum([4, -3, [10], [[-5, 6], 18]])); // 18;
console.log(findNestedMaximum([2, 3, 4]));
