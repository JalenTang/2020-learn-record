/*
    TAG ===> DP
    题目：给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
    说明：每次只能向下或者向右移动一步。

    输入：[
            [1,3,1],
            [1,5,1],
            [4,2,1]
          ]
    输出: 7 
    解释：路径 1→3→1→1→1 的总和最小
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function (grid) {
	const row = grid.length;
	const col = grid[0].length;

	// dp[i][j] 表示到达第i行第j列的路径的数字最小和
	// dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
	const dp = [];
	for (let i = 0; i < row; i++) {
		dp.push(Array(col).fill(0));
	}

	const path = [];
	path.push(grid[0][0]);

	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			if (i === 0 && j === 0) {
				dp[i][j] = grid[0][0];
			} else if (i === 0) {
				dp[i][j] = dp[0][j - 1] + grid[i][j];
			} else if (j === 0) {
				dp[i][j] = dp[i - 1][0] + grid[i][j];
			} else {
				dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
				path.push(grid[i][j]);
			}
		}
	}
	console.log(path);
	return dp[row - 1][col - 1];
};

const grid = [
	[1, 3, 1],
	[1, 5, 1],
	[4, 2, 1],
];

console.log(minPathSum(grid));
