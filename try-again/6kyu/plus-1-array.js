/*
https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9

DESCRIPTION:
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
Valid arrays

[4, 3, 2, 5] would return [4, 3, 2, 6]
[1, 2, 3, 9] would return [1, 2, 4, 0]
[9, 9, 9, 9] would return [1, 0, 0, 0, 0]
[0, 1, 3, 7] would return [0, 1, 3, 8]

Invalid arrays

[1, -9] is invalid because -9 is not a non-negative integer

[1, 2, 33] is invalid because 33 is not a single-digit integer
*/

function upArray(arr) {
  let result = [];
  let plusOne = false;
  let i = arr.length - 1;
  arr.forEach((num) => {
    !invalid(num) ? '' : (result = null);
  });
  if (!result) return result;
  arr[i] += 1;
  arr[i] === 10 ? (plusOne = true) : '';
  while (plusOne) {
    console.log(arr);
    arr[i] = 0;
    if (arr[i] === 0) {
      plusOne = false;
      arr.unshift(1);
    }
    arr[i - 1] += 1;
    arr[i - 1] < 10 ? (plusOne = false) : (plusOne = true);
    i--;

    console.log(arr);
  }
  return arr;
}
function invalid(num) {
  return num < 0 || num > 9;
}

// console.log(upArray([4, 3, 2, 5])); // [4,3,2,6]);
// console.log(upArray([2, 3, 9, 9])); // [2,4,0,0]);
console.log(upArray([9, 9])); //   [1,0,0]);
// console.log(upArray([0, 7])); //    [0,8]);
// console.log(
//   upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
// ); // [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,1]);

// console.log(upArray([1, -9])); // null
// console.log(upArray([1, 10])); // null

// solution from codewars:

function upArray(arr) {
  if (arr.length == 0 || arr.some((e) => e < 0 || e > 9)) return null;

  let i = arr.length - 1;

  while (i >= 0 && arr[i] == 9) arr[i--] = 0;

  if (i < 0) arr.unshift(1);
  else arr[i]++;

  return arr;
}
