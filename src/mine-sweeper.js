const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  const rowsLength = matrix.length;
  const columnsLength = matrix[0].length;

  for (let rowIndex = 0; rowIndex < rowsLength; rowIndex++) {
    const resultRow = [];
    for (let columnIndex = 0; columnIndex < columnsLength; columnIndex++) {
      const minesCount = countMinesAround(rowIndex, columnIndex, matrix);
      resultRow.push(minesCount);
    }
    result.push(resultRow);
  }

  return result;
}

function countMinesAround(row, column, matrix) {
  let minesCount = 0;
  const rowStart = row === 0 ? 0 : row -1;
  const rowEnd = row === matrix.length - 1 ? row : row + 1;

  const columnStart = column === 0 ? column : column - 1;
  const columnEnd = column === matrix[0].length -1 ? column : column + 1;

  for (let rowIndex = rowStart; rowIndex <= rowEnd; rowIndex++) {
    for (let columnIndex = columnStart; columnIndex <= columnEnd; columnIndex++ ) {
      if(!(rowIndex === row && columnIndex ===column)){
        const cell = matrix[rowIndex][columnIndex];
        if (cell) minesCount++;
      }
    }
  }
  return minesCount;
}

module.exports = {
  minesweeper,
};
