// WPU Coding Challenge 2024
// 55/366
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

/* Cara 1 */
// function findShort(s) {
//   let words = s.split(' ');
//   let shortestWord = words[0].length;

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length < shortestWord) {
//       shortestWord = words[i].length;
//     }
//   }

//   return shortestWord;
// }

/* Cara 2 */
const findShort = (s) => Math.min(...s.split(' ').map((el) => el.length));

console.log(findShort('bitcoin take over the world maybe who knows perhaps'));
console.log(
  findShort(
    'turns out random test cases are easier than writing out basic ones'
  )
);
console.log(findShort("Let's travel abroad shall we"));
