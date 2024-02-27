// WPU Coding Challenge 2024
// 67/366
// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

/* Cara 1 */
// function solution(string) {
//   let word = ''

//   for (let i = 0; i < string.length; i++) {
//     if(string[i] !== string[i].toUpperCase()) {
//         word += string[i]
//     } else {
//         word += ' ' + string[i]
//     }
//   }

//   return word
// }

/* Cara 2 */
// const solution = (string) => string.replace(/[A-Z]/g, (c) => ' ' + c);

/* Cara 3 */
const solution = (string) =>
  string
    .split('')
    .map((str) => (str === str.toUpperCase() ? ` ${str}` : str))
    .join('');

console.log(solution(''));
console.log(solution('camelCasing'));
console.log(solution('camelCasingTest'));
