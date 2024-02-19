// WPU Coding Challenge 2024
// 39/366
// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

/* Cara 1 */
// function squareDigits(num) {
//   let numStr = num + ''
//   let powNum = []
//   for(let i = 0; i < numStr.length; i++) {
//     powNum.push(Number(numStr[i]) ** 2)
//   }

//   return Number(powNum.join(''))
// }

/* Cara 2 */
const squareDigits = (num) =>
  +num
    .toString()
    .split('')
    .map((num) => num ** 2)
    .join('');

console.log(squareDigits(3212));
console.log(squareDigits(2112));
console.log(squareDigits(0));
