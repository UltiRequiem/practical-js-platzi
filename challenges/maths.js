/**
 * Get the height of an isosceles triangle.
 *
 * @param {number} sideOne Measure of the first Triangle side
 * @param {number} sideTwo Measure of the second Triangle side
 * @param {number} base Measure of the Triangle base
 * @returns {number} The height of an isosceles triangle
 */

const calcIsocelesTriangle = (sideOne, sideTwo, base) => {
  if (sideOne !== sideTwo) {
    return 'Sides a and b are not equal.';
  }

  return Math.sqrt(sideOne ** 2 - base ** 2 / 4);
};

console.log(calcIsocelesTriangle(2, 2, 3));
