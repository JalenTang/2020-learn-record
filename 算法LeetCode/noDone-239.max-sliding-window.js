/*  TAG ==> 滑动窗口
    给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
    你只可以看到在滑动窗口内的 k 个数字。
    滑动窗口每次只向右移动一位。
    返回滑动窗口中的最大值。

    输入：nums = [1,3,-1,-3,5,3,6,7]  k = 3 输出：[3,3,5,5,6,7] 
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
    const res = []
    let i = 0
    let j = k - 1
    let max = Math.max(...nums.slice(i, j + 1))
    res.push(max)

    while (j < nums.length) {
        i++
        j++
        max = Math.max(max, nums[j])
        res.push(max)
    }

    return res
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));