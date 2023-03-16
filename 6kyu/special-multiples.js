/*
https://www.codewars.com/kata/55e785dfcb59864f200000d9

Some numbers have the property to be divisible by 2 and 3. Other smaller subset of numbers have the property to be divisible by 2, 3 and 5. Another subset with less abundant numbers may be divisible by 2, 3, 5 and 7. These numbers have something in common: their prime factors are contiguous primes.

Implement a function that finds the amount of numbers that have the first N primes as factors below a given limit.

Let's see some cases:

count_specMult(3, 200)  =>  6

The first 3 primes are: 2, 3 and 5.

And the found numbers below 200 are: 30, 60, 90, 120, 150, 180.

Params = 2 integers. 1st is how many primes should be used to check number range, 2nd is the upper limit of number range.
Return = number of numbers that are divisible by N primes, below upper limit
Examples = countSpecMult(3, 200) ==> 30, 60, 90, 120, 150, 180
Pseudocode

build list of primes = [2,3,5]
let count = 0;
loop start from top
  n(highest # in range) % 5(highest prime) === 0 ? n % 3 === 0 ? n
  for i = n; i >=2; i--
    for j = primes.length; j >= 0; j--
    if j === 0 count++
      else if i % primes[j] === 0
      continue
        else break
*/

function countSpecMult(n, mxval) {
  let next = 1,
    primes = [2],
    product = 2;

  while (primes.length < n) {
    next += 2;

    if (!primes.every((p) => next % p)) continue;

    primes.push(next);
    product *= next;
  }

  return (mxval / product) | 0;
}

console.log(countSpecMult(3, 200));
