// WPU Coding Challenge 2024
// 83/366
// https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/javascript

/* Cara 1 */
// function findDifference(a, b) {
//   let cuboidA = 1;
//   let cuboidB = 1;

//   for (let i = 0; i < a.length; i++) {
//     cuboidA *= a[i];
//     cuboidB *= b[i];
//   }

//   return Math.abs(cuboidA - cuboidB);
// }

/* Cara 2 */
const findDifference = (a, b) =>
  Math.abs(
    a.reduce((acc, num) => acc * num) - b.reduce((acc, num) => acc * num)
  );

console.log(findDifference([3, 2, 5], [1, 4, 4]));
console.log(findDifference([9, 7, 2], [5, 2, 2]));
console.log(findDifference([11, 2, 5], [1, 10, 8]));
console.log(findDifference([4, 4, 7], [3, 9, 3]));
console.log(findDifference([15, 20, 25], [10, 30, 25]));
