// WPU Coding Challenge 2024
// 46/366
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

/* Cara 1 */
// const sortArray = (array) => {
//   let odd = [];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2) {
//       odd.push(array[i]);
//     }
//   }

//   odd.sort((a, b) => a - b);
//   let result = [];

//   for (let j = 0; j < array.length; j++) {
//     if (array[j] % 2 === 0) {
//       result.push(array[j]);
//     } else {
//       result.push(odd.shift());
//     }
//   }

//   return result;
// };

/* Cara 2 */
const sortArray = (array) => {
  let odd = array.filter((num) => num % 2).sort((a, b) => a - b);
  return array.map((num) => (num % 2 ? odd.shift() : num));
};

console.log(sortArray([5, 3, 2, 8, 1, 4]));
console.log(sortArray([5, 3, 1, 8, 0]));
console.log(sortArray([]));
