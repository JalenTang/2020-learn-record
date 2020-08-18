/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
    if (!nums || nums.length === 0) return 0

    // dp[i] 代表以元素 nums[i] 为结尾的连续子数组最大和
    const dp = []
    dp[0] = nums[0]
    let res = nums[0]

    for (let i = 1; i < nums.length; i++) {
        if (dp[i - 1] > 0) {
            dp[i] = dp[i - 1] + nums[i]
        } else {
            dp[i] = nums[i]
        }
        res = Math.max(dp[i], res)
    }
    return res;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

console.log(maxSubArray(nums));