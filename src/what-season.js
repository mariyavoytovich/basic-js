const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

const SEASONS = {
  spring: "spring",
  summer: "summer",
  autumn: "autumn",
  winter: "winter",
};

function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }

  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length != 0) {
    throw new Error("Invalid date!");
  }

  const currentMonth = date.getMonth();
  if (currentMonth >= 2 && currentMonth <= 4) return SEASONS.spring;

  if (currentMonth >= 5 && currentMonth <= 7) return SEASONS.summer;

  if (currentMonth >= 8 && currentMonth <= 10) return SEASONS.autumn;

  return SEASONS.winter;
}

module.exports = {
  getSeason,
};
