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
  let index = [];
  let newArr =[];
  arr.forEach((item, i) => {
    (item === -1) ? index.push(i) : newArr.push(item);
  });
  newArr.sort((a,b) => a - b);
  index.forEach((item, i) => {
    newArr.splice(item,0,-1)
  });
  return newArr
}

module.exports = {
  sortByHeight
};
