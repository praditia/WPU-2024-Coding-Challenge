// WPU Coding Challenge 2024
// 31/366
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript

/* Cara 1 */
// const areaOrPerimeter = function (l, w) {
//   if (l !== w) {
//     return (l + w) * 2;
//   }
//   return l * w;
// };

/* Cara 2 */
const areaOrPerimeter = (l, w) => (l !== w ? (l + w) * 2 : l * w);

console.log(areaOrPerimeter(3, 3));
console.log(areaOrPerimeter(6, 10));
