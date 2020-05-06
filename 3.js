/**
 * https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/646/
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    const end = nums.slice(nums.length - k, nums.length);
    const begin = nums.slice(0, nums.length - k);

    nums.splice(0, nums.length);
    [...end, ...begin].forEach(element => {
        nums.push(element)
    });
};

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let k = 14;
rotate(nums, k);
console.log(nums);
