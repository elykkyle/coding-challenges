/*
https://www.codewars.com/kata/56abc5e63c91630882000057

DESCRIPTION:
Make a function that receives a value, val and outputs the smallest higher number than the given value, and this number belong to a set of positive integers that have the following properties:

their digits occur only once

they are odd

they are multiple of three

nextNumb(12) == 15

nextNumb(13) == 15

nextNumb(99) == 105

nextNumb(999999) == 1023459

nextNumber(9999999999) == "There is no possible number that
fulfills those requirements"
Enjoy the kata!!
*/

function nextNumb(val) {
  let nextNumber;
  const max = 9999999999;
  if (val === max) {
    return 'There is no possible number that fulfills those requirements';
  }
  let i = val;
  while (i < max) {
    i++;
    if (i % 3 !== 0 || i % 2 === 0) {
      continue;
    }
    let arrOfI = Array.from(String(i), Number);
    if (arrOfI.length !== new Set(arrOfI).size) {
      continue;
    }
    nextNumber = i;
    break;
  }
  return nextNumber;
}

console.log(nextNumb(12));
console.log(nextNumb(13));
console.log(nextNumb(99));
console.log(nextNumb(999999));
console.log(nextNumb(9999999));
console.log(nextNumb(9999999999));
