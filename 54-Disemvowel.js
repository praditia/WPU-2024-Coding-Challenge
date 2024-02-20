// WPU Coding Challenge 2024
// 54/366
// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

/* Cara 1 */
// function disemvowel(str) {
//   return str
//     .split('')
//     .filter((el) => el.match(/[^aiueoAIUEO]/gi))
//     .join('');
// }

/* Cara 2 */
const disemvowel = (str) => str.replace(/[aiueo]/gi, '');

console.log(disemvowel('This website is for losers LOL!'));
