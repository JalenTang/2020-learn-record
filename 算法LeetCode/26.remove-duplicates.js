/* TAG ==> 双指针
    给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
    不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

    题目：nums = [1, 1, 2], 
        返回：2 nums = [1, 2]
    题目：nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
        返回：5 nums = [0, 1, 2, 3, 4]
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0

    var L = 0
    var R = 1
    while (R < nums.length) {
        // 思路：将不重复的数都移动到数组的左侧，并且用L标记位置
        if (nums[R] !== nums[L]) {
            L++
            nums[L] = nums[R]
        }

        R++
    }

    return L + 1
};
const nums = [1, 1, 2]
console.log(removeDuplicates(nums));
