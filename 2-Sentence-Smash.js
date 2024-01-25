// ***********************
// function smash(words) {
/*Cara 1*/
//   let sentence = '';
//   for (let i = 0; i < words.length; i++) {
//     sentence += words[i];
//     if (i < words.length - 1) {
//       sentence += ' ';
//     }
//   }
//   return sentence;

/*Cara 2*/
//   return words.join(' ');
// }
// ************************

const smash = (words) => words.join(' ');

console.log(smash(['this', 'is', 'a', 'really', 'long', 'sentence']));
