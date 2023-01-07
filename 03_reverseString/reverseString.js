const reverseString = function(string) {
let x = ""
for (i = string.length + 1; i > -1; i--){
    x += (string.slice(i, (i+1)))
    }
return x
};

// Do not edit below this line
module.exports = reverseString;
