// WPU Coding Challenge 2024
// 70/366
// https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript

/* Cara 1 */
// function enough(cap, on, wait) {
//   return on + wait - cap > 0 ? on + wait - cap : 0;
// }

/* Cara 2 */
const enough = (cap, on, wait) => Math.max(wait + on - cap, 0);

console.log(enough(10, 5, 5));
console.log(enough(100, 60, 50));
console.log(enough(20, 5, 5));
