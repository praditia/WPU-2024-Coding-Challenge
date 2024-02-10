// WPU Coding Challenge 2024
// 30/366
// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

/* Cara 1 */
// function lovefunc(flower1, flower2) {
//   if (flower1 % 2 === 0 && flower2 % 2 === 0) {
//     return false;
//   } else if (flower1 % 2 !== 0 && flower2 % 2 !== 0) {
//     return false;
//   }
//   return true;
// }

/* Cara 2 */
// const lovefunc = (flower1, flower2) => flower1 % 2 !== flower2 % 2

/* Cara 3 */
const lovefunc = (flower1, flower2) => (flower1 + flower2) % 2 !== 0;

console.log(lovefunc(1, 4));
console.log(lovefunc(2, 2));
console.log(lovefunc(0, 1));
console.log(lovefunc(0, 0));
console.log(lovefunc(1, 1));
