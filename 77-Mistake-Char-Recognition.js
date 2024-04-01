// WPU Coding Challenge 2024
// 77/366
// https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript

/* Cara 1 */
// function correct(string) {
//   let str = '';

//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === '5') {
//       str += 'S';
//     } else if (string[i] === '0') {
//       str += 'O';
//     } else if (string[i] === '1') {
//       str += 'I';
//     } else {
//       str += string[i];
//     }
//   }
//   return str;
// }

/* Cara 2 */
const correct = (string) =>
  string.replace(/0/g, 'O').replace(/5/g, 'S').replace(/1/g, 'I');

console.log(correct('L0ND0N'));
console.log(correct('DUBL1N'));
console.log(correct('51NGAP0RE'));
console.log(correct('BUDAPE5T'));
console.log(correct('PAR15'));
