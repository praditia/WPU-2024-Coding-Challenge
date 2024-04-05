// WPU Coding Challenge 2024
// 80/366
// https://www.codewars.com/kata/55edaba99da3a9c84000003b/train/javascript

/* Cara 1 */
// function divisibleBy(numbers, divisor) {
//   let number = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % divisor === 0) {
//       number.push(numbers[i]);
//     }
//   }

//   return number;
// }

/* Cara 2 */
const divisibleBy = (numbers, divisor) =>
  numbers.filter((number) => number % divisor === 0);

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 3));
console.log(divisibleBy([0, 1, 2, 3, 4, 5, 6], 4));
console.log(divisibleBy([0], 4));
console.log(divisibleBy([1, 3, 5], 2));
