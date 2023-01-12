const add = function() {
  let sum = 0
  for (i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  return sum
};

const subtract = function() {
  let diff = arguments[0] - arguments[1]
  return diff;
};

const sum = function(a) {
	let total = 0
  for (i = 0; i < a.length; i++){
    total += a[i];
  }
  return total
};

const multiply = function(a) {
var prod = 1;
for (var i = 0; i < a.length; i++) {
  prod *= a[i];
}
return prod;
};

const power = function(a, b) {
  total = a;
	for (i = 1; i < b; i++){
    total *= a
  }
  return total
};

const factorial = function(n) {
  fac = n
  if(n === 0){
    return 1;
  }
  for(i = 1; i < n; i++){
    fac *= i;
  }
  return fac
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
