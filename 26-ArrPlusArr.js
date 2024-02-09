// WPU Coding Challenge 2024
// 26/366
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

/* Cara 1 */
// function arrayPlusArray(arr1, arr2) {
//   const sumArr1 = arr1.reduce((acc, num) => acc + num, 0);
//   const sumArr2 = arr2.reduce((acc, num) => acc + num, 0);

//   return sumArr1 + sumArr2;
// }

/* Cara 2 */
// const arrayPlusArray = (arr1, arr2) => {
//     let result = 0

//     for(let i = 0; i < arr1.length; i++) {
//         result += arr1[i]
//     }

//     for(let j = 0; j < arr2.length; j++) {
//         result += arr2[j]
//     }

//     return result
// }

/* Cara 3 */
// const arrayPlusArray = (arr1, arr2) =>
//   [...arr1, ...arr2].reduce((acc, num) => acc + num, 0);

/* Cara 4 */
// function arrayPlusArray(arr1, arr2) {
//     let total = 0

//     for(let i = 0; i < arguments.length; i++) {
//         for(let j = 0; j < arguments[i].length; j++) {
//             total += arguments[i][j]
//         }
//     }
//     return total
// }

/* Cara 5 */
const arrayPlusArray = (...arrays) => {
  return [].concat(...arrays).reduce((acc, num) => acc + num, 0);
};

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
