/**
 * https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/549/
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    var tmp = {};
    for (let i = 0; i < nums.length; i++) {
        if (!tmp[i]) {
            tmp[i] = 1;
        } if (tmp[i]) {
            tmp[i]++;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (!tmp[i]) {
            tmp[i] = 1;
        } if (tmp[i]) {
            tmp[i]++;
        }
    }
    return Object.values(tmp).find(x => x > 1);
};