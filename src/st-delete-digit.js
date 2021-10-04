import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n ) {
  let max = 0
  const str = "" + n

  for(let i = 0; i <= str.length-1; i++) {
    const locSum = +(str.slice(0, i) + str.slice(i + 1))

    if(locSum > max) {
      max = locSum
    }
  }
  return max
  }


