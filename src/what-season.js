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
  if(!date){
    return 'Unable to determine the time of year!';
  } else if((isNaN(Date.parse(date)) && !([Symbol.toStringTag] === 'Date')) || isNaN(Date.parse(date))){
    throw new Error("Invalid date!")
  } else {
    let day = date.getDay();
    let month = date.getMonth();
    if(day >= 12 || month >=12){
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
  }
}

module.exports = {
  getSeason
};
