function hero(bullets, dragons) {
  /*Cara 1*/
  //   return bullets / 2 >= dragons

  /*Cara 2*/
  if (bullets / 2 >= dragons) {
    return true;
  } else {
    return false;
  }
}

console.log(hero(10, 5));
console.log(hero(7, 4));
console.log(hero(4, 5));
console.log(hero(100, 40));
console.log(hero(1500, 751));
console.log(hero(0, 1));
