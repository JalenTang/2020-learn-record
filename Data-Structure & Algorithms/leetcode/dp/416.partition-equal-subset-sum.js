/* 416. 分割等和子集 Partition Equal Subset Sum */
/* https://leetcode-cn.com/problems/partition-equal-subset-sum/ */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = function (nums) {
    if (nums.length <= 1) return false

    const total = nums.reduce((prev, curr) => prev + curr)
    if (total % 2 !== 0) return false // 总和不是偶数 直接返回

    const dp = []
    const len = nums.length
    const half = total / 2
    /*
        本质是0-1背包问题，nums种的每个元素相当于物品的价值，物品的重量都是1，背包总承重为nums.length，求背包的价值能否为一半总价值
        定义状态：对于每个元素，都有选择和不选择2种情况；dp[i][j]表示从[0, i]元素选取一些数能组成j，能为true, 不能为false
        定义状态转移方程：
        dp[i][j] = dp[i-1][j] or dp[i-1][j-nums[i]]
        边界：dp[1...i][0] = dp[0,1][1...j] = false
    */

    const base = Array(half + 1).fill(false)
    dp.push(base)

    for (let i = 1; i < len; i++) {
        dp.push([false])
        for (let j = 0; j < half + 1; j++) {
            if (j === 0) {
                dp[i][j] = false
            } else if (j === nums[i]) {
                dp[i][j] = true
            } else if (j > nums[i]) {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]]
            } else {
                dp[i][j] = dp[i - 1][j]
            }
            i === 1 && j === 1 && console.log(dp);
        }
    }

    return dp[len - 1][half]
};

canPartition([1, 1, 2, 2]);


