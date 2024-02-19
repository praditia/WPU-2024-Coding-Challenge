// WPU Coding Challenge 2024
// 41/366
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

/* Cara 1 */
// function likes(names) {
//   if (names.length === 0) {
//     return 'no one likes this';
//   }

//   if (names.length === 1) {
//     return `${names} likes this`;
//   }

//   if (names.length === 2) {
//     return `${names[0]} and ${names[1]} like this`;
//   }

//   if (names.length === 3) {
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//   }

//   return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
// }

/* Cara 2 */
const likes = (names) => {
  switch (names.length) {
    case 0:
      return 'no one likes this';
      break;
    case 1:
      return `${names} likes this`;
      break;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
      break;
  }
};

console.log(likes([]));
console.log(likes(['Peter']));
console.log(likes(['Jacob', 'Alex']));
console.log(likes(['Max', 'John', 'Mark']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
