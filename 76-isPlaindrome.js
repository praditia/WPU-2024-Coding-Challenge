// WPU Coding Challenge 2024
// 76/366
// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

/* Cara 1 */
// function isPalindrome(x) {
//   let reversed = '';
//   for (let i = x.length - 1; i >= 0; i--) {
//     reversed += x[i];
//   }

//   return reversed.toLowerCase() === x.toLowerCase();
// }

/* Cara 2 */
const isPalindrome = (x) =>
  x.split('').reverse().join('').toLowerCase() === x.toLowerCase();

console.log(isPalindrome('a'));
console.log(isPalindrome('aba'));
console.log(isPalindrome('Abba'));
console.log(isPalindrome('hello'));
console.log(isPalindrome('Bob'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome('AbBa'));
console.log(isPalindrome(''));
