/*
https://www.codewars.com/kata/560a4962c0cc5c2a16000068

DESCRIPTION:
Not considering number 1, the integer 153 is the first integer having this property: the sum of the third-power of each of its digits is equal to 153. Take a look: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153

The next number that experiments this particular behavior is 370 with the same power.

Write the function eq_sum_powdig(), that finds the numbers below a given upper limit hMax (inclusive) that fulfills this property but with different exponents as the power for the digits.

eq_sum_powdig(hMax, exp): ----> sequence of numbers (sorted list) (Number one should not be considered).

Let's see some cases:

eqSumPowdig(100, 2) ----> []

eqSumPowdig(1000, 2) ----> []

eqSumPowdig(200, 3) ----> [153]

eqSumPowdig(370, 3) ----> [153, 370]
Enjoy it !!
*/

function eqSumPowdig(hMax, exp) {
  const output = [];
  for (let i = 2; i <= hMax; i++) {
    let iPowerSum = i
      .toString()
      .split('')
      .reduce((sum, num) => (sum += Math.pow(+num, exp)), 0);
    if (i === iPowerSum) {
      output.push(i);
    }
  }
  return output;
}

console.log(eqSumPowdig(100, 2));

console.log(eqSumPowdig(1000, 2));

console.log(eqSumPowdig(200, 3));

console.log(eqSumPowdig(370, 3));
