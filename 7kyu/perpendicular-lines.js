/*
https://www.codewars.com/kata/6391fe3f322221003db3bad6

You are given an input (n) which represents the amount of lines you are given, your job is to figure out what is the maximum amount of perpendicular bisectors you can make using these lines.

Note: A perpendicular bisector is one that forms a 90 degree angle

n will always be greater than or equal to 0
Examples with 3 and 4 lines
*/
function maxBisectors(n) {
  let bisectors = 0,
    adder = 0;
  for (let i = 0; i <= n; i++) {
    if (i > 1 && i % 2 === 0) {
      adder++;
    }
    bisectors += adder;
  }
  return bisectors;
}

console.log(maxBisectors(0)); // 0
console.log(maxBisectors(1)); // 0
console.log(maxBisectors(2)); // 1
console.log(maxBisectors(3)); // 2
console.log(maxBisectors(4)); // 4
console.log(maxBisectors(5)); // 6
console.log(maxBisectors(6)); // 9
console.log(maxBisectors(51)); // 650
