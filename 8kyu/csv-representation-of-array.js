/*
https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036

DESCRIPTION:
Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:

input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]]

output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'
Array's length > 2.


*/
function toCsvText(array) {
  let output = '';
  for (let i = 0; i < array.length; i++) {
    output += array[i].join(',');
    if (i < array.length - 1) {
      output += '\n';
    }
  }
  return output;
}

//solution from codewars:
function toCsvText2(array) {
  return array.join('\n');
}

let input = [
  [0, 1, 2, 3, 4],
  [10, 11, 12, 13, 14],
  [20, 21, 22, 23, 24],
  [30, 31, 32, 33, 34],
];

console.log(toCsvText(input));
console.log(toCsvText2(input));
