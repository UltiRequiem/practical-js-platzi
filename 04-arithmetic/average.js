/**
 * Return average of an array
 *
 * @param {object} arr An array with numbers
 * @returns {number} The average of the array passed
 */

const getAverage = (arr) => arr.reduce((a, b) => a + b) / arr.length;

const NUMBERS = [18, 20, 16];

console.log(Math.round(getAverage(NUMBERS)));
