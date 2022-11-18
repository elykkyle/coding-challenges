/*
https://www.codewars.com/kata/57a6633153ba33189e000074

DESCRIPTION:
Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

const orderedCount = function (text) {
  let textToArr = text.split('');
  let output = [];
  let processed = [];
  textToArr.forEach((char, i) => {
    if (!processed.includes(char)) {
      let holder = [char];
      let total = 0;
      textToArr.forEach(el => {
        if (el === char) {
          total++;
        }
      });
      holder.push(total);
      output.push(holder);
    }
    processed.push(char);
  });

  // for (let i = 0; i < textToArr.length; i++) {
  //   if (!processed.includes(textToArr[i])) {
  //     let holder = [textToArr[i]];
  //     let total = 0;
  //     textToArr.forEach(el => {
  //       if (el === textToArr[i]) {
  //         total++;
  //       }
  //     });
  //     holder.push(total);
  //     output.push(holder);
  //   }
  //   processed.push(textToArr[i]);
  // }
  return output;
};

console.log(orderedCount('abracadabra'));
console.log(orderedCount());

/*
Top solution from CodeWars:
const orderedCount = s =>
  Array.from(s.split('').reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map()));
*/
