const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) return "";

  let count = 0;
  let letter = str[0];
  let result = "";

  for (let currentLetter of str) {
    if (currentLetter !== letter) {
      result += `${count === 1 ? "" : count}${letter}`;
      letter = currentLetter;
      count = 1;
    } else {
      count++;
    }
  }
  result += `${count === 1 ? "" : count}${letter}`;
  return result;
}

module.exports = {
  encodeLine,
};
