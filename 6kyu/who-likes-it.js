/*
https://www.codewars.com/kata/5266876b8f4bf2da9b000362

DESCRIPTION:
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

function likes(names) {
  const numNames = names.length;
  let nameString = '';
  let s = names.length >= 2 ? '' : 's';
  switch (numNames) {
    case 0:
      nameString = 'no one';
      break;
    case 1:
      nameString = `${names[0]}`;
      break;
    case 2:
      nameString = `${names[0]} and ${names[1]}`;
      break;
    case 3:
      nameString = `${names[0]}, ${names[1]} and ${names[2]}`;
      break;
    default:
      nameString = `${names[0]}, ${names[1]} and ${names.length - 2} others`;
      break;
  }
  return `${nameString} like${s} this`;
}

console.log(likes(['Peter', 'Alex', 'Max', 'Jacob']));
