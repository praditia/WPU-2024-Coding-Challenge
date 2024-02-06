// WPU Coding Challenge 2024
// 23/366
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

/* Cara 1 */
// function digitize(n) {
//     const strNum = String(n)
//     let arr = []

//     for(let i = 0; i < String(n).length; i++) {
//         arr.push(strNum[i])
//     }

//     return arr.reverse().map((num) => Number(num))
//   }

/* Cara 2 */
// const digitize = (n) => Array.from(String(n), Number).reverse()

/* Cara 3 */
const digitize = (n) => (n + '').split('').reverse().map(Number);

console.log(digitize(35231));
console.log(digitize(0));
