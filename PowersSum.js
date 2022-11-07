const a = [1, 2, 2];

function squareSum(numbers) {
  return numbers
    .map((num) => num * num)
    .reduce((prev, cur) => (prev = prev + cur), 0);
}
