// WPU Coding Challenge 2024
// 51/366
// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript

function firstNonConsecutive(arr) {
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] - arr[i + 1] !== -1) {
      result.push(arr[i + 1]);
      break;
    }
  }

  if (result.length === 0) {
    return null;
  }

  return Number(result);
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
console.log(firstNonConsecutive([1, 2, 3, 4]));
console.log(firstNonConsecutive([7, 8, 9, 10, 12, 14, 15]));
