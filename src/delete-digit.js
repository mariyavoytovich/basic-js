const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();
  let maxNumber = '0';

  for(let index = 0 ; index < str.length; index++){
    const number = str.slice(0, index) + str.slice(index +1);
    if(number > maxNumber)
      maxNumber = number;
  }

  return Number.parseInt(maxNumber);
}

module.exports = {
  deleteDigit
};
