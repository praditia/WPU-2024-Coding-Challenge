// WPU Coding Challenge 2024
// 93/366
// https://www.codewars.com/kata/55a5bfaa756cfede78000026/train/javascript

function problem(x) {
  return typeof x == 'number' ? x * 50 + 6 : 'Error';
}

console.log(problem('Hello'));
console.log(problem(10));
