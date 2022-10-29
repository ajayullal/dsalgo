/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let fp = 0;
    
    for(let sp = 1; sp < nums.length; sp++){
        if(nums[sp] === nums[fp]) continue;
        else if(sp!==fp+1) nums[fp + 1] = nums[sp]
        fp++;
    }
        
    return fp + 1;
};