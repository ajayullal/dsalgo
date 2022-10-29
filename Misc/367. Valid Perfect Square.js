/**
 * @param {number} num
 * @return {boolean}
 */
 var isPerfectSquare = function(num) {
    let currentNumber = Math.floor(num/2) || 1, greaterThan = 1, lessThan = num;
    
    while(greaterThan !== lessThan - 1){
        const currentNumerSquared = currentNumber * currentNumber;
        if(currentNumerSquared===num) return true;
        else if(currentNumerSquared > num) {
            lessThan = currentNumber;
            currentNumber = Math.floor((currentNumber - greaterThan)/2);
        }
        else {
            greaterThan = currentNumber;
            currentNumber = greaterThan + Math.floor((lessThan - greaterThan) / 2);
        }
    }
    
    return false;
};