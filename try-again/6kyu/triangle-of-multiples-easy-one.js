/*
https://www.codewars.com/kata/58ecc0a8342ee5e920000115

See the following triangle:

____________________________________
 1
 2   4   2
 3   6   9   6   3
 4   8   12  16  12  8   4
 5   10  15  20  25  20  15  10  5
 ___________________________________

The total sum of the numbers in the triangle, up to the 5th line included, is 225, part of it, 144, corresponds to the total sum of the even terms and 81 to the total sum of the odd terms.

Create a function that may output an array with three results for each value of n.

triang_mult(n)  ----> [total_sum, total_even_sum, total_odd_sum]
Our example will be:

triang_mult(5) ----> [225, 144, 81]
Features of the random tests:

number of tests = 100
49 < n < 5000

*/

function multTriangle(n) {
  let sum, even, odd;
  for (let i = 1; i <= n; i++) {
    console.log({ i });
    let j = i;
    do {
      sum += j;
      j % 2 === 0 ? (even += j) : (odd += j);
      j++;
    } while (j <= i * i);
  }

  return [sum, even, odd];
}

// console.log(multTriangle(1)); // [1, 0, 1]);
console.log(multTriangle(2)); // [9, 8, 1]);
// console.log(multTriangle(3)); // [36, 20, 16]);
// console.log(multTriangle(4)); // [100, 84, 16]);
// console.log(multTriangle(5)); // [225, 144, 81]);
// console.log(multTriangle(10)); //[3025, 2400, 625]);
// console.log(multTriangle(50)); //[1625625, 1235000, 390625]);
