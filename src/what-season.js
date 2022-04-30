const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  let today = Date.now();
  console.log(+date === today)

  if(!date){
    return 'Unable to determine the time of year!';
  } else if (+date === today) {
    throw new Error("Invalid date!");
  } else if (date instanceof Date) {
    let dayN = date.getDate();
    let month = date.getMonth();
    let day = date.getDay();
    if(dayN >= 32 || month >=12 || day >=7){
      throw new Error("Invalid date!")
    }
    console.log(month);
    if (month >= 0 && month <=1 || month === 11){
      return 'winter'
    } else if(month >= 2 && month <=4){
      return 'spring'
    } else if (month >= 5 && month <=7) {
      return 'summer'
    } else if (month >= 8 && month <=10) {
      return 'autumn'
    }
  } else {
      throw new Error("Invalid date!")
  }
}

module.exports = {
  getSeason
};
