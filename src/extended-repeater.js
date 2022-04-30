const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let separator = (options.separator) ? options.separator : "+";
  let addition = (options.addition === false || options.addition === null || options.addition) ? options.addition : '';
  let repeat = (options.repeatTimes) ? options.repeatTimes : 1;
  let additionRepeatTimes = (options.additionRepeatTimes) ? options.additionRepeatTimes : 1;
  let additionSeparator = (options.additionSeparator) ? options.additionSeparator : (options.additionRepeatTimes > 1) ? "|" : '';

  let result = (str + (addition + additionSeparator).repeat(additionRepeatTimes - 1)+ addition + separator).repeat(repeat - 1) +
  (str + (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition)
  return result
}

module.exports = {
  repeater
};
