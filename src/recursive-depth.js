const { NotImplementedError } = require('../extensions/index.js');

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
class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;
  let maxDepth = 1;
  for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'object'){
      counter++;
      checkDepth(arr[i]);
      if(counter > maxDepth){
        maxDepth = counter;
      }
      counter = 1;
    }
  }

  function checkDepth(array) {
    console.log(array,counter);
    for (let i = 0; i < array.length; i++) {
      if(typeof array[i] === 'object'){
        counter++;
        checkDepth(array[i])
      }
    }
  }
  return maxDepth
  }
}

module.exports = {
  DepthCalculator
};
