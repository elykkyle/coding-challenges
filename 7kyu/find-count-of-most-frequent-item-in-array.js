/*
https://www.codewars.com/kata/56582133c932d8239900002e

DESCRIPTION:
Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

Example
input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5
The most frequent number in the array is -1 and it occurs 5 times.



*/
function mostFrequentItemCount(collection) {
  if (collection.length === 0) {
    return 0;
  }
  const obj = {};
  obj.max = Number.NEGATIVE_INFINITY;
  for (i = 0; i < collection.length; i++) {
    !obj[collection[i]] ? (obj[collection[i]] = 1) : obj[collection[i]]++;
  }
  for (const prop in obj) {
    if (obj[prop] > obj.max) {
      obj.max = obj[prop];
    }
  }
  return obj.max;
}

const arr1 = [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]; // 5
const arr2 = [3, -1, -1]; // 2

console.log(mostFrequentItemCount(arr1));
console.log(mostFrequentItemCount(arr2));
console.log(mostFrequentItemCount([])); // 0
console.log(
  mostFrequentItemCount([
    8, -13, 12, -6, -13, -9, 9, -9, -4, -15, 6, -7, 10, -13, -15, -9, 14, -10,
    6, -12, 0, -10, -4, -13, -14, 6, -5,
  ])
); // 4

/*
Solution from CodeWars:

function mostFrequentItemCount(collection) {
  if (collection.length === 0) return 0;

  var count = Object.create(null);

  collection.forEach( item => {
    count[item] = (count[item] || 0) + 1;
  });

  return Math.max(...Object.values(count));
}

*/
