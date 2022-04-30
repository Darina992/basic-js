const { NotImplementedError } = require('../extensions/index.js');

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
function createDreamTeam(members) {
  if(!(members instanceof Array)){
    return false
  }
  let res = [];
  let arr = members.filter(item => typeof item === 'string').sort();
  console.log(arr)
  arr.forEach((item, i) => {
    item = item.split('').filter(i => i !== ' ').toString().toUpperCase();
    res.push(item[0]);
  });
  console.log()
  return res.sort().join('')
}

module.exports = {
  createDreamTeam
};
