// WPU Coding Challenge 2024
// 79/366
// https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript

/* Cara 1 */
// String.prototype.toAlternatingCase = function () {
//   let newStr = '';

//   for (let i = 0; i < this.length; i++) {
//     if (this[i] === this[i].toUpperCase()) {
//       newStr += this[i].toLowerCase();
//     } else if (this[i] === this[i].toLowerCase()) {
//       newStr += this[i].toUpperCase();
//     }
//   }

//   return newStr;
// };

/* Cara 2 */
String.prototype.toAlternatingCase = () =>
  this.split('')
    .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
    .join('');
