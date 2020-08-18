/*
    TAG ===> dfs + 回溯
    给定一个 没有重复 数字的序列，返回其所有可能的全排列。
    输入: [1,2,3]
    输出: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2],[3,2,1] ]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function dfs(nums, list, result, visited) {
    if (list.length === nums.length) {
        result.push(list.slice())
        return
    }

    for (let i = 0; i < nums.length; i++) {
        if (visited[i] === 0) {
            list.push(nums[i])
            visited[i] = 1
            dfs(nums, list, result, visited)
            visited[i] = 0
            list.pop()
        }
    }
}

const permute = function (nums) {
    const result = []
    const list = []
    const visited = Array(nums.length).fill(0)

    dfs(nums, list, result, visited)
    return result
};
