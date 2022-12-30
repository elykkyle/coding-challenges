/*
https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/

function multiplicationTable(size) {
  let result = [];
  for (let i = 1; i <= size; i++) {
    let row = [];
    for (let j = 1; j <= size; j++) {
      row.push(j * i);
    }
    result.push(row);
  }
  return result;
}

console.log(multiplicationTable(3)); // [[1,2,3], [2,4,6], [3,6,9]]
console.log(multiplicationTable(4)); // [[1,2,3,4], [2,4,6,8], [4,8,12,16]]
