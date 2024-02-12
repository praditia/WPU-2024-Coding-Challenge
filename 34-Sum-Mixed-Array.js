// WPU Coding Challenge 2024
// 34/366
// https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

/* Cara 1 */
// function sumMix(x){
//     let total = 0
//     for(let i = 0; i < x.length; i++) {
//         if(typeof x[i] !== "number") {
//             total += Number(x[i])
//         } else {
//             total += x[i]
//         }
//     }
//   return total
// }

/* Cara 2 */
const sumMix = (x) => x.map((num, i) => typeof num !== "number" ? Number(num) : num).reduce((acc, num) => acc + num, 0)

console.log(sumMix([9, 3, '7', '3']));

