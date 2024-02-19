// WPU Coding Challenge 2024
// 47/366
// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

/* Cara 1 */
function oddOrEven(array) {
  return array.reduce((acc, num) => acc + num, 0) % 2 ? 'odd' : 'even';
}

console.log(oddOrEven([0]));
console.log(oddOrEven([0, 1, 4]));
console.log(oddOrEven([0, -1, -5]));
