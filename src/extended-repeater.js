const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const defaultSeparator = '+';
  const defaultAdditionalSeparator = '|';

  const { repeatTimes, separator = defaultSeparator, addition, additionRepeatTimes, additionSeparator = defaultAdditionalSeparator } = options;
  let repeatingStr = str;

  if(addition !== undefined){
    const repeatingAdditional = repeaterStr(addition, additionRepeatTimes, additionSeparator);
    repeatingStr += repeatingAdditional;
  }

  return repeaterStr(repeatingStr, repeatTimes, separator);
}

function repeaterStr(str, repeatTimes, separator){
  let resultStr = '';
  let repeats = repeatTimes -1;

  while(repeats > 0){
    resultStr += `${str}${separator}`;
    repeats--;
  }

  resultStr += str;
  return resultStr;
}

module.exports = {
  repeater
};
