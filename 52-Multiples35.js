// WPU Coding Challenge 2024
// 52/366
// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

/* Cara 1 */
// function solution(number){
//   let multiple3 = 0
//   let multiple5 = 0
//   let multiple35 = 0

//   for(let i = 1; i < number; i++) {
//     if(i % 3 === 0 && i % 5 === 0) {
//         multiple35 += i
//     }
//     else if(i % 3 === 0) {
//         multiple3 += i
//     } else if (i % 5 === 0) {
//         multiple5 += i
//     }
//   }

//   return multiple5 + multiple3 + multiple35
// }

/* Cara 2 */
// const solution = (number) => {
//   let sum = 0;

//   for (let i = 0; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }

//   return sum;
// };

/* Cara 3 */
const solution = (number) =>
  number < 0
    ? 0
    : [...new Array(number).keys()]
        .filter((num, i) => i % 3 === 0 || i % 5 === 0)
        .reduce((acc, num) => acc + num, 0);

console.log(solution(20));
console.log(solution(-2));
