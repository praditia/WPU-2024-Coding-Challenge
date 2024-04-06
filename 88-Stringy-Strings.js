// WPU Coding Challenge 2024
// 88/366
// https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript

/* Cara 1 */
// function stringy(size) {
//     let strings = ''

//     for (let i = 0; i < size; i++) {
//         if(i % 2 === 0) {
//             strings += '1'
//         }
//         else {
//             strings += '0'
//         }
//     }

//     return strings
//   }

/* Cara 2 */
// const stringy = size => ''.padStart(size, 10)

/* Cara 3 */
const stringy = (size) => '10'.repeat(size).slice(0, size);

console.log(stringy(3));
console.log(stringy(4));
console.log(stringy(6));
