/*
https://www.codewars.com/kata/57a1fd2ce298a731b20006a4
Write a function that checks if a given string (case insensitive) is a palindrome.
*/
// function isPalindrome(x) {
//   const input = x.toLowerCase();
//   const halfLength = Math.floor(input.length / 2) + 1;
//   const firstHalf = input.substring(0, halfLength);
//   const lastHalf = input
//     .substring(input.length - halfLength)
//     .split('')
//     .reverse()
//     .join('');
//   return firstHalf === lastHalf;
// }

//final solution submitted:
function isPalindrome(x) {
  const charArr = x.toLowerCase().split('');
  for (let i = 0; i <= charArr.length / 2 + 1; i++) {
    if (charArr[i] !== charArr[charArr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

//after submitting: realized can just reverse the whole input and compare to original input.
/*
function isPalindrome(x){
  return x.split('').reverse().join('').toLowerCase() === x.toLowerCase() ? true : false
}
*/
