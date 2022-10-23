/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
    const auxArr = Array(3).fill(Number.NEGATIVE_INFINITY);
    
    for(let i = 0; i < nums.length; i++){
        if(auxArr.includes(nums[i])) continue;
        if(nums[i] > auxArr[2]){
            auxArr[0] =  auxArr[1];
            auxArr[1] =  auxArr[2];
            auxArr[2] =  nums[i];
        }else if(nums[i] > auxArr[1]){
           auxArr[0] =  auxArr[1];
           auxArr[1] = nums[i];
        }else if(nums[i] > auxArr[0]){
                 auxArr[0] = nums[i];
       }
    }
    
    return auxArr[0] === Number.NEGATIVE_INFINITY? auxArr[2]: auxArr[0];
};