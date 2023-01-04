/*
https://www.codewars.com/kata/593c0ebf8b90525a62000221

Ever since you started work at the grocer, you have been faithfully logging down each item and its category that passes through. One day, your boss walks in and asks, "Why are we just randomly placing the items everywhere? It's too difficult to find anything in this place!" Now's your chance to improve the system, impress your boss, and get that raise!

The input is a comma-separated list with category as the prefix in the form "fruit_banana". Your task is to group each item into the 4 categories Fruit, Meat, Other, Vegetable and output a string with a category on each line followed by a sorted comma-separated list of items.

For example, given:

"fruit_banana,vegetable_carrot,fruit_apple,canned_sardines,drink_juice,fruit_orange"
output:

"fruit:apple,banana,orange\nmeat:\nother:juice,sardines\nvegetable:carrot"
Assume that:

Only strings of the format category_item will be passed in
Strings will always be in lower case
Input will not be empty
Category and/or item will not be empty
There will be no duplicate items
All categories may not have items
*/

function solution(input) {
  const categories = {
    fruit: [],
    meat: [],
    other: [],
    vegetable: [],
  };
  let result = '';
  input.split(',').forEach((element) => {
    const separator = element.indexOf('_');
    let category = element.substring(0, separator);
    if (!categories[category]) {
      category = 'other';
    }
    categories[category].push(element.substring(separator + 1));
  });
  for (let i = 0; i < Object.keys(categories).length; i++) {
    let curKey = Object.keys(categories)[i];
    categories[curKey].sort();
    result += `${curKey}:${categories[curKey].join(',')}`;
    if (i !== Object.keys(categories).length - 1) {
      result += '\n';
    }
  }
  return result;
}

console.log(
  solution(
    'fruit_banana,vegetable_carrot,fruit_apple,canned_sardines,drink_juice,fruit_orange'
  )
); // "fruit:apple,banana,orange\nmeat:\nother:juice,sardines\nvegetable:carrot"
