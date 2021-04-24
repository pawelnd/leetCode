/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length <= 1) { return; }
    for (let index = 1; index <= nums.length; index++) {
        const previous = nums[index - 1]
        const current = nums[index]

        if (previous === current) {
            nums.splice(index--, 1)
        }

    }

};

