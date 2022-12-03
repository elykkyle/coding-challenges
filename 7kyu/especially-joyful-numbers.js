/*
https://www.codewars.com/kata/570523c146edc287a50014b1

DESCRIPTION:
Positive integers that are divisible exactly by the sum of their digits are called Harshad numbers. The first few Harshad numbers are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, ...

We are interested in Harshad numbers where the product of its digit sum s and s with the digits reversed, gives the original number n. For example consider number 1729:

its digit sum, s = 1 + 7 + 2 + 9 = 19
reversing s = 91
and 19 * 91 = 1729 --> the number that we started with.
Complete the function which tests if a positive integer n is Harshad number, and returns True if the product of its digit sum and its digit sum reversed equals n; otherwise return False.
*/

function numberJoy(n) {
  // sum up the digits of n.
  const sumOfDigits = n
    .toString()
    .split('')
    .map((num) => Number(num))
    .reduce((a, b) => a + b, 0);
  // Check if input is a Harshad number. Return false if not.
  if (n % sumOfDigits !== 0) {
    return false;
  }
  // reverse the digits of sum.
  const revSumOfDigits = sumOfDigits
    .toString()
    .split('')
    .reverse()
    .map((num) => Number(num))
    .join('');
  // multiply the sum by its reverse return whether it matches input.
  return sumOfDigits * revSumOfDigits === n;
}

// ----- tests -----
console.log(numberJoy(1997)); // false, 'Not a Harshad number'
console.log(numberJoy(1998)); // false, 'Harshad but digit sum=27, and 27x72 does not equal 1998'
console.log(numberJoy(1729)); // true, 'Harshad and digit sum=19, and 19x91 = 1729'
console.log(numberJoy(18)); // false, 'Harshad but digit sum=9, and 9x9 does not equal 18'
console.log(numberJoy(1)); // true, "It was correct"
console.log(numberJoy(81)); // true, "It was correct"
console.log(numberJoy(1458)); // true, "It was correct"
