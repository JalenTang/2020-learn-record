/*
    TAG ===> 岛屿问题
    给定一个包含 0 和 1 的二维网格地图，其中 1 表示陆地 0 表示水域。

    网格中的格子水平和垂直方向相连（对角线方向不相连）。
    整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。

    岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。
    格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。
    计算这个岛屿的周长。

    输入:
        [[0,1,0,0],
        [1,1,1,0],
        [0,1,0,0],
        [1,1,0,0]]
    输出: 16
*/

/** 方法一 简单遍历
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = function (grid) {
	let land = 0;
	let overlap = 0;

	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[row].length; col++) {
			if (grid[row][col] === 1) {
				// 岛屿数量加一
				land++;
				// 判断右侧
				if (
					col + 1 < grid[row].length &&
					grid[row][col] === grid[row][col + 1]
				) {
					overlap++;
				}
				// 判断下侧
				if (row + 1 < grid.length && grid[row][col] === grid[row + 1][col]) {
					overlap++;
				}
			}
		}
	}

	return land * 4 - overlap * 2;
};

/** 方法二 DFS
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = function (grid) {
	let count = 0;
	let repeat = 0;

	const dfs = (row, col) => {
		if (
			row < 0 ||
			row >= grid.length ||
			col < 0 ||
			col >= grid[0].length ||
			grid[row][col] === 0
		) {
			return;
		}

		count++;

		const up = row - 1 >= 0 ? grid[row - 1][col] : 0;
		const right = col + 1 < grid[0].length ? grid[row][col + 1] : 0;
		const down = row + 1 < grid.length ? grid[row + 1][col] : 0;
		const left = col - 1 >= 0 ? grid[row][col - 1] : 0;

		up === 1 && repeat++;
		right === 1 && repeat++;
		down === 1 && repeat++;
		left === 1 && repeat++;

		grid[row][col] = 0;

		dfs(row - 1, col);
		dfs(row, col + 1);
		dfs(row + 1, col);
		dfs(row, col - 1);
	};

	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[0].length; col++) {
			if (grid[row][col] === 1) {
				dfs(row, col);
			}
		}
	}

	return count * 4 - repeat * 2;
};
