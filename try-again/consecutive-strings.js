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
Example: ['one', 'two', 'three', 'four'], k -> 'threefour'
  ['kyle', 'darryl', 'joseph', 'roger'] -> 'darryljoseph
Pseudocode:
  func (strarr, k){
    let longest = ''
    n = strarr.length
    if n = 0 || k > n || k <= 0
      return longest
    for let i, i < length - 1, l++
      if strarr[i].length + strarr[i + 1].length > longest.length
        longest = strarr[i] + strarr[i + 1]
    return longest
  }

*/
/*
function longestConsec(strarr, k) {
  let longest = '';
  const n = strarr.length;
  if (n === 0 || k > n || k <= 0) {
    return longest;
  }
  for (let i = 0; i < strarr.length - 1; i++) {
    const strLenth
    for (let j = k; j >= 0; j--){

    }
    if (strarr[i].length + strarr[i + 1].length > longest.length) {
      longest = strarr[i] + strarr[i + 1];
    }
  }
  return longest;
}
 */
console.log(
  longestConsec(['tree', 'foling', 'trashy', 'blue', 'abcdef', 'uvwxyz'], 2)
); // folingtrashy

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

// Solutions from codewars:

function longestConsec1(strarr, k) {
  // initialize longest variable to track the longest consecutive string
  let longest = '';
  // begin looping through strarr. using k and strarr.length for loop limit.
  // k has to be greater than 0. i has to be less than the strarr.length - k
  // (this prevents accessing non-existent array positions)
  for (let i = 0; k > 0 && i <= strarr.length - k; i++) {
    // create a new array from strarr with only k number of strings
    const tempArray = strarr.slice(i, i + k);
    // join strings in new array
    const tempStr = tempArray.join('');
    // compare joined string to string length of longest variable.
    if (tempStr.length > longest.length) {
      // if joined string is longer than longest, assign joined string to longest
      longest = tempStr;
    }
  }
  return longest;
}

function longestConsec2(strarr, k) {
  // return if k <=0 or if k is greater than the array length (per requirements)
  if (k <= 0 || k > strarr.length) {
    return '';
  }
  // use reduce fuction, inputting 'long[est]' string as accumulator, item (unused), and index
  return strarr.reduce((long, item, i) => {
    //create current string using slice and join. slice starts at current index, and ends at index + k
    const currString = strarr.slice(i, i + k).join('');
    // compare the current string length to the long length. returns longest of the two.
    return currString.length > long.length ? currString : long;
  }, '');
}
