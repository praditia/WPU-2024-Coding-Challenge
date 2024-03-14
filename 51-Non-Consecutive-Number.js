// WPU Coding Challenge 2024
// 51/366
// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript

/* Cara 1 */
// function firstNonConsecutive(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] - arr[i + 1] !== -1) {
//       result.push(arr[i + 1]);
//       break;
//     }
//   }

//   if (result.length === 0) {
//     return null;
//   }

//   return Number(result);
// }

/* Cara 2 */
const firstNonConsecutive = (arr) => {
  let temp = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== temp + 1) {
      return arr[i];
    }

    temp = arr[i];
  }

  return null;
};

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
console.log(firstNonConsecutive([1, 2, 3, 4]));
console.log(firstNonConsecutive([7, 8, 9, 10, 12, 14, 15]));
