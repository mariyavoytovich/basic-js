const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    let maxChildDepth = 0;
    if (!Array.isArray(arr)) return depth;
    else depth++;

    arr.forEach((element) => {
      const childDepth = this.calculateDepth(element);
      maxChildDepth < childDepth && (maxChildDepth = childDepth);
    });

    depth += maxChildDepth;

    return depth;
  }
}

module.exports = {
  DepthCalculator,
};
