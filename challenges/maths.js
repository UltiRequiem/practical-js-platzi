const calcIsocelesTriangle = (sideOne, sideTwo, base) => {
  if (sideOne !== sideTwo) {
    return 'Sides a and b are not equal.';
  }

  return Math.sqrt(sideOne ** 2 - base ** 2 / 4);
};

console.log(calcIsocelesTriangle(2, 2, 3));
