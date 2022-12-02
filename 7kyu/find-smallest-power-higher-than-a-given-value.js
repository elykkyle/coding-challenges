/*
https://www.codewars.com/kata/56ba65c6a15703ac7e002075

DESCRIPTION:
We have the number 12385. We want to know the value of the closest cube but higher than 12385. The answer will be 13824.

Now, another case. We have the number 1245678. We want to know the 5th power, closest and higher than that number. The value will be 1419857.

We need a function find_next_power ( findNextPower in JavaScript, CoffeeScript and Haskell), that receives two arguments, a value val, and the exponent of the power, pow_, and outputs the value that we want to find.

Let'see some cases:

findNextPower(12385, 3) == 13824

findNextPower(1245678, 5) == 1419857
The value, val will be always a positive integer.

The power, pow_, always higher than 1.
*/

// function findNextPower(val, pow_) {
//   // let y = Math.round(Math.pow(Math.abs(val), 1 / pow_));
//   let y = Math.pow(Math.abs(val), 1 / pow_);
//   console.log(`y: `, y);
//   return Math.pow(++y, pow_);
// }

console.log(findNextPower(8, 3)); // 27
console.log(findNextPower(12385, 3)); // 13824
console.log(findNextPower(1245678, 5)); //1419857
console.log(findNextPower(1245678, 6)); // 1771561
console.log(findNextPower(4782969, 7)); // 10000000

// From CodeWars:
function findNextPower(val, pow_) {
  return Math.pow(Math.ceil(Math.pow(val + 1, 1 / pow_)), pow_);
}
