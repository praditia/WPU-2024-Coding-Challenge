// WPU Coding Challenge 2024
// 58/366
// https://www.codewars.com/kata/563a631f7cbbc236cf0000c2/train/javascript

function move(position, roll) {
  return roll * 2 + position;
}

console.log(move(0, 4));
console.log(move(3, 6));
console.log(move(2, 5));
