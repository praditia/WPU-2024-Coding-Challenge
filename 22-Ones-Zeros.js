// WPU Coding Challenge 2024
// 22/366
// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript

/* Cara 1 */
// const binaryArrayToNumber = (arr) => {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       newArr.push(0);
//     } else {
//       newArr.push(2 ** (arr.length - i - 1));
//     }
//   }
//   return newArr.reduce((acc, num) => acc + num, 0)
// };

/* Cara 2 */
// const binaryArrayToNumber = (arr) =>
//   arr.reduce((acc, num) => (acc = acc * 2 + num), 0);

/* Cara 3 */
const binaryArrayToNumber = (arr) => parseInt(arr.join(''), 2);

console.log(binaryArrayToNumber([0, 0, 0, 1]));
console.log(binaryArrayToNumber([0, 0, 1, 0]));
console.log(binaryArrayToNumber([1, 1, 1, 1]));
console.log(binaryArrayToNumber([0, 1, 1, 0]));
