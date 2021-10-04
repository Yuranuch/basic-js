import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  throw new NotImplementedError('Not implemented');
  let someString = ""
  members.sort();
  for(let i = 0; i < members.length; i++){
    if(typeof(members[i]) === 'string' ){
      let letters = members[i].slice(0, 1)
      someString = someString + letters
      console.log(someString )
    }else {
      continue
    }
  }
  return someString
}
