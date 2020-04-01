/* 二进制矩阵中的最短路径 shortest-path-in-binary-matrix */
/* 
    输入：[[0,1],[1,0]] 输出：2
    输入：[[0,0,0],[1,1,0],[1,1,0]] 输出 4
*/

const maze = [[0, 0, 0], [1, 1, 0], [1, 1, 0]]
const result = shortestPathBinaryMatrix(maze)

function shortestPathBinaryMatrix(maze) {
    // 迷宫点构造函数，
    class Point {
        // 参数: 横坐标，纵坐标，值, 前一个迷宫点
        constructor(x, y, prevPoint = null) {
            this.x = x
            this.y = y
            this.prevPoint = prevPoint
        }
    }

    if (maze == null || maze.length === 0 || maze[0].length === 0) {
        return -1
    }
    const row = maze.length
    const col = maze[0].length

    const visited = new Set();
    const dir = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
        [-1, -1],
        [-1, 1],
        [1, -1],
        [1, 1]
    ];
    const queue = []
    const nodes = []
    queue.push(new Point(0, 0))
    visited.add(new Point(0, 0))

    let step = 0

    while (queue.length > 0) {
        step++

        for (let len = queue.length - 1; len >= 0; len--) {
            const point = queue.shift()
            nodes.push(point)
            if (point.x === row && point.y === col) {
                return step
            }
            for (const [r, c] of dir) {
                const m = point.x + r
                const n = point.y + c
                if (
                    m < 0 ||
                    n < 0 ||
                    m > row ||
                    n > col ||
                    point.value === 1 ||
                    visited.has(new Point(m, n, point))
                ) {
                    continue
                }
                queue.push(new Point(m, n, point))
                visited.add(new Point(m, n, point))
            }
        }
    }

    return -1
}
