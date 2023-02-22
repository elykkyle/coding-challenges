/*
https://www.codewars.com/kata/58235a167a8cb37e1a0000db

DESCRIPTION:
Pair of gloves
Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
*/

function numberOfPairs(gloves) {
  const obj = {};
  let pairs = 0;
  gloves.forEach((color) => {
    obj[color] ? obj[color]++ : (obj[color] = 1);
  });
  for (color in obj) {
    pairs += Math.floor(obj[color] / 2);
  }
  return pairs;
}

console.log(numberOfPairs(['red', 'red'])); // 1
console.log(numberOfPairs(['red', 'green', 'blue'])); // 0
console.log(
  numberOfPairs(['gray', 'black', 'purple', 'purple', 'gray', 'black'])
); // 3
