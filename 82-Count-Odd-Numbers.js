// WPU Coding Challenge 2024
// 82/366
// https://www.codewars.com/kata/59342039eb450e39970000a6/train/javascript

/* Cara 1 */
// function oddCount(n) {
//   return n % 2 ? Math.floor(n / 2) : n / 2;
// }

/* Cara 2 */
const oddCount = (n) => Math.floor(n / 2);

console.log(oddCount(15));
console.log(oddCount(15023));
