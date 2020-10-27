/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
	// const arr = [];
	// dp[i] 表示以第i个元素结尾的连续子序列的最大和
	const dp = [nums[0]];
	let max = nums[0];

	for (let i = 1; i < nums.length; i++) {
        dp[i] = nums[i] + Math.max(dp[i - 1], 0);
        max = Math.max(max, dp[i]);
	}

	return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
