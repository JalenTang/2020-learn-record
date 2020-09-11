/*
    TAG ===> 回溯
    题目：
        给定一个无重复元素的数组 candidates 和一个目标数 target ，
        找出 candidates 中所有可以使数字和为 target 的组合。
        candidates 中的数字可以无限制重复被选取。
    说明：所有数字（包括目标数）都是正整数；解集不能包含重复的组合

    例如：
        输入：candidates = [2,3,6,7], target = 7    
        输出：[ [7], [2,2,3] ]
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
    const result = []
    helper(candidates, target, path = [], 0)
    return result

    // index表示指针在candidates的位置，防止path重复
    function helper(nums, target, path, index) {
        if (target < 0) return
        if (target === 0) {
            result.push(path.slice())
            return
        }

        for (let i = index; i < nums.length; i++) {
            path.push(nums[i])
            helper(nums, target - nums[i], path, i)
            path.pop()
        }
    }
};

console.log(combinationSum([2, 3, 5], 8))
