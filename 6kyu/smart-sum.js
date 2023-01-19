/*
https://www.codewars.com/kata/5831200eb812b8016d000094

Your task is to write a function, smartSum, that returns the sum of an arbitrary number of arguments. But be careful, some of your arguments can be arrays of numbers or nested arrays.

smartSum(1,2,3,[4,5],6); // returns 21
smartSum(1,2,[[3,4],5],6); // returns 21
*/

function smartSum() {
  let sum = 0;
  const args = [...arguments];
  const process = (arg) => {
    if (typeof arg != 'number') {
      arg.forEach((arg2) => process(arg2));
    } else {
      sum = sum + arg;
    }
  };
  args.forEach((arg) => process(arg));
  return sum;
}

console.log(smartSum(1, 2)); // 3
console.log(smartSum([1, 2], 3)); // 6
console.log(smartSum(1, 2, 3, [4, 5], 6)); // 21
console.log(smartSum(1, 2, [[3, 4], 5], 6)); // 21
