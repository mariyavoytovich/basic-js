const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  const rowsLength = matrix.length;
  const columnsLength = matrix[0].length;

  for(let columnIndex = 0; columnIndex < columnsLength; columnIndex++){
    for(let rowIndex = 0; rowIndex<rowsLength; rowIndex++){
      const cellElement = matrix[rowIndex][columnIndex];
      if(cellElement === 0)
        break;

      sum += cellElement;
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
