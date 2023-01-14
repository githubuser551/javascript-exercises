const caesar = function(text, factor) {
    coded = ""
    for(i = 0; i < text.length; i++){

        // factors it if the character is a uppercase letter
        if ((/[A-Z]/).test(text[i])){
            let tempU = ((text.charCodeAt(i) - 64) + factor);
            // loops through in case of negative factor
            while(tempU < 0){
                tempU += 26
            }
            coded += String.fromCharCode(((tempU % 26) + 64))
        }

        // factors it if the character is a lowercase letter
        else if ((/[a-z]/).test(text[i])){
            let tempL = ((text.charCodeAt(i) - 96) + factor)
            // loops through in case of negative factor
            while (tempL < 0){
               tempL += 26
            }
            coded += String.fromCharCode((tempL % 26) + 96)
        }

        // returns it as is if its not a letter
        else{
            coded += text[i]
        }
    }
    return coded
};

// Do not edit below this line
module.exports = caesar;
