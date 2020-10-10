// const sum = (a, b) => {
//   return a + b;
// };

// console.log(sum(10, 5));

// var absolute_zero = -273.15;

// const celsiusToKelvin = (temp) => {
//   return temp - absolute_zero;
// };

// console.log(celsiusToKelvin(1));

const celsiusToKelvin = (temp, absolute_zero) => {
  return temp - absolute_zero;
};

// OR

const celsiusToKelvin = (temp, absolute_zero) => {
  return temp + -273.15;
};
