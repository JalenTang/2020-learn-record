/* 70. 爬楼梯 Climbing Stairs */
/* https://leetcode-cn.com/problems/climbing-stairs/ */

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
    // 定义一个状态
    const dp = []

    // 定义初始值
    dp[0] = 0
    dp[1] = 1
    dp[2] = 2

    // 定义状态转移方程
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }

    return dp[n]
};
