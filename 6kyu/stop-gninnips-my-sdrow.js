//https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
function spinWords(string) {
  //Create array from each word
  const splitString = string.split(' ');
  //initialize array to hold processed words
  let stringArr = [];
  //process each word. if word length >= 5, split characters into array, reverse that array, and join back into a string.
  //push processed word into stringArr
  splitString.forEach(word => {
    if (word.length >= 5) {
      const reversedWord = Array.from(word).reverse().join('');
      stringArr.push(reversedWord);
    } else {
      stringArr.push(word);
    }
  });
  //return the final string array of words, joined with ' '
  return stringArr.join(' ');
}
console.log(spinWords('Welcome'));
