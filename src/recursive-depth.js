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
   constructor(array) {
     this.array = array;
     this.counter = 1;
     this.maxDepth = 1;
   }
   calculateDepth(array) {
   for (let i = 0; i < array.length; i++) {
     if(typeof array[i] === 'object'){
       this.counter++;
       this.calculateDepth(array[i]);
     }
     if(this.counter >= this.maxDepth){
       this.maxDepth = this.counter;
     }
     this.counter = 1;
   }

   return this.maxDepth
   }
 }

module.exports = {
  DepthCalculator
};
