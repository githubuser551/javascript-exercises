const sumAll = function(a, b) {
    
    let sum = 0

    // returns an 'ERROR' if the parameters are non-integers
    if (Number.isInteger(a) == false || Number.isInteger(b) == false){
        return "ERROR"
    }

     // returns 'ERROR' if the parameters are negative
    if (a < 0 || b < 0){
        return "ERROR"
    }
   
    // assigns the higher/lower parameter to the appropriate variable
    var i = a < b ? a: b;
    var j = a > b ? a: b;

    // increments through adding the totals
    for (; i <= j; i++) {
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
