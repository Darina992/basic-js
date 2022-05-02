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
     this.arr = array;
     this.counter = 1;
     this.maxDepth = 1;

   }
   calculateDepth(arr) {

     for (let i = 0; i < arr.length; i++) {
       if(Array.isArray(arr[i])){
         this.counter++;

         this.count(arr[i]);
       }

     }

   console.log(this.maxDepth)
   return this.maxDepth
   }
   count(arr) {
     for (let i = 0; i < arr.length; i++) {
       if(Array.isArray(arr[i])){
         this.counter++;

         this.count(arr[i]);
       }
     }
     if(this.counter > this.maxDepth){
       this.maxDepth = this.counter;
     }
     this.counter = 1;
   }

 }

module.exports = {
  DepthCalculator
};
