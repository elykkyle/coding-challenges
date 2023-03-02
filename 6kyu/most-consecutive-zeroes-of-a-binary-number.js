/*
https://www.codewars.com/kata/59decdf40863c76ae3000080

DESCRIPTION:
Given a string (str) containing a base-10 integer between 0 and 10000, convert the integer to its binary representation. At that point, obtain a count of the maximum amount of consecutive 0s. From there, return the count in written form with a capital letter.

max_consec_zeros("9") => "Two"
max_consec_zeros("13") => "One"
max_consec_zeros("15") => "Zero"
max_consec_zeros("42") => "One"
max_consec_zeros("550") => "Three"
In the very first example, we have an argument of "9" which is being passed to the method. The binary representation of 9 is 1001 which can be read as: one, zero, zero, one. There are, at most, two consecutive 0s, resulting in the integer 2 as the value of the count. The output in the block of code above reflects the final step of taking 2 from standard form to the written form "Two" as prompted.

In the very last example, we have an argument of "550" which is being passed to the method. The binary representation of 550 is 1000100110 which can be read as: one, zero, zero, zero, one, zero, zero, one, one, zero. There are, at most, three consecutive 0s, resulting in the integer 3 as the value of the count. The output in the block of code above reflects the final step of taking 3 from standard form to the written form of "Three" as prompted.

One way, among many, to visualize the end of each step might look like:

max_consec_zeros("777")
1: "777"
2: 777
3: 1100001001
4: 4
5: "Four"
max_consec_zeros("777") => "Four"
*/

function maxConsecZeros(n) {
  const written = [
    'Zero',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
    'Eleven',
    'Twelve',
    'Thirteen',
    'Fourteen',
  ];
  const longest = parseInt(n)
    .toString(2)
    .split('1')
    .reduce((a, b) => {
      return a.length > b.length ? a : b;
    }).length;
  return written[longest];
}

console.log(maxConsecZeros('7')); // "Zero"
console.log(maxConsecZeros('33')); // "Four"
console.log(maxConsecZeros('77')); // "Two"
console.log(maxConsecZeros('100')); // "Two"
console.log(maxConsecZeros('105')); // "Two"
console.log(maxConsecZeros('113')); // "Three"
console.log(maxConsecZeros('160')); // "Five"
console.log(maxConsecZeros('180')); // "Two"
console.log(maxConsecZeros('223')); // "One"
console.log(maxConsecZeros('256')); // "Eight"
console.log(maxConsecZeros('777')); // "Four"
console.log(maxConsecZeros('992')); // "Five"
console.log(maxConsecZeros('1024')); // "Ten"
console.log(maxConsecZeros('1037')); // "Six"
console.log(maxConsecZeros('1088')); // "Six"
console.log(maxConsecZeros('2017')); // "Four"
console.log(maxConsecZeros('2048')); // "Eleven"
console.log(maxConsecZeros('3050')); // "One"
console.log(maxConsecZeros('4096')); // "Twelve"
console.log(maxConsecZeros('6144')); // "Eleven"
console.log(maxConsecZeros('6656')); // "Nine"
console.log(maxConsecZeros('7188')); // "Five"
console.log(maxConsecZeros('8192')); // "Thirteen"
console.log(maxConsecZeros('9999')); // "Four"
console.log(maxConsecZeros('10000')); // "Four"
