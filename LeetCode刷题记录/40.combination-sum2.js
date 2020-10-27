/*
    TAG ===> 回溯
    题目：
        给定一个无重复元素的数组 candidates 和一个目标数 target ，
        找出 candidates 中所有可以使数字和为 target 的组合。
        candidates 中的每个数字在每个组合中只能使用一次。
    说明：所有数字（包括目标数）都是正整数；解集不能包含重复的组合
    
    例如：
        输入：candidates = [10,1,2,7,6,1,5], target = 8,    
        输出：[
                [1, 7],
                [1, 2, 5],
                [2, 6],
                [1, 1, 6]
              ]
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function (candidates, target) {
    // 排序数组 为了去重
    candidates = candidates.sort((a, b) => a - b)
    const result = []
    helper(candidates, target, path = [], 0)
    return result

    // index表示指针在candidates的位置，防止path重复
    function helper(nums, target, path, index) {
        if (target < 0) return
        if (target === 0) {
            result.push(path.slice())
            path = []
            return
        }

        for (let i = index; i < nums.length; i++) {
            // 前后元素相同
            // i > index 保证了只对 当前树层的 重复元素 剪枝
            if (nums[i] === nums[i - 1] && i > index) {
                continue
            }
            path.push(nums[i])
            helper(nums, target - nums[i], path, i + 1)
            path.pop()
        }
    }
};
