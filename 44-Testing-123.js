// WPU Coding Challenge 2024
// 44/366
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

/* Cara 1 */
// const number = (array) => {
//   let newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     newArr.push(`${i + 1}: ${array[i]}`);
//   }

//   return newArr;
// };

/* Cara 2 */
const number = (array) => array.map((num, i) => `${i + 1}: ${num}`);

console.log(number(['a', 'b', 'c']));
