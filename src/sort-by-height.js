const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  for(let index1 = 0 ; index1 < arr.length; index1++){
    let currentElement = arr[index1];
    if(currentElement === -1)
      continue;

    for(let index2 = index1 + 1; index2< arr.length; index2++){
      const nextElement = arr[index2];
      if(nextElement === -1)
        continue;
      if(currentElement > nextElement){
        arr[index2] = currentElement;
        arr[index1] = nextElement;
        currentElement = nextElement;
      }
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
