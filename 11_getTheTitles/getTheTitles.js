const getTheTitles = function(arr) {
    finalArr = []
    for(i = 0; i < arr.length; i++){
        finalArr.push(arr.[i]["title"])
    }
    return finalArr
};

// Do not edit below this line
module.exports = getTheTitles;
