// WPU Coding Challenge 2024
// 71/366
// https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145/train/javascript

function hoopCount(n) {
  return n < 10
    ? 'Keep at it until you get it'
    : 'Great, now move on to tricks';
}

console.log(hoopCount(3));
console.log(hoopCount(11));
