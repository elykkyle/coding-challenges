/*
https://www.codewars.com/kata/552cd8624a414ec2b2000086

DESCRIPTION:
Everybody knows a little german, right? But remembering the correct articles is a tough job. Write yourself a little helper, that returns the noun with the matching article:

each noun containing less than 2 vowels has the article "das"
each noun containing 2/3 vowels has the article "die"
each noun containing more than 3 vowels has the article "der"
Caution: Vowels are "a,e,i,o,u". Umlaute (ä ö ü) are also being counted!

(This Kata is a joke, there is no such grammar rule!)
*/

function derDieDas(wort) {
  let vowelCount = 0,
    article = 'der';
  wort.split('').forEach(char => {
    if (/a|e|i|o|u|ä|ö|ü/i.test(char)) {
      vowelCount++;
    }
  });
  if (vowelCount < 2) {
    article = 'das';
  } else if (vowelCount <= 3) {
    article = 'die';
  }
  return `${article} ${wort}`;
}

console.log(derDieDas('OOOpa'));
console.log(derDieDas('Suppenhuhn'));
console.log(derDieDas('Geheimdienst'));
console.log(derDieDas('Ofenkartoffel'));
console.log(derDieDas('Fisch'));
console.log(derDieDas('Knödel'));
console.log(derDieDas('Leberkaassemmi'));

/*
Top solution from code wars:


function derDieDas(wort) {
  var n = wort.split(/[aeiouäöü]/i).length - 1
  if (n < 2) return "das " + wort
  if (n > 3) return "der " + wort
  return "die " + wort
}

*/
