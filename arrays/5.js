/**
 * https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/549/
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    var tmp = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (!tmp[num]) {
            tmp[num] = 1;
        } else if (tmp[num]) {
            tmp[num]++;
        }
    }
    return Object.keys(tmp).find(key => {
        return tmp[key] === 1 ? key : false
    });
};

singleNumber([2, 2, 1])