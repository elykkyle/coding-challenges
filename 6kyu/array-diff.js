/*
https://www.codewars.com/kata/523f5d21c841566fde000009/

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

Params: Two arrays of integers - either array may be empty
Return: Array w/ values of 1st array, without the values in the 2nd array. preserve order of 1st array
Examples: [1, 2], [1] = [2];
[1, 2, 2], [1] = [2, 2]
[1, 2, 2], [2] = [1]

Psueduocode:
arrayDiff(a, b)
  result = b foreach val => a.filter(val)


*/

function arrayDiff(a, b) {
  const result = [];
  if (b.length === 0) return a;
  a.forEach((el) => {
    if (!b.includes(el)) {
      result.push(el);
    }
  });
  return result;
}

console.log(arrayDiff([1, 2], [1])); //  [2], "a was [1,2], b was [1]");
console.log(arrayDiff([1, 2, 2], [1])); //  [2,2], "a was [1,2,2], b was [1]");
console.log(arrayDiff([1, 2, 2], [2])); //  [1], "a was [1,2,2], b was [2]");
console.log(arrayDiff([1, 2, 2], [])); //  [1,2,2], "a was [1,2,2], b was []");
console.log(arrayDiff([], [1, 2])); //  [], "a was [], b was [1,2]");
console.log(arrayDiff([1, 2, 3], [1, 2])); //  [3], "a was [1,2,3], b was [1,2]")

// top solution from CodeWars:
function array_diff(a, b) {
  return a.filter((e) => !b.includes(e));
}
