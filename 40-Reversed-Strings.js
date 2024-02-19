// WPU Coding Challenge 2024
// 40/366
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

/* Cara 1 */
// function solution(str) {
//   return str.split('').reverse().join('');
// }

/* Cara 2 */
const solution = (str) => {
  let newStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr;
};

console.log(solution('world'));
console.log(solution('hello'));
console.log(solution('h'));
console.log(solution(''));
