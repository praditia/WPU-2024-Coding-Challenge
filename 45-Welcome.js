// WPU Coding Challenge 2024
// 45/366
// https://www.codewars.com/kata/577ff15ad648a14b780000e7/train/javascript

const database = [
  ['english', 'Welcome'],
  ['czech', 'Vitejte'],
  ['danish', 'Velkomst'],
  ['dutch', 'Welkom'],
  ['estonian', 'Tere tulemast'],
  ['finnish', 'Tervetuloa'],
  ['flemish', 'Welgekomen'],
  ['french', 'Bienvenue'],
  ['german', 'Willkommen'],
  ['irish', 'Failte'],
  ['italian', 'Benvenuto'],
  ['latvian', 'Gaidits'],
  ['lithuanian', 'Laukiamas'],
  ['polish', 'Witamy'],
  ['spanish', 'Bienvenido'],
  ['swedish', 'Valkommen'],
  ['welsh', 'Croeso'],
];

function greet(language) {
  let greetings;
  for (let i = 0; i < database.length; i++) {
    if (language === database[i][0]) {
      greetings = database[i][1];
    } else if (
      language === 'IP_ADDRESS_INVALID' ||
      language === 'IP_ADDRESS_NOT_FOUND' ||
      language === 'IP_ADDRESS_REQUIRED' ||
      !greetings
    ) {
      greetings = 'Welcome';
    }
  }

  return greetings;
}

console.log(greet('english'));
console.log(greet('dutch'));
console.log(greet('IP_ADDRESS_INVALID'));
console.log(greet('Indo'));
