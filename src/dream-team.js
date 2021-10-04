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
  let someString = ""
  members = members.map( i => i.trim().toUpperCase()).sort();
  for(let i = 0; i < members.length; i++){
    if(typeof(members[i]) === 'string' ){
      let letters = members[i].toUpperCase().slice(0, 1);
      someString = someString + letters
    }
    // else if(typeof(members[i]) === 'number' || typeof(members[i]) === 'boolean' || typeof(members[i]) == 'null'){
    //   continue
    // }
    else{
      return false
    }
  }
  return someString
}
