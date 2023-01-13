const palindromes = function (string) {
    let final = ""
    
    // converts all to lowercase
    let a = string.toLowerCase();

    // iterates through the string to concat only the letters
    for(i = 0; i < a.length; i++){
        if((/[a-zA-Z]/).test(a[i])){
            final += a[i]
        }
    }
    
    // cuts in from both ends comparing chars returning false if a mismatch is found
    for(i = 0; i < final.length; i++){
        if(final[i] !== final[final.length - i - 1]){
            return false
        }
    }

    // returns true if there are no mismatches
    return true
};

// Do not edit below this line
module.exports = palindromes;


// 