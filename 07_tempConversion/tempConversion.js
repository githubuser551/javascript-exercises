const convertToCelsius = function(f) {
  let temp = Math.round(((f - 32) * (5 / 9) * 10)) /10;
  return temp
};

const convertToFahrenheit = function(c) {
  let temp = Math.round(((c * (9/5)) + 32) * 10) /10;
  return temp
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
