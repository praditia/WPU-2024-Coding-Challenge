// WPU Coding Challenge 2024
// 65/366
// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript

/* Cara 1 */
// function century(year) {
//   return year % 100 === 0 ? year / 100 : Math.floor(year / 100 + 1);
// }

/* Cara 2 */
const century = (year) => Math.ceil(year / 100);

console.log(century(1705));
console.log(century(1900));
console.log(century(1601));
console.log(century(2000));
console.log(century(89));
