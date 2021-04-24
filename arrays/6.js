
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const set2 = new Set(nums2);
    return Array.from(new Set([...nums1].filter(x => set2.has(x))));
};

let nums1 = [1, 2, 2, 1], nums2 = [2, 2];
console.log(intersect(nums1, nums2));
