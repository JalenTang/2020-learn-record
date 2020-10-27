/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
    if (nums.length === 0) return 0
    // dp[i] 表示第i个元素结尾的最长上升子序列长度
    const dp = []
    dp[0] = 1

    for (let i = 1; i < nums.length; i++) {
        // 计算每一轮的dp
        let max = 0
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                max = Math.max(dp[j], max)
            }
        }
        dp[i] = max + 1
    }

    return Math.max(...dp)
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));