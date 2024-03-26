// WPU Coding Challenge 2024
// 73/366
// https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript

/* Cara 1 */
// function strCount(str, letter) {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }

/* Cara 2 */
// const strCount = (str, letter) => str.split(letter).length - 1;

/* Cara 3 */
const strCount = (str, letter) =>
  str.split('').filter((string) => string == letter).length;

console.log(strCount('Hello', 'o'));
console.log(strCount('Hello', 'l'));
console.log(strCount('Hello', 'z'));
