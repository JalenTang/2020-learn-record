/*
    TAG ===> dfs + 回溯
    给定一个 没有重复 数字的序列，返回其所有可能的全排列。
    输入: [1,2,3]
    输出: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2],[3,2,1] ]
*/
/**
 * 利用visited[]数组筛选元素 回溯
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
    const result = []
    const visited = new Set();
    helper(nums, visited, [])
    return result

    function helper(arr, visited, path) {
        if (path.length === nums.length) {
            result.push(path.slice())
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (visited.has(nums[i])) continue
            path.push(nums[i])
            visited.add(nums[i])
            helper(arr, visited, path)
            visited.delete(nums[i])
            path.pop()
        }
    }
};

/**
 * 利用slice删除元素来筛选元素 递归
 * @param {number} nums 
 * @return {number[][]}
 */
const permute = function (nums) {
    const result = []

    if (nums.length < 2) return [nums]

    for (let i = 0; i < nums.length; i++) {
        const start = nums[i]
        const remain = nums.slice(0, i).concat(nums.slice(i + 1, nums.length))

        for (const permutation of permute(remain)) {
            result.push([].concat(start).concat(permutation))
        }
    }

    return result;
};
