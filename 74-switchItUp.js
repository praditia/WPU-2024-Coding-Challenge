// WPU Coding Challenge 2024
// 74/366
// https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/train/javascript

/* Cara 1 */
// function switchItUp(number) {
//   switch (number) {
//     case 1:
//       return 'One';
//       break;
//     case 2:
//       return 'Two';
//       break;
//     case 3:
//       return 'Three';
//       break;
//     case 4:
//       return 'Four';
//       break;
//     case 5:
//       return 'Five';
//       break;
//     case 6:
//       return 'Six';
//       break;
//     case 7:
//       return 'Seven';
//       break;
//     case 8:
//       return 'Eight';
//       break;
//     case 9:
//       return 'Nine';
//       break;
//     case 0:
//       return 'Zero';
//       break;

//     default:
//       break;
//   }
// }

/* Cara 2 */
const switchItUp = (n) =>
  [
    'Zero',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
  ][n];

console.log(switchItUp(1));
console.log(switchItUp(3));
console.log(switchItUp(5));
