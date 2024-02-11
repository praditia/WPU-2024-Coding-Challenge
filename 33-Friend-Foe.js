// WPU Coding Challenge 2024
// 33/366
// https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript

/* Cara 1 */
// function friend(friends) {
//   let teman = [];
//   const re = /\d/g;
//   for (let i = 0; i < friends.length; i++) {
//     if (friends[i].length === 4 && !friends[i].match(re)) {
//       teman.push(friends[i]);
//     }
//   }
//   return teman;
// }

const friend = (friends) => friends.filter((name) => name.length === 4);

console.log(friend(['Ryan', 'Kieran', 'Mark']));
console.log(friend(['Ryan', 'Jimmy', '1234', '4', 'Cool Man']));
console.log(
  friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool'])
);
console.log(friend(['Love', 'Your', 'Face', '1']));
