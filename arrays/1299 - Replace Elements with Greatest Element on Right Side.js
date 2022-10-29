/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {
    let previousElement = arr[arr.length - 1];
    arr[arr.length - 1] = -1;
    
    for(let i = arr.length - 2; i>=0; i--){
        const currentElement = arr[i];
        
        if(previousElement > arr[i + 1]){
           arr[i] = previousElement;
        }else{
             arr[i] = arr[i + 1];
        }
        
        previousElement = currentElement;
    }
    
    return arr;
};