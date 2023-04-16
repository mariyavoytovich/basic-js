const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const lettersS1 = getLettersCount(s1);
  const lettersS2 = getLettersCount(s2);

  let commonCount = 0;
  for(let key in lettersS1){
    const inS2 = lettersS2[key];
    if(inS2){
      commonCount += Math.min(inS2, lettersS1[key]);
    }
  }
  return commonCount;
}

function getLettersCount(str){
  const letters = {};
  for(let letter of str){
    letters[letter] ? letters[letter]++ : letters[letter] = 1;
  }

  return letters;
}

module.exports = {
  getCommonCharacterCount
};
