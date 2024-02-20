// WPU Coding Challenge 2024
// 53/366
// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

/* Cara 1 */
// function highAndLow(numbers) {
//   let sortNum = numbers.split(' ').sort((a, b) => b - a);
//   let number = [];

//   for (let i = 0; i < sortNum.length; i++) {
//     if (i === 0) {
//       number.push(sortNum[i]);
//     } else if (i === sortNum.length - 1) {
//       number.push(sortNum[i]);
//     }
//   }

//   if (sortNum.length === 1) {
//     number.push(sortNum[0]);
//   }

//   return number.join(' ');
// }

/* Cara 2 */
const highAndLow = (numbers) => {
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
};

console.log(highAndLow('1 2 3 4 5'));
console.log(highAndLow('1 2 -3 4 5'));
console.log(highAndLow('1 9 3 4 -5 9'));
console.log(highAndLow('42'));
