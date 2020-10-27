/*
    TAG ===> 滑动窗口 双指针
    题目：给定一个含有 n 个正整数的数组和一个正整数s，找出该数组中满足其和≥ s的长度最小的连续子数组，并返回其长度。
        如果不存在符合条件的子数组，返回 0。

    例如：
        输入：s = 7, nums = [2,3,1,2,4,3]
        输出：2
*/

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function (s, nums) {
    if (nums.length === 0) return 0

    let result = +Infinity
    let start = 0
    let end = 0
    let sum = 0

    while (end < nums.length) {
        sum += nums[end]

        while (sum >= s) {
            result = Math.min(end - start + 1, result)
            sum -= nums[start]
            start++
        }

        end++
    }

    return result === +Infinity ? 0 : result
};
