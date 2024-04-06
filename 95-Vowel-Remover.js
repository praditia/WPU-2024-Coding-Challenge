// WPU Coding Challenge 2024
// 95/366
// https://www.codewars.com/kata/5547929140907378f9000039/train/javascript

function shortcut(string) {
  return string.replace(/[aiueo]/gi, '');
}

console.log(shortcut('hello'));
console.log(shortcut('how are you today?'));
console.log(shortcut('complain'));
console.log(shortcut('never'));
