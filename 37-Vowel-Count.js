// WPU Coding Challenge 2024
// 37/366
// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str) {
  let count = 0;
  let vowel = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowel.length; j++) {
      if (str[i].includes(vowel[j])) {
        count++;
      }
    }
  }
  return count;
}

console.log(getCount('abracadabra'));
