const convertToCelsius = function(farenheit) {

  if (farenheit === 32) {
    return 0;
  }

  let celsius = 0;
  celsius = Number(((farenheit - 32) * (5/9)).toFixed(1));
  return celsius;

};

const convertToFahrenheit = function(celsius) {
  if (celsius === 0) {
    return 32;
  }

  let farenheit = 0;
  farenheit = Number(((celsius * (9/5)) + 32).toFixed(1));
  return farenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
