// WPU Coding Challenge 2024
// 21/366
// https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript

/* Cara 1 */
// function printerError(s) {
//   let letterError = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (!s[i].match(/[a-m]/)) {
//       letterError++;
//     }
//   }
//   return `${letterError}/${s.length}`;
// }

/* Cara 2 */
const printerError = (s) => `${(s.match(/[n-z]/g) || []).length}/${s.length}`;

console.log(
  printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz')
);
