import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  throw new NotImplementedError('Not implemented');
  let counter = 0;
  for(let i = 0; i < matrix.length; i++){
    for(let t = 0; t < matrix[i].length; t++){
      if(matrix[i][t] == '^^'){
        console.log(counter += 1)
      }
    }
  }
  return counter;
}
