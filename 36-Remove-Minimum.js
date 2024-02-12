// WPU Coding Challenge 2024
// 36/366
// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript
function removeSmallest(numbers) {
  return numbers.filter((_, i) => i !== numbers.indexOf(Math.min(...numbers)));
}

console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([5, 3, 2, 1, 4]));
console.log(removeSmallest([2, 2, 1, 2, 1]));
