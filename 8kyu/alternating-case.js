/*
https://www.codewars.com/kata/56efc695740d30f963000557

altERnaTIng cAsE <=> ALTerNAtiNG CaSe
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
As usual, your function/method should be pure, i.e. it should not mutate the original string.
*/
String.prototype.toAlternatingCase = function () {
  let output = '';
  for (let i = 0; i < this.length; i++) {
    let charCode = this.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      charCode += 32;
      output += String.fromCharCode(charCode);
    } else if (charCode >= 97 && charCode <= 122) {
      charCode -= 32;
      output += String.fromCharCode(charCode);
    } else {
      output += this[i];
    }
  }
  return output;
};

console.log('dOes thIs woRk?'.toAlternatingCase());

/*
Alternate (better, IMO) solution:
String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}

splits the string into an array and maps over each entry. if the input argument is equal to the input argument as an uppercase letter, it returns the lowercase letter. Otherwise, it returns the uppercase letter. It then joins the array back into a string and returns.
*/
