// WPU Coding Challenge 2024
// 56/366
// https://www.codewars.com/kata/5810085c533d69f4980001cf/train/javascript

/* Cara 1 */
// function calculator(a, b, sign) {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return 'unknown value';
//   }

//   switch (sign) {
//     case '+':
//       return a + b;
//       break;
//     case '-':
//       return a - b;
//       break;
//     case '*':
//       return a * b;
//       break;
//     case '/':
//       return a / b;
//       break;
//     default:
//       return 'unknown value';
//       break;
//   }
// }

/* Cara 2 */
function calculator(a, b, sign) {
  try {
    return eval(a + sign + b);
  } catch (e) {
    return 'unknown value';
  }
}

console.log(calculator(1, 2, '+'));
console.log(calculator(1, 2, '-'));
console.log(calculator(3, 5, '*'));
console.log(calculator(6, 2, '/'));
console.log(calculator(6, 2, '$'));
console.log(calculator(6, 'h', '*'));
