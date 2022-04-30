const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};
  let arr = [];
  let str = '';
  for (let i = 0; i < domains.length; i++) {
    let a = domains[i].split('.').reverse();
    for(let j = 0; j < a.length; j++){
      str += `.${a[j]}`;
      arr.push(str);
    }
    str = '';
  }

  let uniqueArr = new Set(arr);

  uniqueArr.forEach((item) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if(item === arr[i]){
        count++;
      }
    }
    res[`${item}`] = count;
  });
  return res
}

module.exports = {
  getDNSStats
};
