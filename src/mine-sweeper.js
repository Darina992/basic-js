const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {

   let res = [];
   for (let i = 0; i < matrix.length; i++) {
    let a = []
     for (let j = 0; j < matrix[0].length; j++) {
       a.push(0)
     }
     res.push(a)
   }

   for (let i = 0; i < matrix.length; i++) {
     if(i === 0){
       for(let j = 0; j < matrix.length; j++){
         if(j === 0){
           if(matrix[i][j + 1] === true || matrix[i + 1][j] === true || matrix[i + 1][j + 1] === true){
             res[i][j] += 1;
           }
         } else if (j === matrix.length - 1){
           if(matrix[i][j - 1] === true || matrix[i + 1][j] === true || matrix[i + 1][j - 1] === true){
             res[i][j] += 1;
           }
         } else {
           if(matrix[i][j - 1] === true){res[i][j] +=1};
           if(matrix[i][j + 1] === true){res[i][j] +=1};
           if(matrix[i + 1][j] === true){res[i][j] +=1};
           if(matrix[i + 1][j - 1] === true){res[i][j] +=1};
           if(matrix[i + 1][j + 1] === true){res[i][j] +=1};

         }
       }
     } else if(i === matrix.length - 1){
       for(let j = 0; j < matrix.length; j++){
         if(j === 0){
           if(matrix[i][j + 1] === true || matrix[i - 1][j] === true || matrix[i - 1][j + 1] === true){
             res[i][j] += 1;
           }
         } else if (j === matrix.length - 1){
           if(matrix[i][j - 1] === true || matrix[i - 1][j] === true || matrix[i - 1][j - 1] === true){
             res[i][j] += 1;
           }
         } else {
           if(matrix[i][j - 1] === true){res[i][j] +=1};
           if(matrix[i][j + 1] === true){res[i][j] +=1};
           if(matrix[i - 1][j] === true){res[i][j] +=1};
           if(matrix[i - 1][j + 1] === true){res[i][j] +=1};
           if(matrix[i - 1][j - 1] === true){res[i][j] +=1};

         }
       }
     } else {
       for(let j = 0; j < matrix.length; j++){

         if(j === 0){
           if(matrix[i + 1][j] === true){res[i][j] +=1};
           if(matrix[i][j + 1] === true){res[i][j] +=1};
           if(matrix[i - 1][j] === true){res[i][j] +=1};
           if(matrix[i - 1][j + 1] === true){res[i][j] +=1};
           if(matrix[i + 1][j + 1] === true){res[i][j] +=1};


         } else if (j === matrix.length - 1){
           if(matrix[i + 1][j] === true){res[i][j] +=1};
           if(matrix[i][j - 1] === true){res[i][j] +=1};
           if(matrix[i - 1][j] === true){res[i][j] +=1};
           if(matrix[i - 1][j - 1] === true){res[i][j] +=1};
           if(matrix[i + 1][j - 1] === true){res[i][j] +=1};


         } else {
           if(matrix[i][j - 1] === true){res[i][j] +=1};
           if(matrix[i][j + 1] === true){res[i][j] +=1};
           if(matrix[i - 1][j] === true){res[i][j] +=1};
           if(matrix[i - 1][j + 1] === true){res[i][j] +=1};
           if(matrix[i - 1][j - 1] === true){res[i][j] +=1};
           if(matrix[i + 1][j] === true){res[i][j] +=1};
           if(matrix[i + 1][j + 1] === true){res[i][j] +=1};
           if(matrix[i + 1][j - 1] === true){res[i][j] +=1};

         }
     }
   }
 }
   return res

 }

module.exports = {
  minesweeper
};
