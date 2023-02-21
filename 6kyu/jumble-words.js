/*
https://www.codewars.com/kata/589b30ddcf7d024850000089

DESCRIPTION:
Aoccdrnig to a rscheearch at Cmabrigde Uinervtisy, it deosn't mttaer in waht oredr the ltteers in a wrod are, the olny iprmoetnt tihng is taht the frist and lsat ltteer be at the rghit pclae. The rset can be a toatl mses and you can sitll raed it wouthit porbelm. Tihs is bcuseae the huamn mnid deos not raed ervey lteter by istlef, but the wrod as a wlohe.

Interesting article about this.

Task:
Write a function which mix inner characters in each word,first and last character stays untouched.Notice that punctuation mark is not a part of a word!By word we define only alphanumeric characters.
Requirements:
-at least 10% of all changeable words must differ from original.
If you solve this kata,check how many percent of changeable words you have changed.If you reach 100% you will get a reward!
*/

function jumble(string) {
  const splitString = string.split(' ');
  const jumbled = splitString.map((el) => {
    const first = el[0];
    const last = !/\W$|\W\w$/.test(el) ? el.slice(-1) : el.slice(-2);
    const remLength = el.length - last.length - 1;
    if (
      el.length < 4 ||
      remLength === 1 ||
      (remLength === 2 && last.length === 2)
    )
      return el;
    if (remLength === 2 && last.length === 1) {
      return first + el[2] + el[1] + last;
    }
    let jumbledWord;
    do {
      jumbledWord = first;
      const randSet = new Set();
      while (randSet.size < el.length - last.length - 1) {
        randSet.add(randCharPicker(el.length - last.length));
      }
      for (num of randSet) {
        jumbledWord += el[num];
      }
      jumbledWord += last;
    } while (jumbledWord === el);
    return jumbledWord;
  });
  return jumbled.join(' ');
}

function randCharPicker(max) {
  return Math.floor(Math.random() * (max - 1) + 1);
}

let string = `According to a researcher at Cambridge University, it doesn't matter in what order the letters in a word are, the only important thing is that the first and last letter be at the right place. The rest can be a total mess and you can still read it without problem. This is because the human mind does not read every letter by itself but the word as a whole.`;

console.log(jumble(string));
