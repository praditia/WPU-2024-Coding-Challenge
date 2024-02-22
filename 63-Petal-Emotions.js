// WPU Coding Challenge 2024
// 63/366
// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript

function howMuchILoveYou(nbPetals) {
  const petals = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
  ];

  let index = (nbPetals % 6) - 1;

  return index === -1 ? petals[petals.length - 1] : petals[index];
}

console.log(howMuchILoveYou(1));
console.log(howMuchILoveYou(2));
console.log(howMuchILoveYou(3));
console.log(howMuchILoveYou(4));
console.log(howMuchILoveYou(5));
console.log(howMuchILoveYou(6));
console.log(howMuchILoveYou(7));
console.log(howMuchILoveYou(8));
console.log(howMuchILoveYou(418));
