const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const separator = '.';
  const result = {};

  for(let domain of domains){
    const slitDomain = domain.split(separator).reverse();
    for(let index = 0; index < slitDomain.length; index++){
      const resultDomain = `${separator}${slitDomain.slice(0, index +1).join(separator)}`;
      result[resultDomain] ? result[resultDomain]++ : result[resultDomain] = 1;
    }
  }

  return result;
}

module.exports = {
  getDNSStats
};
