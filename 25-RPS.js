// WPU Coding Challenge 2024
// 25/366
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

/* Cara 1 */
// const rps = (p1, p2) => {
//     if(p1 === p2) {
//         return 'Draw!'
//     }
//
//     if(p1 === "scissors" && p2 === "paper") {
//         return 'Player 1 won!'
//     } else if (p1 === 'paper' && p2 === 'rock') {
//         return 'Player 1 won!'
//     } else if (p1 === 'rock' && p2 === 'scissors') {
//         return 'Player 1 won!'
//     } else {
//         return 'Player 2 won!'
//     }
// };

/* Cara 2 */
// const rps = (p1, p2) =>
//   p1 === p2
//     ? 'Draw!'
//     : (p1 === 'scissors' && p2 === 'paper') ||
//       (p1 === 'paper' && p2 === 'rock') ||
//       (p1 === 'rock' && p2 === 'scissors')
//     ? 'Player 1 won!'
//     : 'Player 2 won!';

/* Cara 3 */
const rules = {
  scissors: 'paper',
  paper: 'rock',
  rock: 'scissors',
};
const rps = (p1, p2) =>
  p1 === p2 ? 'Draw!' : `Player ${rules[p1] === p2 ? 1 : 2} won!`;

console.log(rps('rock', 'scissors'));
console.log(rps('scissors', 'rock'));
console.log(rps('rock', 'rock'));
