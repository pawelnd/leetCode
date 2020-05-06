/**
 * https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/578/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    nums.sort();
    let isDUplicate = false;
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] === nums[index + 1]) {
            isDUplicate = true;
            break;
        }

    }
    return isDUplicate
};


console.log(containsDuplicate([1, 2, 3, 1]))