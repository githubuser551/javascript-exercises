const fibonacci = function(n) {
    fibb = [1, 1];
    // checks for negative argument
    if(n < 0){
        return "OOPS"
    }

    for(i = 1; i < n; i++){
        fibb.push(fibb[i] + fibb[(i - 1)])
    }
    return fibb[n-1]
};

// Do not edit below this line
module.exports = fibonacci;
