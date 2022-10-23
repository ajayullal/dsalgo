/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    const charSet = new Set();
    let max = 0, leftPointer = 0;
    
    for(let i = 0; i < s.length; i++){
        if(charSet.has(s[i])){
            while(charSet.has(s[i])){
             charSet.delete(s[leftPointer]);
             leftPointer++;
            }
            
            charSet.add(s[i]);
         }else{
             charSet.add(s[i]);
             if(charSet.size > max) max = charSet.size;
         }
    }
    
    return max;
};