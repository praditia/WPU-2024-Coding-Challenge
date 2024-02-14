// WPU Coding Challenge 2024
// 38/366
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript

/* Cara 1 */
// function removeExclamationMarks(s) {
//   let newStr = '';
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== '!') {
//       newStr += s[i];
//     }
//   }
//   return newStr;
// }

/* Cara 2 */
// const removeExclamationMarks = (s) => s.replace(/!/gi, '');

/* Cara 3 */
const removeExclamationMarks = (s) =>
  s
    .split('')
    .filter((letter) => letter !== '!')
    .join('');

console.log(removeExclamationMarks('Hello World!'));
