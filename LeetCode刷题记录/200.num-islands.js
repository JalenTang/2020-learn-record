/*
    TAG ===> DFS
    给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
    岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。

    输入:
        [
        ['1','1','1','1','0'],
        ['1','1','0','1','0'],
        ['1','1','0','0','0'],
        ['0','0','0','0','0']
        ]
    输出: 1
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
	let count = 0;
	const dfs = (row, col) => {
        // 边界判断 + 非岛屿判断
		if (
			row < 0 ||
			row >= grid.length ||
			col < 0 ||
			col >= grid[0].length ||
			grid[row][col] === '0'
		) {
			return;
		}

        // 将遍历过的节点置为 “0”
        grid[row][col] = '0';
        
        // 递归遍历
		dfs(row - 1, col);
		dfs(row, col + 1);
		dfs(row + 1, col);
		dfs(row, col - 1);
	};

	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[0].length; col++) {
			if (grid[row][col] === '1') {
                count++;
                console.log(row, col, count);
				dfs(row, col);
			}
		}
	}

	return count;
};
