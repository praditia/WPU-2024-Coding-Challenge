const reverseSeq = (n) => {
  /*Cara 1*/
  //   let array = [];
  //   for (let i = n; i > 0; i--) {
  //     array.push(i);
  //   }
  //   return array;

  /*Cara 2*/
  return [...Array(n)].map((el, i) => n - i);
};

console.log(reverseSeq(5));
