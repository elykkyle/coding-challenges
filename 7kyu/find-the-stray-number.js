/*
https://www.codewars.com/kata/57f609022f4d534f05000024

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3


*/

/*

solution failed random tests.

function stray(numbers) {
  let a, b, c;
  for (let i = 0; i < numbers.length - 2; i++) {
    a = numbers[i];
    b = numbers[i + 1];
    c = numbers[i + 2];
    if (a !== b && a !== c) {
      return a;
    } else if (b !== a && b !== c) {
      return b;
    } else {
      return c;
    }
  }
} */

console.log(stray([1, 1, 2]));
console.log(stray([17, 17, 3, 17, 17, 17, 17]));

function stray(numbers) {
  for (let i in numbers) {
    if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
      return numbers[i];
    }
  }
}

// const stray = (nums) => nums.reduce((a, b) => a ^ b);
