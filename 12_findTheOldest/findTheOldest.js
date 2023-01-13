const findTheOldest = function(arr) {

    let oldest = -1;
    let oldestAge = 0;
    
    for(i = 0; i < arr.length; i++){
        // sets a temp variable to current year if there is no year of death
        let tempYod = (arr[i]["yearOfDeath"]) ? arr[i]["yearOfDeath"] : new Date().getFullYear();

        // sets a temp age variable
        let tempAge = tempYod - (arr[i]["yearOfBirth"]);

        // compares current to oldest person and updates variables if so
        if (tempAge > oldestAge){
            oldest = i;
            oldestAge = tempAge;
    }
    }
    return arr[oldest]
};

// Do not edit below this line
module.exports = findTheOldest;
