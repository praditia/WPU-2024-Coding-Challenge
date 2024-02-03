/* Cara 1 */
// const stringToArray = (string) => string.split(' ');

/* Cara 2 */
const stringToArray = (string) => {
  let newStr = '';
  let wordArray = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      newStr += string[i];
    } else {
      wordArray.push(newStr);
      newStr = '';
    }
  }
  wordArray.push(newStr);

  return wordArray;
};

console.log(stringToArray('Robin Singh'));
