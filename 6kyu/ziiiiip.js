/*
https://www.codewars.com/kata/5298ad7cd0f550269500051b

Let's implement the zipObject function that enables such results

zipObject(['fred', 'barney'], [30, 40])
=> { 'fred': 30, 'barney': 40 }

zipObject([['fred', 30], ['barney', 40]])
=> { 'fred': 30, 'barney': 40 }
The zipObject creates an object composed from arrays of keys and values. It is provided with either a single two dimensional array, i.e. [[key1, value1], [key2, value2]] or with two arrays, one of keys and one of corresponding values.

If only keys are given, then set the values to undefined.

zipObject(['fred', 'barney'])
{ fred: undefined, barney: undefined }
If neither keys nor values are specified, then return {}

zipObject()
{}


PREP:
Params: Single, 2d array w/ keys & values, OR two arrays, one of keys, and one of corresponding values. if only one array of keys, values are 'undefined.

Return: Object containting KVPs from Params. OR, empty object if no params.

Example: zipObject([['fred', 30], ['barney', 40]]) // { fred: 30, barney: 40}
zipObject(['fred', 'barney'], [30, 40]) // { fred: 30, barney: 40 }
zipObject(['fred', 'barney']) // { fred: undefined, barney: undefined }
zipObject() // {}
*/

function zipObject(keys, values) {
  const zip = {};
  if (arguments.length === 0) return zip;
  if (arguments.length === 1) {
    const input = Array.from(arguments[0]);
    if (input.every((arg) => typeof arg === 'string')) {
      input.forEach((key) => (zip[key] = undefined));
    } else {
      input.forEach((keyValuepair) => (zip[keyValuepair[0]] = keyValuepair[1]));
    }
  } else {
    [...arguments[0]].forEach((key, i) => (zip[key] = values[i]));
  }
  return zip;
}

console.log(zipObject(['fred', 'barney'], [30, 40]));
console.log(
  zipObject([
    ['fred', 30],
    ['barney', 40],
  ])
);
console.log(zipObject(['fred', 'barney']));
console.log(zipObject());

/*
a succint answer from codewars:
const zipObject = (keys = [], values = []) => {
  return keys.reduce((zip, keypair, i) => {
    (Array.isArray(keypair)) ? zip[keypair[0]] = keypair[1] : zip[keypair] = values[i];
    return zip;
  }, {});
};
*/
