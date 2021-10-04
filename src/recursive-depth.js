import { NotImplementedError } from '../extensions/index.js';

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
export default class DepthCalculator {

  calculateDepth(arr) {
    let maxDepth = 0
    let curCalc = 0
    const getDepth = (curArr) => {
      curArr.forEach(i => {
        if(Array.isArray(i)) {
          curCalc = curCalc + 1
          return getDepth()
        } else if(maxDepth < curCalc) {
          maxDepth = curCalc
        }
      })
    }
    getDepth()
    return maxDepth
  }
}
