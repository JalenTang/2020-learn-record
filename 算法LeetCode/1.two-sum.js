/* TAG ==> 双指针
    给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，
    你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

    题目：nums = [2, 7, 11, 15], target = 9  
    返回：[2, 7]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var res = [];
    // 排序
    nums.sort((a, b) => a - b);

    // 定义左右指针
    var L = 0;
    var R = nums.length - 1;

    while (L < R) {
        var sum = nums[L] + nums[R];

        if (sum === target) {
            res.push(...[nums[L], nums[R]]);
            break;
        } else if (sum > target) {
            R--;
        } else if (sum < target) {
            L++;
        }
    }

    return res;
};
