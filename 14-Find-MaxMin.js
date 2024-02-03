/* Cara 1 */
// const min = (list) => {
//   let result = list[0];
//   for (let i = 1; i < list.length; i++) {
//     if (result > list[i]) {
//       result = list[i];
//     }
//   }
//   return result;
// };

// const max = (list) => {
//   let result = list[0];
//   for (let i = 1; i < list.length; i++) {
//     if (result < list[i]) {
//       result = list[i];
//     }
//   }
//   return result;
// };

/* Cara 2 */
// const min = (list) => list.sort((a, b) => a - b)[0];
// const max = (list) => list.sort((a, b) => b - a)[0];

/* Cara 3 */
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);
console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([-52, 56, 30, 29, -54, 0, -110]));
