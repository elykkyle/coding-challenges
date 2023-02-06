/*
https://www.codewars.com/kata/586d6cefbcc21eed7a001155

For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
In JavaScript: If you use Array.sort in your solution, you might experience issues with the random tests as Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue.

Happy coding! :)
*/

function longestRepetition(s) {
  const sArr = [...s];
  sArr.forEach((char, i, arr) => {
    if (char )
  })
  return sArr;
}

console.log(longestRepetition('aaaabb')); //      ["a",4] );
console.log(longestRepetition('bbbaaabaaaa')); // ["a",4] );
console.log(longestRepetition('cbdeuuu900')); //  ["u",3] );
console.log(longestRepetition('abbbbb')); //      ["b",5] );
console.log(longestRepetition('aabb')); //        ["a",2] );
console.log(longestRepetition('')); //            ["",0] );
console.log(longestRepetition('ba')); //          ["b",1] );


// solution from CodeWars:

/*
function longestRepetition(s) {
  //initialize count of characters, and previous letter variable.
  let count = 0;
  let prevLetter = '';

  // Split string into array. use reduce function to iterate over array.
  // previous value (acc) initialized to: ['', 0]
  return s.toLowerCase().split('').reduce((acc, curr) => {
    //check if current letter is equal to the previous letter.
    // if yes, then increase count by one.
    // if no, set count to 1.
    if(curr === prevLetter){
      count++;
    }
    else{
      count = 1;
    }

    // if the count is greater than previous count value, set to current count
    // if count is greater than previous count value, set the return letter to the current letter.
    if(count > acc[1]){
      acc[1] = count;
      acc[0] = curr;
    }

    // set the previous letter to the current letter and return the result to the reduce funciton.
    prevLetter = curr;
    return acc;
  }, ['', 0]);
}
*/