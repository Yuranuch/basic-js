import { NotImplementedError } from '../extensions/index.js';

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
export default function getMatrixElementsSum(matrix) {
  throw new NotImplementedError('Not implemented');
  let count = 0;
  for (let i = 0; i < matrix.length; i++){
    if(matrix[i][0] == 0) {
      for (let t = 0; t < matrix[i].length; t++ ){
        count = count + matrix[i][t]
      }
    }
  }
  return count
}
