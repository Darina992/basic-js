const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if(!(arr instanceof Array)){
    throw new Error("'arr' parameter must be an instance of the Array!")
  } else {
    let newArr = [];
    arr.forEach((item, i) => {
      if(item === '--double-next'){
        (arr[i+1]) ? newArr.push(arr[i+1]) : '' ;
      } else if (item === '--discard-prev'){
        newArr.pop()
      }else if (item === '--discard-next'){
        //arr = arr.splice(i+1,1)
      }else if (item === '--double-prev'){
        (arr[i-1]) ? newArr.push(arr[i-1]) : '';
        if(arr[i - 2] === '--discard-next'){
          newArr.pop();
          newArr.pop();
        }
      } else {
        newArr.push(item)
      }
    });
    return newArr
  }

}

module.exports = {
  transform
};
