/* TAG ==> 双指针
    给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？
    请你找出所有满足条件且不重复的三元组。

    题目：nums = [-1, 0, 1, 2, -1, -4], 
    返回：[ [-1, 0, 1],[-1, -1, 2] ]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (!nums || nums.length < 3) return [];

    var res = [];

    // 升序
    nums.sort((a, b) => a - b);

    // 整体思路：固定一个位置，另外两个数 用双指针
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;

        // 去重
        if (i > 0 && nums[i] === nums[i - 1]) continue

        // 设置左右指针
        var L = i + 1;
        var R = nums.length - 1;

        while (L < R) {
            var sum = nums[i] + nums[L] + nums[R];
            if (sum === 0) {
                res.push([nums[i], nums[L], nums[R]]);
                L++
                R--
                // 去重
                while (L < R && nums[L] === nums[L - 1]) L++
                while (L < R && nums[R] === nums[R + 1]) R--
            } else if (sum > 0) {
                R--;
            } else if (sum < 0) {
                L++;
            }
        }
    }

    return res;
};
