/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let buyIndex = 0, sellIndex = 1, maxProfit = 0;
    
    while(sellIndex < prices.length){
        const profit =  prices[sellIndex] - prices[buyIndex];
        if(profit > maxProfit){
           maxProfit = profit;
        }else if(profit < 0){
            buyIndex = sellIndex;
        }
        sellIndex++;
    }
    
    return maxProfit;
};