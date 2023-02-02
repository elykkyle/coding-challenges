/*
https://www.codewars.com/kata/56a5d994ac971f1ac500003e

You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

Note
consecutive strings : follow one after another without an interruption

Params: array of strings, and integer 'k' specifying how many consecutive strings to concatenate
Returns: one string consisting of 'k' strings from array with no separator. the first longest string.
Example: ['one', 'two', 'three', 'four'], 2 -> 'threefour'
  ['kyle', 'darryl', 'joseph', 'roger'] 3 -> 'darryljosephroger
Pseudocode:
  func (strarr, k){
    let longest = ''
    n = strarr.length
    if n = 0 || k > n || k <= 0
      return longest
    for let i, i < strarr.length && i < k, i++
      str = strarr.slice(i, i + k),join('')
      str.length > longest.length? longest = str : ''
    return longest
  }
*/

function longestConsec(strarr, k) {
  let longest = '';
  const n = strarr.length;
  if (n === 0 || k > n || k <= 0) return longest;
  for (let i = 0; i < n - k + 1; i++) {
    const str = strarr.slice(i, i + k).join('');
    str.length > longest.length ? (longest = str) : '';
  }
  return longest;
}

console.log(
  longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2)
); // "abigailtheta")
console.log(
  longestConsec(
    [
      'ejjjjmmtthh',
      'zxxuueeg',
      'aanlljrrrxx',
      'dqqqaaabbb',
      'oocccffuucccjjjkkkjyyyeehh',
    ],
    1
  )
); // "oocccffuucccjjjkkkjyyyeehh")
console.log(longestConsec([], 3)); // "")
console.log(
  longestConsec(
    [
      'itvayloxrp',
      'wkppqsztdkmvcuwvereiupccauycnjutlv',
      'vweqilsfytihvrzlaodfixoyxvyuyvgpck',
    ],
    2
  )
); // "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
console.log(
  longestConsec(['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'], 2)
); // "wlwsasphmxxowiaxujylentrklctozmymu")
console.log(
  longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], -2)
); // "")
console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3)); // "ixoyx3452zzzzzzzzzzzz")
console.log(
  longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 15)
); // "")
console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 0)); // "")
