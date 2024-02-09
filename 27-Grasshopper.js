// WPU Coding Challenge 2024
// 27/366
// https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/javascript

/* Cara 1 */
// function greet(name, owner) {
//   if(name === owner) {
//     return 'Hello boss'
//   }
//   return 'Hello guest'
// }

/* Cara 2 */
const greet = (name, owner) => `Hello ${name === owner ? 'boss' : 'guest'}`;

console.log(greet('Daniel', 'Daniel'));
console.log(greet('Greg', 'Daniel'));
