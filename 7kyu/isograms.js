/*
https://www.codewars.com/kata/54ba84be607a92aa900000f1

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false

*/

function isIsogram(str) {
  if (str === '') {
    return true;
  }
  let isIso = true;
  str
    .toLowerCase()
    .split('')
    .forEach((char, i, arr) => {
      const lastChar = arr.lastIndexOf(char);
      if (i !== lastChar) {
        isIso = false;
      }
    });
  return isIso;
}

console.log(isIsogram('Dermatoglyphics')); // true
console.log(isIsogram('isogram')); // true
console.log(isIsogram('aba')); // false
console.log(isIsogram('moOse')); // false
console.log(isIsogram('isIsogram')); // false
console.log(isIsogram('')); // true

/*
from CodeWars: (creates a new Set from string, then compares the length of the set to the length of the input string. Set can only have unique values and prevents duplicate entries from being created.)

function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

*/
