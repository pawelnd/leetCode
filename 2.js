/**
 * 
 * https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/564/
 * 
 * 
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    return calculateTransaction(prices);

};

function calculateTransaction(prices) {
    let maxProfit = 0;
    for (let buy = 0; buy < prices.length; buy++) {
        for (let sell = buy + 1; sell < prices.length; sell++) {
            const profitForTransaction = prices[sell] - prices[buy];
            const profitForRest = calculateTransaction(prices.slice(sell + 1));
            if (maxProfit < profitForTransaction + profitForRest) {
                maxProfit = profitForTransaction + profitForRest;
            }
        }
    }
    return maxProfit;
}

// const prices = [1, 2];
const prices = [7, 1, 5, 3, 6, 4];
// const prices = [7, 1, 5, 1, 12, 4];

console.log(maxProfit(prices));

