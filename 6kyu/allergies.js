/*
https://www.codewars.com/kata/58be35e9e36224a33f000023

Write a program that, given a person's allergy score, can tell them whether or not they're allergic to a given item, and their full list of allergies.

An allergy test produces a single numeric score which contains the information about all the allergies the person has (that they were tested for).

The list of items (and their value) that were tested are:

eggs (1)
peanuts (2)
shellfish (4)
strawberries (8)
tomatoes (16)
chocolate (32)
pollen (64)
cats (128)
So if Tom is allergic to peanuts and chocolate, he gets a score of 34.

Now, given just that score of 34, your program should be able to say:

Whether Tom is allergic to any one of those allergens listed above.
All the allergens Tom is allergic to., sorted alphabetically
Example:

>>> allergies = Allergies(0)
>>> allergies.is_allergic_to('peanuts')
False
>>> Allergies(255).allergies()
['cats', 'chocolate', 'eggs', 'peanuts', 'pollen', 'shellfish', 'strawberries', 'tomatoes']
>>> Allergies(259).allergies()
["eggs", "peanuts"]
You will be provided with a class Allergies which will have 2 methods

is_allergic_to Checks if Tom is allergic to a particular allergen. Returns True if Tom is allergic, False otherwise

allergies Returns a list of what Tom is allergic to. This list must be sorted alphabetically

Must Dos:

Ensure that your function throws a TypeError for invalid inputs such as None(Null), floats, strings, or any data type that is not an integer.

Hint: Use Bitwise ANDing
*/

function Allergies(score) {
  if (!Number.isInteger(score)) throw new TypeError('Invalid input');
  this.ALLERGY_SCORES = {
    eggs: 1,
    peanuts: 2,
    shellfish: 4,
    strawberries: 8,
    tomatoes: 16,
    chocolate: 32,
    pollen: 64,
    cats: 128,
  };

  this.isAllergicTo = function (allergen) {
    if (typeof score !== 'number') {
      throw new TypeError('Invalid input. Input must be a valid integer');
    }
    return Boolean(score & this.ALLERGY_SCORES[allergen]);
  };

  this.allergies = function () {
    if (typeof score !== 'number') {
      throw TypeError('Invalid input. Input must be a valid integer');
    }
    let results = [];
    for (allergy in this.ALLERGY_SCORES) {
      if (this.ALLERGY_SCORES[allergy] & score) {
        results.push(allergy);
      }
    }
    return results.sort();
  };
}

let allergies = new Allergies(0);

console.log(allergies.isAllergicTo('peanuts')); // false
console.log(allergies.isAllergicTo('cats')); // false
console.log(allergies.isAllergicTo('strawberries')); // false
console.log(new Allergies(1).isAllergicTo('eggs')); // true
allergies = new Allergies(5);
console.log(allergies.isAllergicTo('eggs')); // true
console.log(allergies.isAllergicTo('shellfish')); // true
console.log(allergies.isAllergicTo('strawberries')); // false
console.log(new Allergies(0).allergies()); // []
console.log(new Allergies(2).allergies()); // ["peanuts"]
console.log(new Allergies(255).allergies()); //["cats", "chocolate", "eggs", "peanuts", "pollen", "shellfish", "strawberries", "tomatoes"]
console.log(new Allergies(257).allergies()); // ["eggs"]
console.log(new Allergies(256).allergies()); // []
console.log(new Allergies(257).allergies()); // ["eggs"]
console.log(new Allergies(258).allergies()); // ["peanuts"]
console.log(new Allergies(259).allergies()); // ["eggs", "peanuts"]
console.log(new Allergies(260).allergies()); // ["shellfish"]
console.log('', (_) => new Allergies(''));
console.log(new Allergies(1000).allergies()); // ["cats", "chocolate", "pollen", "strawberries"]
