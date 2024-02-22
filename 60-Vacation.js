// WPU Coding Challenge 2024
// 60/366
// https://www.codewars.com/kata/568d0dd208ee69389d000016

/* Cara 1 */
// function rentalCarCost(d) {
//   switch (true) {
//     case d < 3:
//       return 40 * d;
//       break;
//     case d < 7:
//       return 40 * d - 20;
//       break;
//     case d >= 7:
//       return 40 * d - 50;
//       break;
//   }
// }

/* Cara 2 */
const rentalCarCost = (d) => d * 40 - (d < 3 ? 0 : d < 7 ? 20 : 50);

console.log(rentalCarCost(1));
console.log(rentalCarCost(2));
console.log(rentalCarCost(4));
console.log(rentalCarCost(8));
