// WPU Coding Challenge 2024
// 59/366
// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

function positiveSum(arr) {
  return arr.length > 0
    ? arr.filter((num) => num > 0).reduce((acc, num) => acc + num, 0)
    : 0;
}

console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([]));
