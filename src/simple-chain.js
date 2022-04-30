const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  obj : [],
  getLength() {
    return this.obj.length
  },
  addLink(value) {
    let v = (arguments.length) ? `( ${value} )~~` : `(  )~~`;
    this.obj.push(v);
    console.log(this.obj);
    return chainMaker
  },
  removeLink(position) {
    if(!position && position !== 0 || !(Number.isInteger(position)) || position > this.obj.length || position < 1){
      this.obj = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.obj.splice(position - 1,1);
    console.log(this.obj)
    return chainMaker
  },
  reverseChain() {
    this.obj.reverse();
    console.log(this.obj);
    return chainMaker
  },
  finishChain() {
    let res = this.obj.join("");
    res = res.substring(0,res.length - 2);
    this.obj = [];
    return res
  }
};

module.exports = {
  chainMaker
};
