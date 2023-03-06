/*
https://www.codewars.com/kata/585db3e8eec141ce9a00008f

DESCRIPTION:
In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

reverseVowels("Hello!"); // "Holle!"
reverseVowels("Tomatoes"); // "Temotaos"
reverseVowels("Reverse Vowels In A String") // "RivArsI Vewols en e Streng"
For simplicity, you can treat the letter y as a consonant, not a vowel.
*/

function reverseVowels(str) {
  const vowels = /a|e|i|o|u/i;
  const vowelsInStr = [];
  str.split('').forEach((char) => {
    vowels.test(char) ? vowelsInStr.push(char) : '';
  });
  let j = vowelsInStr.length - 1;
  let result = '';
  for (i = 0; i < str.length; i++) {
    if (vowels.test(str[i])) {
      result += vowelsInStr[j];
      j--;
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(reverseVowels('Hello!')); // "Holle!"
console.log(reverseVowels('Tomatoes')); // "Temotaos"
console.log(reverseVowels('Reverse Vowels In A String')); // "RivArsI Vewols en e Streng"
