/*
    TAG ===> 回溯
    题目:给定一个可包含重复数字的序列，返回所有不重复的全排列。
    例如:
        输入: [1,1,2]
        输出:[
                [1,1,2],
                [1,2,1],
                [2,1,1]
            ]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function (nums) {
    nums = nums.sort((a, b) => a - b)
    const result = []
    const map = new Set();
    helper(nums, map, [], 0)
    return result

    function helper(arr, visited, path, index) {
        if (path.length === arr.length) {
            result.push(path.slice())
            return
        }

        for (let i = index; i < arr.length; i++) {
            if (visited.has(`${arr[i]}-${i}`)) continue
            path.push(arr[i])
            visited.add(`${arr[i]}-${i}`)
            helper(arr, visited, path, i + 1)
            visited.delete(`${arr[i]}-${i}`)
            path.pop()
        }
    }
};

console.log(permuteUnique([1, 1, 2]));