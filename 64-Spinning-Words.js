// WPU Coding Challenge 2024
// 64/366
// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

/* Cara 1 */
// function spinWords(string) {
//   let arrStr = string.split(' ');
//   for (let i = 0; i < arrStr.length; i++) {
//     if (arrStr[i].length < 5) {
//       arrStr[i] = arrStr[i].split('').reverse().join('');
//     }
//   }

//   return arrStr.join(' ');
// }

/* Cara 2 */
const spinWords = (string) =>
  string
    .split(' ')
    .map((str) => (str.length < 5 ? str : str.split('').reverse().join('')))
    .join(' ');

console.log(spinWords('Hey fellow warriors'));
console.log(spinWords('Welcome'));
