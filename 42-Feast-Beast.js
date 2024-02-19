// WPU Coding Challenge 2024
// 42/366
// https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript

/* Cara 1 */
// function feast(beast, dish) {
//   return (
//     beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
//   );
// }

/* Cara 2 */
const feast = (beast, dish) =>
  beast.at(0) === dish.at(0) && beast.at(-1) === dish.at(-1);

console.log(feast('great blue heron', 'garlic naan'));
console.log(feast('chickadee', 'chocolate cake'));
console.log(feast('brown bear', 'bear claw'));
