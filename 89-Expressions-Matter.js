// WPU Coding Challenge 2024
// 89/366
// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/javascript

function expressionMatter(a, b, c) {
  const option1 = a * (b + c);
  const option2 = a * b * c;
  const option3 = a + b * c;
  const option4 = (a + b) * c;
  const option5 = a + b + c;

  return Math.max(option1, option2, option3, option4, option5);
}

console.log(expressionMatter(2, 1, 2));
console.log(expressionMatter(2, 1, 1));
console.log(expressionMatter(1, 1, 1));
console.log(expressionMatter(1, 2, 3));
console.log(expressionMatter(1, 3, 1));
console.log(expressionMatter(2, 2, 2));
